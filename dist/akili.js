/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.0.0
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Javascript framework
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * const Akili = makeItEasy(js + html);
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * @author Alexandr Balasyan <mywebstreet@gmail.com>
                                                                                                                                                                                                                                                                               * @link http://akilijs.com
                                                                                                                                                                                                                                                                               */

var _component2 = __webpack_require__(3);

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(13);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(6);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(14);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(15);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(16);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(17);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(18);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(19);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(20);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(21);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(22);

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(23);

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(24);

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(25);

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(26);

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(27);

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(11);

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(28);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(7);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(12);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _globals = __webpack_require__(10);

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The framework object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
var Akili = {};

Akili.__defaults = [];

/**
 * Set the framework's default variables
 */
Akili.setDefaults = function () {
  var _this = this;

  this.options = {
    debug: true
  };

  this.__init = null;
  this.__cleared = false;
  this.__components = {};
  this.__aliases = {};
  this.__scopes = {};
  this.__storeLinks = {};
  this.__window = {};
  this.__tags = {};
  this.__isolation = null;
  this.__evaluation = null;
  this.__wrapping = false;
  this.__onError = function () {
    return _this.triggerInit(false);
  };

  this.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

  for (var key in _globals2.default) {
    delete _globals2.default[key];
  }

  _globals2.default.__target.utils = _utils2.default;

  this.components = {};
  this.services = {};

  this.Component = _component3.default;
  this.EventEmitter = _eventEmitter2.default;
  this.Scope = _scope2.default;
  this.utils = _utils2.default;
  this.globals = _globals2.default;
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

  for (var i = 0, l = this.__defaults.length; i < l; i++) {
    this.__defaults[i]();
  }
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
 * Set defaults
 * 
 * @param {function} fn 
 */
Akili.defaults = function (fn) {
  this.__defaults.push(fn);
  fn();
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

  for (var _key2 in this.options.globals) {
    this.options.globals[_key2] = this.unwrap(this.options.globals[_key2]);
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
  var scope = this.__scopes[name];
  scope.__el = null;
  scope.__component = null;
  scope.__parent = null;
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
 * Set element inner html with content replacement
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
 * Isolate the scope changes
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
    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i];
    var val = _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope);
    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys);
    prop.component.__evaluateByKeys(prop.keys, val, prop.isDeleted);
  }

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
 * Evaluate only root properties
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.wrapping = function (fn) {
  if (this.__wrapping) {
    return fn();
  }

  this.__wrapping = true;
  var res = fn();
  this.__wrapping = false;
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
      component.__recompile(recompile === true ? {} : recompile);
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
 * Remove the component
 *
 * @param {string} name
 */
Akili.removeComponent = function (name) {
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
 * Remove the selector alias
 *
 * @param {string} selector
 */
Akili.removeAlias = function (selector) {
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
        });
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
  this.__window.Promise = window.Promise;
  window.setTimeout = this.createCallbackIsolation(window.setTimeout, 0);
  window.setInterval = this.createCallbackIsolation(window.setInterval, 0);

  if (!window.AKILI_SSR) {
    window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor);
    window.Promise.prototype.then = this.createCallbackIsolation(window.Promise.prototype.then, [0, 'last']);
    window.Promise.prototype.catch = this.createCallbackIsolation(window.Promise.prototype.catch);
  }
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

    if (typeof fn === 'function') {
      args[1] = function () {
        var _this6 = this,
            _arguments2 = arguments;

        return Akili.isolate(function () {
          return fn.apply(_this6, _arguments2);
        });
      };
    }

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return Akili.__window.Element.prototype.addEventListener.apply(this, args);
  };

  Element.prototype.removeEventListener = function (name, fn) {
    var args = [].slice.call(arguments);

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
        args[1] = listener.fn;
        i--;
        l--;
        break;
      }
    }

    if (!this.__akiliListeners[name].length) {
      delete this.__akiliListeners[name];
    }

    return Akili.__window.Element.prototype.removeEventListener.apply(this, args);
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

      if (!callback.__isolated) {
        args[index] = function () {
          var _arguments3 = arguments;

          return Akili.isolate(function () {
            return callback.apply(callback, _arguments3);
          });
        };

        Object.defineProperty(args[index], '__isolated', {
          enumerable: false,
          value: callback
        });
      }
    };

    for (var i = 0, l = pos.length; i < l; i++) {
      var _ret2 = _loop2(i, l);

      if (_ret2 === 'continue') continue;
    }

    return fn.apply(this, args);
  };
};

/**
 * Wrap objects/classes to isolate and unevaluate data
 *
 * @param {object|function} obj
 * @param {object} [options] 
 */
Akili.wrap = function (obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var current = obj;

  if (typeof obj == 'function') {
    obj = this.wrapFunction(obj, options);

    if (obj === current) {
      return obj;
    }
  } else if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != 'object' || Array.isArray(obj)) {
    return obj;
  }

  var keys = Object.getOwnPropertyNames(obj);

  for (var k = 0, c = keys.length; k < c; k++) {
    var key = keys[k];
    var descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (!descriptor.configurable || !descriptor.writable) {
      continue;
    }

    if (options.reverse) {
      Object.defineProperty(obj, key, _extends({}, descriptor, { value: obj[key].__akili || obj[key] }));
      continue;
    }

    Object.defineProperty(obj, key, _extends({}, descriptor, { value: this.wrap(obj[key], options) }));
  }

  return obj;
};

/**
 * Unwrap objects/classes
 *
 * @param {object|function} obj
 */
Akili.unwrap = function (obj) {
  return this.wrap(obj, { reverse: true });
};

/**
 * Isolate a function
 *
 * @param {function} fn
 * @param {object} [options] 
 * @returns {function}
 */
Akili.wrapFunction = function (fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (fn.__akili) {
    return fn;
  }

  var akiliWrappedFunction = function akiliWrappedFunction() {
    var _this7 = this,
        _arguments4 = arguments;

    if (options.tag && Akili.__evaluation) {
      Akili.addTag(options.tag, Akili.__evaluation.node);
    }

    return Akili.wrapping(function () {
      return fn.apply(_this7, _arguments4);
    });
  };

  var keys = Object.keys(fn);
  akiliWrappedFunction.prototype = fn.prototype;

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    akiliWrappedFunction[key] = fn[key];
  }

  Object.defineProperty(akiliWrappedFunction, '__akili', {
    enumerable: false,
    value: fn
  });

  return akiliWrappedFunction;
};

/**
 * Add the tag
 * 
 * @param {string} tag
 * @param {Node} node
 */
Akili.addTag = function (tag, node) {
  if (this.hasTag(tag, node)) {
    return;
  }

  if (!this.__tags[node.__name]) {
    this.__tags[node.__name] = {};
  }

  if (!this.__tags[node.__name][tag]) {
    this.__tags[node.__name][tag] = [];
  }

  this.__tags[node.__name][tag].push({ node: node });
};

/**
 * Check the tag exists
 * 
 * @param {string} tag
 * @param {Node} [node]
 * @returns {boolean}
 */
Akili.hasTag = function (tag, node) {
  if (!node) {
    for (var key in this.__tags) {
      for (var k in this.__tags[key]) {
        if (k == tag) {
          return true;
        }
      }
    }

    return false;
  }

  if (!this.__tags[node.__name]) {
    return false;
  }

  if (!this.__tags[node.__name][tag]) {
    return false;
  }

  return true;
};

/**
 * Remove the tag
 * 
 * @param {string} [tag]
 * @param {Node|Node[]} [node]
 */
Akili.removeTag = function (tag, node) {
  if ((typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) == 'object') {
    node = tag;
    tag = undefined;
  }

  if (!node) {
    for (var key in this.__tags) {
      for (var k in this.__tags[key]) {
        if (k == tag) {
          delete this.__tags[key][k];
        }
      }

      if (!Object.keys(this.__tags[key]).length) {
        delete this.__tags[key];
      }
    }

    return;
  }

  if (!tag) {
    !Array.isArray(node) && (node = [node]);

    for (var i = 0, l = node.length; i < l; i++) {
      delete this.__tags[node[i].__name];
    }

    return;
  }

  for (var _key3 in this.__tags[node.__name]) {
    if (_key3 == tag) {
      delete this.__tags[node.__name][_key3];
    }
  }

  if (!Object.keys(this.__tags[node.__name]).length) {
    delete this.__tags[node.__name];
  }
};

/**
 * Evaluate the tag node expressions
 * 
 * @param {string} tag
 */
Akili.triggerTag = function (tag) {
  for (var key in this.__tags) {
    for (var k in this.__tags[key]) {
      if (k == tag) {
        var arr = this.__tags[key][k];

        for (var i = 0, l = arr.length; i < l; i++) {
          var obj = arr[i];
          obj.node.__component.__evaluateNode(obj.node, false);
        }
      }
    }
  }
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
  var _this8 = this;

  root = root || document.body;

  if (!(root instanceof Element)) {
    throw new Error('Root element must be an html element');
  }

  if (root === document.documentElement) {
    throw new Error('"html" can\'t be the root element');
  }

  this.__root = root;

  if (window.AKILI_SERVER) {
    Akili.initServerSideHtml(window.AKILI_SERVER.html);
    Akili.initServerSideRequestCache(window.AKILI_SERVER.requestCache);
  } else {
    window.AKILI_CLIENT = {
      html: this.prepareServerSideHtml()
    };
  }

  return this.compile(this.__root).then(function () {
    if (_router2.default.__init) {
      return _router2.default.changeState({ init: true });
    }
  }).then(function () {
    window.AKILI_CLIENT && (window.AKILI_CLIENT.requestCache = _this8.prepareServerSideRequestCache());
    _this8.triggerInit(true);
  }).catch(function (err) {
    _this8.triggerInit(false);
    throw err;
  });
};

/**
 * Initialize server-side rendering html
 * 
 * @param {string} html
 */
Akili.initServerSideHtml = function (html) {
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
};

/**
 * Initialize server-side rendering request cache
 * 
 * @param {object} obj
 */
Akili.initServerSideRequestCache = function (obj) {
  var init = function init(instance, obj) {
    for (var key in obj) {
      instance.__cache[key] = obj[key];
    }
  };

  for (var key in obj) {
    var instance = key === '__main' ? _request2.default : _request2.default.__instances[key];
    init(instance, obj[key]);
  }
};

/**
 * Prepare server-side rendering html
 */
Akili.prepareServerSideHtml = function () {
  return this.__root.outerHTML;
};

/**
 * Prepare server-side rendering request cache
 */
