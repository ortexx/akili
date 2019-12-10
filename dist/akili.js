/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.0.16
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * {@link http://akilijs.com}
 * {@link https://github.com/ortexx/akili}
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Akili"] = factory();
	else
		root["Akili"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
 * The framework main object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
var Akili = {};

Akili.options = {
  debug: true
};

Akili.__init = null;
Akili.__root = null;
Akili.__components = {};
Akili.__aliases = {};
Akili.__scopes = {};
Akili.__storeLinks = {};
Akili.__window = {};
Akili.__tags = {};
Akili.__isolation = null;
Akili.__evaluation = null;
Akili.__wrapping = false;
Akili.__rootOuterHTML = '';
Akili.__onError = function () {
  return Akili.triggerInit(false);
};

Akili.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

Akili.components = {};
Akili.services = {};
Akili.Component = _component3.default;
Akili.EventEmitter = _eventEmitter2.default;
Akili.Scope = _scope2.default;
Akili.utils = _utils2.default;
Akili.globals = _globals2.default;
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
Akili.services.store = _store2.default;

/**
 * Define the default components
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
  for (var key in _globals2.default) {
    delete _globals2.default[key];
  }

  for (var _key in this.__window.Element.prototype) {
    Element.prototype[_key] = this.__window.Element.prototype[_key];
  }

  for (var _key2 in this.__window.Array.prototype) {
    Array.prototype[_key2] = this.__window.Array.prototype[_key2];
  }

  for (var _key3 in this.options.globals) {
    this.options.globals[_key3] = this.unwrap(this.options.globals[_key3]);
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
  window.removeEventListener('error', this.__onError);
};

/**
 * Join the binding keys
 *
 * @param {string[]} keys binding keys
 */
Akili.joinBindingKeys = function (keys) {
  return keys.map(function (el) {
    return el.toString();
  }).join('.');
};

/**
 * Add the scope
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
 * Get the scope
 *
 * @param {string} name - scope name
 * @returns {Scope}
 */
Akili.getScope = function (name) {
  return this.__scopes[name];
};

/**
 * Remove the scope
 *
 * @param {string} name - scope name
 */
Akili.removeScope = function (name) {
  delete this.__scopes[name];
};

/**
 * Get all elements that is wrapped in the Akili component
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
 * Create the template
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
 * Generate the unique scope name
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
 * Stop the evaluation inside the function
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
 * Evaluate only the root properties
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
 * Stop the isolation inside the function
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
 * Initialize the element
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
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { recompile: false };

  var elements = [];

  if (window.AKILI_SSR) {
    var arr = root.querySelectorAll('[no-ssr]');

    for (var i = 0, l = arr.length; i < l; i++) {
      arr[i].remove();
    }
  }

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this2.initialize(el, options);
    var children = el.children;
    component && elements.push(component);

    for (var _i = 0, _l = children.length; _i < _l; _i++) {
      var child = children[_i];
      nestedInitializing(child);
    }
  };

  nestedInitializing(root);
  var p = [];

  for (var _i2 = 0, _l2 = elements.length; _i2 < _l2; _i2++) {
    var component = elements[_i2];
    p.push(component.__compile());
  }

  return Promise.all(p).then(function () {
    var r = [];

    for (var _i3 = elements.length - 1; _i3 >= 0; _i3--) {
      var _component = elements[_i3];
      r.push(_component.__resolve());
    }

    return Promise.all(r);
  });
};

/**
 * Register the component.
 * Or get it if the function is not passed
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
 * Register the selector alias.
 * Or get it if the component name is not passed
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
 * Isolate the array prototype functions
 */
Akili.isolateArrayPrototype = function () {
  var _this3 = this;

  this.__window.Array = { prototype: {} };
  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop = function _loop(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    _this3.__window.Array.prototype[key] = old;

    Array.prototype[key] = function () {
      var _this4 = this,
          _arguments = arguments;

      return Akili.unevaluate(function () {
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
    var _ret = _loop(i, l);

    if (_ret === 'continue') continue;
  }
};

/**
 * Isolate the window functions
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
 * Isolate the globals
 */
Akili.isolateGlobals = function () {
  _globals2.default.__target.utils = this.wrap(_utils2.default);
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions();
};

/**
 * Isolate the event listeners
 */
Akili.isolateEvents = function () {
  this.__window.Element = { prototype: {} };

  if (window.AKILI_SSR) {
    return;
  }

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
        var _this5 = this,
            _arguments2 = arguments;

        return Akili.isolate(function () {
          return fn.apply(_this5, _arguments2);
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
 * Wrap the function callback with the isolation context
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
 * Wrap the object/function to isolate and unevaluate data
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
 * Unwrap the object/function
 *
 * @param {object|function} obj
 */
Akili.unwrap = function (obj) {
  return this.wrap(obj, { reverse: true });
};

/**
 * Isolate the function
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
    var _this6 = this,
        _arguments4 = arguments;

    if (options.tag && Akili.__evaluation) {
      Akili.addTag(options.tag, Akili.__evaluation.node);
    }

    return Akili.wrapping(function () {
      return fn.apply(_this6, _arguments4);
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

  for (var _key4 in this.__tags[node.__name]) {
    if (_key4 == tag) {
      delete this.__tags[node.__name][_key4];
    }
  }

  if (!Object.keys(this.__tags[node.__name]).length) {
    delete this.__tags[node.__name];
  }
};

/**
 * Evaluate the tag expressions
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
 * Handle the errors
 */
Akili.handleErrors = function () {
  window.addEventListener('error', this.__onError);
};

/**
 * Trigger the initialization status
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
  this.__rootOuterHTML = root.outerHTML;

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
    window.AKILI_CLIENT && (window.AKILI_CLIENT.requestCache = _this7.prepareServerSideRequestCache());
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
  this.__root && (this.__root.outerHTML = this.__rootOuterHTML);

  for (var key in this.__scopes) {
    var component = this.__scopes[key].__component;
    component && component.remove();
  }

  this.__rootOuterHTML = '';
  this.__init = null;
  this.__root = null;
  this.__scopes = {};
  this.__storeLinks = {};
  this.__tags = {};
};

/**
 * Destroy the framework
 */
Akili.destroy = function () {
  this.deinit();
  this.clearGlobals();

  var storeKeys = Object.keys(_store2.default.__target);

  for (var i = 0, l = storeKeys.length; i < l; i++) {
    delete _store2.default.__target[storeKeys[i]];
  }

  _router2.default.__init && _router2.default.deinit();
  delete window.AKILI_SERVER;
  delete window.AKILI_CLIENT;
  delete window.AKILI_SSR;

  for (var key in Akili) {
    delete Akili[key];
  }

  delete window.Akili;
};

/**
 * Initialize the SSR html
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

  for (var _i4 = el.attributes.length - 1; _i4 >= 0; _i4--) {
    var attr = el.attributes[_i4];
    this.__root.setAttribute(attr.name, attr.value);
  }
};

/**
 * Initialize the SSR cache
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
 * Prepare the SSR html
 */
Akili.prepareServerSideHtml = function () {
  return this.__root.outerHTML;
};

/**
 * Prepare the SSR cache
 */
Akili.prepareServerSideRequestCache = function () {
  var cache = { __main: _request2.default.__cache };

  for (var key in _request2.default.__instances) {
    cache[key] = _request2.default.__instances[key].__cache;
  }

  return cache;
};

exports.default = Akili;

window.Akili = Akili;
Akili.define();
Akili.handleErrors();
Akili.isolateGlobals();

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
var systemAttributes = exports.systemAttributes = ['component', 'scope', 'no-ssr'];

/**
 * Base class from which all components are inherited
 */

var Component = function () {
  _createClass(Component, null, [{
    key: 'define',


    /**
     * Define the component
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
   * Create the compilation options 
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
     * Create the recompilation options 
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
        defineAttributes: false
      }, options);
    }

    /**
     * Recompile the component
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
     * Create the component
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
     * Compile the node
     *
     * @protected
     * @returns {Promise}
     */

  }, {
    key: '__compile',
    value: function __compile() {
      var _this2 = this;

      var control = this.__controlAttributes || !this.__evaluationParent;
      var p = Promise.resolve();
      this.__attributeOf = control ? this : this.__evaluationParent.__akili;

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
     * Initialize the component
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
     * Set the boolean attributes
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
     * Set the events
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
     * Set the component parents
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
      var evaluationParent = null;

      for (var i = 0, l = parents.length; i < l; i++) {
        var parent = parents[i];

        if (!parent.__akili.constructor.transparent) {
          evaluationParent = parent;
          break;
        }
      }

      this.__compiling.newParent = newParent;
      newParent && this.__detach();

      if (this.constructor.transparent) {
        this.__evaluationComponent = evaluationParent.__akili;
      }

      this.__evaluationParent = evaluationParent;
      this.__parent = parents[0];
      this.__parents = parents;
      this.scope.__parent = this.__evaluationParent.__akili.scope;
      !this.__recompiling && this.__parent.__akili.__addChild(this.el);
      Object.setPrototypeOf(this.scope, this.__parent.__akili.__scope);
    }

    /**
     * Add the child element to the list
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
     * Splice the child from the list
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
     * Get the parsed expression
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
     * Check the need of the avaluation
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
     * Check the node properties change
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
     * Compare the node property value
     * 
     * @param {object} prop 
     * @param {*} value 
     * @param {object} [options] 
     * @protected
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
     * @protected
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
     * Evaluate the node expression
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
     * Bind the node and set the property
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
     * Nested evaluation by the keys
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
     * Evaluate the value by the keys
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
     * Evaluate the event expression
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
     * Evaluate the node expression with check
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
     * Prepare the attribute value for receiving
     * 
     * @param {Node} node
     * @param {*} value
     * @protected
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
     * @protected
     */

  }, {
    key: '__prepareAttributeOut',
    value: function __prepareAttributeOut(node, value) {
      return _utils2.default.copy(value, { plain: true });
    }

    /**
     * Initialize the attributes
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

      if (!node.__initialized) {
        return;
      }

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
     * Interpolate the element attributes
     *
     * @param {Element} el
     * @param {Component} [attributeOf=null] - if the node has link with the parent scope
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
     * Define the attributes as a proxy
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
     * Convert the object to a proxy
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
     * Trigger the store and the attributes change
     * 
     * @param {string[]} keys 
     * @protected
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
     * Create the hash for the keys
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
     * @returns {object}
     * @protected
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
     * Create the store link with the scope property
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
     * Create the store link with the function
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
     * Trigger the attribute event by the keys
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
     * Trigger the attribute event by the name
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
     * Create the  attribute link with the scope property
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
     * Create the attribute link with the function
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
     * Nested observing of the value
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
     * Prepare the node to the binding
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
     * Check the key is the system
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
     * Get a binding by the keys
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
     * Get all nested bindings by the keys
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
     * Get a binding by the keys
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
     * Map the nodes
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
     * Bind the data with the keys
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
     * Unbind the data by nodes
     *
     * @param {Node|Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var _this17 = this;

      nodes instanceof Node && (nodes = [nodes]);

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
     * Remove all parent bindings with the nodes
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
            arr.splice(i, 1);
          }
        }

        if (!arr.length) {
          delete links[_key2];
        }
      }
    }

    /**
     * Remove the component without the children removing
     *
     * @param {object} [options]
     * @returns {Node[]}
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      this.removed();
      var detachNodes = this.__detach({ saveBindings: true, deinitializeNodes: true });
      var nodes = [].concat(detachNodes, this.__empty({ saveBindings: true }));
      this.__unbindByNodes(detachNodes);
      !options.saveBindings && this.__unbindParentsByNodes(nodes);
      this.__clearStoreLinks();
      this.__scope.__remove();
      delete this.__scope;
      delete this.scope;
      this.el.remove();
      delete this.el.__akili;
      delete this.el;
      delete this.__parent;
      delete this.__attributeOf;
      delete this.__evaluationComponent;
      delete this.__evaluationParent;
      delete this.__parents;
      delete this.__attrs;
      delete this.attrs;
      return nodes;
    }

    /**
     * Remove all children
     *
     * @param {object} [options]
     * @returns {Node[]}
     * @protected
     */

  }, {
    key: '__removeChildren',
    value: function __removeChildren() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];

      for (var i = 0; i < this.__children.length; i++) {
        var child = this.__children[i];
        nodes = nodes.concat(child.__akili.__remove(options));
        i--;
      }

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
      var nodes = [];

      for (var i = 0, l = this.el.attributes.length; i < l; i++) {
        var node = this.el.attributes[i];

        if (node.__initialized) {
          nodes.push(node);
          options.deinitializeNodes && this.__deinitializeNode(node, { saveBindings: true });
        }
      }

      !options.saveBindings && this.__unbindParentsByNodes(nodes);
      return nodes;
    }

    /**
     * Clear the component html
     *
     * @param {object} [options]
     * @returns {Node[]}
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var _this18 = this;

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

        _this18.__deinitializeNode(node, { saveBindings: true });
        nodes.push(node);
      }, { rootAttrs: false });

      this.__unbindByNodes(nodes);

      !options.saveBindings && this.__unbindParentsByNodes(nodes);
      this.el.innerHTML = '';
      return nodes;
    }

    /**
     * Get the parent components
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
     * Get the child components
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
     * Get the nearest components
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
     * Create the link with the store
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
     * Create the link with the attribute
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
     * Check the component using the selector
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
     * Get the closest parent component by the selector
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
     * Get an array of parent components by the selector
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
     * Get the closest child component by the selector
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
     * Get an array of child components by the selector
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
     * Get an array of components left from the current by the selector
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
     * Get an array of components right from the current by the selector
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
     * Get the closest leftcomponent by the selector
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
     * Get the closest right component by the selector
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
     * Change the element parent
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
     * Cancel the component compilation
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
    }

    /**
     * Compile the component but prevent the compilation inside
     */

  }, {
    key: 'prevent',
    value: function prevent() {
      this.__prevent = true;
    }

    /**
     * Clear the element content
     *
     * @returns {*}
     */

  }, {
    key: 'empty',
    value: function empty() {
      return this.__empty.apply(this, arguments);
    }

    /**
     * Remove the element
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
  }, {
    key: 'transition',
    get: function get() {
      return this.__scope.__transition || null;
    }
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
 * It works with router as well. 
 * 
 * {@link https://akilijs.com/docs/components#docs_links}
 * 
 * @tag a
 * @selector a[state]:not([url]),a[url]:not([state])
 * @attr {string} [url] - url to go
 * @attr {string} [state] - state to go {@link https://akilijs.com/docs/routing}
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
 * Component for elements with the contenteditable attribute.
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
      _get(For.prototype.__proto__ || Object.getPrototypeOf(For.prototype), 'removed', this).apply(this, arguments);
      this.iteratorEl && this.iteratorEl.remove();
      delete this.html;
      delete this.iterators;
      delete this.iteratorEl;
      delete this.__iterator;
      delete this.__value;
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
        iterator.setIndex(this.__index === iterator.index);
        iterator.setKey(this.__key === iterator.key);
        iterator.setValue(_utils2.default.compare(this.__hash, iterator.hash));
        this.__promises.push(_akili2.default.compile(iterator.el, {
          recompile: {
            checkChanges: true
          }
        }));
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
      var children = [].slice.call(this.el.children);
      this.iterators.sort(function (a, b) {
        return children.indexOf(a.el) - children.indexOf(b.el);
      });
      this.__children.sort(function (a, b) {
        return children.indexOf(a) - children.indexOf(b);
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
      delete this.for;
      delete this.value;
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
      var _this3 = this;

      this.attr('in', function () {
        return _this3.setNames();
      }, { callOnStart: false });
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

var _utils = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

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
 * Class to work with events.
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
   * @param {*} data
   * @param {object} [options]
   * @param {boolean} [force]
   * @returns {Promise}
   */


  _createClass(EventEmitter, [{
    key: "trigger",
    value: function trigger(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.__removed) {
        return;
      }

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

      if (this.__removed) {
        return;
      }

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, this.prepareOptions(options)));
      }
    }

    /**
     * Prepere the event options
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
     * Check the event callback doesn't run recursively
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
      delete this.node;
      delete this.component;
      delete this.el;
      this.__removed = true;
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

var obj = {};

/**
 * Globals is for using the custom variables in html
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
   * Set the scope value
   * 
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

    /**
     * Remove the scope
     * 
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      _akili2.default.removeScope(this.__name);

      for (var key in this) {
        if (!this.hasOwnProperty(key)) {
          continue;
        }

        delete this[key];
      }
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
 * The instance of this class allows you to make requests.
 * 
 * {@link https://akilijs.com/docs/requests}
 */
var Request = exports.Request = function () {

  /**
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
   * Send the request
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
     * Get the headers of an XMLHttpRequest instance
     * 
     * @param {XMLHttpRequest}
     */

  }, {
    key: 'getCache',


    /**
     * Get the cache
     * 
     * @param {string} hash
     * @returns {object}
     */
    value: function getCache(hash) {
      return this.__cache[hash] || null;
    }

    /**
     * Create the cache
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
     * Remove the cache
     * 
     * @param {string} hash
     */

  }, {
    key: 'removeCache',
    value: function removeCache(hash) {
      delete this.__cache[hash];
    }

    /**
     * Create a hash for saving in the cache
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
     * Convert the object to a query string
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
     * Convert the query string to an object
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
     * Create multipart form data from the object
     *
     * @param {object} obj
     * @param {FormData} [data]
     * @param {string} [namespace]
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
     * Transform the data before the request
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
     * Transform the data after the request
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
     *  Make a GET request
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
     * Makea a DELETE request
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
     * Make a POST request
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
     * Make a PUT request
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
     *  Make a PATCH request
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
     * Make a HEAD request
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

request.__instances = {};
request.__cache = {};

/**
 * Add a new instance
 *
 * @param {string} name
 * @param {Request} instance
 */
request.addInstance = function (name, instance) {
  this.__instances[name] = instance;
};

/**
 * Remove the instance
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
 * The instance of this class includes the last actual router transition information.
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
    this.__finished = false;
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
      this.__finished = true;
      delete this.previous;
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

router.baseUrl = "/";
router.states = [];
router.hashMode = true;
router.__redirects = 0;
router.__init = false;
router.__paramRegex = /(\/?:([\w\d-]+))/g;
router.__routeSelector = function (c) {
  return c instanceof _route2.default;
};

/**
 * Add a new state
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
 * Remove the state
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
 * Check the state exists
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
 * Change the state
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
 * Go to some position
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
 * Change the state by the url
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
 * Initialize the router. 
 * Must be called before Akili.init()
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
 * Get the state by the name
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
 * Set the state
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
 * Remove the state by the name
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
 * Set the url
 *
 * @param {string} url
 */
router.setUrl = function (url) {
  this.hashMode ? this.setHashUrl(url) : this.setHistoryUrl(url);
};

/**
 * Set the url using the history
 *
 * @param url
 */
router.setHistoryUrl = function (url) {
  window.history.pushState(undefined, undefined, url);
};

/**
 * Set the url using the hash
 *
 * @param url
 */
router.setHashUrl = function (url) {
  window.location.hash = '#' + (url || '/');
};

/**
 * Replace the url
 *
 * @param {string} url
 */
router.replaceUrl = function (url) {
  this.hashMode ? this.replaceHashUrl(url) : this.replaceHistoryUrl(url);
};

/**
 * Replace the url using the history
 *
 * @param url
 */
router.replaceHistoryUrl = function (url) {
  window.history.replaceState(undefined, undefined, url);
};

/**
 * Replace the url using the hash
 *
 * @param url
 */
router.replaceHashUrl = function (url) {
  window.history.replaceState(undefined, undefined, '#' + (url || '/'));
};

/**
 * Get the url
 *
 * @returns {string}
 */
router.getUrl = function () {
  return this.hashMode ? this.getHashUrl() : this.getHistoryUrl();
};

/**
 * Get the url using the history
 *
 * @returns {string}
 */
router.getHistoryUrl = function () {
  return window.location.pathname + window.location.search + window.location.hash;
};

/**
 * Get the url using the hash
 *
 * @returns {string}
 */
router.getHashUrl = function () {
  return window.location.hash.replace(/^#/, '');
};

/**
 * Get the query params
 *
 * @returns {object}
 */
router.getUrlQuery = function () {
  return this.hashMode ? this.getHashUrlQuery() : this.getHistoryUrlQuery();
};

/**
 * Get the query params using the history
 *
 * @returns {object}
 */
router.getHistoryUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.search.replace(/^\?/, ''));
};

/**
 * Get the query params using the hash
 *
 * @returns {object}
 */
router.getHashUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.hash.split('?')[1] || '');
};

/**
 * Create the url
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

  for (var i = 0; i < 27; i++) {
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
  var states = state.name.split('.');
  params = Object.assign({}, params);

  for (var i = states.length - 1; i >= 0; i--) {
    var current = states.slice(0, states.length - i).join('.');
    params = this.createStateObjectArgs(params, this.getState(current).params, args);
  }

  return params;
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
  var states = state.name.split('.');
  query = Object.assign({}, query);

  for (var i = states.length - 1; i >= 0; i--) {
    var current = states.slice(0, states.length - i).join('.');
    query = this.createStateObjectArgs(query, this.getState(current).query, args);
  }

  return query;
};

/**
 * Create the state arguments
 * 
 * @param {object} current
 * @param {object} defaults
 * @param {object} [args]
 */
router.createStateObjectArgs = function (current, defaults) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { params: {}, query: {} };

  var all = Object.assign({}, current);

  for (var key in defaults) {
    var val = defaults[key];

    if (all[key] === null) {
      continue;
    }

    if (typeof val == 'function') {
      all[key] = val(args);
    }

    if (all[key] === undefined) {
      all[key] = val;
    }
  }

  for (var _key in all) {
    if (all[_key] === null) {
      delete all[_key];
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

  for (var i = states.length - 1; i >= 0; i--) {
    var current = states.slice(0, states.length - i).join('.');
    hash = this.createStateHashArgs(hash, this.getState(current).hash, args);
  }

  return hash;
};

/**
 * Create the state hash arguments
 * 
 * @param {string|null} current
 * @param {string|null} defaults
 * @param {object} [args]
 */
router.createStateHashArgs = function (current, defaults) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { params: {}, query: {} };

  if (current === null) {
    return current;
  }

  if (typeof defaults == 'function') {
    return defaults(args);
  }

  if (current === undefined) {
    return defaults;
  }

  return current;
};

/**
 * Remove all unnecessary slashes from the url
 *
 * @param {string} url
 * @returns {string}
 */
router.splitSlashes = function (url) {
  return url.replace(/[/]+/g, '/');
};

/**
 * Get the pattern info
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
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
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
 * Check the state is active
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
 * Check the current url includes the state
 *
 * @param {string|Object} state
 * @returns {boolean}
 */
router.inActiveState = function (state) {
  return router.isActiveState(state, true);
};

/**
 * Get the route component by the level
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
 * Get the patterns array info
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
 * Get the states by the level
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
 * Isolate the function
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
 * Change the state
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
 * Deinitialize the router
 */
router.deinit = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
  this.__init = false;
};

router.Transition = Transition;
exports.default = router;

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
 * Store allows you to save and share data.
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
 * The object with a lot of useful functions
 * 
 * {@link https://akilijs.com/docs/utils}
 */
var utils = {};

/**
 * Create the class attribute from the object
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
 * Create the style attribute from the object
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
 * Split the string extended
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
 * Filter the array
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
 * @param {string|RegExp|function} handler - type of the filtering
 * @param {string[]|string} [keys] - filter by the keys
 * @returns {Array} 
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
 * Sort the array
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
 * Return a new object with the specified keys
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
 * Return a new object without the specified keys
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
 * Check the value is the scope proxy object
 *
 * @param {*} val
 * @returns {boolean}
 */
utils.isScopeProxy = function (val) {
  return !!(val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && val.__isProxy);
};

/**
 * Check the value is a plain object
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
 * Change the attribute value to the appropriate format
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
 * Create a hash from the string
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
 * Encode the html entities
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
 * Decode the html entities
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
 * Convert the string from a dash to a camel case
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
 * Convert the string from a camel to a dash case
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
 * Get the nested object property by array keys
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
 * Check the object nested property existence
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

    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
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
 * Set the object nested property value
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

    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
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
 * Delete the property from the object
 * You can cancel the deletion returning false in the callback function
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

    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
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
 * Generate a random string
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
 * Create a function with the debounce
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

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ba2lsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWtpbGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJkZWJ1ZyIsIl9faW5pdCIsIl9fcm9vdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX3RhZ3MiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9fd3JhcHBpbmciLCJfX3Jvb3RPdXRlckhUTUwiLCJfX29uRXJyb3IiLCJ0cmlnZ2VySW5pdCIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJzZXJ2aWNlcyIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJnbG9iYWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIk9iamVjdHMiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiU291cmNlIiwiVGV4dCIsIlRleHRhcmVhIiwiVHJhY2siLCJVcmwiLCJWaWRlbyIsInJlcXVlc3QiLCJyb3V0ZXIiLCJzdG9yZSIsImRlZmluZSIsImNsZWFyR2xvYmFscyIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJpIiwibCIsImxlbmd0aCIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwiQUtJTElfU1NSIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJyZW1vdmVDb21wb25lbnQiLCJhbGlhcyIsInJlbW92ZUFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiY29uc3RydWN0b3IiLCJjYXRjaCIsImlzb2xhdGVHbG9iYWxzIiwiX190YXJnZXQiLCJ3cmFwIiwiaXNvbGF0ZUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImlzQXJyYXkiLCJudW0iLCJpbmRleCIsImNhbGxiYWNrIiwiX19pc29sYXRlZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsInZhbHVlIiwib2JqIiwiY3VycmVudCIsIndyYXBGdW5jdGlvbiIsImMiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJyZXZlcnNlIiwiYWtpbGlXcmFwcGVkRnVuY3Rpb24iLCJ0YWciLCJhZGRUYWciLCJoYXNUYWciLCJyZW1vdmVUYWciLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyVGFnIiwiX19jb21wb25lbnQiLCJfX2V2YWx1YXRlTm9kZSIsImhhbmRsZUVycm9ycyIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdXRlckhUTUwiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJpbml0U2VydmVyU2lkZUh0bWwiLCJodG1sIiwiaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJyZXF1ZXN0Q2FjaGUiLCJBS0lMSV9DTElFTlQiLCJwcmVwYXJlU2VydmVyU2lkZUh0bWwiLCJjaGFuZ2VTdGF0ZSIsInByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwiZXJyIiwiZGVpbml0IiwiZGVzdHJveSIsInN0b3JlS2V5cyIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwiY2FjaGUiLCJfX21haW4iLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJSZWdFeHAiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJpYWJsZXMiLCJ2YXJzIiwiZXhwcyIsInNwbGl0IiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlU3RvcmVLZXlzIiwiX19kaXNhYmxlQXR0cktleXMiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2NvbnRlbnQiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiY2hlY2tDaGFuZ2VzIiwic2V0RXZlbnRzIiwic2V0UGFyZW50cyIsInNldEJvb2xlYW5BdHRyaWJ1dGVzIiwiZGVmaW5lQXR0cmlidXRlcyIsIl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zIiwiX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJhdHRycyIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0aW9uUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImluZGV4T2YiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0aW9uUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImhhc093blByb3BlcnR5IiwiX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUiLCJfX2dldE5vZGVQcm9wZXJ0eSIsImNvbXBhcmUiLCJjcmVhdGVIYXNoIiwiaGFzaCIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwiQXR0ciIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsIl9fZXhwcmVzc2lvbiIsInRyaW0iLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJldmFsQ29tcG9uZW50IiwiY29tIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJlbnRCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2UiLCJfX2NyZWF0ZUtleXNIYXNoIiwicGFyZW50c0hhc2giLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJpc1Njb3BlUHJveHkiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5Iiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJlbGVtZW50IiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19nZXRBbGxCaW5kcyIsIl9faW5pdGlhbGl6ZWQiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlIiwiX19kaXNhYmxlS2V5cyIsImNoZWNrUHJvcCIsIl9fc2V0IiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInVuYmluZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJfX2V2YWx1YXRlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjYW1lbEF0dHJpYnV0ZSIsInRvQ2FtZWxDYXNlIiwiX19hdHRyaWJ1dGVPbiIsIl9fcHJlcGFyZUF0dHJpYnV0ZUluIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImNvcHkiLCJwbGFpbiIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19pc0V2ZW50IiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2hhc0JpbmRpbmdzIiwiX19ldmFsdWF0ZUV2ZW50IiwiaXNBdHRyIiwiaGFzQmluZGluZ3MiLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0Jvb2xlYW4iLCJzYXZlQmluZGluZ3MiLCJfX3VuYmluZEJ5Tm9kZXMiLCJfX3VuYmluZFBhcmVudHNCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5IiwidGFyZ2V0Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsImZvclBhcmVudHMiLCJmb3JEYXRhIiwicG9wIiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY2hlY2tEaXNhYmxlbWVudCIsIkNIRUNLX0VYSVNURU5DRSIsInRhcmdldFBhcmVudFZhbHVlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJjdXJyZW50S2V5cyIsImN1cnJlbnRLZXlTdHJpbmciLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJ0eXBlIiwicHJveHkiLCJfX2dldERpc2FibGVtZW50VHlwZVN0b3JlIiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwic29ydCIsImtleVN0cmluZyIsImluZm8iLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImNhbGxPblN0YXJ0IiwiY2FwaXRhbGl6ZSIsImF0dHJzS2V5cyIsImZpbHRlciIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJpc1BsYWluT2JqZWN0IiwiQ0hFQ0tfUFJPWFkiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJuZXN0ZWQiLCJ0YXJnZXRLZXlzIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uSGFzaCIsInVwZGF0ZWRBdCIsImdldFRpbWUiLCJwYXJlbnRLZXlzU3RyaW5nIiwia2V5c1N0cmluZyIsImNvbGxlY3QiLCJyb290QXR0cnMiLCJub2RlcyIsIl9fbWFwTm9kZXMiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIk5vZGUiLCJqIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsImRldGFjaE5vZGVzIiwiZGVpbml0aWFsaXplTm9kZXMiLCJfX2VtcHR5IiwiX19jbGVhclN0b3JlTGlua3MiLCJfX3JlbW92ZSIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwiaGFuZGxlciIsInVuc2hpZnQiLCJfX3N0b3JlQnlGdW5jdGlvbiIsIl9fc3RvcmVCeUtleXMiLCJfX2F0dHJCeUZ1bmN0aW9uIiwiX19hdHRyQnlLZXlzIiwiX191bnN0b3JlQnlGdW5jdGlvbiIsIl9fdW5zdG9yZUJ5S2V5cyIsIl9fdW5hdHRyQnlGdW5jdGlvbiIsIl9fdW5hdHRyQnlLZXlzIiwiX19nZXRQYXJlbnQiLCJfX2dldENoaWxkcmVuIiwiX19nZXROZWFyIiwiYXBwZW5kQ2hpbGQiLCJfX3RyYW5zaXRpb24iLCJzdGF0ZSIsInBhcmFtcyIsInF1ZXJ5IiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwidXJsIiwib25TdGF0ZUNoYW5nZWQiLCJzZXRBY3Rpdml0eSIsInNldFN0YXRlIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInNldFVybCIsInJlc2V0SHJlZiIsImdldFN0YXRlIiwiaXNBY3RpdmVTdGF0ZSIsImluQWN0aXZlU3RhdGUiLCJocmVmIiwiY3JlYXRlU3RhdGVVcmwiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInN0eWxlIiwidmFsdWVLZXkiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiTG9vcCIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yRWwiLCJyZXNldCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIl9faXRlcmF0b3IiLCJfX3ZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIm1hc2siLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIl9faW5kZXgiLCJfX2tleSIsIl9faGFzaCIsIml0ZXJhdG9yIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJzZXRWYWx1ZSIsIl9fcHJvbWlzZXMiLCJjbG9uZU5vZGUiLCJhIiwiYiIsImxvb3AiLCJpdGVyYXRlIiwib25PdXQiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJzZXRSZWNyZWF0aW9uIiwic2V0SXMiLCJjb21waWxhdGlvbiIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRQcm9wZXJ0eSIsImVtcHR5IiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvblN0YXJ0IiwieGhyIiwib25Mb2FkIiwib25FcnJvciIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwidXJsQXR0cmlidXRlIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJwcmV2IiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInRyYW5zaXRpb24iLCJsb2FkIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsImV4aXN0cyIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJnZXRDb250ZW50Iiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwiZGVjb2RlSHRtbEVudGl0aWVzIiwic2V0U2VsZWN0ZWQiLCJkZWJvdW5jZUludGVydmFsIiwiZGVib3VuY2UiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXREZWJvdW5jZSIsImludGVydmFsIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJibHVyIiwiZm9yY2UiLCJfX3JlbW92ZWQiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsIl9fcHJlcGFyZUF0dHJpYnV0ZU91dCIsIl9fZWwiLCJzdHJpY3QiLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwiZ2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3Vic3RyaW5nIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJqc29uIiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwicGFyYW1zVG9RdWVyeSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQ2FjaGVIYXNoIiwidXNlciIsInBhc3N3b3JkIiwiX2NhY2hlIiwiZ2V0Q2FjaGUiLCJjcmVhdGVkQXQiLCJ0cmFuc2Zvcm1BZnRlciIsIm9wZW4iLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVyS2V5cyIsInNldFJlcXVlc3RIZWFkZXIiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZVhNTCIsInJlc3BvbnNlVVJMIiwibWF0Y2giLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwic2VwIiwiZXEiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInYiLCJvcHQiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsIlRyYW5zaXRpb24iLCJwcmV2aW91cyIsInJvdXRlcyIsInN0YXRlcyIsIl9fZmluaXNoZWQiLCJyZWRpcmVjdCIsInJvdXRlIiwiaGFzU3RhdGUiLCJwYXJhbUtleXMiLCJmdWxsUGF0dGVybiIsIl9fcGFyYW1SZWdleCIsImYiLCJxdWVyeUtleXMiLCJ3YXRjaEhhc2giLCJwcmV2Um91dGUiLCJnZXRSb3V0ZSIsImluY2x1ZGVLZXlzIiwiZmluaXNoIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0IiwiaGFzIiwibWFudWFsIiwicHJlcGFyZVN0YXRlQXJncyIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsImVycm9yIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwicmVwbGFjZVVybCIsInJlcGxhY2VIYXNoVXJsIiwicmVwbGFjZUhpc3RvcnlVcmwiLCJyZXBsYWNlU3RhdGUiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiZW1wdHlIYXNoIiwibmV3QXJncyIsImNyZWF0ZVN0YXRlT2JqZWN0QXJncyIsImNyZWF0ZVN0YXRlSGFzaEFyZ3MiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpbmNsdWRlcyIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwicmVsb2FkIiwicHJldlRyYW5zaXRpb24iLCJzZXRQYXRoIiwicmVhbFVybCIsImlzRGlmZmVyZW50IiwiaXNSb3V0ZUNoYW5nZWQiLCJ0aXRsZSIsImxvYWRlZCIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlcyIsImRlbCIsImV4Y2x1ZGUiLCJpdGVtIiwiZmlsdGVyZWQiLCJvcmRlciIsImFWIiwiYlYiLCJuZXdPYmoiLCJvYmpLZXlzIiwiZXhjbHVkZUtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImlnbm9yZVVuZGVmaW5lZCIsImNsZWFyVW5kZWZpbmVkIiwiYUtleXMiLCJiS2V5cyIsIlN0cmluZyIsImNoYXIiLCJjaGFyQ29kZUF0IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwidGV4dENvbnRlbnQiLCJvYmplY3QiLCJyZWR1Y2UiLCJvIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk1hdGgiLCJyYW5kb20iLCJkZWxheSIsImNsZWFyVGltZW91dCIsIl9fZGVib3VuY2VUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4UUNsRkE7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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VUFBU3ZpQixFQUFULEVBQXdCO0FBQUEsTUFBWHd1QixLQUFXLHVFQUFILENBQUc7O0FBQ3ZDLFNBQU8sWUFBTTtBQUNYQyxpQkFBYXp1QixHQUFHMHVCLGlCQUFoQjtBQUNBMXVCLE9BQUcwdUIsaUJBQUgsR0FBdUIzd0IsV0FBVyxZQUFNO0FBQ3RDaUM7QUFDQXl1QixtQkFBYXp1QixHQUFHMHVCLGlCQUFoQjtBQUNBLGFBQU8xdUIsR0FBRzB1QixpQkFBVjtBQUNELEtBSnNCLEVBSXBCRixLQUpvQixDQUF2QjtBQUtELEdBUEQ7QUFRRCxDQVREOztrQkFXZTN5QixLIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWtpbGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWtpbGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FraWxpLmpzXCIpO1xuIiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5qcyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3ZpZGVvLmpzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbXBvbmVudHMvdHJhY2suanMnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLmpzJztcbmltcG9ydCBPYmplY3RzIGZyb20gJy4vY29tcG9uZW50cy9vYmplY3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgVXJsIGZyb20gJy4vY29tcG9uZW50cy91cmwuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuLyoqXG4gKiBUaGUgZnJhbWV3b3JrIG1haW4gb2JqZWN0XG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZ2V0dGluZy1zdGFydGVkfVxuICovXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5vcHRpb25zID0ge1xuICBkZWJ1ZzogdHJ1ZVxufTtcblxuQWtpbGkuX19pbml0ID0gbnVsbDtcbkFraWxpLl9fcm9vdCA9IG51bGw7XG5Ba2lsaS5fX2NvbXBvbmVudHMgPSB7fTtcbkFraWxpLl9fYWxpYXNlcyA9IHt9O1xuQWtpbGkuX19zY29wZXMgPSB7fTtcbkFraWxpLl9fc3RvcmVMaW5rcyA9IHt9O1xuQWtpbGkuX193aW5kb3cgPSB7fTtcbkFraWxpLl9fdGFncyA9IHt9O1xuQWtpbGkuX19pc29sYXRpb24gPSBudWxsO1xuQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbkFraWxpLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuQWtpbGkuX19yb290T3V0ZXJIVE1MID0gJyc7XG5Ba2lsaS5fX29uRXJyb3IgPSAoKSA9PiBBa2lsaS50cmlnZ2VySW5pdChmYWxzZSk7XG5cbkFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG5dO1xuXG5Ba2lsaS5jb21wb25lbnRzID0ge307XG5Ba2lsaS5zZXJ2aWNlcyA9IHt9O1xuQWtpbGkuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuQWtpbGkuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuQWtpbGkuU2NvcGUgPSBTY29wZTtcbkFraWxpLnV0aWxzID0gdXRpbHM7XG5Ba2lsaS5nbG9iYWxzID0gZ2xvYmFscztcbkFraWxpLmNvbXBvbmVudHMuQSA9IEE7XG5Ba2lsaS5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG5Ba2lsaS5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuQWtpbGkuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG5Ba2lsaS5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG5Ba2lsaS5jb21wb25lbnRzLklmID0gSWY7XG5Ba2lsaS5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuQWtpbGkuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuQWtpbGkuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG5Ba2lsaS5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG5Ba2lsaS5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG5Ba2lsaS5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG5Ba2lsaS5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG5Ba2lsaS5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbkFraWxpLmNvbXBvbmVudHMuU291cmNlID0gU291cmNlO1xuQWtpbGkuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbkFraWxpLmNvbXBvbmVudHMuVHJhY2sgPSBUcmFjaztcbkFraWxpLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuQWtpbGkuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuQWtpbGkuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG5Ba2lsaS5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG5Ba2lsaS5zZXJ2aWNlcy5zdG9yZSA9IHN0b3JlO1xuXG4vKipcbiAqIERlZmluZSB0aGUgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24gKCkge1xuICBmb3IobGV0IGtleSBpbiBnbG9iYWxzKSB7XG4gICAgZGVsZXRlIGdsb2JhbHNba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMudW53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0pO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIEpvaW4gdGhlIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCB0aGUgc2NvcGVcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgaWYgKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc2NvcGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB0aGF0IGlzIHdyYXBwZWQgaW4gdGhlIEFraWxpIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgdGVtcGxhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHRoZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgc3RyID0+ICEhdGhpcy5fX3Njb3Blc1tzdHJdKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgc2NvcGUgY2hhbmdlc1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikgeyBcbiAgaWYgKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHByb3AgPSBwcm9wc1tpXTtcbiAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpOyAgICBcbiAgICBwcm9wLmNvbXBvbmVudC5fX2lzUmVzb2x2ZWQgJiYgcHJvcC5jb21wb25lbnQuX190cmlnZ2VyU3RvcmVBbmRBdHRyKHByb3Aua2V5cyk7XG4gICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHZhbCwgcHJvcC5pc0RlbGV0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCB0aGUgZXZhbHVhdGlvbiBpbnNpZGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSBvbmx5IHRoZSByb290IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLndyYXBwaW5nID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmKHRoaXMuX193cmFwcGluZykge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIFxuICB0aGlzLl9fd3JhcHBpbmcgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTsgIFxuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgdGhlIGlzb2xhdGlvbiBpbnNpZGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgaWYod2luZG93LkFLSUxJX1NTUikge1xuICAgIGNvbnN0IGFyciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnW25vLXNzcl0nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBhcnJbaV0ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gZWwgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTsgICAgXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7ICAgIFxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQuXG4gKiBPciBnZXQgaXQgaWYgdGhlIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG4gIFxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1ZykgeyAgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzLlxuICogT3IgZ2V0IGl0IGlmIHRoZSBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS5yZW1vdmVBbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmICh0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgXG4gIGlmKCF3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG4gIH0gIFxufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBnbG9iYWxzXG4gKi9cbkFraWxpLmlzb2xhdGVHbG9iYWxzID0gZnVuY3Rpb24gKCkgeyAgXG4gIGdsb2JhbHMuX190YXJnZXQudXRpbHMgPSB0aGlzLndyYXAodXRpbHMpOyBcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgaWYod2luZG93LkFLSUxJX1NTUikge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuICAgIFxuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0gICAgXG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZiAobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYXJnc1sxXSA9IGxpc3RlbmVyLmZuO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB3aXRoIHRoZSBpc29sYXRpb24gY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighY2FsbGJhY2suX19pc29sYXRlZCkge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3NbaW5kZXhdLCAnX19pc29sYXRlZCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBvYmplY3QvZnVuY3Rpb24gdG8gaXNvbGF0ZSBhbmQgdW5ldmFsdWF0ZSBkYXRhXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqL1xuQWtpbGkud3JhcCA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3VycmVudCA9IG9iajtcblxuICBpZih0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicpIHtcbiAgICBvYmogPSB0aGlzLndyYXBGdW5jdGlvbihvYmosIG9wdGlvbnMpO1xuXG4gICAgaWYob2JqID09PSBjdXJyZW50KSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuXG4gIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG5cbiAgICBpZighZGVzY3JpcHRvci5jb25maWd1cmFibGUgfHwgIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMucmV2ZXJzZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IG9ialtrZXldLl9fYWtpbGkgfHwgb2JqW2tleV0gfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IHRoaXMud3JhcChvYmpba2V5XSwgb3B0aW9ucykgfSk7XG4gIH0gXG4gIFxuICByZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBVbndyYXAgdGhlIG9iamVjdC9mdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqL1xuQWtpbGkudW53cmFwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy53cmFwKG9iaiwgeyByZXZlcnNlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY29uc3QgYWtpbGlXcmFwcGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYob3B0aW9ucy50YWcgJiYgQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICBBa2lsaS5hZGRUYWcob3B0aW9ucy50YWcsIEFraWxpLl9fZXZhbHVhdGlvbi5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkud3JhcHBpbmcoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmbik7XG4gIGFraWxpV3JhcHBlZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBha2lsaVdyYXBwZWRGdW5jdGlvbltrZXldID0gZm5ba2V5XTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShha2lsaVdyYXBwZWRGdW5jdGlvbiwgJ19fYWtpbGknLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZuXG4gIH0pO1xuXG4gIHJldHVybiBha2lsaVdyYXBwZWRGdW5jdGlvbjtcbn07XG5cbi8qKlxuICogQWRkIHRoZSB0YWdcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cbkFraWxpLmFkZFRhZyA9IGZ1bmN0aW9uICh0YWcsIG5vZGUpIHtcbiAgaWYodGhpcy5oYXNUYWcodGFnLCBub2RlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0gPSB7fTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSA9IFtdOyAgICBcbiAgfVxuXG4gIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddLnB1c2goeyBub2RlIH0pO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB0YWcgZXhpc3RzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuQWtpbGkuaGFzVGFnID0gZnVuY3Rpb24odGFnLCBub2RlKSB7XG4gIGlmKCFub2RlKXtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAgICBcbiAgfSBcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RhZ11cbiAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXG4gKi9cbkFraWxpLnJlbW92ZVRhZyA9IGZ1bmN0aW9uICh0YWcsIG5vZGUpIHtcbiAgaWYodHlwZW9mIHRhZyA9PSAnb2JqZWN0Jykge1xuICAgIG5vZGUgPSB0YWc7XG4gICAgdGFnID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYoIXRhZykgeyBcbiAgICBkZWxldGUgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFub2RlKSB7XG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICAgIGZvcihsZXQgayBpbiB0aGlzLl9fdGFnc1trZXldKSB7XG4gICAgICAgIGlmKGsgPT0gdGFnKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX190YWdzW2tleV1ba11cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlmKCFPYmplY3Qua2V5cyh0aGlzLl9fdGFnc1trZXldKS5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX190YWdzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuOyAgICBcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIGlmKGtleSA9PSB0YWcpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1ba2V5XTtcbiAgICB9XG4gIH1cblxuICBpZighT2JqZWN0LmtleXModGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKS5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdO1xuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHRhZyBleHByZXNzaW9uc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKi9cbkFraWxpLnRyaWdnZXJUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgIGlmKGsgPT0gdGFnKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuX190YWdzW2tleV1ba107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBvYmogPSBhcnJbaV07XG4gICAgICAgICAgb2JqLm5vZGUuX19jb21wb25lbnQuX19ldmFsdWF0ZU5vZGUob2JqLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZSB0aGUgZXJyb3JzXG4gKi9cbkFraWxpLmhhbmRsZUVycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIHRoZSBpbml0aWFsaXphdGlvbiBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICovXG5Ba2lsaS50cmlnZ2VySW5pdCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbiAocm9vdCkgeyBcbiAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcbiAgdGhpcy5fX3Jvb3RPdXRlckhUTUwgPSByb290Lm91dGVySFRNTDtcblxuICBpZighKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm9vdCBlbGVtZW50IG11c3QgYmUgYW4gaHRtbCBlbGVtZW50YCk7XG4gIH1cblxuICBpZihyb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiaHRtbFwiIGNhbid0IGJlIHRoZSByb290IGVsZW1lbnRgKTtcbiAgfVxuXG4gIHRoaXMuX19yb290ID0gcm9vdDtcbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHsgICAgXG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sKHdpbmRvdy5BS0lMSV9TRVJWRVIuaHRtbCk7XG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUod2luZG93LkFLSUxJX1NFUlZFUi5yZXF1ZXN0Q2FjaGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgPSB7XG4gICAgICBodG1sOiB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCgpXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZiAocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSh7IGluaXQ6IHRydWUgfSk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbiAoKSB7IFxuICB0aGlzLl9fcm9vdCAmJiAodGhpcy5fX3Jvb3Qub3V0ZXJIVE1MID0gdGhpcy5fX3Jvb3RPdXRlckhUTUwpO1xuXG4gIGZvcihsZXQga2V5IGluIHRoaXMuX19zY29wZXMpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLl9fc2NvcGVzW2tleV0uX19jb21wb25lbnQ7XG4gICAgY29tcG9uZW50ICYmIGNvbXBvbmVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHRoaXMuX19yb290T3V0ZXJIVE1MID0gJyc7XG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX3Jvb3QgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzID0ge307XG4gIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gIHRoaXMuX190YWdzID0ge307XG59O1xuXG4vKipcbiAqIERlc3Ryb3kgdGhlIGZyYW1ld29ya1xuICovXG5Ba2lsaS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRlaW5pdCgpOyAgXG4gIHRoaXMuY2xlYXJHbG9iYWxzKCk7XG5cbiAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGVsZXRlIHN0b3JlLl9fdGFyZ2V0W3N0b3JlS2V5c1tpXV07XG4gIH1cblxuICByb3V0ZXIuX19pbml0ICYmIHJvdXRlci5kZWluaXQoKTtcbiAgZGVsZXRlIHdpbmRvdy5BS0lMSV9TRVJWRVI7XG4gIGRlbGV0ZSB3aW5kb3cuQUtJTElfQ0xJRU5UO1xuICBkZWxldGUgd2luZG93LkFLSUxJX1NTUjtcblxuICBmb3IobGV0IGtleSBpbiBBa2lsaSkge1xuICAgIGRlbGV0ZSBBa2lsaVtrZXldO1xuICB9XG5cbiAgZGVsZXRlIHdpbmRvdy5Ba2lsaTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBTU1IgaHRtbFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoaHRtbCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5fX3Jvb3QuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgdGhpcy5fX3Jvb3QucmVtb3ZlQXR0cmlidXRlKHRoaXMuX19yb290LmF0dHJpYnV0ZXNbaV0ubmFtZSk7XG4gIH1cblxuICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgbGV0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IodGhpcy5fX3Jvb3QgPT09IGRvY3VtZW50LmJvZHk/ICdib2R5JzogJ2JvZHkgPiAqJyk7ICAgIFxuICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XG5cbiAgZm9yIChsZXQgaSA9IGVsLmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG4gICAgdGhpcy5fX3Jvb3Quc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gIH0gIFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIFNTUiBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBTU1IgaHRtbFxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fcm9vdC5vdXRlckhUTUw7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgU1NSIGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuaGFuZGxlRXJyb3JzKCk7XG5Ba2lsaS5pc29sYXRlR2xvYmFscygpOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZScsICduby1zc3InXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZyb20gd2hpY2ggYWxsIGNvbXBvbmVudHMgYXJlIGluaGVyaXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDsgIFxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFt2YXJzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIHZhcmlhYmxlcyA9IHt9KSB7XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gdXRpbHMuc3BsaXQoZXhwcmVzc2lvbiwgJzsnLCBbJ1wiJywgXCInXCIsICdgJ10pOyAgXG4gICAgZXhwc1tleHBzLmxlbmd0aCAtIDFdID0gYHJldHVybiAke2V4cHNbZXhwcy5sZW5ndGggLSAxXX1gO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHZhcmlhYmxlcykge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB2YXJzLnB1c2godmFyaWFibGVzW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIC8qKiBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV0gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIGlmICghKGVsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhbiBodG1sIGVsZW1lbnQgdG8gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvcmApO1xuICAgIH1cblxuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVTdG9yZUtleXMgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJLZXlzID0ge307XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fY29udGVudCA9ICcnO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIGNoZWNrQ2hhbmdlczogZmFsc2UsIFxuICAgICAgc2V0RXZlbnRzOiB0cnVlLFxuICAgICAgc2V0UGFyZW50czogdHJ1ZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHJlY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIC4uLnRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKSxcbiAgICAgIHNldEV2ZW50czogZmFsc2UsXG4gICAgICBzZXRQYXJlbnRzOiBmYWxzZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG4gXG4gIC8qKlxuICAgKiBSZWNvbXBpbGUgdGhlIGNvbXBvbmVudFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZShvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gdHJ1ZTsgXG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB7fTsgIFxuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyk7ICAgIFxuICAgIHRoaXMuX19jb21waWxpbmcuc2V0RXZlbnRzICYmIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldFBhcmVudHMgJiYgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEJvb2xlYW5BdHRyaWJ1dGVzICYmIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuZGVmaW5lQXR0cmlidXRlcyAmJiB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCk7IFxuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTsgXG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycykpOyAgXG4gIH1cblxuICAvKipcbiAgICogQ29tcGlsZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGlvblBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0aW9uUGFyZW50Ll9fYWtpbGk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzICYmIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KSkgeyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVOb2RlKGNoaWxkLCB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2UpOyAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07ICAgIFxuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDsgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlc29sdmVkKCkpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9faXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7ICAgIFxuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpOyAgICAgXG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTsgICAgXG4gICAgdGhpcy5zY29wZSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IGVsID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYgKCF0aGlzLmVsLmhhc0F0dHJpYnV0ZShldikpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoZXYsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRpb25QYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmICghcGFyZW50Ll9fYWtpbGkuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgICAgZXZhbHVhdGlvblBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRpb25QYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGlvblBhcmVudCA9IGV2YWx1YXRpb25QYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGlvblBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSB0aGUgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwYXJzZWQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgbmVlZCBvZiB0aGUgYXZhbHVhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgbm9kZSBwcm9wZXJ0aWVzIGNoYW5nZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICFub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlIHRoZSBub2RlIHByb3BlcnR5IHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcCBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUsIG9wdGlvbnMgPSB7fSkgeyAgXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhcmUodXRpbHMuY3JlYXRlSGFzaCh2YWx1ZSksIHByb3AuaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4Y2VwdGlvbiBtZXNzYWdlXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVyciBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycikge1xuICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgIGxldCBhdHRyTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgYXR0cmlidXRlTmFtZSA9IChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyBub2RlLm5hbWUudG9Mb3dlckNhc2UoKTogJyc7ICAgICAgICBcbiAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgXTtcbiAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbYFtlbGVtZW50ICR7ZWxlbWVudE5hbWV9XWAsIGBbY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX1dYF0pO1xuICAgIHJldHVybiBgRXhwcmVzc2lvbiBlcnJvcjogYCArIG1lc3NhZ2VzLmpvaW4oJ1xcblxcdGF0ICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuICAgIGNvbnN0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoY29tID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4geyAgICAgXG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJlbnRCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkgeyAgICAgICAgXG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZShldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSwgeyAuLi5nbG9iYWxzIH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICAgbGV0IHBhcmVudHNIYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLnBhcmVudHMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgICAgIFxuXG4gICAgICAgIGlmIChwYXJlbnRWYWx1ZSAmJiB0eXBlb2YgcGFyZW50VmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPT0gNTApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICBgRm9yIGhpZ2hlciBwZXJmb3JtYW5jZSwgZG9uJ3QgbG9vcCBQcm94eSBhcnJheXMvb2JqZWN0cyBpbnNpZGUgZXhwcmVzc2lvbiBmdW5jdGlvbnMsIG9yIHVzZSBBa2lsaS51bmV2YWx1YXRlKCkgdG8gd3JhcCB5b3UgY29kZS5gLFxuICAgICAgICAgICAgICBgJHsgbm9kZS5fX2V4cHJlc3Npb24udHJpbSgpIH1gLFxuICAgICAgICAgICAgICBgc2NvcGUgcHJvcGVydHkgXCIkeyBkYXRhLnBhcmVudHMuam9pbignLicpIH1cImBcbiAgICAgICAgICAgIF0uam9pbignXFxuXFx0YXQgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAhcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdPyBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPSAxOiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0rKztcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgPT09IGRhdGEucmVhbENvbXBvbmVudFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAgXG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCBkYXRhLmV2YWx1YXRlZCk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZXMsIGNvdW50ZXIsIGV4cHJlc3Npb24sIGF0dHJpYnV0ZVZhbHVlIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgbm9kZSBhbmQgc2V0IHRoZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGtleXMsIGV2YWx1YXRlZCkge1xuICAgIGxldCBiaW5kID0gdGhpcy5fX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKTtcbiAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgaWYgKCFiaW5kKSB7XG4gICAgICB0aGlzLl9fYmluZChrZXlzLCB7IG5vZGUgfSk7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgICAgZGF0YSA9IGJpbmQ/IChiaW5kLl9fZGF0YSB8fCBbXSk6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBjb21wb25lbnQuX19nZXRBbGxCaW5kcyhwcm9wLmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgY29uc3QgYmluZCA9IGRhdGFba107ICAgXG5cbiAgICAgICAgICBpZighYmluZCB8fCAhYmluZC5ub2RlIHx8ICFiaW5kLm5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSBlbGVtZW50cyA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyAoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7ICAgICBcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuICAgICAgICBcbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzLCBmYWxzZSk7XG5cbiAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IC4uLmdsb2JhbHMsICBldmVudDogZSB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gZXZhbHVhdGU7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIG5vZGUgZXhwcmVzc2lvbiB3aXRoIGNoZWNrXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2sgPSB0cnVlKSB7XG4gICAgY29uc3Qga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJzsgIFxuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7IFxuICAgICAgY29uc3QgeyByZXMsIGF0dHJpYnV0ZVZhbHVlLCBleHByZXNzaW9uLCBjb3VudGVyIH0gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG4gIFxuICAgICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgICBjb25zdCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgXG4gICAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICAgIH0gICAgICAgICAgXG4gIFxuICAgICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICAgdmFsdWUgPSBjb21wb25lbnQuX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciByZWNlaXZpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3Igc2VuZGluZ1xuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlT3V0KG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmICghbm9kZSB8fCBzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpOyAgICBcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKG5vZGUuX19pc0V2ZW50KSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBub2RlLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICBlbWl0dGVyLmJpbmQoZSA9PiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1t1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2hlY2sgPSB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2U7XG4gICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdHRyID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyO1xuICAgIGNvbnN0IHZhbCA9IG5vZGVbaXNBdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgY29uc3QgaGFzQmluZGluZ3MgPSBldmFsdWF0aW9uUmVnZXgudGVzdCh2YWwudHJpbSgpKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSBpc0F0dHI/IC9eYm9vbGVhbi0vaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcbiAgICBjb25zdCBpc0V2ZW50ID0gaXNBdHRyPyAvXm9uLSguKykvaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcblxuICAgIGlmKCFlbC5fX2FraWxpICYmICFoYXNCaW5kaW5ncyAmJiAhaXNCb29sZWFuICYmICFpc0V2ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX25hbWUgPSB0aGlzLl9fc2NvcGUuX19uYW1lICsgdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2KTtcbiAgICBub2RlLl9faXNFdmVudCA9IGlzRXZlbnQ7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZ3M7XG4gICAgbm9kZS5fX2lzQm9vbGVhbiA9IGlzQm9vbGVhbjtcbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbDtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsOyAgICBcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVpbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVpbml0aWFsaXplTm9kZShub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZighbm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzICYmICFvcHRpb25zLnNhdmVCaW5kaW5ncykgeyBcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGUpOyAgICAgXG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZSk7ICAgIFxuICAgIH1cbiAgICBcbiAgICBBa2lsaS5yZW1vdmVUYWcobm9kZSk7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9fbmFtZTtcbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faXNCb29sZWFuO1xuICAgIGRlbGV0ZSBub2RlLl9faXNFdmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50OyAgICBcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDsgICAgXG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgdGhlIGVsZW1lbnQgYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiB0aGUgbm9kZSBoYXMgbGluayB3aXRoIHRoZSBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGF0dHJpYnV0ZXMgYXMgYSBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBvYmplY3QgdG8gYSBwcm94eVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYgKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIHN0b3JlIGFuZCB0aGUgYXR0cmlidXRlcyBjaGFuZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50S2V5cyA9IGtleXMuc2xpY2UoMCwgbCAtIGkpO1xuICAgICAgY29uc3QgY3VycmVudEtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhjdXJyZW50S2V5cyk7XG4gICAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhjdXJyZW50S2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgICAgaWYgKHRoaXMuX19zdG9yZUxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7ICBcbiAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19hdHRyTGlua3NbY3VycmVudEtleVN0cmluZ10pIHtcbiAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGN1cnJlbnRLZXlzLCB2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdG9yZSBvZiB0aGUgZGlzYWJsZW1lbnQgdHlwZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgcHJveHk6ICdfX2Rpc2FibGVQcm94eScsXG4gICAgICBzdG9yZTogJ19fZGlzYWJsZVN0b3JlS2V5cycsXG4gICAgICBhdHRyOiAnX19kaXNhYmxlQXR0cktleXMnXG4gICAgfSlbdHlwZV07XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5JykgeyAgICBcbiAgICB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBkZWxldGUgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpO1xuICAgIHJldHVybiB0aGlzW3N0b3JlXS5fX2FsbD8gdHJ1ZTogdGhpc1tzdG9yZV1bdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7IFxuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnc3RvcmUnKSkgeyAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgY29uc3QgcCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICBcbiAgICAgIFxuICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcC5wdXNoKHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSkpOyAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgbGV0IGxpbmtzID0gKEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KEFraWxpLl9fc3RvcmVMaW5rc1snKiddIHx8IFtdKTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbGluay5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwoY29tcG9uZW50LCB2YWx1ZSwgbmFtZSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5nZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCBjb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7ICAgXG4gICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgIH0gIFxuICAgIH0pOyAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JoZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBnZXQ6IHRydWUsIHNldDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmdldCAmJiAhb3B0aW9ucy5zZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgYXQgbGVhc3QgXCJnZXRcIiBvciBcInNldFwiIG9wdGlvbiBhcyB0cnVlYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgKHN0b3JlLmhhc093blByb3BlcnR5KG5hbWUpIHx8ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHN0b3JlW25hbWVdKTtcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBpbmZvO1xuXG4gICAgaWYgKCF0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuc2V0ID0gb3B0aW9ucy5zZXQ7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGluZm8gPSB7IGNvbXBvbmVudDogdGhpcywgbmFtZSwga2V5cywga2V5U3RyaW5nLCBkYXRlOiBEYXRlLm5vdygpLCBzZXQ6IG9wdGlvbnMuc2V0LCBnZXQ6IG9wdGlvbnMuZ2V0IH07XG4gICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXS5wdXNoKGluZm8pO1xuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKGluZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IHN0b3JlS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHN0b3JlLl9fdGFyZ2V0W2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIGtleSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ2F0dHInKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcbiAgIFxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuXG4gICAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxpbmsuc2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGV2ID0gJ29uJyArIHV0aWxzLmNhcGl0YWxpemUobGluay5uYW1lKTtcbiAgICAgICAgdGhpcy5hdHRyc1tldl0gJiYgdGhpcy5hdHRyc1tldl0udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBsaW5rcyA9ICh0aGlzLl9fYXR0ckxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQodGhpcy5fX2F0dHJMaW5rc1snKiddIHx8IFtdKTtcbiAgICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICBcbiAgICBcbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgICBcblxuICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdXRpbHMudG9EYXNoQ2FzZShuYW1lKSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoIWxpbmsuZ2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIHRoaXMuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSAgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0ckJ5S2V5cyhuYW1lLCBrZXlzLCBvcHRpb25zID0ge30pIHsgICBcbiAgICBvcHRpb25zID0geyBnZXQ6IHRydWUsIHNldDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgICh0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpIHx8ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHRoaXMuYXR0cnNbbmFtZV0pOyBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuc2V0ID0gb3B0aW9ucy5zZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nLCBkYXRlOiBEYXRlLm5vdygpLCBzZXQ6IG9wdGlvbnMuc2V0LCBnZXQ6IG9wdGlvbnMuZ2V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDsgICAgXG5cbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdLnB1c2goeyBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IGF0dHJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX19hdHRycykuZmlsdGVyKGsgPT4gISh0aGlzLl9fYXR0cnNba10gaW5zdGFuY2VvZiBBa2lsaS5FdmVudEVtaXR0ZXIpKTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXR0cnNLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gYXR0cnNLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5fX2F0dHJzW2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIHV0aWxzLnRvRGFzaENhc2Uoa2V5KSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBhdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgY29uc3QgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgb2YgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXRLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YXJnZXRLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgICAgY29uc3QgayA9IHRhcmdldEtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGNvbnN0IGlzb2xhdGlvbkhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byB0aGUgYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCByZWFsQ29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgdGhlIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBiaW5kaW5nIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuZXN0ZWQgYmluZGluZ3MgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqL1xuICBfX2dldEFsbEJpbmRzKGtleXMpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgY29uc3QgY29sbGVjdCA9IG9iaiA9PiB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQob2JqLl9fZGF0YSB8fCBbXSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSB8fCBrZXkgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3Qob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3Qocm9vdCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgYmluZGluZyBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBjb25zdCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGNvbnN0IGhhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmhhc2ggPSBoYXNoO1xuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuICAgIFxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhhc2gsXG4gICAgICBub2RlLFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgY29uc3QgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19tYXBOb2Rlcyhmbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgcm9vdEF0dHJzOiB0cnVlLCBhdHRyczogdHJ1ZSwgbm9kZTogdHJ1ZSwgZWw6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGZpbmQgPSBlbCA9PiB7XG4gICAgICBpZighZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmF0dHJzICYmIChlbCAhPT0gdGhpcy5lbCB8fCBvcHRpb25zLnJvb3RBdHRycykpIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGZuKGF0dHJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBub2RlID0gZWwuY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgb3B0aW9ucy5ub2RlICYmIGZuKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT0gMSAmJiAhbm9kZS5fX2FraWxpKSB7XG4gICAgICAgICAgZmluZChub2RlKTtcbiAgICAgICAgICBvcHRpb25zLmVsICYmIGZuKG5vZGUpOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZmluZCh0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5vZGVzXG4gICAqIFxuICAgKiBAcmV0dXJucyB7Tm9kZVtdfVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKi9cbiAgX19nZXRBbGxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IG5vZGVzLnB1c2gobm9kZSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgLyoqXG4gICAqIEJpbmQgdGhlIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgdmFsdWUgPT4ge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBub2RlcyBpbnN0YW5jZW9mIE5vZGUgJiYgKG5vZGVzID0gW25vZGVzXSk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBjID0ga2V5cy5sZW5ndGg7IGogPCBjOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgIFxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBiaW5kLm5vZGU7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcmVudCAmJiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwYXJlbnQgYmluZGluZ3Mgd2l0aCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZXxOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpIHsgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX19wYXJlbnRzW2ldOyAgICAgIFxuICAgICAgcGFyZW50ICYmIHBhcmVudC5fX2FraWxpICYmIHBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IHRoZSBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtOb2RlW119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pOyBcbiAgICB0aGlzLnJlbW92ZWQoKTtcbiAgICBjb25zdCBkZXRhY2hOb2RlcyA9IHRoaXMuX19kZXRhY2goeyBzYXZlQmluZGluZ3M6IHRydWUsIGRlaW5pdGlhbGl6ZU5vZGVzOiB0cnVlIH0pO1xuICAgIGNvbnN0IG5vZGVzID0gW10uY29uY2F0KGRldGFjaE5vZGVzLCB0aGlzLl9fZW1wdHkoeyBzYXZlQmluZGluZ3M6IHRydWUgfSkpOyBcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2RlcyhkZXRhY2hOb2Rlcyk7XG4gICAgIW9wdGlvbnMuc2F2ZUJpbmRpbmdzICYmIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7ICAgIFxuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTsgIFxuICAgIHRoaXMuX19zY29wZS5fX3JlbW92ZSgpO1xuICAgIGRlbGV0ZSB0aGlzLl9fc2NvcGU7XG4gICAgZGVsZXRlIHRoaXMuc2NvcGU7IFxuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgZGVsZXRlIHRoaXMuZWwuX19ha2lsaTtcbiAgICBkZWxldGUgdGhpcy5lbDsgICAgXG4gICAgZGVsZXRlIHRoaXMuX19wYXJlbnQ7ICAgIFxuICAgIGRlbGV0ZSB0aGlzLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50O1xuICAgIGRlbGV0ZSB0aGlzLl9fZXZhbHVhdGlvblBhcmVudDsgICBcbiAgICBkZWxldGUgdGhpcy5fX3BhcmVudHM7XG4gICAgZGVsZXRlIHRoaXMuX19hdHRycztcbiAgICBkZWxldGUgdGhpcy5hdHRyczsgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG4gICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKG9wdGlvbnMpKTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5hdHRyaWJ1dGVzW2ldO1xuXG4gICAgICBpZihub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgb3B0aW9ucy5kZWluaXRpYWxpemVOb2RlcyAmJiB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlLCB7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAhb3B0aW9ucy5zYXZlQmluZGluZ3MgJiYgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eShvcHRpb25zID0ge30pIHsgICAgXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7XG4gICAgXG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4geyAgICAgIFxuICAgICAgaWYobm9kZS5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pOyAgXG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH0sIHsgcm9vdEF0dHJzOiBmYWxzZSB9KTtcblxuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcblxuICAgICFvcHRpb25zLnNhdmVCaW5kaW5ncyAmJiB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSBwYXJlbnQgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gY2hpbGRyZW4gPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBsaW5rIHdpdGggdGhlIHN0b3JlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwic3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19zdG9yZUJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19zdG9yZUJ5S2V5cyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgbGVmdGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgcmlnaHQgY29tcG9uZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7ICAgXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IHNldFBhcmVudHM6IHRydWUsIGNoZWNrQ2hhbmdlczogZmFsc2UgfSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIGNvbXBvbmVudCBidXQgcHJldmVudCB0aGUgY29tcGlsYXRpb24gaW5zaWRlXG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZWxlbWVudCBjb250ZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3JlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG5cbiAgZ2V0IHRyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gfHwgbnVsbDtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsaW5rcy5cbiAqIEl0IHdvcmtzIHdpdGggcm91dGVyIGFzIHdlbGwuIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnb1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIHRvIGdvIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqIEBhdHRyIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcGFyYW1zfVxuICogQGF0dHIge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcXVlcnl9XG4gKiBAYXR0ciB7c3RyaW5nfSBbaGFzaF0gLSBoYXNoIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfaGFzaH1cbiAqIEBhdHRyIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19yb3V0ZXIubG9jYXRpb259XG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdCBcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaW5BY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBwYXJ0IG9mIHRoZSBhY3RpdmUgc3RhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aXRoIHRoZSBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEB0YWcgY29udGVudFxuICogQHNlbGVjdG9yIGNvbnRlbnQsW2NvbnRlbnRlZGl0YWJsZV1cbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQGF0dHIge2Jvb2xlYW59IFtlZGl0YWJsZV0gLSBlZGl0YWJsZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVtYmVkIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgZW1iZWRcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGZvclxuICogQHNlbGVjdG9yIGZvcltpbl0sb2xbaW5dLHVsW2luXSx0aGVhZFtpbl0sdGJvZHlbaW5dLHRmb290W2luXVxuICogQGF0dHIge29iamVjdHxhcnJheX0gaW4gLSBkYXRhIHRvIGNyZWF0ZSB0aGUgbG9vcFxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gb3V0IC0gc2VudCBvbiB0aGUgZGF0YSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ291dCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCB0aGlzLkxvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIHRoaXMuTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yRWwgPSBudWxsO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICBcbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5fX3ByZXBhcmVBdHRyaWJ1dGVJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBub2RlID0gcHJvcC5ub2RlO1xuXG4gICAgaWYoKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5uYW1lID09ICdpbicgJiYgcHJvcC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN1cGVyLl9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkgeyAgICBcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhdyk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHN1cGVyLnJlbW92ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLml0ZXJhdG9yRWwgJiYgdGhpcy5pdGVyYXRvckVsLnJlbW92ZSgpO1xuICAgIGRlbGV0ZSB0aGlzLmh0bWw7XG4gICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzO1xuICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yRWw7IFxuICAgIGRlbGV0ZSB0aGlzLl9faXRlcmF0b3I7XG4gICAgZGVsZXRlIHRoaXMuX192YWx1ZTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvckVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoZWwub3V0ZXJIVE1MKTtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudChodG1sKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2hhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07ICAgICAgICBcbiAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRoaXMuX19pbmRleCA9PT0gaXRlcmF0b3IuaW5kZXgpOyAgICAgXG4gICAgICBpdGVyYXRvci5zZXRLZXkodGhpcy5fX2tleSA9PT0gaXRlcmF0b3Iua2V5KTtcbiAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHV0aWxzLmNvbXBhcmUodGhpcy5fX2hhc2gsIGl0ZXJhdG9yLmhhc2gpKTtcbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgXG4gICAgICAgIHJlY29tcGlsZTogeyBcbiAgICAgICAgICBjaGVja0NoYW5nZXM6IHRydWVcbiAgICAgICAgfSBcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5pdGVyYXRvckVsLmNsb25lTm9kZSgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwuY2hpbGRyZW4pOyBcbiAgICB0aGlzLml0ZXJhdG9ycy5zb3J0KChhLCBiKSA9PiBjaGlsZHJlbi5pbmRleE9mKGEuZWwpIC0gY2hpbGRyZW4uaW5kZXhPZihiLmVsKSk7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnNvcnQoKGEsIGIpID0+IGNoaWxkcmVuLmluZGV4T2YoYSkgLSBjaGlsZHJlbi5pbmRleE9mKGIpKTtcbiAgICBjb25zdCBsb29wID0gKGtleSwgdmFsdWUsIGluZGV4KSA9PiB0aGlzLmxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpLml0ZXJhdGUoaW5kZXgpO1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yIChsZXQgbCA9IGRhdGEubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgbG9vcChrZXksIGRhdGFba2V5XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19yZW1vdmUoKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2hhc2ggPSAnJztcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgfSAgXG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgbG9vcFxuICogQHNlbGVjdG9yIGxvb3AsdHJcbiAqIEBhdHRyIEBzZWUgRm9yXG4gKiBAc2NvcGUgeyp9IGxvb3BWYWx1ZSAtIGRhdGEgaXRlbSdzIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBcbiAqIEBzY29wZSB7c3RyaW5nfG51bWJlcn0gbG9vcEtleSAtIGtleSBvZiB0aGUgaXRlcmF0aW9uXG4gKiBAc2NvcGUge251bWJlcn0gbG9vcEluZGV4IC0gaW5kZXggb2YgdGhlIGl0ZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG5cbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgc3VwZXIucmVtb3ZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGRlbGV0ZSB0aGlzLmZvcjtcbiAgICBkZWxldGUgdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHNldEluZGV4KHRhcmdldCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgsIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0S2V5KHRhcmdldCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldFZhbHVlKHRhcmdldCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHRydWUsIHRhcmdldCk7XG4gICAgdGhpcy5oYXNoID0gdGhpcy5mb3IuX19oYXNoO1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBpZlxuICogQHNlbGVjdG9yIGlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIC0gc2hvdyB0aGUgZWxlbWVudCBjb250ZW50IG9yIG5vdFxuICogQGF0dHIge2Jvb2xlYW59IHJlY3JlYXRlIC0gZGVsZXRlIHRoZSBjb250ZW50IGFuZCByZWNyZWF0ZSBvciBqdXN0IHNob3cvaGlkZSBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdGhpcy5zZXRJcyk7XG4gIH1cblxuICBzZXRJcyh2YWwpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWw7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpOyAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiAgcmVzdWx0KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXMgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGlmICh0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIHRoaXMuZGlzcGxheSwgJ2ltcG9ydGFudCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgICBcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlLWlmXG4gKiBAc2VsZWN0b3IgZWxzZS1pZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyBAc2VlIElmXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlOyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGlmcmFtZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpZnJhbWVcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaW1hZ2VzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaW1nXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogeGhyID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggaW5wdXQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY2hlY2tib3hfYW5kX3JhZGlvfVxuICogXG4gKiBAdGFnIGlucHV0XG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXS5jb25jYXQoVGV4dC5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChUZXh0LmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJzsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5hdHRyKCdjaGVja2VkJywgdGhpcy5zZXRDaGVja2VkKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSAgXG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBcbiAgICBpZiAodGhpcy5lbC5jaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBvYmplY3QgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBvYmplY3RcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdHMgZXh0ZW5kcyBVcmwgeyAgXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ2RhdGEnO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29iamVjdCcsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpb1xuICogQHNlbGVjdG9yIHJhZGlvW25hbWVdXG4gKiBAYXR0ciB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZ3JvdXBcbiAqIEBhdHRyIHtzdHJpbmd8bnVsbH0gdmFsdWUgLSBzZWxlY3RlZCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICogQG1lc3NhZ2Uge3N0cmluZ30gcmFkaW8gLSBzZW50IG9uIHZhbHVlIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgdGhpcy5SYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgKCkgPT4gdGhpcy5zZXROYW1lcygpLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCduYW1lJywgdGhpcy5zZXROYW1lcyk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lIHx8IHRoaXMuYXR0cnMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAgaXRlbS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW8tYnV0dG9uXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcm91dGVyIHRlbXBsYXRlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIHJvdXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQgPSB0cnVlKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuXG4gICAgY29uc3QgZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uID0gcGF0aCA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gaHRtbCA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCFsb2FkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn0iLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHNlbGVjdC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3Nfc2VsZWN0fVxuICogXG4gKiBAdGFnIHNlbGVjdCAgXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ10uY29uY2F0KEZvci5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7IFxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCkpO1xuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHV0aWxzLmRlYm91bmNlKCgpID0+IHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pLCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2hpY2ggaGF2ZSBhc3luYyBhdHRyaWJ1dGUgY29udGVudC5cclxuICogXHJcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cclxuICogXHJcbiAqIEB0YWcgdXJsXHJcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufSIsIi8qKlxuICogQ2xhc3MgdG8gd29yayB3aXRoIGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYodGhpcy5fX3JlbW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZih0aGlzLl9fcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgdGhlIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07IFxuICAgIHRoaXMubm9kZS5fX2NvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVPdXQodGhpcy5ub2RlLCBvcHRpb25zLmRldGFpbCk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZWx5XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZW1pdHRlclxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMudW5iaW5kKCk7XG4gICAgZGVsZXRlIHRoaXMubmFtZTtcbiAgICBkZWxldGUgdGhpcy5ub2RlO1xuICAgIGRlbGV0ZSB0aGlzLmNvbXBvbmVudFxuICAgIGRlbGV0ZSB0aGlzLmVsO1xuICAgIHRoaXMuX19yZW1vdmVkID0gdHJ1ZTtcbiAgfVxufSIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuY29uc3Qgb2JqID0ge307XG5cbi8qKlxuICogR2xvYmFscyBpcyBmb3IgdXNpbmcgdGhlIGN1c3RvbSB2YXJpYWJsZXMgaW4gaHRtbFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlI2RvY3NfZ2xvYmFsc31cbiAqL1xuY29uc3QgZ2xvYmFscyA9IG5ldyBQcm94eShvYmosIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZihrZXkgPT0gJ19fdGFyZ2V0Jykge1xuICAgICAgcmV0dXJuIG9ialxuICAgIH0gICBcbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRhcmdldFtrZXldID0gQWtpbGkud3JhcCh2YWx1ZSwgeyB0YWc6IGtleSB9KTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHsgICBcbiAgICBBa2lsaS5yZW1vdmVUYWcoa2V5KTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxzOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZX1cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIGFyZSBub3QgbW9uaXRvcmVkLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNjb3BlIHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0YXJnZXQ/IHRoaXMuX190YXJnZXQ6IHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHNjb3BlXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fbmFtZSk7XG5cbiAgICBmb3IobGV0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3MuXG4gKiBUaGUgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIG1ha2UgcmVxdWVzdHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHN9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgX19jYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yUGF0dGVybjogL15bXjIzXS8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcbiAgICAgICghd2luZG93LkFLSUxJX1NTUiAmJiAhQWtpbGkuX19pbml0KSAmJiAoY2FjaGUgPSB0cnVlKTtcblxuICAgICAgaWYob3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJyAmJiAoIW9wdGlvbnMuYm9keSB8fCB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09ICdzdHJpbmcnKSkge1xuICAgICAgICBoYXNoID0gdGhpcy5jcmVhdGVDYWNoZUhhc2goeyBcbiAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgdXNlcjogb3B0aW9ucy51c2VyLCBcbiAgICAgICAgICBwYXNzd29yZDogb3B0aW9ucy5wYXNzd29yZCwgXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5IFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjYWNoZSAmJiBoYXNoKSB7ICAgICAgICBcbiAgICAgICAgbGV0IF9jYWNoZSA9IHRoaXMuZ2V0Q2FjaGUoaGFzaCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihfY2FjaGUgJiYgKGNhY2hlID09PSB0cnVlIHx8IG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy50cmFuc2Zvcm1BZnRlcihfY2FjaGUucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVhZGVyS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGsgPSBoZWFkZXJLZXlzW2ldO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogeGhyLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHhoci5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUeXBlID09ICd0ZXh0Jz8geGhyLnJlc3BvbnNlVGV4dDogJycsXG4gICAgICAgICAgcmVzcG9uc2VYTUw6IHhoci5yZXNwb25zZVR5cGUgPT0gJ2RvY3VtZW50Jz8geGhyLnJlc3BvbnNlWE1MOiAnJyxcbiAgICAgICAgICByZXNwb25zZVVSTDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIHRpbWVvdXQ6IHhoci50aW1lb3V0LFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycyh4aHIpLCAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcihyZXN1bHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybiAmJiAoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcblxuICAgICAgICAoY2FjaGUgfHwgd2luZG93LkFLSUxJX1NTUikgJiYgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGVhZGVycyBvZiBhbiBYTUxIdHRwUmVxdWVzdCBpbnN0YW5jZVxuICAgKiBcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH1cbiAgICovXG4gIGdldEhlYWRlcnMgPSBmdW5jdGlvbih4aHIpIHtcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xuICAgIGxldCBzdHIgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7ICBcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KCdcXHUwMDBkXFx1MDAwYScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGxpbmUuaW5kZXhPZignXFx1MDAzYVxcdTAwMjAnKTtcblxuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZXQga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBsZXQgdmFsID0gbGluZS5zdWJzdHJpbmcoaW5kZXggKyAyKTtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICovXG4gIGNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCkge1xuICAgIHRoaXMuX19jYWNoZVtoYXNoXSA9IHsgcmVzdWx0LCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICovXG4gIHJlbW92ZUNhY2hlKGhhc2gpIHtcbiAgICBkZWxldGUgdGhpcy5fX2NhY2hlW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGhhc2ggZm9yIHNhdmluZyBpbiB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjcmVhdGVDYWNoZUhhc2goZGF0YSkge1xuICAgIHJldHVybiB1dGlscy5jcmVhdGVIYXNoKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIG9iamVjdCB0byBhIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoayA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodikpLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKGtleSA9PiBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpKTtcbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgcXVlcnkgc3RyaW5nIHRvIGFuIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gdGhlIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBkYXRhIGJlZm9yZSB0aGUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyB4aHIsIG9wdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZGF0YSBhZnRlciB0aGUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcihyZXN1bHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZGF0YTogcmVzdWx0LnJlc3BvbnNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgYSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlYSBhIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgYSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgSEVBRCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBoZWFkKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnSEVBRCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbnJlcXVlc3QuX19pbnN0YW5jZXMgPSB7fTtcbnJlcXVlc3QuX19jYWNoZSA9IHt9O1xuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbiAobmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7IiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG4vKipcbiAqIFRyYW5zaXRpb24gY2xhc3MuXG4gKiBUaGUgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBpbmNsdWRlcyB0aGUgbGFzdCBhY3R1YWwgcm91dGVyIHRyYW5zaXRpb24gaW5mb3JtYXRpb24uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RyYW5zaXRpb259XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBwcmV2aW91cyA9IG51bGwpIHsgIFxuICAgIHRoaXMudXJsID0gdXJsOyAgXG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTsgICAgXG4gICAgdGhpcy5fX2ZpbmlzaGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3QgdG8gYW5vdGhlciBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSByb3V0ZXIuc3RhdGVcbiAgICovXG4gIHJlZGlyZWN0KHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgLi4ucm91dGVyLnRyYW5zaXRpb24ucGF0aC5vcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5jYW5jZWwoKTsgICBcbiAgICByZXR1cm4gcm91dGVyLnN0YXRlLmNhbGwocm91dGVyLCBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIFRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0XG4gICAqL1xuICByZWxvYWQocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHBhcmFtcyA9IHsgLi4udGhpcy5wYXRoLnBhcmFtcywgLi4ucGFyYW1zIH07XG4gICAgcXVlcnkgPSB7IC4uLnRoaXMucGF0aC5xdWVyeSwgLi4ucXVlcnkgfTtcbiAgICBoYXNoID0gaGFzaCA9PT0gdW5kZWZpbmVkPyB0aGlzLnBhdGguaGFzaDogaGFzaDtcbiAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh0aGlzLnBhdGguc3RhdGUubmFtZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSwgLi4ucGF0aCB9O1xuICAgIHRoaXMucm91dGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICB0aGlzLnN0YXRlc1t0aGlzLnBhdGguc3RhdGUubmFtZV0gPSB0aGlzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSByb3V0ZSBpcyBjaGFuZ2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcm91dGVcbiAgICovXG4gIGlzUm91dGVDaGFuZ2VkKHJvdXRlKSB7XG4gICAgaWYoIXRoaXMucHJldmlvdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gcm91dGUuc3RhdGU7XG5cbiAgICBpZighdGhpcy5wcmV2aW91cy5oYXNTdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtS2V5cyA9IFtdO1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2Uocm91dGVyLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtS2V5cy5wdXNoKHYpKTtcbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBzdGF0ZS5wYXJhbXMpIHtcbiAgICAgIGlmKHBhcmFtS2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgICAgcGFyYW1LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5xdWVyeSk7XG4gICAgY29uc3Qgd2F0Y2hIYXNoID0gc3RhdGUuaGFzaCAhPT0gdW5kZWZpbmVkOyAgICBcbiAgICBjb25zdCBwcmV2Um91dGUgPSB0aGlzLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTsgXG5cbiAgICBjb25zdCBwcmV2ID0geyBcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSwgXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSxcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH1cblxuICAgIGlmKHdhdGNoSGFzaCkge1xuICAgICAgcHJldi5oYXNoID0gcHJldlJvdXRlLmhhc2g7XG4gICAgICBjdXJyZW50Lmhhc2ggPSByb3V0ZS5oYXNoO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGN1cnJlbnQgdHJhbnNpdGlvblxuICAgKi9cbiAgY2FuY2VsKCkgeyAgIFxuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogRmluaXNoIHRoZSB0cmFuc2l0aW9uXG4gICAqL1xuICBmaW5pc2goKSB7XG4gICAgdGhpcy5fX2ZpbmlzaGVkID0gdHJ1ZTtcbiAgICBkZWxldGUgdGhpcy5wcmV2aW91czsgICAgXG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG5yb3V0ZXIuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG5cbi8qKlxuICogQWRkIGEgbmV3IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke3N0YXRlfWApO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBvcHRpb25zLm1hbnVhbCA9IHRydWU7XG4gICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpKTsgIFxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7ICAgIFxuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7XG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBzb21lIHBvc2l0aW9uXG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgYnkgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7ICBcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHJvdXRlci4gXG4gKiBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7ICAgIFxuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMuc3RhdGVzW2ldKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHN0YXRlIFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gKi9cbnJvdXRlci5pbml0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IHBhcmVudHMgPSBbXTtcbiAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcGFyZW50cy5wb3AoKTtcbiAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTdGF0ZShwYXJlbnROYW1lKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgIH1cblxuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgc3RhdGUgYnkgdGhlIG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcbiAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gIHRoaXMuX19pbml0ICYmIHRoaXMuaW5pdFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHN0YXRlIGJ5IHRoZSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHVybCB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIucmVwbGFjZVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5yZXBsYWNlSGFzaFVybCh1cmwpOiB0aGlzLnJlcGxhY2VIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIHVybCB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVybCk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIHVybCB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsICcjJyArICh1cmwgfHwgJy8nKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVybCB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVybCB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcXVlcnkgcGFyYW1zIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBxdWVyeSBwYXJhbXMgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBhcmVdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSwgcHJlcGFyZSA9IHRydWUpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgXG4gIGlmKHByZXBhcmUpIHtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gJy8nICsgKHBhcmFtc1t2XSB8fCAnJykpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXlxcXi8sICcnKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGFyZ3MgPSB7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIFxuICAgIGlmKGhhc2hUZW1wID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYoaGFzaFRlbXAgPT09ICcnKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0FyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAsIG9wdGlvbnMgfTtcblxuICAgIGlmKHV0aWxzLmNvbXBhcmUobmV3QXJncywgYXJncykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICB9XG4gICAgXG4gIHJldHVybiBhcmdzO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHBhcmFtc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVQYXJhbXMgPSBmdW5jdGlvbihzdGF0ZSwgcGFyYW1zLCBhcmdzKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk7XG5cbiAgZm9yKGxldCBpID0gc3RhdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIHBhcmFtcyA9IHRoaXMuY3JlYXRlU3RhdGVPYmplY3RBcmdzKHBhcmFtcywgdGhpcy5nZXRTdGF0ZShjdXJyZW50KS5wYXJhbXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBxdWVyeVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcXVlcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVF1ZXJ5ID0gZnVuY3Rpb24oc3RhdGUsIHF1ZXJ5LCBhcmdzKSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSk7XG5cbiAgZm9yKGxldCBpID0gc3RhdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIHF1ZXJ5ID0gdGhpcy5jcmVhdGVTdGF0ZU9iamVjdEFyZ3MocXVlcnksIHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucXVlcnksIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBjdXJyZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlT2JqZWN0QXJncyA9IGZ1bmN0aW9uIChjdXJyZW50LCBkZWZhdWx0cywgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgY29uc3QgYWxsID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudCk7XG5cbiAgZm9yKGxldCBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBsZXQgdmFsID0gZGVmYXVsdHNba2V5XTtcblxuICAgIGlmKGFsbFtrZXldID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFsbFtrZXldID0gdmFsKGFyZ3MpO1xuICAgIH1cblxuICAgIGlmKGFsbFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIGFsbCkge1xuICAgIGlmKGFsbFtrZXldID09PSBudWxsKSB7XG4gICAgICBkZWxldGUgYWxsW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFsbDsgXG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgaGFzaFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlSGFzaCA9IGZ1bmN0aW9uKHN0YXRlLCBoYXNoLCBhcmdzKSB7XG4gIGlmKGhhc2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gc3RhdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGhhc2ggPSB0aGlzLmNyZWF0ZVN0YXRlSGFzaEFyZ3MoaGFzaCwgdGhpcy5nZXRTdGF0ZShjdXJyZW50KS5oYXNoLCBhcmdzKTtcbiAgfVxuICBcbiAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBzdGF0ZSBoYXNoIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBjdXJyZW50XG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBkZWZhdWx0c1xuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVIYXNoQXJncyA9IGZ1bmN0aW9uIChjdXJyZW50LCBkZWZhdWx0cywgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgaWYoY3VycmVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgaWYodHlwZW9mIGRlZmF1bHRzID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdHMoYXJncyk7XG4gIH1cblxuICBpZihjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICByZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcGF0dGVybiBpbmZvXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCBrZXlzID0gW107XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcbiAgICByZXR1cm4gJy8/KFteL10qKSc7XG4gIH0pO1xuXG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoLyhbXl4vXSspWy9dKyQvLCAnJDEnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuLCAnZycpO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG4gIFxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgLi4uYXJncykgPT4geyBcbiAgICBhcmdzID0gYXJncy5zbGljZSgwLCBhcmdzLmxlbmd0aCAtIDIpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdiA9IGFyZ3NbaV07XG4gICAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICB9ICBcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHJvdXRlci50cmFuc2l0aW9uICYmICFyb3V0ZXIudHJhbnNpdGlvbi5fX2ZpbmlzaGVkPyByb3V0ZXIudHJhbnNpdGlvbi51cmw6IHRoaXMuZ2V0VXJsKCk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKCcvJyArIHVybC5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnLz8oW14vXSopJyk7XG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXi8nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcm91dGUgY29tcG9uZW50IGJ5IHRoZSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSBlbCA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBhdHRlcm5zIGFycmF5IGluZm9cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLCAuLi5jb250ZW50IH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZXMgYnkgdGhlIGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBSZWxvYWQgdGhlIHN0YXRlXG4gKiBcbiAqIEBzZWUgVHJhbnNpdGlvbi5yZWxvYWRcbiAqL1xucm91dGVyLnJlbG9hZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgaWYoIXRoaXMudHJhbnNpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIHRvIHJlbG9hZCB0aGUgc3RhdGUnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnRyYW5zaXRpb24ucmVsb2FkKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBcbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBwYXJhbXMgPSB7fTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpOyAgXG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7IFxuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gIFxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcblxuICBjb25zdCBuZXh0ID0gc3RhdGVzID0+IHsgICAgXG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTsgXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIGNvbXBvbmVudDogcm91dGUgfSk7ICAgIFxuICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zLCAuLi5jb250ZW50LnBhcmFtcyB9O1xuICAgIGhhc2ggPSBoYXNoIHx8IG9wdGlvbnMuZW1wdHlIYXNoO1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpOyAgICAgXG4gICAgaGFzaCA9IGhhc2ggfHwgJyc7XG4gICAgbGV0IHJlYWxVcmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSk7IFxuICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwocmVhbFVybCkpOyBcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShsZXZlbCk7XG4gICAgXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHsgICAgICBcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgIHRyYW5zaXRpb24ucGF0aC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhc3RhdGUuYWJzdHJhY3QgJiYgbGV2ZWwrKztcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgaWYocmVhbFVybCAhPSB1cmwpIHtcbiAgICAgIGlzRGlmZmVyZW50ID0gdHJhbnNpdGlvbi5pc1JvdXRlQ2hhbmdlZCh0cmFuc2l0aW9uLnBhdGgpO1xuICAgIH1cbiAgICAgICBcbiAgICBsZXQgbG9hZCA9IGlzRGlmZmVyZW50ICYmIG9wdGlvbnMucmVsb2FkICE9PSBmYWxzZTsgICAgXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKGRhdGEgPT4geyAgICAgICAgXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2Um91dGUgPSB0cmFuc2l0aW9uLnByZXZpb3VzICYmIHRyYW5zaXRpb24ucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgKHByZXZSb3V0ZSAmJiAhcHJldlJvdXRlLmxvYWRlZCkgJiYgKGxvYWQgPSB0cnVlKTtcbiAgICAgIHJldHVybiByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQpLnRoZW4oKCkgPT4gdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWUpO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSkudGhlbigoKSA9PiB7XG4gICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwodGhpcy5kZWZhdWx0VXJsKSk7ICAgICAgICAgIFxuICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIW9wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICghdHJhbnNpdGlvbi5wYXRoIHx8ICF0cmFuc2l0aW9uLnBhdGguaGFzaCkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgICB0cmFuc2l0aW9uLmZpbmlzaCgpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gZmFsc2U7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogU3RvcmUgYWxsb3dzIHlvdSB0byBzYXZlIGFuZCBzaGFyZSBkYXRhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3N0b3JlfVxuICovXG5jb25zdCBzdG9yZSA9IG5ldyBQcm94eSh7fSwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0YXJnZXRba2V5XSwgdmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdmFsdWUpOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogVGhlIG9iamVjdCB3aXRoIGEgbG90IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy91dGlsc31cbiAqL1xuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIHRoZSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3R5bGUgYXR0cmlidXRlIGZyb20gdGhlIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogU3BsaXQgdGhlIHN0cmluZyBleHRlbmRlZFxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbXCJIZWxsb1wiLCBcIldvcmxkXCJdXG4gKiB1dGlscy5zcGxpdChcIkhlbGxvIFdvcmxkXCIsIFwiIFwiKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyd4ID0gNScsICcgeSA9IFwiMTsyOzNcIiddXG4gKiB1dGlscy5zcGxpdCgneCA9IDU7IHkgPSBcIjE7MjszXCInLCBcIjtcIiwgWydcIiddKTtcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdHIgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlbF1cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtleGNsdWRlXSBcbiAqL1xudXRpbHMuc3BsaXQgPSBmdW5jdGlvbihzdHIsIGRlbCA9ICcnLCBleGNsdWRlID0gW10pIHtcblx0Y29uc3QgZXhwcyA9IFtdOyAgICAgXG4gIGxldCBsYXN0ID0gJyc7XG5cbiAgaWYoIWRlbCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xuICB9XG4gIGVsc2UgaWYoZGVsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWwpO1xuICB9XG4gIGVsc2UgaWYoc3RyLmluZGV4T2YoZGVsKSA9PSAtMSkge1xuICAgIGxhc3QgPSBzdHI7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gZXhjbHVkZS5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IGV4Y2x1ZGVbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSBkZWwgJiYgIW9wZW4pIHtcbiAgICAgICAgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG4gIH1cblxuICBsYXN0ICYmIGV4cHMucHVzaChsYXN0KTtcbiAgcmV0dXJuIGV4cHM7XG59XG5cbi8qKlxuICogRmlsdGVyIHRoZSBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgdGhlIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBieSB0aGUga2V5c1xuICogQHJldHVybnMge0FycmF5fSBcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IG51bGwpIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmIChrZXlzICYmICFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBzdHIgPSBoYW5kbGVyPyAoaGFuZGxlciArICcnKS50b0xvd2VyQ2FzZSgpOiAnJztcbiAgICBoYW5kbGVyID0gdmFsID0+ICh2YWw/ICh2YWwgKyAnJykudG9Mb3dlckNhc2UoKTogJycpLm1hdGNoKHN0cik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCFrZXlzICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihrZXlzKSB7XG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICAgIGtleSA9IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgICAgbGV0IHZhbCA9IGtleT8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGl0ZW0pOiBpdGVtO1xuICAgIFxuICAgICAgICBpZiAoaGFuZGxlcih2YWwpKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTb3J0IHRoZSBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gYXJyLnNsaWNlKCk7XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneCcsICd6J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmluY2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyB0aGUgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnNdIFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgbmVzdGVkOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCBwbGFpbjogZmFsc2UsIC4uLm9wdGlvbnMgfTtcblxuICBjb25zdCBuZXh0ID0gb2JqID0+IHtcbiAgICBpZihvcHRpb25zLnBsYWluICYmICF0aGlzLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgICAgdmFsID0gdmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgb3B0aW9ucy5uZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB0byB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCBpZ25vcmVVbmRlZmluZWQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gdmFsID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgaGFzaCBmcm9tIHRoZSBzdHJpbmdcbiAqIFxuICogQHBhcmFtIHsqfSBzb3VyY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNyZWF0ZUhhc2ggPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgdHlwZW9mIHNvdXJjZSA9PSAnb2JqZWN0JyAmJiAoc291cmNlID0gSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG4gIHR5cGVvZiBzb3VyY2UgIT0gJ3N0cmluZycgJiYgKHNvdXJjZSA9ICfioIAnICsgU3RyaW5nKHNvdXJjZSkpO1xuICBsZXQgaGFzaCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hhciA9IHNvdXJjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgaGFzaCA9IGhhc2ggJiBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIGhhc2ggKyAnJztcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIHRoZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgc3RyaW5nIGZyb20gYSBkYXNoIHRvIGEgY2FtZWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIHN0cmluZyBmcm9tIGEgY2FtZWwgdG8gYSBkYXNoIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIG9iamVjdCBuZXN0ZWQgcHJvcGVydHkgZXhpc3RlbmNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgb2JqZWN0IG5lc3RlZCBwcm9wZXJ0eSB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogRGVsZXRlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBvYmplY3RcbiAqIFlvdSBjYW4gY2FuY2VsIHRoZSBkZWxldGlvbiByZXR1cm5pbmcgZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gb2JqID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IG9iaiA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICBsZXQgdmFsID0gJyc7ICBcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoIShub3cgJSBpKSkge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBkZWJvdW5jZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqIEByZXR1cm5zIHtmbn1cbiAqL1xudXRpbHMuZGVib3VuY2UgPSBmdW5jdGlvbihmbiwgZGVsYXkgPSAwKSB7ICBcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQoZm4uX19kZWJvdW5jZVRpbWVvdXQpO1xuICAgIGZuLl9fZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgIGRlbGV0ZSBmbi5fX2RlYm91bmNlVGltZW91dDtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=