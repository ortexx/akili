/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.7.14
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/akili.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/akili.js":
/*!**********************!*\
  !*** ./src/akili.js ***!
  \**********************/
/*! no static exports found */
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

var _component2 = __webpack_require__(/*! ./component.js */ "./src/component.js");

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(/*! ./components/if.js */ "./src/components/if.js");

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(/*! ./components/for.js */ "./src/components/for.js");

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(/*! ./components/select.js */ "./src/components/select.js");

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(/*! ./components/input.js */ "./src/components/input.js");

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(/*! ./components/radio.js */ "./src/components/radio.js");

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(/*! ./components/text.js */ "./src/components/text.js");

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(/*! ./components/textarea.js */ "./src/components/textarea.js");

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(/*! ./components/content.js */ "./src/components/content.js");

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(/*! ./components/include.js */ "./src/components/include.js");

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(/*! ./components/iframe.js */ "./src/components/iframe.js");

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(/*! ./components/image.js */ "./src/components/image.js");

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(/*! ./components/embed.js */ "./src/components/embed.js");

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(/*! ./components/audio.js */ "./src/components/audio.js");

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(/*! ./components/video.js */ "./src/components/video.js");

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(/*! ./components/track.js */ "./src/components/track.js");

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(/*! ./components/source.js */ "./src/components/source.js");

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(/*! ./components/object.js */ "./src/components/object.js");

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(/*! ./components/route.js */ "./src/components/route.js");

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(/*! ./components/url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(/*! ./components/a.js */ "./src/components/a.js");

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(/*! ./scope.js */ "./src/scope.js");

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(/*! ./event-emitter.js */ "./src/event-emitter.js");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(/*! ./services/request.js */ "./src/services/request.js");

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(/*! ./services/router.js */ "./src/services/router.js");

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(/*! ./services/store.js */ "./src/services/store.js");

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _globals = __webpack_require__(/*! ./globals.js */ "./src/globals.js");

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

  _globals2.default.utils = _utils2.default;

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
    if (!this.__isolation.hasOwnProperty(k)) {
      continue;
    }

    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i];
    var val = _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope);
    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys);
    prop.component.__evaluateByKeys(prop.keys, val, prop.isDeleted);
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
    obj = this.wrapFunction(obj);

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
 * @returns {function}
 */
Akili.wrapFunction = function (fn) {
  if (fn.__akili) {
    return fn;
  }

  var akiliWrappedFunction = function akiliWrappedFunction() {
    var _this7 = this,
        _arguments4 = arguments;

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
 * Evaluate the tags node expressions
 * 
 * @param {string|string[]} tags
 */
Akili.evaluateTag = function (tags) {
  if (!this.root) {
    return;
  }

  if (!Array.isArray(tags)) {
    tags = [tags];
  }

  var children = this.root.children();

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var childTags = child.__tags;

    for (var j = 0, s = tags.length; j < s; j++) {
      var tag = tags[j];

      if (!childTags[tag]) {
        continue;
      }

      for (var k = 0, c = childTags[tag].length; k < c; k++) {
        var obj = childTags[tag][k];
        child.__evaluateNode(obj.node, false);
      }
    }
  }
};

/**
 * Remove the tags
 * 
 * @param {string|string[]} tags
 */
Akili.removeTag = function (tags) {
  if (!this.root) {
    return;
  }

  if (!Array.isArray(tags)) {
    tags = [tags];
  }

  var children = this.root.children();

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];

    for (var j = 0, s = tags.length; j < s; j++) {
      child.__removeTag(tags[j]);
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

  for (var key in this.options.globals) {
    this.options.globals[key] = this.wrap(this.options.globals[key], { tag: 'globals.' + key });
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

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemAttributes = exports.evaluationRegexGlobal = exports.evaluationRegex = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(/*! ./akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

var _scope2 = __webpack_require__(/*! ./scope.js */ "./src/scope.js");

var _scope3 = _interopRequireDefault(_scope2);

var _request = __webpack_require__(/*! ./services/request.js */ "./src/services/request.js");

var _request2 = _interopRequireDefault(_request);

var _store = __webpack_require__(/*! ./services/store.js */ "./src/services/store.js");

var _store2 = _interopRequireDefault(_store);

var _globals = __webpack_require__(/*! ./globals.js */ "./src/globals.js");

var _globals2 = _interopRequireDefault(_globals);

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

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

      variables = _extends({}, _globals2.default, variables);
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
    this.__tags = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = null;
    this.__disableProxy = {};
    this.__disableStoreKeys = {};
    this.__disableAttrKeys = {};
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

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
        value = { hash: _utils2.default.createObjectHash(value) };
      }

      return _utils2.default.compare(value, prop.copy, options);
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
          evaluate = _this5.constructor.parse(evalComponent.__evaluationComponent.scope, parseValue);
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

            if (!_bind.node.__initialized) {
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
        evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], { event: e });
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
      var hasBinding = evaluationRegex.test(val.trim());
      var isBoolean = isAttr ? /^boolean-/i.test(node.nodeName) : false;
      var isEvent = isAttr ? /^on-(.+)/i.test(node.nodeName) : false;

      if (!el.__akili && !hasBinding && !isBoolean && !isEvent) {
        return false;
      }

      node.__isEvent = isEvent;
      node.__hasBindings = hasBinding;
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
        node.__event.unbind();
      }

      if (node.__hasBindings && !options.saveBindings) {
        this.__unbindParentsByNodes(node);
      }

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
      var copy = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' ? { hash: _utils2.default.createObjectHash(value) } : _utils2.default.copy(value);

      if (prop) {
        var res = node.__component.__compareNodePropertyValue(prop, value);
        prop.value = value;
        prop.copy = copy;
        return !res;
      }

      node.__properties[this.__createKeysHash(keys)] = {
        component: this,
        value: value,
        copy: copy,
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

      options = _extends({ rootAttrs: true, attrs: true, node: true }, options);

      var find = function find(el) {
        if (!el) {
          return;
        }

        if (options.attrs && (el !== _this16.el || options.rootAttrs)) {
          for (var k = 0, attrs = el.attributes, c = attrs.length; k < c; k++) {
            fn(attrs[k]);
          }
        }

        for (var i = 0, l = el.childNodes.length; i < l; i++) {
          var node = el.childNodes[i];

          if (node.nodeType == 3) {
            options.node && fn(node);
          } else if (node.nodeType == 1 && !node.__akili) {
            find(node);
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
     * Add tag
     * 
     * @param {string} tag
     * @param {Node} node
     * @protected
     */

  }, {
    key: '__addTag',
    value: function __addTag(tag, node) {
      if (!this.__tags[tag]) {
        this.__tags[tag] = [];
      }

      if (!this.__hasTag(tag)) {
        this.__tags[tag].push({ node: node });
      }
    }

    /**
     * Check the tag exists
     * 
     * @param {string} tag
     * @param {Node} node
     * @protected
     * @returns {boolean}
     */

  }, {
    key: '__hasTag',
    value: function __hasTag(tag, node) {
      if (!this.__tags[tag]) {
        return false;
      }

      for (var i = 0, l = this.__tags[tag].length; i < l; i++) {
        if (this.__tags[tag][i].node === node) {
          return true;
        }
      }

      return false;
    }

    /**
     * Remove the tag
     * 
     * @param {string} tag
     * @param {Node} [node]
     * @protected
     */

  }, {
    key: '__removeTag',
    value: function __removeTag(tag, node) {
      if (!node) {
        delete this.__tags[tag];
        return;
      }

      for (var i = 0, l = this.__tags[tag].length; i < l; i++) {
        if (this.__tags[tag][i].node === node) {
          this.__tags[tag].splice(i, 1);
          break;
        }
      }

      if (!this.__tags[tag].length) {
        delete this.__tags[tag];
      }
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

      var unbind = function unbind(obj) {
        var keys = Object.keys(obj);

        for (var j = 0, c = keys.length; j < c; j++) {
          var k = keys[j];

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
          } else if (!_this17.__isSystemBindingKey(k)) {
            unbind(obj[k]);
          }
        }
      };

      unbind(this.__bindings);
      this.__clearEmptyBindings();
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
     * Clear all empty bindings
     *
     * @param {object} [obj]
     * @protected
     */

  }, {
    key: '__clearEmptyBindings',
    value: function __clearEmptyBindings(obj) {
      var _this18 = this;

      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var _val2 = obj[k];

          if (k == '__data' && (!_val2 || !_val2.length)) {
            delete obj[k];
          } else if (!_this18.__isSystemBindingKey(k)) {
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

      for (var _key2 in links) {
        var arr = links[_key2];

        for (var i = arr.length - 1; i >= 0; i--) {
          var _link3 = arr[i];

          if (_link3.component === this) {
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
      var _this19 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      nodes = nodes.concat(this.__detach({ saveBindings: true }));
      nodes = nodes.concat(this.__empty({ saveBindings: true }));
      this.__clearStoreLinks();
      this.removed();
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();

      if (!options.saveBindings) {
        this.__unbindParentsByNodes(nodes);
      }

      _akili2.default.nextTick(function () {
        delete _this19.el.__akili;
        _this19.__bindings = null;
        _this19.__tags = null;
        _this19.__evaluatingEvent = null;
        _this19.__recompiling = null;
        _this19.__compiling = null;
        _this19.__disableProxy = null;
        _this19.__disableStoreKeys = null;
        _this19.__disableAttrKeys = null;
        _this19.__children = null;
        _this19.__parent = null;
        _this19.__parents = null;
        _this19.__attrs = null;
        _this19.__attrLinks = null;
        _this19.__storeLinks = null;
        _this19.__attributeOf = null;
        _this19.__evaluationComponent = null;
        _this19.scope = null;
        _this19.el = null;
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
      var _this20 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = this.__removeChildren({ saveBindings: true });

      this.__mapNodes(function (node) {
        if (!node.__initialized) {
          return;
        }

        _this20.__deinitializeNode(node, { saveBindings: true });
        nodes.push(node);
      }, { rootAttrs: false });

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
     * @param {string|string[]|function} [handler]
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
     * @param {string|string[]|function} [handler]
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

/***/ "./src/components/a.js":
/*!*****************************!*\
  !*** ./src/components/a.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(/*! ../services/router.js */ "./src/services/router.js");

var _router2 = _interopRequireDefault(_router);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ }),

/***/ "./src/components/audio.js":
/*!*********************************!*\
  !*** ./src/components/audio.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(/*! ./text.js */ "./src/components/text.js");

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/embed.js":
/*!*********************************!*\
  !*** ./src/components/embed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/for.js":
/*!*******************************!*\
  !*** ./src/components/for.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

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
    _this.iteratorRef = null;
    _this.iteratorEl = null;
    _this.iteratorOuterHTML = null;
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
      this.iteratorEl = this.createIteratorElement();
      el.remove();
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement() {
      var el = document.createElement('template');
      el.innerHTML = this.iteratorOuterHTML;
      return el.content.firstChild;
    }
  }, {
    key: 'loop',
    value: function loop(key, value, index) {
      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__comparisonValue = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' ? { hash: _utils2.default.createObjectHash(value) } : _utils2.default.copy(value);

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

        if (!_utils2.default.compare(this.__comparisonValue, iterator.comparisonValue)) {
          iterator.setValue();
        } else {
          iterator.setValue(true);
        }

        this.__promises.push(_akili2.default.compile(iterator.el, { recompile: { checkChanges: true } }));
        return iterator;
      }

      var el = this.iteratorEl.cloneNode();
      el.innerHTML = this.html;
      this.el.insertBefore(el, this.iteratorRef);
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
      var children = [].slice.call(this.el.children);
      this.iterators.sort(function (a, b) {
        return children.indexOf(a.el) - children.indexOf(b.el);
      });
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
      this.__comparisonValue = null;
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
      this.comparisonValue = this.for.__comparisonValue;
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

/***/ "./src/components/if.js":
/*!******************************!*\
  !*** ./src/components/if.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Else = exports.ElseIf = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

    var _this3 = _possibleConstructorReturn(this, (_ref2 = ElseIf.__proto__ || Object.getPrototypeOf(ElseIf)).call.apply(_ref2, [this].concat(args)));

    _this3.active = true;
    return _this3;
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

/***/ "./src/components/iframe.js":
/*!**********************************!*\
  !*** ./src/components/iframe.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/include.js":
/*!***********************************!*\
  !*** ./src/components/include.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(/*! ../services/request.js */ "./src/services/request.js");

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

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(/*! ./text.js */ "./src/components/text.js");

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/object.js":
/*!**********************************!*\
  !*** ./src/components/object.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/radio.js":
/*!*********************************!*\
  !*** ./src/components/radio.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(/*! ./for.js */ "./src/components/for.js");

var _for2 = _interopRequireDefault(_for);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/route.js":
/*!*********************************!*\
  !*** ./src/components/route.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(/*! ../services/request.js */ "./src/services/request.js");

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

/***/ "./src/components/select.js":
/*!**********************************!*\
  !*** ./src/components/select.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(/*! ./for.js */ "./src/components/for.js");

var _for2 = _interopRequireDefault(_for);

var _utils = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/source.js":
/*!**********************************!*\
  !*** ./src/components/source.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/text.js":
/*!********************************!*\
  !*** ./src/components/text.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

var _component2 = _interopRequireDefault(_component);

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
    _this.debounceTimeout = null;
    return _this;
  }

  _createClass(Text, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      if (this.el.hasAttribute('on-debounce')) {
        this.el.addEventListener('input', function () {
          _this2.debounceTimeout && clearTimeout(_this2.debounceTimeout);
          _this2.debounceTimeout = setTimeout(function () {
            _this2.attrs.onDebounce.trigger(undefined, { bubbles: true });
          }, _this2.debounceInterval);
        });
      }

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

/***/ "./src/components/textarea.js":
/*!************************************!*\
  !*** ./src/components/textarea.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(/*! ./text.js */ "./src/components/text.js");

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/track.js":
/*!*********************************!*\
  !*** ./src/components/track.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/components/url.js":
/*!*******************************!*\
  !*** ./src/components/url.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

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

/***/ "./src/components/video.js":
/*!*********************************!*\
  !*** ./src/components/video.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(/*! ./url.js */ "./src/components/url.js");

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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

/***/ "./src/event-emitter.js":
/*!******************************!*\
  !*** ./src/event-emitter.js ***!
  \******************************/
/*! no static exports found */
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
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _akili = __webpack_require__(/*! ./akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Globals to use the custom variables in scope expressions
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
var globals = new Proxy({}, {
  get: function get(target, key) {
    var tag = 'globals.' + key;

    if (_akili2.default.__evaluation) {
      _akili2.default.__evaluation.component.__addTag(tag, _akili2.default.__evaluation.node);
      return target[key];
    }
  },
  set: function set(target, key, value) {
    var tag = 'globals.' + key;
    var prev = target[key];
    target[key] = _akili2.default.wrap(value);
    prev !== value && _akili2.default.evaluateTag(tag);
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    var tag = 'globals.' + key;
    _akili2.default.removeTag(tag);
    delete target[key];
    _akili2.default.evaluateTag(tag);
    return true;
  }
});

exports.default = globals;

/***/ }),

