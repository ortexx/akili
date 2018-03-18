/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.5.7
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
  delete this.__components[selector];
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
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  var _this7 = this;

  this.__root = root || document.body;

  if (root === document.documentElement) {
    throw new Error('"html" can\'t be the root element');
  }

  if (window.AKILI_SERVER) {
    var html = window.AKILI_SERVER.html;

    if (this.__root === document.body) {
      for (var i = this.__root.attributes.length - 1; i >= 0; i--) {
        this.__root.removeAttribute(this.__root.attributes[i].name);
      }

      var parser = new DOMParser();
      var doc = parser.parseFromString(html, "text/html");
      var body = doc.querySelector('body');
      this.__root.innerHTML = html;

      for (var _i2 = body.attributes.length - 1; _i2 >= 0; _i2--) {
        var attr = body.attributes[_i2];
        this.__root.setAttribute(attr.name, attr.value);
      }
    } else {
      var parent = this.__root.parentNode;
      var _index = [].slice.call(parent.children).indexOf(this.__root);
      this.__root.outerHTML = html;
      this.__root = parent.children[_index];
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

      this.el.__akili = this;
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
          throw err;
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

        if (options.headers) {
          for (var k in options.headers) {
            if (!options.headers.hasOwnProperty(k)) {
              continue;
            }

            xhr.setRequestHeader(k, options.headers[k]);
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
    return _this;
  }

  _createClass(Text, [{
    key: 'compiled',
    value: function compiled() {
      this.attr('focus', this.setFocus);
      this.attr('value', this.setValue);
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
      this.isFor && _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'created', this).apply(this, arguments);
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
  }, {
    key: '__utils',
    get: function get() {
      return _utils2.default;
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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: true };
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
    // eslint-disable-next-line no-console
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
    _this.debounceInterval = 500;
    _this.debounceTimeout = null;
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
      } else {
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
      this.attr('debounce', this.setDebounce);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'resolved', this).apply(this, arguments);
    }
  }, {
    key: 'removed',
    value: function removed() {
      this.debounceTimeout && clearTimeout(this.debounceTimeout);
    }
  }, {
    key: 'setDebounce',
    value: function setDebounce(interval) {
      this.debounceInterval = interval;
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
Input.events = ['change', 'debounce'];
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
      var _this3 = this;

      this.attr('in', function () {
        return _this3.setNames(_this3.attrs.name);
      });
      this.attr('value', this.setValue);
      this.attr('name', this.setNames, { callOnStart: false });
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
      return this.attr('url', this.getTemplate);
    }
  }, {
    key: 'setCache',
    value: function setCache(cache) {
      this.cache = cache;
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate(url) {
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
      this.attr('reload', this.setReload);
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
A.booleanAttributes = ['reload'];
exports.default = A;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzQ5NGE1MzA3YmU3ZGI1M2Q0NGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwic2V0RGVmYXVsdHMiLCJvcHRpb25zIiwiZGVidWciLCJnbG9iYWxzIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX19vbkVycm9yIiwidHJpZ2dlckluaXQiLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJjb21wb25lbnRzIiwic2VydmljZXMiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsInV0aWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiZGVmaW5lIiwiZXJyb3JIYW5kbGluZyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiY2xlYXJHbG9iYWxzIiwia2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5Iiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInB1c2giLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJmbiIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwiaSIsImwiLCJsZW5ndGgiLCJwcm9wIiwiaXNEZWxldGVkIiwiY29tcG9uZW50IiwiX19ldmFsdWF0ZUJ5S2V5cyIsInVuZGVmaW5lZCIsIl9fc2V0IiwiZ2V0UHJvcGVydHlCeUtleXMiLCJfX3Njb3BlIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ1bmlzb2xhdGUiLCJpc29sYXRpb24iLCJuZXh0VGljayIsInJlc29sdmUiLCJ0aGVuIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiX19jYW5jZWxsZWQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwicCIsIl9fY29tcGlsZSIsImFsbCIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJhbGlhcyIsInVucmVnaXN0ZXJBbGlhcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiY29uc3RydWN0b3IiLCJjYXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImlzQXJyYXkiLCJudW0iLCJpbmRleCIsImNhbGxiYWNrIiwiaXNvbGF0ZUZ1bmN0aW9uIiwiY29udGV4dCIsIm9GbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsInZhbHVlIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImh0bWwiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnQiLCJpbmRleE9mIiwib3V0ZXJIVE1MIiwiQUtJTElfQ0xJRU5UIiwiY2hhbmdlU3RhdGUiLCJlcnIiLCJkZWluaXQiLCJzdG9yZUtleXMiLCJfX3RhcmdldCIsImNsYXNzIiwib2JqIiwiY2xhc3NlcyIsInZhbCIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJvcGVuIiwiZmlsdGVyIiwiaGFuZGxlciIsIm1hdGNoIiwiaXRlbSIsImZpbHRlcmVkIiwiYyIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwicmV2ZXJzZSIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJpc1Njb3BlUHJveHkiLCJpc1BsYWluT2JqZWN0IiwiY29weSIsIm5lc3RlZCIsIm5ld09iaiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwibWFrZUF0dHJpYnV0ZVZhbHVlIiwiY29tcGFyZSIsImNsZWFyVW5kZWZpbmVkIiwiaWdub3JlVW5kZWZpbmVkIiwiYUtleXMiLCJiS2V5cyIsImNvbXBhcmVQcmV2aW91c1ZhbHVlIiwiY3VycmVudCIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwidG9DYW1lbENhc2UiLCJtIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhc1Byb3BlcnR5QnlLZXlzIiwiaGFzIiwic2V0UHJvcGVydHlCeUtleXMiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCIsInRhcmdldCIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJ1cmxBdHRyaWJ1dGUiLCJzZXRVcmwiLCJ1cmwiLCJhdHRycyIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJleHByZXNzaW9uIiwidmFycyIsInRyaW0iLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19pc1Jlc29sdmVkIiwiX19wcmV2ZW50IiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRlUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsIm5vZGVWYWx1ZSIsIl9fZXZhbHVhdGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsImNhY2hlIiwidGVtcGxhdGVDYWNoZSIsIl9fY29udGVudCIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJzYXZlQXR0cmlidXRlUHJveHlJbiIsIl9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0Iiwic2F2ZUF0dHJpYnV0ZVByb3h5T3V0IiwiX19uZXN0ZWRPYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2NvbXBvbmVudCIsImNvbSIsIl9fZXhwcmVzc2lvbiIsIkF0dHIiLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImhhc2giLCJfX2NyZWF0ZUtleXNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsInJlYWxDb21wb25lbnQiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJfX2VuYWJsZUtleXMiLCJ1bmJpbmQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJyZWFsVGFyZ2V0IiwiZXhjQXJyIiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50Iiwia2V5U3RyaW5nIiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsImluZm8iLCJjYWxsT25TdGFydCIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJDSEVDS19QUk9YWSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbktleSIsInVwZGF0ZWRBdCIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJub2RlcyIsIl9fY2xlYXJFbXB0eUJpbmRpbmdzIiwiY2xlYXIiLCJfX3JlbW92ZSIsIl9fY2xlYXJTdG9yZUxpbmtzIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZCIsImZpbmRBbGwiLCJsZXZlbHMiLCJsZXZlbCIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsIl9fc3RvcmVCeUZ1bmN0aW9uIiwiX19zdG9yZUJ5S2V5cyIsIl9fYXR0ckJ5RnVuY3Rpb24iLCJfX2F0dHJCeUtleXMiLCJfX3Vuc3RvcmVCeUZ1bmN0aW9uIiwiX191bnN0b3JlQnlLZXlzIiwiX191bmF0dHJCeUZ1bmN0aW9uIiwiX191bmF0dHJCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwiX19jYWNoZSIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJtZXRob2QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImJlZm9yZSIsInRyYW5zZm9ybUJlZm9yZSIsIm9uU3RhcnQiLCJoZWFkZXJzIiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsIm5vdyIsImNyZWF0ZWRBdCIsInJlbW92ZUNhY2hlIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsInNldFJlcXVlc3RIZWFkZXIiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwiY2hhciIsImNoYXJDb2RlQXQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsIl9faW5zdGFuY2VzIiwiYWRkSW5zdGFuY2UiLCJpbnN0YW5jZSIsInJlbW92ZUluc3RhbmNlIiwidmFsdWVLZXkiLCJzZXRGb2N1cyIsInNldFZhbHVlIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJmb2N1cyIsImJsdXIiLCJMb29wIiwiX19pdGVyYXRvciIsIl9fa2V5IiwiX192YWx1ZSIsIl9faW5kZXgiLCJfX2NvbXBhcmlzb25WYWx1ZSIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJtYXNrIiwibmV4dFNpYmxpbmciLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsImRhdGFDaGFuZ2VkIiwiaXRlcmF0b3IiLCJjQ29weSIsImNvbXBhcnNpb24iLCJjaGFuZ2VkIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJsb29wIiwiaXRlcmF0ZSIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19lbCIsInN0cmljdCIsImVsQ29tcG9uZW50IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJleGlzdHMiLCJsb2FkZWQiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZXJyb3IiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJmIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2lzb2xhdGVkIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsInRpdGxlIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0UmVjcmVhdGlvbiIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVzdWx0Iiwic2V0QWN0aXZpdHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJkZWJvdW5jZUludGVydmFsIiwiZGVib3VuY2VUaW1lb3V0Iiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJjbGVhclRpbWVvdXQiLCJvbkRlYm91bmNlIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInByZXZDaGVja2VkIiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiZ2V0VGVtcGxhdGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJPYmplY3RzIiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3RhdGVDaGFuZ2VkIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInNldFJlbG9hZCIsInJlc2V0SHJlZiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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V2lkLElBQVgsR0FBa0IsS0FBS2xkLEdBQXZCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0MsS0FBTCxDQUFXaWQsSUFBWCxHQUFrQixpQkFBTzNILGNBQVAsQ0FBc0IsS0FBS3RCLEtBQTNCLEVBQWtDLEtBQUt4RixNQUF2QyxFQUErQyxLQUFLOEIsS0FBcEQsRUFBMkQsS0FBS3ZLLElBQWhFLENBQWxCO0FBQ0Q7QUFDRjs7Ozs7O0FBM0hrQjVWLEMsQ0FDWndHLE8sR0FBVSx1QztBQURFeEcsQyxDQUVad1QsaUIsR0FBb0IsSTtBQUZSeFQsQyxDQUdaZ1UsaUIsR0FBb0IsQ0FBQyxRQUFELEM7a0JBSFJoVSxDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzQ5NGE1MzA3YmU3ZGI1M2Q0NGMiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IEFraWxpID0ge307XG5cbi8qKlxuICogU2V0IHRoZSBmYXJtZXdvcmsncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5Ba2lsaS5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGRlYnVnOiB0cnVlLFxuICAgIGdsb2JhbHM6IHt9XG4gIH07XG4gIFxuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19jbGVhcmVkID0gZmFsc2U7XG4gIHRoaXMuX19jb21wb25lbnRzID0ge307XG4gIHRoaXMuX19hbGlhc2VzID0ge307XG4gIHRoaXMuX19zY29wZXMgPSB7fTtcbiAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgdGhpcy5fX3dpbmRvdyA9IHt9O1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICB0aGlzLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICBcbiAgdGhpcy5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG4gIF07XG5cbiAgdGhpcy5jb21wb25lbnRzID0ge307XG4gIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgdGhpcy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gIHRoaXMuU2NvcGUgPSBTY29wZTtcbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuICB0aGlzLmNvbXBvbmVudHMuQSA9IEE7XG4gIHRoaXMuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG4gIHRoaXMuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG4gIHRoaXMuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuICB0aGlzLmNvbXBvbmVudHMuSWYgPSBJZjtcbiAgdGhpcy5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuICB0aGlzLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbiAgdGhpcy5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbiAgdGhpcy5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG4gIHRoaXMuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuICB0aGlzLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbiAgdGhpcy5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG4gIHRoaXMuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG4gIHRoaXMuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbiAgdGhpcy5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG4gIHRoaXMuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuICB0aGlzLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuICB0aGlzLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbiAgdGhpcy5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgdGhpcy5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuICB0aGlzLmRlZmluZSgpO1xuICB0aGlzLmVycm9ySGFuZGxpbmcoKTtcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xufVxuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24oKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbihrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICBpZiAodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8SFRNTEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG5cbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24oZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgKHN0cikgPT4ge1xuICAgIHJldHVybiAhIXRoaXMuX19zY29wZXNbc3RyXTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZnVuY3Rpb24uXG4gKiBFdmVyeSBzY29wZSB2YXJpYWJsZSBjaGFuZ2UgY2FsbHMgYWNjb3JkaW5nIG5vZGUgZXZhbHVhdGlvbi5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgY2hhbmdlIHNvbWUgc2NvcGUgdmFyaWFibGUgaW4gdGhlIGxvb3AgLSBldmFsdWF0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBlYWNoIGNoYW5nZS5cbiAqIEl0IG1heSBiZSBzbG93IGZvciB0aGUgYXBwbGljYXRpb24uXG4gKiBZb3UgY2FuIGlzb2xhdGUgdGhpcyBhY3Rpb24gYW5kIHJ1biBhbGwgZXZhbHVhdGlvbiBwcm9jZXNzIGFmdGVyIHBhc3NlZCBmdW5jdGlvbiBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG4gIFxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZiAocHJvcC5pc0RlbGV0ZWQpIHtcbiAgICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFxuICAgIHByb3AuY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKSk7XG4gIH1cblxuICBwcm9wcyA9IG51bGw7XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzKSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZSgpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pO1xuXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24ocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG4gIFxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1ZykgeyAgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkudW5yZWdpc3RlckFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSBQcm9taXNlO1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3Rvcik7XG4gIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50ID0geyBwcm90b3R5cGU6IHt9IH07XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZiAobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfG51bWJlcltdfHN0cmluZ1tdfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmlzb2xhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0ID0gbnVsbCkge1xuICBpZiAoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGxldCBvRm4gPSBmdW5jdGlvbigpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzO1xuXG4gICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9GbiwgJ19fYWtpbGknLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuXG4gIHJldHVybiBvRm47XG59O1xuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHtcbiAgICBsZXQgaHRtbCA9IHdpbmRvdy5BS0lMSV9TRVJWRVIuaHRtbDtcblxuICAgIGlmKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy5fX3Jvb3QuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICBsZXQgYm9keSA9IGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKGxldCBpID0gYm9keS5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBhdHRyID0gYm9keS5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICB0aGlzLl9fcm9vdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICAgIH0gICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcGFyZW50ID0gdGhpcy5fX3Jvb3QucGFyZW50Tm9kZTtcbiAgICAgIGxldCBpbmRleCA9IFtdLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKS5pbmRleE9mKHRoaXMuX19yb290KTsgICAgXG4gICAgICB0aGlzLl9fcm9vdC5vdXRlckhUTUwgPSBodG1sO1xuICAgICAgdGhpcy5fX3Jvb3QgPSBwYXJlbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UID0ge1xuICAgICAgaHRtbDogdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogU3BsaXQgdGhlIHN0cmluZ1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbXCJIZWxsb1wiLCBcIldvcmxkXCJdXG4gKiB1dGlscy5zcGxpdChcIkhlbGxvIFdvcmxkXCIsIFwiIFwiKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyd4ID0gNScsICcgeSA9IFwiMTsyOzNcIiddXG4gKiB1dGlscy5zcGxpdCgneCA9IDU7IHkgPSBcIjE7MjszXCInLCBcIjtcIiwgWydcIiddKTtcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdHIgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlbF1cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtleGNsdWRlXSBcbiAqL1xudXRpbHMuc3BsaXQgPSBmdW5jdGlvbihzdHIsIGRlbCA9ICcnLCBleGNsdWRlID0gW10pIHtcblx0Y29uc3QgZXhwcyA9IFtdOyAgICAgXG4gIGxldCBsYXN0ID0gJyc7XG5cbiAgaWYoIWRlbCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xuICB9XG4gIGVsc2UgaWYoZGVsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWwpO1xuICB9XG4gIGVsc2UgaWYoc3RyLmluZGV4T2YoZGVsKSA9PSAtMSkge1xuICAgIGxhc3QgPSBzdHI7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gZXhjbHVkZS5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IGV4Y2x1ZGVbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSBkZWwgJiYgIW9wZW4pIHtcbiAgICAgICAgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG4gIH1cblxuICBsYXN0ICYmIGV4cHMucHVzaChsYXN0KTtcbiAgcmV0dXJuIGV4cHM7XG59XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgJ3gnKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbWyd4J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dLCAnMScsIFtbJ3gnLCAneSddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dIFxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgW1sneCddLCBbJ3knXV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IG51bGwpIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmIChrZXlzICYmICFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBzdHIgPSBoYW5kbGVyPyAoaGFuZGxlciArICcnKS50b0xvd2VyQ2FzZSgpOiAnJztcbiAgICBoYW5kbGVyID0gdmFsID0+ICh2YWw/ICh2YWwgKyAnJykudG9Mb3dlckNhc2UoKTogJycpLm1hdGNoKHN0cik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCFrZXlzICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihrZXlzKSB7XG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICAgIGtleSA9IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgICAgbGV0IHZhbCA9IGtleT8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGl0ZW0pOiBpdGVtO1xuICAgIFxuICAgICAgICBpZiAoaGFuZGxlcih2YWwpKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCB0aGUgcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgb3B0aW9ucykge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGN1cnJlbnQsIHByZXZpb3VzQ29weSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50ID0gb1trXSA9IGZuKGkgPT0gbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcbiAgICAgICghZm4gfHwgZm4odmFsdWUpKSAmJiAoZGVsZXRlIG9ba10pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VybC5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5leHBvcnQgY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eU91dCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFtnbG9iYWxzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGdsb2JhbHMgPSB7fSkge1xuICAgIGdsb2JhbHMgPSB7IHV0aWxzLCAuLi5Ba2lsaS5vcHRpb25zLmdsb2JhbHMsIC4uLmdsb2JhbHN9O1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24udHJpbSgpLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IobGV0IGtleSBpbiBnbG9iYWxzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaChnbG9iYWxzW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZSgpIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSB0aGlzLl9fZXZhbHVhdGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX19pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHtcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTtcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlJbiA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5SW47XG4gICAgdGhpcy5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5T3V0O1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGlmKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gICBcblxuICAgICAgICBsZXQgYmluZCA9IGRhdGEuY29tcG9uZW50Ll9fZ2V0Qm91bmROb2RlKGRhdGEua2V5cywgbm9kZSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEua2V5cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgaWYgKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSwgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoY291bnRlcikge1xuICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICBsZXQgY2FtZWxBdHRyaWJ1dGUgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG5cbiAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH0gICAgICAgICAgXG5cbiAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgICAgICAhY29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gJiYgKHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSkpO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW2NhbWVsQXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzTW91bnRlZCkge1xuICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTsgICAgXG4gICAgXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGEgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107IFxuIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkgeyAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhwcm9wLmtleXMpO1xuICAgICAgICAgICAgbGV0IGNoZWNrUHJvcCA9IGNvbXBvbmVudC5fX2dldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIHByb3Aua2V5cyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjaGVja1Byb3AgJiYgY2hlY2tQcm9wLmV2YWx1YXRlZCAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQocHJvcC5rZXlzLCBwcm9wLnZhbHVlLCBmYWxzZSwgdHJ1ZSk7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhwcm9wLmtleXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfSAgXG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7ICAgICBcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuICAgICAgICBcbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyBldmVudDogZSB9KTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBpZiAoY2hlY2s/IHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSk6IHRydWUpIHsgICAgICBcbiAgICAgIGxldCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnO1xuICAgICAgbGV0IHJlcyA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgICAgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYgKHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCk7XG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmIChldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZiAobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIGNvbXBvbmVudC5fX2V2YWx1YXRlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXTtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pO1xuICAgICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZSkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG5cbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4geyBcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsZXQgcmVhbFRhcmdldCAgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG5cbiAgICAgICAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3QocmVhbFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJlYWxUYXJnZXRba2V5XSA9IEFraWxpLmlzb2xhdGVGdW5jdGlvbihyZWFsVGFyZ2V0W2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHsgIFxuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBldmFsdWF0ZWQgPSAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTsgXG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgICAgbGV0IGV4Y0FyciA9IGtleXMuc2xpY2UoKTtcblxuICAgICAgICAgIGlmKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykgeyBcbiAgICAgICAgICAgICAgY29uc3QgZm9yRGF0YSA9IGZvclBhcmVudHNbaV0uZGF0YTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGV4Y0FyciwgY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvcihsZXQgayBpbiB0YXJnZXRQYXJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHsgXG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHlba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVQcm94eVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0Rpc2FibGVtZW50KGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rpc2FibGVQcm94eS5fX2FsbD8gdHJ1ZTogdGhpcy5fX2Rpc2FibGVQcm94eVt0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIFxuICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5TmFtZShsaW5rLm5hbWUsIHZhbHVlKTtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkgeyAgXG4gICAgc3RvcmUuX190YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcblxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICBpZihjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICAgICBcbiAgICB9ICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHN0b3JlW25hbWVdKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBpbmZvO1xuXG4gICAgaWYoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiB9KTtcblxuICAgIGlmKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3Igc3RvcmUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG4gICAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbcmVzLm5hbWVdO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGsgPSBsaW5rcy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICBsZXQgbGluayA9IGxpbmtzW2tdO1xuXG4gICAgICAgIGlmKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcblxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgICBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcbiAgICAgIGxpbmsuZm4/IEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUpKTogdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgXG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7IFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7ICBcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7ICBcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZCBcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX2F0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgICAgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4gfSk7XG4gICAgXG4gICAgaWYoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrIGluIHRhcmdldCkgeyAgICAgICAgXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTsgIFxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5czoga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LCAgICAgIFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgICAgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1toYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBjb25zdCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyU3RvcmVMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rcztcblxuICAgIGZvcihsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBjb25zdCBhcnIgPSBsaW5rc1trZXldO1xuXG4gICAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmKGxpbmsuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgbGlua3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmVhcmVzdCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyaWdodD1mYWxzZV0gLSBmcm9tIHRoZSByaWdodCBzaWRlIGlmIHRydWVcbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROZWFyKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCByaWdodCA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB0byB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHdpdGggdGhlIGF0dHJpYnV0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBhdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bnN0b3JlQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fdW5zdG9yZUJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5hdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYWxlIHRoZSBjb21wb25lbnQsIGJ1dCBjYW5jZWwgdGhlIGNvbXBpbGF0aW9uIGluc2lkZSBvZiBpdFxuICAgKi9cbiAgcHJldmVudCgpIHtcbiAgICB0aGlzLl9fcHJldmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgX19jYWNoZSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yc1BhdHRlcm46IC9eKFteMjNdKXw0MDQvLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9OyBcbiAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsOyAgXG4gICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgXG4gICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpO1xuICAgICAgeGhyID0gYmVmb3JlLnhocjtcbiAgICAgIG9wdGlvbnMgPSBiZWZvcmUub3B0aW9ucztcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpOyAgXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBcbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgIHN0ciAmJiAob3B0aW9ucy51cmwgKz0gXCI/XCIgKyBzdHIpO1xuICAgICAgfVxuICAgICAgICAgICBcbiAgICAgIGxldCBoYXNoID0gbnVsbDtcbiAgICAgIGxldCBjYWNoZSA9IHR5cGVvZiBvcHRpb25zLmNhY2hlID09ICdmdW5jdGlvbic/IG9wdGlvbnMuY2FjaGUob3B0aW9ucyk6IG9wdGlvbnMuY2FjaGU7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCwgXG4gICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXIsIFxuICAgICAgICAgIHBhc3N3b3JkOiBvcHRpb25zLnBhc3N3b3JkLCBcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNhY2hlICYmIGhhc2gpIHsgICAgICAgIFxuICAgICAgICBsZXQgX2NhY2hlID0gdGhpcy5nZXRDYWNoZShoYXNoKTtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKF9jYWNoZSAmJiBub3cgLSBfY2FjaGUuY3JlYXRlZEF0IDw9IGNhY2hlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoX2NhY2hlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoX2NhY2hlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVDYWNoZShoYXNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgZm9yIChsZXQgayBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcih4aHIpO1xuXG4gICAgICAgIGlmICgoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgY2FjaGUgJiYgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3BvbnNlKTsgICAgICAgIFxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUoaGFzaCkge1xuICAgIHJldHVybiB0aGlzLl9fY2FjaGVbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBjcmVhdGVDYWNoZShoYXNoLCBkYXRhKSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyBkYXRhLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgcmVtb3ZlQ2FjaGUoaGFzaCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fY2FjaGVbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgaGFzaCB0byBzYXZlIGluIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZUNhY2hlSGFzaChkYXRhKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCAgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgICAgICBoYXNoID0gaGFzaCAmIGhhc2g7IFxuICAgIH1cblxuICAgIHJldHVybiBoYXNoICsgJyc7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdXG4gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0cnVlOyAgXG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2tleSA9IG51bGw7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4LCBkYXRhQ2hhbmdlZCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7ICAgIFxuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07XG4gICAgICBsZXQgY0NvcHkgPSBpdGVyYXRvci5jb21wYXJzaW9uLmNvcHk7XG4gICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRLZXkodHJ1ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdXRpbHMuY29tcGFyZShjQ29weSwgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSwgeyBpZ25vcmVVbmRlZmluZWQ6IHRydWUgfSkpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIChjaGFuZ2VkIHx8IGRhdGFDaGFuZ2VkKSAmJiBBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIEFraWxpLmNvbXBpbGUoZWwpO1xuICAgIHRoaXMuaXRlcmF0b3JzLnB1c2goZWwuX19ha2lsaSk7XG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkYXRhID0gW107XG4gICAgfVxuXG4gICAgbGV0IGRhdGFDaGFuZ2VkID0gdXRpbHMuY29tcGFyZSh0aGlzLmRhdGEsIGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7ICAgXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgICBsZXQgaXRlcmF0b3JzID0gW107XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBcbiAgICBmb3IgKGxldCBsID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5sb29wKGtleSwgZGF0YVtrZXldLCBpbmRleCwgZGF0YUNoYW5nZWQpO1xuICAgICAgaXRlcmF0b3JzLnB1c2goaXRlcmF0b3IpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpbmRleCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGluZGV4LCBsID0gdGhpcy5pdGVyYXRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpXTtcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuXG4gICAgdGhpcy5jb21wYXJzaW9uID0ge1xuICAgICAgY29weTogdGhpcy5mb3IuX19jb21wYXJpc29uVmFsdWUsXG4gICAgICB2YWx1ZTogdGhpcy5mb3IuX192YWx1ZVxuICAgIH07XG4gIH1cblxuICBpdGVyYXRlKCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIHdpbGwgbm90IGJlIHdhdGNoaW5nLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldCBfX3V0aWxzKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0YXJnZXQ/IHRoaXMuX190YXJnZXQ6IHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuZWxDb21wb25lbnQgPSB0aGlzLmVsLl9fYWtpbGkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyh7IGRldGFpbDogZGF0YSwgIC4uLm9wdGlvbnMgfSkpKTtcbiAgICB9ICAgXG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgLi4ub3B0aW9ucyB9OyAgXG4gICAgdGhpcy5lbENvbXBvbmVudCAmJiAhdGhpcy5lbENvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCAmJiAob3B0aW9ucy5kZXRhaWwgPSB1dGlscy5jb3B5KG9wdGlvbnMuZGV0YWlsKSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gdHJhbnNpdGlvbi5wYXRoLnBhcmFtcztcbiAgICBsZXQgdXJsID0gdHJhbnNpdGlvbi51cmw7XG4gICAgbGV0IHF1ZXJ5ID0gdHJhbnNpdGlvbi5xdWVyeTtcblxuICAgIGNvbnN0IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiA9IChwYXRoKSA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gKGh0bWwpID0+IHsgXG4gICAgICB0aGlzLmVtcHR5KCk7ICBcbiAgICAgIGxldCBuYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgIGlmKHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZvcihsZXQga2V5IGluIEFraWxpLl9fY29tcG9uZW50cykge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEFraWxpLl9fY29tcG9uZW50c1trZXldO1xuICAgIFxuICAgICAgICAgIGlmKGNvbXBvbmVudCA9PT0gc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBuYW1lID0ga2V5OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke3N0YXRlLm5hbWV9XCIgaGFzIG5vIGRlZmluZWQgY29tcG9uZW50YClcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPCR7IG5hbWUgfT4keyBodG1sIH08LyR7IG5hbWUgfT5gO1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKVxuICAgICAgfSxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXJhbXMsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICBpZiAoIXRyYW5zaXRpb24ucGF0aC5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudGVtcGxhdGU7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oaHRtbCA9PiBjb21waWxlKGh0bWwpKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXNbcGF0aC5zdGF0ZS5uYW1lXSA9IHBhdGg7XG4gICAgdGhpcy5wYXJhbXMgPSAhcGF0aC5wYXJlbnQ/IHBhdGgucGFyYW1zOiB7Li4ucGF0aC5wYXJlbnQucGFyYW1zLCAuLi5wYXRoLnBhcmFtc307XG4gIH1cblxuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYgKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG4vKipcbiAqIFNldCByb3V0ZXIncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5yb3V0ZXIuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmFzZVVybCA9IFwiL1wiO1xuICB0aGlzLnN0YXRlcyA9IFtdO1xuICB0aGlzLmhhc2hNb2RlID0gdHJ1ZTtcbiAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG4gIHRoaXMuX19pbml0ID0gZmFsc2U7XG4gIHRoaXMuX19vcHRpb25zID0ge307XG4gIHRoaXMuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xuICB0aGlzLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xufVxuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpO1xuXG4gIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgdXJsID09PSB0aGlzLmdldFVybCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcblxuICBpZiAodGhpcy5oYXNoTW9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGN1cnJlbnQgPT09IHVybCAmJiB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7XG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGxldCBzdGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBzdGF0ZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcGFyZW50cy5wb3AoKTtcbiAgICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICAgIGxldCBwYXJlbnQgPSBzdGF0ZXNbcGFyZW50TmFtZV07XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcblxuICByb3V0ZXIuc3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtc1t2XSB8fCAnJztcbiAgfSk7XG5cbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaGFzaCA9IChoYXNoIHx8ICcnKS5yZXBsYWNlKCcjJywgJycpO1xuXG4gIGlmICghdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2g7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1svXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIHVybCBjb250ZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG5cbiAgICByZXR1cm4gJyhbXlxcXFwvXSopJztcbiAgfSk7XG5cbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCB2KSA9PiB7XG4gICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgaSsrO1xuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModGhpcy5nZXRVcmwoKS5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnKFteXFxcXC9dKiknKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXicgKyB1cmxQYXR0ZXJuICsgJy8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTtcblxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCBmaW5kID0gKGVsKSA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG5cbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnR9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZXMgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucm91dGVyLmdldFN0YXRlc0J5TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IHN0YXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBsZXZlbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLmxldmVsID4gbGV2ZWwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIHJvdXRlciBoYW5kbGVycyBpbnNpZGVcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnJvdXRlci5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgdGhpcy5fX2lzb2xhdGVkID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRlZCA9IGZhbHNlO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENoYW5nZSBzdGF0ZVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7ICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlQ2hhbmdlO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG5cbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG5cbiAgY29uc3QgbmV4dCA9IChzdGF0ZXMsIG9uRW5kKSA9PiB7XG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IGNvbnRlbnQucGFyYW1zO1xuICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKHN0YXRlLmxldmVsKTtcblxuICAgIGlmICghcm91dGUgJiYgIXN0YXRlLmFic3RyYWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgIH1cblxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBjb21wb25lbnQ6IHJvdXRlLCBsb2FkZWQ6IHRydWUgfSk7XG4gICAgbGV2ZWwrKztcblxuICAgIGxldCBoYXNTdGF0ZSA9IHByZXZUcmFuc2l0aW9uICYmIHByZXZUcmFuc2l0aW9uLmhhc1N0YXRlKHN0YXRlKTtcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgaWYgKGhhc1N0YXRlKSB7XG4gICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICBsZXQgcHJldiA9IHsgcGFyYW1zOiByb3V0ZS5wYXJhbXMsIHF1ZXJ5OiByb3V0ZS5xdWVyeSwgaGFzaDogcm91dGUuaGFzaCB9O1xuICAgICAgbGV0IGN1cnJlbnQgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IGlzRGlmZmVyZW50ICYmIHRoaXMuX19vcHRpb25zLnJlbG9hZCAhPT0gZmFsc2U7XG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKHRyYW5zaXRpb24ucGF0aC5sb2FkZWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuICAgICAgc3RhdGUudGl0bGUgJiYgKGRvY3VtZW50LnRpdGxlID0gdHlwZW9mIHN0YXRlLnRpdGxlID09ICdmdW5jdGlvbic/IHN0YXRlLnRpdGxlKHRyYW5zaXRpb24pOiBzdGF0ZS50aXRsZSk7XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfVxuIFxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFVybCh0aGlzLmRlZmF1bHRVcmwpO1xuICAgICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcblxuICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICF0cmFuc2l0aW9uLmhhc2gpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gbGV2ZWwsIGwgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24ucm91dGVzW2ldO1xuICAgICAgICAgIFxuICAgICAgICAgIHJvdXRlLmNvbXBvbmVudCAmJiByb3V0ZS5jb21wb25lbnQuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZWQnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG4gICAgICByZXNvbHZlKHRyYW5zaXRpb24pOyAgXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHJvdXRlci5zZXREZWZhdWx0cygpO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xucm91dGVyLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdmFsID0+ICh0aGlzLnN0YXRlID0gISF2YWwsIHRoaXMuc2V0U3RhdGUoKSkpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5fX2VtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIEVsc2VJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRWxzZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBcbiAgY29tcGlsZWQoKSB7IFxuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGluQ29udGVudCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50LmluZGV4T2YodmFsdWUpICE9IC0xO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJywgJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZScsICdkZWJvdW5jZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gNTAwO1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pc1JhZGlvIHx8IHRoaXMuaXNDaGVja2JveCkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuZWwuY2hlY2tlZCwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmF0dHJzLm9uRGVib3VuY2UudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogdHJ1ZSB9KVxuICAgICAgICB9LCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7ICAgIFxuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICB9XG5cbiAgc2V0RGVib3VuY2UoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldENoZWNrZWQodmFsdWUsIHRyaWdnZXIgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuXG4gICAgaWYgKHRoaXMucHJldkNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdGhpcy5wcmV2Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRyaWdnZXIgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBUaGUgcmFkaW8gZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgKCkgPT4gdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpKTsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICghaXNUcnVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogVGhlIHJhZGlvIGl0ZW0gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgdGhpcyk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5nZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWZyYW1lLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndHJhY2snLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVsb2FkJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkID0gKCkgPT4gdGhpcy5zdGF0ZSAmJiB0aGlzLnNldEFjdGl2aXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnNldFN0YXRlKTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMuc2V0UGFyYW1zKTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5zZXRRdWVyeSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5zZXRIYXNoKTtcbiAgICB0aGlzLmF0dHIoJ29wdGlvbnMnLCB0aGlzLnNldE9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cigncmVsb2FkJywgdGhpcy5zZXRSZWxvYWQpO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNldEFjdGl2aXR5KCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eSgpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldFJlbG9hZCh2YWwpIHtcbiAgICB0aGlzLm9wdGlvbnMucmVsb2FkID0gdmFsO1xuICB9XG5cbiAgZ2V0U3RhdGUobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZShuYW1lKTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYoKSB7XG4gICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB0aGlzLnVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSByb3V0ZXIuY3JlYXRlU3RhdGVVcmwodGhpcy5zdGF0ZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=