Akili.prepareServerSideRequestCache = function () {
  var cache = { __main: _request2.default.__cache };

  for (var key in _request2.default.__instances) {
    cache[key] = _request2.default.__instances[key].__cache;
  }

  return cache;
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

/**
 * An object with a lot of useful functions
 * 
 * {@link https://akilijs.com/docs/utils}
 */
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
 * Extended split of the string
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

  arr = arr.slice();

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
 * Return new object with the specified keys
 * 
 * @example
 * // returns {x: 1, z: 1}
 * utils.includeKeys({x: 1, y: 1, z: 1}, ['x', 'z']);
 * 
 * @param {object} obj
 * @param {string[]} keys
 */
utils.includeKeys = function (obj, keys) {
  var newObj = {};
  var objKeys = Object.keys(obj);

  for (var i = 0, l = objKeys.length; i < l; i++) {
    var key = objKeys[i];

    if (keys.indexOf(key) != -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

/**
 * Return new object without the specified keys
 * 
 * @example
 * // returns {x: 1, z: 1}
 * utils.includeKeys({x: 1, y: 1, z: 1}, ['y']);
 * 
 * @param {object} obj
 * @param {string[]} keys
 */
utils.excludeKeys = function (obj, keys) {
  var newObj = {};
  var objKeys = Object.keys(obj);

  for (var i = 0, l = objKeys.length; i < l; i++) {
    var key = objKeys[i];

    if (keys.indexOf(key) == -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
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

  options = _extends({ nested: true, enumerable: true, plain: false }, options);

  var next = function next(obj) {
    if (options.plain && !_this2.isPlainObject(obj)) {
      return obj;
    }

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

    options = _extends({ enumerable: true, ignoreUndefined: true }, options);

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
 * Create hash from a string
 * 
 * @param {*} source
 * @returns {string}
 */
utils.createHash = function (source) {
  (typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object' && (source = JSON.stringify(source));
  typeof source != 'string' && (source = '⠀' + String(source));
  var hash = 0;

  for (var i = 0; i < source.length; i++) {
    var char = source.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash + '';
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
 * @example
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
  var now = Date.now();
  var val = '';

  for (var i = 0, l = str.length; i < l; i++) {
    if (!(now % i)) {
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

/**
 *  Create a function with the debounce
 *
 * @param {function} fn
 * @param {number} delay
 * @returns {fn}
 */
utils.debounce = function (fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return function () {
    clearTimeout(fn.__debounceTimeout);
    fn.__debounceTimeout = setTimeout(function () {
      fn();
      clearTimeout(fn.__debounceTimeout);
      delete fn.__debounceTimeout;
    }, delay);
  };
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

/**
 * Component for elements which have async attribute content.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag url
 * @attr {string} [url]
 */
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

var _globals = __webpack_require__(10);

var _globals2 = _interopRequireDefault(_globals);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var evaluationRegex = exports.evaluationRegex = /\${(((?!\${).)*)}/;
var evaluationRegexGlobal = exports.evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
var systemAttributes = exports.systemAttributes = ['component', 'scope'];

/**
 * Base class from which all components are inherited
 */

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
     * @param {object} [vars]
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var keys = [];
      var vars = [];
      var exps = _utils2.default.split(expression, ';', ['"', "'", '`']);
      exps[exps.length - 1] = 'return ' + exps[exps.length - 1];

      for (var key in variables) {
        keys.push(key);
        vars.push(variables[key]);
      }

      return new (Function.prototype.bind.apply(Function, [null].concat(keys, ['' + exps.join('; ')])))().apply(context, vars);
    }

    /**
     * Constructor
     * 
     * @param {Element} el 
     * @param {object} [scope] 
     */

  }]);

  function Component(el) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    if (!(el instanceof Element)) {
      throw new Error('You must pass an html element to the component constructor');
    }

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__isResolved = false;
    this.__cancelled = false;
    this.__prevent = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = null;
    this.__disableProxy = {};
    this.__disableStoreKeys = {};
    this.__disableAttrKeys = {};
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__content = '';
    this.__attrs = {};
    this.__attrLinks = {};
    this.__storeLinks = {};
    this.__attributeOf = null;
    this.__evaluationComponent = this;
    this.scope = scope;
    this.el = el;
  }

  /**
   * Create compilation options 
   * 
   * @param {object} [options]
   * @protected
   */


  _createClass(Component, [{
    key: '__createCompilationOptions',
    value: function __createCompilationOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({
        checkChanges: false,
        setEvents: true,
        setParents: true,
        setBooleanAttributes: true,
        defineAttributes: true
      }, options);
    }

    /**
     * Create recompilation options 
     * 
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__createRecompilationOptions',
    value: function __createRecompilationOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({}, this.__createCompilationOptions(), {
        setEvents: false,
        setParents: false,
        setBooleanAttributes: false,
        defineAttributes: false
      }, options);
    }

    /**
     * Called on the recompilation
     * 
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__recompile',
    value: function __recompile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.__isMounted = false;
      this.__recompiling = true;
      this.__evaluationComponent.__disableProxy = {};
      this.__compiling = this.__createRecompilationOptions(options);
      this.__compiling.setEvents && this.__setEvents();
      this.__compiling.setParents && this.__setParents();
      this.__compiling.setBooleanAttributes && this.__setBooleanAttributes();
      this.__compiling.defineAttributes && this.__defineAttributes();
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

      this.__compiling = this.__createCompilationOptions();
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

          if (child.nodeType == 3 && _this2.__initializeNode(child, parent)) {
            _this2.__evaluateNode(child, _this2.__compiling ? _this2.__compiling.checkChanges : false);
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
        res = _akili2.default.isolate(function () {
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

      if (this.__isResolved) {
        return Promise.resolve();
      }

      this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

      return Promise.resolve(_akili2.default.isolate(function () {
        return _this3.resolved();
      })).then(function (res) {
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

        if (!node.__component.__compareNodePropertyValue(prop, value)) {
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
    key: '__checkNodePropertyChange',
    value: function __checkNodePropertyChange(node, keys, value) {
      var prop = this.__getNodeProperty(node, keys);

      if (!prop) {
        return true;
      }

      return !node.__component.__compareNodePropertyValue(prop, value);
    }

    /**
     * Compare a node property value
     * 
     * @param {object} prop 
     * @param {*} value 
     * @param {object} [options] 
     */

  }, {
    key: '__compareNodePropertyValue',
    value: function __compareNodePropertyValue(prop, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return _utils2.default.compare(_utils2.default.createHash(value), prop.hash, options);
    }

    /**
     * Create an exception message
     * 
     * @param {Node} node 
     * @param {Error} err 
     */

  }, {
    key: '__createExceptionMessage',
    value: function __createExceptionMessage(node, err) {
      var tagName = node.__component.el.tagName;
      var attrName = node.__component.el.getAttribute('component');
      var componentName = (attrName || tagName).toLowerCase();
      var elementName = node.__element.tagName.toLowerCase();
      var attributeName = node instanceof window.Attr ? node.name.toLowerCase() : '';
      var messages = [err.message, node.__expression.trim()];
      attributeName && messages.push('[attribute ' + attributeName + ']');
      messages = messages.concat(['[element ' + elementName + ']', '[component ' + componentName + ']']);
      return 'Expression error: ' + messages.join('\n\tat ');
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
      var evalComponent = node.__attributeOf || node.__component;

      if (node.__component.parents(function (com) {
        return com.__prevent;
      }).length) {
        return { res: node.__expression };
      }

      if (!(node instanceof window.Attr) && node.__component.__prevent) {
        return { res: node.__expression };
      }

      var res = node.__expression.replace(evaluationRegexGlobal, function (m, d) {
        counter++;
        var evaluate = void 0;
        var evaluation = [];
        var existingBindings = {};
        var parentBindings = {};
        var parseValue = node.__component.__getParsedExpression(d);
        _akili2.default.__evaluation = { node: node, list: [], component: node.__component };

        try {
          evaluate = _this5.constructor.parse(evalComponent.__evaluationComponent.scope, parseValue, _extends({}, _globals2.default));
        } catch (err) {
          throw _this5.__createExceptionMessage(node, err);
        }

        if (_akili2.default.__evaluation) {
          evaluation = _akili2.default.__evaluation.list;
          _akili2.default.__evaluation.list = null;
          _akili2.default.__evaluation = null;
        }

        for (var i = evaluation.length - 1; i >= 0; i--) {
          var data = evaluation[i];
          var hash = data.component.__createKeysHash(data.keys);
          var parentsHash = data.component.__createKeysHash(data.parents);

          if (data.notBinding) {
            continue;
          }

          if (existingBindings[hash]) {
            continue;
          }

          var parentValue = _utils2.default.getPropertyByKeys(data.parents, data.component.__scope);

          if (parentValue && (typeof parentValue === 'undefined' ? 'undefined' : _typeof(parentValue)) == 'object') {
            if (_akili2.default.options.debug && parentBindings[parentsHash] == 50) {
              // eslint-disable-next-line no-console
              console.warn(['For higher performance, don\'t loop Proxy arrays/objects inside expression functions, or use Akili.unevaluate() to wrap you code.', '' + node.__expression.trim(), 'scope property "' + data.parents.join('.') + '"'].join('\n\tat '));
            }

            !parentBindings[parentsHash] ? parentBindings[parentsHash] = 1 : parentBindings[parentsHash]++;
          }

          if (_utils2.default.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent && data.component === data.realComponent) {
            continue;
          }

          data.component.__bindAndSetProperty(node, data.keys, data.evaluated);
          existingBindings[hash] = true;
        }

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

      return { res: res, counter: counter, expression: expression, attributeValue: attributeValue };
    }

    /**
     * Bind the node and set property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @param {boolean} [evaluated]
     * @protected
     */

  }, {
    key: '__bindAndSetProperty',
    value: function __bindAndSetProperty(node, keys, evaluated) {
      var bind = this.__getBoundNode(keys, node);
      var value = _utils2.default.getPropertyByKeys(keys, this.__scope);

      if (!bind) {
        this.__bind(keys, { node: node });
      }

      this.__setNodeProperty(node, keys, value, evaluated);
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
      var _this6 = this;

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
          var data = void 0;

          if (component === _this6) {
            var bind = component.__getBind(prop.keys);
            data = bind ? bind.__data || [] : [];
          } else {
            data = component.__getAllBinds(prop.keys);
          }

          if (!data || !data.length) {
            continue;
          }

          for (var k = 0, c = data.length; k < c; k++) {
            var _bind = data[k];

            if (!_bind || !_bind.node || !_bind.node.__initialized) {
              continue;
            }

            if (component.__checkNodePropertyChange(_bind.node, prop.keys, prop.value)) {
              component.__disableKeys(prop.keys);
              var checkProp = component.__getNodeProperty(_bind.node, prop.keys);
              checkProp && checkProp.evaluated && component.scope.__set(prop.keys, prop.value, false, true);
              component.__evaluateNode(_bind.node, false);

              for (var _k in _bind.node.__properties) {
                if (!_bind.node.__properties.hasOwnProperty(_k)) {
                  continue;
                }

                var _prop = _bind.node.__properties[_k];
                var _value = _utils2.default.getPropertyByKeys(_prop.keys, _prop.component.__scope);
                _prop.component.__setNodeProperty(_bind.node, _prop.keys, _value);
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
      var _this7 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || _this7.__isSystemBindingKey(k)) {
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

          _this7.__evaluateNested(_keys, true);

          if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !hasKey) {
            _this7.__unbind(_keys);
            _isDeleted && _utils2.default.deletePropertyByKeys(__keys, value);
          }
        }
      };

      data && unbind(data, [].concat(keys));
      this.__evaluateNested(keys, false);

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

      try {
        evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], _extends({}, _globals2.default, { event: e }));
      } catch (err) {
        throw this.__createExceptionMessage(node, err);
      }

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

      var key = node instanceof window.Attr ? 'value' : 'nodeValue';

      if (check ? this.__checkEvaluation(node) : true) {
        var _evaluate = this.__evaluate(node),
            res = _evaluate.res,
            attributeValue = _evaluate.attributeValue,
            expression = _evaluate.expression,
            counter = _evaluate.counter;

        node[key] != res && (node[key] = res);

        if (node instanceof window.Attr) {
          var value = res;
          var isBooleanAttribute = false;

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
            value = component.__prepareAttributeIn(node, value);
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
      }

      return node[key];
    }

    /**
     * Prepare the attribute value for getting
     * 
     * @param {Node} node
     * @param {*} value
     */

  }, {
    key: '__prepareAttributeIn',
    value: function __prepareAttributeIn(node, value) {
      return _utils2.default.copy(value, { plain: true });
    }

    /**
     * Prepare the attribute value for sending
     * 
     * @param {Node} node
     * @param {*} value
     */

  }, {
    key: '__prepareAttributeOut',
    value: function __prepareAttributeOut(node, value) {
      return _utils2.default.copy(value, { plain: true });
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
      if (!node || systemAttributes.indexOf(node.nodeName) != -1) {
        return;
      }

      if (!this.__initializeNode(node, el)) {
        return;
      }

      var eventName = node.nodeName.replace(/^on-(.+)/i, '$1');
      var component = attributeOf ? attributeOf : this;

      if (node.__isEvent) {
        if (node.__event) {
          return;
        }

        var emitter = new _akili2.default.EventEmitter(eventName, node, el, component);

        if (node.__hasBindings) {
          emitter.bind(function (e) {
            return component.__evaluateEvent(node, el, e);
          });
        }

        node.__event = emitter;
        el.setAttribute(node.nodeName, _utils2.default.makeAttributeValue(emitter));

        if (attributeOf) {
          this.__disableAttributeSetter = true;
          this.attrs[_utils2.default.toCamelCase(node.nodeName)] = emitter;
          this.__disableAttributeSetter = false;
        }

        return;
      }

      if (attributeOf) {
        node.__attributeOn = this;
        node.__attributeOf = component;
      }

      var check = this.__compiling ? this.__compiling.checkChanges : false;
      component.__evaluateNode(node, check);
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
        return true;
      }

      var isAttr = node instanceof window.Attr;
      var val = node[isAttr ? 'value' : 'nodeValue'];
      var hasBindings = evaluationRegex.test(val.trim());
      var isBoolean = isAttr ? /^boolean-/i.test(node.nodeName) : false;
      var isEvent = isAttr ? /^on-(.+)/i.test(node.nodeName) : false;

      if (!el.__akili && !hasBindings && !isBoolean && !isEvent) {
        return false;
      }

      node.__name = this.__scope.__name + _utils2.default.createRandomString(16);
      node.__isEvent = isEvent;
      node.__hasBindings = hasBindings;
      node.__isBoolean = isBoolean;
      node.__expression = val;
      node.__properties = {};
      node.__attributeOf = null;
      node.__attributeOn = null;
      node.__event = null;
      node.__initialized = true;
      node.__component = this;
      node.__element = el;
      return true;
    }

    /**
     * Deinitialize the node
     *
     * @param {Node} node
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__deinitializeNode',
    value: function __deinitializeNode(node) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (node.__event) {
        node.__event.remove();
      }

      if (node.__hasBindings && !options.saveBindings) {
        this.__unbindByNodes(node);
        this.__unbindParentsByNodes(node);
        _akili2.default.removeTag(node);
      }

      delete node.__name;
      delete node.__hasBindings;
      delete node.__isBoolean;
      delete node.__isEvent;
      delete node.__expression;
      delete node.__properties;
      delete node.__attributeOf;
      delete node.__attributeOn;
      delete node.__event;
      delete node.__initialized;
      delete node.__component;
      delete node.__element;
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
      var _this8 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this8.__disableAttributeSetter) {
          return;
        }

        var node = _this8.el.getAttributeNode(key);

        if (isDeleted) {
          node && _this8.__deinitializeNode(node);
          _this8.el.removeAttribute(key);
          return;
        } else if (!node) {
          _this8.el.setAttribute(key, value);
          node = _this8.el.getAttributeNode(key);
        } else {
          node.value = value;
          _this8.__deinitializeNode(node);
        }

        _this8.__initializeAttribute(node, _this8.el, _this8.__attributeOf);
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

          if (_this8.booleanAttributes.indexOf(attrKey) != -1) {
            attrKey = 'boolean-' + attrKey;
            value ? _this8.el.setAttribute(key, value) : _this8.el.removeAttribute(key);
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
      var _this9 = this;

      return new Proxy(obj, {
        get: function get(target, key) {
          if (key == "__isProxy") {
            return true;
          }

          if (key == "__target") {
            return obj;
          }

          if (key == "__component") {
            return _this9;
          }

          if (key == "__keys") {
            return parents;
          }

          if (_this9.__isSystemKey(key)) {
            return target[key];
          }

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;
            var evaluated = !_utils2.default.hasPropertyByKeys(keys, _this9.__scope);
            var component = _this9;
            var excArr = keys.slice();

            if (target instanceof _scope3.default) {
              var realTarget = _utils2.default.getOwnPropertyTarget(target, key);
              realTarget && realTarget instanceof _scope3.default && (component = realTarget.__component);
            }

            if (_akili2.default.__wrapping && keys.length > 1) {
              return target[key];
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

            _this9.__bindNode(_akili2.default.__evaluation.list, component, keys, parents, target[key], notBinding, evaluated);
            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this9.__isSystemKey(key)) {
            target[key] = value;
            return true;
          }

          if (typeof target[key] === 'function') {
            value = _akili2.default.wrapFunction(value);
          }

          var keys = [].concat(parents, [key]);

          if (_this9.__checkDisablement(keys)) {
            target[key] = value;
            return true;
          }

          CHECK_EXISTENCE: if (parents.length > 0) {
            var targetParentValue = parents.length > 1 ? _utils2.default.getPropertyByKeys(parents.slice(0, -1), _this9.__scope) : _this9.__scope;

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

          target[key] = _this9.__nestedObserve(value, keys);

          if (!_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_this9.__isMounted) {
            _this9.__evaluateByKeys(keys, value);
          }

          return true;
        },
        deleteProperty: function deleteProperty(target, key) {
          var keys = [].concat(parents, [key]);

          if (_this9.__checkDisablement(keys)) {
            delete target[key];
            return true;
          }

          if (_this9.__isSystemKey(key)) {
            delete target[key];
            return true;
          }

          delete target[key];

          if (!_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, true);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          _this9.__evaluateByKeys(keys, undefined, true);
          return true;
        }
      });
    }

    /**
     * Trigger store and attributes change
     */

  }, {
    key: '__triggerStoreAndAttr',
    value: function __triggerStoreAndAttr(keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var currentKeys = keys.slice(0, l - i);
        var currentKeyString = _akili2.default.joinBindingKeys(currentKeys);
        var val = _utils2.default.getPropertyByKeys(currentKeys, this.__scope);

        if (this.__storeLinks[currentKeyString]) {
          this.__storeTriggerByKeys(currentKeys, val);
        }

        if (this.__attrLinks[currentKeyString]) {
          this.__attrTriggerByKeys(currentKeys, val);
        }
      }
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
     * Get the store of the disablement type
     * 
     * @param {string} type 
     */

  }, {
    key: '__getDisablementTypeStore',
    value: function __getDisablementTypeStore(type) {
      return {
        proxy: '__disableProxy',
        store: '__disableStoreKeys',
        attr: '__disableAttrKeys'
      }[type];
    }

    /**
     * Disable the keys setter
     * 
     * @param {string[]} keys  
     * @param {string} [type]  
     * @protected
     */

  }, {
    key: '__disableKeys',
    value: function __disableKeys(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      this[this.__getDisablementTypeStore(type)][keys ? this.__createKeysHash(keys) : '__all'] = true;
    }

    /**
     * Enable the keys setter
     * 
     * @param {string[]} keys 
     * @param {string} [type]   
     * @protected
     */

  }, {
    key: '__enableKeys',
    value: function __enableKeys(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      delete this[this.__getDisablementTypeStore(type)][keys ? this.__createKeysHash(keys) : '__all'];
    }

    /**
     * Check the keys setter disablemant
     * 
     * @param {string[]} keys 
     * @param {string} [type]   
     * @protected
     */

  }, {
    key: '__checkDisablement',
    value: function __checkDisablement(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      var store = this.__getDisablementTypeStore(type);
      return this[store].__all ? true : this[store][this.__createKeysHash(keys)];
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
      if (this.__checkDisablement(keys, 'store')) {
        return;
      }

      var links = this.__storeLinks[_akili2.default.joinBindingKeys(keys)];

      if (!links || !links.length) {
        return;
      }

      value = _utils2.default.copy(value, { plain: true });
      var p = [];

      for (var i = 0, l = links.length; i < l; i++) {
        var link = links[i];

        if (!link.set) {
          continue;
        }

        p.push(this.__storeTriggerByName(link.name, value));
      }

      return Promise.all(p);
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
      var _this10 = this;

      _store2.default.__target[name] = value;
      var links = (_akili2.default.__storeLinks[name] || []).concat(_akili2.default.__storeLinks['*'] || []);

      if (!links || !links.length) {
        return;
      }

      links = _utils2.default.sort(links, ['date'], true);

      return _akili2.default.nextTick(function () {
        var _loop = function _loop(i, l) {
          var link = links[i];
          var component = link.component;

          if (component === _this10) {
            return 'continue';
          }

          if (link.fn) {
            _akili2.default.unisolate(function () {
              return link.fn.call(component, value, name);
            });
            return 'continue';
          }
          if (!link.get) {
            return 'continue';
          }

          component.__disableKeys(link.keys, 'store');
          var current = _utils2.default.getPropertyByKeys(link.keys, component.__scope);
          !_utils2.default.compare(current, value) && component.scope.__set(link.keys, value);
          component.__enableKeys(link.keys, 'store');
        };

        for (var i = 0, l = links.length; i < l; i++) {
          var _ret = _loop(i, l);

          if (_ret === 'continue') continue;
        }
      });
    }

    /**
     * Create a store link with the scope property
     * 
     * @param {string} name 
     * @param {string|string[]} keys
     * @param {obhect} [options]
     * @protected
     */

  }, {
    key: '__storeByKeys',
    value: function __storeByKeys(name, keys) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({ get: true, set: true }, options);

      if (!keys) {
        throw new Error('Store link "' + name + '" must have the scope property name');
      }

      if (!options.get && !options.set) {
        throw new Error('Store link "' + name + '" must have at least "get" or "set" option as true');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      this.__disableKeys(keys, 'store');
      (_store2.default.hasOwnProperty(name) || !_utils2.default.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, _store2.default[name]);
      this.__enableKeys(keys, 'store');
      var keyString = _akili2.default.joinBindingKeys(keys);
      var info = void 0;

      if (!this.__storeLinks[keyString]) {
        this.__storeLinks[keyString] = [];
      }

      var arr = this.__storeLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.component === this && res.name == name && res.keyString == keyString) {
          res.set = options.set;
          res.get = options.get;
          res.date = Date.now();
          return;
        }
      }

      if (!_akili2.default.__storeLinks[name]) {
        _akili2.default.__storeLinks[name] = [];
      }

      info = { component: this, name: name, keys: keys, keyString: keyString, date: Date.now(), set: options.set, get: options.get };
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
      var _this11 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var call = options.callOnStart === undefined ? _store2.default.__target.hasOwnProperty(name) : options.callOnStart;

      if (!_akili2.default.__storeLinks[name]) {
        _akili2.default.__storeLinks[name] = [];
      }

      var links = _akili2.default.__storeLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.component === this && res.name == name && res.fn === fn) {
          res.date = Date.now();
          return;
        }
      }

      _akili2.default.__storeLinks[name].push({ component: this, name: name, fn: fn, date: Date.now() });

      if (name == '*' && options.callOnStart !== false) {
        var storeKeys = Object.keys(_store2.default.__target);
        var p = [];

        var _loop2 = function _loop2(l, _i3) {
          var key = storeKeys[_i3];
          var val = _store2.default.__target[key];
          p.push(_akili2.default.unisolate(function () {
            return fn.call(_this11, val, key);
          }));
        };

        for (var _i3 = 0, l = storeKeys.length; _i3 < l; _i3++) {
          _loop2(l, _i3);
        }

        return Promise.all(p);
      }

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this11, _store2.default[name]);
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
      var _this12 = this;

      if (this.__checkDisablement(keys, 'attr')) {
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

          if (!_link2.set) {
            continue;
          }

          var ev = 'on' + _utils2.default.capitalize(_link2.name);
          _this12.attrs[ev] && _this12.attrs[ev].trigger(value, { bubbles: true });
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
      var _this13 = this;

      var links = (this.__attrLinks[name] || []).concat(this.__attrLinks['*'] || []);

      if (!links || !links.length) {
        return;
      }

      links = _utils2.default.sort(links, ['date'], true);

      var _loop3 = function _loop3(i, l) {
        var link = links[i];

        if (link.fn) {
          _akili2.default.unisolate(function () {
            return link.fn.call(_this13, value, _utils2.default.toDashCase(name));
          });
          return 'continue';
        }

        if (!link.get) {
          return 'continue';
        }

        _this13.__disableKeys(link.keys, 'attr');
        var current = _utils2.default.getPropertyByKeys(link.keys, _this13.__scope);
        !_utils2.default.compare(current, value) && _this13.scope.__set(link.keys, value);
        _this13.__enableKeys(link.keys, 'attr');
      };

      for (var i = 0, l = links.length; i < l; i++) {
        var _ret3 = _loop3(i, l);

        if (_ret3 === 'continue') continue;
      }
    }

    /**
     * Create an attribute link with the scope property
     * 
     * @param {string} name 
     * @param {string|string[]} keys
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__attrByKeys',
    value: function __attrByKeys(name, keys) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({ get: true, set: true }, options);
      name = _utils2.default.toCamelCase(name);

      if (!keys) {
        throw new Error('Attribute link "' + name + '" must have the scope property name');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      this.__disableKeys(keys, 'attr');
      (this.attrs.hasOwnProperty(name) || !_utils2.default.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, this.attrs[name]);
      this.__enableKeys(keys, 'attr');
      var keyString = _akili2.default.joinBindingKeys(keys);

      if (!this.__attrLinks[keyString]) {
        this.__attrLinks[keyString] = [];
      }

      var arr = this.__attrLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.name == name && res.keyString == keyString) {
          res.get = options.get;
          res.set = options.set;
          res.date = Date.now();
          return;
        }
      }

      this.__attrLinks[keyString].push({ name: name, keys: keys, keyString: keyString, date: Date.now(), set: options.set, get: options.get });
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
      var _this14 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      name = _utils2.default.toCamelCase(name);
      var call = options.callOnStart === undefined ? this.attrs.hasOwnProperty(name) : options.callOnStart;

      if (!this.__attrLinks[name]) {
        this.__attrLinks[name] = [];
      }

      var links = this.__attrLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.name == name && res.fn === fn) {
          res.date = Date.now();
          return;
        }
      }

      this.__attrLinks[name].push({ name: name, fn: fn, date: Date.now() });

      if (name == '*' && options.callOnStart !== false) {
        var attrsKeys = Object.keys(this.__attrs).filter(function (k) {
          return !(_this14.__attrs[k] instanceof _akili2.default.EventEmitter);
        });
        var p = [];

        var _loop4 = function _loop4(l, _i4) {
          var key = attrsKeys[_i4];
          var val = _this14.__attrs[key];
          p.push(_akili2.default.unisolate(function () {
            return fn.call(_this14, val, _utils2.default.toDashCase(key));
          }));
        };

        for (var _i4 = 0, l = attrsKeys.length; _i4 < l; _i4++) {
          _loop4(l, _i4);
        }

        return Promise.all(p);
      }

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this14, _this14.attrs[name]);
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
      var _this15 = this;

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

          if (_this15.__disableProxyRedefining) {
            break CHECK_PROXY;
          }

          if (value.__component !== _this15 || _akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
            target = _utils2.default.copy(target, { nested: false });
            value = target;
          }
        } else if (!_this15.__disableProxyRedefining && !(value instanceof _scope3.default)) {
          target = _utils2.default.copy(target, { nested: false });
          value = target;
        }

        var targetKeys = Object.keys(target);

        for (var i = 0, l = targetKeys.length; i < l; i++) {
          var k = targetKeys[i];
          var _val = target[k];
          var keys = [].concat(parents, [k]);
          target[k] = observe(_val, keys);
        }

        if (!value.__isProxy) {
          return _this15.__observe(value, parents);
        }

        return value;
      };

      return observe(value, startKeys || []);
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
      var isolationHash = this.__createKeysHash(keys);

      if (parents.length) {
        isDeleted = false;
      }

      if (!_akili2.default.__isolation[isolationHash]) {
        _akili2.default.__isolation[isolationHash] = {
          updatedAt: new Date().getTime(),
          component: this,
          keys: keys
        };
      }

      isDeleted !== undefined && (_akili2.default.__isolation[isolationHash].isDeleted = isDeleted);
      return _akili2.default.__isolation[isolationHash];
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
     * Get all nested bindings by keys
     * 
     * @param {string[]} keys 
     */

  }, {
    key: '__getAllBinds',
    value: function __getAllBinds(keys) {
      var root = this.__getBind(keys);

      if (!root) {
        return [];
      }

      var data = [];

      var collect = function collect(obj) {
        data = data.concat(obj.__data || []);

        for (var _key in obj) {
          if (!obj.hasOwnProperty(_key) || _key == '__data') {
            continue;
          }

          collect(obj[_key]);
        }
      };

      collect(root);
      return data;
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
     * @param {boolean} [evaluated=false]
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__setNodeProperty',
    value: function __setNodeProperty(node, keys, value) {
      var evaluated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var prop = this.__getNodeProperty(node, keys);
      var hash = _utils2.default.createHash(value);

      if (prop) {
        var res = node.__component.__compareNodePropertyValue(prop, value);
        prop.value = value;
        prop.hash = hash;
        return !res;
      }

      node.__properties[this.__createKeysHash(keys)] = {
        component: this,
        value: value,
        hash: hash,
        node: node,
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
      return node.__properties[this.__createKeysHash(keys)] || null;
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
     * Map nodes
     * 
     * @param {function} fn
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__mapNodes',
    value: function __mapNodes(fn) {
      var _this16 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options = _extends({ rootAttrs: true, attrs: true, node: true, el: true }, options);

      var find = function find(el) {
        if (!el) {
          return;
        }

        if (options.attrs && (el !== _this16.el || options.rootAttrs)) {
          for (var k = 0, attrs = el.attributes, c = attrs.length; k < c; k++) {
            fn(attrs[k]);
          }
        }

        for (var i = el.childNodes.length - 1; i >= 0; i--) {
          var node = el.childNodes[i];

          if (node.nodeType == 3) {
            options.node && fn(node);
          } else if (node.nodeType == 1 && !node.__akili) {
            find(node);
            options.el && fn(node);
          }
        }
      };

      find(this.el);
    }

    /**
     * Get all nodes
     * 
     * @protected
     */

  }, {
    key: '__getAllNodes',
    value: function __getAllNodes() {
      var nodes = [];
      this.__mapNodes(function (node) {
        return nodes.push(node);
      });
      return nodes;
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
     * @param {Node|Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var _this17 = this;

      !Array.isArray(nodes) && (nodes = [nodes]);

      var unbind = function unbind(obj, parent, key) {
        var keys = Object.keys(obj);

        for (var j = 0, c = keys.length; j < c; j++) {
          var k = keys[j];

          if (k == '__data') {
            var data = obj[k] || [];
            var l = data.length;

            for (var i = 0; i < l; i++) {
              var bind = data[i];

              if (nodes.indexOf(bind.node) != -1) {
                delete bind.node;
                data.splice(i, 1);
                i--;
                l--;
              }
            }

            if (!l) {
              delete obj[k];
            }
          } else if (!_this17.__isSystemBindingKey(k)) {
            unbind(obj[k], obj, k);
          }

          if (parent && !Object.keys(obj).length) {
            delete parent[key];
          }
        }
      };

      unbind(this.__bindings);
    }

    /**
     * Remove all parents bindings with the nodes
     * 
     * @param {Node|Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindParentsByNodes',
    value: function __unbindParentsByNodes(nodes) {
      for (var i = 0, l = this.__parents.length; i < l; i++) {
        var parent = this.__parents[i];
        parent && parent.__akili && parent.__akili.__unbindByNodes(nodes);
      }
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

      for (var _key2 in links) {
        var arr = links[_key2];

        for (var i = arr.length - 1; i >= 0; i--) {
          var _link3 = arr[i];

          if (_link3.component === this) {
            for (var k in _link3) {
              delete _link3[k];
            }

            arr.splice(i, 1);
          }
        }

        if (!arr.length) {
          delete links[_key2];
        }
      }
    }

    /**
     * Remove all child components
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__removeChildren',
    value: function __removeChildren() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];

      var remove = function remove(children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          remove(child.__akili.__children);
          nodes = nodes.concat(child.__akili.__remove(options));
          i--;
        }
      };

      remove(this.__children);
      return nodes;
    }

    /**
     * Remove the component without children removing
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      var _this18 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      this.removed();
      nodes = nodes.concat(this.__detach({ saveBindings: true }));
      nodes = nodes.concat(this.__empty({ saveBindings: true }));
      this.__clearStoreLinks();
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
        _akili2.default.removeTag(nodes);
      }

      _akili2.default.nextTick(function () {
        delete _this18.el.__akili;
        delete _this18.__isMounted;
        delete _this18.__isCompiled;
        delete _this18.__isResolved;
        delete _this18.__cancelled;
        delete _this18.__prevent;
        delete _this18.__content;
        _this18.__bindings = null;
        _this18.__evaluatingEvent = null;
        _this18.__recompiling = null;
        _this18.__compiling = null;
        _this18.__disableProxy = null;
        _this18.__disableStoreKeys = null;
        _this18.__disableAttrKeys = null;
        _this18.__children = null;
        _this18.__parent = null;
        _this18.__parents = null;
        _this18.__attrs = null;
        _this18.__attrLinks = null;
        _this18.__storeLinks = null;
        _this18.__attributeOf = null;
        _this18.__evaluationComponent = null;
        _this18.scope = null;
        _this18.el = null;
      });

      return nodes;
    }

    /**
     * Detach the component
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__detach',
    value: function __detach() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.__parent && this.__parent.__akili.__spliceChild(this.el);
      var nodes = [];

      for (var i = 0, l = this.el.attributes.length; i < l; i++) {
        var node = this.el.attributes[i];
        node.__initialized && nodes.push(node);
      }

      if (!options.saveBindings) {
        this.__unbindParentsByNodes(nodes);
      }

      return nodes;
    }

    /**
     * Clear the component html
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var _this19 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = this.__removeChildren({ saveBindings: true });

      this.__mapNodes(function (node) {
        if (node.nodeType == 1) {
          node.remove();
          return;
        }

        if (!node.__initialized) {
          return;
        }

        _this19.__deinitializeNode(node, { saveBindings: true });
        nodes.push(node);
      }, { rootAttrs: false });

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
        _akili2.default.removeTag(nodes);
      }

      this.el.innerHTML = '';
      return nodes;
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

        for (var _i5 = 0, _l3 = children.length; _i5 < _l3; _i5++) {
          find(children[_i5].__akili.__children);
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
      if (!this.__isMounted) {
        throw new Error('Method "store" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__storeByFunction.apply(this, _toConsumableArray(args)) : this.__storeByKeys.apply(this, _toConsumableArray(args));
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
      if (!this.__isMounted) {
        throw new Error('Method "attr" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__attrByFunction.apply(this, _toConsumableArray(args)) : this.__attrByKeys.apply(this, _toConsumableArray(args));
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
      if (!this.__isMounted) {
        throw new Error('Method "unstore" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

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
      if (!this.__isMounted) {
        throw new Error('Method "unattr" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

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
      return _akili2.default.compile(this.el, { recompile: { setParents: true, checkChanges: false } });
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
      return this.__remove.apply(this, arguments);
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

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Request class.
 * An instance of this class allows you to make requests.
 * 
 * {@link https://akilijs.com/docs/requests}
 */
var Request = exports.Request = function () {

  /**
   * Constructor
   * 
   * @param {string} baseUrl
   * @param {object} [defaults] 
   */
  function Request(baseUrl, defaults) {
    _classCallCheck(this, Request);

    this.__cache = {};

    this.getHeaders = function (xhr) {
      var headers = {};
      var str = xhr.getAllResponseHeaders();
      var arr = str.split('\r\n');

      for (var i = 0, l = arr.length; i < l; i++) {
        var line = arr[i];
        var index = line.indexOf(': ');

        if (index > 0) {
          var key = line.substring(0, index);
          var val = line.substring(index + 2);
          headers[key] = val;
        }
      }

      return headers;
    };

    this.baseUrl = baseUrl ? baseUrl.replace(/\/$/, '') + '/' : '';

    this.defaults = _extends({
      statusErrorPattern: /^[^23]/,
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
        !window.AKILI_SSR && !_akili2.default.__init && (cache = true);

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

          if (_cache && (cache === true || now - _cache.createdAt <= cache)) {
            return resolve(_this.transformAfter(_cache.result));
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

        var headerKeys = Object.keys(options.headers);

        for (var i = 0, l = headerKeys.length; i < l; i++) {
          var k = headerKeys[i];
          xhr.setRequestHeader(k, options.headers[k]);
        }

        if (typeof options.onProgress == 'function') {
          xhr.onprogress = function () {
            return options.onProgress(xhr);
          };
        }

        xhr.onload = function () {
          var result = {
            response: xhr.response,
            status: xhr.status,
            readyState: xhr.readyState,
            statusText: xhr.statusText,
            withCredentials: xhr.withCredentials,
            responseType: xhr.responseType,
            responseText: xhr.responseType == 'text' ? xhr.responseText : '',
            responseXML: xhr.responseType == 'document' ? xhr.responseXML : '',
            responseURL: xhr.responseURL,
            timeout: xhr.timeout,
            headers: _this.getHeaders(xhr)
          };

          var response = _this.transformAfter(result);

          if (options.statusErrorPattern && (xhr.status + '').match(options.statusErrorPattern)) {
            var err = new Error('Request to "' + options.url + '" returns failure status code ' + xhr.status);
            err.response = response;
            return reject(err);
          }

          (cache || window.AKILI_SSR) && hash && _this.createCache(hash, result);
          resolve(response);
        };

        xhr.ontimeout = function () {
          reject(new Error('Request to "' + options.url + '" timed out'));
        };

        xhr.onerror = reject;
        xhr.send(options.body);
      });
    }

    /**
     * Get headers of a XMLHttpRequest instance
     * 
     * @param {XMLHttpRequest}
     */

  }, {
    key: 'getCache',


    /**
     * Get cache
     * 
     * @param {string} hash
     * @returns {object}
     */
    value: function getCache(hash) {
      return this.__cache[hash] || null;
    }

    /**
     * Create cache
     * 
     * @param {string} hash
     * @param {object} result
     */

  }, {
    key: 'createCache',
    value: function createCache(hash, result) {
      this.__cache[hash] = { result: result, createdAt: new Date().getTime() };
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
      return _utils2.default.createHash(data);
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
            return opt.push(ks + ('[' + key + ']') + eq + encodeURIComponent(obj[k][key]));
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
     * @param {object} result
     * @returns {object}
     */

  }, {
    key: 'transformAfter',
    value: function transformAfter(result) {
      return _extends({}, result, {
        data: result.response
      });
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

    /**
    *  Make HEAD request
    *
    * @param {string} url
    * @param {object} options
    * @returns {Promise}
    */

  }, {
    key: 'head',
    value: function head(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'HEAD';

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

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base component to work with text elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @attr {string} value - actual value
 * @attr {boolean} focus - set the focus or not
 * @attr {number} debounce - debounce delay
 * @message {void} debounce - sent on the debounce {@link https://akilijs.com/docs/components#docs_input}
 */
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
    return _this;
  }

  _createClass(Text, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      if (this.el.hasAttribute('on-debounce')) {
        this.el.addEventListener('input', _utils2.default.debounce(function () {
          return _this2.attrs.onDebounce.trigger(undefined, { bubbles: true });
        }, this.debounceInterval));
      }

      this.attr('focus', this.setFocus);
      this.attr('value', this.setValue);
      this.attr('debounce', this.setDebounce);
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag for
 * @selector for[in],ol[in],ul[in],thead[in],tbody[in],tfoot[in]
 * @attr {object|array} in - data to create the loop
 * @message {object|array} out - sent on the data change
 */
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

    _this.iterators = [];
    _this.iteratorEl = null;
    _this.reset();
    return _this;
  }

  _createClass(For, [{
    key: '__prepareAttributeIn',
    value: function __prepareAttributeIn(node, value) {
      if (node instanceof window.Attr && node.name == 'in') {
        return value;
      }

      return _get(For.prototype.__proto__ || Object.getPrototypeOf(For.prototype), '__prepareAttributeIn', this).apply(this, arguments);
    }
  }, {
    key: '__compareNodePropertyValue',
    value: function __compareNodePropertyValue(prop, value) {
      var node = prop.node;

      if (node instanceof window.Attr && node.name == 'in' && prop.value !== value) {
        return false;
      }

      return _get(For.prototype.__proto__ || Object.getPrototypeOf(For.prototype), '__compareNodePropertyValue', this).apply(this, arguments);
    }
  }, {
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
    key: 'removed',
    value: function removed() {
      delete this.html;
      this.iterators = null;
      this.iteratorEl = null;
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
      this.iteratorEl = this.createIteratorElement(el.outerHTML);
      el.remove();
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement(html) {
      var el = document.createElement('template');
      el.innerHTML = html;
      return el.content.firstChild;
    }
  }, {
    key: 'loop',
    value: function loop(key, value, index) {
      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__hash = _utils2.default.createHash(value);

      if (this.iterators.length > index) {
        var iterator = this.iterators[index];

        if (this.__index !== iterator.index) {
          iterator.setIndex();
        } else {
          iterator.setIndex(true);
        }

        if (this.__key !== iterator.key) {
          iterator.setKey();
        } else {
          iterator.setKey(true);
        }

        if (!_utils2.default.compare(this.__hash, iterator.hash)) {
          iterator.setValue();
        } else {
          iterator.setValue(true);
        }

        this.__promises.push(_akili2.default.compile(iterator.el, { recompile: { checkChanges: true } }));
        return iterator;
      }

      var el = this.iteratorEl.cloneNode();
      el.innerHTML = this.html;
      this.el.appendChild(el);
      this.__promises.push(_akili2.default.compile(el));
      this.iterators.push(el.__akili);
      return el.__akili;
    }
  }, {
    key: 'draw',
    value: function draw(data) {
      var _this2 = this;

      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object' || data === null) {
        if (_akili2.default.options.debug) {
          // eslint-disable-next-line no-console
          console.warn('"For" component "in" attribute value type must be an object/array');
        }

        data = [];
      }

      this.data = data;
      var index = 0;
      var loop = function loop(key, value, index) {
        return _this2.loop(key, value, index).iterate(index);
      };

      if (Array.isArray(data)) {
        for (var l = data.length; index < l; index++) {
          loop(index, data[index], index);
        }
      } else {
        var keys = Object.keys(data);

        for (var _l = keys.length; index < _l; index++) {
          var key = keys[index];
          loop(key, data[key], index);
        }
      }

      for (var i = index, _l2 = this.iterators.length; i < _l2; i++) {
        var iterator = this.iterators[i];
        iterator.__remove();
        this.iterators.splice(i, 1);
        _l2--;
        i--;
      }

      return Promise.all(this.__promises).then(function () {
        _this2.reset();
        _this2.attrs.onOut.trigger(data, { bubbles: true });
      });
    }

    /**
     * Reset the initial state
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.__iterator = null;
      this.__index = 0;
      this.__key = '';
      this.__value = null;
      this.__hash = '';
      this.__promises = [];
    }
  }]);

  return For;
}(_component2.default);

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag loop
 * @selector loop,tr
 * @attr @see For
 * @scope {*} loopValue - data item's value of the current iteration 
 * @scope {string|number} loopKey - key of the iteration
 * @scope {number} loopIndex - index of the iteration
 */


For.matches = '[in]';
For.events = ['out'];
exports.default = For;

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
    key: 'removed',
    value: function removed() {
      _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'removed', this).apply(this, arguments);
      this.for = null;
      delete this.value;
      delete this.key;
      delete this.index;
      delete this.hash;
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
      this.hash = this.for.__hash;
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
 * {@link https://akilijs.com/docs/scope}
 *
 * All properties starting with __ are not monitored.
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for working with events.
 * An instance of this class allows you to trigger custom javascript events.
 * 
 * {@link https://akilijs.com/docs/events}
 */
var EventEmitter = function () {
  function EventEmitter(name, node, el, component) {
    _classCallCheck(this, EventEmitter);

    this.name = name;
    this.node = node;
    this.el = el;
    this.component = component;
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
    key: "trigger",
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
    key: "dispatch",
    value: function dispatch(_Event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, this.prepareOptions(options)));
      }
    }

    /**
     * Prepere an event options
     * 
     * @param {object} [options] 
     */

  }, {
    key: "prepareOptions",
    value: function prepareOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      options = _extends({ bubbles: true }, options);
      this.node.__component.__prepareAttributeOut(this.node, options.detail);
      return options;
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

    /**
     * Remove the emitter
     */

  }, {
    key: "remove",
    value: function remove() {
      this.unbind();
      delete this.name;
      delete this.name;
      this.node = null;
      this.component = null;
      this.el = null;
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

/**
 * Store allows you to save and distribute data.
 * 
 * {@link https://akilijs.com/docs/store}
 */
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

    value = _utils2.default.copy(value, { plain: true });
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

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {};

/**
 * Globals to use the custom variables in scope expressions
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
var globals = new Proxy(obj, {
  get: function get(target, key) {
    if (key == '__target') {
      return obj;
    }

    return target[key];
  },
  set: function set(target, key, value) {
    target[key] = _akili2.default.wrap(value, { tag: key });
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    _akili2.default.removeTag(key);
    delete target[key];
    return true;
  }
});

exports.default = globals;

/***/ }),
/* 11 */
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

/**
 * Component to work with router templates.
 * 
 * {@link https://akilijs.com/docs/routing#docs_templates}
 * 
 * @tag route
 */
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
   * @param {boolean} load
   * @returns {Promise}
   */


  _createClass(Route, [{
    key: 'setTransition',
    value: function setTransition(transition) {
      var _this2 = this;

      var load = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var state = transition.path.state;

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
        parent: getParentScopeTransition(transition.path),
        state: transition.path.state,
        data: transition.path.data,
        url: transition.path.url,
        params: transition.path.params,
        query: transition.path.query,
        hash: transition.path.hash
      };

      if (!load) {
        return _akili2.default.compile(this.el, { recompile: { checkChanges: true } });
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
/* 12 */
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

var _route = __webpack_require__(11);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Transition class.
 * An instance of this class consists the last actual router transition information.
 * 
 * {@link https://akilijs.com/docs/routing#docs_transition}
 */
var Transition = exports.Transition = function () {
  function Transition(url) {
    var previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Transition);

    this.url = url;
    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = {};
    this.__cancelled = false;
    this.__finised = false;
  }

  /**
   * Redirect to another state
   * 
   * @see router.state
   */


  _createClass(Transition, [{
    key: 'redirect',
    value: function redirect(state) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      options = _extends({}, router.transition.path.options, options);
      this.cancel();
      return router.state.call(router, state, params, query, hash, options);
    }

    /**
     * Reload the current state
     * 
     * @see Transition.prototype.redirect
     */

  }, {
    key: 'reload',
    value: function reload() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      params = _extends({}, this.path.params, params);
      query = _extends({}, this.path.query, query);
      hash = hash === undefined ? this.path.hash : hash;
      return this.redirect(this.path.state.name, params, query, hash, options);
    }

    /**
     * Set the current path
     * 
     * @param {object} path 
     */

  }, {
    key: 'setPath',
    value: function setPath(path) {
      path.parent = this.path || null;
      this.path = _extends({ params: {}, query: {} }, path);
      this.routes.push(this.path);
      this.states[this.path.state.name] = this.path;
    }

    /**
     * Get a route by the state
     *  
     * @param {*} state 
     */

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

    /**
     * Check if it has the state
     * 
     * @param {object} state 
     */

  }, {
    key: 'hasState',
    value: function hasState(state) {
      return !!this.states[state.name];
    }

    /**
     * Check the route is changed
     * 
     * @param {object} route
     */

  }, {
    key: 'isRouteChanged',
    value: function isRouteChanged(route) {
      if (!this.previous) {
        return true;
      }

      var state = route.state;

      if (!this.previous.hasState(state)) {
        return true;
      }

      var paramKeys = [];
      state.fullPattern.replace(router.__paramRegex, function (m, f, v) {
        return paramKeys.push(v);
      });

      for (var key in state.params) {
        if (paramKeys.indexOf(key) == -1) {
          paramKeys.push(key);
        }
      }

      var queryKeys = Object.keys(state.query);
      var watchHash = state.hash !== undefined;
      var prevRoute = this.previous.getRoute(state);

      var prev = {
        params: _utils2.default.includeKeys(prevRoute.params, paramKeys),
        query: _utils2.default.includeKeys(prevRoute.query, queryKeys)
      };

      var current = {
        params: _utils2.default.includeKeys(route.params, paramKeys),
        query: _utils2.default.includeKeys(route.query, queryKeys)
      };

      if (watchHash) {
        prev.hash = prevRoute.hash;
        current.hash = route.hash;
      }

      return !_utils2.default.compare(prev, current);
    }

    /**
     * Cancel the current transition
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
      this.finish();
    }

    /**
     * Finish the transition
     */

  }, {
    key: 'finish',
    value: function finish() {
      this.__finised = true;
    }
  }]);

  return Transition;
}();

/**
 * Akili router
 * 
 * {@link https://akilijs.com/docs/routing}
 */


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
  this.__paramRegex = /(\/?:([\w\d-]+))/g;
  this.__routeSelector = function (c) {
    return c instanceof _route2.default;
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
    params: {},
    query: {},
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
 * @param {string} state
 * @param {object} [params] - params for state {id: 1} => '/app/:id' => '/app/1'
 * @param {object} [query] - query {x: 1} => '/app/?x=1'
 * @param {string} [hash]
 * @param {object} [options]
 */
router.state = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _this = this;

  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  if (!state) {
    throw new Error('Not found route state with name ' + state);
  }

  options = _extends({}, options);
  options.manual = true;

  var _prepareStateArgs = this.prepareStateArgs(state, params, query, hash, options, false);

  params = _prepareStateArgs.params;
  query = _prepareStateArgs.query;
  hash = _prepareStateArgs.hash;
  options = _prepareStateArgs.options;

  var url = this.createStateUrl(state, params, query, hash, options);
  this.isolate(function () {
    return _this.setUrl(url);
  });
  return this.changeState(options);
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
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options = _extends({}, options);
  options.manual = true;
  this.isolate(function () {
    return _this2.setUrl(url);
  });
  return this.changeState(options);
};

/**
 * Router initialization. Should be called before Akili.init()
 *
 * @param {string} [defaultUrl]
 * @param {boolean} [hashMode=true]
 */
router.init = function () {
  var _this3 = this;

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
    _this3.changeState().catch(function (err) {
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
  window.history.pushState(undefined, undefined, url);
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
 * Replace url
 *
 * @param {string} url
 */
router.replaceUrl = function (url) {
  this.hashMode ? this.replaceHashUrl(url) : this.replaceHistoryUrl(url);
};

/**
 * Set url using history
 *
 * @param url
 */
router.replaceHistoryUrl = function (url) {
  window.history.replaceState(undefined, undefined, url);
};

/**
 * Set url using hash
 *
 * @param url
 */
router.replaceHashUrl = function (url) {
  window.history.replaceState(undefined, undefined, '#' + (url || '/'));
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
 * @param {object} [options]
 * @param {boolean} [prepare]
 */
router.createStateUrl = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var prepare = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  options = _extends({}, options);

  if (prepare) {
    var _prepareStateArgs2 = this.prepareStateArgs(state, params, query, hash, options);

    params = _prepareStateArgs2.params;
    query = _prepareStateArgs2.query;
    hash = _prepareStateArgs2.hash;
    options = _prepareStateArgs2.options;
  }

  var url = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    return '/' + (params[v] || '');
  });
  url = url.replace(/^\^/, '');
  url = this.splitSlashes(url);

  if (Object.keys(query).length) {
    url += '?' + _request2.default.paramsToQuery(query);
  }

  if (!this.hashMode && hash) {
    url += '#' + hash.replace('#', '');
  }

  return url;
};

/**
 * Prepare the state arguments
 * 
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 * @param {object} [options]
 */
router.prepareStateArgs = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var args = { params: params, query: query, hash: hash, options: options };

  for (var i = 0; i < 999; i++) {
    var paramsTemp = this.prepareStateParams(state, params, args);
    var queryTemp = this.prepareStateQuery(state, query, args);
    var hashTemp = this.prepareStateHash(state, hash, args);

    if (hashTemp === null) {
      options.emptyHash = null;
    } else if (hashTemp === '') {
      options.emptyHash = '';
    }

    var newArgs = { params: paramsTemp, query: queryTemp, hash: hashTemp, options: options };

    if (_utils2.default.compare(newArgs, args)) {
      break;
    }

    args = newArgs;
  }

  return args;
};

/**
 * Prepare the state params
 * 
 * @param {string|Object} state
 * @param {object} params
 * @param {object} [args]
 */
router.prepareStateParams = function (state, params, args) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var list = [params];
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).params);
  }

  return this.createStateArgs(list, args);
};

/**
 * Prepare the state query
 * 
 * @param {string|Object} state
 * @param {object} query
 * @param {object} [args]
 */
router.prepareStateQuery = function (state, query, args) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var list = [query];
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).query);
  }

  return this.createStateArgs(list, args);
};

/**
 * Merge list items as transition objects
 * 
 * @param {object[]} list
 * @param {object} [args]
 */
router.createStateArgs = function (list) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { params: {}, query: {} };

  var all = {};
  var excluded = {};

  for (var i = 0, l = list.length; i < l; i++) {
    var obj = list[i];
    var keys = Object.keys(obj);

    for (var k = 0, c = keys.length; k < c; k++) {
      var key = keys[k];
      var val = obj[key];

      if (excluded[key]) {
        continue;
      }

      val = typeof val == 'function' ? val(args) : val;

      if (val === undefined) {
        continue;
      }

      if (val === null) {
        delete all[key];
        excluded[key] = true;
        continue;
      }

      all[key] = val;
    }
  }

  return all;
};

/**
 * Prepare the state hash
 * 
 * @param {string|Object} state
 * @param {string} hash
 * @param {object} [args]
 */
router.prepareStateHash = function (state, hash, args) {
  if (hash === null) {
    return hash;
  }

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    var val = this.getState(current).hash;
    val = typeof val == 'function' ? val(args) : val;

    if (val === undefined) {
      continue;
    }

    if (val === null) {
      return null;
    }

    hash = val;
  }

  return hash;
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
  var params = {};

  url = url.split('?')[0];
  url = url.split('#')[0];

  var urlPattern = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    keys.push(v);
    return '/?([^/]*)';
  });

  urlPattern = urlPattern.replace(/([^^/]+)[/]+$/, '$1');
  var regex = new RegExp(urlPattern, 'g');
  var isIncluded = url.match(regex);

  if (!isIncluded) {
    return null;
  }

  url.replace(regex, function (m) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    args = args.slice(0, args.length - 2);

    for (var i = 0, l = args.length; i < l; i++) {
      var v = args[i];
      v && (params[keys[i]] = v);
    }
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
  var url = router.transition && !router.transition.__finished ? router.transition.url : this.getUrl();
  url = this.splitSlashes('/' + url.split('?')[0] + '/');
  var urlPattern = state.fullPattern.replace(this.__paramRegex, '/?([^/]*)');
  urlPattern = urlPattern.replace(/^\^/, '').replace(/\$$/, '');
  var str = includes ? urlPattern : this.splitSlashes('^/' + urlPattern + '/$');
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
  var _this4 = this;

  var i = 0;

  var find = function find(el) {
    var route = el.child(_this4.__routeSelector);

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
 * Reload the state
 * 
 * @see Transition.reload
 */
router.reload = function () {
  var _transition;

  if (!this.transition) {
    throw new Error('Not found an active transition to reload the state');
  }

  return (_transition = this.transition).reload.apply(_transition, arguments);
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
 * 
 * @param {object} [options]
 */
router.changeState = function () {
  var _this5 = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (this.__isolated) {
    return Promise.resolve();
  }

  var url = this.getUrl();
  var params = {};
  var query = this.getUrlQuery();
  var hash = this.hashMode ? '' : window.location.hash.replace('#', '');
  var prevTransition = router.transition || null;
  var transition = router.transition = new Transition(url, prevTransition);
  var level = 0;

  window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));

  var next = function next(states) {
    if (!states.length) {
      return Promise.resolve();
    }

    var content = _this5.getArrayPatternContent(states, url);

    if (!content) {
      return Promise.resolve();
    }

    var state = content.state;
    transition.setPath({ state: state, component: route });
    params = _extends({}, params, content.params);
    hash = hash || options.emptyHash;

    var _prepareStateArgs3 = _this5.prepareStateArgs(state, params, query, hash, options);

    params = _prepareStateArgs3.params;
    query = _prepareStateArgs3.query;
    hash = _prepareStateArgs3.hash;
    options = _prepareStateArgs3.options;

    hash = hash || '';
    var realUrl = _this5.createStateUrl(state, params, query, hash, options, false);
    _this5.isolate(function () {
      return _this5.replaceUrl(realUrl);
    });
    var route = state.abstract ? null : _this5.getRoute(level);

    if (!route && !state.abstract) {
      throw new Error('Not found route component for state "' + state.name + '"');
    }

    transition.path.params = params;
    transition.path.query = query;
    transition.path.hash = hash;
    transition.path.url = realUrl;
    transition.path.options = options;
    !state.abstract && level++;
    var isDifferent = true;

    if (realUrl != url) {
      isDifferent = transition.isRouteChanged(transition.path);
    }

    var load = isDifferent && options.reload !== false;

    return Promise.resolve(load ? state.handler(transition) : transition.path.data).then(function (data) {
      transition.path.data = data;
      state.title && (document.title = typeof state.title == 'function' ? state.title(transition) : state.title);

      if (transition.__cancelled) {
        return;
      }

      if (state.abstract) {
        return;
      }

      var prevRoute = transition.previous && transition.previous.getRoute(state);
      prevRoute && !prevRoute.loaded && (load = true);
      return route.setTransition(transition, load).then(function () {
        return transition.path.loaded = true;
      });
    }).then(function () {
      return next(state.children);
    });
  };

  return next(this.getStatesByLevel(0)).then(function () {
    if (!transition.routes.length) {
      if (_this5.__redirects) {
        throw new Error('Wrong router default url "' + _this5.defaultUrl + '"');
      }

      if (_this5.defaultUrl) {
        if (_this5.defaultUrl == _this5.getUrl()) {
          throw new Error('Not found any routes');
        }

        _this5.isolate(function () {
          return _this5.replaceUrl(_this5.defaultUrl);
        });
        _this5.__redirects++;
        return _this5.changeState();
      }

      if (_akili2.default.options.debug) {
        // eslint-disable-next-line no-console
        console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
      }
    }

    if (!options.saveScrollPosition && (!transition.path || !transition.path.hash)) {
      window.scrollTo(0, 0);
    }

    _this5.__redirects = 0;
    transition.finish();
    window.dispatchEvent(new CustomEvent('state-changed', { detail: transition }));
    return transition;
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
/* 13 */
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
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag if
 * @selector if[is]
 * @attr {boolean} is - show the element content or not
 * @attr {boolean} recreate - delete the content and recreate or just show/hide 
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
    _this.prevState = false;
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
      this.attr('recreate', this.setRecreation);
      return this.attr('is', this.setIs);
    }
  }, {
    key: 'setIs',
    value: function setIs(val) {
      this.prevState = this.state;
      this.state = !!val;
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
      var res = Promise.resolve();

      if (this.state && !this.active) {
        if ((this.recreate || !this.isCompiled) && this.prevState !== this.state) {
          res = this.compile();
        }

        this.el.style.setProperty('display', this.display, 'important');
      } else {
        if (this.recreate) {
          this.empty();
        } else if (!this.isCompiled && this.prevState !== this.state) {
          res = this.compile();
        }

        this.el.style.setProperty('display', 'none', 'important');
      }

      return res;
    }
  }, {
    key: 'compile',
    value: function compile() {
      var res = void 0;
      this.empty();
      this.el.innerHTML = this.html;
      res = _akili2.default.compile(this.el, { recompile: true });
      this.isCompiled = true;
      return res;
    }
  }]);

  return If;
}(_component2.default);

/**
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag else-if
 * @selector else-if[is]
 * @attr {boolean} is @see If
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

    var _this2 = _possibleConstructorReturn(this, (_ref2 = ElseIf.__proto__ || Object.getPrototypeOf(ElseIf)).call.apply(_ref2, [this].concat(args)));

    _this2.active = true;
    return _this2;
  }

  return ElseIf;
}(If);

/**
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag else
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
/* 14 */
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

/**
 * Component to work with select.
 * 
 * {@link https://akilijs.com/docs/components#docs_select}
 * 
 * @tag select  
 * @attr {string} value - actual value
 * @attr [in] @see For
 */
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
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        return _this2.el.content = _this2.getContent();
      });
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
      var el = _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'createIteratorElement', this).apply(this, arguments);

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

Select.booleanAttributes = ['multiple'].concat(_for2.default.booleanAttributes);
Select.events = ['change'].concat(_for2.default.events);
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
/* 15 */
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

/**
 * Component to work with input elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_checkbox_and_radio}
 * 
 * @tag input
 * @attr @see Text
 * @message @see Text
 */
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
    key: 'compiled',
    value: function compiled() {
      (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'setChecked',
    value: function setChecked(value) {
      value = !!value;

      if (this.el.checked === value) {
        return;
      }

      this.el.checked = value;
      this.__isCompiled && this.attrs.onChange.dispatch(Event, { bubbles: true });
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

Input.booleanAttributes = ['checked', 'multiple'].concat(_text2.default.booleanAttributes);
Input.events = ['change'].concat(_text2.default.events);
exports.default = Input;

/***/ }),
/* 16 */
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
 * Component to work with radio group.
 * 
 * {@link https://akilijs.com/docs/components#docs_radio_group}
 * 
 * @tag radio
 * @selector radio[name]
 * @attr {string} name - name of the group
 * @attr {string|null} value - selected value
 * @attr [in] @see For
 * @message {string} radio - sent on value change
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
      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'created', this).apply(this, arguments);
      }
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        _akili2.default.nextTick(function () {
          var value = _this2.getRadioValue();

          if (value === _this2.prevValue) {
            return;
          }

          _this2.prevValue = value;
          _this2.attrs.onRadio.trigger(value, { bubbles: true });
        });
      });

      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'compiled', this).apply(this, arguments);
      }
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      this.attr('in', this.setNames, { callOnStart: false });
      this.attr('value', this.setValue);
      this.attr('name', this.setNames);

      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'resolved', this).apply(this, arguments);
      }
    }
  }, {
    key: 'setNames',
    value: function setNames(name) {
      var children = this.children('input[type=radio]');

      for (var i = 0, l = children.length; i < l; i++) {
        children[i].el.setAttribute('name', name || this.attrs.name);
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
 * Component to work with radio group item.
 * 
 * {@link https://akilijs.com/docs/components#docs_radio_group}
 * 
 * @tag radio-button
 * @attr {string} value - value
 */


Radio.matches = '[name]';
Radio.events = ['radio'].concat(_for2.default.events);
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

/**
 * Component to work with textarea.
 * 
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * 
 * @tag textarea
 * @attr @see Text
 * @message @see Text
 */
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
/* 18 */
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

/**
 * Component for elements with contenteditable attribute.
 * 
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @tag content
 * @selector content,[contenteditable]
 * @attr @see Text
 * @attr {boolean} [editable] - editable or not
 */
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
/* 19 */
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

/**
 * Component to include templates by url.
 * 
 * {@link https://akilijs.com/docs/components#docs_html_templates}
 * 
 * @tag include
 * @selector include[url]
 * @attr {string} url - template path
 * @attr {number|function|boolean} [cache] - request cache {@link https://akilijs.com/docs/requests#docs_cache}
 * @message {void} load - sent on the template load
 * @message {Error} error - sent on error
 */
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

/**
 * Component for iframes.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag iframe
 * @attr {string} [url]
 */
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

/**
 * Component for images.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag img
 * @attr {string} [url]
 */
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

/**
 * Component for embed elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag embed
 * @attr {string} [url]
 */
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

/**
 * Component for audio elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag audio
 * @attr {string} [url]
 */
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

/**
 * Component for video elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag video
 * @attr {string} [url]
 */
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

/**
 * Component for track elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag track
 * @attr {string} [url]
 */
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

/**
 * Component for source elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag source
 * @attr {string} [url]
 */
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
/* 27 */
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

/**
 * Component for object elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag object
 * @attr {string} [url]
 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(12);

var _router2 = _interopRequireDefault(_router);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for links.
 * It works with router too. 
 * 
 * {@link https://akilijs.com/docs/components#docs_links}
 * 
 * @tag a
 * @selector a[state]:not([url]),a[url]:not([state])
 * @attr {string} [url] - url to go on click
 * @attr {string} [state] - state of router to go on click {@link https://akilijs.com/docs/routing}
 * @attr {object} [params] - params for the state {@link https://akilijs.com/docs/routing#docs_state_params}
 * @attr {object} [query] - query for the state {@link https://akilijs.com/docs/routing#docs_state_query}
 * @attr {string} [hash] - hash for the state {@link https://akilijs.com/docs/routing#docs_state_hash}
 * @attr {object} [options] - options for the state {@link https://akilijs.com/docs/routing#docs_router.location}
 * @scope {boolean} isActiveState - the state is active or not 
 * @scope {boolean} inActiveState - the state is part of the active state or not
 */
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
    _this.options = {};
    _this.isUrl = _this.el.hasAttribute('url');
    return _this;
  }

  _createClass(A, [{
    key: 'compiled',
    value: function compiled() {
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
      if (typeof hash != 'string' && hash !== undefined && hash !== null) {
        throw new Error('Router state hash must be a string|null');
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
        this.attrs.href = _router2.default.createStateUrl(this.state, this.params, this.query, this.hash, this.options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9fdGFncyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwia2V5IiwiZ2xvYmFscyIsIl9fdGFyZ2V0IiwidXRpbHMiLCJjb21wb25lbnRzIiwic2VydmljZXMiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsIkEiLCJBdWRpbyIsIkNvbnRlbnQiLCJGb3IiLCJFbWJlZCIsIklmIiwiSW5jbHVkZSIsIklucHV0IiwiSWZyYW1lIiwiSW1hZ2UiLCJPYmplY3QiLCJPYmplY3RzIiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJkZWZpbmUiLCJlcnJvckhhbmRsaW5nIiwiaXNvbGF0ZUV2ZW50cyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJpIiwibCIsImxlbmd0aCIsImRlZmF1bHRzIiwiZm4iLCJwdXNoIiwiY2xlYXJHbG9iYWxzIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5IiwidW53cmFwIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsIl9fZWwiLCJfX2NvbXBvbmVudCIsIl9fcGFyZW50IiwiZ2V0QWtpbGlQYXJlbnRzIiwidHJlZSIsImFyciIsImNoZWNrIiwibm9kZSIsInBhcmVudE5vZGUiLCJfX2FraWxpIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwicmVzIiwicHJvcHMiLCJrIiwicHJvcCIsInZhbCIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcG9uZW50IiwiX19zY29wZSIsIl9faXNSZXNvbHZlZCIsIl9fdHJpZ2dlclN0b3JlQW5kQXR0ciIsIl9fZXZhbHVhdGVCeUtleXMiLCJpc0RlbGV0ZWQiLCJ1bmV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsIndyYXBwaW5nIiwidW5pc29sYXRlIiwiaXNvbGF0aW9uIiwibmV4dFRpY2siLCJyZXNvbHZlIiwidGhlbiIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIl9fY2FuY2VsbGVkIiwiZmluZCIsInAiLCJfX3ByZXZlbnQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwiX19jb21waWxlIiwiYWxsIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwicmVtb3ZlQ29tcG9uZW50IiwiYWxpYXMiLCJyZW1vdmVBbGlhcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiQUtJTElfU1NSIiwiY29uc3RydWN0b3IiLCJjYXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImlzQXJyYXkiLCJudW0iLCJpbmRleCIsImNhbGxiYWNrIiwiX19pc29sYXRlZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsInZhbHVlIiwid3JhcCIsIm9iaiIsImN1cnJlbnQiLCJ3cmFwRnVuY3Rpb24iLCJjIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwicmV2ZXJzZSIsImFraWxpV3JhcHBlZEZ1bmN0aW9uIiwidGFnIiwiYWRkVGFnIiwiaGFzVGFnIiwicmVtb3ZlVGFnIiwidW5kZWZpbmVkIiwidHJpZ2dlclRhZyIsIl9fZXZhbHVhdGVOb2RlIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZSIsIl9fY2FjaGUiLCJfX2luc3RhbmNlcyIsIm91dGVySFRNTCIsImNhY2hlIiwiX19tYWluIiwiZGVpbml0Iiwic3RvcmVLZXlzIiwiY2xhc3MiLCJjbGFzc2VzIiwic3R5bGUiLCJzdHlsZXMiLCJzcGxpdCIsImRlbCIsImV4Y2x1ZGUiLCJleHBzIiwibGFzdCIsIlJlZ0V4cCIsImluZGV4T2YiLCJvcGVuIiwiZmlsdGVyIiwiaGFuZGxlciIsIm1hdGNoIiwiaXRlbSIsImZpbHRlcmVkIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwiaW5jbHVkZUtleXMiLCJuZXdPYmoiLCJvYmpLZXlzIiwiZXhjbHVkZUtleXMiLCJpc1Njb3BlUHJveHkiLCJpc1BsYWluT2JqZWN0IiwiY29weSIsIm5lc3RlZCIsInBsYWluIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJjb21wYXJlIiwiaWdub3JlVW5kZWZpbmVkIiwiY2xlYXJVbmRlZmluZWQiLCJhS2V5cyIsImJLZXlzIiwiY3JlYXRlSGFzaCIsInNvdXJjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJoYXNoIiwiY2hhciIsImNoYXJDb2RlQXQiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWNvZGVIdG1sRW50aXRpZXMiLCJ0b0NhbWVsQ2FzZSIsIm0iLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemUiLCJvYmplY3QiLCJyZWR1Y2UiLCJvIiwiaGFzUHJvcGVydHlCeUtleXMiLCJoYXMiLCJoYXNPd25Qcm9wZXJ0eSIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwibm93IiwiZGVib3VuY2UiLCJkZWxheSIsImNsZWFyVGltZW91dCIsIl9fZGVib3VuY2VUaW1lb3V0IiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJpYWJsZXMiLCJ2YXJzIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlU3RvcmVLZXlzIiwiX19kaXNhYmxlQXR0cktleXMiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnRzIiwiX19jb250ZW50IiwiX19hdHRycyIsIl9fYXR0ckxpbmtzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsImNoZWNrQ2hhbmdlcyIsInNldEV2ZW50cyIsInNldFBhcmVudHMiLCJzZXRCb29sZWFuQXR0cmlidXRlcyIsImRlZmluZUF0dHJpYnV0ZXMiLCJfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRlUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlIiwiX19nZXROb2RlUHJvcGVydHkiLCJhdHRyTmFtZSIsImVsZW1lbnROYW1lIiwiX19lbGVtZW50IiwiYXR0cmlidXRlTmFtZSIsIkF0dHIiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJfX2V4cHJlc3Npb24iLCJ0cmltIiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiZXZhbENvbXBvbmVudCIsImNvbSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJlbnRCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2UiLCJfX2NyZWF0ZUtleXNIYXNoIiwicGFyZW50c0hhc2giLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJlIiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsImVsZW1lbnQiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJfX2dldEFsbEJpbmRzIiwiX19pbml0aWFsaXplZCIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UiLCJfX2Rpc2FibGVLZXlzIiwiY2hlY2tQcm9wIiwiX19zZXQiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidW5iaW5kIiwiX19pc1N5c3RlbUJpbmRpbmdLZXkiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiX19ldmFsdWF0ZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19wcmVwYXJlQXR0cmlidXRlSW4iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJfX2F0dHJUcmlnZ2VyQnlOYW1lIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2lzRXZlbnQiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9faGFzQmluZGluZ3MiLCJfX2V2YWx1YXRlRXZlbnQiLCJpc0F0dHIiLCJoYXNCaW5kaW5ncyIsImlzQm9vbGVhbiIsImlzRXZlbnQiLCJfX2lzQm9vbGVhbiIsInNhdmVCaW5kaW5ncyIsIl9fdW5iaW5kQnlOb2RlcyIsIl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX19kZWluaXRpYWxpemVOb2RlIiwiUHJveHkiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJfX2lzU3lzdGVtS2V5IiwiZXhjQXJyIiwicmVhbFRhcmdldCIsImZvclBhcmVudHMiLCJmb3JEYXRhIiwicG9wIiwiX19iaW5kTm9kZSIsIl9fY2hlY2tEaXNhYmxlbWVudCIsIkNIRUNLX0VYSVNURU5DRSIsInRhcmdldFBhcmVudFZhbHVlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJjdXJyZW50S2V5cyIsImN1cnJlbnRLZXlTdHJpbmciLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJ0eXBlIiwicHJveHkiLCJfX2dldERpc2FibGVtZW50VHlwZVN0b3JlIiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwia2V5U3RyaW5nIiwiaW5mbyIsImRhdGUiLCJjYWxsT25TdGFydCIsImF0dHJzS2V5cyIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJDSEVDS19QUk9YWSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsInRhcmdldEtleXMiLCJfX29ic2VydmUiLCJpc29sYXRpb25IYXNoIiwidXBkYXRlZEF0IiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJjb2xsZWN0Iiwicm9vdEF0dHJzIiwibm9kZXMiLCJfX21hcE5vZGVzIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJqIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19lbXB0eSIsIl9fY2xlYXJTdG9yZUxpbmtzIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJyaWdodCIsImxldmVsRWxlbWVudHMiLCJ1bnNoaWZ0IiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiUmVxdWVzdCIsImJhc2VVcmwiLCJnZXRIZWFkZXJzIiwieGhyIiwiaGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImxpbmUiLCJzdGF0dXNFcnJvclBhdHRlcm4iLCJyZWplY3QiLCJtZXRob2QiLCJYTUxIdHRwUmVxdWVzdCIsImJlZm9yZSIsInRyYW5zZm9ybUJlZm9yZSIsIm9uU3RhcnQiLCJqc29uIiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwicGFyYW1zIiwicGFyYW1zVG9RdWVyeSIsImNyZWF0ZUNhY2hlSGFzaCIsInVzZXIiLCJwYXNzd29yZCIsIl9jYWNoZSIsImdldENhY2hlIiwiY3JlYXRlZEF0IiwidHJhbnNmb3JtQWZ0ZXIiLCJyZXN1bHQiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVyS2V5cyIsInNldFJlcXVlc3RIZWFkZXIiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZVhNTCIsInJlc3BvbnNlVVJMIiwiY3JlYXRlQ2FjaGUiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsInZhbHVlS2V5IiwiZGVib3VuY2VJbnRlcnZhbCIsIm9uRGVib3VuY2UiLCJzZXRGb2N1cyIsInNldFZhbHVlIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiZm9jdXMiLCJibHVyIiwiTG9vcCIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yRWwiLCJyZXNldCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIm1hc2siLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIl9faW5kZXgiLCJfX2tleSIsIl9fdmFsdWUiLCJfX2hhc2giLCJpdGVyYXRvciIsInNldEluZGV4Iiwic2V0S2V5IiwiX19wcm9taXNlcyIsImNsb25lTm9kZSIsImxvb3AiLCJpdGVyYXRlIiwib25PdXQiLCJfX2l0ZXJhdG9yIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJzdHJpY3QiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsInByZXBhcmVPcHRpb25zIiwiX0V2ZW50IiwiX19wcmVwYXJlQXR0cmlidXRlT3V0IiwidHJhbnNpdGlvbiIsImxvYWQiLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImV4aXN0cyIsIlRyYW5zaXRpb24iLCJwcmV2aW91cyIsInJvdXRlcyIsInN0YXRlcyIsIl9fZmluaXNlZCIsInJlZGlyZWN0Iiwicm91dGUiLCJoYXNTdGF0ZSIsInBhcmFtS2V5cyIsImZ1bGxQYXR0ZXJuIiwiX19wYXJhbVJlZ2V4IiwiZiIsInF1ZXJ5S2V5cyIsIndhdGNoSGFzaCIsInByZXZSb3V0ZSIsImdldFJvdXRlIiwicHJldiIsImZpbmlzaCIsImhhc2hNb2RlIiwiX19yZWRpcmVjdHMiLCJfX3JvdXRlU2VsZWN0b3IiLCJhZGQiLCJwYXR0ZXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJhYnN0cmFjdCIsInNldFN0YXRlIiwiZ2V0U3RhdGUiLCJtYW51YWwiLCJwcmVwYXJlU3RhdGVBcmdzIiwiY3JlYXRlU3RhdGVVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsImVycm9yIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwicmVwbGFjZVVybCIsInJlcGxhY2VIYXNoVXJsIiwicmVwbGFjZUhpc3RvcnlVcmwiLCJyZXBsYWNlU3RhdGUiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiZW1wdHlIYXNoIiwibmV3QXJncyIsImNyZWF0ZVN0YXRlQXJncyIsImV4Y2x1ZGVkIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiX19maW5pc2hlZCIsImluQWN0aXZlU3RhdGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsInJlbG9hZCIsInByZXZUcmFuc2l0aW9uIiwic2V0UGF0aCIsInJlYWxVcmwiLCJpc0RpZmZlcmVudCIsImlzUm91dGVDaGFuZ2VkIiwidGl0bGUiLCJsb2FkZWQiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJFbHNlSWYiLCJFbHNlIiwicHJldlN0YXRlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRSZWNyZWF0aW9uIiwic2V0SXMiLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldEFjdGl2aXR5Iiwic2V0UHJvcGVydHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJzZXROYW1lcyIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbm5lY3Rpb24iLCJzZXRDYWNoZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QWxINEJzQixtQjs7QUFBVkcsQyxDQUNaOEcsTyxHQUFVLHVDO0FBREU5RyxDLENBRVpvVyxpQixHQUFvQixJO2tCQUZScFcsQyIsImZpbGUiOiJha2lsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLl9fZGVmYXVsdHMgPSBbXTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWVcbiAgfTtcbiAgXG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX2NsZWFyZWQgPSBmYWxzZTtcbiAgdGhpcy5fX2NvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5fX2FsaWFzZXMgPSB7fTtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fd2luZG93ID0ge307XG4gIHRoaXMuX190YWdzID0ge307XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlO1xuICB0aGlzLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICBcbiAgdGhpcy5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG4gIF07XG5cbiAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgIGRlbGV0ZSBnbG9iYWxzW2tleV07XG4gIH1cblxuICBnbG9iYWxzLl9fdGFyZ2V0LnV0aWxzID0gdXRpbHM7XG5cbiAgdGhpcy5jb21wb25lbnRzID0ge307XG4gIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgdGhpcy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gIHRoaXMuU2NvcGUgPSBTY29wZTtcbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuICB0aGlzLmdsb2JhbHMgPSBnbG9iYWxzO1xuICB0aGlzLmNvbXBvbmVudHMuQSA9IEE7XG4gIHRoaXMuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG4gIHRoaXMuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG4gIHRoaXMuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuICB0aGlzLmNvbXBvbmVudHMuSWYgPSBJZjtcbiAgdGhpcy5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuICB0aGlzLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbiAgdGhpcy5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbiAgdGhpcy5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG4gIHRoaXMuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuICB0aGlzLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbiAgdGhpcy5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG4gIHRoaXMuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG4gIHRoaXMuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbiAgdGhpcy5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG4gIHRoaXMuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuICB0aGlzLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuICB0aGlzLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbiAgdGhpcy5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgdGhpcy5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuICB0aGlzLmRlZmluZSgpO1xuICB0aGlzLmVycm9ySGFuZGxpbmcoKTtcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpOyBcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZGVmYXVsdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5fX2RlZmF1bHRzW2ldKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHRzXG4gKiBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICovXG5Ba2lsaS5kZWZhdWx0cyA9IGZ1bmN0aW9uIChmbikgeyAgXG4gIHRoaXMuX19kZWZhdWx0cy5wdXNoKGZuKTtcbiAgZm4oKTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fY2xlYXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMudW53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0pO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGNvbnN0IHNjb3BlID0gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbiAgc2NvcGUuX19lbCA9IG51bGw7XG4gIHNjb3BlLl9fY29tcG9uZW50ID0gbnVsbDtcbiAgc2NvcGUuX19wYXJlbnQgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjZW1lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCBzdHIgPT4gISF0aGlzLl9fc2NvcGVzW3N0cl0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBzY29wZSBjaGFuZ2VzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgcHJvcCA9IHByb3BzW2ldO1xuICAgIGNvbnN0IHZhbCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7ICAgIFxuICAgIHByb3AuY29tcG9uZW50Ll9faXNSZXNvbHZlZCAmJiBwcm9wLmNvbXBvbmVudC5fX3RyaWdnZXJTdG9yZUFuZEF0dHIocHJvcC5rZXlzKTtcbiAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdmFsLCBwcm9wLmlzRGVsZXRlZCk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIG9ubHkgcm9vdCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS53cmFwcGluZyA9IGZ1bmN0aW9uIChmbikge1xuICBpZih0aGlzLl9fd3JhcHBpbmcpIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7ICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbiAgcmV0dXJuIHJlczsgICBcbn1cblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgaWYgKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKHJlY29tcGlsZSA9PT0gdHJ1ZT8ge306IHJlY29tcGlsZSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmICghc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYgKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcblxuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7ICBcbiAgXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZihBa2lsaS5nZXRBa2lsaVBhcmVudHMoZWwpLmZpbmQocCA9PiBwLl9fYWtpbGkuX19wcmV2ZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uIChyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTsgICAgXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7ICAgIFxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG4gIFxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1ZykgeyAgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS5yZW1vdmVBbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgXG4gIGlmKCF3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG4gIH0gIFxufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuICAgIFxuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0gICAgXG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZiAobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYXJnc1sxXSA9IGxpc3RlbmVyLmZuO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfG51bWJlcltdfHN0cmluZ1tdfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uIChmbiwgcG9zID0gJ2xhc3QnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgIUFycmF5LmlzQXJyYXkocG9zKSAmJiAocG9zID0gW3Bvc10pO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwb3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbnVtID0gcG9zW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbnVtO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJnc1tudW1dO1xuXG4gICAgICBpZihudW0gPT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4ID0gYXJncy5sZW5ndGggLSAxO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3NbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIWNhbGxiYWNrLl9faXNvbGF0ZWQpIHtcbiAgICAgICAgYXJnc1tpbmRleF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcmdzW2luZGV4XSwgJ19faXNvbGF0ZWQnLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCBvYmplY3RzL2NsYXNzZXMgdG8gaXNvbGF0ZSBhbmQgdW5ldmFsdWF0ZSBkYXRhXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqL1xuQWtpbGkud3JhcCA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3VycmVudCA9IG9iajtcblxuICBpZih0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicpIHtcbiAgICBvYmogPSB0aGlzLndyYXBGdW5jdGlvbihvYmosIG9wdGlvbnMpO1xuXG4gICAgaWYob2JqID09PSBjdXJyZW50KSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuXG4gIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG5cbiAgICBpZighZGVzY3JpcHRvci5jb25maWd1cmFibGUgfHwgIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMucmV2ZXJzZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IG9ialtrZXldLl9fYWtpbGkgfHwgb2JqW2tleV0gfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IHRoaXMud3JhcChvYmpba2V5XSwgb3B0aW9ucykgfSk7XG4gIH0gXG4gIFxuICByZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBVbndyYXAgb2JqZWN0cy9jbGFzc2VzXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICovXG5Ba2lsaS51bndyYXAgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0aGlzLndyYXAob2JqLCB7IHJldmVyc2U6IHRydWUgfSk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY29uc3QgYWtpbGlXcmFwcGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYob3B0aW9ucy50YWcgJiYgQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICBBa2lsaS5hZGRUYWcob3B0aW9ucy50YWcsIEFraWxpLl9fZXZhbHVhdGlvbi5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkud3JhcHBpbmcoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmbik7XG4gIGFraWxpV3JhcHBlZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBha2lsaVdyYXBwZWRGdW5jdGlvbltrZXldID0gZm5ba2V5XTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShha2lsaVdyYXBwZWRGdW5jdGlvbiwgJ19fYWtpbGknLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZuXG4gIH0pO1xuXG4gIHJldHVybiBha2lsaVdyYXBwZWRGdW5jdGlvbjtcbn07XG5cbi8qKlxuICogQWRkIHRoZSB0YWdcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cbkFraWxpLmFkZFRhZyA9IGZ1bmN0aW9uICh0YWcsIG5vZGUpIHtcbiAgaWYodGhpcy5oYXNUYWcodGFnLCBub2RlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0gPSB7fTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSA9IFtdOyAgICBcbiAgfVxuXG4gIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddLnB1c2goeyBub2RlIH0pO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB0YWcgZXhpc3RzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuQWtpbGkuaGFzVGFnID0gZnVuY3Rpb24odGFnLCBub2RlKSB7XG4gIGlmKCFub2RlKXtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAgICBcbiAgfSBcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RhZ11cbiAqIEBwYXJhbSB7Tm9kZXxOb2RlW119IFtub2RlXVxuICovXG5Ba2lsaS5yZW1vdmVUYWcgPSBmdW5jdGlvbiAodGFnLCBub2RlKSB7XG4gIGlmKHR5cGVvZiB0YWcgPT0gJ29iamVjdCcpIHtcbiAgICBub2RlID0gdGFnO1xuICAgIHRhZyA9IHVuZGVmaW5lZDsgICAgXG4gIH1cblxuICBpZighbm9kZSkge1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgICBpZihrID09IHRhZykge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1trZXldW2tdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBpZighT2JqZWN0LmtleXModGhpcy5fX3RhZ3Nba2V5XSkubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybjsgICAgXG4gIH1cblxuICBpZighdGFnKSB7ICAgIFxuICAgICFBcnJheS5pc0FycmF5KG5vZGUpICYmIChub2RlID0gW25vZGVdKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbm9kZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlW2ldLl9fbmFtZV1cbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICBpZihrZXkgPT0gdGFnKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW2tleV07XG4gICAgfVxuICB9XG5cbiAgaWYoIU9iamVjdC5rZXlzKHRoaXMuX190YWdzW25vZGUuX19uYW1lXSkubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGUuX19uYW1lXTtcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB0YWcgbm9kZSBleHByZXNzaW9uc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKi9cbkFraWxpLnRyaWdnZXJUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgIGlmKGsgPT0gdGFnKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuX190YWdzW2tleV1ba107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBvYmogPSBhcnJbaV07XG4gICAgICAgICAgb2JqLm5vZGUuX19jb21wb25lbnQuX19ldmFsdWF0ZU5vZGUob2JqLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBhbiBpbml0aWFsaXphdGlvbiBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICovXG5Ba2lsaS50cmlnZ2VySW5pdCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbiAocm9vdCkge1xuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKCkgICAgICBcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKHsgaW5pdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4geyAgICBcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UICYmICh3aW5kb3cuQUtJTElfQ0xJRU5ULnJlcXVlc3RDYWNoZSA9IHRoaXMucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUoKSk7XG4gICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGluaXQgPSAoaW5zdGFuY2UsIG9iaikgPT4ge1xuICAgIGZvcihsZXQga2V5IGluIG9iaikge1xuICAgICAgaW5zdGFuY2UuX19jYWNoZVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG4gIFxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgbGV0IGluc3RhbmNlID0ga2V5ID09PSAnX19tYWluJz8gcmVxdWVzdDogcmVxdWVzdC5fX2luc3RhbmNlc1trZXldO1xuICAgIGluaXQoaW5zdGFuY2UsIG9ialtrZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlcXVlc3QgY2FjaGVcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYWNoZSA9IHsgX19tYWluOiByZXF1ZXN0Ll9fY2FjaGUgfTtcblxuICBmb3IobGV0IGtleSBpbiByZXF1ZXN0Ll9faW5zdGFuY2VzKSB7XG4gICAgY2FjaGVba2V5XSA9IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XS5fX2NhY2hlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEV4dGVuZGVkIHNwbGl0IG9mIHRoZSBzdHJpbmdcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgcGxhaW46IGZhbHNlLCAuLi5vcHRpb25zIH07XG5cbiAgY29uc3QgbmV4dCA9IChvYmopID0+IHtcbiAgICBpZihvcHRpb25zLnBsYWluICYmICF0aGlzLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgICAgdmFsID0gdmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgb3B0aW9ucy5uZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICgoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSB7IGVudW1lcmFibGU6IHRydWUsIGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgY2xlYXJVbmRlZmluZWQgPSAodmFsKSA9PiB7XG4gICAgICBsZXQgb2JqID0gQXJyYXkuaXNBcnJheSh2YWwpPyBbXToge307XG4gICAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKHZhbCk7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFsW2tleV0gIT09IHVuZGVmaW5lZCAmJiAob2JqW2tleV0gPSB2YWxba2V5XSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmlnbm9yZVVuZGVmaW5lZCkge1xuICAgICAgYSA9IGNsZWFyVW5kZWZpbmVkKGEpO1xuICAgICAgYiA9IGNsZWFyVW5kZWZpbmVkKGIpO1xuICAgIH1cblxuICAgIGxldCBhS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGEpO1xuICAgIGxldCBiS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGIpO1xuICAgIFxuICAgIGlmIChhS2V5cy5sZW5ndGggIT0gYktleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYSA9IHRoaXMuaXNTY29wZVByb3h5KGEpPyBhLl9fdGFyZ2V0OiBhO1xuICAgIGIgPSB0aGlzLmlzU2NvcGVQcm94eShiKT8gYi5fX3RhcmdldDogYjtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBoYXNoIGZyb20gYSBzdHJpbmdcbiAqIFxuICogQHBhcmFtIHsqfSBzb3VyY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNyZWF0ZUhhc2ggPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgdHlwZW9mIHNvdXJjZSA9PSAnb2JqZWN0JyAmJiAoc291cmNlID0gSlNPTi5zdHJpbmdpZnkoc291cmNlKSlcbiAgdHlwZW9mIHNvdXJjZSAhPSAnc3RyaW5nJyAmJiAoc291cmNlID0gJ+KggCcgKyBTdHJpbmcoc291cmNlKSk7XG4gIGxldCBoYXNoID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGFyID0gc291cmNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICBoYXNoID0gaGFzaCAmIGhhc2g7XG4gIH1cblxuICByZXR1cm4gaGFzaCArICcnO1xufVxuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gIGxldCB2YWwgPSAnJzsgIFxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICghKG5vdyAlIGkpKSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG4vKipcbiAqICBDcmVhdGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBkZWJvdW5jZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqIEByZXR1cm5zIHtmbn1cbiAqL1xudXRpbHMuZGVib3VuY2UgPSBmdW5jdGlvbihmbiwgZGVsYXkgPSAwKSB7ICBcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQoZm4uX19kZWJvdW5jZVRpbWVvdXQpO1xuICAgIGZuLl9fZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgIGRlbGV0ZSBmbi5fX2RlYm91bmNlVGltZW91dDtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZyb20gd2hpY2ggYWxsIGNvbXBvbmVudHMgYXJlIGluaGVyaXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc11cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCB2YXJpYWJsZXMgPSB7fSkge1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24sICc7JywgWydcIicsIFwiJ1wiLCAnYCddKTsgIFxuICAgIGV4cHNbZXhwcy5sZW5ndGggLSAxXSA9IGByZXR1cm4gJHtleHBzW2V4cHMubGVuZ3RoIC0gMV19YDtcblxuICAgIGZvciAobGV0IGtleSBpbiB2YXJpYWJsZXMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKHZhcmlhYmxlc1trZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV0gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIGlmICghKGVsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhbiBodG1sIGVsZW1lbnQgdG8gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvcmApO1xuICAgIH1cblxuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVTdG9yZUtleXMgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJLZXlzID0ge307XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fY29udGVudCA9ICcnO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgY2hlY2tDaGFuZ2VzOiBmYWxzZSwgXG4gICAgICBzZXRFdmVudHM6IHRydWUsXG4gICAgICBzZXRQYXJlbnRzOiB0cnVlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB0cnVlOyBcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHt9OyAgXG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zKTsgICAgXG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRFdmVudHMgJiYgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0UGFyZW50cyAmJiB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0Qm9vbGVhbkF0dHJpYnV0ZXMgJiYgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5kZWZpbmVBdHRyaWJ1dGVzICYmIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7IFxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzICYmIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KSkgeyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVOb2RlKGNoaWxkLCB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2UpOyAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07ICAgIFxuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmICh0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMucmVzb2x2ZWQoKSkpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX19pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHsgICAgXG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7ICAgICBcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2NvcGUnKSB8fCBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUoaXNSb290PyAncm9vdCc6IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICAgIGlzUm9vdCAmJiAoQWtpbGkucm9vdCA9IHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBfX3Njb3BlID0gc2NvcGU7XG4gICAgbGV0IF9zY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHRoaXMuc2NvcGUpO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICB0aGlzLl9fY29udGVudCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpOyAgICBcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSBhIG5vZGUgcHJvcGVydHkgdmFsdWVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKi9cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUsIG9wdGlvbnMgPSB7fSkgeyAgXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhcmUodXRpbHMuY3JlYXRlSGFzaCh2YWx1ZSksIHByb3AuaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4Y2VwdGlvbiBtZXNzYWdlXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVyciBcbiAgICovXG4gIF9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpIHtcbiAgICBsZXQgdGFnTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwudGFnTmFtZTtcbiAgICBsZXQgYXR0ck5hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSAoYXR0ck5hbWUgfHwgdGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZWxlbWVudE5hbWUgPSBub2RlLl9fZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gbm9kZS5uYW1lLnRvTG93ZXJDYXNlKCk6ICcnOyAgICAgICAgXG4gICAgbGV0IG1lc3NhZ2VzID0gWyBlcnIubWVzc2FnZSwgbm9kZS5fX2V4cHJlc3Npb24udHJpbSgpIF07XG4gICAgYXR0cmlidXRlTmFtZSAmJiBtZXNzYWdlcy5wdXNoKGBbYXR0cmlidXRlICR7YXR0cmlidXRlTmFtZX1dYCk7XG4gICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5jb25jYXQoWyBgW2VsZW1lbnQgJHtlbGVtZW50TmFtZX1dYCwgYFtjb21wb25lbnQgJHtjb21wb25lbnROYW1lfV1gIF0pO1xuICAgIHJldHVybiBgRXhwcmVzc2lvbiBlcnJvcjogYCArIG1lc3NhZ2VzLmpvaW4oJ1xcblxcdGF0ICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG4gICAgY29uc3QgZXZhbENvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPZiB8fCBub2RlLl9fY29tcG9uZW50O1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHsgICAgIFxuICAgICAgY291bnRlcisrO1xuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb24gPSBbXTtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyZW50QmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHsgICAgICAgIFxuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UoZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUsIHsgLi4uZ2xvYmFscyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEua2V5cyk7XG4gICAgICAgIGxldCBwYXJlbnRzSGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5wYXJlbnRzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7ICAgICAgICBcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID09IDUwKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFtcbiAgICAgICAgICAgICAgYEZvciBoaWdoZXIgcGVyZm9ybWFuY2UsIGRvbid0IGxvb3AgUHJveHkgYXJyYXlzL29iamVjdHMgaW5zaWRlIGV4cHJlc3Npb24gZnVuY3Rpb25zLCBvciB1c2UgQWtpbGkudW5ldmFsdWF0ZSgpIHRvIHdyYXAgeW91IGNvZGUuYCxcbiAgICAgICAgICAgICAgYCR7IG5vZGUuX19leHByZXNzaW9uLnRyaW0oKSB9YCxcbiAgICAgICAgICAgICAgYHNjb3BlIHByb3BlcnR5IFwiJHsgZGF0YS5wYXJlbnRzLmpvaW4oJy4nKSB9XCJgXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcdGF0ICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgIXBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXT8gcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID0gMTogcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdKys7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVzLCBjb3VudGVyLCBleHByZXNzaW9uLCBhdHRyaWJ1dGVWYWx1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIG5vZGUgYW5kIHNldCBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGtleXMsIGV2YWx1YXRlZCkge1xuICAgIGxldCBiaW5kID0gdGhpcy5fX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKTtcbiAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgaWYgKCFiaW5kKSB7XG4gICAgICB0aGlzLl9fYmluZChrZXlzLCB7IG5vZGUgfSk7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICAgIFxuICAgIFxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGxldCBiaW5kID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuICAgICAgICAgIGRhdGEgPSBiaW5kPyAoYmluZC5fX2RhdGEgfHwgW10pOiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QWxsQmluZHMocHJvcC5rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGNvbnN0IGJpbmQgPSBkYXRhW2tdOyAgIFxuXG4gICAgICAgICAgaWYoIWJpbmQgfHwgIWJpbmQubm9kZSB8fCAhYmluZC5ub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7ICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKHByb3Aua2V5cyk7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUHJvcCA9IGNvbXBvbmVudC5fX2dldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIHByb3Aua2V5cyk7XG4gICAgICAgICAgICBjaGVja1Byb3AgJiYgY2hlY2tQcm9wLmV2YWx1YXRlZCAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQocHJvcC5rZXlzLCBwcm9wLnZhbHVlLCBmYWxzZSwgdHJ1ZSk7IFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMgKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgZmFsc2UpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IC4uLmdsb2JhbHMsICBldmVudDogZSB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gZXZhbHVhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgY2hhbmdlcyBhbmQgZXZhbHVhdGUgdGhlIHBhc3NlZCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2sgPSB0cnVlKSB7XG4gICAgY29uc3Qga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJzsgIFxuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7IFxuICAgICAgY29uc3QgeyByZXMsIGF0dHJpYnV0ZVZhbHVlLCBleHByZXNzaW9uLCBjb3VudGVyIH0gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG4gIFxuICAgICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgICBjb25zdCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgXG4gICAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICAgIH0gICAgICAgICAgXG4gIFxuICAgICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICAgdmFsdWUgPSBjb21wb25lbnQuX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciBnZXR0aW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgICAgXG4gICAgcmV0dXJuIHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciBzZW5kaW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlT3V0KG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYgKCFub2RlIHx8IHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7ICAgIFxuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZiAobm9kZS5fX2lzRXZlbnQpIHtcbiAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkpO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSldID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQXR0ciA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cjtcbiAgICBjb25zdCB2YWwgPSBub2RlW2lzQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIGNvbnN0IGhhc0JpbmRpbmdzID0gZXZhbHVhdGlvblJlZ2V4LnRlc3QodmFsLnRyaW0oKSk7XG4gICAgY29uc3QgaXNCb29sZWFuID0gaXNBdHRyPyAvXmJvb2xlYW4tL2kudGVzdChub2RlLm5vZGVOYW1lKTogZmFsc2U7XG4gICAgY29uc3QgaXNFdmVudCA9IGlzQXR0cj8gL15vbi0oLispL2kudGVzdChub2RlLm5vZGVOYW1lKTogZmFsc2U7XG5cbiAgICBpZighZWwuX19ha2lsaSAmJiAhaGFzQmluZGluZ3MgJiYgIWlzQm9vbGVhbiAmJiAhaXNFdmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19uYW1lID0gdGhpcy5fX3Njb3BlLl9fbmFtZSArIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNik7XG4gICAgbm9kZS5fX2lzRXZlbnQgPSBpc0V2ZW50O1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGhhc0JpbmRpbmdzO1xuICAgIG5vZGUuX19pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWw7XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDsgICAgXG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlaW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgbm9kZS5fX2V2ZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MgJiYgIW9wdGlvbnMuc2F2ZUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2RlKTtcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2RlKTsgXG4gICAgICBBa2lsaS5yZW1vdmVUYWcobm9kZSk7XG4gICAgfVxuICAgIFxuICAgIGRlbGV0ZSBub2RlLl9fbmFtZTtcbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faXNCb29sZWFuO1xuICAgIGRlbGV0ZSBub2RlLl9faXNFdmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50OyAgICBcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICBub2RlICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbm9kZSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG4gICAgICAgICAgdmFsdWU/IHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpOiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYgKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc3RvcmUgYW5kIGF0dHJpYnV0ZXMgY2hhbmdlXG4gICAqL1xuICBfX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cykge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBrZXlzLnNsaWNlKDAsIGwgLSBpKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoY3VycmVudEtleXMpO1xuICAgICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoY3VycmVudEtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICAgIGlmICh0aGlzLl9fc3RvcmVMaW5rc1tjdXJyZW50S2V5U3RyaW5nXSkgeyAgXG4gICAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoY3VycmVudEtleXMsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fYXR0ckxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7XG4gICAgICAgIHRoaXMuX19hdHRyVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdG9yZSBvZiB0aGUgZGlzYWJsZW1lbnQgdHlwZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAqL1xuICBfX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHByb3h5OiAnX19kaXNhYmxlUHJveHknLFxuICAgICAgc3RvcmU6ICdfX2Rpc2FibGVTdG9yZUtleXMnLFxuICAgICAgYXR0cjogJ19fZGlzYWJsZUF0dHJLZXlzJ1xuICAgIH0pW3R5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHsgICAgXG4gICAgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgZGVsZXRlIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKTtcbiAgICByZXR1cm4gdGhpc1tzdG9yZV0uX19hbGw/IHRydWU6IHRoaXNbc3RvcmVdW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkgeyBcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ3N0b3JlJykpIHsgICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICAgIGNvbnN0IHAgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgXG4gICAgICBcbiAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHAucHVzaCh0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpKTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGxldCBsaW5rcyA9IChBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdChBa2lsaS5fX3N0b3JlTGlua3NbJyonXSB8fCBbXSk7XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUsIG5hbWUpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgIFxuICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICB9ICBcbiAgICB9KTsgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZ2V0ICYmICFvcHRpb25zLnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhdCBsZWFzdCBcImdldFwiIG9yIFwic2V0XCIgb3B0aW9uIGFzIHRydWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICAoc3RvcmUuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZiAoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IHN0b3JlS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHN0b3JlLl9fdGFyZ2V0W2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIGtleSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnYXR0cicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbGlua3MgPSAodGhpcy5fX2F0dHJMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KHRoaXMuX19hdHRyTGlua3NbJyonXSB8fCBbXSk7XG4gICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgXG4gICAgXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG5cbiAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUsIHV0aWxzLnRvRGFzaENhc2UobmFtZSkpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLl9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkgeyAgIFxuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgKHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7IFxuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBhdHRyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYXR0cnMpLmZpbHRlcihrID0+ICEodGhpcy5fX2F0dHJzW2tdIGluc3RhbmNlb2YgQWtpbGkuRXZlbnRFbWl0dGVyKSk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGF0dHJzS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBhdHRyc0tleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLl9fYXR0cnNba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwgdXRpbHMudG9EYXNoQ2FzZShrZXkpKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdGhpcy5hdHRyc1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXRLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YXJnZXRLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgICAgY29uc3QgayA9IHRhcmdldEtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGNvbnN0IGlzb2xhdGlvbkhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtIGJpbmRpbmcgdGhpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi8gXG4gIF9faXNTeXN0ZW1CaW5kaW5nS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgPT0gJ19fZGF0YSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbmVzdGVkIGJpbmRpbmdzIGJ5IGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqL1xuICBfX2dldEFsbEJpbmRzKGtleXMpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgY29uc3QgY29sbGVjdCA9IChvYmopID0+IHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChvYmouX19kYXRhIHx8IFtdKTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGtleSA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdChvYmpba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdChyb290KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTsgICAgXG4gICAgbGV0IGhhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmhhc2ggPSBoYXNoO1xuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuICAgIFxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhhc2gsXG4gICAgICBub2RlLFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXAgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19tYXBOb2Rlcyhmbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgcm9vdEF0dHJzOiB0cnVlLCBhdHRyczogdHJ1ZSwgbm9kZTogdHJ1ZSwgZWw6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICAgIGlmKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYXR0cnMgJiYgKGVsICE9PSB0aGlzLmVsIHx8IG9wdGlvbnMucm9vdEF0dHJzKSkge1xuICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgZm4oYXR0cnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBlbC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBlbC5jaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBvcHRpb25zLm5vZGUgJiYgZm4obm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PSAxICYmICFub2RlLl9fYWtpbGkpIHtcbiAgICAgICAgICBmaW5kKG5vZGUpO1xuICAgICAgICAgIG9wdGlvbnMuZWwgJiYgZm4obm9kZSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBmaW5kKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbm9kZXNcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QWxsTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9fbWFwTm9kZXMobm9kZSA9PiBub2Rlcy5wdXNoKG5vZGUpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfE5vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgIUFycmF5LmlzQXJyYXkobm9kZXMpICYmIChub2RlcyA9IFtub2Rlc10pO1xuICAgICBcbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBjID0ga2V5cy5sZW5ndGg7IGogPCBjOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgIFxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBiaW5kLm5vZGU7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcmVudCAmJiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwYXJlbnRzIGJpbmRpbmdzIHdpdGggdGhlIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKSB7ICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX3BhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9fcGFyZW50c1tpXTsgICAgICBcbiAgICAgIHBhcmVudCAmJiBwYXJlbnQuX19ha2lsaSAmJiBwYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgbGlua3NcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJTdG9yZUxpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBjb25zdCBhcnIgPSBsaW5rc1trZXldO1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBhcnJbaV07XG4gIFxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBmb3IobGV0IGsgaW4gbGluaykge1xuICAgICAgICAgICAgZGVsZXRlIGxpbmtba11cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgbGlua3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkLl9fYWtpbGkuX19yZW1vdmUob3B0aW9ucykpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUob3B0aW9ucyA9IHt9KSB7IFxuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pOyBcbiAgICB0aGlzLnJlbW92ZWQoKTsgICBcbiAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh0aGlzLl9fZGV0YWNoKHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pKTtcbiAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh0aGlzLl9fZW1wdHkoeyBzYXZlQmluZGluZ3M6IHRydWUgfSkpO1xuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTsgIFxuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpOyAgICBcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuXG4gICAgaWYoIW9wdGlvbnMuc2F2ZUJpbmRpbmdzKSB7ICAgXG4gICAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7ICAgXG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgICAgQWtpbGkucmVtb3ZlVGFnKG5vZGVzKTtcbiAgICB9XG5cbiAgICBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5lbC5fX2FraWxpO1xuICAgICAgZGVsZXRlIHRoaXMuX19pc01vdW50ZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fX2lzQ29tcGlsZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fX2lzUmVzb2x2ZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fX2NhbmNlbGxlZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fcHJldmVudDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDtcbiAgICAgIHRoaXMuX19iaW5kaW5ncyA9IG51bGw7XG4gICAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgICAgdGhpcy5fX2Rpc2FibGVTdG9yZUtleXMgPSBudWxsO1xuICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyS2V5cyA9IG51bGw7XG4gICAgICB0aGlzLl9fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgICB0aGlzLl9fcGFyZW50cyA9IG51bGw7ICAgICAgXG4gICAgICB0aGlzLl9fYXR0cnMgPSBudWxsO1xuICAgICAgdGhpcy5fX2F0dHJMaW5rcyA9IG51bGw7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IG51bGw7XG4gICAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBudWxsO1xuICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgY29uc3Qgbm9kZXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuYXR0cmlidXRlc1tpXTtcbiAgICAgIG5vZGUuX19pbml0aWFsaXplZCAmJiBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eShvcHRpb25zID0ge30pIHsgICAgXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7XG5cbiAgICB0aGlzLl9fbWFwTm9kZXMobm9kZSA9PiB7ICAgICAgXG4gICAgICBpZihub2RlLm5vZGVUeXBlID09IDEpIHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighbm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSwgeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7ICBcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7ICAgIFxuICAgIH0sIHsgcm9vdEF0dHJzOiBmYWxzZSB9KTtcblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICAgIEFraWxpLnJlbW92ZVRhZyhub2Rlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB0byB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJzdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHsgICBcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYWxlIHRoZSBjb21wb25lbnQsIGJ1dCBjYW5jZWwgdGhlIGNvbXBpbGF0aW9uIGluc2lkZSBvZiBpdFxuICAgKi9cbiAgcHJldmVudCgpIHtcbiAgICB0aGlzLl9fcHJldmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fcmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIG1ha2UgcmVxdWVzdHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHN9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgX19jYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkZWZhdWx0c10gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvclBhdHRlcm46IC9eW14yM10vLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9OyBcbiAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsOyAgXG4gICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgXG4gICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpO1xuICAgICAgeGhyID0gYmVmb3JlLnhocjtcbiAgICAgIG9wdGlvbnMgPSBiZWZvcmUub3B0aW9ucztcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpOyAgXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBcbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgIHN0ciAmJiAob3B0aW9ucy51cmwgKz0gXCI/XCIgKyBzdHIpO1xuICAgICAgfVxuICAgICAgICAgICBcbiAgICAgIGxldCBoYXNoID0gbnVsbDtcbiAgICAgIGxldCBjYWNoZSA9IHR5cGVvZiBvcHRpb25zLmNhY2hlID09ICdmdW5jdGlvbic/IG9wdGlvbnMuY2FjaGUob3B0aW9ucyk6IG9wdGlvbnMuY2FjaGU7XG4gICAgICAoIXdpbmRvdy5BS0lMSV9TU1IgJiYgIUFraWxpLl9faW5pdCkgJiYgKGNhY2hlID0gdHJ1ZSk7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCxcbiAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlciwgXG4gICAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMucGFzc3dvcmQsIFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY2FjaGUgJiYgaGFzaCkgeyAgICAgICAgXG4gICAgICAgIGxldCBfY2FjaGUgPSB0aGlzLmdldENhY2hlKGhhc2gpO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYoX2NhY2hlICYmIChjYWNoZSA9PT0gdHJ1ZSB8fCBub3cgLSBfY2FjaGUuY3JlYXRlZEF0IDw9IGNhY2hlKSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMudHJhbnNmb3JtQWZ0ZXIoX2NhY2hlLnJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgbGV0IGhlYWRlcktleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlYWRlcktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrID0gaGVhZGVyS2V5c1tpXTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLFxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICByZWFkeVN0YXRlOiB4aHIucmVhZHlTdGF0ZSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHhoci53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiB4aHIucmVzcG9uc2VUeXBlLFxuICAgICAgICAgIHJlc3BvbnNlVGV4dDogeGhyLnJlc3BvbnNlVHlwZSA9PSAndGV4dCc/IHhoci5yZXNwb25zZVRleHQ6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlWE1MOiB4aHIucmVzcG9uc2VUeXBlID09ICdkb2N1bWVudCc/IHhoci5yZXNwb25zZVhNTDogJycsXG4gICAgICAgICAgcmVzcG9uc2VVUkw6IHhoci5yZXNwb25zZVVSTCxcbiAgICAgICAgICB0aW1lb3V0OiB4aHIudGltZW91dCxcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoeGhyKSwgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIocmVzdWx0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4gJiYgKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgKGNhY2hlIHx8IHdpbmRvdy5BS0lMSV9TU1IpICYmIGhhc2ggJiYgdGhpcy5jcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpO1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVycyBvZiBhIFhNTEh0dHBSZXF1ZXN0IGluc3RhbmNlXG4gICAqIFxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fVxuICAgKi9cbiAgZ2V0SGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgIGxldCBoZWFkZXJzID0ge307XG4gICAgbGV0IHN0ciA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTsgIFxuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJ1xcdTAwMGRcXHUwMDBhJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5pbmRleE9mKCdcXHUwMDNhXFx1MDAyMCcpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGxldCBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIGxldCB2YWwgPSBsaW5lLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUoaGFzaCkge1xuICAgIHJldHVybiB0aGlzLl9fY2FjaGVbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICovXG4gIGNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCkge1xuICAgIHRoaXMuX19jYWNoZVtoYXNoXSA9IHsgcmVzdWx0LCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgcmVtb3ZlQ2FjaGUoaGFzaCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fY2FjaGVbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgaGFzaCB0byBzYXZlIGluIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZUNhY2hlSGFzaChkYXRhKSB7XG4gICAgcmV0dXJuIHV0aWxzLmNyZWF0ZUhhc2goZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpKS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpKTtcbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucykge1xuICAgIHJldHVybiB7IHhociwgb3B0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkYXRhOiByZXN1bHQucmVzcG9uc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAgLyoqXG4gICAqICBNYWtlIEhFQUQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgaGVhZCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0hFQUQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJlcXVlc3Quc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX19pbnN0YW5jZXMgPSB7fTtcbiAgdGhpcy5fX2NhY2hlID0ge307XG59XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVpbml0IHJvdXRlclxuICovXG5yZXF1ZXN0LmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xucmVxdWVzdC5zZXREZWZhdWx0cygpOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHV0aWxzLmRlYm91bmNlKCgpID0+IHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pLCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgZm9yXG4gKiBAc2VsZWN0b3IgZm9yW2luXSxvbFtpbl0sdWxbaW5dLHRoZWFkW2luXSx0Ym9keVtpbl0sdGZvb3RbaW5dXG4gKiBAYXR0ciB7b2JqZWN0fGFycmF5fSBpbiAtIGRhdGEgdG8gY3JlYXRlIHRoZSBsb29wXG4gKiBAbWVzc2FnZSB7b2JqZWN0fGFycmF5fSBvdXQgLSBzZW50IG9uIHRoZSBkYXRhIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnb3V0J107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICBcbiAgICB0aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgIFxuICAgIGlmKChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUubmFtZSA9PSAnaW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLl9fcHJlcGFyZUF0dHJpYnV0ZUluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wLm5vZGU7XG5cbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJyAmJiBwcm9wLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3VwZXIuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3KTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgZGVsZXRlIHRoaXMuaHRtbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvckVsID0gbnVsbDsgXG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7ICAgICAgXG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmVsLmlubmVySFRNTDsgXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KGVsLm91dGVySFRNTCk7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoaHRtbCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZWwuY29udGVudC5maXJzdENoaWxkO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7ICAgIFxuICAgIHRoaXMuX19oYXNoID0gdXRpbHMuY3JlYXRlSGFzaCh2YWx1ZSk7XG5cbiAgICBpZih0aGlzLml0ZXJhdG9ycy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaW5kZXhdO1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHsgICAgICAgIFxuICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAgICAgICAgXG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlKHRoaXMuX19oYXNoLCBpdGVyYXRvci5oYXNoKSkge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuaXRlcmF0b3JFbC5jbG9uZU5vZGUoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShlbCkpO1xuICAgIHRoaXMuaXRlcmF0b3JzLnB1c2goZWwuX19ha2lsaSk7XG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkYXRhID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTsgICBcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHRoaXMubG9vcChrZXksIHZhbHVlLCBpbmRleCkuaXRlcmF0ZShpbmRleCk7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBsID0gZGF0YS5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsb29wKGluZGV4LCBkYXRhW2luZGV4XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgbG9vcChrZXksIGRhdGFba2V5XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19yZW1vdmUoKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2hhc2ggPSAnJztcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgfSAgXG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgbG9vcFxuICogQHNlbGVjdG9yIGxvb3AsdHJcbiAqIEBhdHRyIEBzZWUgRm9yXG4gKiBAc2NvcGUgeyp9IGxvb3BWYWx1ZSAtIGRhdGEgaXRlbSdzIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBcbiAqIEBzY29wZSB7c3RyaW5nfG51bWJlcn0gbG9vcEtleSAtIGtleSBvZiB0aGUgaXRlcmF0aW9uXG4gKiBAc2NvcGUge251bWJlcn0gbG9vcEluZGV4IC0gaW5kZXggb2YgdGhlIGl0ZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG5cbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgc3VwZXIucmVtb3ZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICBkZWxldGUgdGhpcy52YWx1ZTtcbiAgICBkZWxldGUgdGhpcy5rZXk7XG4gICAgZGVsZXRlIHRoaXMuaW5kZXg7XG4gICAgZGVsZXRlIHRoaXMuaGFzaDsgICAgXG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuZm9yLl9faGFzaDtcbiAgfVxuXG4gIGl0ZXJhdGUoKSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7IiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRhcmdldD8gdGhpcy5fX3RhcmdldDogdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59IiwiLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGV2ZW50cy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byB0cmlnZ2VyIGN1c3RvbSBqYXZhc2NyaXB0IGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZXJlIGFuIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07IFxuICAgIHRoaXMubm9kZS5fX2NvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVPdXQodGhpcy5ub2RlLCBvcHRpb25zLmRldGFpbCk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZW1pdHRlclxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMudW5iaW5kKCk7XG4gICAgZGVsZXRlIHRoaXMubmFtZTtcbiAgICBkZWxldGUgdGhpcy5uYW1lO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuZWwgPSBudWxsO1xuICB9XG59IiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogU3RvcmUgYWxsb3dzIHlvdSB0byBzYXZlIGFuZCBkaXN0cmlidXRlIGRhdGEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc3RvcmV9XG4gKi9cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHt9LCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRhcmdldFtrZXldLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5cbmNvbnN0IG9iaiA9IHt9O1xuXG4vKipcbiAqIEdsb2JhbHMgdG8gdXNlIHRoZSBjdXN0b20gdmFyaWFibGVzIGluIHNjb3BlIGV4cHJlc3Npb25zXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGUjZG9jc19nbG9iYWxzfVxuICovXG5jb25zdCBnbG9iYWxzID0gbmV3IFByb3h5KG9iaiwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmKGtleSA9PSAnX190YXJnZXQnKSB7XG4gICAgICByZXR1cm4gb2JqXG4gICAgfSAgIFxuICAgIFxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgdGFyZ2V0W2tleV0gPSBBa2lsaS53cmFwKHZhbHVlLCB7IHRhZzoga2V5IH0pOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4geyAgIFxuICAgIEFraWxpLnJlbW92ZVRhZyhrZXkpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbHM7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcm91dGVyIHRlbXBsYXRlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIHJvdXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQgPSB0cnVlKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuXG4gICAgY29uc3QgZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uID0gKHBhdGgpID0+IHtcbiAgICAgIGlmIChwYXRoLnBhcmVudCkge1xuICAgICAgICBpZiAocGF0aC5wYXJlbnQuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdGgucGFyZW50LmNvbXBvbmVudC5fX3Njb3BlLl9fdHJhbnNpdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBpbGUgPSAoaHRtbCkgPT4geyBcbiAgICAgIHRoaXMuZW1wdHkoKTsgIFxuICAgICAgbGV0IG5hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgaWYoc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gQWtpbGkuX19jb21wb25lbnRzKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQWtpbGkuX19jb21wb25lbnRzW2tleV07XG4gICAgXG4gICAgICAgICAgaWYoY29tcG9uZW50ID09PSBzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIG5hbWUgPSBrZXk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKCFleGlzdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cIiBoYXMgbm8gZGVmaW5lZCBjb21wb25lbnRgKVxuICAgICAgICB9IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8JHsgbmFtZSB9PiR7IGh0bWwgfTwvJHsgbmFtZSB9PmA7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0geyAgXG4gICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpLCAgIFxuICAgICAgc3RhdGU6IHRyYW5zaXRpb24ucGF0aC5zdGF0ZSxcbiAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgdXJsOiB0cmFuc2l0aW9uLnBhdGgudXJsLFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhdGgucGFyYW1zLFxuICAgICAgcXVlcnk6IHRyYW5zaXRpb24ucGF0aC5xdWVyeSxcbiAgICAgIGhhc2g6IHRyYW5zaXRpb24ucGF0aC5oYXNoXG4gICAgfTtcblxuICAgIGlmICghbG9hZCkge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgY2hlY2tDaGFuZ2VzOiB0cnVlIH0gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50ZW1wbGF0ZTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHN0YXRlLnRlbXBsYXRlVXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICB9XG4gICAgfSkudGhlbihodG1sID0+IGNvbXBpbGUoaHRtbCkpO1xuICB9XG59IiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG4vKipcbiAqIFRyYW5zaXRpb24gY2xhc3MuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGNvbnNpc3RzIHRoZSBsYXN0IGFjdHVhbCByb3V0ZXIgdHJhbnNpdGlvbiBpbmZvcm1hdGlvbi5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdHJhbnNpdGlvbn1cbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHByZXZpb3VzID0gbnVsbCkgeyAgXG4gICAgdGhpcy51cmwgPSB1cmw7ICBcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19maW5pc2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3QgdG8gYW5vdGhlciBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSByb3V0ZXIuc3RhdGVcbiAgICovXG4gIHJlZGlyZWN0KHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgLi4ucm91dGVyLnRyYW5zaXRpb24ucGF0aC5vcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5jYW5jZWwoKTsgICBcbiAgICByZXR1cm4gcm91dGVyLnN0YXRlLmNhbGwocm91dGVyLCBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIFRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0XG4gICAqL1xuICByZWxvYWQocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHBhcmFtcyA9IHsgLi4udGhpcy5wYXRoLnBhcmFtcywgLi4ucGFyYW1zIH07XG4gICAgcXVlcnkgPSB7IC4uLnRoaXMucGF0aC5xdWVyeSwgLi4ucXVlcnkgfTtcbiAgICBoYXNoID0gaGFzaCA9PT0gdW5kZWZpbmVkPyB0aGlzLnBhdGguaGFzaDogaGFzaDtcbiAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh0aGlzLnBhdGguc3RhdGUubmFtZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSwgLi4ucGF0aCB9O1xuICAgIHRoaXMucm91dGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICB0aGlzLnN0YXRlc1t0aGlzLnBhdGguc3RhdGUubmFtZV0gPSB0aGlzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSByb3V0ZSBpcyBjaGFuZ2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcm91dGVcbiAgICovXG4gIGlzUm91dGVDaGFuZ2VkKHJvdXRlKSB7XG4gICAgaWYoIXRoaXMucHJldmlvdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gcm91dGUuc3RhdGU7XG5cbiAgICBpZighdGhpcy5wcmV2aW91cy5oYXNTdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtS2V5cyA9IFtdO1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2Uocm91dGVyLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtS2V5cy5wdXNoKHYpKTtcbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBzdGF0ZS5wYXJhbXMpIHtcbiAgICAgIGlmKHBhcmFtS2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgICAgcGFyYW1LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5xdWVyeSk7XG4gICAgY29uc3Qgd2F0Y2hIYXNoID0gc3RhdGUuaGFzaCAhPT0gdW5kZWZpbmVkOyAgICBcbiAgICBjb25zdCBwcmV2Um91dGUgPSB0aGlzLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTsgXG5cbiAgICBjb25zdCBwcmV2ID0geyBcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSwgXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSxcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH1cblxuICAgIGlmKHdhdGNoSGFzaCkge1xuICAgICAgcHJldi5oYXNoID0gcHJldlJvdXRlLmhhc2g7XG4gICAgICBjdXJyZW50Lmhhc2ggPSByb3V0ZS5oYXNoO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGN1cnJlbnQgdHJhbnNpdGlvblxuICAgKi9cbiAgY2FuY2VsKCkgeyAgIFxuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogRmluaXNoIHRoZSB0cmFuc2l0aW9uXG4gICAqL1xuICBmaW5pc2goKSB7XG4gICAgdGhpcy5fX2ZpbmlzZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQWtpbGkgcm91dGVyXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqL1xuY29uc3Qgcm91dGVyID0ge307XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJvdXRlci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iYXNlVXJsID0gXCIvXCI7XG4gIHRoaXMuc3RhdGVzID0gW107XG4gIHRoaXMuaGFzaE1vZGUgPSB0cnVlO1xuICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgdGhpcy5fX2luaXQgPSBmYWxzZTtcbiAgdGhpcy5fX3BhcmFtUmVnZXggPSAvKFxcLz86KFtcXHdcXGQtXSspKS9nO1xuICB0aGlzLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xufVxuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHBhcmFtczoge30sXG4gICAgcXVlcnk6IHt9LFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke3N0YXRlfWApO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBvcHRpb25zLm1hbnVhbCA9IHRydWU7XG4gICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpKTsgIFxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7ICAgIFxuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7XG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIG9wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpOyAgXG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTsgICAgXG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5pbml0U3RhdGUodGhpcy5zdGF0ZXNbaV0pO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc3RhdGUgXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAqL1xucm91dGVyLmluaXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBsZXQgcGFyZW50cyA9IFtdO1xuICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICBwYXJlbnRzLnBvcCgpO1xuICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFN0YXRlKHBhcmVudE5hbWUpO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgfVxuXG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgdGhpcy5fX2luaXQgJiYgdGhpcy5pbml0U3RhdGUoc3RhdGUpO1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIucmVwbGFjZVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5yZXBsYWNlSGFzaFVybCh1cmwpOiB0aGlzLnJlcGxhY2VIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsICcjJyArICh1cmwgfHwgJy8nKSk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBhcmVdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSwgcHJlcGFyZSA9IHRydWUpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgXG4gIGlmKHByZXBhcmUpIHtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gJy8nICsgKHBhcmFtc1t2XSB8fCAnJykpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXlxcXi8sICcnKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGFyZ3MgPSB7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgOTk5OyBpKyspIHtcbiAgICBjb25zdCBwYXJhbXNUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVQYXJhbXMoc3RhdGUsIHBhcmFtcywgYXJncyk7XG4gICAgY29uc3QgcXVlcnlUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVRdWVyeShzdGF0ZSwgcXVlcnksIGFyZ3MpO1xuICAgIGNvbnN0IGhhc2hUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVIYXNoKHN0YXRlLCBoYXNoLCBhcmdzKTtcbiAgICBcbiAgICBpZihoYXNoVGVtcCA9PT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmKGhhc2hUZW1wID09PSAnJykge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBuZXdBcmdzID0geyBwYXJhbXM6IHBhcmFtc1RlbXAsIHF1ZXJ5OiBxdWVyeVRlbXAsIGhhc2g6IGhhc2hUZW1wLCBvcHRpb25zIH07XG5cbiAgICBpZih1dGlscy5jb21wYXJlKG5ld0FyZ3MsIGFyZ3MpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBhcmdzID0gbmV3QXJncztcbiAgfVxuICAgIFxuICByZXR1cm4gYXJncztcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBwYXJhbXNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUGFyYW1zID0gZnVuY3Rpb24oc3RhdGUsIHBhcmFtcywgYXJncykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3QgbGlzdCA9IFtwYXJhbXNdO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxpc3QucHVzaCh0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MobGlzdCwgYXJncyk7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcXVlcnlcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVRdWVyeSA9IGZ1bmN0aW9uKHN0YXRlLCBxdWVyeSwgYXJncykgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBsaXN0ID0gW3F1ZXJ5XTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpOyAgXG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGlzdC5wdXNoKHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucXVlcnkpO1xuICB9XG4gXG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhsaXN0LCBhcmdzKTtcbn1cblxuLyoqXG4gKiBNZXJnZSBsaXN0IGl0ZW1zIGFzIHRyYW5zaXRpb24gb2JqZWN0c1xuICogXG4gKiBAcGFyYW0ge29iamVjdFtdfSBsaXN0XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAobGlzdCwgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgY29uc3QgYWxsID0ge307XG4gIGNvbnN0IGV4Y2x1ZGVkID0ge307XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qgb2JqID0gbGlzdFtpXTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiBcbiAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZihleGNsdWRlZFtrZXldKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YWwgPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChhcmdzKTogdmFsO1xuXG4gICAgICBpZih2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBhbGxba2V5XTtcbiAgICAgICAgZXhjbHVkZWRba2V5XSA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhbGxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxsOyBcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBoYXNoXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVIYXNoID0gZnVuY3Rpb24oc3RhdGUsIGhhc2gsIGFyZ3MpIHtcbiAgaWYoaGFzaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsZXQgdmFsID0gdGhpcy5nZXRTdGF0ZShjdXJyZW50KS5oYXNoO1xuICAgIHZhbCA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJz8gdmFsKGFyZ3MpOiB2YWw7XG5cbiAgICBpZih2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBoYXNoID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG4gICAgcmV0dXJuICcvPyhbXi9dKiknO1xuICB9KTtcblxuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC8oW15eL10rKVsvXSskLywgJyQxJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybiwgJ2cnKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuICBcbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIC4uLmFyZ3MpID0+IHsgXG4gICAgYXJncyA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAyKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcmdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHYgPSBhcmdzW2ldO1xuICAgICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgfSAgXG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQgdXJsID0gcm91dGVyLnRyYW5zaXRpb24gJiYgIXJvdXRlci50cmFuc2l0aW9uLl9fZmluaXNoZWQ/IHJvdXRlci50cmFuc2l0aW9uLnVybDogdGhpcy5nZXRVcmwoKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXMoJy8nICsgdXJsLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcvPyhbXi9dKiknKTtcbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvXlxcXi8sICcnKS5yZXBsYWNlKC9cXCQkLywgJycpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeLycgKyB1cmxQYXR0ZXJuICsgJy8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTsgIFxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCBmaW5kID0gKGVsKSA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXRlOiBzdGF0ZSwgLi4uY29udGVudCB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZXMgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucm91dGVyLmdldFN0YXRlc0J5TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IHN0YXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBsZXZlbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLmxldmVsID4gbGV2ZWwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG4vKipcbiAqIFJlbG9hZCB0aGUgc3RhdGVcbiAqIFxuICogQHNlZSBUcmFuc2l0aW9uLnJlbG9hZFxuICovXG5yb3V0ZXIucmVsb2FkID0gZnVuY3Rpb24oLi4uYXJncykge1xuICBpZighdGhpcy50cmFuc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgZm91bmQgYW4gYWN0aXZlIHRyYW5zaXRpb24gdG8gcmVsb2FkIHRoZSBzdGF0ZScpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbi5yZWxvYWQoLi4uYXJncyk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb24gdG8gbm90IHRyaWdnZXIgcm91dGVyIGhhbmRsZXJzIGluc2lkZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xucm91dGVyLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5fX2lzb2xhdGVkID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRlZCA9IGZhbHNlO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENoYW5nZSBzdGF0ZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBcbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBwYXJhbXMgPSB7fTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpOyAgXG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7IFxuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gIFxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcblxuICBjb25zdCBuZXh0ID0gKHN0YXRlcykgPT4geyAgICBcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlOyBcbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgY29tcG9uZW50OiByb3V0ZSB9KTsgICAgXG4gICAgcGFyYW1zID0geyAuLi5wYXJhbXMsIC4uLmNvbnRlbnQucGFyYW1zIH07XG4gICAgaGFzaCA9IGhhc2ggfHwgb3B0aW9ucy5lbXB0eUhhc2g7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7ICAgICBcbiAgICBoYXNoID0gaGFzaCB8fCAnJztcbiAgICBsZXQgcmVhbFVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKTsgXG4gICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybChyZWFsVXJsKSk7IFxuICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKGxldmVsKTtcbiAgICBcbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkgeyAgICAgIFxuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9ICAgIFxuXG4gICAgdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0cmFuc2l0aW9uLnBhdGgucXVlcnkgPSBxdWVyeTtcbiAgICB0cmFuc2l0aW9uLnBhdGguaGFzaCA9IGhhc2g7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnVybCA9IHJlYWxVcmw7XG4gICAgdHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFzdGF0ZS5hYnN0cmFjdCAmJiBsZXZlbCsrO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihyZWFsVXJsICE9IHVybCkge1xuICAgICAgaXNEaWZmZXJlbnQgPSB0cmFuc2l0aW9uLmlzUm91dGVDaGFuZ2VkKHRyYW5zaXRpb24ucGF0aCk7XG4gICAgfVxuICAgICAgIFxuICAgIGxldCBsb2FkID0gaXNEaWZmZXJlbnQgJiYgb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbigoZGF0YSkgPT4geyAgICAgICBcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRyYW5zaXRpb24ucHJldmlvdXMgJiYgdHJhbnNpdGlvbi5wcmV2aW91cy5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICAocHJldlJvdXRlICYmICFwcmV2Um91dGUubG9hZGVkKSAmJiAobG9hZCA9IHRydWUpO1xuICAgICAgcmV0dXJuIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCkudGhlbigoKSA9PiB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gdHJ1ZSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApKS50aGVuKCgpID0+IHtcbiAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybCh0aGlzLmRlZmF1bHRVcmwpKTsgICAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgKCF0cmFuc2l0aW9uLnBhdGggfHwgIXRyYW5zaXRpb24ucGF0aC5oYXNoKSkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICAgIHRyYW5zaXRpb24uZmluaXNoKCk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2VkJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0IHJvdXRlclxuICovXG5yb3V0ZXIuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICByb3V0ZXIuc2V0RGVmYXVsdHMoKTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbnJvdXRlci5zZXREZWZhdWx0cygpOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGlmXG4gKiBAc2VsZWN0b3IgaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgLSBzaG93IHRoZSBlbGVtZW50IGNvbnRlbnQgb3Igbm90XG4gKiBAYXR0ciB7Ym9vbGVhbn0gcmVjcmVhdGUgLSBkZWxldGUgdGhlIGNvbnRlbnQgYW5kIHJlY3JlYXRlIG9yIGp1c3Qgc2hvdy9oaWRlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnByZXZTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHRoaXMuc2V0SXMpO1xuICB9XG5cbiAgc2V0SXModmFsKSB7ICBcbiAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdmFsO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTsgICAgXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICgodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSAmJiB0aGlzLnByZXZTdGF0ZSAhPT0gdGhpcy5zdGF0ZSkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIHRoaXMuZGlzcGxheSwgJ2ltcG9ydGFudCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQgJiYgdGhpcy5wcmV2U3RhdGUgIT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgICBcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlLWlmXG4gKiBAc2VsZWN0b3IgZWxzZS1pZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyBAc2VlIElmXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlOyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggc2VsZWN0LlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19zZWxlY3R9XG4gKiBcbiAqIEB0YWcgc2VsZWN0ICBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXS5jb25jYXQoRm9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjb21waWxlZCgpIHsgXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSk7XG4gICAgbGV0IHJlcyA9IHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7ICAgXG4gICAgdGhpcy5hdHRyKCdtdWx0aXBsZScsIHRoaXMuc2V0TXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cignY29udGVudCcsIHRoaXMuc2V0Q29udGVudCk7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhd1NlbGVjdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjsiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIGlucHV0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NoZWNrYm94X2FuZF9yYWRpb31cbiAqIFxuICogQHRhZyBpbnB1dFxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJywgJ211bHRpcGxlJ10uY29uY2F0KFRleHQuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoVGV4dC5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuYXR0cignY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZCk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0gIFxuXG4gIHNldENoZWNrZWQodmFsdWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgXG4gICAgaWYgKHRoaXMuZWwuY2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQocmFkaW8uZWwuY2hlY2tlZCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpb1xuICogQHNlbGVjdG9yIHJhZGlvW25hbWVdXG4gKiBAYXR0ciB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZ3JvdXBcbiAqIEBhdHRyIHtzdHJpbmd8bnVsbH0gdmFsdWUgLSBzZWxlY3RlZCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICogQG1lc3NhZ2Uge3N0cmluZ30gcmFkaW8gLSBzZW50IG9uIHZhbHVlIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgdGhpcy5SYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5zZXROYW1lcywgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7ICAgXG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpOyBcbiAgICB0aGlzLmF0dHIoJ25hbWUnLCB0aGlzLnNldE5hbWVzKTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUgfHwgdGhpcy5hdHRycy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IHRoaXMucHJldlZhbHVlO1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG4gICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICghaXNUcnVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cCBpdGVtLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpby1idXR0b25cbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gdmFsdWVcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiLz4ke3RoaXMuX19jb250ZW50fTwvbGFiZWw+JztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgJ3ZhbHVlJyk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjsiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRleHRhcmVhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIFxuICogQHRhZyB0ZXh0YXJlYVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdpdGggY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAdGFnIGNvbnRlbnRcbiAqIEBzZWxlY3RvciBjb250ZW50LFtjb250ZW50ZWRpdGFibGVdXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBhdHRyIHtib29sZWFufSBbZWRpdGFibGVdIC0gZWRpdGFibGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCB0aGlzKTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGluY2x1ZGUgdGVtcGxhdGVzIGJ5IHVybC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaHRtbF90ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgaW5jbHVkZVxuICogQHNlbGVjdG9yIGluY2x1ZGVbdXJsXVxuICogQGF0dHIge3N0cmluZ30gdXJsIC0gdGVtcGxhdGUgcGF0aFxuICogQGF0dHIge251bWJlcnxmdW5jdGlvbnxib29sZWFufSBbY2FjaGVdIC0gcmVxdWVzdCBjYWNoZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzI2RvY3NfY2FjaGV9XG4gKiBAbWVzc2FnZSB7dm9pZH0gbG9hZCAtIHNlbnQgb24gdGhlIHRlbXBsYXRlIGxvYWRcbiAqIEBtZXNzYWdlIHtFcnJvcn0gZXJyb3IgLSBzZW50IG9uIGVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2FjaGUnLCB0aGlzLnNldENhY2hlKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldENhY2hlKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaWZyYW1lcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGlmcmFtZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpbWFnZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpbWdcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbWJlZCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGVtYmVkXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhdWRpbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGF1ZGlvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB2aWRlbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHZpZGVvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0cmFjayBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHRyYWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzb3VyY2UgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBzb3VyY2VcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igb2JqZWN0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgb2JqZWN0XG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsaW5rcy5cbiAqIEl0IHdvcmtzIHdpdGggcm91dGVyIHRvby4gXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xpbmtzfVxuICogXG4gKiBAdGFnIGFcbiAqIEBzZWxlY3RvciBhW3N0YXRlXTpub3QoW3VybF0pLGFbdXJsXTpub3QoW3N0YXRlXSlcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdIC0gdXJsIHRvIGdvIG9uIGNsaWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbc3RhdGVdIC0gc3RhdGUgb2Ygcm91dGVyIHRvIGdvIG9uIGNsaWNrIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqIEBhdHRyIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcGFyYW1zfVxuICogQGF0dHIge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcXVlcnl9XG4gKiBAYXR0ciB7c3RyaW5nfSBbaGFzaF0gLSBoYXNoIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfaGFzaH1cbiAqIEBhdHRyIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19yb3V0ZXIubG9jYXRpb259XG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdCBcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaW5BY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBwYXJ0IG9mIHRoZSBhY3RpdmUgc3RhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkID0gKCkgPT4gdGhpcy5zdGF0ZSAmJiB0aGlzLnNldEFjdGl2aXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcblxuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnNldFN0YXRlKTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMuc2V0UGFyYW1zKTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5zZXRRdWVyeSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5zZXRIYXNoKTtcbiAgICB0aGlzLmF0dHIoJ29wdGlvbnMnLCB0aGlzLnNldE9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNldEFjdGl2aXR5KCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eSgpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnICYmIGhhc2ggIT09IHVuZGVmaW5lZCAmJiBoYXNoICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmd8bnVsbGApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGUobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZShuYW1lKTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYoKSB7XG4gICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB0aGlzLnVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSByb3V0ZXIuY3JlYXRlU3RhdGVVcmwodGhpcy5zdGF0ZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9