/***/ "./src/scope.js":
/*!**********************!*\
  !*** ./src/scope.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(/*! ./akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

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

/***/ "./src/services/request.js":
/*!*********************************!*\
  !*** ./src/services/request.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

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
      return _utils2.default.createObjectHash(data);
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

/***/ "./src/services/router.js":
/*!********************************!*\
  !*** ./src/services/router.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(/*! ./request.js */ "./src/services/request.js");

var _request2 = _interopRequireDefault(_request);

var _route = __webpack_require__(/*! ../components/route.js */ "./src/components/route.js");

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

/***/ "./src/services/store.js":
/*!*******************************!*\
  !*** ./src/services/store.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _akili = __webpack_require__(/*! ../akili.js */ "./src/akili.js");

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eventEmitter = __webpack_require__(/*! ./event-emitter.js */ "./src/event-emitter.js");

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
 * Create a string hash from an object
 * 
 * @param {object} obj
 */
utils.createObjectHash = function (obj) {
  var hash = 0;
  var str = JSON.stringify(obj);

  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
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

exports.default = utils;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwia2V5IiwiZ2xvYmFscyIsInV0aWxzIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiT2JqZWN0cyIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiZGVmaW5lIiwiZXJyb3JIYW5kbGluZyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiaSIsImwiLCJsZW5ndGgiLCJkZWZhdWx0cyIsImZuIiwicHVzaCIsImNsZWFyR2xvYmFscyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJfX2VsIiwiX19jb21wb25lbnQiLCJfX3BhcmVudCIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwicHJvcCIsInZhbCIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcG9uZW50IiwiX19zY29wZSIsIl9faXNSZXNvbHZlZCIsIl9fdHJpZ2dlclN0b3JlQW5kQXR0ciIsIl9fZXZhbHVhdGVCeUtleXMiLCJpc0RlbGV0ZWQiLCJ1bmV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsIndyYXBwaW5nIiwidW5pc29sYXRlIiwiaXNvbGF0aW9uIiwibmV4dFRpY2siLCJyZXNvbHZlIiwidGhlbiIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIl9fY2FuY2VsbGVkIiwiZmluZCIsInAiLCJfX3ByZXZlbnQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwiX19jb21waWxlIiwiYWxsIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwicmVtb3ZlQ29tcG9uZW50IiwiYWxpYXMiLCJyZW1vdmVBbGlhcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiQUtJTElfU1NSIiwiY29uc3RydWN0b3IiLCJjYXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImlzQXJyYXkiLCJudW0iLCJpbmRleCIsImNhbGxiYWNrIiwiX19pc29sYXRlZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsInZhbHVlIiwid3JhcCIsIm9iaiIsImN1cnJlbnQiLCJ3cmFwRnVuY3Rpb24iLCJjIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwicmV2ZXJzZSIsImFraWxpV3JhcHBlZEZ1bmN0aW9uIiwiZXZhbHVhdGVUYWciLCJ0YWdzIiwiY2hpbGRUYWdzIiwiX190YWdzIiwiaiIsInMiLCJ0YWciLCJfX2V2YWx1YXRlTm9kZSIsInJlbW92ZVRhZyIsIl9fcmVtb3ZlVGFnIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZSIsIl9fY2FjaGUiLCJfX2luc3RhbmNlcyIsIm91dGVySFRNTCIsImNhY2hlIiwiX19tYWluIiwiZGVpbml0Iiwic3RvcmVLZXlzIiwiX190YXJnZXQiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJSZWdFeHAiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJpYWJsZXMiLCJ2YXJzIiwiZXhwcyIsInNwbGl0IiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlU3RvcmVLZXlzIiwiX19kaXNhYmxlQXR0cktleXMiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnRzIiwiX19hdHRycyIsIl9fYXR0ckxpbmtzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsImNoZWNrQ2hhbmdlcyIsInNldEV2ZW50cyIsInNldFBhcmVudHMiLCJzZXRCb29sZWFuQXR0cmlidXRlcyIsImRlZmluZUF0dHJpYnV0ZXMiLCJfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiYXR0cnMiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwiY2hpbGROb2RlcyIsIm9uQ29tcGlsZWQiLCJ0cmlnZ2VyIiwidW5kZWZpbmVkIiwiYnViYmxlcyIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJ0ZW1wbGF0ZUNhY2hlIiwiX19jb250ZW50IiwiZGF0YSIsIm9uUmVjb21waWxlZCIsInJlY29tcGlsZWQiLCJvblJlc29sdmVkIiwicmVzb2x2ZWQiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRPYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwiaW5kZXhPZiIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlIiwiX19nZXROb2RlUHJvcGVydHkiLCJoYXNoIiwiY3JlYXRlT2JqZWN0SGFzaCIsImNvbXBhcmUiLCJjb3B5IiwiYXR0ck5hbWUiLCJlbGVtZW50TmFtZSIsIl9fZWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJBdHRyIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiX19leHByZXNzaW9uIiwidHJpbSIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJjb20iLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsIl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZSIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImlzU2NvcGVQcm94eSIsInJlYWxDb21wb25lbnQiLCJfX2JpbmRBbmRTZXRQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsImVsZW1lbnQiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJfX2dldEFsbEJpbmRzIiwiX19pbml0aWFsaXplZCIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UiLCJfX2Rpc2FibGVLZXlzIiwiY2hlY2tQcm9wIiwiX19zZXQiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidW5iaW5kIiwiX19pc1N5c3RlbUJpbmRpbmdLZXkiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsImhhc1Byb3BlcnR5QnlLZXlzIiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJleGVjIiwiZXZlbnQiLCJfX2NoZWNrRXZhbHVhdGlvbiIsIl9fZXZhbHVhdGUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNhbWVsQXR0cmlidXRlIiwidG9DYW1lbENhc2UiLCJfX2F0dHJpYnV0ZU9uIiwiX19wcmVwYXJlQXR0cmlidXRlSW4iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJfX2F0dHJUcmlnZ2VyQnlOYW1lIiwicGxhaW4iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9faXNFdmVudCIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19oYXNCaW5kaW5ncyIsIl9fZXZhbHVhdGVFdmVudCIsImlzQXR0ciIsImhhc0JpbmRpbmciLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0Jvb2xlYW4iLCJzYXZlQmluZGluZ3MiLCJfX3VuYmluZFBhcmVudHNCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5IiwidGFyZ2V0Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsImZvclBhcmVudHMiLCJmb3JEYXRhIiwicG9wIiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY2hlY2tEaXNhYmxlbWVudCIsIkNIRUNLX0VYSVNURU5DRSIsInRhcmdldFBhcmVudFZhbHVlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJjdXJyZW50S2V5cyIsImN1cnJlbnRLZXlTdHJpbmciLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJ0eXBlIiwicHJveHkiLCJfX2dldERpc2FibGVtZW50VHlwZVN0b3JlIiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwic29ydCIsImtleVN0cmluZyIsImluZm8iLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImNhbGxPblN0YXJ0IiwiY2FwaXRhbGl6ZSIsImF0dHJzS2V5cyIsImZpbHRlciIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJpc1BsYWluT2JqZWN0IiwiQ0hFQ0tfUFJPWFkiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJuZXN0ZWQiLCJ0YXJnZXRLZXlzIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uSGFzaCIsInVwZGF0ZWRBdCIsImdldFRpbWUiLCJwYXJlbnRLZXlzU3RyaW5nIiwia2V5c1N0cmluZyIsImNvbGxlY3QiLCJyb290QXR0cnMiLCJub2RlcyIsIl9fbWFwTm9kZXMiLCJfX2hhc1RhZyIsInNldFByb3BlcnR5QnlLZXlzIiwibGFzdCIsIl9fZGVsZXRlTm9kZVByb3BlcnR5IiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJfX3VuYmluZEJ5Tm9kZXMiLCJjbGVhciIsIl9fcmVtb3ZlIiwib25SZW1vdmVkIiwiX19lbXB0eSIsIl9fY2xlYXJTdG9yZUxpbmtzIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwiaGFuZGxlciIsInVuc2hpZnQiLCJfX3N0b3JlQnlGdW5jdGlvbiIsIl9fc3RvcmVCeUtleXMiLCJfX2F0dHJCeUZ1bmN0aW9uIiwiX19hdHRyQnlLZXlzIiwiX191bnN0b3JlQnlGdW5jdGlvbiIsIl9fdW5zdG9yZUJ5S2V5cyIsIl9fdW5hdHRyQnlGdW5jdGlvbiIsIl9fdW5hdHRyQnlLZXlzIiwiX19nZXRQYXJlbnQiLCJfX2dldENoaWxkcmVuIiwiX19nZXROZWFyIiwiYXBwZW5kQ2hpbGQiLCJzdGF0ZSIsInBhcmFtcyIsInF1ZXJ5IiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwidXJsIiwib25TdGF0ZUNoYW5nZWQiLCJzZXRBY3Rpdml0eSIsInNldFN0YXRlIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInNldFVybCIsInJlc2V0SHJlZiIsImdldFN0YXRlIiwiaXNBY3RpdmVTdGF0ZSIsImluQWN0aXZlU3RhdGUiLCJocmVmIiwiY3JlYXRlU3RhdGVVcmwiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInN0eWxlIiwidmFsdWVLZXkiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiTG9vcCIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JFbCIsIml0ZXJhdG9yT3V0ZXJIVE1MIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJjcmVhdGVFbGVtZW50IiwibWFzayIsIm5leHRTaWJsaW5nIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJfX2luZGV4IiwiX19rZXkiLCJfX3ZhbHVlIiwiX19jb21wYXJpc29uVmFsdWUiLCJpdGVyYXRvciIsInNldEluZGV4Iiwic2V0S2V5IiwiY29tcGFyaXNvblZhbHVlIiwic2V0VmFsdWUiLCJfX3Byb21pc2VzIiwiY2xvbmVOb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYSIsImIiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiX19pdGVyYXRvciIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRQcm9wZXJ0eSIsImVtcHR5IiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvblN0YXJ0IiwieGhyIiwib25Mb2FkIiwib25FcnJvciIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwidXJsQXR0cmlidXRlIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJwcmV2IiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInRyYW5zaXRpb24iLCJsb2FkIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImV4aXN0cyIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJnZXRDb250ZW50Iiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwiZGVjb2RlSHRtbEVudGl0aWVzIiwic2V0U2VsZWN0ZWQiLCJkZWJvdW5jZUludGVydmFsIiwiZGVib3VuY2VUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25EZWJvdW5jZSIsInNldEZvY3VzIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsImZvcmNlIiwiaW5FdmFsdWF0aW5nIiwicHJlcGFyZU9wdGlvbnMiLCJfRXZlbnQiLCJfX3ByZXBhcmVBdHRyaWJ1dGVPdXQiLCJfX2FkZFRhZyIsInN0cmljdCIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZ2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3Vic3RyaW5nIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJqc29uIiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwicGFyYW1zVG9RdWVyeSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQ2FjaGVIYXNoIiwidXNlciIsInBhc3N3b3JkIiwiX2NhY2hlIiwiZ2V0Q2FjaGUiLCJjcmVhdGVkQXQiLCJ0cmFuc2Zvcm1BZnRlciIsIm9wZW4iLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVyS2V5cyIsInNldFJlcXVlc3RIZWFkZXIiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZVhNTCIsInJlc3BvbnNlVVJMIiwibWF0Y2giLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwic2VwIiwiZXEiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInYiLCJvcHQiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsIlRyYW5zaXRpb24iLCJwcmV2aW91cyIsInJvdXRlcyIsInN0YXRlcyIsIl9fZmluaXNlZCIsInJlZGlyZWN0Iiwicm91dGUiLCJoYXNTdGF0ZSIsInBhcmFtS2V5cyIsImZ1bGxQYXR0ZXJuIiwiX19wYXJhbVJlZ2V4IiwiZiIsInF1ZXJ5S2V5cyIsIndhdGNoSGFzaCIsInByZXZSb3V0ZSIsImdldFJvdXRlIiwiaW5jbHVkZUtleXMiLCJmaW5pc2giLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJoYXMiLCJtYW51YWwiLCJwcmVwYXJlU3RhdGVBcmdzIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwicHVzaFN0YXRlIiwiZXJyb3IiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwiaW5pdFN0YXRlIiwicGFyZW50TmFtZSIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJyZXBsYWNlVXJsIiwicmVwbGFjZUhhc2hVcmwiLCJyZXBsYWNlSGlzdG9yeVVybCIsInJlcGxhY2VTdGF0ZSIsImdldFVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsInByZXBhcmUiLCJwYXJhbXNUZW1wIiwicHJlcGFyZVN0YXRlUGFyYW1zIiwicXVlcnlUZW1wIiwicHJlcGFyZVN0YXRlUXVlcnkiLCJoYXNoVGVtcCIsInByZXBhcmVTdGF0ZUhhc2giLCJlbXB0eUhhc2giLCJuZXdBcmdzIiwiY3JlYXRlU3RhdGVBcmdzIiwiZXhjbHVkZWQiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpbmNsdWRlcyIsIl9fZmluaXNoZWQiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsInJlbG9hZCIsInByZXZUcmFuc2l0aW9uIiwic2V0UGF0aCIsInJlYWxVcmwiLCJpc0RpZmZlcmVudCIsImlzUm91dGVDaGFuZ2VkIiwidGl0bGUiLCJsb2FkZWQiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZXMiLCJkZWwiLCJleGNsdWRlIiwiaXRlbSIsImZpbHRlcmVkIiwib3JkZXIiLCJhViIsImJWIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpZ25vcmVVbmRlZmluZWQiLCJjbGVhclVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJjaGFyIiwiY2hhckNvZGVBdCIsImVuY29kZUh0bWxFbnRpdGllcyIsInRleHRDb250ZW50Iiwib2JqZWN0IiwicmVkdWNlIiwibyIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoi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RUFBNEM7QUFDMUMsUUFBSSxFQUFFMFosTUFBTTFaLENBQVIsQ0FBSixFQUFnQjtBQUNkb0QsYUFBT1AsSUFBSTdDLENBQUosRUFBT21uQixXQUFQLEVBQVA7QUFDRCxLQUZELE1BR0s7QUFDSC9qQixhQUFPUCxJQUFJN0MsQ0FBSixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJSSxNQUFNQSxHQUFHZ0QsR0FBSCxDQUFWLEVBQW1CO0FBQ2pCLFdBQU8sS0FBS1Isa0JBQUwsQ0FBd0IxQyxNQUF4QixFQUFnQ0UsRUFBaEMsQ0FBUDtBQUNEOztBQUVELFNBQU9nRCxHQUFQO0FBQ0QsQ0FuQkQ7O2tCQXFCZXZGLEsiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ha2lsaS5qc1wiKTtcbiIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLl9fZGVmYXVsdHMgPSBbXTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWVcbiAgfTtcbiAgXG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX2NsZWFyZWQgPSBmYWxzZTtcbiAgdGhpcy5fX2NvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5fX2FsaWFzZXMgPSB7fTtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fd2luZG93ID0ge307XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlO1xuICB0aGlzLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICBcbiAgdGhpcy5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG4gIF07XG5cbiAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgIGRlbGV0ZSBnbG9iYWxzW2tleV07XG4gIH1cblxuICBnbG9iYWxzLnV0aWxzID0gdXRpbHM7XG5cbiAgdGhpcy5jb21wb25lbnRzID0ge307XG4gIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgdGhpcy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gIHRoaXMuU2NvcGUgPSBTY29wZTtcbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuICB0aGlzLmdsb2JhbHMgPSBnbG9iYWxzO1xuICB0aGlzLmNvbXBvbmVudHMuQSA9IEE7XG4gIHRoaXMuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG4gIHRoaXMuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG4gIHRoaXMuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuICB0aGlzLmNvbXBvbmVudHMuSWYgPSBJZjtcbiAgdGhpcy5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuICB0aGlzLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbiAgdGhpcy5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbiAgdGhpcy5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG4gIHRoaXMuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuICB0aGlzLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbiAgdGhpcy5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG4gIHRoaXMuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG4gIHRoaXMuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbiAgdGhpcy5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG4gIHRoaXMuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuICB0aGlzLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuICB0aGlzLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbiAgdGhpcy5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgdGhpcy5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuICB0aGlzLmRlZmluZSgpO1xuICB0aGlzLmVycm9ySGFuZGxpbmcoKTtcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpOyBcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZGVmYXVsdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5fX2RlZmF1bHRzW2ldKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHRzXG4gKiBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICovXG5Ba2lsaS5kZWZhdWx0cyA9IGZ1bmN0aW9uIChmbikgeyAgXG4gIHRoaXMuX19kZWZhdWx0cy5wdXNoKGZuKTtcbiAgZm4oKTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fY2xlYXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMudW53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0pO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGNvbnN0IHNjb3BlID0gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbiAgc2NvcGUuX19lbCA9IG51bGw7XG4gIHNjb3BlLl9fY29tcG9uZW50ID0gbnVsbDtcbiAgc2NvcGUuX19wYXJlbnQgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjZW1lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCBzdHIgPT4gISF0aGlzLl9fc2NvcGVzW3N0cl0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBzY29wZSBjaGFuZ2VzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSBvbmx5IHJvb3QgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkud3JhcHBpbmcgPSBmdW5jdGlvbiAoZm4pIHtcbiAgaWYodGhpcy5fX3dyYXBwaW5nKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cbiAgXG4gIHRoaXMuX193cmFwcGluZyA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpOyAgXG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlOyAgXG4gIHJldHVybiByZXM7ICAgXG59XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgaXNvbGF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBpc29sYXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb24gb24gdGhlIG5leHQgdGlja1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzKSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIFxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07ICAgIFxuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpOyAgICBcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuICBcbiAgaWYgKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHsgIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkucmVtb3ZlQWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgXG4gIGlmKCF3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG4gIH0gIFxufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighY2FsbGJhY2suX19pc29sYXRlZCkge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3NbaW5kZXhdLCAnX19pc29sYXRlZCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIG9iamVjdHMvY2xhc3NlcyB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaik7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCBvYmplY3RzL2NsYXNzZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKi9cbkFraWxpLnVud3JhcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMud3JhcChvYmosIHsgcmV2ZXJzZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS53cmFwRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gQWtpbGkud3JhcHBpbmcoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmbik7XG4gIGFraWxpV3JhcHBlZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBha2lsaVdyYXBwZWRGdW5jdGlvbltrZXldID0gZm5ba2V5XTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShha2lsaVdyYXBwZWRGdW5jdGlvbiwgJ19fYWtpbGknLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZuXG4gIH0pO1xuXG4gIHJldHVybiBha2lsaVdyYXBwZWRGdW5jdGlvbjtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHRhZ3Mgbm9kZSBleHByZXNzaW9uc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFnc1xuICovXG5Ba2lsaS5ldmFsdWF0ZVRhZyA9IGZ1bmN0aW9uICh0YWdzKSB7XG4gIGlmKCF0aGlzLnJvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmKCFBcnJheS5pc0FycmF5KHRhZ3MpKSB7XG4gICAgdGFncyA9IFt0YWdzXTtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5yb290LmNoaWxkcmVuKCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICBjb25zdCBjaGlsZFRhZ3MgPSBjaGlsZC5fX3RhZ3M7ICAgIFxuXG4gICAgZm9yKGxldCBqID0gMCwgcyA9IHRhZ3MubGVuZ3RoOyBqIDwgczsgaisrKSB7XG4gICAgICBjb25zdCB0YWcgPSB0YWdzW2pdO1xuICAgICAgXG4gICAgICBpZighY2hpbGRUYWdzW3RhZ10pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gIFxuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGNoaWxkVGFnc1t0YWddLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBjb25zdCBvYmogPSBjaGlsZFRhZ3NbdGFnXVtrXTtcbiAgICAgICAgY2hpbGQuX19ldmFsdWF0ZU5vZGUob2JqLm5vZGUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gIFxufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdGFnc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFnc1xuICovXG5Ba2lsaS5yZW1vdmVUYWcgPSBmdW5jdGlvbiAodGFncykge1xuICBpZighdGhpcy5yb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZighQXJyYXkuaXNBcnJheSh0YWdzKSkge1xuICAgIHRhZ3MgPSBbdGFnc107XG4gIH1cblxuICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucm9vdC5jaGlsZHJlbigpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07IFxuXG4gICAgZm9yKGxldCBqID0gMCwgcyA9IHRhZ3MubGVuZ3RoOyBqIDwgczsgaisrKSB7XG4gICAgICBjaGlsZC5fX3JlbW92ZVRhZyh0YWdzW2pdKTtcbiAgICB9XG4gIH0gIFxufVxuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBhbiBpbml0aWFsaXphdGlvbiBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICovXG5Ba2lsaS50cmlnZ2VySW5pdCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbiAocm9vdCkge1xuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKCkgICAgICBcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSwgeyB0YWc6IGBnbG9iYWxzLiR7a2V5fWAgfSk7XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKHsgaW5pdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4geyAgICBcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UICYmICh3aW5kb3cuQUtJTElfQ0xJRU5ULnJlcXVlc3RDYWNoZSA9IHRoaXMucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUoKSk7XG4gICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGluaXQgPSAoaW5zdGFuY2UsIG9iaikgPT4ge1xuICAgIGZvcihsZXQga2V5IGluIG9iaikge1xuICAgICAgaW5zdGFuY2UuX19jYWNoZVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG4gIFxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgbGV0IGluc3RhbmNlID0ga2V5ID09PSAnX19tYWluJz8gcmVxdWVzdDogcmVxdWVzdC5fX2luc3RhbmNlc1trZXldO1xuICAgIGluaXQoaW5zdGFuY2UsIG9ialtrZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlcXVlc3QgY2FjaGVcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYWNoZSA9IHsgX19tYWluOiByZXF1ZXN0Ll9fY2FjaGUgfTtcblxuICBmb3IobGV0IGtleSBpbiByZXF1ZXN0Ll9faW5zdGFuY2VzKSB7XG4gICAgY2FjaGVba2V5XSA9IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XS5fX2NhY2hlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7IiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5leHBvcnQgY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBjb21wb25lbnRzIGFyZSBpbmhlcml0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgdmFyaWFibGVzID0ge30pIHsgICAgXG4gICAgdmFyaWFibGVzID0geyAuLi5nbG9iYWxzLCAuLi52YXJpYWJsZXN9O1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24sICc7JywgWydcIicsIFwiJ1wiLCAnYCddKTsgIFxuICAgIGV4cHNbZXhwcy5sZW5ndGggLSAxXSA9IGByZXR1cm4gJHtleHBzW2V4cHMubGVuZ3RoIC0gMV19YDtcblxuICAgIGZvciAobGV0IGtleSBpbiB2YXJpYWJsZXMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKHZhcmlhYmxlc1trZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV0gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIGlmICghKGVsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhbiBodG1sIGVsZW1lbnQgdG8gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvcmApO1xuICAgIH1cblxuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX3RhZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVN0b3JlS2V5cyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSB7fTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgY2hlY2tDaGFuZ2VzOiBmYWxzZSwgXG4gICAgICBzZXRFdmVudHM6IHRydWUsXG4gICAgICBzZXRQYXJlbnRzOiB0cnVlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB0cnVlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zKTsgICAgXG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRFdmVudHMgJiYgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0UGFyZW50cyAmJiB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0Qm9vbGVhbkF0dHJpYnV0ZXMgJiYgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5kZWZpbmVBdHRyaWJ1dGVzICYmIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7IFxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzICYmIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KSkgeyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVOb2RlKGNoaWxkLCB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2UpOyAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07ICAgIFxuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmICh0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMucmVzb2x2ZWQoKSkpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX19pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHsgICAgXG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7ICAgICBcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2NvcGUnKSB8fCBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUoaXNSb290PyAncm9vdCc6IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICAgIGlzUm9vdCAmJiAoQWtpbGkucm9vdCA9IHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBfX3Njb3BlID0gc2NvcGU7XG4gICAgbGV0IF9zY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHRoaXMuc2NvcGUpO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICB0aGlzLl9fY29udGVudCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpOyAgICBcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSBhIG5vZGUgcHJvcGVydHkgdmFsdWVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKi9cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWUgPSB7IGhhc2g6IHV0aWxzLmNyZWF0ZU9iamVjdEhhc2godmFsdWUpIH07XG4gICAgfVxuICBcbiAgICByZXR1cm4gdXRpbHMuY29tcGFyZSh2YWx1ZSwgcHJvcC5jb3B5LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFxuICAgKi9cbiAgX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycikge1xuICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgIGxldCBhdHRyTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgYXR0cmlidXRlTmFtZSA9IChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyBub2RlLm5hbWUudG9Mb3dlckNhc2UoKTogJyc7ICAgICAgICBcbiAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgXTtcbiAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbIGBbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWAgXSk7XG4gICAgcmV0dXJuIGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcbiAgICBjb25zdCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKChjb20pID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4geyAgICAgIFxuICAgICAgY291bnRlcisrO1xuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb24gPSBbXTtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyZW50QmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgICBsZXQgcGFyZW50c0hhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEucGFyZW50cyk7XG4gICAgICAgXG4gICAgICAgIGlmIChkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGlzdGluZ0JpbmRpbmdzW2hhc2hdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50VmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLnBhcmVudHMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpOyAgICAgICAgXG5cbiAgICAgICAgaWYgKHBhcmVudFZhbHVlICYmIHR5cGVvZiBwYXJlbnRWYWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnICYmIHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9PSA1MCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgICAgICAgIGBGb3IgaGlnaGVyIHBlcmZvcm1hbmNlLCBkb24ndCBsb29wIFByb3h5IGFycmF5cy9vYmplY3RzIGluc2lkZSBleHByZXNzaW9uIGZ1bmN0aW9ucywgb3IgdXNlIEFraWxpLnVuZXZhbHVhdGUoKSB0byB3cmFwIHlvdSBjb2RlLmAsXG4gICAgICAgICAgICAgIGAkeyBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgfWAsXG4gICAgICAgICAgICAgIGBzY29wZSBwcm9wZXJ0eSBcIiR7IGRhdGEucGFyZW50cy5qb2luKCcuJykgfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICFwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0/IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9IDE6IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSsrO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICBcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlcywgY291bnRlciwgZXhwcmVzc2lvbiwgYXR0cmlidXRlVmFsdWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBub2RlIGFuZCBzZXQgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBrZXlzLCBldmFsdWF0ZWQpIHtcbiAgICBsZXQgYmluZCA9IHRoaXMuX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSk7XG4gICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIGlmICghYmluZCkge1xuICAgICAgdGhpcy5fX2JpbmQoa2V5cywgeyBub2RlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpOyAgICAgXG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcbiAgICAgICAgICBkYXRhID0gYmluZD8gKGJpbmQuX19kYXRhIHx8IFtdKTogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGNvbXBvbmVudC5fX2dldEFsbEJpbmRzKHByb3Aua2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBiaW5kID0gZGF0YVtrXTtcblxuICAgICAgICAgIGlmKCFiaW5kLm5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdmFsdWUgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyAoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7ICAgICBcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuICAgICAgICBcbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzLCBmYWxzZSk7XG5cbiAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGV2ZW50IGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBub2RlXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIHsgZXZlbnQ6IGUgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrID0gdHJ1ZSkge1xuICAgIGNvbnN0IGtleSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSc7ICBcblxuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyAgICAgIFxuICAgICAgY29uc3QgeyByZXMsIGF0dHJpYnV0ZVZhbHVlLCBleHByZXNzaW9uLCBjb3VudGVyIH0gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICAgICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG4gIFxuICAgICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgICBjb25zdCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgXG4gICAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICAgIH0gICAgICAgICAgXG4gIFxuICAgICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICAgdmFsdWUgPSBjb21wb25lbnQuX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciBnZXR0aW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgICAgXG4gICAgcmV0dXJuIHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciBzZW5kaW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlT3V0KG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYgKCFub2RlIHx8IHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7ICAgIFxuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZiAobm9kZS5fX2lzRXZlbnQpIHtcbiAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkpO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSldID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQXR0ciA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cjtcbiAgICBjb25zdCB2YWwgPSBub2RlW2lzQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIGNvbnN0IGhhc0JpbmRpbmcgPSBldmFsdWF0aW9uUmVnZXgudGVzdCh2YWwudHJpbSgpKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSBpc0F0dHI/IC9eYm9vbGVhbi0vaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcbiAgICBjb25zdCBpc0V2ZW50ID0gaXNBdHRyPyAvXm9uLSguKykvaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcblxuICAgIGlmKCFlbC5fX2FraWxpICYmICFoYXNCaW5kaW5nICYmICFpc0Jvb2xlYW4gJiYgIWlzRXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9faXNFdmVudCA9IGlzRXZlbnQ7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZztcbiAgICBub2RlLl9faXNCb29sZWFuID0gaXNCb29sZWFuO1xuICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7ICAgIFxuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzICYmICFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGUpOyAgICAgICAgICBcbiAgICB9XG5cbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faXNCb29sZWFuO1xuICAgIGRlbGV0ZSBub2RlLl9faXNFdmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50OyAgICBcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICBub2RlICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbm9kZSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG4gICAgICAgICAgdmFsdWU/IHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpOiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYgKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc3RvcmUgYW5kIGF0dHJpYnV0ZXMgY2hhbmdlXG4gICAqL1xuICBfX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cykge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBrZXlzLnNsaWNlKDAsIGwgLSBpKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoY3VycmVudEtleXMpO1xuICAgICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoY3VycmVudEtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICAgIGlmICh0aGlzLl9fc3RvcmVMaW5rc1tjdXJyZW50S2V5U3RyaW5nXSkgeyAgXG4gICAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoY3VycmVudEtleXMsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fYXR0ckxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7XG4gICAgICAgIHRoaXMuX19hdHRyVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdG9yZSBvZiB0aGUgZGlzYWJsZW1lbnQgdHlwZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAqL1xuICBfX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHByb3h5OiAnX19kaXNhYmxlUHJveHknLFxuICAgICAgc3RvcmU6ICdfX2Rpc2FibGVTdG9yZUtleXMnLFxuICAgICAgYXR0cjogJ19fZGlzYWJsZUF0dHJLZXlzJ1xuICAgIH0pW3R5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHsgICAgXG4gICAgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgZGVsZXRlIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKTtcbiAgICByZXR1cm4gdGhpc1tzdG9yZV0uX19hbGw/IHRydWU6IHRoaXNbc3RvcmVdW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkgeyBcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ3N0b3JlJykpIHsgICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICAgIGNvbnN0IHAgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgXG4gICAgICBcbiAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHAucHVzaCh0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpKTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGxldCBsaW5rcyA9IChBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdChBa2lsaS5fX3N0b3JlTGlua3NbJyonXSB8fCBbXSk7XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUsIG5hbWUpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgIFxuICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICB9ICBcbiAgICB9KTsgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZ2V0ICYmICFvcHRpb25zLnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhdCBsZWFzdCBcImdldFwiIG9yIFwic2V0XCIgb3B0aW9uIGFzIHRydWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICAoc3RvcmUuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZiAoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IHN0b3JlS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHN0b3JlLl9fdGFyZ2V0W2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIGtleSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnYXR0cicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbGlua3MgPSAodGhpcy5fX2F0dHJMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KHRoaXMuX19hdHRyTGlua3NbJyonXSB8fCBbXSk7XG4gICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgXG4gICAgXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG5cbiAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUsIHV0aWxzLnRvRGFzaENhc2UobmFtZSkpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLl9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkgeyAgIFxuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgKHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7IFxuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBhdHRyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYXR0cnMpLmZpbHRlcihrID0+ICEodGhpcy5fX2F0dHJzW2tdIGluc3RhbmNlb2YgQWtpbGkuRXZlbnRFbWl0dGVyKSk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGF0dHJzS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBhdHRyc0tleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLl9fYXR0cnNba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwgdXRpbHMudG9EYXNoQ2FzZShrZXkpKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdGhpcy5hdHRyc1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXRLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YXJnZXRLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgICAgY29uc3QgayA9IHRhcmdldEtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGNvbnN0IGlzb2xhdGlvbkhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtIGJpbmRpbmcgdGhpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi8gXG4gIF9faXNTeXN0ZW1CaW5kaW5nS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgPT0gJ19fZGF0YSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbmVzdGVkIGJpbmRpbmdzIGJ5IGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqL1xuICBfX2dldEFsbEJpbmRzKGtleXMpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgY29uc3QgY29sbGVjdCA9IChvYmopID0+IHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChvYmouX19kYXRhIHx8IFtdKTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGtleSA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdChvYmpba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdChyb290KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTsgICAgXG4gICAgbGV0IGNvcHkgPSB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc/IHsgaGFzaDogdXRpbHMuY3JlYXRlT2JqZWN0SGFzaCh2YWx1ZSkgfTogdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IG5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LFxuICAgICAgbm9kZSxcbiAgICAgIGtleXMsXG4gICAgICBldmFsdWF0ZWQgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogTWFwIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbWFwTm9kZXMoZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IHJvb3RBdHRyczogdHJ1ZSwgYXR0cnM6IHRydWUsIG5vZGU6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICAgIGlmKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYXR0cnMgJiYgKGVsICE9PSB0aGlzLmVsIHx8IG9wdGlvbnMucm9vdEF0dHJzKSkge1xuICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgZm4oYXR0cnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsLmNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG9wdGlvbnMubm9kZSAmJiBmbihub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09IDEgJiYgIW5vZGUuX19ha2lsaSkge1xuICAgICAgICAgIGZpbmQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBub2Rlc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRBbGxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IG5vZGVzLnB1c2gobm9kZSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGFnXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZFRhZyh0YWcsIG5vZGUpIHtcbiAgICBpZighdGhpcy5fX3RhZ3NbdGFnXSkge1xuICAgICAgdGhpcy5fX3RhZ3NbdGFnXSA9IFtdOyAgICBcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2hhc1RhZyh0YWcpKSB7XG4gICAgICB0aGlzLl9fdGFnc1t0YWddLnB1c2goeyBub2RlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgdGFnIGV4aXN0c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9faGFzVGFnKHRhZywgbm9kZSkge1xuICAgIGlmKCF0aGlzLl9fdGFnc1t0YWddKSB7XG4gICAgICByZXR1cm4gZmFsc2U7ICAgIFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fdGFnc1t0YWddLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgIGlmKHRoaXMuX190YWdzW3RhZ11baV0ubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0YWdcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVUYWcgKHRhZywgbm9kZSkge1xuICAgIGlmKCFub2RlKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3RhZ3NbdGFnXTtcbiAgICAgIHJldHVybjsgICAgXG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX190YWdzW3RhZ10ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZih0aGlzLl9fdGFnc1t0YWddW2ldLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy5fX3RhZ3NbdGFnXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fdGFnc1t0YWddLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW3RhZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICAhQXJyYXkuaXNBcnJheShub2RlcykgJiYgKG5vZGVzID0gW25vZGVzXSk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgaiA8IGM7IGorKykge1xuICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwYXJlbnRzIGJpbmRpbmdzIHdpdGggdGhlIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKSB7ICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX19wYXJlbnRzW2ldO1xuICAgICAgcGFyZW50ICYmIHBhcmVudC5fX2FraWxpICYmIHBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGQuX19ha2lsaS5fX3JlbW92ZShvcHRpb25zKSk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZShvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7ICAgXG4gICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGhpcy5fX2RldGFjaCh7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KSk7XG4gICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGhpcy5fX2VtcHR5KHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pKTtcbiAgICB0aGlzLl9fY2xlYXJTdG9yZUxpbmtzKCk7ICAgIFxuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTsgICAgXG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5lbC5fX2FraWxpO1xuICAgICAgdGhpcy5fX2JpbmRpbmdzID0gbnVsbDtcbiAgICAgIHRoaXMuX190YWdzID0gbnVsbDsgICAgXG4gICAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgICAgdGhpcy5fX2Rpc2FibGVTdG9yZUtleXMgPSBudWxsO1xuICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyS2V5cyA9IG51bGw7XG4gICAgICB0aGlzLl9fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgICB0aGlzLl9fcGFyZW50cyA9IG51bGw7XG4gICAgICB0aGlzLl9fYXR0cnMgPSBudWxsO1xuICAgICAgdGhpcy5fX2F0dHJMaW5rcyA9IG51bGw7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IG51bGw7XG4gICAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBudWxsO1xuICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgY29uc3Qgbm9kZXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuYXR0cmlidXRlc1tpXTtcbiAgICAgIG5vZGUuX19pbml0aWFsaXplZCAmJiBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eShvcHRpb25zID0ge30pIHsgICAgXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7XG5cbiAgICB0aGlzLl9fbWFwTm9kZXMobm9kZSA9PiB7XG4gICAgICBpZighbm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSwgeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7ICBcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7ICAgIFxuICAgIH0sIHsgcm9vdEF0dHJzOiBmYWxzZSB9KTtcblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBbaGFuZGxlcl1cbiAgICovXG4gIHN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwic3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19zdG9yZUJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19zdG9yZUJ5S2V5cyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHdpdGggdGhlIGF0dHJpYnV0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBbaGFuZGxlcl1cbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHsgICBcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYWxlIHRoZSBjb21wb25lbnQsIGJ1dCBjYW5jZWwgdGhlIGNvbXBpbGF0aW9uIGluc2lkZSBvZiBpdFxuICAgKi9cbiAgcHJldmVudCgpIHtcbiAgICB0aGlzLl9fcHJldmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fcmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbGlua3MuXG4gKiBJdCB3b3JrcyB3aXRoIHJvdXRlciB0b28uIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnbyBvbiBjbGlja1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIG9mIHJvdXRlciB0byBnbyBvbiBjbGljayB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3BhcmFtc31cbiAqIEBhdHRyIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3F1ZXJ5fVxuICogQGF0dHIge3N0cmluZ30gW2hhc2hdIC0gaGFzaCBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX2hhc2h9XG4gKiBAYXR0ciB7b2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfcm91dGVyLmxvY2F0aW9ufVxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIGFjdGl2ZSBvciBub3QgXG4gKiBAc2NvcGUge2Jvb2xlYW59IGluQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgcGFydCBvZiB0aGUgYWN0aXZlIHN0YXRlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aXRoIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQHRhZyBjb250ZW50XG4gKiBAc2VsZWN0b3IgY29udGVudCxbY29udGVudGVkaXRhYmxlXVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAYXR0ciB7Ym9vbGVhbn0gW2VkaXRhYmxlXSAtIGVkaXRhYmxlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgdGhpcyk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZW1iZWQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBlbWJlZFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgZm9yXG4gKiBAc2VsZWN0b3IgZm9yW2luXSxvbFtpbl0sdWxbaW5dLHRoZWFkW2luXSx0Ym9keVtpbl0sdGZvb3RbaW5dXG4gKiBAYXR0ciB7b2JqZWN0fGFycmF5fSBpbiAtIGRhdGEgdG8gY3JlYXRlIHRoZSBsb29wXG4gKiBAbWVzc2FnZSB7b2JqZWN0fGFycmF5fSBvdXQgLSBzZW50IG9uIHRoZSBkYXRhIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnb3V0J107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICBcbiAgICB0aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgIFxuICAgIGlmKChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUubmFtZSA9PSAnaW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLl9fcHJlcGFyZUF0dHJpYnV0ZUluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wLm5vZGU7XG5cbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJyAmJiBwcm9wLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3VwZXIuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3KTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvckVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgcmV0dXJuIGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlOyAgICBcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdHlwZW9mIHZhbHVlID09ICdvYmplY3QnPyB7IGhhc2g6IHV0aWxzLmNyZWF0ZU9iamVjdEhhc2godmFsdWUpIH06IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYodGhpcy5pdGVyYXRvcnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2luZGV4XTtcbiAgICAgICAgXG4gICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7ICAgICAgICBcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHsgICAgICAgIFxuICAgICAgICBpdGVyYXRvci5zZXRLZXkodHJ1ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdXRpbHMuY29tcGFyZSh0aGlzLl9fY29tcGFyaXNvblZhbHVlLCBpdGVyYXRvci5jb21wYXJpc29uVmFsdWUpKSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5pdGVyYXRvckVsLmNsb25lTm9kZSgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5pdGVyYXRvclJlZik7XG4gICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShlbCkpO1xuICAgIHRoaXMuaXRlcmF0b3JzLnB1c2goZWwuX19ha2lsaSk7XG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkYXRhID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTsgICBcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLmNoaWxkcmVuKTsgXG4gICAgdGhpcy5pdGVyYXRvcnMuc29ydCgoYSwgYikgPT4gY2hpbGRyZW4uaW5kZXhPZihhLmVsKSAtIGNoaWxkcmVuLmluZGV4T2YoYi5lbCkpO1xuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHRoaXMubG9vcChrZXksIHZhbHVlLCBpbmRleCkuaXRlcmF0ZShpbmRleCk7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBsID0gZGF0YS5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsb29wKGluZGV4LCBkYXRhW2luZGV4XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgbG9vcChrZXksIGRhdGFba2V5XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBpbmRleCwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaV07XG4gICAgICBpdGVyYXRvci5fX3JlbW92ZSgpO1xuICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl9fcHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdHRycy5vbk91dC50cmlnZ2VyKGRhdGEsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB9KTsgICAgXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gMDtcbiAgICB0aGlzLl9fa2V5ID0gJyc7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGxvb3BcbiAqIEBzZWxlY3RvciBsb29wLHRyXG4gKiBAYXR0ciBAc2VlIEZvclxuICogQHNjb3BlIHsqfSBsb29wVmFsdWUgLSBkYXRhIGl0ZW0ncyB2YWx1ZSBvZiB0aGUgY3VycmVudCBpdGVyYXRpb24gXG4gKiBAc2NvcGUge3N0cmluZ3xudW1iZXJ9IGxvb3BLZXkgLSBrZXkgb2YgdGhlIGl0ZXJhdGlvblxuICogQHNjb3BlIHtudW1iZXJ9IGxvb3BJbmRleCAtIGluZGV4IG9mIHRoZSBpdGVyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCh0cnVlKTtcbiAgICB0aGlzLnNldEtleSh0cnVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHRydWUpO1xuXG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuICAgIHRoaXMuY29tcGFyaXNvblZhbHVlID0gIHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlO1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBpZlxuICogQHNlbGVjdG9yIGlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIC0gc2hvdyB0aGUgZWxlbWVudCBjb250ZW50IG9yIG5vdFxuICogQGF0dHIge2Jvb2xlYW59IHJlY3JlYXRlIC0gZGVsZXRlIHRoZSBjb250ZW50IGFuZCByZWNyZWF0ZSBvciBqdXN0IHNob3cvaGlkZSBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdmFsID0+ICh0aGlzLnN0YXRlID0gISF2YWwsIHRoaXMuc2V0U3RhdGUoKSkpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgdGhpcy5kaXNwbGF5LCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7ICAgIFxuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2UtaWZcbiAqIEBzZWxlY3RvciBlbHNlLWlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIEBzZWUgSWZcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaWZyYW1lcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGlmcmFtZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpbWFnZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpbWdcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGluY2x1ZGUgdGVtcGxhdGVzIGJ5IHVybC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaHRtbF90ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgaW5jbHVkZVxuICogQHNlbGVjdG9yIGluY2x1ZGVbdXJsXVxuICogQGF0dHIge3N0cmluZ30gdXJsIC0gdGVtcGxhdGUgcGF0aFxuICogQGF0dHIge251bWJlcnxmdW5jdGlvbnxib29sZWFufSBbY2FjaGVdIC0gcmVxdWVzdCBjYWNoZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzI2RvY3NfY2FjaGV9XG4gKiBAbWVzc2FnZSB7dm9pZH0gbG9hZCAtIHNlbnQgb24gdGhlIHRlbXBsYXRlIGxvYWRcbiAqIEBtZXNzYWdlIHtFcnJvcn0gZXJyb3IgLSBzZW50IG9uIGVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2FjaGUnLCB0aGlzLnNldENhY2hlKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldENhY2hlKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBpbnB1dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jaGVja2JveF9hbmRfcmFkaW99XG4gKiBcbiAqIEB0YWcgaW5wdXRcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddLmNvbmNhdChUZXh0LmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KFRleHQuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nOyAgICBcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ICBcblxuICBzZXRDaGVja2VkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIFxuICAgIGlmICh0aGlzLmVsLmNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIG9iamVjdCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIG9iamVjdFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvXG4gKiBAc2VsZWN0b3IgcmFkaW9bbmFtZV1cbiAqIEBhdHRyIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBncm91cFxuICogQGF0dHIge3N0cmluZ3xudWxsfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKiBAbWVzc2FnZSB7c3RyaW5nfSByYWRpbyAtIHNlbnQgb24gdmFsdWUgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLnNldE5hbWVzLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSB8fCB0aGlzLmF0dHJzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJvdXRlciB0ZW1wbGF0ZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyByb3V0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHBhcmFtIHtib29sZWFufSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uLCBsb2FkID0gdHJ1ZSkge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcblxuICAgIGNvbnN0IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiA9IChwYXRoKSA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gKGh0bWwpID0+IHsgXG4gICAgICB0aGlzLmVtcHR5KCk7ICBcbiAgICAgIGxldCBuYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgIGlmKHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZvcihsZXQga2V5IGluIEFraWxpLl9fY29tcG9uZW50cykge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEFraWxpLl9fY29tcG9uZW50c1trZXldO1xuICAgIFxuICAgICAgICAgIGlmKGNvbXBvbmVudCA9PT0gc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBuYW1lID0ga2V5OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke3N0YXRlLm5hbWV9XCIgaGFzIG5vIGRlZmluZWQgY29tcG9uZW50YClcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPCR7IG5hbWUgfT4keyBodG1sIH08LyR7IG5hbWUgfT5gO1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHsgIFxuICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKSwgICBcbiAgICAgIHN0YXRlOiB0cmFuc2l0aW9uLnBhdGguc3RhdGUsXG4gICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgIHVybDogdHJhbnNpdGlvbi5wYXRoLnVybCxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyxcbiAgICAgIHF1ZXJ5OiB0cmFuc2l0aW9uLnBhdGgucXVlcnksXG4gICAgICBoYXNoOiB0cmFuc2l0aW9uLnBhdGguaGFzaFxuICAgIH07XG5cbiAgICBpZiAoIWxvYWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudGVtcGxhdGU7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oaHRtbCA9PiBjb21waWxlKGh0bWwpKTtcbiAgfVxufSIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggc2VsZWN0LlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19zZWxlY3R9XG4gKiBcbiAqIEB0YWcgc2VsZWN0ICBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXS5jb25jYXQoRm9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjb21waWxlZCgpIHsgXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSk7XG4gICAgbGV0IHJlcyA9IHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7ICAgXG4gICAgdGhpcy5hdHRyKCdtdWx0aXBsZScsIHRoaXMuc2V0TXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cignY29udGVudCcsIHRoaXMuc2V0Q29udGVudCk7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhd1NlbGVjdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjsiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzb3VyY2UgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBzb3VyY2VcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuXG4vKipcbiAqIEJhc2UgY29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIge2Jvb2xlYW59IGZvY3VzIC0gc2V0IHRoZSBmb2N1cyBvciBub3RcbiAqIEBhdHRyIHtudW1iZXJ9IGRlYm91bmNlIC0gZGVib3VuY2UgZGVsYXlcbiAqIEBtZXNzYWdlIHt2b2lkfSBkZWJvdW5jZSAtIHNlbnQgb24gdGhlIGRlYm91bmNlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy52YWx1ZUtleSA9ICd2YWx1ZSc7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gNTAwO1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICAgIH0sIHRoaXMuZGVib3VuY2VJbnRlcnZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2hpY2ggaGF2ZSBhc3luYyBhdHRyaWJ1dGUgY29udGVudC5cclxuICogXHJcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cclxuICogXHJcbiAqIEB0YWcgdXJsXHJcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufSIsIi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBldmVudHMuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gdHJpZ2dlciBjdXN0b20gamF2YXNjcmlwdCBldmVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZXZlbnRzfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBub2RlLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyh7IGRldGFpbDogZGF0YSwgIC4uLm9wdGlvbnMgfSkpKTtcbiAgICB9ICAgXG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlcGVyZSBhbiBldmVudCBvcHRpb25zXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKi9cbiAgcHJlcGFyZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgLi4ub3B0aW9ucyB9OyBcbiAgICB0aGlzLm5vZGUuX19jb21wb25lbnQuX19wcmVwYXJlQXR0cmlidXRlT3V0KHRoaXMubm9kZSwgb3B0aW9ucy5kZXRhaWwpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufSIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuLyoqXG4gKiBHbG9iYWxzIHRvIHVzZSB0aGUgY3VzdG9tIHZhcmlhYmxlcyBpbiBzY29wZSBleHByZXNzaW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlI2RvY3NfZ2xvYmFsc31cbiAqL1xuY29uc3QgZ2xvYmFscyA9IG5ldyBQcm94eSh7fSwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhZyA9IGBnbG9iYWxzLiR7a2V5fWA7XG5cbiAgICBpZihBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQuX19hZGRUYWcodGFnLCBBa2lsaS5fX2V2YWx1YXRpb24ubm9kZSk7XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgfVxuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCB0YWcgPSBgZ2xvYmFscy4ke2tleX1gOyBcbiAgICBjb25zdCBwcmV2ID0gdGFyZ2V0W2tleV07XG4gICAgdGFyZ2V0W2tleV0gPSBBa2lsaS53cmFwKHZhbHVlKTsgICAgXG4gICAgcHJldiAhPT0gdmFsdWUgJiYgQWtpbGkuZXZhbHVhdGVUYWcodGFnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhZyA9IGBnbG9iYWxzLiR7a2V5fWA7ICAgIFxuICAgIEFraWxpLnJlbW92ZVRhZyh0YWcpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICBBa2lsaS5ldmFsdWF0ZVRhZyh0YWcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsczsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGV9XG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyBhcmUgbm90IG1vbml0b3JlZC5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIG1ha2UgcmVxdWVzdHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHN9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgX19jYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkZWZhdWx0c10gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvclBhdHRlcm46IC9eW14yM10vLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9OyBcbiAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsOyAgXG4gICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgXG4gICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpO1xuICAgICAgeGhyID0gYmVmb3JlLnhocjtcbiAgICAgIG9wdGlvbnMgPSBiZWZvcmUub3B0aW9ucztcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpOyAgXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBcbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgIHN0ciAmJiAob3B0aW9ucy51cmwgKz0gXCI/XCIgKyBzdHIpO1xuICAgICAgfVxuICAgICAgICAgICBcbiAgICAgIGxldCBoYXNoID0gbnVsbDtcbiAgICAgIGxldCBjYWNoZSA9IHR5cGVvZiBvcHRpb25zLmNhY2hlID09ICdmdW5jdGlvbic/IG9wdGlvbnMuY2FjaGUob3B0aW9ucyk6IG9wdGlvbnMuY2FjaGU7XG4gICAgICAoIXdpbmRvdy5BS0lMSV9TU1IgJiYgIUFraWxpLl9faW5pdCkgJiYgKGNhY2hlID0gdHJ1ZSk7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCxcbiAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlciwgXG4gICAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMucGFzc3dvcmQsIFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY2FjaGUgJiYgaGFzaCkgeyAgICAgICAgXG4gICAgICAgIGxldCBfY2FjaGUgPSB0aGlzLmdldENhY2hlKGhhc2gpO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYoX2NhY2hlICYmIChjYWNoZSA9PT0gdHJ1ZSB8fCBub3cgLSBfY2FjaGUuY3JlYXRlZEF0IDw9IGNhY2hlKSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMudHJhbnNmb3JtQWZ0ZXIoX2NhY2hlLnJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgbGV0IGhlYWRlcktleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlYWRlcktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrID0gaGVhZGVyS2V5c1tpXTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLFxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICByZWFkeVN0YXRlOiB4aHIucmVhZHlTdGF0ZSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHhoci53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiB4aHIucmVzcG9uc2VUeXBlLFxuICAgICAgICAgIHJlc3BvbnNlVGV4dDogeGhyLnJlc3BvbnNlVHlwZSA9PSAndGV4dCc/IHhoci5yZXNwb25zZVRleHQ6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlWE1MOiB4aHIucmVzcG9uc2VUeXBlID09ICdkb2N1bWVudCc/IHhoci5yZXNwb25zZVhNTDogJycsXG4gICAgICAgICAgcmVzcG9uc2VVUkw6IHhoci5yZXNwb25zZVVSTCxcbiAgICAgICAgICB0aW1lb3V0OiB4aHIudGltZW91dCxcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoeGhyKSwgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIocmVzdWx0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4gJiYgKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgKGNhY2hlIHx8IHdpbmRvdy5BS0lMSV9TU1IpICYmIGhhc2ggJiYgdGhpcy5jcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpO1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVycyBvZiBhIFhNTEh0dHBSZXF1ZXN0IGluc3RhbmNlXG4gICAqIFxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fVxuICAgKi9cbiAgZ2V0SGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgIGxldCBoZWFkZXJzID0ge307XG4gICAgbGV0IHN0ciA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTsgIFxuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJ1xcdTAwMGRcXHUwMDBhJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5pbmRleE9mKCdcXHUwMDNhXFx1MDAyMCcpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGxldCBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIGxldCB2YWwgPSBsaW5lLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUoaGFzaCkge1xuICAgIHJldHVybiB0aGlzLl9fY2FjaGVbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICovXG4gIGNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCkge1xuICAgIHRoaXMuX19jYWNoZVtoYXNoXSA9IHsgcmVzdWx0LCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgcmVtb3ZlQ2FjaGUoaGFzaCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fY2FjaGVbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgaGFzaCB0byBzYXZlIGluIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZUNhY2hlSGFzaChkYXRhKSB7XG4gICAgcmV0dXJuIHV0aWxzLmNyZWF0ZU9iamVjdEhhc2goZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpKS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpKTtcbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucykge1xuICAgIHJldHVybiB7IHhociwgb3B0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkYXRhOiByZXN1bHQucmVzcG9uc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAgLyoqXG4gICAqICBNYWtlIEhFQUQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgaGVhZCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0hFQUQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJlcXVlc3Quc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX19pbnN0YW5jZXMgPSB7fTtcbiAgdGhpcy5fX2NhY2hlID0ge307XG59XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVpbml0IHJvdXRlclxuICovXG5yZXF1ZXN0LmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xucmVxdWVzdC5zZXREZWZhdWx0cygpOyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBjb25zaXN0cyB0aGUgbGFzdCBhY3R1YWwgcm91dGVyIHRyYW5zaXRpb24gaW5mb3JtYXRpb24uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RyYW5zaXRpb259XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBwcmV2aW91cyA9IG51bGwpIHsgIFxuICAgIHRoaXMudXJsID0gdXJsOyAgXG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZmluaXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0IHRvIGFub3RoZXIgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgcm91dGVyLnN0YXRlXG4gICAqL1xuICByZWRpcmVjdChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IC4uLnJvdXRlci50cmFuc2l0aW9uLnBhdGgub3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuY2FuY2VsKCk7ICAgXG4gICAgcmV0dXJuIHJvdXRlci5zdGF0ZS5jYWxsKHJvdXRlciwgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZCB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSBUcmFuc2l0aW9uLnByb3RvdHlwZS5yZWRpcmVjdFxuICAgKi9cbiAgcmVsb2FkKHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBwYXJhbXMgPSB7IC4uLnRoaXMucGF0aC5wYXJhbXMsIC4uLnBhcmFtcyB9O1xuICAgIHF1ZXJ5ID0geyAuLi50aGlzLnBhdGgucXVlcnksIC4uLnF1ZXJ5IH07XG4gICAgaGFzaCA9IGhhc2ggPT09IHVuZGVmaW5lZD8gdGhpcy5wYXRoLmhhc2g6IGhhc2g7XG4gICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodGhpcy5wYXRoLnN0YXRlLm5hbWUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwYXRoXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF0aCBcbiAgICovXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0geyBwYXJhbXM6IHt9LCBxdWVyeToge30sIC4uLnBhdGggfTtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHRoaXMucGF0aCk7XG4gICAgdGhpcy5zdGF0ZXNbdGhpcy5wYXRoLnN0YXRlLm5hbWVdID0gdGhpcy5wYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHJvdXRlIGJ5IHRoZSBzdGF0ZVxuICAgKiAgXG4gICAqIEBwYXJhbSB7Kn0gc3RhdGUgXG4gICAqL1xuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYgKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIHRoZSBzdGF0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICAgKi9cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gISF0aGlzLnN0YXRlc1tzdGF0ZS5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgcm91dGUgaXMgY2hhbmdlZFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHJvdXRlXG4gICAqL1xuICBpc1JvdXRlQ2hhbmdlZChyb3V0ZSkge1xuICAgIGlmKCF0aGlzLnByZXZpb3VzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IHJvdXRlLnN0YXRlO1xuXG4gICAgaWYoIXRoaXMucHJldmlvdXMuaGFzU3RhdGUoc3RhdGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbUtleXMgPSBbXTtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHJvdXRlci5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiBwYXJhbUtleXMucHVzaCh2KSk7XG4gICAgXG4gICAgZm9yKGxldCBrZXkgaW4gc3RhdGUucGFyYW1zKSB7XG4gICAgICBpZihwYXJhbUtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICAgIHBhcmFtS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlLZXlzID0gT2JqZWN0LmtleXMoc3RhdGUucXVlcnkpO1xuICAgIGNvbnN0IHdhdGNoSGFzaCA9IHN0YXRlLmhhc2ggIT09IHVuZGVmaW5lZDsgICAgXG4gICAgY29uc3QgcHJldlJvdXRlID0gdGhpcy5wcmV2aW91cy5nZXRSb3V0ZShzdGF0ZSk7IFxuXG4gICAgY29uc3QgcHJldiA9IHsgXG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHByZXZSb3V0ZS5wYXJhbXMsIHBhcmFtS2V5cyksIFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHByZXZSb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH07XG5cbiAgICBjb25zdCBjdXJyZW50ID0ge1xuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5wYXJhbXMsIHBhcmFtS2V5cyksXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9XG5cbiAgICBpZih3YXRjaEhhc2gpIHtcbiAgICAgIHByZXYuaGFzaCA9IHByZXZSb3V0ZS5oYXNoO1xuICAgICAgY3VycmVudC5oYXNoID0gcm91dGUuaGFzaDtcbiAgICB9XG5cbiAgICByZXR1cm4gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHRoZSBjdXJyZW50IHRyYW5zaXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHsgICBcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmlzaCB0aGUgdHJhbnNpdGlvblxuICAgKi9cbiAgZmluaXNoKCkge1xuICAgIHRoaXMuX19maW5pc2VkID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEFraWxpIHJvdXRlclxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKi9cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG4vKipcbiAqIFNldCByb3V0ZXIncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5yb3V0ZXIuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmFzZVVybCA9IFwiL1wiO1xuICB0aGlzLnN0YXRlcyA9IFtdO1xuICB0aGlzLmhhc2hNb2RlID0gdHJ1ZTtcbiAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG4gIHRoaXMuX19pbml0ID0gZmFsc2U7XG4gIHRoaXMuX19wYXJhbVJlZ2V4ID0gLyhcXC8/OihbXFx3XFxkLV0rKSkvZztcbiAgdGhpcy5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgaWYodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0gbmFtZTtcbiAgICBwYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuO1xuICAgIG5hbWUgPSBvcHRpb25zLnN0YXRlO1xuICAgIGRlbGV0ZSBvcHRpb25zLnBhdHRlcm47XG4gICAgZGVsZXRlIG9wdGlvbnMuc3RhdGU7XG4gIH1cblxuICBpZighbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG11c3QgaGF2ZSBhIG5hbWVgKTtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBwYXJhbXM6IHt9LFxuICAgIHF1ZXJ5OiB7fSxcbiAgICBoYW5kbGVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZihBa2lsaS5vcHRpb25zLmRlYnVnICYmIG9wdGlvbnMuY29tcG9uZW50ICYmIChvcHRpb25zLnRlbXBsYXRlIHx8IG9wdGlvbnMudGVtcGxhdGVVcmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBtdXN0IG9ubHkgaGF2ZSBhIGNvbXBvbmVudCBvciB0ZW1wbGF0ZSBvcHRpb25gKTtcbiAgfSBcblxuICBpZiAoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwgJiYgIW9wdGlvbnMuY29tcG9uZW50KSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtzdGF0ZX1gKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKSk7ICBcbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpOyAgICBcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpO1xuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zID0ge30pIHtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBvcHRpb25zLm1hbnVhbCA9IHRydWU7XG4gIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybCh1cmwpKTsgIFxuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7ICAgIFxuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMuc3RhdGVzW2ldKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHN0YXRlIFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gKi9cbnJvdXRlci5pbml0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IHBhcmVudHMgPSBbXTtcbiAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcGFyZW50cy5wb3AoKTtcbiAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTdGF0ZShwYXJlbnROYW1lKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgIH1cblxuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcbiAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gIHRoaXMuX19pbml0ICYmIHRoaXMuaW5pdFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMucmVwbGFjZUhhc2hVcmwodXJsKTogdGhpcy5yZXBsYWNlSGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnIycgKyAodXJsIHx8ICcvJykpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwYXJlXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30sIHByZXBhcmUgPSB0cnVlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIFxuICBpZihwcmVwYXJlKSB7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7XG4gIH1cblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+ICcvJyArIChwYXJhbXNbdl0gfHwgJycpKTtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15cXF4vLCAnJyk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGlmICghdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVBcmdzID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBhcmdzID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDk5OTsgaSsrKSB7XG4gICAgY29uc3QgcGFyYW1zVGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlUGFyYW1zKHN0YXRlLCBwYXJhbXMsIGFyZ3MpO1xuICAgIGNvbnN0IHF1ZXJ5VGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlUXVlcnkoc3RhdGUsIHF1ZXJ5LCBhcmdzKTtcbiAgICBjb25zdCBoYXNoVGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlSGFzaChzdGF0ZSwgaGFzaCwgYXJncyk7XG4gICAgXG4gICAgaWYoaGFzaFRlbXAgPT09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMuZW1wdHlIYXNoID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZihoYXNoVGVtcCA9PT0gJycpIHtcbiAgICAgIG9wdGlvbnMuZW1wdHlIYXNoID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3QXJncyA9IHsgcGFyYW1zOiBwYXJhbXNUZW1wLCBxdWVyeTogcXVlcnlUZW1wLCBoYXNoOiBoYXNoVGVtcCwgb3B0aW9ucyB9O1xuXG4gICAgaWYodXRpbHMuY29tcGFyZShuZXdBcmdzLCBhcmdzKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgYXJncyA9IG5ld0FyZ3M7XG4gIH1cbiAgICBcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcGFyYW1zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVBhcmFtcyA9IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMsIGFyZ3MpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IGxpc3QgPSBbcGFyYW1zXTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsaXN0LnB1c2godGhpcy5nZXRTdGF0ZShjdXJyZW50KS5wYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKGxpc3QsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHF1ZXJ5XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUXVlcnkgPSBmdW5jdGlvbihzdGF0ZSwgcXVlcnksIGFyZ3MpIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3QgbGlzdCA9IFtxdWVyeV07XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTsgIFxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxpc3QucHVzaCh0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnF1ZXJ5KTtcbiAgfVxuIFxuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MobGlzdCwgYXJncyk7XG59XG5cbi8qKlxuICogTWVyZ2UgbGlzdCBpdGVtcyBhcyB0cmFuc2l0aW9uIG9iamVjdHNcbiAqIFxuICogQHBhcmFtIHtvYmplY3RbXX0gbGlzdFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVBcmdzID0gZnVuY3Rpb24gKGxpc3QsIGFyZ3MgPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSB9KSB7XG4gIGNvbnN0IGFsbCA9IHt9O1xuICBjb25zdCBleGNsdWRlZCA9IHt9O1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IG9iaiA9IGxpc3RbaV07XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gXG4gICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYoZXhjbHVkZWRba2V5XSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nPyB2YWwoYXJncyk6IHZhbDtcblxuICAgICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgYWxsW2tleV07XG4gICAgICAgIGV4Y2x1ZGVkW2tleV0gPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYWxsW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFsbDsgXG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgaGFzaFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlSGFzaCA9IGZ1bmN0aW9uKHN0YXRlLCBoYXNoLCBhcmdzKSB7XG4gIGlmKGhhc2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGV0IHZhbCA9IHRoaXMuZ2V0U3RhdGUoY3VycmVudCkuaGFzaDtcbiAgICB2YWwgPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChhcmdzKTogdmFsO1xuXG4gICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaGFzaCA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuICAgIHJldHVybiAnLz8oW14vXSopJztcbiAgfSk7XG5cbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvKFteXi9dKylbL10rJC8sICckMScpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4sICdnJyk7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcbiAgXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCAuLi5hcmdzKSA9PiB7IFxuICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2ID0gYXJnc1tpXTtcbiAgICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIH0gIFxuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHJvdXRlci50cmFuc2l0aW9uICYmICFyb3V0ZXIudHJhbnNpdGlvbi5fX2ZpbmlzaGVkPyByb3V0ZXIudHJhbnNpdGlvbi51cmw6IHRoaXMuZ2V0VXJsKCk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKCcvJyArIHVybC5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnLz8oW14vXSopJyk7XG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXi8nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnQgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBSZWxvYWQgdGhlIHN0YXRlXG4gKiBcbiAqIEBzZWUgVHJhbnNpdGlvbi5yZWxvYWRcbiAqL1xucm91dGVyLnJlbG9hZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgaWYoIXRoaXMudHJhbnNpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIHRvIHJlbG9hZCB0aGUgc3RhdGUnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnRyYW5zaXRpb24ucmVsb2FkKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIHJvdXRlciBoYW5kbGVycyBpbnNpZGVcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnJvdXRlci5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX19pc29sYXRlZCA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7ICAgIFxuICBpZih0aGlzLl9faXNvbGF0ZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgcGFyYW1zID0ge307XG4gIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTsgIFxuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpOyBcbiAgbGV0IHByZXZUcmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuICBcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG5cbiAgY29uc3QgbmV4dCA9IChzdGF0ZXMpID0+IHsgICAgXG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTsgXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIGNvbXBvbmVudDogcm91dGUgfSk7ICAgIFxuICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zLCAuLi5jb250ZW50LnBhcmFtcyB9O1xuICAgIGhhc2ggPSBoYXNoIHx8IG9wdGlvbnMuZW1wdHlIYXNoO1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpOyAgICAgXG4gICAgaGFzaCA9IGhhc2ggfHwgJyc7XG4gICAgbGV0IHJlYWxVcmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSk7IFxuICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwocmVhbFVybCkpOyBcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShsZXZlbCk7XG4gICAgXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHsgICAgICBcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgIHRyYW5zaXRpb24ucGF0aC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhc3RhdGUuYWJzdHJhY3QgJiYgbGV2ZWwrKztcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgaWYocmVhbFVybCAhPSB1cmwpIHtcbiAgICAgIGlzRGlmZmVyZW50ID0gdHJhbnNpdGlvbi5pc1JvdXRlQ2hhbmdlZCh0cmFuc2l0aW9uLnBhdGgpO1xuICAgIH1cbiAgICAgICBcbiAgICBsZXQgbG9hZCA9IGlzRGlmZmVyZW50ICYmIG9wdGlvbnMucmVsb2FkICE9PSBmYWxzZTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZD8gc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKTogdHJhbnNpdGlvbi5wYXRoLmRhdGEpLnRoZW4oKGRhdGEpID0+IHsgICAgICAgXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2Um91dGUgPSB0cmFuc2l0aW9uLnByZXZpb3VzICYmIHRyYW5zaXRpb24ucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgKHByZXZSb3V0ZSAmJiAhcHJldlJvdXRlLmxvYWRlZCkgJiYgKGxvYWQgPSB0cnVlKTtcbiAgICAgIHJldHVybiByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQpLnRoZW4oKCkgPT4gdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWUpO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSkudGhlbigoKSA9PiB7XG4gICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwodGhpcy5kZWZhdWx0VXJsKSk7ICAgICAgICAgIFxuICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIW9wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICghdHJhbnNpdGlvbi5wYXRoIHx8ICF0cmFuc2l0aW9uLnBhdGguaGFzaCkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgICB0cmFuc2l0aW9uLmZpbmlzaCgpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucm91dGVyLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgcm91dGVyLnNldERlZmF1bHRzKCk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5yb3V0ZXIuc2V0RGVmYXVsdHMoKTsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIGRpc3RyaWJ1dGUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGEgbG90IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy91dGlsc31cbiAqL1xuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBFeHRlbmRlZCBzcGxpdCBvZiB0aGUgc3RyaW5nXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtcIkhlbGxvXCIsIFwiV29ybGRcIl1cbiAqIHV0aWxzLnNwbGl0KFwiSGVsbG8gV29ybGRcIiwgXCIgXCIpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ3ggPSA1JywgJyB5ID0gXCIxOzI7M1wiJ11cbiAqIHV0aWxzLnNwbGl0KCd4ID0gNTsgeSA9IFwiMTsyOzNcIicsIFwiO1wiLCBbJ1wiJ10pO1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0ciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVsXVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW2V4Y2x1ZGVdIFxuICovXG51dGlscy5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgZGVsID0gJycsIGV4Y2x1ZGUgPSBbXSkge1xuXHRjb25zdCBleHBzID0gW107ICAgICBcbiAgbGV0IGxhc3QgPSAnJztcblxuICBpZighZGVsKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJyk7XG4gIH1cbiAgZWxzZSBpZihkZWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KGRlbCk7XG4gIH1cbiAgZWxzZSBpZihzdHIuaW5kZXhPZihkZWwpID09IC0xKSB7XG4gICAgbGFzdCA9IHN0cjtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJycpO1xuICAgIGxldCBvcGVuID0gJyc7IFxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBleGNsdWRlLmluZGV4T2YodmFsKTsgICAgICBcblxuICAgICAgaWYoaW5kZXggPiAtMSAmJiAoIW9wZW4gfHwgb3BlbiA9PSB2YWwpKSB7XG4gICAgICAgICFvcGVuPyBvcGVuID0gZXhjbHVkZVtpbmRleF06IG9wZW4gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09IGRlbCAmJiAhb3Blbikge1xuICAgICAgICBleHBzLnB1c2gobGFzdCk7XG4gICAgICAgIGxhc3QgPSAnJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3QgKz0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGxhc3QgJiYgZXhwcy5wdXNoKGxhc3QpO1xuICByZXR1cm4gZXhwcztcbn1cblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCAneCcpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFtbJ3gnXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV0sICcxJywgW1sneCcsICd5J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV0gXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFsneCcsICd5J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbWyd4J10sIFsneSddXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gbnVsbCkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYgKGtleXMgJiYgIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYodHlwZW9mIGhhbmRsZXIgIT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHN0ciA9IGhhbmRsZXI/IChoYW5kbGVyICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnO1xuICAgIGhhbmRsZXIgPSB2YWwgPT4gKHZhbD8gKHZhbCArICcnKS50b0xvd2VyQ2FzZSgpOiAnJykubWF0Y2goc3RyKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCBmaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIWtleXMgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGtleXMpIHtcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgICAga2V5ID0gQXJyYXkuaXNBcnJheShrZXkpPyBrZXk6IFtrZXldO1xuICAgICAgICBsZXQgdmFsID0ga2V5PyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgaXRlbSk6IGl0ZW07XG4gICAgXG4gICAgICAgIGlmIChoYW5kbGVyKHZhbCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJlZCAmJiByZXMucHVzaChpdGVtKTsgICBcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XVxuICogdXRpbHMuc29ydChbe3g6IHt5OiAyfX0sIHt4OiB7eTogMX19XSwgW1sneCcsICd5J11dLCBbdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBhcnIuc2xpY2UoKTtcblxuICBpZiAoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmIChrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneCcsICd6J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmluY2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRob3V0IHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd5J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmV4Y2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBvcHRpb25zID0geyBuZXN0ZWQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIHBsYWluOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgaWYob3B0aW9ucy5wbGFpbiAmJiAhdGhpcy5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCBpZ25vcmVVbmRlZmluZWQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gKHZhbCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IEFycmF5LmlzQXJyYXkodmFsKT8gW106IHt9O1xuICAgICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyh2YWwpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbFtrZXldICE9PSB1bmRlZmluZWQgJiYgKG9ialtrZXldID0gdmFsW2tleV0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5pZ25vcmVVbmRlZmluZWQpIHtcbiAgICAgIGEgPSBjbGVhclVuZGVmaW5lZChhKTtcbiAgICAgIGIgPSBjbGVhclVuZGVmaW5lZChiKTtcbiAgICB9XG5cbiAgICBsZXQgYUtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhhKTtcbiAgICBsZXQgYktleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhiKTtcbiAgICBcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGEgPSB0aGlzLmlzU2NvcGVQcm94eShhKT8gYS5fX3RhcmdldDogYTtcbiAgICBiID0gdGhpcy5pc1Njb3BlUHJveHkoYik/IGIuX190YXJnZXQ6IGI7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBhS2V5c1tpXTtcblxuICAgICAgaWYgKCF0aGlzLmNvbXBhcmUoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgaGFzaCBmcm9tIGFuIG9iamVjdFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbnV0aWxzLmNyZWF0ZU9iamVjdEhhc2ggPSBmdW5jdGlvbihvYmopIHtcbiAgbGV0IGhhc2ggPSAwO1xuICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICBoYXNoID0gaGFzaCAmIGhhc2g7XG4gIH1cblxuICByZXR1cm4gaGFzaCArICcnO1xufVxuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gIGxldCB2YWwgPSAnJzsgIFxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICghKG5vdyAlIGkpKSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXSwic291cmNlUm9vdCI6IiJ9