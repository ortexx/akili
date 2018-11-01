/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.0.3
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

  _globals2.default.__target.utils = this.wrap(_utils2.default);

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
 * @param {Node} [node]
 */
Akili.removeTag = function (tag, node) {
  if ((typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) == 'object') {
    node = tag;
    tag = undefined;
  }

  if (!tag) {
    delete this.__tags[node.__name];
    return;
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
      }

      _akili2.default.removeTag(node);
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
     * @returns {Node[]}
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
     * Unbind data by nodes hash
     *
     * @param {object|Node[]|Node} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var _this17 = this;

      nodes instanceof Node && (nodes = [nodes]);

      if (Array.isArray(nodes)) {
        var arr = nodes;
        nodes = {};

        for (var i = 0, l = arr.length; i < l; i++) {
          var node = arr[i];
          nodes[node.__name] = node;
        }
      }

      var unbind = function unbind(obj, parent, key) {
        var keys = Object.keys(obj);

        for (var j = 0, c = keys.length; j < c; j++) {
          var k = keys[j];

          if (k == '__data') {
            var data = obj[k] || [];
            var _l3 = data.length;

            for (var _i5 = 0; _i5 < _l3; _i5++) {
              var bind = data[_i5];

              if (nodes[bind.node.__name]) {
                delete bind.node;
                data.splice(_i5, 1);
                _i5--;
                _l3--;
              }
            }

            if (!_l3) {
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
     * @returns {object}
     * @protected
     */

  }, {
    key: '__removeChildren',
    value: function __removeChildren() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = {};

      var remove = function remove(children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          remove(child.__akili.__children);
          nodes = _extends({}, nodes, child.__akili.__remove(options));
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
     * @returns {object}
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      var _this18 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = {};
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      this.removed();
      nodes = _extends({}, nodes, this.__detach({ saveBindings: true }), this.__empty({ saveBindings: true, rootAttrs: options.rootAttrs }));
      this.__clearStoreLinks();
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
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
     * @returns {object}
     * @protected
     */

  }, {
    key: '__detach',
    value: function __detach() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.__parent && this.__parent.__akili.__spliceChild(this.el);
      var nodes = {};

      for (var i = 0, l = this.el.attributes.length; i < l; i++) {
        var node = this.el.attributes[i];
        node.__initialized && (nodes[node.__name] = node);
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
     * @returns {object}
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var _this19 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = this.__removeChildren({ saveBindings: true, rootAttrs: true });

      this.__mapNodes(function (node) {
        if (node.nodeType == 1) {
          node.remove();
          return;
        }

        if (!node.__initialized) {
          return;
        }

        _this19.__deinitializeNode(node, { saveBindings: true });
        nodes[node.__name] = node;
      }, { rootAttrs: options.rootAttrs });

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
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

        for (var _i6 = 0, _l4 = children.length; _i6 < _l4; _i6++) {
          find(children[_i6].__akili.__children);
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
        if (this.recreate || !this.isCompiled) {
          res = this.compile();
        }

        this.el.style.setProperty('display', this.display, 'important');
      } else {
        if (this.recreate) {
          this.empty();
        } else if (!this.isCompiled) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9fdGFncyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwia2V5IiwiZ2xvYmFscyIsIl9fdGFyZ2V0IiwidXRpbHMiLCJ3cmFwIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiT2JqZWN0cyIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiZGVmaW5lIiwiZXJyb3JIYW5kbGluZyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiaSIsImwiLCJsZW5ndGgiLCJkZWZhdWx0cyIsImZuIiwicHVzaCIsImNsZWFyR2xvYmFscyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJfX2VsIiwiX19jb21wb25lbnQiLCJfX3BhcmVudCIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsIl9fY29tcGlsZSIsImFsbCIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInJlbW92ZUNvbXBvbmVudCIsImFsaWFzIiwicmVtb3ZlQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsIkFLSUxJX1NTUiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsIl9faXNvbGF0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIm9iaiIsImN1cnJlbnQiLCJ3cmFwRnVuY3Rpb24iLCJjIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwicmV2ZXJzZSIsImFraWxpV3JhcHBlZEZ1bmN0aW9uIiwidGFnIiwiYWRkVGFnIiwiaGFzVGFnIiwicmVtb3ZlVGFnIiwidW5kZWZpbmVkIiwidHJpZ2dlclRhZyIsIl9fZXZhbHVhdGVOb2RlIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZSIsIl9fY2FjaGUiLCJfX2luc3RhbmNlcyIsIm91dGVySFRNTCIsImNhY2hlIiwiX19tYWluIiwiZGVpbml0Iiwic3RvcmVLZXlzIiwiY2xhc3MiLCJjbGFzc2VzIiwic3R5bGUiLCJzdHlsZXMiLCJzcGxpdCIsImRlbCIsImV4Y2x1ZGUiLCJleHBzIiwibGFzdCIsIlJlZ0V4cCIsImluZGV4T2YiLCJvcGVuIiwiZmlsdGVyIiwiaGFuZGxlciIsIm1hdGNoIiwiaXRlbSIsImZpbHRlcmVkIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwiaW5jbHVkZUtleXMiLCJuZXdPYmoiLCJvYmpLZXlzIiwiZXhjbHVkZUtleXMiLCJpc1Njb3BlUHJveHkiLCJpc1BsYWluT2JqZWN0IiwiY29weSIsIm5lc3RlZCIsInBsYWluIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJjb21wYXJlIiwiaWdub3JlVW5kZWZpbmVkIiwiY2xlYXJVbmRlZmluZWQiLCJhS2V5cyIsImJLZXlzIiwiY3JlYXRlSGFzaCIsInNvdXJjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJoYXNoIiwiY2hhciIsImNoYXJDb2RlQXQiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWNvZGVIdG1sRW50aXRpZXMiLCJ0b0NhbWVsQ2FzZSIsIm0iLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemUiLCJvYmplY3QiLCJyZWR1Y2UiLCJvIiwiaGFzUHJvcGVydHlCeUtleXMiLCJoYXMiLCJoYXNPd25Qcm9wZXJ0eSIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwibm93IiwiZGVib3VuY2UiLCJkZWxheSIsImNsZWFyVGltZW91dCIsIl9fZGVib3VuY2VUaW1lb3V0IiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJpYWJsZXMiLCJ2YXJzIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlU3RvcmVLZXlzIiwiX19kaXNhYmxlQXR0cktleXMiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnRzIiwiX19jb250ZW50IiwiX19hdHRycyIsIl9fYXR0ckxpbmtzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsImNoZWNrQ2hhbmdlcyIsInNldEV2ZW50cyIsInNldFBhcmVudHMiLCJzZXRCb29sZWFuQXR0cmlidXRlcyIsImRlZmluZUF0dHJpYnV0ZXMiLCJfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRlUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlIiwiX19nZXROb2RlUHJvcGVydHkiLCJhdHRyTmFtZSIsImVsZW1lbnROYW1lIiwiX19lbGVtZW50IiwiYXR0cmlidXRlTmFtZSIsIkF0dHIiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJfX2V4cHJlc3Npb24iLCJ0cmltIiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiZXZhbENvbXBvbmVudCIsImNvbSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJlbnRCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2UiLCJfX2NyZWF0ZUtleXNIYXNoIiwicGFyZW50c0hhc2giLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJlIiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsImVsZW1lbnQiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJfX2dldEFsbEJpbmRzIiwiX19pbml0aWFsaXplZCIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UiLCJfX2Rpc2FibGVLZXlzIiwiY2hlY2tQcm9wIiwiX19zZXQiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidW5iaW5kIiwiX19pc1N5c3RlbUJpbmRpbmdLZXkiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiX19ldmFsdWF0ZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19wcmVwYXJlQXR0cmlidXRlSW4iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJfX2F0dHJUcmlnZ2VyQnlOYW1lIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2lzRXZlbnQiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9faGFzQmluZGluZ3MiLCJfX2V2YWx1YXRlRXZlbnQiLCJpc0F0dHIiLCJoYXNCaW5kaW5ncyIsImlzQm9vbGVhbiIsImlzRXZlbnQiLCJfX2lzQm9vbGVhbiIsInNhdmVCaW5kaW5ncyIsIl9fdW5iaW5kQnlOb2RlcyIsIl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX19kZWluaXRpYWxpemVOb2RlIiwiUHJveHkiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJfX2lzU3lzdGVtS2V5IiwiZXhjQXJyIiwicmVhbFRhcmdldCIsImZvclBhcmVudHMiLCJmb3JEYXRhIiwicG9wIiwiX19iaW5kTm9kZSIsIl9fY2hlY2tEaXNhYmxlbWVudCIsIkNIRUNLX0VYSVNURU5DRSIsInRhcmdldFBhcmVudFZhbHVlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJjdXJyZW50S2V5cyIsImN1cnJlbnRLZXlTdHJpbmciLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJ0eXBlIiwicHJveHkiLCJfX2dldERpc2FibGVtZW50VHlwZVN0b3JlIiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwia2V5U3RyaW5nIiwiaW5mbyIsImRhdGUiLCJjYWxsT25TdGFydCIsImF0dHJzS2V5cyIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJDSEVDS19QUk9YWSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsInRhcmdldEtleXMiLCJfX29ic2VydmUiLCJpc29sYXRpb25IYXNoIiwidXBkYXRlZEF0IiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJjb2xsZWN0Iiwicm9vdEF0dHJzIiwibm9kZXMiLCJfX21hcE5vZGVzIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJOb2RlIiwiaiIsIl9fcmVtb3ZlIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fZW1wdHkiLCJfX2NsZWFyU3RvcmVMaW5rcyIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwidW5zaGlmdCIsIl9fc3RvcmVCeUZ1bmN0aW9uIiwiX19zdG9yZUJ5S2V5cyIsIl9fYXR0ckJ5RnVuY3Rpb24iLCJfX2F0dHJCeUtleXMiLCJfX3Vuc3RvcmVCeUZ1bmN0aW9uIiwiX191bnN0b3JlQnlLZXlzIiwiX191bmF0dHJCeUZ1bmN0aW9uIiwiX191bmF0dHJCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZ2V0SGVhZGVycyIsInhociIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsImRlYm91bmNlSW50ZXJ2YWwiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXRWYWx1ZSIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJpdGVyYXRvcnMiLCJpdGVyYXRvckVsIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJtYXNrIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJfX2luZGV4IiwiX19rZXkiLCJfX3ZhbHVlIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJzZXRJbmRleCIsInNldEtleSIsIl9fcHJvbWlzZXMiLCJjbG9uZU5vZGUiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiX19pdGVyYXRvciIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwic3RyaWN0IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsIl9fcHJlcGFyZUF0dHJpYnV0ZU91dCIsInRyYW5zaXRpb24iLCJsb2FkIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJleGlzdHMiLCJUcmFuc2l0aW9uIiwicHJldmlvdXMiLCJyb3V0ZXMiLCJzdGF0ZXMiLCJfX2ZpbmlzZWQiLCJyZWRpcmVjdCIsInJvdXRlIiwiaGFzU3RhdGUiLCJwYXJhbUtleXMiLCJmdWxsUGF0dGVybiIsIl9fcGFyYW1SZWdleCIsImYiLCJxdWVyeUtleXMiLCJ3YXRjaEhhc2giLCJwcmV2Um91dGUiLCJnZXRSb3V0ZSIsInByZXYiLCJmaW5pc2giLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwibWFudWFsIiwicHJlcGFyZVN0YXRlQXJncyIsImNyZWF0ZVN0YXRlVXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJwdXNoU3RhdGUiLCJlcnJvciIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJpbml0U3RhdGUiLCJwYXJlbnROYW1lIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsInJlcGxhY2VVcmwiLCJyZXBsYWNlSGFzaFVybCIsInJlcGxhY2VIaXN0b3J5VXJsIiwicmVwbGFjZVN0YXRlIiwiZ2V0VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwicHJlcGFyZSIsInBhcmFtc1RlbXAiLCJwcmVwYXJlU3RhdGVQYXJhbXMiLCJxdWVyeVRlbXAiLCJwcmVwYXJlU3RhdGVRdWVyeSIsImhhc2hUZW1wIiwicHJlcGFyZVN0YXRlSGFzaCIsImVtcHR5SGFzaCIsIm5ld0FyZ3MiLCJjcmVhdGVTdGF0ZUFyZ3MiLCJleGNsdWRlZCIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsIl9fZmluaXNoZWQiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJyZWxvYWQiLCJwcmV2VHJhbnNpdGlvbiIsInNldFBhdGgiLCJyZWFsVXJsIiwiaXNEaWZmZXJlbnQiLCJpc1JvdXRlQ2hhbmdlZCIsInRpdGxlIiwibG9hZGVkIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0UmVjcmVhdGlvbiIsInNldElzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBY3Rpdml0eSIsInNldFByb3BlcnR5IiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsImdldENvbnRlbnQiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwic2VsZWN0aW9uIiwicmVkZWZpbmUiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJzZXRTZWxlY3RlZCIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb25uZWN0aW9uIiwic2V0Q2FjaGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpc1VybCIsInByZXZlbnREZWZhdWx0Iiwib25TdGF0ZUNoYW5nZWQiLCJzZXRQYXJhbXMiLCJzZXRRdWVyeSIsInNldEhhc2giLCJzZXRPcHRpb25zIiwicmVzZXRIcmVmIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FB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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLl9fZGVmYXVsdHMgPSBbXTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWVcbiAgfTtcbiAgXG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX2NsZWFyZWQgPSBmYWxzZTtcbiAgdGhpcy5fX2NvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5fX2FsaWFzZXMgPSB7fTtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fd2luZG93ID0ge307XG4gIHRoaXMuX190YWdzID0ge307XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlO1xuICB0aGlzLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICBcbiAgdGhpcy5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG4gIF07XG5cbiAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgIGRlbGV0ZSBnbG9iYWxzW2tleV07XG4gIH1cblxuICBnbG9iYWxzLl9fdGFyZ2V0LnV0aWxzID0gdGhpcy53cmFwKHV0aWxzKTtcblxuICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5zZXJ2aWNlcyA9IHt9O1xuXG4gIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICB0aGlzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgdGhpcy5TY29wZSA9IFNjb3BlO1xuICB0aGlzLnV0aWxzID0gdXRpbHM7XG4gIHRoaXMuZ2xvYmFscyA9IGdsb2JhbHM7XG4gIHRoaXMuY29tcG9uZW50cy5BID0gQTtcbiAgdGhpcy5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbiAgdGhpcy5jb21wb25lbnRzLkZvciA9IEZvcjtcbiAgdGhpcy5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZiA9IElmO1xuICB0aGlzLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG4gIHRoaXMuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuICB0aGlzLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuICB0aGlzLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbiAgdGhpcy5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG4gIHRoaXMuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbiAgdGhpcy5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbiAgdGhpcy5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbiAgdGhpcy5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbiAgdGhpcy5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG4gIHRoaXMuY29tcG9uZW50cy5VcmwgPSBVcmw7XG4gIHRoaXMuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuICB0aGlzLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB0aGlzLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5zZXJ2aWNlcy5zdG9yZSA9IHN0b3JlO1xuXG4gIHRoaXMuZGVmaW5lKCk7XG4gIHRoaXMuZXJyb3JIYW5kbGluZygpO1xuICB0aGlzLmlzb2xhdGVFdmVudHMoKTtcbiAgdGhpcy5pc29sYXRlQXJyYXlQcm90b3R5cGUoKTtcbiAgdGhpcy5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7IFxuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19kZWZhdWx0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLl9fZGVmYXVsdHNbaV0oKTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuLyoqXG4gKiBTZXQgZGVmYXVsdHNcbiAqIFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gKi9cbkFraWxpLmRlZmF1bHRzID0gZnVuY3Rpb24gKGZuKSB7ICBcbiAgdGhpcy5fX2RlZmF1bHRzLnB1c2goZm4pO1xuICBmbigpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBnbG9iYWwgY29udGV4dFxuICovXG5Ba2lsaS5jbGVhckdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy51bndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbiAgdGhpcy5fX2NsZWFyZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgaWYgKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgY29uc3Qgc2NvcGUgPSB0aGlzLl9fc2NvcGVzW25hbWVdO1xuICBzY29wZS5fX2VsID0gbnVsbDtcbiAgc2NvcGUuX19jb21wb25lbnQgPSBudWxsO1xuICBzY29wZS5fX3BhcmVudCA9IG51bGw7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNlbWVudFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIHN0ciA9PiAhIXRoaXMuX19zY29wZXNbc3RyXSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIHNjb3BlIGNoYW5nZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgb25seSByb290IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLndyYXBwaW5nID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmKHRoaXMuX193cmFwcGluZykge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIFxuICB0aGlzLl9fd3JhcHBpbmcgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTsgIFxuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUocmVjb21waWxlID09PSB0cnVlPyB7fTogcmVjb21waWxlKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXG4gICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTsgIFxuICBcbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKEFraWxpLmdldEFraWxpUGFyZW50cyhlbCkuZmluZChwID0+IHAuX19ha2lsaS5fX3ByZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24gKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBcbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldOyAgICBcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTsgICAgXG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnJlbW92ZUFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSB3aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICBcbiAgaWYoIXdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbiAgfSAgXG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighY2FsbGJhY2suX19pc29sYXRlZCkge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3NbaW5kZXhdLCAnX19pc29sYXRlZCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIG9iamVjdHMvY2xhc3NlcyB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCBvYmplY3RzL2NsYXNzZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKi9cbkFraWxpLnVud3JhcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMud3JhcChvYmosIHsgcmV2ZXJzZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkud3JhcEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihvcHRpb25zLnRhZyAmJiBBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgIEFraWxpLmFkZFRhZyhvcHRpb25zLnRhZywgQWtpbGkuX19ldmFsdWF0aW9uLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS53cmFwcGluZygoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZuKTtcbiAgYWtpbGlXcmFwcGVkRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGFraWxpV3JhcHBlZEZ1bmN0aW9uW2tleV0gPSBmbltrZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFraWxpV3JhcHBlZEZ1bmN0aW9uLCAnX19ha2lsaScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZm5cbiAgfSk7XG5cbiAgcmV0dXJuIGFraWxpV3JhcHBlZEZ1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuQWtpbGkuYWRkVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0aGlzLmhhc1RhZyh0YWcsIG5vZGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSA9IHt9OyAgICBcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddID0gW107ICAgIFxuICB9XG5cbiAgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10ucHVzaCh7IG5vZGUgfSk7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHRhZyBleGlzdHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ba2lsaS5oYXNUYWcgPSBmdW5jdGlvbih0YWcsIG5vZGUpIHtcbiAgaWYoIW5vZGUpe1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgICBpZihrID09IHRhZykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHJldHVybiBmYWxzZTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9IFxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdGFnXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGFnXVxuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqL1xuQWtpbGkucmVtb3ZlVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0eXBlb2YgdGFnID09ICdvYmplY3QnKSB7XG4gICAgbm9kZSA9IHRhZztcbiAgICB0YWcgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZighdGFnKSB7IFxuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIW5vZGUpIHtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XVtrXVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYoIU9iamVjdC5rZXlzKHRoaXMuX190YWdzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm47ICAgIFxuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKSB7XG4gICAgaWYoa2V5ID09IHRhZykge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIGlmKCFPYmplY3Qua2V5cyh0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdGFnIG5vZGUgZXhwcmVzc2lvbnNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICovXG5Ba2lsaS50cmlnZ2VyVGFnID0gZnVuY3Rpb24gKHRhZykge1xuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgIGZvcihsZXQgayBpbiB0aGlzLl9fdGFnc1trZXldKSB7XG4gICAgICBpZihrID09IHRhZykge1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLl9fdGFnc1trZXldW2tdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgb2JqID0gYXJyW2ldO1xuICAgICAgICAgIG9iai5ub2RlLl9fY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG9iai5ub2RlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZighKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm9vdCBlbGVtZW50IG11c3QgYmUgYW4gaHRtbCBlbGVtZW50YCk7XG4gIH1cblxuICBpZihyb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiaHRtbFwiIGNhbid0IGJlIHRoZSByb290IGVsZW1lbnRgKTtcbiAgfVxuXG4gIHRoaXMuX19yb290ID0gcm9vdDtcbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHsgICAgXG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sKHdpbmRvdy5BS0lMSV9TRVJWRVIuaHRtbCk7XG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUod2luZG93LkFLSUxJX1NFUlZFUi5yZXF1ZXN0Q2FjaGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgPSB7XG4gICAgICBodG1sOiB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCgpICAgICAgXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZiAocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSh7IGluaXQ6IHRydWUgfSk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fX3Jvb3QuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgfVxuXG4gIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBsZXQgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLl9fcm9vdCA9PT0gZG9jdW1lbnQuYm9keT8gJ2JvZHknOiAnYm9keSA+IConKTsgICAgXG4gIHRoaXMuX19yb290LmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcblxuICBmb3IgKGxldCBpID0gZWwuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICB0aGlzLl9fcm9vdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgfSAgXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX19yb290Lm91dGVySFRNTDtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhckdsb2JhbHMoKTtcbiAgcm91dGVyLmRlaW5pdCgpO1xuICByZXF1ZXN0LmRlaW5pdCgpO1xuICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBkZWxldGUgc3RvcmUuX190YXJnZXRbc3RvcmVLZXlzW2ldXTtcbiAgfVxuXG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5Ba2lsaS5zZXREZWZhdWx0cygpOyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGEgbG90IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy91dGlsc31cbiAqL1xuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBFeHRlbmRlZCBzcGxpdCBvZiB0aGUgc3RyaW5nXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtcIkhlbGxvXCIsIFwiV29ybGRcIl1cbiAqIHV0aWxzLnNwbGl0KFwiSGVsbG8gV29ybGRcIiwgXCIgXCIpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ3ggPSA1JywgJyB5ID0gXCIxOzI7M1wiJ11cbiAqIHV0aWxzLnNwbGl0KCd4ID0gNTsgeSA9IFwiMTsyOzNcIicsIFwiO1wiLCBbJ1wiJ10pO1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0ciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVsXVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW2V4Y2x1ZGVdIFxuICovXG51dGlscy5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgZGVsID0gJycsIGV4Y2x1ZGUgPSBbXSkge1xuXHRjb25zdCBleHBzID0gW107ICAgICBcbiAgbGV0IGxhc3QgPSAnJztcblxuICBpZighZGVsKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJyk7XG4gIH1cbiAgZWxzZSBpZihkZWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KGRlbCk7XG4gIH1cbiAgZWxzZSBpZihzdHIuaW5kZXhPZihkZWwpID09IC0xKSB7XG4gICAgbGFzdCA9IHN0cjtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJycpO1xuICAgIGxldCBvcGVuID0gJyc7IFxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBleGNsdWRlLmluZGV4T2YodmFsKTsgICAgICBcblxuICAgICAgaWYoaW5kZXggPiAtMSAmJiAoIW9wZW4gfHwgb3BlbiA9PSB2YWwpKSB7XG4gICAgICAgICFvcGVuPyBvcGVuID0gZXhjbHVkZVtpbmRleF06IG9wZW4gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09IGRlbCAmJiAhb3Blbikge1xuICAgICAgICBleHBzLnB1c2gobGFzdCk7XG4gICAgICAgIGxhc3QgPSAnJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3QgKz0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGxhc3QgJiYgZXhwcy5wdXNoKGxhc3QpO1xuICByZXR1cm4gZXhwcztcbn1cblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCAneCcpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFtbJ3gnXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV0sICcxJywgW1sneCcsICd5J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV0gXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFsneCcsICd5J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbWyd4J10sIFsneSddXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gbnVsbCkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYgKGtleXMgJiYgIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYodHlwZW9mIGhhbmRsZXIgIT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHN0ciA9IGhhbmRsZXI/IChoYW5kbGVyICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnO1xuICAgIGhhbmRsZXIgPSB2YWwgPT4gKHZhbD8gKHZhbCArICcnKS50b0xvd2VyQ2FzZSgpOiAnJykubWF0Y2goc3RyKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCBmaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIWtleXMgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGtleXMpIHtcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgICAga2V5ID0gQXJyYXkuaXNBcnJheShrZXkpPyBrZXk6IFtrZXldO1xuICAgICAgICBsZXQgdmFsID0ga2V5PyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgaXRlbSk6IGl0ZW07XG4gICAgXG4gICAgICAgIGlmIChoYW5kbGVyKHZhbCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJlZCAmJiByZXMucHVzaChpdGVtKTsgICBcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XVxuICogdXRpbHMuc29ydChbe3g6IHt5OiAyfX0sIHt4OiB7eTogMX19XSwgW1sneCcsICd5J11dLCBbdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBhcnIuc2xpY2UoKTtcblxuICBpZiAoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmIChrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneCcsICd6J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmluY2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRob3V0IHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd5J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmV4Y2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBvcHRpb25zID0geyBuZXN0ZWQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIHBsYWluOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgaWYob3B0aW9ucy5wbGFpbiAmJiAhdGhpcy5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCBpZ25vcmVVbmRlZmluZWQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gKHZhbCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IEFycmF5LmlzQXJyYXkodmFsKT8gW106IHt9O1xuICAgICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyh2YWwpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbFtrZXldICE9PSB1bmRlZmluZWQgJiYgKG9ialtrZXldID0gdmFsW2tleV0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5pZ25vcmVVbmRlZmluZWQpIHtcbiAgICAgIGEgPSBjbGVhclVuZGVmaW5lZChhKTtcbiAgICAgIGIgPSBjbGVhclVuZGVmaW5lZChiKTtcbiAgICB9XG5cbiAgICBsZXQgYUtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhhKTtcbiAgICBsZXQgYktleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhiKTtcbiAgICBcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGEgPSB0aGlzLmlzU2NvcGVQcm94eShhKT8gYS5fX3RhcmdldDogYTtcbiAgICBiID0gdGhpcy5pc1Njb3BlUHJveHkoYik/IGIuX190YXJnZXQ6IGI7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBhS2V5c1tpXTtcblxuICAgICAgaWYgKCF0aGlzLmNvbXBhcmUoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgaGFzaCBmcm9tIGEgc3RyaW5nXG4gKiBcbiAqIEBwYXJhbSB7Kn0gc291cmNlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jcmVhdGVIYXNoID0gZnVuY3Rpb24oc291cmNlKSB7XG4gIHR5cGVvZiBzb3VyY2UgPT0gJ29iamVjdCcgJiYgKHNvdXJjZSA9IEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpXG4gIHR5cGVvZiBzb3VyY2UgIT0gJ3N0cmluZycgJiYgKHNvdXJjZSA9ICfioIAnICsgU3RyaW5nKHNvdXJjZSkpO1xuICBsZXQgaGFzaCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hhciA9IHNvdXJjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgaGFzaCA9IGhhc2ggJiBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIGhhc2ggKyAnJztcbn1cblxuLyoqXG4gKiBFbmNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB2YWx1ZSA9IGVsLnZhbHVlO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jYXBpdGFsaXplID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZiAob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBvW2tdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuICAgICAgKCFmbiB8fCBmbih2YWx1ZSkpICYmIChkZWxldGUgb1trXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICBsZXQgdmFsID0gJyc7ICBcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoIShub3cgJSBpKSkge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiAgQ3JlYXRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgZGVib3VuY2VcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJucyB7Zm59XG4gKi9cbnV0aWxzLmRlYm91bmNlID0gZnVuY3Rpb24oZm4sIGRlbGF5ID0gMCkgeyAgXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICBmbi5fX2RlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4oKTtcbiAgICAgIGNsZWFyVGltZW91dChmbi5fX2RlYm91bmNlVGltZW91dCk7XG4gICAgICBkZWxldGUgZm4uX19kZWJvdW5jZVRpbWVvdXQ7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aGljaCBoYXZlIGFzeW5jIGF0dHJpYnV0ZSBjb250ZW50LlxyXG4gKiBcclxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxyXG4gKiBcclxuICogQHRhZyB1cmxcclxuICogQGF0dHIge3N0cmluZ30gW3VybF1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5leHBvcnQgY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBjb21wb25lbnRzIGFyZSBpbmhlcml0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgdmFyaWFibGVzID0ge30pIHtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgY29uc3QgdmFycyA9IFtdO1xuICAgIGNvbnN0IGV4cHMgPSB1dGlscy5zcGxpdChleHByZXNzaW9uLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFyaWFibGVzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaCh2YXJpYWJsZXNba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5rZXlzLCBgJHtleHBzLmpvaW4oJzsgJyl9YCkuYXBwbHkoY29udGV4dCwgdmFycyk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGVdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYW4gaHRtbCBlbGVtZW50IHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3JgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlU3RvcmVLZXlzID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyS2V5cyA9IHt9O1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2NvbnRlbnQgPSAnJztcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIGNoZWNrQ2hhbmdlczogZmFsc2UsIFxuICAgICAgc2V0RXZlbnRzOiB0cnVlLFxuICAgICAgc2V0UGFyZW50czogdHJ1ZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcmVjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgLi4udGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpLFxuICAgICAgc2V0RXZlbnRzOiBmYWxzZSxcbiAgICAgIHNldFBhcmVudHM6IGZhbHNlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cbiBcbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZShvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gdHJ1ZTsgXG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB7fTsgIFxuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyk7ICAgIFxuICAgIHRoaXMuX19jb21waWxpbmcuc2V0RXZlbnRzICYmIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldFBhcmVudHMgJiYgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEJvb2xlYW5BdHRyaWJ1dGVzICYmIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuZGVmaW5lQXR0cmlidXRlcyAmJiB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKTsgXG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpOyBcbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMyAmJiB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCkpIHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlTm9kZShjaGlsZCwgdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlKTsgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAgICBcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDsgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlc29sdmVkKCkpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9faXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7ICAgIFxuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpOyAgICAgXG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTsgICAgXG4gICAgdGhpcy5zY29wZSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYgKCF0aGlzLmVsLmhhc0F0dHJpYnV0ZShldikpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoZXYsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCBwYXJlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0UGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50cyA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsKTtcblxuICAgIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmICghcGFyZW50Ll9fYWtpbGkuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgICAgZXZhbHVhdGVQYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgbm9kZSBoYXMgY2hhbmdlZCBvbiB0aGUgY2VydGFpbiBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2Uobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgXG4gICAgaWYgKCFwcm9wKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmUgYSBub2RlIHByb3BlcnR5IHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcCBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICovXG4gIF9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlLCBvcHRpb25zID0ge30pIHsgIFxuICAgIHJldHVybiB1dGlscy5jb21wYXJlKHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpLCBwcm9wLmhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBleGNlcHRpb24gbWVzc2FnZVxuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgXG4gICAqL1xuICBfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKSB7XG4gICAgbGV0IHRhZ05hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLnRhZ05hbWU7XG4gICAgbGV0IGF0dHJOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuICAgIGxldCBjb21wb25lbnROYW1lID0gKGF0dHJOYW1lIHx8IHRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGVsZW1lbnROYW1lID0gbm9kZS5fX2VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/IG5vZGUubmFtZS50b0xvd2VyQ2FzZSgpOiAnJzsgICAgICAgIFxuICAgIGxldCBtZXNzYWdlcyA9IFsgZXJyLm1lc3NhZ2UsIG5vZGUuX19leHByZXNzaW9uLnRyaW0oKSBdO1xuICAgIGF0dHJpYnV0ZU5hbWUgJiYgbWVzc2FnZXMucHVzaChgW2F0dHJpYnV0ZSAke2F0dHJpYnV0ZU5hbWV9XWApO1xuICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuY29uY2F0KFsgYFtlbGVtZW50ICR7ZWxlbWVudE5hbWV9XWAsIGBbY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX1dYCBdKTtcbiAgICByZXR1cm4gYEV4cHJlc3Npb24gZXJyb3I6IGAgKyBtZXNzYWdlcy5qb2luKCdcXG5cXHRhdCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuICAgIGNvbnN0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7ICAgICBcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcmVudEJpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXSwgY29tcG9uZW50OiBub2RlLl9fY29tcG9uZW50IH07XG4gICAgICBcbiAgICAgIHRyeSB7ICAgICAgICBcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlLCB7IC4uLmdsb2JhbHMgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgICBsZXQgcGFyZW50c0hhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEucGFyZW50cyk7XG4gICAgICAgXG4gICAgICAgIGlmIChkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGlzdGluZ0JpbmRpbmdzW2hhc2hdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50VmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLnBhcmVudHMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpOyAgICAgICAgXG5cbiAgICAgICAgaWYgKHBhcmVudFZhbHVlICYmIHR5cGVvZiBwYXJlbnRWYWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnICYmIHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9PSA1MCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgICAgICAgIGBGb3IgaGlnaGVyIHBlcmZvcm1hbmNlLCBkb24ndCBsb29wIFByb3h5IGFycmF5cy9vYmplY3RzIGluc2lkZSBleHByZXNzaW9uIGZ1bmN0aW9ucywgb3IgdXNlIEFraWxpLnVuZXZhbHVhdGUoKSB0byB3cmFwIHlvdSBjb2RlLmAsXG4gICAgICAgICAgICAgIGAkeyBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgfWAsXG4gICAgICAgICAgICAgIGBzY29wZSBwcm9wZXJ0eSBcIiR7IGRhdGEucGFyZW50cy5qb2luKCcuJykgfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICFwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0/IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9IDE6IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSsrO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICBcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlcywgY291bnRlciwgZXhwcmVzc2lvbiwgYXR0cmlidXRlVmFsdWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBub2RlIGFuZCBzZXQgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBrZXlzLCBldmFsdWF0ZWQpIHtcbiAgICBsZXQgYmluZCA9IHRoaXMuX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSk7XG4gICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIGlmICghYmluZCkge1xuICAgICAgdGhpcy5fX2JpbmQoa2V5cywgeyBub2RlIH0pO1xuICAgIH0gICBcblxuICAgIHRoaXMuX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpOyAgICAgXG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcbiAgICAgICAgICBkYXRhID0gYmluZD8gKGJpbmQuX19kYXRhIHx8IFtdKTogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGNvbXBvbmVudC5fX2dldEFsbEJpbmRzKHByb3Aua2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBiaW5kID0gZGF0YVtrXTsgICBcblxuICAgICAgICAgIGlmKCFiaW5kIHx8ICFiaW5kLm5vZGUgfHwgIWJpbmQubm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkgeyAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhwcm9wLmtleXMpOyAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpO1xuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhwcm9wLmtleXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzIChrZXlzLCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpIHsgICAgIFxuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCB0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG4gICAgICAgIFxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiAhaGFzS2V5KSB7XG4gICAgICAgICAgX2lzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMsIGZhbHNlKTtcblxuICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyAuLi5nbG9iYWxzLCAgZXZlbnQ6IGUgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrID0gdHJ1ZSkge1xuICAgIGNvbnN0IGtleSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSc7ICBcblxuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyBcbiAgICAgIGNvbnN0IHsgcmVzLCBhdHRyaWJ1dGVWYWx1ZSwgZXhwcmVzc2lvbiwgY291bnRlciB9ID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpOyAgXG4gICAgICBub2RlW2tleV0gIT0gcmVzICYmIChub2RlW2tleV0gPSByZXMpO1xuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuICBcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICB9XG4gIFxuICAgICAgICBjb25zdCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcbiAgICAgICAgY29uc3QgY2FtZWxBdHRyaWJ1dGUgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gIFxuICAgICAgICBpZiAoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgICB9ICAgICAgICAgIFxuICBcbiAgICAgICAgaWYgKG5vZGUuX19hdHRyaWJ1dGVPbikgeyAgICAgICAgXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgICAgICAgIHZhbHVlID0gY29tcG9uZW50Ll9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICBjb21wb25lbnQuYXR0cnNbY2FtZWxBdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgZ2V0dGluZ1xuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICovXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3Igc2VuZGluZ1xuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICovXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZU91dChub2RlLCB2YWx1ZSkgeyAgICBcbiAgICByZXR1cm4gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmICghbm9kZSB8fCBzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpOyAgICBcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKG5vZGUuX19pc0V2ZW50KSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBub2RlLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpKTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIFxuICAgIGxldCBjaGVjayA9IHRoaXMuX19jb21waWxpbmc/IHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzOiBmYWxzZTtcbiAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0F0dHIgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI7XG4gICAgY29uc3QgdmFsID0gbm9kZVtpc0F0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXTtcbiAgICBjb25zdCBoYXNCaW5kaW5ncyA9IGV2YWx1YXRpb25SZWdleC50ZXN0KHZhbC50cmltKCkpO1xuICAgIGNvbnN0IGlzQm9vbGVhbiA9IGlzQXR0cj8gL15ib29sZWFuLS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk6IGZhbHNlO1xuICAgIGNvbnN0IGlzRXZlbnQgPSBpc0F0dHI/IC9eb24tKC4rKS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk6IGZhbHNlO1xuXG4gICAgaWYoIWVsLl9fYWtpbGkgJiYgIWhhc0JpbmRpbmdzICYmICFpc0Jvb2xlYW4gJiYgIWlzRXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fbmFtZSA9IHRoaXMuX19zY29wZS5fX25hbWUgKyB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYpO1xuICAgIG5vZGUuX19pc0V2ZW50ID0gaXNFdmVudDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBoYXNCaW5kaW5ncztcbiAgICBub2RlLl9faXNCb29sZWFuID0gaXNCb29sZWFuO1xuICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7ICAgIFxuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzICYmICFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZSk7XG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZSk7ICAgICAgIFxuICAgIH1cblxuICAgIEFraWxpLnJlbW92ZVRhZyhub2RlKTsgICAgXG4gICAgZGVsZXRlIG5vZGUuX19uYW1lO1xuICAgIGRlbGV0ZSBub2RlLl9faGFzQmluZGluZ3M7XG4gICAgZGVsZXRlIG5vZGUuX19pc0Jvb2xlYW47XG4gICAgZGVsZXRlIG5vZGUuX19pc0V2ZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXM7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPZjtcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgIGRlbGV0ZSBub2RlLl9fZXZlbnQ7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9faW5pdGlhbGl6ZWQ7XG4gICAgZGVsZXRlIG5vZGUuX19jb21wb25lbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHsgXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7ICBcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXZhbHVhdGVkID0gIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7IFxuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBleGNBcnIgPSBrZXlzLnNsaWNlKCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpIHtcbiAgICAgICAgICAgIGxldCByZWFsVGFyZ2V0ID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgcmVhbFRhcmdldCAmJiAocmVhbFRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSAmJiAoY29tcG9uZW50ID0gIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBpZiAoQWtpbGkuX193cmFwcGluZyAmJiBrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb3JQYXJlbnRzID0gQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5wYXJlbnRzKGMgPT4gYyBpbnN0YW5jZW9mIEFraWxpLmNvbXBvbmVudHMuRm9yKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHsgXG4gICAgICAgICAgICAgIGNvbnN0IGZvckRhdGEgPSBmb3JQYXJlbnRzW2ldLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhleGNBcnIsIGNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSAnb2JqZWN0JyAmJiBmb3JEYXRhID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBleGNBcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gQWtpbGkud3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQ0hFQ0tfRVhJU1RFTkNFOiBpZiAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0UGFyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0UGFyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7IFxuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzTW91bnRlZCkgeyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzdG9yZSBhbmQgYXR0cmlidXRlcyBjaGFuZ2VcbiAgICovXG4gIF9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50S2V5cyA9IGtleXMuc2xpY2UoMCwgbCAtIGkpO1xuICAgICAgY29uc3QgY3VycmVudEtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhjdXJyZW50S2V5cyk7XG4gICAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhjdXJyZW50S2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgICAgaWYgKHRoaXMuX19zdG9yZUxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7ICBcbiAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19hdHRyTGlua3NbY3VycmVudEtleVN0cmluZ10pIHtcbiAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGN1cnJlbnRLZXlzLCB2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgaGFzaCBmb3IgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9ICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUtleXNIYXNoKGtleXMpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0b3JlIG9mIHRoZSBkaXNhYmxlbWVudCB0eXBlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcbiAgICovXG4gIF9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgcHJveHk6ICdfX2Rpc2FibGVQcm94eScsXG4gICAgICBzdG9yZTogJ19fZGlzYWJsZVN0b3JlS2V5cycsXG4gICAgICBhdHRyOiAnX19kaXNhYmxlQXR0cktleXMnXG4gICAgfSlbdHlwZV07XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5JykgeyAgICBcbiAgICB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBkZWxldGUgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpO1xuICAgIHJldHVybiB0aGlzW3N0b3JlXS5fX2FsbD8gdHJ1ZTogdGhpc1tzdG9yZV1bdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7IFxuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnc3RvcmUnKSkgeyAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgY29uc3QgcCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICBcbiAgICAgIFxuICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcC5wdXNoKHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSkpOyAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgbGV0IGxpbmtzID0gKEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KEFraWxpLl9fc3RvcmVMaW5rc1snKiddIHx8IFtdKTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbGluay5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwoY29tcG9uZW50LCB2YWx1ZSwgbmFtZSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5nZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCBjb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7ICAgXG4gICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgIH0gIFxuICAgIH0pOyAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iaGVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5nZXQgJiYgIW9wdGlvbnMuc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIGF0IGxlYXN0IFwiZ2V0XCIgb3IgXCJzZXRcIiBvcHRpb24gYXMgdHJ1ZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIChzdG9yZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmICghdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvID0geyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10ucHVzaChpbmZvKTtcbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gc3RvcmUuX190YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goeyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGZuLCBkYXRlOiBEYXRlLm5vdygpIH0pO1xuXG4gICAgaWYgKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoIDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gc3RvcmVLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gc3RvcmUuX190YXJnZXRba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwga2V5KSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMsICdhdHRyJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcblxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBsaW5rcyA9ICh0aGlzLl9fYXR0ckxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQodGhpcy5fX2F0dHJMaW5rc1snKiddIHx8IFtdKTtcbiAgICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICBcbiAgICBcbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgICBcblxuICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdXRpbHMudG9EYXNoQ2FzZShuYW1lKSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoIWxpbmsuZ2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIHRoaXMuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7ICAgXG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICAodGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCB0aGlzLmF0dHJzW25hbWVdKTsgXG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10ucHVzaCh7IG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDsgICAgXG5cbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdLnB1c2goeyBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IGF0dHJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX19hdHRycykuZmlsdGVyKGsgPT4gISh0aGlzLl9fYXR0cnNba10gaW5zdGFuY2VvZiBBa2lsaS5FdmVudEVtaXR0ZXIpKTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXR0cnNLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGF0dHJzS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuX19hdHRyc1trZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCB1dGlscy50b0Rhc2hDYXNlKGtleSkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLmF0dHJzW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgYXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2lzU3lzdGVtS2V5IChrZXkpIHtcbiAgICBpZiAoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICBjb25zdCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBDSEVDS19QUk9YWTogaWYgKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZiAodGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBicmVhayBDSEVDS19QUk9YWTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzIHx8XG4gICAgICAgICAgQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSk7XG4gICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSApOyAgICAgICAgICBcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldEtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhcmdldEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7ICAgIFxuICAgICAgICBjb25zdCBrID0gdGFyZ2V0S2V5c1tpXTtcbiAgICAgICAgY29uc3QgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTsgICBcbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICB9XG5cbiAgIC8qKlxuICAgKiBDcmVhdGUgYW4gaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBjb25zdCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgY29uc3QgaXNvbGF0aW9uSGFzaCA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIGJpbmRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGJpbmQgLSBieSBkZWZhdWx0IGlzIGNvbXBvbmVudC5fX2V2YWx1YXRpb24ubGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RCaW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwgcmVhbENvbXBvbmVudCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcblxuICAgIGlmIChiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmIChkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuZXN0ZWQgYmluZGluZ3MgYnkga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICovXG4gIF9fZ2V0QWxsQmluZHMoa2V5cykge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBjb25zdCBjb2xsZWN0ID0gKG9iaikgPT4ge1xuICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KG9iai5fX2RhdGEgfHwgW10pO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkgfHwga2V5ID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsZWN0KG9ialtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0KHJvb3QpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpOyAgICBcbiAgICBsZXQgaGFzaCA9IHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSBub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuaGFzaCA9IGhhc2g7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgaGFzaCxcbiAgICAgIG5vZGUsXG4gICAgICBrZXlzLFxuICAgICAgZXZhbHVhdGVkICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCBub2Rlc1xuICAgKiBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX21hcE5vZGVzKGZuLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyByb290QXR0cnM6IHRydWUsIGF0dHJzOiB0cnVlLCBub2RlOiB0cnVlLCBlbDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgICAgaWYoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5hdHRycyAmJiAoZWwgIT09IHRoaXMuZWwgfHwgb3B0aW9ucy5yb290QXR0cnMpKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBmbihhdHRyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGVsLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsLmNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG9wdGlvbnMubm9kZSAmJiBmbihub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09IDEgJiYgIW5vZGUuX19ha2lsaSkge1xuICAgICAgICAgIGZpbmQobm9kZSk7XG4gICAgICAgICAgb3B0aW9ucy5lbCAmJiBmbihub2RlKTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBub2Rlc1xuICAgKiBcbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZCBcbiAgICovXG4gIF9fZ2V0QWxsTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9fbWFwTm9kZXMobm9kZSA9PiBub2Rlcy5wdXNoKG5vZGUpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGRhdGEgYnkgbm9kZXMgaGFzaFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdHxOb2RlW118Tm9kZX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgbm9kZXMgaW5zdGFuY2VvZiBOb2RlICYmIChub2RlcyA9IFtub2Rlc10pOyBcblxuICAgIGlmKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG4gICAgICBjb25zdCBhcnIgPSBub2RlcztcbiAgICAgIG5vZGVzID0ge307XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gYXJyW2ldO1xuICAgICAgICBub2Rlc1tub2RlLl9fbmFtZV0gPSBub2RlO1xuICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBjID0ga2V5cy5sZW5ndGg7IGogPCBjOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgIFxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobm9kZXNbYmluZC5ub2RlLl9fbmFtZV0pIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGJpbmQubm9kZTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdLCBvYmosIGspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyZW50ICYmICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHBhcmVudHMgYmluZGluZ3Mgd2l0aCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZXxOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpIHsgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX19wYXJlbnRzW2ldOyAgICAgIFxuICAgICAgcGFyZW50ICYmIHBhcmVudC5fX2FraWxpICYmIHBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGZvcihsZXQgayBpbiBsaW5rKSB7XG4gICAgICAgICAgICBkZWxldGUgbGlua1trXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBub2RlcyA9IHt9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgbm9kZXMgPSB7IC4uLm5vZGVzLCAuLi5jaGlsZC5fX2FraWxpLl9fcmVtb3ZlKG9wdGlvbnMpIH07XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZShvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IG5vZGVzID0ge307XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7IFxuICAgIHRoaXMucmVtb3ZlZCgpOyAgIFxuICAgIG5vZGVzID0geyAuLi5ub2RlcywgLi4udGhpcy5fX2RldGFjaCh7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KSwgLi4udGhpcy5fX2VtcHR5KHsgc2F2ZUJpbmRpbmdzOiB0cnVlLCByb290QXR0cnM6IG9wdGlvbnMucm9vdEF0dHJzIH0pIH07XG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpOyAgXG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7ICAgIFxuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG5cbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHsgICBcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTsgICBcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuXG4gICAgQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXMuZWwuX19ha2lsaTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9faXNNb3VudGVkO1xuICAgICAgZGVsZXRlIHRoaXMuX19pc0NvbXBpbGVkO1xuICAgICAgZGVsZXRlIHRoaXMuX19pc1Jlc29sdmVkO1xuICAgICAgZGVsZXRlIHRoaXMuX19jYW5jZWxsZWQ7XG4gICAgICBkZWxldGUgdGhpcy5fX3ByZXZlbnQ7XG4gICAgICBkZWxldGUgdGhpcy5fX2NvbnRlbnQ7XG4gICAgICB0aGlzLl9fYmluZGluZ3MgPSBudWxsO1xuICAgICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgIHRoaXMuX19kaXNhYmxlU3RvcmVLZXlzID0gbnVsbDtcbiAgICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSBudWxsO1xuICAgICAgdGhpcy5fX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgICAgdGhpcy5fX3BhcmVudHMgPSBudWxsOyAgICAgIFxuICAgICAgdGhpcy5fX2F0dHJzID0gbnVsbDtcbiAgICAgIHRoaXMuX19hdHRyTGlua3MgPSBudWxsO1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3MgPSBudWxsO1xuICAgICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgdGhpcy5lbCA9IG51bGw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIGNvbnN0IG5vZGVzID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgbm9kZS5fX2luaXRpYWxpemVkICYmIChub2Rlc1tub2RlLl9fbmFtZV0gPSBub2RlKTtcbiAgICB9XG5cbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkob3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fX3JlbW92ZUNoaWxkcmVuKHsgc2F2ZUJpbmRpbmdzOiB0cnVlLCByb290QXR0cnM6IHRydWUgfSk7XG4gICAgXG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4geyAgICAgIFxuICAgICAgaWYobm9kZS5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pOyAgXG4gICAgICBub2Rlc1tub2RlLl9fbmFtZV0gPSBub2RlO1xuICAgIH0sIHsgcm9vdEF0dHJzOiBvcHRpb25zLnJvb3RBdHRycyB9KTtcblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBzdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3MpOiB0aGlzLl9fc3RvcmVCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkgeyAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBzZXRQYXJlbnRzOiB0cnVlLCBjaGVja0NoYW5nZXM6IGZhbHNlIH0gfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufSIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3MuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gbWFrZSByZXF1ZXN0cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0c31cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBfX2NhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yUGF0dGVybjogL15bXjIzXS8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcbiAgICAgICghd2luZG93LkFLSUxJX1NTUiAmJiAhQWtpbGkuX19pbml0KSAmJiAoY2FjaGUgPSB0cnVlKTtcblxuICAgICAgaWYob3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJyAmJiAoIW9wdGlvbnMuYm9keSB8fCB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09ICdzdHJpbmcnKSkge1xuICAgICAgICBoYXNoID0gdGhpcy5jcmVhdGVDYWNoZUhhc2goeyBcbiAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgdXNlcjogb3B0aW9ucy51c2VyLCBcbiAgICAgICAgICBwYXNzd29yZDogb3B0aW9ucy5wYXNzd29yZCwgXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5IFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjYWNoZSAmJiBoYXNoKSB7ICAgICAgICBcbiAgICAgICAgbGV0IF9jYWNoZSA9IHRoaXMuZ2V0Q2FjaGUoaGFzaCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihfY2FjaGUgJiYgKGNhY2hlID09PSB0cnVlIHx8IG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy50cmFuc2Zvcm1BZnRlcihfY2FjaGUucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVhZGVyS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGsgPSBoZWFkZXJLZXlzW2ldO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogeGhyLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHhoci5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUeXBlID09ICd0ZXh0Jz8geGhyLnJlc3BvbnNlVGV4dDogJycsXG4gICAgICAgICAgcmVzcG9uc2VYTUw6IHhoci5yZXNwb25zZVR5cGUgPT0gJ2RvY3VtZW50Jz8geGhyLnJlc3BvbnNlWE1MOiAnJyxcbiAgICAgICAgICByZXNwb25zZVVSTDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIHRpbWVvdXQ6IHhoci50aW1lb3V0LFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycyh4aHIpLCAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcihyZXN1bHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybiAmJiAoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcblxuICAgICAgICAoY2FjaGUgfHwgd2luZG93LkFLSUxJX1NTUikgJiYgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzIG9mIGEgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIHRvIHNhdmUgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICByZXR1cm4gdXRpbHMuY3JlYXRlSGFzaChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodikpLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSkpO1xuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV0gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gICAvKipcbiAgICogIE1ha2UgSEVBRCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBoZWFkKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnSEVBRCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBCYXNlIGNvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIHtib29sZWFufSBmb2N1cyAtIHNldCB0aGUgZm9jdXMgb3Igbm90XG4gKiBAYXR0ciB7bnVtYmVyfSBkZWJvdW5jZSAtIGRlYm91bmNlIGRlbGF5XG4gKiBAbWVzc2FnZSB7dm9pZH0gZGVib3VuY2UgLSBzZW50IG9uIHRoZSBkZWJvdW5jZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXRpbHMuZGVib3VuY2UoKCkgPT4gdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSksIHRoaXMuZGVib3VuY2VJbnRlcnZhbCkpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCdkZWJvdW5jZScsIHRoaXMuc2V0RGVib3VuY2UpO1xuICB9XG5cbiAgc2V0RGVib3VuY2UoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSAraW50ZXJ2YWw7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBmb3JcbiAqIEBzZWxlY3RvciBmb3JbaW5dLG9sW2luXSx1bFtpbl0sdGhlYWRbaW5dLHRib2R5W2luXSx0Zm9vdFtpbl1cbiAqIEBhdHRyIHtvYmplY3R8YXJyYXl9IGluIC0gZGF0YSB0byBjcmVhdGUgdGhlIGxvb3BcbiAqIEBtZXNzYWdlIHtvYmplY3R8YXJyYXl9IG91dCAtIHNlbnQgb24gdGhlIGRhdGEgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydvdXQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgdGhpcy5Mb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCB0aGlzLkxvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIFxuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvckVsID0gbnVsbDtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBfX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSkgeyAgXG4gICAgaWYoKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5uYW1lID09ICdpbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuX19wcmVwYXJlQXR0cmlidXRlSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3Aubm9kZTtcblxuICAgIGlmKChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUubmFtZSA9PSAnaW4nICYmIHByb3AudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdXBlci5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHsgICAgXG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpOyAgICBcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICBkZWxldGUgdGhpcy5odG1sO1xuICAgIHRoaXMuaXRlcmF0b3JzID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yRWwgPSBudWxsOyBcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvckVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoZWwub3V0ZXJIVE1MKTtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudChodG1sKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2hhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07XG4gICAgICAgIFxuICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkgeyAgICAgICAgXG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7ICAgICAgICBcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmUodGhpcy5fX2hhc2gsIGl0ZXJhdG9yLmhhc2gpKSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5pdGVyYXRvckVsLmNsb25lTm9kZSgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhOyAgIFxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgY29uc3QgbG9vcCA9IChrZXksIHZhbHVlLCBpbmRleCkgPT4gdGhpcy5sb29wKGtleSwgdmFsdWUsIGluZGV4KS5pdGVyYXRlKGluZGV4KTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAobGV0IGwgPSBkYXRhLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxvb3AoaW5kZXgsIGRhdGFbaW5kZXhdLCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgICAgZm9yIChsZXQgbCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgICBsb29wKGtleSwgZGF0YVtrZXldLCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBpbmRleCwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaV07XG4gICAgICBpdGVyYXRvci5fX3JlbW92ZSgpO1xuICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl9fcHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdHRycy5vbk91dC50cmlnZ2VyKGRhdGEsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB9KTsgICAgXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gMDtcbiAgICB0aGlzLl9fa2V5ID0gJyc7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faGFzaCA9ICcnO1xuICAgIHRoaXMuX19wcm9taXNlcyA9IFtdO1xuICB9ICBcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBsb29wXG4gKiBAc2VsZWN0b3IgbG9vcCx0clxuICogQGF0dHIgQHNlZSBGb3JcbiAqIEBzY29wZSB7Kn0gbG9vcFZhbHVlIC0gZGF0YSBpdGVtJ3MgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIFxuICogQHNjb3BlIHtzdHJpbmd8bnVtYmVyfSBsb29wS2V5IC0ga2V5IG9mIHRoZSBpdGVyYXRpb25cbiAqIEBzY29wZSB7bnVtYmVyfSBsb29wSW5kZXggLSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICBzdXBlci5yZW1vdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIGRlbGV0ZSB0aGlzLnZhbHVlO1xuICAgIGRlbGV0ZSB0aGlzLmtleTtcbiAgICBkZWxldGUgdGhpcy5pbmRleDtcbiAgICBkZWxldGUgdGhpcy5oYXNoOyAgICBcbiAgfVxuXG4gIHNldEluZGV4KHRhcmdldCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgsIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0S2V5KHRhcmdldCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldFZhbHVlKHRhcmdldCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHRydWUsIHRhcmdldCk7XG4gICAgdGhpcy5oYXNoID0gdGhpcy5mb3IuX19oYXNoO1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGV9XG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyBhcmUgbm90IG1vbml0b3JlZC5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggZXZlbnRzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHRyaWdnZXIgY3VzdG9tIGphdmFzY3JpcHQgZXZlbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2V2ZW50c31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbm9kZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMoeyBkZXRhaWw6IGRhdGEsICAuLi5vcHRpb25zIH0pKSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgYW4gZXZlbnQgb3B0aW9uc1xuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICovXG4gIHByZXBhcmVPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIC4uLm9wdGlvbnMgfTsgXG4gICAgdGhpcy5ub2RlLl9fY29tcG9uZW50Ll9fcHJlcGFyZUF0dHJpYnV0ZU91dCh0aGlzLm5vZGUsIG9wdGlvbnMuZGV0YWlsKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBlbWl0dGVyXG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy51bmJpbmQoKTtcbiAgICBkZWxldGUgdGhpcy5uYW1lO1xuICAgIGRlbGV0ZSB0aGlzLm5hbWU7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5lbCA9IG51bGw7XG4gIH1cbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIGRpc3RyaWJ1dGUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuY29uc3Qgb2JqID0ge307XG5cbi8qKlxuICogR2xvYmFscyB0byB1c2UgdGhlIGN1c3RvbSB2YXJpYWJsZXMgaW4gc2NvcGUgZXhwcmVzc2lvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZSNkb2NzX2dsb2JhbHN9XG4gKi9cbmNvbnN0IGdsb2JhbHMgPSBuZXcgUHJveHkob2JqLCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYoa2V5ID09ICdfX3RhcmdldCcpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9ICAgXG4gICAgXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICB0YXJnZXRba2V5XSA9IEFraWxpLndyYXAodmFsdWUsIHsgdGFnOiBrZXkgfSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7ICAgXG4gICAgQWtpbGkucmVtb3ZlVGFnKGtleSk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsczsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByb3V0ZXIgdGVtcGxhdGVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgcm91dGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCA9IHRydWUpIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCFsb2FkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbi8qKlxuICogVHJhbnNpdGlvbiBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgY29uc2lzdHMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcHJldmlvdXMgPSBudWxsKSB7ICBcbiAgICB0aGlzLnVybCA9IHVybDsgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2ZpbmlzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3Qoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyAuLi5yb3V0ZXIudHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLmNhbmNlbCgpOyAgIFxuICAgIHJldHVybiByb3V0ZXIuc3RhdGUuY2FsbChyb3V0ZXIsIHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWQgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3RcbiAgICovXG4gIHJlbG9hZChwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcGFyYW1zID0geyAuLi50aGlzLnBhdGgucGFyYW1zLCAuLi5wYXJhbXMgfTtcbiAgICBxdWVyeSA9IHsgLi4udGhpcy5wYXRoLnF1ZXJ5LCAuLi5xdWVyeSB9O1xuICAgIGhhc2ggPSBoYXNoID09PSB1bmRlZmluZWQ/IHRoaXMucGF0aC5oYXNoOiBoYXNoO1xuICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHRoaXMucGF0aC5zdGF0ZS5uYW1lLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcGF0aFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhdGggXG4gICAqL1xuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9LCAuLi5wYXRoIH07XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh0aGlzLnBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3RoaXMucGF0aC5zdGF0ZS5uYW1lXSA9IHRoaXMucGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByb3V0ZSBieSB0aGUgc3RhdGVcbiAgICogIFxuICAgKiBAcGFyYW0geyp9IHN0YXRlIFxuICAgKi9cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyB0aGUgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAgICovXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHJvdXRlIGlzIGNoYW5nZWRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZVxuICAgKi9cbiAgaXNSb3V0ZUNoYW5nZWQocm91dGUpIHtcbiAgICBpZighdGhpcy5wcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSByb3V0ZS5zdGF0ZTtcblxuICAgIGlmKCF0aGlzLnByZXZpb3VzLmhhc1N0YXRlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1LZXlzID0gW107XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZShyb3V0ZXIuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gcGFyYW1LZXlzLnB1c2godikpO1xuICAgIFxuICAgIGZvcihsZXQga2V5IGluIHN0YXRlLnBhcmFtcykge1xuICAgICAgaWYocGFyYW1LZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgICBwYXJhbUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5S2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlLnF1ZXJ5KTtcbiAgICBjb25zdCB3YXRjaEhhc2ggPSBzdGF0ZS5oYXNoICE9PSB1bmRlZmluZWQ7ICAgIFxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRoaXMucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpOyBcblxuICAgIGNvbnN0IHByZXYgPSB7IFxuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucGFyYW1zLCBwYXJhbUtleXMpLCBcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucGFyYW1zLCBwYXJhbUtleXMpLFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfVxuXG4gICAgaWYod2F0Y2hIYXNoKSB7XG4gICAgICBwcmV2Lmhhc2ggPSBwcmV2Um91dGUuaGFzaDtcbiAgICAgIGN1cnJlbnQuaGFzaCA9IHJvdXRlLmhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7ICAgXG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2ggdGhlIHRyYW5zaXRpb25cbiAgICovXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLl9fZmluaXNlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucm91dGVyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJhc2VVcmwgPSBcIi9cIjtcbiAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgdGhpcy5oYXNoTW9kZSA9IHRydWU7XG4gIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICB0aGlzLl9faW5pdCA9IGZhbHNlO1xuICB0aGlzLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG4gIHRoaXMuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIFxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7c3RhdGV9YCk7XG4gIH1cblxuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIG9wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSkpOyAgXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTsgICAgXG4gIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybCh1cmwpKTtcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7ICBcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlOyAgICBcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnJlcGxhY2VIYXNoVXJsKHVybCk6IHRoaXMucmVwbGFjZUhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJyMnICsgKHVybCB8fCAnLycpKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJlcGFyZV1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9LCBwcmVwYXJlID0gdHJ1ZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBcbiAgaWYocHJlcGFyZSkge1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpO1xuICB9XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiAnLycgKyAocGFyYW1zW3ZdIHx8ICcnKSk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBhcmd1bWVudHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgYXJncyA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9O1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCA5OTk7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIFxuICAgIGlmKGhhc2hUZW1wID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYoaGFzaFRlbXAgPT09ICcnKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0FyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAsIG9wdGlvbnMgfTtcblxuICAgIGlmKHV0aWxzLmNvbXBhcmUobmV3QXJncywgYXJncykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICB9XG4gICAgXG4gIHJldHVybiBhcmdzO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHBhcmFtc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVQYXJhbXMgPSBmdW5jdGlvbihzdGF0ZSwgcGFyYW1zLCBhcmdzKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBsaXN0ID0gW3BhcmFtc107XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGlzdC5wdXNoKHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhsaXN0LCBhcmdzKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBxdWVyeVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcXVlcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVF1ZXJ5ID0gZnVuY3Rpb24oc3RhdGUsIHF1ZXJ5LCBhcmdzKSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IGxpc3QgPSBbcXVlcnldO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7ICBcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsaXN0LnB1c2godGhpcy5nZXRTdGF0ZShjdXJyZW50KS5xdWVyeSk7XG4gIH1cbiBcbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKGxpc3QsIGFyZ3MpO1xufVxuXG4vKipcbiAqIE1lcmdlIGxpc3QgaXRlbXMgYXMgdHJhbnNpdGlvbiBvYmplY3RzXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0W119IGxpc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChsaXN0LCBhcmdzID0geyBwYXJhbXM6IHt9LCBxdWVyeToge30gfSkge1xuICBjb25zdCBhbGwgPSB7fTtcbiAgY29uc3QgZXhjbHVkZWQgPSB7fTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBvYmogPSBsaXN0W2ldO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuIFxuICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmKGV4Y2x1ZGVkW2tleV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJz8gdmFsKGFyZ3MpOiB2YWw7XG5cbiAgICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGFsbFtrZXldO1xuICAgICAgICBleGNsdWRlZFtrZXldID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFsbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbGw7IFxufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGhhc2hcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUhhc2ggPSBmdW5jdGlvbihzdGF0ZSwgaGFzaCwgYXJncykge1xuICBpZihoYXNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxldCB2YWwgPSB0aGlzLmdldFN0YXRlKGN1cnJlbnQpLmhhc2g7XG4gICAgdmFsID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nPyB2YWwoYXJncyk6IHZhbDtcblxuICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhc2ggPSB2YWw7XG4gIH1cblxuICByZXR1cm4gaGFzaDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1svXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIHVybCBjb250ZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCBrZXlzID0gW107XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcbiAgICByZXR1cm4gJy8/KFteL10qKSc7XG4gIH0pO1xuXG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoLyhbXl4vXSspWy9dKyQvLCAnJDEnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuLCAnZycpO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG4gIFxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgLi4uYXJncykgPT4geyBcbiAgICBhcmdzID0gYXJncy5zbGljZSgwLCBhcmdzLmxlbmd0aCAtIDIpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdiA9IGFyZ3NbaV07XG4gICAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICB9ICBcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCB1cmwgPSByb3V0ZXIudHJhbnNpdGlvbiAmJiAhcm91dGVyLnRyYW5zaXRpb24uX19maW5pc2hlZD8gcm91dGVyLnRyYW5zaXRpb24udXJsOiB0aGlzLmdldFVybCgpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcygnLycgKyB1cmwuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJy8/KFteL10qKScpO1xuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC9eXFxeLywgJycpLnJlcGxhY2UoL1xcJCQvLCAnJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14vJyArIHVybFBhdHRlcm4gKyAnLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpOyAgXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLCAuLi5jb250ZW50IH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogUmVsb2FkIHRoZSBzdGF0ZVxuICogXG4gKiBAc2VlIFRyYW5zaXRpb24ucmVsb2FkXG4gKi9cbnJvdXRlci5yZWxvYWQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIGlmKCF0aGlzLnRyYW5zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBmb3VuZCBhbiBhY3RpdmUgdHJhbnNpdGlvbiB0byByZWxvYWQgdGhlIHN0YXRlJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnJlbG9hZCguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciByb3V0ZXIgaGFuZGxlcnMgaW5zaWRlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIFxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7ICBcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTsgXG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHByZXZUcmFuc2l0aW9uKTtcbiAgbGV0IGxldmVsID0gMDtcbiAgXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzKSA9PiB7ICAgIFxuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7IFxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBjb21wb25lbnQ6IHJvdXRlIH0pOyAgICBcbiAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4uY29udGVudC5wYXJhbXMgfTtcbiAgICBoYXNoID0gaGFzaCB8fCBvcHRpb25zLmVtcHR5SGFzaDtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpKTsgICAgIFxuICAgIGhhc2ggPSBoYXNoIHx8ICcnO1xuICAgIGxldCByZWFsVXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpOyBcbiAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXBsYWNlVXJsKHJlYWxVcmwpKTsgXG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUobGV2ZWwpO1xuICAgIFxuICAgIGlmICghcm91dGUgJiYgIXN0YXRlLmFic3RyYWN0KSB7ICAgICAgXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgIH0gICAgXG5cbiAgICB0cmFuc2l0aW9uLnBhdGgucGFyYW1zID0gcGFyYW1zO1xuICAgIHRyYW5zaXRpb24ucGF0aC5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRyYW5zaXRpb24ucGF0aC5oYXNoID0gaGFzaDtcbiAgICB0cmFuc2l0aW9uLnBhdGgudXJsID0gcmVhbFVybDtcbiAgICB0cmFuc2l0aW9uLnBhdGgub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgIXN0YXRlLmFic3RyYWN0ICYmIGxldmVsKys7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKHJlYWxVcmwgIT0gdXJsKSB7XG4gICAgICBpc0RpZmZlcmVudCA9IHRyYW5zaXRpb24uaXNSb3V0ZUNoYW5nZWQodHJhbnNpdGlvbi5wYXRoKTtcbiAgICB9XG4gICAgICAgXG4gICAgbGV0IGxvYWQgPSBpc0RpZmZlcmVudCAmJiBvcHRpb25zLnJlbG9hZCAhPT0gZmFsc2U7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKChkYXRhKSA9PiB7ICAgICAgIFxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuICAgICAgc3RhdGUudGl0bGUgJiYgKGRvY3VtZW50LnRpdGxlID0gdHlwZW9mIHN0YXRlLnRpdGxlID09ICdmdW5jdGlvbic/IHN0YXRlLnRpdGxlKHRyYW5zaXRpb24pOiBzdGF0ZS50aXRsZSk7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldlJvdXRlID0gdHJhbnNpdGlvbi5wcmV2aW91cyAmJiB0cmFuc2l0aW9uLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTtcbiAgICAgIChwcmV2Um91dGUgJiYgIXByZXZSb3V0ZS5sb2FkZWQpICYmIChsb2FkID0gdHJ1ZSk7XG4gICAgICByZXR1cm4gcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uLCBsb2FkKS50aGVuKCgpID0+IHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSB0cnVlKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCkpLnRoZW4oKCkgPT4ge1xuICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCA9PSB0aGlzLmdldFVybCgpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXBsYWNlVXJsKHRoaXMuZGVmYXVsdFVybCkpOyAgICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFvcHRpb25zLnNhdmVTY3JvbGxQb3NpdGlvbiAmJiAoIXRyYW5zaXRpb24ucGF0aCB8fCAhdHJhbnNpdGlvbi5wYXRoLmhhc2gpKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG4gICAgdHJhbnNpdGlvbi5maW5pc2goKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZWQnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG4gICAgcmV0dXJuIHRyYW5zaXRpb247XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHJvdXRlci5zZXREZWZhdWx0cygpO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xucm91dGVyLnNldERlZmF1bHRzKCk7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgaWZcbiAqIEBzZWxlY3RvciBpZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyAtIHNob3cgdGhlIGVsZW1lbnQgY29udGVudCBvciBub3RcbiAqIEBhdHRyIHtib29sZWFufSByZWNyZWF0ZSAtIGRlbGV0ZSB0aGUgY29udGVudCBhbmQgcmVjcmVhdGUgb3IganVzdCBzaG93L2hpZGUgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgdGhpcy5FbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIHRoaXMuRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHRoaXMuc2V0SXMpO1xuICB9XG5cbiAgc2V0SXModmFsKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdmFsO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTsgICAgXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCB0aGlzLmRpc3BsYXksICdpbXBvcnRhbnQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7ICAgXG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZS1pZlxuICogQHNlbGVjdG9yIGVsc2UtaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgQHNlZSBJZlxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZVxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTsiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHNlbGVjdC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3Nfc2VsZWN0fVxuICogXG4gKiBAdGFnIHNlbGVjdCAgXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ10uY29uY2F0KEZvci5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7IFxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCkpO1xuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBpbnB1dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jaGVja2JveF9hbmRfcmFkaW99XG4gKiBcbiAqIEB0YWcgaW5wdXRcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddLmNvbmNhdChUZXh0LmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KFRleHQuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nOyAgICBcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ICBcblxuICBzZXRDaGVja2VkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIFxuICAgIGlmICh0aGlzLmVsLmNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW9cbiAqIEBzZWxlY3RvciByYWRpb1tuYW1lXVxuICogQGF0dHIge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGdyb3VwXG4gKiBAYXR0ciB7c3RyaW5nfG51bGx9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqIEBtZXNzYWdlIHtzdHJpbmd9IHJhZGlvIC0gc2VudCBvbiB2YWx1ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuc2V0TmFtZXMsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pOyAgIFxuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTsgXG4gICAgdGhpcy5hdHRyKCduYW1lJywgdGhpcy5zZXROYW1lcyk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lIHx8IHRoaXMuYXR0cnMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAgaXRlbS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW8tYnV0dG9uXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aXRoIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQHRhZyBjb250ZW50XG4gKiBAc2VsZWN0b3IgY29udGVudCxbY29udGVudGVkaXRhYmxlXVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAYXR0ciB7Ym9vbGVhbn0gW2VkaXRhYmxlXSAtIGVkaXRhYmxlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgdGhpcyk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGlmcmFtZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpZnJhbWVcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaW1hZ2VzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaW1nXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZW1iZWQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBlbWJlZFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdmlkZW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB2aWRlb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIG9iamVjdCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIG9iamVjdFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbGlua3MuXG4gKiBJdCB3b3JrcyB3aXRoIHJvdXRlciB0b28uIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnbyBvbiBjbGlja1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIG9mIHJvdXRlciB0byBnbyBvbiBjbGljayB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3BhcmFtc31cbiAqIEBhdHRyIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3F1ZXJ5fVxuICogQGF0dHIge3N0cmluZ30gW2hhc2hdIC0gaGFzaCBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX2hhc2h9XG4gKiBAYXR0ciB7b2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfcm91dGVyLmxvY2F0aW9ufVxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIGFjdGl2ZSBvciBub3QgXG4gKiBAc2NvcGUge2Jvb2xlYW59IGluQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgcGFydCBvZiB0aGUgYWN0aXZlIHN0YXRlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==