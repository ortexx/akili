/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.0.14
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
  return undefined.triggerInit(false);
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
  Akili.isolateEvents();
  Akili.isolateArrayPrototype();
  Akili.isolateWindowFunctions();
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

      var nodes = [];
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      this.removed();
      nodes = nodes.concat(this.__detach({ saveBindings: true, deinitializeNodes: true }).concat(this.__empty({ saveBindings: true })));
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

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
      }

      this.__parents && (this.__parents.length = 0);
      delete this.__parents;
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

      if (!options.saveBindings) {
        this.__unbindParentsByNodes(nodes);
      }

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

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
      }

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
      delete this.name;
      this.node = null;
      this.component = null;
      this.el = null;
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
      delete this.__el;
      delete this.__component;
      delete this.__parent;
      _akili2.default.removeScope(this.__name);
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
  return this.createStateArgs(params, state.params, args);
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
  return this.createStateArgs(query, state.query, args);
};

/**
 * Create the state arguments
 * 
 * @param {object[]} list
 * @param {object} [args]
 */
router.createStateArgs = function (current, defaults) {
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

  if (typeof state.hash == 'function') {
    return state.hash(args);
  }

  if (hash === undefined) {
    return state.hash;
  }

  return hash;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ba2lsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWtpbGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJkZWJ1ZyIsIl9faW5pdCIsIl9fcm9vdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX3RhZ3MiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9fd3JhcHBpbmciLCJfX3Jvb3RPdXRlckhUTUwiLCJfX29uRXJyb3IiLCJ0cmlnZ2VySW5pdCIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJzZXJ2aWNlcyIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJnbG9iYWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIk9iamVjdHMiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiU291cmNlIiwiVGV4dCIsIlRleHRhcmVhIiwiVHJhY2siLCJVcmwiLCJWaWRlbyIsInJlcXVlc3QiLCJyb3V0ZXIiLCJzdG9yZSIsImRlZmluZSIsImNsZWFyR2xvYmFscyIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJpIiwibCIsImxlbmd0aCIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwiQUtJTElfU1NSIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJyZW1vdmVDb21wb25lbnQiLCJhbGlhcyIsInJlbW92ZUFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiY29uc3RydWN0b3IiLCJjYXRjaCIsImlzb2xhdGVHbG9iYWxzIiwiX190YXJnZXQiLCJ3cmFwIiwiaXNvbGF0ZUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImlzQXJyYXkiLCJudW0iLCJpbmRleCIsImNhbGxiYWNrIiwiX19pc29sYXRlZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsInZhbHVlIiwib2JqIiwiY3VycmVudCIsIndyYXBGdW5jdGlvbiIsImMiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJyZXZlcnNlIiwiYWtpbGlXcmFwcGVkRnVuY3Rpb24iLCJ0YWciLCJhZGRUYWciLCJoYXNUYWciLCJyZW1vdmVUYWciLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyVGFnIiwiX19jb21wb25lbnQiLCJfX2V2YWx1YXRlTm9kZSIsImhhbmRsZUVycm9ycyIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdXRlckhUTUwiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJpbml0U2VydmVyU2lkZUh0bWwiLCJodG1sIiwiaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJyZXF1ZXN0Q2FjaGUiLCJBS0lMSV9DTElFTlQiLCJwcmVwYXJlU2VydmVyU2lkZUh0bWwiLCJjaGFuZ2VTdGF0ZSIsInByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwiZXJyIiwiZGVpbml0IiwiZGVzdHJveSIsInN0b3JlS2V5cyIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwiY2FjaGUiLCJfX21haW4iLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJSZWdFeHAiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJpYWJsZXMiLCJ2YXJzIiwiZXhwcyIsInNwbGl0IiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlU3RvcmVLZXlzIiwiX19kaXNhYmxlQXR0cktleXMiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2NvbnRlbnQiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiY2hlY2tDaGFuZ2VzIiwic2V0RXZlbnRzIiwic2V0UGFyZW50cyIsInNldEJvb2xlYW5BdHRyaWJ1dGVzIiwiZGVmaW5lQXR0cmlidXRlcyIsIl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zIiwiX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJhdHRycyIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0aW9uUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImluZGV4T2YiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0aW9uUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImhhc093blByb3BlcnR5IiwiX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUiLCJfX2dldE5vZGVQcm9wZXJ0eSIsImNvbXBhcmUiLCJjcmVhdGVIYXNoIiwiaGFzaCIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwiQXR0ciIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsIl9fZXhwcmVzc2lvbiIsInRyaW0iLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJldmFsQ29tcG9uZW50IiwiY29tIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJlbnRCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2UiLCJfX2NyZWF0ZUtleXNIYXNoIiwicGFyZW50c0hhc2giLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJpc1Njb3BlUHJveHkiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5Iiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJlbGVtZW50IiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19nZXRBbGxCaW5kcyIsIl9faW5pdGlhbGl6ZWQiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlIiwiX19kaXNhYmxlS2V5cyIsImNoZWNrUHJvcCIsIl9fc2V0IiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInVuYmluZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJfX2V2YWx1YXRlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjYW1lbEF0dHJpYnV0ZSIsInRvQ2FtZWxDYXNlIiwiX19hdHRyaWJ1dGVPbiIsIl9fcHJlcGFyZUF0dHJpYnV0ZUluIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImNvcHkiLCJwbGFpbiIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19pc0V2ZW50IiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2hhc0JpbmRpbmdzIiwiX19ldmFsdWF0ZUV2ZW50IiwiaXNBdHRyIiwiaGFzQmluZGluZ3MiLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0Jvb2xlYW4iLCJzYXZlQmluZGluZ3MiLCJfX3VuYmluZEJ5Tm9kZXMiLCJfX3VuYmluZFBhcmVudHNCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5IiwidGFyZ2V0Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsImZvclBhcmVudHMiLCJmb3JEYXRhIiwicG9wIiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY2hlY2tEaXNhYmxlbWVudCIsIkNIRUNLX0VYSVNURU5DRSIsInRhcmdldFBhcmVudFZhbHVlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJjdXJyZW50S2V5cyIsImN1cnJlbnRLZXlTdHJpbmciLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJ0eXBlIiwicHJveHkiLCJfX2dldERpc2FibGVtZW50VHlwZVN0b3JlIiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwic29ydCIsImtleVN0cmluZyIsImluZm8iLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImNhbGxPblN0YXJ0IiwiY2FwaXRhbGl6ZSIsImF0dHJzS2V5cyIsImZpbHRlciIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJpc1BsYWluT2JqZWN0IiwiQ0hFQ0tfUFJPWFkiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJuZXN0ZWQiLCJ0YXJnZXRLZXlzIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uSGFzaCIsInVwZGF0ZWRBdCIsImdldFRpbWUiLCJwYXJlbnRLZXlzU3RyaW5nIiwia2V5c1N0cmluZyIsImNvbGxlY3QiLCJyb290QXR0cnMiLCJub2RlcyIsIl9fbWFwTm9kZXMiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIk5vZGUiLCJqIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiZGVpbml0aWFsaXplTm9kZXMiLCJfX2VtcHR5IiwiX19jbGVhclN0b3JlTGlua3MiLCJfX3NwbGljZUNoaWxkIiwiX19yZW1vdmVDaGlsZHJlbiIsImZpbmRBbGwiLCJsZXZlbHMiLCJsZXZlbCIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsImhhbmRsZXIiLCJ1bnNoaWZ0IiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwic3RhdGUiLCJwYXJhbXMiLCJxdWVyeSIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsInVybCIsIm9uU3RhdGVDaGFuZ2VkIiwic2V0QWN0aXZpdHkiLCJzZXRTdGF0ZSIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJzZXRVcmwiLCJyZXNldEhyZWYiLCJnZXRTdGF0ZSIsImlzQWN0aXZlU3RhdGUiLCJpbkFjdGl2ZVN0YXRlIiwiaHJlZiIsImNyZWF0ZVN0YXRlVXJsIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJzdHlsZSIsInZhbHVlS2V5IiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsIkxvb3AiLCJpdGVyYXRvcnMiLCJpdGVyYXRvckVsIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJfX2l0ZXJhdG9yIiwiX192YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJtYXNrIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJfX2luZGV4IiwiX19rZXkiLCJfX2hhc2giLCJpdGVyYXRvciIsInNldEluZGV4Iiwic2V0S2V5Iiwic2V0VmFsdWUiLCJfX3Byb21pc2VzIiwiY2xvbmVOb2RlIiwiYSIsImIiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwic2V0UmVjcmVhdGlvbiIsInNldElzIiwiY29tcGlsYXRpb24iLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVzdWx0Iiwic2V0UHJvcGVydHkiLCJlbXB0eSIsImNvbm5lY3Rpb24iLCJzZXRDYWNoZSIsImFib3J0Iiwib25TdGFydCIsInhociIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50IiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsInVybEF0dHJpYnV0ZSIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwicHJldiIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJ0cmFuc2l0aW9uIiwibG9hZCIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJleGlzdHMiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJyZWRlZmluZSIsImRlY29kZUh0bWxFbnRpdGllcyIsInNldFNlbGVjdGVkIiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlIiwib25EZWJvdW5jZSIsInNldEZvY3VzIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsImZvcmNlIiwiX19yZW1vdmVkIiwiaW5FdmFsdWF0aW5nIiwicHJlcGFyZU9wdGlvbnMiLCJfRXZlbnQiLCJfX3ByZXBhcmVBdHRyaWJ1dGVPdXQiLCJfX2VsIiwic3RyaWN0IiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsImdldEhlYWRlcnMiLCJoZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwibGluZSIsInN1YnN0cmluZyIsInN0YXR1c0Vycm9yUGF0dGVybiIsInJlamVjdCIsIm1ldGhvZCIsIlhNTEh0dHBSZXF1ZXN0IiwiYmVmb3JlIiwidHJhbnNmb3JtQmVmb3JlIiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtc1RvUXVlcnkiLCJ0b1VwcGVyQ2FzZSIsImNyZWF0ZUNhY2hlSGFzaCIsInVzZXIiLCJwYXNzd29yZCIsIl9jYWNoZSIsImdldENhY2hlIiwiY3JlYXRlZEF0IiwidHJhbnNmb3JtQWZ0ZXIiLCJvcGVuIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsIm1hdGNoIiwiY3JlYXRlQ2FjaGUiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJUcmFuc2l0aW9uIiwicHJldmlvdXMiLCJyb3V0ZXMiLCJzdGF0ZXMiLCJfX2ZpbmlzZWQiLCJyZWRpcmVjdCIsInJvdXRlIiwiaGFzU3RhdGUiLCJwYXJhbUtleXMiLCJmdWxsUGF0dGVybiIsIl9fcGFyYW1SZWdleCIsImYiLCJxdWVyeUtleXMiLCJ3YXRjaEhhc2giLCJwcmV2Um91dGUiLCJnZXRSb3V0ZSIsImluY2x1ZGVLZXlzIiwiZmluaXNoIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0IiwiaGFzIiwibWFudWFsIiwicHJlcGFyZVN0YXRlQXJncyIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsImVycm9yIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwicmVwbGFjZVVybCIsInJlcGxhY2VIYXNoVXJsIiwicmVwbGFjZUhpc3RvcnlVcmwiLCJyZXBsYWNlU3RhdGUiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiZW1wdHlIYXNoIiwibmV3QXJncyIsImNyZWF0ZVN0YXRlQXJncyIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImluY2x1ZGVzIiwiX19maW5pc2hlZCIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwicmVsb2FkIiwicHJldlRyYW5zaXRpb24iLCJzZXRQYXRoIiwicmVhbFVybCIsImlzRGlmZmVyZW50IiwiaXNSb3V0ZUNoYW5nZWQiLCJ0aXRsZSIsImxvYWRlZCIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlcyIsImRlbCIsImV4Y2x1ZGUiLCJpdGVtIiwiZmlsdGVyZWQiLCJvcmRlciIsImFWIiwiYlYiLCJuZXdPYmoiLCJvYmpLZXlzIiwiZXhjbHVkZUtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImlnbm9yZVVuZGVmaW5lZCIsImNsZWFyVW5kZWZpbmVkIiwiYUtleXMiLCJiS2V5cyIsIlN0cmluZyIsImNoYXIiLCJjaGFyQ29kZUF0IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwidGV4dENvbnRlbnQiLCJvYmplY3QiLCJyZWR1Y2UiLCJvIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk1hdGgiLCJyYW5kb20iLCJkZWxheSIsImNsZWFyVGltZW91dCIsIl9fZGVib3VuY2VUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4UUNsRkE7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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QVcsdUVBQUgsQ0FBRzs7QUFDdkMsU0FBTyxZQUFNO0FBQ1hDLGlCQUFheHVCLEdBQUd5dUIsaUJBQWhCO0FBQ0F6dUIsT0FBR3l1QixpQkFBSCxHQUF1QjF3QixXQUFXLFlBQU07QUFDdENpQztBQUNBd3VCLG1CQUFheHVCLEdBQUd5dUIsaUJBQWhCO0FBQ0EsYUFBT3p1QixHQUFHeXVCLGlCQUFWO0FBQ0QsS0FKc0IsRUFJcEJGLEtBSm9CLENBQXZCO0FBS0QsR0FQRDtBQVFELENBVEQ7O2tCQVdlMXlCLEsiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBa2lsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBa2lsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWtpbGkuanNcIik7XG4iLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuXG4vKipcbiAqIFRoZSBmcmFtZXdvcmsgbWFpbiBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLm9wdGlvbnMgPSB7XG4gIGRlYnVnOiB0cnVlXG59O1xuXG5Ba2lsaS5fX2luaXQgPSBudWxsO1xuQWtpbGkuX19yb290ID0gbnVsbDtcbkFraWxpLl9fY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuX19hbGlhc2VzID0ge307XG5Ba2lsaS5fX3Njb3BlcyA9IHt9O1xuQWtpbGkuX19zdG9yZUxpbmtzID0ge307XG5Ba2lsaS5fX3dpbmRvdyA9IHt9O1xuQWtpbGkuX190YWdzID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuQWtpbGkuX193cmFwcGluZyA9IGZhbHNlOyAgXG5Ba2lsaS5fX3Jvb3RPdXRlckhUTUwgPSAnJztcbkFraWxpLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuZ2xvYmFscyA9IGdsb2JhbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuQWtpbGkuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuQWtpbGkuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG5Ba2lsaS5jb21wb25lbnRzLlVybCA9IFVybDtcbkFraWxpLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbkFraWxpLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuQWtpbGkuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuQWtpbGkuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuLyoqXG4gKiBEZWZpbmUgdGhlIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdGhlIGdsb2JhbCBjb250ZXh0XG4gKi9cbkFraWxpLmNsZWFyR2xvYmFscyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgIGRlbGV0ZSBnbG9iYWxzW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLnVud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldKTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBKb2luIHRoZSBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzY29wZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgdGhhdCBpcyB3cmFwcGVkIGluIHRoZSBBa2lsaSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHRlbXBsYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24gKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB0aGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIHN0ciA9PiAhIXRoaXMuX19zY29wZXNbc3RyXSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIHNjb3BlIGNoYW5nZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIGV2YWx1YXRpb24gaW5zaWRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgb25seSB0aGUgcm9vdCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS53cmFwcGluZyA9IGZ1bmN0aW9uIChmbikge1xuICBpZih0aGlzLl9fd3JhcHBpbmcpIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7ICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbiAgcmV0dXJuIHJlczsgICBcbn1cblxuLyoqXG4gKiBTdG9wIHRoZSBpc29sYXRpb24gaW5zaWRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgaWYod2luZG93LkFLSUxJX1NTUikge1xuICAgIGNvbnN0IGFyciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnW25vLXNzcl0nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBhcnJbaV0ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuICBcbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldOyAgICBcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTsgICAgXG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudC5cbiAqIE9yIGdldCBpdCBpZiB0aGUgZnVuY3Rpb24gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMuXG4gKiBPciBnZXQgaXQgaWYgdGhlIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnJlbW92ZUFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSB3aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICBcbiAgaWYoIXdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbiAgfSAgXG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGdsb2JhbHNcbiAqL1xuQWtpbGkuaXNvbGF0ZUdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7ICBcbiAgZ2xvYmFscy5fX3RhcmdldC51dGlscyA9IHRoaXMud3JhcCh1dGlscyk7IFxuICBBa2lsaS5pc29sYXRlRXZlbnRzKCk7XG4gIEFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuICBBa2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcblxuICBpZih3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHdpdGggdGhlIGlzb2xhdGlvbiBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbiAoZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYWxsYmFjay5fX2lzb2xhdGVkKSB7XG4gICAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXJnc1tpbmRleF0sICdfX2lzb2xhdGVkJywge1xuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIG9iamVjdC9mdW5jdGlvbiB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCB0aGUgb2JqZWN0L2Z1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICovXG5Ba2lsaS51bndyYXAgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0aGlzLndyYXAob2JqLCB7IHJldmVyc2U6IHRydWUgfSk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkud3JhcEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihvcHRpb25zLnRhZyAmJiBBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgIEFraWxpLmFkZFRhZyhvcHRpb25zLnRhZywgQWtpbGkuX19ldmFsdWF0aW9uLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS53cmFwcGluZygoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZuKTtcbiAgYWtpbGlXcmFwcGVkRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGFraWxpV3JhcHBlZEZ1bmN0aW9uW2tleV0gPSBmbltrZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFraWxpV3JhcHBlZEZ1bmN0aW9uLCAnX19ha2lsaScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZm5cbiAgfSk7XG5cbiAgcmV0dXJuIGFraWxpV3JhcHBlZEZ1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuQWtpbGkuYWRkVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0aGlzLmhhc1RhZyh0YWcsIG5vZGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSA9IHt9OyAgICBcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddID0gW107ICAgIFxuICB9XG5cbiAgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10ucHVzaCh7IG5vZGUgfSk7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHRhZyBleGlzdHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ba2lsaS5oYXNUYWcgPSBmdW5jdGlvbih0YWcsIG5vZGUpIHtcbiAgaWYoIW5vZGUpe1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgICBpZihrID09IHRhZykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHJldHVybiBmYWxzZTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9IFxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdGFnXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGFnXVxuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqL1xuQWtpbGkucmVtb3ZlVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0eXBlb2YgdGFnID09ICdvYmplY3QnKSB7XG4gICAgbm9kZSA9IHRhZztcbiAgICB0YWcgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZighdGFnKSB7IFxuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIW5vZGUpIHtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XVtrXVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYoIU9iamVjdC5rZXlzKHRoaXMuX190YWdzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm47ICAgIFxuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKSB7XG4gICAgaWYoa2V5ID09IHRhZykge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIGlmKCFPYmplY3Qua2V5cyh0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdGFnIGV4cHJlc3Npb25zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqL1xuQWtpbGkudHJpZ2dlclRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5fX3RhZ3Nba2V5XVtrXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IGFycltpXTtcbiAgICAgICAgICBvYmoubm9kZS5fX2NvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShvYmoubm9kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIHRoZSBlcnJvcnNcbiAqL1xuQWtpbGkuaGFuZGxlRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgdGhlIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICBBa2lsaS5fX2luaXQgPSBzdGF0dXM7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uIChyb290KSB7IFxuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuICB0aGlzLl9fcm9vdE91dGVySFRNTCA9IHJvb3Qub3V0ZXJIVE1MO1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKClcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKHsgaW5pdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4geyAgICBcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UICYmICh3aW5kb3cuQUtJTElfQ0xJRU5ULnJlcXVlc3RDYWNoZSA9IHRoaXMucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUoKSk7XG4gICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24gKCkgeyBcbiAgdGhpcy5fX3Jvb3QgJiYgKHRoaXMuX19yb290Lm91dGVySFRNTCA9IHRoaXMuX19yb290T3V0ZXJIVE1MKTtcblxuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fc2NvcGVzKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5fX3Njb3Blc1trZXldLl9fY29tcG9uZW50O1xuICAgIGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVtb3ZlKCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdE91dGVySFRNTCA9ICcnO1xuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19yb290ID0gbnVsbDtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fdGFncyA9IHt9O1xufTtcblxuLyoqXG4gKiBEZXN0cm95IHRoZSBmcmFtZXdvcmtcbiAqL1xuQWtpbGkuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5kZWluaXQoKTsgIFxuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuXG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgcm91dGVyLl9faW5pdCAmJiByb3V0ZXIuZGVpbml0KCk7XG4gIGRlbGV0ZSB3aW5kb3cuQUtJTElfU0VSVkVSO1xuICBkZWxldGUgd2luZG93LkFLSUxJX0NMSUVOVDtcbiAgZGVsZXRlIHdpbmRvdy5BS0lMSV9TU1I7XG5cbiAgZm9yKGxldCBrZXkgaW4gQWtpbGkpIHtcbiAgICBkZWxldGUgQWtpbGlba2V5XTtcbiAgfVxuXG4gIGRlbGV0ZSB3aW5kb3cuQWtpbGk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgU1NSIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBTU1IgY2FjaGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgaW5pdCA9IChpbnN0YW5jZSwgb2JqKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpbnN0YW5jZS5fX2NhY2hlW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBrZXkgPT09ICdfX21haW4nPyByZXF1ZXN0OiByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV07XG4gICAgaW5pdChpbnN0YW5jZSwgb2JqW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgU1NSIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIFNTUiBjYWNoZVxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0geyBfX21haW46IHJlcXVlc3QuX19jYWNoZSB9O1xuXG4gIGZvcihsZXQga2V5IGluIHJlcXVlc3QuX19pbnN0YW5jZXMpIHtcbiAgICBjYWNoZVtrZXldID0gcmVxdWVzdC5fX2luc3RhbmNlc1trZXldLl9fY2FjaGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xud2luZG93LkFraWxpID0gQWtpbGk7XG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmhhbmRsZUVycm9ycygpO1xuQWtpbGkuaXNvbGF0ZUdsb2JhbHMoKTtcbiIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZScsICduby1zc3InXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZyb20gd2hpY2ggYWxsIGNvbXBvbmVudHMgYXJlIGluaGVyaXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc11cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCB2YXJpYWJsZXMgPSB7fSkge1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24sICc7JywgWydcIicsIFwiJ1wiLCAnYCddKTsgIFxuICAgIGV4cHNbZXhwcy5sZW5ndGggLSAxXSA9IGByZXR1cm4gJHtleHBzW2V4cHMubGVuZ3RoIC0gMV19YDtcblxuICAgIGZvciAobGV0IGtleSBpbiB2YXJpYWJsZXMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKHZhcmlhYmxlc1trZXldKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5rZXlzLCBgJHtleHBzLmpvaW4oJzsgJyl9YCkuYXBwbHkoY29udGV4dCwgdmFycyk7XG4gIH1cblxuICAvKiogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGVdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYW4gaHRtbCBlbGVtZW50IHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3JgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlU3RvcmVLZXlzID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyS2V5cyA9IHt9O1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2NvbnRlbnQgPSAnJztcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBjaGVja0NoYW5nZXM6IGZhbHNlLCBcbiAgICAgIHNldEV2ZW50czogdHJ1ZSxcbiAgICAgIHNldFBhcmVudHM6IHRydWUsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogUmVjb21waWxlIHRoZSBjb21wb25lbnRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHRydWU7IFxuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307ICBcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMpOyAgICBcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEV2ZW50cyAmJiB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRQYXJlbnRzICYmIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRCb29sZWFuQXR0cmlidXRlcyAmJiB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLmRlZmluZUF0dHJpYnV0ZXMgJiYgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7IFxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIG5vZGVcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGlvblBhcmVudC5fX2FraWxpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMyAmJiB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCkpIHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlTm9kZShjaGlsZCwgdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlKTsgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAgICBcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDsgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlc29sdmVkKCkpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9faXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7ICAgIFxuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpOyAgICAgXG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTsgICAgXG4gICAgdGhpcy5zY29wZSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvbXBvbmVudCBwYXJlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0UGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50cyA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsKTtcblxuICAgIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGlvblBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0aW9uUGFyZW50ID0gcGFyZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGlvblBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW9uUGFyZW50ID0gZXZhbHVhdGlvblBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0aW9uUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIHRoZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBhcnNlZCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBuZWVkIG9mIHRoZSBhdmFsdWF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBub2RlIHByb3BlcnRpZXMgY2hhbmdlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2Uobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgXG4gICAgaWYgKCFwcm9wKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmUgdGhlIG5vZGUgcHJvcGVydHkgdmFsdWVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7ICBcbiAgICByZXR1cm4gdXRpbHMuY29tcGFyZSh1dGlscy5jcmVhdGVIYXNoKHZhbHVlKSwgcHJvcC5oYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKSB7XG4gICAgbGV0IHRhZ05hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLnRhZ05hbWU7XG4gICAgbGV0IGF0dHJOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuICAgIGxldCBjb21wb25lbnROYW1lID0gKGF0dHJOYW1lIHx8IHRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGVsZW1lbnROYW1lID0gbm9kZS5fX2VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/IG5vZGUubmFtZS50b0xvd2VyQ2FzZSgpOiAnJzsgICAgICAgIFxuICAgIGxldCBtZXNzYWdlcyA9IFsgZXJyLm1lc3NhZ2UsIG5vZGUuX19leHByZXNzaW9uLnRyaW0oKSBdO1xuICAgIGF0dHJpYnV0ZU5hbWUgJiYgbWVzc2FnZXMucHVzaChgW2F0dHJpYnV0ZSAke2F0dHJpYnV0ZU5hbWV9XWApO1xuICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuY29uY2F0KFsgYFtlbGVtZW50ICR7ZWxlbWVudE5hbWV9XWAsIGBbY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX1dYCBdKTtcbiAgICByZXR1cm4gYEV4cHJlc3Npb24gZXJyb3I6IGAgKyBtZXNzYWdlcy5qb2luKCdcXG5cXHRhdCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB0aGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcbiAgICBjb25zdCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKChjb20pID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4geyAgICAgXG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJlbnRCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkgeyAgICAgICAgXG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZShldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSwgeyAuLi5nbG9iYWxzIH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICAgbGV0IHBhcmVudHNIYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLnBhcmVudHMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgICAgIFxuXG4gICAgICAgIGlmIChwYXJlbnRWYWx1ZSAmJiB0eXBlb2YgcGFyZW50VmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPT0gNTApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICBgRm9yIGhpZ2hlciBwZXJmb3JtYW5jZSwgZG9uJ3QgbG9vcCBQcm94eSBhcnJheXMvb2JqZWN0cyBpbnNpZGUgZXhwcmVzc2lvbiBmdW5jdGlvbnMsIG9yIHVzZSBBa2lsaS51bmV2YWx1YXRlKCkgdG8gd3JhcCB5b3UgY29kZS5gLFxuICAgICAgICAgICAgICBgJHsgbm9kZS5fX2V4cHJlc3Npb24udHJpbSgpIH1gLFxuICAgICAgICAgICAgICBgc2NvcGUgcHJvcGVydHkgXCIkeyBkYXRhLnBhcmVudHMuam9pbignLicpIH1cImBcbiAgICAgICAgICAgIF0uam9pbignXFxuXFx0YXQgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAhcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdPyBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPSAxOiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0rKztcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgPT09IGRhdGEucmVhbENvbXBvbmVudFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAgXG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCBkYXRhLmV2YWx1YXRlZCk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZXMsIGNvdW50ZXIsIGV4cHJlc3Npb24sIGF0dHJpYnV0ZVZhbHVlIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgbm9kZSBhbmQgc2V0IHRoZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGtleXMsIGV2YWx1YXRlZCkge1xuICAgIGxldCBiaW5kID0gdGhpcy5fX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKTtcbiAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgaWYgKCFiaW5kKSB7XG4gICAgICB0aGlzLl9fYmluZChrZXlzLCB7IG5vZGUgfSk7XG4gICAgfSAgIFxuXG4gICAgdGhpcy5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpOyAgICAgXG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcbiAgICAgICAgICBkYXRhID0gYmluZD8gKGJpbmQuX19kYXRhIHx8IFtdKTogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGNvbXBvbmVudC5fX2dldEFsbEJpbmRzKHByb3Aua2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBiaW5kID0gZGF0YVtrXTsgICBcblxuICAgICAgICAgIGlmKCFiaW5kIHx8ICFiaW5kLm5vZGUgfHwgIWJpbmQubm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkgeyAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhwcm9wLmtleXMpOyAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpO1xuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhwcm9wLmtleXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB0aGUgdmFsdWUgYnkgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMgKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgZmFsc2UpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB0aGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyAuLi5nbG9iYWxzLCAgZXZlbnQ6IGUgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBub2RlIGV4cHJlc3Npb24gd2l0aCBjaGVja1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrID0gdHJ1ZSkge1xuICAgIGNvbnN0IGtleSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSc7ICBcblxuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyBcbiAgICAgIGNvbnN0IHsgcmVzLCBhdHRyaWJ1dGVWYWx1ZSwgZXhwcmVzc2lvbiwgY291bnRlciB9ID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpOyAgXG4gICAgICBub2RlW2tleV0gIT0gcmVzICYmIChub2RlW2tleV0gPSByZXMpO1xuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuICBcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICB9XG4gIFxuICAgICAgICBjb25zdCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcbiAgICAgICAgY29uc3QgY2FtZWxBdHRyaWJ1dGUgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gIFxuICAgICAgICBpZiAoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgICB9ICAgICAgICAgIFxuICBcbiAgICAgICAgaWYgKG5vZGUuX19hdHRyaWJ1dGVPbikgeyAgICAgICAgXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgICAgICAgIHZhbHVlID0gY29tcG9uZW50Ll9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICBjb21wb25lbnQuYXR0cnNbY2FtZWxBdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgcmVjZWl2aW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSkgeyAgICBcbiAgICByZXR1cm4gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHNlbmRpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZU91dChub2RlLCB2YWx1ZSkgeyAgICBcbiAgICByZXR1cm4gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTsgICAgXG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmIChub2RlLl9faXNFdmVudCkge1xuICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgbm9kZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1t1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2hlY2sgPSB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2U7XG4gICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdHRyID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyO1xuICAgIGNvbnN0IHZhbCA9IG5vZGVbaXNBdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgY29uc3QgaGFzQmluZGluZ3MgPSBldmFsdWF0aW9uUmVnZXgudGVzdCh2YWwudHJpbSgpKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSBpc0F0dHI/IC9eYm9vbGVhbi0vaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcbiAgICBjb25zdCBpc0V2ZW50ID0gaXNBdHRyPyAvXm9uLSguKykvaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcblxuICAgIGlmKCFlbC5fX2FraWxpICYmICFoYXNCaW5kaW5ncyAmJiAhaXNCb29sZWFuICYmICFpc0V2ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX25hbWUgPSB0aGlzLl9fc2NvcGUuX19uYW1lICsgdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2KTtcbiAgICBub2RlLl9faXNFdmVudCA9IGlzRXZlbnQ7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZ3M7XG4gICAgbm9kZS5fX2lzQm9vbGVhbiA9IGlzQm9vbGVhbjtcbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbDtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsOyAgICBcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVpbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVpbml0aWFsaXplTm9kZShub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZighbm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzICYmICFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZSk7XG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZSk7ICAgIFxuICAgIH1cblxuICAgIEFraWxpLnJlbW92ZVRhZyhub2RlKTsgICAgXG4gICAgZGVsZXRlIG5vZGUuX19uYW1lO1xuICAgIGRlbGV0ZSBub2RlLl9faGFzQmluZGluZ3M7XG4gICAgZGVsZXRlIG5vZGUuX19pc0Jvb2xlYW47XG4gICAgZGVsZXRlIG5vZGUuX19pc0V2ZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXM7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPZjtcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgIGRlbGV0ZSBub2RlLl9fZXZlbnQ7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9faW5pdGlhbGl6ZWQ7XG4gICAgZGVsZXRlIG5vZGUuX19jb21wb25lbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIHRoZSBlbGVtZW50IGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgdGhlIG5vZGUgaGFzIGxpbmsgd2l0aCB0aGUgcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBhdHRyaWJ1dGVzIGFzIGEgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICBub2RlICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbm9kZSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG4gICAgICAgICAgdmFsdWU/IHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpOiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgb2JqZWN0IHRvIGEgcHJveHlcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4geyBcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHsgIFxuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBldmFsdWF0ZWQgPSAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTsgXG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgICAgbGV0IGV4Y0FyciA9IGtleXMuc2xpY2UoKTtcblxuICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBTY29wZSkge1xuICAgICAgICAgICAgbGV0IHJlYWxUYXJnZXQgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICByZWFsVGFyZ2V0ICYmIChyZWFsVGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpICYmIChjb21wb25lbnQgPSAgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGlmIChBa2lsaS5fX3dyYXBwaW5nICYmIGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZvclBhcmVudHMgPSBBa2lsaS5fX2V2YWx1YXRpb24uY29tcG9uZW50LnBhcmVudHMoYyA9PiBjIGluc3RhbmNlb2YgQWtpbGkuY29tcG9uZW50cy5Gb3IpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmb3JQYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykgeyBcbiAgICAgICAgICAgICAgY29uc3QgZm9yRGF0YSA9IGZvclBhcmVudHNbaV0uZGF0YTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGV4Y0FyciwgY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmIChkYXRhICYmIHR5cGVvZiBkYXRhID09ICdvYmplY3QnICYmIGZvckRhdGEgPT09IGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIGV4Y0Fyci5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICBlbHNlIGlmICghdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBjb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nLCBldmFsdWF0ZWQpO1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHsgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSBBa2lsaS53cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBDSEVDS19FWElTVEVOQ0U6IGlmIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0UGFyZW50VmFsdWUgPSBwYXJlbnRzLmxlbmd0aCA+IDE/IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHBhcmVudHMuc2xpY2UoMCwgLTEpLCB0aGlzLl9fc2NvcGUpOiB0aGlzLl9fc2NvcGU7XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yIChsZXQgayBpbiB0YXJnZXRQYXJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXRQYXJlbnRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldFBhcmVudFZhbHVlW2tdICYmIHRhcmdldFBhcmVudFZhbHVlW2tdLl9fdGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgYnJlYWsgQ0hFQ0tfRVhJU1RFTkNFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKHZhbHVlLCBrZXlzKTtcblxuICAgICAgICBpZighdGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHsgXG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNNb3VudGVkKSB7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZighdGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIHRydWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBzdG9yZSBhbmQgdGhlIGF0dHJpYnV0ZXMgY2hhbmdlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cykge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBrZXlzLnNsaWNlKDAsIGwgLSBpKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoY3VycmVudEtleXMpO1xuICAgICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoY3VycmVudEtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICAgIGlmICh0aGlzLl9fc3RvcmVMaW5rc1tjdXJyZW50S2V5U3RyaW5nXSkgeyAgXG4gICAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoY3VycmVudEtleXMsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fYXR0ckxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7XG4gICAgICAgIHRoaXMuX19hdHRyVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBoYXNoIGZvciB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHJldHVybnMge3N0cmluZ30gICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlS2V5c0hhc2goa2V5cykge1xuICAgIHJldHVybiBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RvcmUgb2YgdGhlIGRpc2FibGVtZW50IHR5cGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHByb3h5OiAnX19kaXNhYmxlUHJveHknLFxuICAgICAgc3RvcmU6ICdfX2Rpc2FibGVTdG9yZUtleXMnLFxuICAgICAgYXR0cjogJ19fZGlzYWJsZUF0dHJLZXlzJ1xuICAgIH0pW3R5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHsgICAgXG4gICAgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgZGVsZXRlIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKTtcbiAgICByZXR1cm4gdGhpc1tzdG9yZV0uX19hbGw/IHRydWU6IHRoaXNbc3RvcmVdW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkgeyBcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ3N0b3JlJykpIHsgICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICAgIGNvbnN0IHAgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgXG4gICAgICBcbiAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHAucHVzaCh0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpKTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGxldCBsaW5rcyA9IChBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdChBa2lsaS5fX3N0b3JlTGlua3NbJyonXSB8fCBbXSk7XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUsIG5hbWUpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgIFxuICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICB9ICBcbiAgICB9KTsgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iaGVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5nZXQgJiYgIW9wdGlvbnMuc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIGF0IGxlYXN0IFwiZ2V0XCIgb3IgXCJzZXRcIiBvcHRpb24gYXMgdHJ1ZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIChzdG9yZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmICghdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvID0geyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10ucHVzaChpbmZvKTtcbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAgIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX3N0b3JlQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7IFxuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyBzdG9yZS5fX3RhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDtcblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaCh7IGNvbXBvbmVudDogdGhpcywgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBzdG9yZUtleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSBzdG9yZS5fX3RhcmdldFtrZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCBrZXkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHN0b3JlW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3Igc3RvcmUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG4gICAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbcmVzLm5hbWVdO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCAhPT0gdGhpcyB8fCByZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGsgPSBsaW5rcy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICBsZXQgbGluayA9IGxpbmtzW2tdO1xuXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcyAmJiBsaW5rLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgICBsaW5rcy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMsICdhdHRyJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcblxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbGlua3MgPSAodGhpcy5fX2F0dHJMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KHRoaXMuX19hdHRyTGlua3NbJyonXSB8fCBbXSk7XG4gICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgXG4gICAgXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG5cbiAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUsIHV0aWxzLnRvRGFzaENhc2UobmFtZSkpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLl9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7ICAgXG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICAodGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCB0aGlzLmF0dHJzW25hbWVdKTsgXG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10ucHVzaCh7IG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBhdHRyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYXR0cnMpLmZpbHRlcihrID0+ICEodGhpcy5fX2F0dHJzW2tdIGluc3RhbmNlb2YgQWtpbGkuRXZlbnRFbWl0dGVyKSk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGF0dHJzS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGF0dHJzS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuX19hdHRyc1trZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCB1dGlscy50b0Rhc2hDYXNlKGtleSkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLmF0dHJzW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgYXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgKGtleSkge1xuICAgIGlmIChrZXkgPT0gJ19fJyB8fCAoa2V5WzBdID09ICdfJyAmJiBrZXlbMV0gPT0gJ18nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKFsnY29uc3RydWN0b3InXS5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgb2JzZXJ2aW5nIG9mIHRoZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzdGFydEtleXNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbmVzdGVkT2JzZXJ2ZSAodmFsdWUsIHN0YXJ0S2V5cykge1xuICAgIGNvbnN0IG9ic2VydmUgPSAodmFsdWUsIHBhcmVudHMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIENIRUNLX1BST1hZOiBpZiAodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmICh0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGJyZWFrIENIRUNLX1BST1hZO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMgfHxcbiAgICAgICAgICBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cykgIT0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHZhbHVlLl9fa2V5cylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9KTtcbiAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9ICk7ICAgICAgICAgIFxuICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFyZ2V0S2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGFyZ2V0S2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgICAgXG4gICAgICAgIGNvbnN0IGsgPSB0YXJnZXRLZXlzW2ldO1xuICAgICAgICBjb25zdCB2YWwgPSB0YXJnZXRba107ICAgICAgICBcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pOyAgIFxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh2YWx1ZSwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG4gIH1cblxuICAgLyoqXG4gICAqIENyZWF0ZSBhbiBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5LCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBjb25zdCBpc29sYXRpb25IYXNoID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSA9IHtcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gdGhlIGJpbmRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGJpbmQgLSBieSBkZWZhdWx0IGlzIGNvbXBvbmVudC5fX2V2YWx1YXRpb24ubGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RCaW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwgcmVhbENvbXBvbmVudCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcblxuICAgIGlmIChiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmIChkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyB0aGUgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovIFxuICBfX2lzU3lzdGVtQmluZGluZ0tleShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID09ICdfX2RhdGEnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGJpbmRpbmcgYnkgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5lc3RlZCBiaW5kaW5ncyBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICovXG4gIF9fZ2V0QWxsQmluZHMoa2V5cykge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBjb25zdCBjb2xsZWN0ID0gKG9iaikgPT4ge1xuICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KG9iai5fX2RhdGEgfHwgW10pO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkgfHwga2V5ID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsZWN0KG9ialtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0KHJvb3QpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGJpbmRpbmcgYnkgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpOyAgICBcbiAgICBsZXQgaGFzaCA9IHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSBub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuaGFzaCA9IGhhc2g7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgaGFzaCxcbiAgICAgIG5vZGUsXG4gICAgICBrZXlzLFxuICAgICAgZXZhbHVhdGVkICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19tYXBOb2Rlcyhmbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgcm9vdEF0dHJzOiB0cnVlLCBhdHRyczogdHJ1ZSwgbm9kZTogdHJ1ZSwgZWw6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICAgIGlmKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYXR0cnMgJiYgKGVsICE9PSB0aGlzLmVsIHx8IG9wdGlvbnMucm9vdEF0dHJzKSkge1xuICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgZm4oYXR0cnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBlbC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBlbC5jaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBvcHRpb25zLm5vZGUgJiYgZm4obm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PSAxICYmICFub2RlLl9fYWtpbGkpIHtcbiAgICAgICAgICBmaW5kKG5vZGUpO1xuICAgICAgICAgIG9wdGlvbnMuZWwgJiYgZm4obm9kZSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBmaW5kKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbm9kZXNcbiAgICogXG4gICAqIEByZXR1cm5zIHtOb2RlW119XG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqL1xuICBfX2dldEFsbE5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4gbm9kZXMucHVzaChub2RlKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICAvKipcbiAgICogQmluZCB0aGUgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfE5vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgbm9kZXMgaW5zdGFuY2VvZiBOb2RlICYmIChub2RlcyA9IFtub2Rlc10pO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICBmb3IgKGxldCBqID0gMCwgYyA9IGtleXMubGVuZ3RoOyBqIDwgYzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2pdO1xuICAgICAgICBcbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgICBkZWxldGUgYmluZC5ub2RlOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10sIG9iaiwgayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJlbnQgJiYgIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoKSB7XG4gICAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgcGFyZW50IGJpbmRpbmdzIHdpdGggdGhlIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKSB7ICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX3BhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9fcGFyZW50c1tpXTsgICAgICBcbiAgICAgIHBhcmVudCAmJiBwYXJlbnQuX19ha2lsaSAmJiBwYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgbGlua3NcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJTdG9yZUxpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBjb25zdCBhcnIgPSBsaW5rc1trZXldO1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBhcnJbaV07XG4gIFxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBmb3IobGV0IGsgaW4gbGluaykge1xuICAgICAgICAgICAgZGVsZXRlIGxpbmtba11cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgbGlua3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZHJlblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtOb2RlW119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4ob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKG9wdGlvbnMpKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCB0aGUgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7Tm9kZVtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZShvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7IFxuICAgIHRoaXMucmVtb3ZlZCgpOyAgIFxuICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHRoaXMuX19kZXRhY2goeyBzYXZlQmluZGluZ3M6IHRydWUsIGRlaW5pdGlhbGl6ZU5vZGVzOiB0cnVlIH0pLmNvbmNhdCh0aGlzLl9fZW1wdHkoeyBzYXZlQmluZGluZ3M6IHRydWUgfSkpKTtcbiAgICB0aGlzLl9fY2xlYXJTdG9yZUxpbmtzKCk7ICBcbiAgICB0aGlzLl9fc2NvcGUuX19yZW1vdmUoKTtcbiAgICBkZWxldGUgdGhpcy5fX3Njb3BlO1xuICAgIGRlbGV0ZSB0aGlzLnNjb3BlO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgZGVsZXRlIHRoaXMuZWwuX19ha2lsaTtcbiAgICBkZWxldGUgdGhpcy5lbDsgICAgXG4gICAgZGVsZXRlIHRoaXMuX19wYXJlbnQ7ICAgIFxuICAgIGRlbGV0ZSB0aGlzLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50O1xuICAgIGRlbGV0ZSB0aGlzLl9fZXZhbHVhdGlvblBhcmVudDtcbiAgICBcbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTsgICBcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19wYXJlbnRzICYmICh0aGlzLl9fcGFyZW50cy5sZW5ndGggPSAwKTsgICAgXG4gICAgZGVsZXRlIHRoaXMuX19wYXJlbnRzO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICBvcHRpb25zLmRlaW5pdGlhbGl6ZU5vZGVzICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eShvcHRpb25zID0ge30pIHsgICAgXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7XG4gICAgXG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4geyAgICAgIFxuICAgICAgaWYobm9kZS5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pOyAgXG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH0sIHsgcm9vdEF0dHJzOiBmYWxzZSB9KTtcblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGxpbmsgd2l0aCB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJzdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgdXNpbmcgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCBsZWZ0Y29tcG9uZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCByaWdodCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHsgICBcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGlsZSB0aGUgY29tcG9uZW50IGJ1dCBwcmV2ZW50IHRoZSBjb21waWxhdGlvbiBpbnNpZGVcbiAgICovXG4gIHByZXZlbnQoKSB7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBlbGVtZW50IGNvbnRlbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fcmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbGlua3MuXG4gKiBJdCB3b3JrcyB3aXRoIHJvdXRlciBhcyB3ZWxsLiBcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbGlua3N9XG4gKiBcbiAqIEB0YWcgYVxuICogQHNlbGVjdG9yIGFbc3RhdGVdOm5vdChbdXJsXSksYVt1cmxdOm5vdChbc3RhdGVdKVxuICogQGF0dHIge3N0cmluZ30gW3VybF0gLSB1cmwgdG8gZ29cbiAqIEBhdHRyIHtzdHJpbmd9IFtzdGF0ZV0gLSBzdGF0ZSB0byBnbyB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3BhcmFtc31cbiAqIEBhdHRyIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3F1ZXJ5fVxuICogQGF0dHIge3N0cmluZ30gW2hhc2hdIC0gaGFzaCBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX2hhc2h9XG4gKiBAYXR0ciB7b2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfcm91dGVyLmxvY2F0aW9ufVxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIGFjdGl2ZSBvciBub3QgXG4gKiBAc2NvcGUge2Jvb2xlYW59IGluQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgcGFydCBvZiB0aGUgYWN0aXZlIHN0YXRlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aXRoIHRoZSBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEB0YWcgY29udGVudFxuICogQHNlbGVjdG9yIGNvbnRlbnQsW2NvbnRlbnRlZGl0YWJsZV1cbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQGF0dHIge2Jvb2xlYW59IFtlZGl0YWJsZV0gLSBlZGl0YWJsZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVtYmVkIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgZW1iZWRcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGZvclxuICogQHNlbGVjdG9yIGZvcltpbl0sb2xbaW5dLHVsW2luXSx0aGVhZFtpbl0sdGJvZHlbaW5dLHRmb290W2luXVxuICogQGF0dHIge29iamVjdHxhcnJheX0gaW4gLSBkYXRhIHRvIGNyZWF0ZSB0aGUgbG9vcFxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gb3V0IC0gc2VudCBvbiB0aGUgZGF0YSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ291dCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCB0aGlzLkxvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIHRoaXMuTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yRWwgPSBudWxsO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICBcbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5fX3ByZXBhcmVBdHRyaWJ1dGVJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBub2RlID0gcHJvcC5ub2RlO1xuXG4gICAgaWYoKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5uYW1lID09ICdpbicgJiYgcHJvcC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN1cGVyLl9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkgeyAgICBcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhdyk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIGRlbGV0ZSB0aGlzLmh0bWw7XG4gICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzO1xuICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yRWw7IFxuICAgIGRlbGV0ZSB0aGlzLl9faXRlcmF0b3I7XG4gICAgZGVsZXRlIHRoaXMuX192YWx1ZTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvckVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoZWwub3V0ZXJIVE1MKTtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudChodG1sKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2hhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07ICAgICAgICBcbiAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRoaXMuX19pbmRleCA9PT0gaXRlcmF0b3IuaW5kZXgpOyAgICAgXG4gICAgICBpdGVyYXRvci5zZXRLZXkodGhpcy5fX2tleSA9PT0gaXRlcmF0b3Iua2V5KTtcbiAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHV0aWxzLmNvbXBhcmUodGhpcy5fX2hhc2gsIGl0ZXJhdG9yLmhhc2gpKTtcbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgXG4gICAgICAgIHJlY29tcGlsZTogeyBcbiAgICAgICAgICBjaGVja0NoYW5nZXM6IHRydWVcbiAgICAgICAgfSBcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5pdGVyYXRvckVsLmNsb25lTm9kZSgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwuY2hpbGRyZW4pOyBcbiAgICB0aGlzLml0ZXJhdG9ycy5zb3J0KChhLCBiKSA9PiBjaGlsZHJlbi5pbmRleE9mKGEuZWwpIC0gY2hpbGRyZW4uaW5kZXhPZihiLmVsKSk7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnNvcnQoKGEsIGIpID0+IGNoaWxkcmVuLmluZGV4T2YoYSkgLSBjaGlsZHJlbi5pbmRleE9mKGIpKTtcbiAgICBjb25zdCBsb29wID0gKGtleSwgdmFsdWUsIGluZGV4KSA9PiB0aGlzLmxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpLml0ZXJhdGUoaW5kZXgpO1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yIChsZXQgbCA9IGRhdGEubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBsID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIGxvb3Aoa2V5LCBkYXRhW2tleV0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGluZGV4LCBsID0gdGhpcy5pdGVyYXRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpXTtcbiAgICAgIGl0ZXJhdG9yLl9fcmVtb3ZlKCk7XG4gICAgICB0aGlzLml0ZXJhdG9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuX19wcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF0dHJzLm9uT3V0LnRyaWdnZXIoZGF0YSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIH0pOyAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSAwO1xuICAgIHRoaXMuX19rZXkgPSAnJztcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19oYXNoID0gJyc7XG4gICAgdGhpcy5fX3Byb21pc2VzID0gW107XG4gIH0gIFxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGxvb3BcbiAqIEBzZWxlY3RvciBsb29wLHRyXG4gKiBAYXR0ciBAc2VlIEZvclxuICogQHNjb3BlIHsqfSBsb29wVmFsdWUgLSBkYXRhIGl0ZW0ncyB2YWx1ZSBvZiB0aGUgY3VycmVudCBpdGVyYXRpb24gXG4gKiBAc2NvcGUge3N0cmluZ3xudW1iZXJ9IGxvb3BLZXkgLSBrZXkgb2YgdGhlIGl0ZXJhdGlvblxuICogQHNjb3BlIHtudW1iZXJ9IGxvb3BJbmRleCAtIGluZGV4IG9mIHRoZSBpdGVyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCh0cnVlKTtcbiAgICB0aGlzLnNldEtleSh0cnVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHRydWUpO1xuXG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHN1cGVyLnJlbW92ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBkZWxldGUgdGhpcy5mb3I7XG4gICAgZGVsZXRlIHRoaXMudmFsdWU7XG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuZm9yLl9faGFzaDtcbiAgfVxuXG4gIGl0ZXJhdGUoKSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgaWZcbiAqIEBzZWxlY3RvciBpZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyAtIHNob3cgdGhlIGVsZW1lbnQgY29udGVudCBvciBub3RcbiAqIEBhdHRyIHtib29sZWFufSByZWNyZWF0ZSAtIGRlbGV0ZSB0aGUgY29udGVudCBhbmQgcmVjcmVhdGUgb3IganVzdCBzaG93L2hpZGUgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgdGhpcy5FbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIHRoaXMuRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHRoaXMuc2V0SXMpO1xuICB9XG5cbiAgc2V0SXModmFsKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdmFsO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTsgICAgXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCB0aGlzLmRpc3BsYXksICdpbXBvcnRhbnQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7ICAgXG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZS1pZlxuICogQHNlbGVjdG9yIGVsc2UtaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgQHNlZSBJZlxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZVxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTsiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpZnJhbWVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaWZyYW1lXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGltYWdlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGltZ1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gaW5jbHVkZSB0ZW1wbGF0ZXMgYnkgdXJsLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19odG1sX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyBpbmNsdWRlXG4gKiBAc2VsZWN0b3IgaW5jbHVkZVt1cmxdXG4gKiBAYXR0ciB7c3RyaW5nfSB1cmwgLSB0ZW1wbGF0ZSBwYXRoXG4gKiBAYXR0ciB7bnVtYmVyfGZ1bmN0aW9ufGJvb2xlYW59IFtjYWNoZV0gLSByZXF1ZXN0IGNhY2hlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHMjZG9jc19jYWNoZX1cbiAqIEBtZXNzYWdlIHt2b2lkfSBsb2FkIC0gc2VudCBvbiB0aGUgdGVtcGxhdGUgbG9hZFxuICogQG1lc3NhZ2Uge0Vycm9yfSBlcnJvciAtIHNlbnQgb24gZXJyb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdjYWNoZScsIHRoaXMuc2V0Q2FjaGUpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VGVtcGxhdGUpO1xuICB9XG5cbiAgc2V0Q2FjaGUoY2FjaGUpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gIH1cblxuICBzZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIGlucHV0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NoZWNrYm94X2FuZF9yYWRpb31cbiAqIFxuICogQHRhZyBpbnB1dFxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJywgJ211bHRpcGxlJ10uY29uY2F0KFRleHQuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoVGV4dC5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuYXR0cignY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZCk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0gIFxuXG4gIHNldENoZWNrZWQodmFsdWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgXG4gICAgaWYgKHRoaXMuZWwuY2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQocmFkaW8uZWwuY2hlY2tlZCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igb2JqZWN0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgb2JqZWN0XG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW9cbiAqIEBzZWxlY3RvciByYWRpb1tuYW1lXVxuICogQGF0dHIge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGdyb3VwXG4gKiBAYXR0ciB7c3RyaW5nfG51bGx9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqIEBtZXNzYWdlIHtzdHJpbmd9IHJhZGlvIC0gc2VudCBvbiB2YWx1ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsICgpID0+IHRoaXMuc2V0TmFtZXMoKSwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSB8fCB0aGlzLmF0dHJzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJvdXRlciB0ZW1wbGF0ZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyByb3V0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHBhcmFtIHtib29sZWFufSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uLCBsb2FkID0gdHJ1ZSkge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcblxuICAgIGNvbnN0IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiA9IChwYXRoKSA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gKGh0bWwpID0+IHsgXG4gICAgICB0aGlzLmVtcHR5KCk7ICBcbiAgICAgIGxldCBuYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgIGlmKHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZvcihsZXQga2V5IGluIEFraWxpLl9fY29tcG9uZW50cykge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEFraWxpLl9fY29tcG9uZW50c1trZXldO1xuICAgIFxuICAgICAgICAgIGlmKGNvbXBvbmVudCA9PT0gc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBuYW1lID0ga2V5OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke3N0YXRlLm5hbWV9XCIgaGFzIG5vIGRlZmluZWQgY29tcG9uZW50YClcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPCR7IG5hbWUgfT4keyBodG1sIH08LyR7IG5hbWUgfT5gO1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHsgIFxuICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKSwgICBcbiAgICAgIHN0YXRlOiB0cmFuc2l0aW9uLnBhdGguc3RhdGUsXG4gICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgIHVybDogdHJhbnNpdGlvbi5wYXRoLnVybCxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyxcbiAgICAgIHF1ZXJ5OiB0cmFuc2l0aW9uLnBhdGgucXVlcnksXG4gICAgICBoYXNoOiB0cmFuc2l0aW9uLnBhdGguaGFzaFxuICAgIH07XG5cbiAgICBpZiAoIWxvYWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudGVtcGxhdGU7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oaHRtbCA9PiBjb21waWxlKGh0bWwpKTtcbiAgfVxufSIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggc2VsZWN0LlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19zZWxlY3R9XG4gKiBcbiAqIEB0YWcgc2VsZWN0ICBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXS5jb25jYXQoRm9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjb21waWxlZCgpIHsgXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSk7XG4gICAgbGV0IHJlcyA9IHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7ICAgXG4gICAgdGhpcy5hdHRyKCdtdWx0aXBsZScsIHRoaXMuc2V0TXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cignY29udGVudCcsIHRoaXMuc2V0Q29udGVudCk7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhd1NlbGVjdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjsiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzb3VyY2UgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBzb3VyY2VcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBCYXNlIGNvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIHtib29sZWFufSBmb2N1cyAtIHNldCB0aGUgZm9jdXMgb3Igbm90XG4gKiBAYXR0ciB7bnVtYmVyfSBkZWJvdW5jZSAtIGRlYm91bmNlIGRlbGF5XG4gKiBAbWVzc2FnZSB7dm9pZH0gZGVib3VuY2UgLSBzZW50IG9uIHRoZSBkZWJvdW5jZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXRpbHMuZGVib3VuY2UoKCkgPT4gdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSksIHRoaXMuZGVib3VuY2VJbnRlcnZhbCkpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCdkZWJvdW5jZScsIHRoaXMuc2V0RGVib3VuY2UpO1xuICB9XG5cbiAgc2V0RGVib3VuY2UoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSAraW50ZXJ2YWw7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRleHRhcmVhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIFxuICogQHRhZyB0ZXh0YXJlYVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0cmFjayBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHRyYWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aGljaCBoYXZlIGFzeW5jIGF0dHJpYnV0ZSBjb250ZW50LlxyXG4gKiBcclxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxyXG4gKiBcclxuICogQHRhZyB1cmxcclxuICogQGF0dHIge3N0cmluZ30gW3VybF1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdmlkZW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB2aWRlb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59IiwiLyoqXG4gKiBDbGFzcyB0byB3b3JrIHdpdGggZXZlbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2V2ZW50c31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbm9kZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZih0aGlzLl9fcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMoeyBkZXRhaWw6IGRhdGEsICAuLi5vcHRpb25zIH0pKSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKHRoaXMuX19yZW1vdmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlcGVyZSB0aGUgZXZlbnQgb3B0aW9uc1xuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICovXG4gIHByZXBhcmVPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIC4uLm9wdGlvbnMgfTsgXG4gICAgdGhpcy5ub2RlLl9fY29tcG9uZW50Ll9fcHJlcGFyZUF0dHJpYnV0ZU91dCh0aGlzLm5vZGUsIG9wdGlvbnMuZGV0YWlsKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlbHlcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBlbWl0dGVyXG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy51bmJpbmQoKTtcbiAgICBkZWxldGUgdGhpcy5uYW1lO1xuICAgIGRlbGV0ZSB0aGlzLm5hbWU7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5lbCA9IG51bGw7XG4gICAgdGhpcy5fX3JlbW92ZWQgPSB0cnVlO1xuICB9XG59IiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuXG5jb25zdCBvYmogPSB7fTtcblxuLyoqXG4gKiBHbG9iYWxzIGlzIGZvciB1c2luZyB0aGUgY3VzdG9tIHZhcmlhYmxlcyBpbiBodG1sXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGUjZG9jc19nbG9iYWxzfVxuICovXG5jb25zdCBnbG9iYWxzID0gbmV3IFByb3h5KG9iaiwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmKGtleSA9PSAnX190YXJnZXQnKSB7XG4gICAgICByZXR1cm4gb2JqXG4gICAgfSAgIFxuICAgIFxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgdGFyZ2V0W2tleV0gPSBBa2lsaS53cmFwKHZhbHVlLCB7IHRhZzoga2V5IH0pOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4geyAgIFxuICAgIEFraWxpLnJlbW92ZVRhZyhrZXkpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbHM7IiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc2NvcGUgdmFsdWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRhcmdldD8gdGhpcy5fX3RhcmdldDogdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc2NvcGVcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkgeyAgICBcbiAgICBkZWxldGUgdGhpcy5fX2VsO1xuICAgIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSB0aGlzLl9fcGFyZW50O1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19uYW1lKTtcbiAgfVxufSIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3MuXG4gKiBUaGUgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIG1ha2UgcmVxdWVzdHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHN9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgX19jYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yUGF0dGVybjogL15bXjIzXS8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcbiAgICAgICghd2luZG93LkFLSUxJX1NTUiAmJiAhQWtpbGkuX19pbml0KSAmJiAoY2FjaGUgPSB0cnVlKTtcblxuICAgICAgaWYob3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJyAmJiAoIW9wdGlvbnMuYm9keSB8fCB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09ICdzdHJpbmcnKSkge1xuICAgICAgICBoYXNoID0gdGhpcy5jcmVhdGVDYWNoZUhhc2goeyBcbiAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgdXNlcjogb3B0aW9ucy51c2VyLCBcbiAgICAgICAgICBwYXNzd29yZDogb3B0aW9ucy5wYXNzd29yZCwgXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5IFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjYWNoZSAmJiBoYXNoKSB7ICAgICAgICBcbiAgICAgICAgbGV0IF9jYWNoZSA9IHRoaXMuZ2V0Q2FjaGUoaGFzaCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihfY2FjaGUgJiYgKGNhY2hlID09PSB0cnVlIHx8IG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy50cmFuc2Zvcm1BZnRlcihfY2FjaGUucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVhZGVyS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGsgPSBoZWFkZXJLZXlzW2ldO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogeGhyLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHhoci5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUeXBlID09ICd0ZXh0Jz8geGhyLnJlc3BvbnNlVGV4dDogJycsXG4gICAgICAgICAgcmVzcG9uc2VYTUw6IHhoci5yZXNwb25zZVR5cGUgPT0gJ2RvY3VtZW50Jz8geGhyLnJlc3BvbnNlWE1MOiAnJyxcbiAgICAgICAgICByZXNwb25zZVVSTDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIHRpbWVvdXQ6IHhoci50aW1lb3V0LFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycyh4aHIpLCAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcihyZXN1bHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybiAmJiAoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcblxuICAgICAgICAoY2FjaGUgfHwgd2luZG93LkFLSUxJX1NTUikgJiYgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGVhZGVycyBvZiBhbiBYTUxIdHRwUmVxdWVzdCBpbnN0YW5jZVxuICAgKiBcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH1cbiAgICovXG4gIGdldEhlYWRlcnMgPSBmdW5jdGlvbih4aHIpIHtcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xuICAgIGxldCBzdHIgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7ICBcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KCdcXHUwMDBkXFx1MDAwYScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGxpbmUuaW5kZXhPZignXFx1MDAzYVxcdTAwMjAnKTtcblxuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZXQga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBsZXQgdmFsID0gbGluZS5zdWJzdHJpbmcoaW5kZXggKyAyKTtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICovXG4gIGNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCkge1xuICAgIHRoaXMuX19jYWNoZVtoYXNoXSA9IHsgcmVzdWx0LCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICovXG4gIHJlbW92ZUNhY2hlKGhhc2gpIHtcbiAgICBkZWxldGUgdGhpcy5fX2NhY2hlW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGhhc2ggZm9yIHNhdmluZyBpbiB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjcmVhdGVDYWNoZUhhc2goZGF0YSkge1xuICAgIHJldHVybiB1dGlscy5jcmVhdGVIYXNoKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIG9iamVjdCB0byBhIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4gb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKSk7XG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHF1ZXJ5IHN0cmluZyB0byBhbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIHRoZSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZGF0YSBiZWZvcmUgdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIGRhdGEgYWZ0ZXIgdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIGEgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZWEgYSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIGEgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEhFQUQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgaGVhZCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0hFQUQnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Ll9faW5zdGFuY2VzID0ge307XG5yZXF1ZXN0Ll9fY2FjaGUgPSB7fTtcblxuLyoqXG4gKiBBZGQgYSBuZXcgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24gKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0OyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogVGhlIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaW5jbHVkZXMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcHJldmlvdXMgPSBudWxsKSB7ICBcbiAgICB0aGlzLnVybCA9IHVybDsgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2ZpbmlzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3Qoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyAuLi5yb3V0ZXIudHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLmNhbmNlbCgpOyAgIFxuICAgIHJldHVybiByb3V0ZXIuc3RhdGUuY2FsbChyb3V0ZXIsIHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWQgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3RcbiAgICovXG4gIHJlbG9hZChwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcGFyYW1zID0geyAuLi50aGlzLnBhdGgucGFyYW1zLCAuLi5wYXJhbXMgfTtcbiAgICBxdWVyeSA9IHsgLi4udGhpcy5wYXRoLnF1ZXJ5LCAuLi5xdWVyeSB9O1xuICAgIGhhc2ggPSBoYXNoID09PSB1bmRlZmluZWQ/IHRoaXMucGF0aC5oYXNoOiBoYXNoO1xuICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHRoaXMucGF0aC5zdGF0ZS5uYW1lLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcGF0aFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhdGggXG4gICAqL1xuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9LCAuLi5wYXRoIH07XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh0aGlzLnBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3RoaXMucGF0aC5zdGF0ZS5uYW1lXSA9IHRoaXMucGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByb3V0ZSBieSB0aGUgc3RhdGVcbiAgICogIFxuICAgKiBAcGFyYW0geyp9IHN0YXRlIFxuICAgKi9cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyB0aGUgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAgICovXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHJvdXRlIGlzIGNoYW5nZWRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZVxuICAgKi9cbiAgaXNSb3V0ZUNoYW5nZWQocm91dGUpIHtcbiAgICBpZighdGhpcy5wcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSByb3V0ZS5zdGF0ZTtcblxuICAgIGlmKCF0aGlzLnByZXZpb3VzLmhhc1N0YXRlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1LZXlzID0gW107XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZShyb3V0ZXIuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gcGFyYW1LZXlzLnB1c2godikpO1xuICAgIFxuICAgIGZvcihsZXQga2V5IGluIHN0YXRlLnBhcmFtcykge1xuICAgICAgaWYocGFyYW1LZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgICBwYXJhbUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5S2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlLnF1ZXJ5KTtcbiAgICBjb25zdCB3YXRjaEhhc2ggPSBzdGF0ZS5oYXNoICE9PSB1bmRlZmluZWQ7ICAgIFxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRoaXMucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpOyBcblxuICAgIGNvbnN0IHByZXYgPSB7IFxuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucGFyYW1zLCBwYXJhbUtleXMpLCBcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucGFyYW1zLCBwYXJhbUtleXMpLFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfVxuXG4gICAgaWYod2F0Y2hIYXNoKSB7XG4gICAgICBwcmV2Lmhhc2ggPSBwcmV2Um91dGUuaGFzaDtcbiAgICAgIGN1cnJlbnQuaGFzaCA9IHJvdXRlLmhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7ICAgXG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2ggdGhlIHRyYW5zaXRpb25cbiAgICovXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLl9fZmluaXNlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG5yb3V0ZXIuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG5cbi8qKlxuICogQWRkIGEgbmV3IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke3N0YXRlfWApO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBvcHRpb25zLm1hbnVhbCA9IHRydWU7XG4gICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpKTsgIFxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7ICAgIFxuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7XG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBzb21lIHBvc2l0aW9uXG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgYnkgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7ICBcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHJvdXRlci4gXG4gKiBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlOyAgICBcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlIGJ5IHRoZSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzdGF0ZSBieSB0aGUgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdXJsIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMucmVwbGFjZUhhc2hVcmwodXJsKTogdGhpcy5yZXBsYWNlSGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB1cmwgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB1cmwgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnIycgKyAodXJsIHx8ICcvJykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1ZXJ5IHBhcmFtcyB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcXVlcnkgcGFyYW1zIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwYXJlXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30sIHByZXBhcmUgPSB0cnVlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIFxuICBpZihwcmVwYXJlKSB7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7XG4gIH1cblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+ICcvJyArIChwYXJhbXNbdl0gfHwgJycpKTtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15cXF4vLCAnJyk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGlmICghdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVBcmdzID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBhcmdzID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcbiAgICBjb25zdCBwYXJhbXNUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVQYXJhbXMoc3RhdGUsIHBhcmFtcywgYXJncyk7XG4gICAgY29uc3QgcXVlcnlUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVRdWVyeShzdGF0ZSwgcXVlcnksIGFyZ3MpO1xuICAgIGNvbnN0IGhhc2hUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVIYXNoKHN0YXRlLCBoYXNoLCBhcmdzKTtcbiAgICBcbiAgICBpZihoYXNoVGVtcCA9PT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmKGhhc2hUZW1wID09PSAnJykge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBuZXdBcmdzID0geyBwYXJhbXM6IHBhcmFtc1RlbXAsIHF1ZXJ5OiBxdWVyeVRlbXAsIGhhc2g6IGhhc2hUZW1wLCBvcHRpb25zIH07XG5cbiAgICBpZih1dGlscy5jb21wYXJlKG5ld0FyZ3MsIGFyZ3MpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBhcmdzID0gbmV3QXJncztcbiAgfVxuICAgIFxuICByZXR1cm4gYXJncztcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBwYXJhbXNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUGFyYW1zID0gZnVuY3Rpb24oc3RhdGUsIHBhcmFtcywgYXJncykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKHBhcmFtcywgc3RhdGUucGFyYW1zLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBxdWVyeVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcXVlcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVF1ZXJ5ID0gZnVuY3Rpb24oc3RhdGUsIHF1ZXJ5LCBhcmdzKSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhxdWVyeSwgc3RhdGUucXVlcnksIGFyZ3MpO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0W119IGxpc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChjdXJyZW50LCBkZWZhdWx0cywgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgY29uc3QgYWxsID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudCk7XG5cbiAgZm9yKGxldCBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBsZXQgdmFsID0gZGVmYXVsdHNba2V5XTtcblxuICAgIGlmKGFsbFtrZXldID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFsbFtrZXldID0gdmFsKGFyZ3MpO1xuICAgIH1cblxuICAgIGlmKGFsbFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIGFsbCkge1xuICAgIGlmKGFsbFtrZXldID09PSBudWxsKSB7XG4gICAgICBkZWxldGUgYWxsW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFsbDsgXG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgaGFzaFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlSGFzaCA9IGZ1bmN0aW9uKHN0YXRlLCBoYXNoLCBhcmdzKSB7XG4gIGlmKGhhc2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGlmKHR5cGVvZiBzdGF0ZS5oYXNoID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc3RhdGUuaGFzaChhcmdzKTtcbiAgfVxuXG4gIGlmKGhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzdGF0ZS5oYXNoO1xuICB9XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBhdHRlcm4gaW5mb1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG4gICAgcmV0dXJuICcvPyhbXi9dKiknO1xuICB9KTtcblxuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC8oW15eL10rKVsvXSskLywgJyQxJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybiwgJ2cnKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuICBcbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIC4uLmFyZ3MpID0+IHsgXG4gICAgYXJncyA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAyKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcmdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHYgPSBhcmdzW2ldO1xuICAgICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgfSAgXG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCB1cmwgPSByb3V0ZXIudHJhbnNpdGlvbiAmJiAhcm91dGVyLnRyYW5zaXRpb24uX19maW5pc2hlZD8gcm91dGVyLnRyYW5zaXRpb24udXJsOiB0aGlzLmdldFVybCgpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcygnLycgKyB1cmwuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJy8/KFteL10qKScpO1xuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC9eXFxeLywgJycpLnJlcGxhY2UoL1xcJCQvLCAnJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14vJyArIHVybFBhdHRlcm4gKyAnLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpOyAgXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHJvdXRlIGNvbXBvbmVudCBieSB0aGUgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCBmaW5kID0gKGVsKSA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBhdHRlcm5zIGFycmF5IGluZm9cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLCAuLi5jb250ZW50IH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZXMgYnkgdGhlIGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBSZWxvYWQgdGhlIHN0YXRlXG4gKiBcbiAqIEBzZWUgVHJhbnNpdGlvbi5yZWxvYWRcbiAqL1xucm91dGVyLnJlbG9hZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgaWYoIXRoaXMudHJhbnNpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIHRvIHJlbG9hZCB0aGUgc3RhdGUnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnRyYW5zaXRpb24ucmVsb2FkKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBcbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBwYXJhbXMgPSB7fTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpOyAgXG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7IFxuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gIFxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcblxuICBjb25zdCBuZXh0ID0gKHN0YXRlcykgPT4geyAgICBcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlOyBcbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgY29tcG9uZW50OiByb3V0ZSB9KTsgICAgXG4gICAgcGFyYW1zID0geyAuLi5wYXJhbXMsIC4uLmNvbnRlbnQucGFyYW1zIH07XG4gICAgaGFzaCA9IGhhc2ggfHwgb3B0aW9ucy5lbXB0eUhhc2g7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7ICAgICBcbiAgICBoYXNoID0gaGFzaCB8fCAnJztcbiAgICBsZXQgcmVhbFVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKTsgXG4gICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybChyZWFsVXJsKSk7IFxuICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKGxldmVsKTtcbiAgICBcbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkgeyAgICAgIFxuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9ICAgIFxuXG4gICAgdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0cmFuc2l0aW9uLnBhdGgucXVlcnkgPSBxdWVyeTtcbiAgICB0cmFuc2l0aW9uLnBhdGguaGFzaCA9IGhhc2g7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnVybCA9IHJlYWxVcmw7XG4gICAgdHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFzdGF0ZS5hYnN0cmFjdCAmJiBsZXZlbCsrO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihyZWFsVXJsICE9IHVybCkge1xuICAgICAgaXNEaWZmZXJlbnQgPSB0cmFuc2l0aW9uLmlzUm91dGVDaGFuZ2VkKHRyYW5zaXRpb24ucGF0aCk7XG4gICAgfVxuICAgICAgIFxuICAgIGxldCBsb2FkID0gaXNEaWZmZXJlbnQgJiYgb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbigoZGF0YSkgPT4geyAgICAgICBcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRyYW5zaXRpb24ucHJldmlvdXMgJiYgdHJhbnNpdGlvbi5wcmV2aW91cy5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICAocHJldlJvdXRlICYmICFwcmV2Um91dGUubG9hZGVkKSAmJiAobG9hZCA9IHRydWUpO1xuICAgICAgcmV0dXJuIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCkudGhlbigoKSA9PiB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gdHJ1ZSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApKS50aGVuKCgpID0+IHtcbiAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybCh0aGlzLmRlZmF1bHRVcmwpKTsgICAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgKCF0cmFuc2l0aW9uLnBhdGggfHwgIXRyYW5zaXRpb24ucGF0aC5oYXNoKSkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICAgIHRyYW5zaXRpb24uZmluaXNoKCk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2VkJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSByb3V0ZXJcbiAqL1xucm91dGVyLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSBmYWxzZTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIHNoYXJlIGRhdGEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc3RvcmV9XG4gKi9cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHt9LCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRhcmdldFtrZXldLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcblxuLyoqXG4gKiBUaGUgb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgY2xhc3MgYXR0cmlidXRlIGZyb20gdGhlIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSB0aGUgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBTcGxpdCB0aGUgc3RyaW5nIGV4dGVuZGVkXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtcIkhlbGxvXCIsIFwiV29ybGRcIl1cbiAqIHV0aWxzLnNwbGl0KFwiSGVsbG8gV29ybGRcIiwgXCIgXCIpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ3ggPSA1JywgJyB5ID0gXCIxOzI7M1wiJ11cbiAqIHV0aWxzLnNwbGl0KCd4ID0gNTsgeSA9IFwiMTsyOzNcIicsIFwiO1wiLCBbJ1wiJ10pO1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0ciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVsXVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW2V4Y2x1ZGVdIFxuICovXG51dGlscy5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgZGVsID0gJycsIGV4Y2x1ZGUgPSBbXSkge1xuXHRjb25zdCBleHBzID0gW107ICAgICBcbiAgbGV0IGxhc3QgPSAnJztcblxuICBpZighZGVsKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJyk7XG4gIH1cbiAgZWxzZSBpZihkZWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KGRlbCk7XG4gIH1cbiAgZWxzZSBpZihzdHIuaW5kZXhPZihkZWwpID09IC0xKSB7XG4gICAgbGFzdCA9IHN0cjtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJycpO1xuICAgIGxldCBvcGVuID0gJyc7IFxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBleGNsdWRlLmluZGV4T2YodmFsKTsgICAgICBcblxuICAgICAgaWYoaW5kZXggPiAtMSAmJiAoIW9wZW4gfHwgb3BlbiA9PSB2YWwpKSB7XG4gICAgICAgICFvcGVuPyBvcGVuID0gZXhjbHVkZVtpbmRleF06IG9wZW4gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09IGRlbCAmJiAhb3Blbikge1xuICAgICAgICBleHBzLnB1c2gobGFzdCk7XG4gICAgICAgIGxhc3QgPSAnJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3QgKz0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGxhc3QgJiYgZXhwcy5wdXNoKGxhc3QpO1xuICByZXR1cm4gZXhwcztcbn1cblxuLyoqXG4gKiBGaWx0ZXIgdGhlIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgJ3gnKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbWyd4J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dLCAnMScsIFtbJ3gnLCAneSddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dIFxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgW1sneCddLCBbJ3knXV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiB0aGUgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGJ5IHRoZSBrZXlzXG4gKiBAcmV0dXJucyB7QXJyYXl9IFxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gbnVsbCkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYgKGtleXMgJiYgIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYodHlwZW9mIGhhbmRsZXIgIT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHN0ciA9IGhhbmRsZXI/IChoYW5kbGVyICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnO1xuICAgIGhhbmRsZXIgPSB2YWwgPT4gKHZhbD8gKHZhbCArICcnKS50b0xvd2VyQ2FzZSgpOiAnJykubWF0Y2goc3RyKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCBmaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIWtleXMgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGtleXMpIHtcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgICAga2V5ID0gQXJyYXkuaXNBcnJheShrZXkpPyBrZXk6IFtrZXldO1xuICAgICAgICBsZXQgdmFsID0ga2V5PyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgaXRlbSk6IGl0ZW07XG4gICAgXG4gICAgICAgIGlmIChoYW5kbGVyKHZhbCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJlZCAmJiByZXMucHVzaChpdGVtKTsgICBcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFNvcnQgdGhlIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XVxuICogdXRpbHMuc29ydChbe3g6IHt5OiAyfX0sIHt4OiB7eTogMX19XSwgW1sneCcsICd5J11dLCBbdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBhcnIuc2xpY2UoKTtcblxuICBpZiAoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmIChrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBhIG5ldyBvYmplY3Qgd2l0aG91dCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneSddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5leGNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHRoZSBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBvcHRpb25zID0geyBuZXN0ZWQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIHBsYWluOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgaWYob3B0aW9ucy5wbGFpbiAmJiAhdGhpcy5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgdG8gdGhlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgaWdub3JlVW5kZWZpbmVkOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgaGFzaCBmcm9tIHRoZSBzdHJpbmdcbiAqIFxuICogQHBhcmFtIHsqfSBzb3VyY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNyZWF0ZUhhc2ggPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgdHlwZW9mIHNvdXJjZSA9PSAnb2JqZWN0JyAmJiAoc291cmNlID0gSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG4gIHR5cGVvZiBzb3VyY2UgIT0gJ3N0cmluZycgJiYgKHNvdXJjZSA9ICfioIAnICsgU3RyaW5nKHNvdXJjZSkpO1xuICBsZXQgaGFzaCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hhciA9IHNvdXJjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgaGFzaCA9IGhhc2ggJiBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIGhhc2ggKyAnJztcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIHRoZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgc3RyaW5nIGZyb20gYSBkYXNoIHRvIGEgY2FtZWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIHN0cmluZyBmcm9tIGEgY2FtZWwgdG8gYSBkYXNoIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIG9iamVjdCBuZXN0ZWQgcHJvcGVydHkgZXhpc3RlbmNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgb2JqZWN0IG5lc3RlZCBwcm9wZXJ0eSB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogRGVsZXRlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBvYmplY3RcbiAqIFlvdSBjYW4gY2FuY2VsIHRoZSBkZWxldGlvbiByZXR1cm5pbmcgZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgbGV0IHZhbCA9ICcnOyAgXG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKCEobm93ICUgaSkpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgZGVib3VuY2VcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJucyB7Zm59XG4gKi9cbnV0aWxzLmRlYm91bmNlID0gZnVuY3Rpb24oZm4sIGRlbGF5ID0gMCkgeyAgXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICBmbi5fX2RlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4oKTtcbiAgICAgIGNsZWFyVGltZW91dChmbi5fX2RlYm91bmNlVGltZW91dCk7XG4gICAgICBkZWxldGUgZm4uX19kZWJvdW5jZVRpbWVvdXQ7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXSwic291cmNlUm9vdCI6IiJ9