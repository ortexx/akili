/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.1.3
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
  var isolation = this.__isolation;
  !isolation && (this.__isolation = {});
  var res = void 0;

  try {
    res = fn();

    if (isolation) {
      return res;
    }
  } catch (err) {
    this.__isolation = null;
    throw err;
  }

  var props = [];

  for (var k in this.__isolation) {
    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i];

    if (prop.component.__isRemoved) {
      continue;
    }

    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys);
    prop.component.__evaluateByKeys(prop.keys);
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
  this.__evaluation = null;
  var res = void 0;

  try {
    res = fn();
  } catch (err) {
    this.__evaluation = evaluation;
    throw err;
  }

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
  var wrapping = this.__wrapping;
  !wrapping && (this.__wrapping = true);
  var res = void 0;

  try {
    res = fn();

    if (wrapping) {
      return res;
    }
  } catch (err) {
    this.__wrapping = false;
    throw err;
  }

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
  this.__isolation = null;
  var res = void 0;

  try {
    res = fn();
  } catch (err) {
    this.__isolation = isolation;
    throw err;
  }

  this.__isolation = isolation;
  return res;
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
    this.__isRemoved = false;
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
              checkProp && checkProp.evaluated && component.scope.__set(prop.keys, prop.value, { silent: true });
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
    * @protected
    */

  }, {
    key: '__evaluateByKeys',
    value: function __evaluateByKeys(keys) {
      var _this7 = this;

      var data = this.__getBind(keys);

      var evaluate = function evaluate(val, keys) {
        _this7.__evaluateNested(keys, true);

        if (!val) {
          return;
        }

        for (var k in val) {
          if (!val.hasOwnProperty(k) || _this7.__isSystemBindingKey(k)) {
            continue;
          }

          evaluate(val[k], keys.concat([k]));
        }
      };

      evaluate(data, keys);
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
            _this9.__createIsolationObject(parents, key);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_this9.__isMounted) {
            _this9.__evaluateByKeys(keys);
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
            _this9.__createIsolationObject(parents, key);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          _this9.__evaluateByKeys(keys);
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

      return _akili2.default.isolate(function () {
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

      return _akili2.default.isolate(function () {
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
      return key.match && key.match('^_|#') || key == 'constructor';
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
    * @returns {*}
    * @protected
    */

  }, {
    key: '__createIsolationObject',
    value: function __createIsolationObject(parents, key) {
      var keys = parents.length ? [parents[0]] : [key];
      var isolationHash = this.__createKeysHash(keys);

      if (!_akili2.default.__isolation[isolationHash]) {
        _akili2.default.__isolation[isolationHash] = {
          updatedAt: new Date().getTime(),
          component: this,
          keys: keys
        };
      }

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
      delete this.__bindings;
      delete this.__attrLinks;
      delete this.__storeLinks;
      delete this.__attrs;
      delete this.attrs;
      this.__isRemoved = true;
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
      return this.__scope && this.__scope.__transition || null;
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
      this.scope.__set('loopIndex', this.index, { target: target });
    }
  }, {
    key: 'setKey',
    value: function setKey(target) {
      this.key = this.for.__key;
      this.scope.__set('loopKey', this.key, { target: target });
    }
  }, {
    key: 'setValue',
    value: function setValue(target) {
      this.value = this.for.__value;
      this.scope.__set('loopValue', this.value, { target: target, saveProxy: true });
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
        var value = _this2.getRadioValue();

        if (value === _this2.prevValue) {
          return;
        }

        _this2.prevValue = value;
        _this2.attrs.onRadio.trigger(value, { bubbles: true });
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
 * Scope class
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
   * @param {object} [options] 
   * @param {boolean} [options.saveProxy] 
   * @param {boolean} [options.silent]
   * @param {boolean} [options.target]
   * @protected
   */


  _createClass(Scope, [{
    key: '__set',
    value: function __set(keys, value) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      _akili2.default.unisolate(function () {
        options.saveProxy && (_this.__component.__disableProxyRedefining = true);
        options.silent && _this.__component.__disableKeys();
        _utils2.default.setPropertyByKeys(keys, options.target ? _this.__target : _this, function (last, val) {
          if (!last) {
            return val || {};
          }

          return value;
        });
        options.silent && _this.__component.__enableKeys();
        options.saveProxy && (_this.__component.__disableProxyRedefining = false);
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

      options = _extends({}, this.path.options, options);
      this.cancel();
      return router.state.call(router, state, params, query, hash, options);
    }

    /**
     * Reload the current state
     * 
     * @see router.state
     */

  }, {
    key: 'reload',
    value: function reload() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      options = _extends({}, this.path.options, options);
      params = _extends({}, this.path.params, params);
      query = _extends({}, this.path.query, query);
      hash = hash === undefined ? this.path.hash : hash;
      return router.state.call(router, this.path.state.name, params, query, hash, options);
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
      var index = router.__queue.indexOf(this);
      index >= 0 && router.__queue.splice(index, 1);
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
router.transition = null;
router.__queue = [];
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
  var transition = new Transition(url);
  this.__queue.push(transition);

  return new Promise(function (resolve) {
    var interval = setInterval(function () {
      if (_this5.__queue[0] === transition) {
        clearInterval(interval);
        resolve();
      }
    });
  }).then(function () {
    transition.previous = router.transition || null;
    router.transition = transition;
    window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));
    var params = {};
    var query = _this5.getUrlQuery();
    var hash = _this5.hashMode ? '' : window.location.hash.replace('#', '');
    var level = 0;

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

    return next(_this5.getStatesByLevel(0)).then(function () {
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
          transition.finish();
          return _this5.changeState(options);
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
      window.dispatchEvent(new CustomEvent('state-changed', { detail: transition }));
      transition.finish();
      return transition;
    });
  }).catch(function (err) {
    transition && transition.finish();
    throw err;
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

    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ba2lsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWtpbGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJkZWJ1ZyIsIl9faW5pdCIsIl9fcm9vdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX3RhZ3MiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9fd3JhcHBpbmciLCJfX3Jvb3RPdXRlckhUTUwiLCJfX29uRXJyb3IiLCJ0cmlnZ2VySW5pdCIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJzZXJ2aWNlcyIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJnbG9iYWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIk9iamVjdHMiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiU291cmNlIiwiVGV4dCIsIlRleHRhcmVhIiwiVHJhY2siLCJVcmwiLCJWaWRlbyIsInJlcXVlc3QiLCJyb3V0ZXIiLCJzdG9yZSIsImRlZmluZSIsImNsZWFyR2xvYmFscyIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJpc29sYXRpb24iLCJyZXMiLCJlcnIiLCJwcm9wcyIsImsiLCJpIiwibCIsImxlbmd0aCIsInByb3AiLCJjb21wb25lbnQiLCJfX2lzUmVtb3ZlZCIsIl9faXNSZXNvbHZlZCIsIl9fdHJpZ2dlclN0b3JlQW5kQXR0ciIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsIndyYXBwaW5nIiwidW5pc29sYXRlIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiX19jYW5jZWxsZWQiLCJmaW5kIiwicCIsIl9fcHJldmVudCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIkFLSUxJX1NTUiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwiX19jb21waWxlIiwiYWxsIiwidGhlbiIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInJlbW92ZUNvbXBvbmVudCIsImFsaWFzIiwicmVtb3ZlQWxpYXMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImNhdGNoIiwiaXNvbGF0ZUdsb2JhbHMiLCJfX3RhcmdldCIsIndyYXAiLCJpc29sYXRlRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiaXNBcnJheSIsIm51bSIsImluZGV4IiwiY2FsbGJhY2siLCJfX2lzb2xhdGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJha2lsaVdyYXBwZWRGdW5jdGlvbiIsInRhZyIsImFkZFRhZyIsImhhc1RhZyIsInJlbW92ZVRhZyIsInVuZGVmaW5lZCIsInRyaWdnZXJUYWciLCJfX2NvbXBvbmVudCIsIl9fZXZhbHVhdGVOb2RlIiwiaGFuZGxlRXJyb3JzIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsIm91dGVySFRNTCIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJkZWluaXQiLCJkZXN0cm95Iiwic3RvcmVLZXlzIiwiYXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiaW5zdGFuY2UiLCJfX2NhY2hlIiwiX19pbnN0YW5jZXMiLCJjYWNoZSIsIl9fbWFpbiIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsIlJlZ0V4cCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInZhcmlhYmxlcyIsInZhcnMiLCJleHBzIiwic3BsaXQiLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVTdG9yZUtleXMiLCJfX2Rpc2FibGVBdHRyS2V5cyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fY29udGVudCIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImF0dHJzIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRpb25QYXJlbnQiLCJyZXNvbHZlIiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX19zY29wZSIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJpbmRleE9mIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGlvblBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3BlcnR5QnlLZXlzIiwiX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUiLCJfX2dldE5vZGVQcm9wZXJ0eSIsImNvbXBhcmUiLCJjcmVhdGVIYXNoIiwiaGFzaCIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwiQXR0ciIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsIl9fZXhwcmVzc2lvbiIsInRyaW0iLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJldmFsQ29tcG9uZW50IiwiY29tIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJlbnRCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2UiLCJfX2NyZWF0ZUtleXNIYXNoIiwicGFyZW50c0hhc2giLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJpc1Njb3BlUHJveHkiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5Iiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJlbGVtZW50IiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19nZXRBbGxCaW5kcyIsIl9faW5pdGlhbGl6ZWQiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlIiwiX19kaXNhYmxlS2V5cyIsImNoZWNrUHJvcCIsIl9fc2V0Iiwic2lsZW50IiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInZhbCIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiX19ldmFsdWF0ZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJ0b0NhbWVsQ2FzZSIsIl9fYXR0cmlidXRlT24iLCJfX3ByZXBhcmVBdHRyaWJ1dGVJbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsIl9fYXR0clRyaWdnZXJCeU5hbWUiLCJjb3B5IiwicGxhaW4iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9faXNFdmVudCIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19oYXNCaW5kaW5ncyIsIl9fZXZhbHVhdGVFdmVudCIsImlzQXR0ciIsImhhc0JpbmRpbmdzIiwiaXNCb29sZWFuIiwiaXNFdmVudCIsIl9faXNCb29sZWFuIiwic2F2ZUJpbmRpbmdzIiwiX191bmJpbmRCeU5vZGVzIiwiX191bmJpbmRQYXJlbnRzQnlOb2RlcyIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImlzRGVsZXRlZCIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX2RlaW5pdGlhbGl6ZU5vZGUiLCJQcm94eSIsInRhcmdldCIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsImZvclBhcmVudHMiLCJmb3JEYXRhIiwicG9wIiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY2hlY2tEaXNhYmxlbWVudCIsIkNIRUNLX0VYSVNURU5DRSIsInRhcmdldFBhcmVudFZhbHVlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJjdXJyZW50S2V5cyIsImN1cnJlbnRLZXlTdHJpbmciLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJ0eXBlIiwicHJveHkiLCJfX2dldERpc2FibGVtZW50VHlwZVN0b3JlIiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwic29ydCIsImtleVN0cmluZyIsImluZm8iLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImNhbGxPblN0YXJ0IiwiY2FwaXRhbGl6ZSIsImF0dHJzS2V5cyIsImZpbHRlciIsIm1hdGNoIiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsImlzUGxhaW5PYmplY3QiLCJDSEVDS19QUk9YWSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsIl9fa2V5cyIsIm5lc3RlZCIsInRhcmdldEtleXMiLCJfX29ic2VydmUiLCJpc29sYXRpb25IYXNoIiwidXBkYXRlZEF0IiwiZ2V0VGltZSIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiY29sbGVjdCIsInJvb3RBdHRycyIsIm5vZGVzIiwiX19tYXBOb2RlcyIsInNldFByb3BlcnR5QnlLZXlzIiwibGFzdCIsIk5vZGUiLCJ1bmJpbmQiLCJqIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsImRldGFjaE5vZGVzIiwiZGVpbml0aWFsaXplTm9kZXMiLCJfX2VtcHR5IiwiX19jbGVhclN0b3JlTGlua3MiLCJfX3JlbW92ZSIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwiaGFuZGxlciIsInVuc2hpZnQiLCJfX3N0b3JlQnlGdW5jdGlvbiIsIl9fc3RvcmVCeUtleXMiLCJfX2F0dHJCeUZ1bmN0aW9uIiwiX19hdHRyQnlLZXlzIiwiX191bnN0b3JlQnlGdW5jdGlvbiIsIl9fdW5zdG9yZUJ5S2V5cyIsIl9fdW5hdHRyQnlGdW5jdGlvbiIsIl9fdW5hdHRyQnlLZXlzIiwiX19nZXRQYXJlbnQiLCJfX2dldENoaWxkcmVuIiwiX19nZXROZWFyIiwiYXBwZW5kQ2hpbGQiLCJfX3RyYW5zaXRpb24iLCJzdGF0ZSIsInBhcmFtcyIsInF1ZXJ5IiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwidXJsIiwib25TdGF0ZUNoYW5nZWQiLCJzZXRBY3Rpdml0eSIsInNldFN0YXRlIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInNldFVybCIsInJlc2V0SHJlZiIsImdldFN0YXRlIiwiaXNBY3RpdmVTdGF0ZSIsImluQWN0aXZlU3RhdGUiLCJocmVmIiwiY3JlYXRlU3RhdGVVcmwiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInN0eWxlIiwidmFsdWVLZXkiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiTG9vcCIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yRWwiLCJyZXNldCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIl9faXRlcmF0b3IiLCJfX3ZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIm1hc2siLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIl9faW5kZXgiLCJfX2tleSIsIl9faGFzaCIsIml0ZXJhdG9yIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJzZXRWYWx1ZSIsIl9fcHJvbWlzZXMiLCJjbG9uZU5vZGUiLCJhIiwiYiIsImxvb3AiLCJpdGVyYXRlIiwib25PdXQiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsInNhdmVQcm94eSIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJzZXRSZWNyZWF0aW9uIiwic2V0SXMiLCJjb21waWxhdGlvbiIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRQcm9wZXJ0eSIsImVtcHR5IiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvblN0YXJ0IiwieGhyIiwib25Mb2FkIiwib25FcnJvciIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwidXJsQXR0cmlidXRlIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJwcmV2IiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInRyYW5zaXRpb24iLCJsb2FkIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsImV4aXN0cyIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJnZXRDb250ZW50Iiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwiZGVjb2RlSHRtbEVudGl0aWVzIiwic2V0U2VsZWN0ZWQiLCJkZWJvdW5jZUludGVydmFsIiwiZGVib3VuY2UiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXREZWJvdW5jZSIsImludGVydmFsIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJibHVyIiwiZm9yY2UiLCJfX3JlbW92ZWQiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsIl9fcHJlcGFyZUF0dHJpYnV0ZU91dCIsIl9fZWwiLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwiZ2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3Vic3RyaW5nIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJqc29uIiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwicGFyYW1zVG9RdWVyeSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQ2FjaGVIYXNoIiwidXNlciIsInBhc3N3b3JkIiwiX2NhY2hlIiwiZ2V0Q2FjaGUiLCJjcmVhdGVkQXQiLCJ0cmFuc2Zvcm1BZnRlciIsIm9wZW4iLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVyS2V5cyIsInNldFJlcXVlc3RIZWFkZXIiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZVhNTCIsInJlc3BvbnNlVVJMIiwiY3JlYXRlQ2FjaGUiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJUcmFuc2l0aW9uIiwicHJldmlvdXMiLCJyb3V0ZXMiLCJzdGF0ZXMiLCJfX2ZpbmlzaGVkIiwicm91dGUiLCJoYXNTdGF0ZSIsInBhcmFtS2V5cyIsImZ1bGxQYXR0ZXJuIiwiX19wYXJhbVJlZ2V4IiwiZiIsInF1ZXJ5S2V5cyIsIndhdGNoSGFzaCIsInByZXZSb3V0ZSIsImdldFJvdXRlIiwiaW5jbHVkZUtleXMiLCJmaW5pc2giLCJfX3F1ZXVlIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0IiwiaGFzIiwibWFudWFsIiwicHJlcGFyZVN0YXRlQXJncyIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsImVycm9yIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwicmVwbGFjZVVybCIsInJlcGxhY2VIYXNoVXJsIiwicmVwbGFjZUhpc3RvcnlVcmwiLCJyZXBsYWNlU3RhdGUiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiZW1wdHlIYXNoIiwibmV3QXJncyIsImNyZWF0ZVN0YXRlT2JqZWN0QXJncyIsImNyZWF0ZVN0YXRlSGFzaEFyZ3MiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpbmNsdWRlcyIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwicmVsb2FkIiwiY2xlYXJJbnRlcnZhbCIsInNldFBhdGgiLCJyZWFsVXJsIiwiaXNEaWZmZXJlbnQiLCJpc1JvdXRlQ2hhbmdlZCIsInRpdGxlIiwibG9hZGVkIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiY2xhc3MiLCJjbGFzc2VzIiwic3R5bGVzIiwiZGVsIiwiZXhjbHVkZSIsIml0ZW0iLCJmaWx0ZXJlZCIsIm9yZGVyIiwiYVYiLCJiViIsIm5ld09iaiIsIm9iaktleXMiLCJleGNsdWRlS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiaWdub3JlVW5kZWZpbmVkIiwiY2xlYXJVbmRlZmluZWQiLCJhS2V5cyIsImJLZXlzIiwiU3RyaW5nIiwiY2hhciIsImNoYXJDb2RlQXQiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJ0ZXh0Q29udGVudCIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJNYXRoIiwicmFuZG9tIiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJfX2RlYm91bmNlVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OFFDbEZBOzs7Ozs7Ozs7QUFTQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFD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LEVBQVA7QUFDRCxLQUZELE1BR0s7QUFDSC9SLGFBQU94UyxJQUFJUSxDQUFKLENBQVA7QUFDRDtBQUNGOztBQUVELE1BQUlOLE1BQU1BLEdBQUdzUyxHQUFILENBQVYsRUFBbUI7QUFDakIsV0FBTyxLQUFLelMsa0JBQUwsQ0FBd0JXLE1BQXhCLEVBQWdDUixFQUFoQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT3NTLEdBQVA7QUFDRCxDQW5CRDs7QUFxQkE7Ozs7Ozs7QUFPQXpXLE1BQU1zbUIsUUFBTixHQUFpQixVQUFTbmlCLEVBQVQsRUFBd0I7QUFBQSxNQUFYbXVCLEtBQVcsdUVBQUgsQ0FBRzs7QUFDdkMsU0FBTyxZQUFNO0FBQ1hDLGlCQUFhcHVCLEdBQUdxdUIsaUJBQWhCO0FBQ0FydUIsT0FBR3F1QixpQkFBSCxHQUF1QnR3QixXQUFXLFlBQU07QUFDdENpQztBQUNBb3VCLG1CQUFhcHVCLEdBQUdxdUIsaUJBQWhCO0FBQ0EsYUFBT3J1QixHQUFHcXVCLGlCQUFWO0FBQ0QsS0FKc0IsRUFJcEJGLEtBSm9CLENBQXZCO0FBS0QsR0FQRDtBQVFELENBVEQ7O2tCQVdldHlCLEsiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBa2lsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBa2lsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWtpbGkuanNcIik7XG4iLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuXG4vKipcbiAqIFRoZSBmcmFtZXdvcmsgbWFpbiBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLm9wdGlvbnMgPSB7XG4gIGRlYnVnOiB0cnVlXG59O1xuXG5Ba2lsaS5fX2luaXQgPSBudWxsO1xuQWtpbGkuX19yb290ID0gbnVsbDtcbkFraWxpLl9fY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuX19hbGlhc2VzID0ge307XG5Ba2lsaS5fX3Njb3BlcyA9IHt9O1xuQWtpbGkuX19zdG9yZUxpbmtzID0ge307XG5Ba2lsaS5fX3dpbmRvdyA9IHt9O1xuQWtpbGkuX190YWdzID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuQWtpbGkuX193cmFwcGluZyA9IGZhbHNlOyAgXG5Ba2lsaS5fX3Jvb3RPdXRlckhUTUwgPSAnJztcbkFraWxpLl9fb25FcnJvciA9ICgpID0+IEFraWxpLnRyaWdnZXJJbml0KGZhbHNlKTtcblxuQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbl07XG5cbkFraWxpLmNvbXBvbmVudHMgPSB7fTtcbkFraWxpLnNlcnZpY2VzID0ge307XG5Ba2lsaS5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5Ba2lsaS5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5Ba2lsaS5TY29wZSA9IFNjb3BlO1xuQWtpbGkudXRpbHMgPSB1dGlscztcbkFraWxpLmdsb2JhbHMgPSBnbG9iYWxzO1xuQWtpbGkuY29tcG9uZW50cy5BID0gQTtcbkFraWxpLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbkFraWxpLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG5Ba2lsaS5jb21wb25lbnRzLkZvciA9IEZvcjtcbkFraWxpLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbkFraWxpLmNvbXBvbmVudHMuSWYgPSBJZjtcbkFraWxpLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG5Ba2lsaS5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG5Ba2lsaS5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbkFraWxpLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbkFraWxpLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbkFraWxpLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbkFraWxpLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbkFraWxpLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuQWtpbGkuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG5Ba2lsaS5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuQWtpbGkuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuQWtpbGkuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuQWtpbGkuY29tcG9uZW50cy5VcmwgPSBVcmw7XG5Ba2lsaS5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbkFraWxpLnNlcnZpY2VzLnN0b3JlID0gc3RvcmU7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24gKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG4vKipcbiAqIENsZWFyIHRoZSBnbG9iYWwgY29udGV4dFxuICovXG5Ba2lsaS5jbGVhckdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvcihsZXQga2V5IGluIGdsb2JhbHMpIHtcbiAgICBkZWxldGUgZ2xvYmFsc1trZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy51bndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbn07XG5cbi8qKlxuICogSm9pbiB0aGUgYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24gKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHRoZSBzY29wZVxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICBpZiAodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgc2NvcGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzY29wZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgaXMgd3JhcHBlZCBpbiB0aGUgQWtpbGkgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSB0ZW1wbGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdGhlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCBzdHIgPT4gISF0aGlzLl9fc2NvcGVzW3N0cl0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBzY29wZSBjaGFuZ2VzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7IFxuICBsZXQgaXNvbGF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgIWlzb2xhdGlvbiAmJiAodGhpcy5fX2lzb2xhdGlvbiA9IHt9KTtcbiAgbGV0IHJlcztcblxuICB0cnkge1xuICAgIHJlcyA9IGZuKCk7XG5cbiAgICBpZihpc29sYXRpb24pIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICB9XG4gIGNhdGNoKGVycikge1xuICAgIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICAgIHRocm93IGVycjtcbiAgfVxuICBcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7ICAgIFxuICAgIGNvbnN0IHByb3AgPSBwcm9wc1tpXTtcblxuICAgIGlmKHByb3AuY29tcG9uZW50Ll9faXNSZW1vdmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgIFxuICAgIHByb3AuY29tcG9uZW50Ll9faXNSZXNvbHZlZCAmJiBwcm9wLmNvbXBvbmVudC5fX3RyaWdnZXJTdG9yZUFuZEF0dHIocHJvcC5rZXlzKTtcbiAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cyk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIHRoZSBldmFsdWF0aW9uIGluc2lkZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjsgIFxuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIGxldCByZXM7XG5cbiAgdHJ5IHtcbiAgICByZXMgPSBmbigpO1xuICB9XG4gIGNhdGNoKGVycikge1xuICAgIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247IFxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSBvbmx5IHRoZSByb290IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLndyYXBwaW5nID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCB3cmFwcGluZyA9IHRoaXMuX193cmFwcGluZztcbiAgIXdyYXBwaW5nICYmICh0aGlzLl9fd3JhcHBpbmcgPSB0cnVlKTtcbiAgbGV0IHJlcztcblxuICB0cnkge1xuICAgIHJlcyA9IGZuKCk7XG5cbiAgICBpZih3cmFwcGluZykge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH1cbiAgY2F0Y2goZXJyKSB7XG4gICAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7XG4gICAgdGhyb3cgZXJyO1xuICB9XG5cbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7IFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgdGhlIGlzb2xhdGlvbiBpbnNpZGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICBsZXQgcmVzO1xuXG4gIHRyeSB7XG4gICAgcmVzID0gZm4oKTtcbiAgfVxuICBjYXRjaChlcnIpIHtcbiAgICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICAgIHRocm93IGVycjtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBpc29sYXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgaWYod2luZG93LkFLSUxJX1NTUikge1xuICAgIGNvbnN0IGFyciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnW25vLXNzcl0nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBhcnJbaV0ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gZWwgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTsgICAgXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7ICAgIFxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQuXG4gKiBPciBnZXQgaXQgaWYgdGhlIGZ1bmN0aW9uIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG4gIFxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1ZykgeyAgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzLlxuICogT3IgZ2V0IGl0IGlmIHRoZSBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS5yZW1vdmVBbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmICh0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgXG4gIGlmKCF3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG4gIH0gIFxufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBnbG9iYWxzXG4gKi9cbkFraWxpLmlzb2xhdGVHbG9iYWxzID0gZnVuY3Rpb24gKCkgeyAgXG4gIGdsb2JhbHMuX190YXJnZXQudXRpbHMgPSB0aGlzLndyYXAodXRpbHMpOyBcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgaWYod2luZG93LkFLSUxJX1NTUikge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuICAgIFxuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0gICAgXG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZiAobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYXJnc1sxXSA9IGxpc3RlbmVyLmZuO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB3aXRoIHRoZSBpc29sYXRpb24gY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighY2FsbGJhY2suX19pc29sYXRlZCkge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3NbaW5kZXhdLCAnX19pc29sYXRlZCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBvYmplY3QvZnVuY3Rpb24gdG8gaXNvbGF0ZSBhbmQgdW5ldmFsdWF0ZSBkYXRhXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqL1xuQWtpbGkud3JhcCA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3VycmVudCA9IG9iajtcblxuICBpZih0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicpIHtcbiAgICBvYmogPSB0aGlzLndyYXBGdW5jdGlvbihvYmosIG9wdGlvbnMpO1xuXG4gICAgaWYob2JqID09PSBjdXJyZW50KSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuXG4gIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG5cbiAgICBpZighZGVzY3JpcHRvci5jb25maWd1cmFibGUgfHwgIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMucmV2ZXJzZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IG9ialtrZXldLl9fYWtpbGkgfHwgb2JqW2tleV0gfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IHRoaXMud3JhcChvYmpba2V5XSwgb3B0aW9ucykgfSk7XG4gIH0gXG4gIFxuICByZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBVbndyYXAgdGhlIG9iamVjdC9mdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqL1xuQWtpbGkudW53cmFwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy53cmFwKG9iaiwgeyByZXZlcnNlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY29uc3QgYWtpbGlXcmFwcGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYob3B0aW9ucy50YWcgJiYgQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICBBa2lsaS5hZGRUYWcob3B0aW9ucy50YWcsIEFraWxpLl9fZXZhbHVhdGlvbi5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkud3JhcHBpbmcoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmbik7XG4gIGFraWxpV3JhcHBlZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBha2lsaVdyYXBwZWRGdW5jdGlvbltrZXldID0gZm5ba2V5XTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShha2lsaVdyYXBwZWRGdW5jdGlvbiwgJ19fYWtpbGknLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZuXG4gIH0pO1xuXG4gIHJldHVybiBha2lsaVdyYXBwZWRGdW5jdGlvbjtcbn07XG5cbi8qKlxuICogQWRkIHRoZSB0YWdcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cbkFraWxpLmFkZFRhZyA9IGZ1bmN0aW9uICh0YWcsIG5vZGUpIHtcbiAgaWYodGhpcy5oYXNUYWcodGFnLCBub2RlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0gPSB7fTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSA9IFtdOyAgICBcbiAgfVxuXG4gIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddLnB1c2goeyBub2RlIH0pO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB0YWcgZXhpc3RzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuQWtpbGkuaGFzVGFnID0gZnVuY3Rpb24odGFnLCBub2RlKSB7XG4gIGlmKCFub2RlKXtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAgICBcbiAgfSBcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RhZ11cbiAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXG4gKi9cbkFraWxpLnJlbW92ZVRhZyA9IGZ1bmN0aW9uICh0YWcsIG5vZGUpIHtcbiAgaWYodHlwZW9mIHRhZyA9PSAnb2JqZWN0Jykge1xuICAgIG5vZGUgPSB0YWc7XG4gICAgdGFnID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYoIXRhZykgeyBcbiAgICBkZWxldGUgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFub2RlKSB7XG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICAgIGZvcihsZXQgayBpbiB0aGlzLl9fdGFnc1trZXldKSB7XG4gICAgICAgIGlmKGsgPT0gdGFnKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX190YWdzW2tleV1ba11cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlmKCFPYmplY3Qua2V5cyh0aGlzLl9fdGFnc1trZXldKS5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX190YWdzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuOyAgICBcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIGlmKGtleSA9PSB0YWcpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1ba2V5XTtcbiAgICB9XG4gIH1cblxuICBpZighT2JqZWN0LmtleXModGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKS5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdO1xuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHRhZyBleHByZXNzaW9uc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKi9cbkFraWxpLnRyaWdnZXJUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgIGlmKGsgPT0gdGFnKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuX190YWdzW2tleV1ba107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBvYmogPSBhcnJbaV07XG4gICAgICAgICAgb2JqLm5vZGUuX19jb21wb25lbnQuX19ldmFsdWF0ZU5vZGUob2JqLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZSB0aGUgZXJyb3JzXG4gKi9cbkFraWxpLmhhbmRsZUVycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIHRoZSBpbml0aWFsaXphdGlvbiBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICovXG5Ba2lsaS50cmlnZ2VySW5pdCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbiAocm9vdCkgeyBcbiAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcbiAgdGhpcy5fX3Jvb3RPdXRlckhUTUwgPSByb290Lm91dGVySFRNTDtcblxuICBpZighKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm9vdCBlbGVtZW50IG11c3QgYmUgYW4gaHRtbCBlbGVtZW50YCk7XG4gIH1cblxuICBpZihyb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiaHRtbFwiIGNhbid0IGJlIHRoZSByb290IGVsZW1lbnRgKTtcbiAgfVxuXG4gIHRoaXMuX19yb290ID0gcm9vdDtcbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHsgICAgXG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sKHdpbmRvdy5BS0lMSV9TRVJWRVIuaHRtbCk7XG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUod2luZG93LkFLSUxJX1NFUlZFUi5yZXF1ZXN0Q2FjaGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgPSB7XG4gICAgICBodG1sOiB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCgpXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZiAocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSh7IGluaXQ6IHRydWUgfSk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbiAoKSB7IFxuICB0aGlzLl9fcm9vdCAmJiAodGhpcy5fX3Jvb3Qub3V0ZXJIVE1MID0gdGhpcy5fX3Jvb3RPdXRlckhUTUwpO1xuXG4gIGZvcihsZXQga2V5IGluIHRoaXMuX19zY29wZXMpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLl9fc2NvcGVzW2tleV0uX19jb21wb25lbnQ7XG4gICAgY29tcG9uZW50ICYmIGNvbXBvbmVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHRoaXMuX19yb290T3V0ZXJIVE1MID0gJyc7XG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX3Jvb3QgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzID0ge307XG4gIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gIHRoaXMuX190YWdzID0ge307XG59O1xuXG4vKipcbiAqIERlc3Ryb3kgdGhlIGZyYW1ld29ya1xuICovXG5Ba2lsaS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRlaW5pdCgpOyAgXG4gIHRoaXMuY2xlYXJHbG9iYWxzKCk7XG5cbiAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGVsZXRlIHN0b3JlLl9fdGFyZ2V0W3N0b3JlS2V5c1tpXV07XG4gIH1cblxuICByb3V0ZXIuX19pbml0ICYmIHJvdXRlci5kZWluaXQoKTtcbiAgZGVsZXRlIHdpbmRvdy5BS0lMSV9TRVJWRVI7XG4gIGRlbGV0ZSB3aW5kb3cuQUtJTElfQ0xJRU5UO1xuICBkZWxldGUgd2luZG93LkFLSUxJX1NTUjtcblxuICBmb3IobGV0IGtleSBpbiBBa2lsaSkge1xuICAgIGRlbGV0ZSBBa2lsaVtrZXldO1xuICB9XG5cbiAgZGVsZXRlIHdpbmRvdy5Ba2lsaTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBTU1IgaHRtbFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoaHRtbCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5fX3Jvb3QuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgdGhpcy5fX3Jvb3QucmVtb3ZlQXR0cmlidXRlKHRoaXMuX19yb290LmF0dHJpYnV0ZXNbaV0ubmFtZSk7XG4gIH1cblxuICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgbGV0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IodGhpcy5fX3Jvb3QgPT09IGRvY3VtZW50LmJvZHk/ICdib2R5JzogJ2JvZHkgPiAqJyk7ICAgIFxuICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XG5cbiAgZm9yIChsZXQgaSA9IGVsLmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG4gICAgdGhpcy5fX3Jvb3Quc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gIH0gIFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIFNTUiBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBTU1IgaHRtbFxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fcm9vdC5vdXRlckhUTUw7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgU1NSIGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuaGFuZGxlRXJyb3JzKCk7XG5Ba2lsaS5pc29sYXRlR2xvYmFscygpOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZScsICduby1zc3InXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZyb20gd2hpY2ggYWxsIGNvbXBvbmVudHMgYXJlIGluaGVyaXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDsgIFxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFt2YXJzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIHZhcmlhYmxlcyA9IHt9KSB7XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gdXRpbHMuc3BsaXQoZXhwcmVzc2lvbiwgJzsnLCBbJ1wiJywgXCInXCIsICdgJ10pOyAgXG4gICAgZXhwc1tleHBzLmxlbmd0aCAtIDFdID0gYHJldHVybiAke2V4cHNbZXhwcy5sZW5ndGggLSAxXX1gO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHZhcmlhYmxlcykge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB2YXJzLnB1c2godmFyaWFibGVzW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIC8qKiBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV0gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIGlmICghKGVsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhbiBodG1sIGVsZW1lbnQgdG8gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvcmApO1xuICAgIH1cblxuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVtb3ZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlU3RvcmVLZXlzID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyS2V5cyA9IHt9O1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2NvbnRlbnQgPSAnJztcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBjaGVja0NoYW5nZXM6IGZhbHNlLCBcbiAgICAgIHNldEV2ZW50czogdHJ1ZSxcbiAgICAgIHNldFBhcmVudHM6IHRydWUsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogUmVjb21waWxlIHRoZSBjb21wb25lbnRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHRydWU7IFxuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307ICBcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMpOyAgICBcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEV2ZW50cyAmJiB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRQYXJlbnRzICYmIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRCb29sZWFuQXR0cmlidXRlcyAmJiB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLmRlZmluZUF0dHJpYnV0ZXMgJiYgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7IFxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIG5vZGVcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGlvblBhcmVudC5fX2FraWxpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMyAmJiB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCkpIHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlTm9kZShjaGlsZCwgdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlKTsgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAgICBcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX2NvbnRlbnQ7ICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXNvbHZlZCgpKSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTsgICAgIFxuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7ICAgIFxuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSBlbCA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0aW9uUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRpb25QYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0aW9uUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQgPSBldmFsdWF0aW9uUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgdGhlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcGFyc2VkIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIG5lZWQgb2YgdGhlIGF2YWx1YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYgKCFub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIG5vZGUgcHJvcGVydGllcyBjaGFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSB0aGUgbm9kZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3AgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlLCBvcHRpb25zID0ge30pIHsgIFxuICAgIHJldHVybiB1dGlscy5jb21wYXJlKHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpLCBwcm9wLmhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBleGNlcHRpb24gbWVzc2FnZVxuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpIHtcbiAgICBsZXQgdGFnTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwudGFnTmFtZTtcbiAgICBsZXQgYXR0ck5hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSAoYXR0ck5hbWUgfHwgdGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZWxlbWVudE5hbWUgPSBub2RlLl9fZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gbm9kZS5uYW1lLnRvTG93ZXJDYXNlKCk6ICcnOyAgICAgICAgXG4gICAgbGV0IG1lc3NhZ2VzID0gWyBlcnIubWVzc2FnZSwgbm9kZS5fX2V4cHJlc3Npb24udHJpbSgpIF07XG4gICAgYXR0cmlidXRlTmFtZSAmJiBtZXNzYWdlcy5wdXNoKGBbYXR0cmlidXRlICR7YXR0cmlidXRlTmFtZX1dYCk7XG4gICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5jb25jYXQoW2BbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWBdKTtcbiAgICByZXR1cm4gYEV4cHJlc3Npb24gZXJyb3I6IGAgKyBtZXNzYWdlcy5qb2luKCdcXG5cXHRhdCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB0aGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcbiAgICBjb25zdCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKGNvbSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHsgICAgIFxuICAgICAgY291bnRlcisrO1xuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb24gPSBbXTtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyZW50QmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHsgICAgICAgIFxuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UoZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUsIHsgLi4uZ2xvYmFscyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEua2V5cyk7XG4gICAgICAgIGxldCBwYXJlbnRzSGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5wYXJlbnRzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7ICAgICAgICBcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID09IDUwKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFtcbiAgICAgICAgICAgICAgYEZvciBoaWdoZXIgcGVyZm9ybWFuY2UsIGRvbid0IGxvb3AgUHJveHkgYXJyYXlzL29iamVjdHMgaW5zaWRlIGV4cHJlc3Npb24gZnVuY3Rpb25zLCBvciB1c2UgQWtpbGkudW5ldmFsdWF0ZSgpIHRvIHdyYXAgeW91IGNvZGUuYCxcbiAgICAgICAgICAgICAgYCR7IG5vZGUuX19leHByZXNzaW9uLnRyaW0oKSB9YCxcbiAgICAgICAgICAgICAgYHNjb3BlIHByb3BlcnR5IFwiJHsgZGF0YS5wYXJlbnRzLmpvaW4oJy4nKSB9XCJgXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcdGF0ICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgIXBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXT8gcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID0gMTogcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdKys7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVzLCBjb3VudGVyLCBleHByZXNzaW9uLCBhdHRyaWJ1dGVWYWx1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIG5vZGUgYW5kIHNldCB0aGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBrZXlzLCBldmFsdWF0ZWQpIHtcbiAgICBsZXQgYmluZCA9IHRoaXMuX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSk7XG4gICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIGlmICghYmluZCkge1xuICAgICAgdGhpcy5fX2JpbmQoa2V5cywgeyBub2RlIH0pO1xuICAgIH0gICBcblxuICAgIHRoaXMuX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTsgIFxuICAgIFxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpOyAgICAgXG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcbiAgICAgICAgICBkYXRhID0gYmluZD8gKGJpbmQuX19kYXRhIHx8IFtdKTogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGNvbXBvbmVudC5fX2dldEFsbEJpbmRzKHByb3Aua2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBiaW5kID0gZGF0YVtrXTsgICBcblxuICAgICAgICAgIGlmKCFiaW5kIHx8ICFiaW5kLm5vZGUgfHwgIWJpbmQubm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkgeyAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhwcm9wLmtleXMpOyAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpO1xuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgeyBzaWxlbnQ6IHRydWUgfSk7IFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gZWxlbWVudHMgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gICAvKipcbiAgICogRXZhbHVhdGUgdGhlIHZhbHVlIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyAoa2V5cykgeyAgXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuICAgIFxuICAgIGNvbnN0IGV2YWx1YXRlID0gKHZhbCwga2V5cykgPT4geyAgIFxuICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMsIHRydWUpO1xuXG4gICAgICBpZighdmFsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayBpbiB2YWwpIHtcbiAgICAgICAgaWYoIXZhbC5oYXNPd25Qcm9wZXJ0eShrKSB8fCB0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBldmFsdWF0ZSh2YWxba10sIGtleXMuY29uY2F0KFtrXSkpOyAgICAgICAgXG4gICAgICB9ICAgICAgXG4gICAgfVxuICAgIFxuICAgIGV2YWx1YXRlKGRhdGEsIGtleXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IC4uLmdsb2JhbHMsICBldmVudDogZSB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gZXZhbHVhdGU7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIG5vZGUgZXhwcmVzc2lvbiB3aXRoIGNoZWNrXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2sgPSB0cnVlKSB7XG4gICAgY29uc3Qga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJzsgIFxuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7IFxuICAgICAgY29uc3QgeyByZXMsIGF0dHJpYnV0ZVZhbHVlLCBleHByZXNzaW9uLCBjb3VudGVyIH0gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG4gIFxuICAgICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgICBjb25zdCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgXG4gICAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICAgIH0gICAgICAgICAgXG4gIFxuICAgICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICAgdmFsdWUgPSBjb21wb25lbnQuX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciByZWNlaXZpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3Igc2VuZGluZ1xuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlT3V0KG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmICghbm9kZSB8fCBzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpOyAgICBcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKG5vZGUuX19pc0V2ZW50KSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBub2RlLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICBlbWl0dGVyLmJpbmQoZSA9PiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1t1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2hlY2sgPSB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2U7XG4gICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdHRyID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyO1xuICAgIGNvbnN0IHZhbCA9IG5vZGVbaXNBdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgY29uc3QgaGFzQmluZGluZ3MgPSBldmFsdWF0aW9uUmVnZXgudGVzdCh2YWwudHJpbSgpKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSBpc0F0dHI/IC9eYm9vbGVhbi0vaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcbiAgICBjb25zdCBpc0V2ZW50ID0gaXNBdHRyPyAvXm9uLSguKykvaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcblxuICAgIGlmKCFlbC5fX2FraWxpICYmICFoYXNCaW5kaW5ncyAmJiAhaXNCb29sZWFuICYmICFpc0V2ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX25hbWUgPSB0aGlzLl9fc2NvcGUuX19uYW1lICsgdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2KTtcbiAgICBub2RlLl9faXNFdmVudCA9IGlzRXZlbnQ7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZ3M7XG4gICAgbm9kZS5fX2lzQm9vbGVhbiA9IGlzQm9vbGVhbjtcbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbDtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsOyAgICBcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVpbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVpbml0aWFsaXplTm9kZShub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZighbm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzICYmICFvcHRpb25zLnNhdmVCaW5kaW5ncykgeyBcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGUpOyAgICAgXG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZSk7ICAgIFxuICAgIH1cbiAgICBcbiAgICBBa2lsaS5yZW1vdmVUYWcobm9kZSk7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9fbmFtZTtcbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faXNCb29sZWFuO1xuICAgIGRlbGV0ZSBub2RlLl9faXNFdmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50OyAgICBcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDsgICAgXG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgdGhlIGVsZW1lbnQgYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiB0aGUgbm9kZSBoYXMgbGluayB3aXRoIHRoZSBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGF0dHJpYnV0ZXMgYXMgYSBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBvYmplY3QgdG8gYSBwcm94eVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYgKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzTW91bnRlZCkgeyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZighdGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgc3RvcmUgYW5kIHRoZSBhdHRyaWJ1dGVzIGNoYW5nZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlzID0ga2V5cy5zbGljZSgwLCBsIC0gaSk7XG4gICAgICBjb25zdCBjdXJyZW50S2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGN1cnJlbnRLZXlzKTtcbiAgICAgIGNvbnN0IHZhbCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGN1cnJlbnRLZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgICBpZiAodGhpcy5fX3N0b3JlTGlua3NbY3VycmVudEtleVN0cmluZ10pIHsgIFxuICAgICAgICB0aGlzLl9fc3RvcmVUcmlnZ2VyQnlLZXlzKGN1cnJlbnRLZXlzLCB2YWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2F0dHJMaW5rc1tjdXJyZW50S2V5U3RyaW5nXSkge1xuICAgICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoY3VycmVudEtleXMsIHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgaGFzaCBmb3IgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9ICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUtleXNIYXNoKGtleXMpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDsgICAgXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdG9yZSBvZiB0aGUgZGlzYWJsZW1lbnQgdHlwZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgcHJveHk6ICdfX2Rpc2FibGVQcm94eScsXG4gICAgICBzdG9yZTogJ19fZGlzYWJsZVN0b3JlS2V5cycsXG4gICAgICBhdHRyOiAnX19kaXNhYmxlQXR0cktleXMnXG4gICAgfSlbdHlwZV07XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5JykgeyAgICBcbiAgICB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBkZWxldGUgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpO1xuICAgIHJldHVybiB0aGlzW3N0b3JlXS5fX2FsbD8gdHJ1ZTogdGhpc1tzdG9yZV1bdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7IFxuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnc3RvcmUnKSkgeyAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgY29uc3QgcCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICBcbiAgICAgIFxuICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcC5wdXNoKHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSkpOyAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgbGV0IGxpbmtzID0gKEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KEFraWxpLl9fc3RvcmVMaW5rc1snKiddIHx8IFtdKTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuXG4gICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBsaW5rLmNvbXBvbmVudDtcblxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlLCBuYW1lKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsaW5rLmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIGNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICBcbiAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgfSAgXG4gICAgfSk7ICAgXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZ2V0ICYmICFvcHRpb25zLnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhdCBsZWFzdCBcImdldFwiIG9yIFwic2V0XCIgb3B0aW9uIGFzIHRydWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICAoc3RvcmUuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZiAoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gc3RvcmUuX190YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goeyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGZuLCBkYXRlOiBEYXRlLm5vdygpIH0pO1xuXG4gICAgaWYgKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoIDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gc3RvcmVLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gc3RvcmUuX190YXJnZXRba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwga2V5KSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnYXR0cicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxpbmsuc2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGV2ID0gJ29uJyArIHV0aWxzLmNhcGl0YWxpemUobGluay5uYW1lKTtcbiAgICAgICAgdGhpcy5hdHRyc1tldl0gJiYgdGhpcy5hdHRyc1tldl0udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBsaW5rcyA9ICh0aGlzLl9fYXR0ckxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQodGhpcy5fX2F0dHJMaW5rc1snKiddIHx8IFtdKTtcbiAgICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICBcbiAgICBcbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgICBcblxuICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdXRpbHMudG9EYXNoQ2FzZShuYW1lKSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoIWxpbmsuZ2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIHRoaXMuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSAgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0ckJ5S2V5cyhuYW1lLCBrZXlzLCBvcHRpb25zID0ge30pIHsgICBcbiAgICBvcHRpb25zID0geyBnZXQ6IHRydWUsIHNldDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgICh0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpIHx8ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHRoaXMuYXR0cnNbbmFtZV0pOyBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuc2V0ID0gb3B0aW9ucy5zZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nLCBkYXRlOiBEYXRlLm5vdygpLCBzZXQ6IG9wdGlvbnMuc2V0LCBnZXQ6IG9wdGlvbnMuZ2V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDsgICAgXG5cbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdLnB1c2goeyBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IGF0dHJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX19hdHRycykuZmlsdGVyKGsgPT4gISh0aGlzLl9fYXR0cnNba10gaW5zdGFuY2VvZiBBa2lsaS5FdmVudEVtaXR0ZXIpKTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXR0cnNLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gYXR0cnNLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5fX2F0dHJzW2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIHV0aWxzLnRvRGFzaENhc2Uoa2V5KSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBhdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgY29uc3QgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgcmV0dXJuIChrZXkubWF0Y2ggJiYga2V5Lm1hdGNoKCdeX3wjJykpIHx8IGtleSA9PSAnY29uc3RydWN0b3InO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgb2YgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXRLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YXJnZXRLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgICAgY29uc3QgayA9IHRhcmdldEtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGNvbnN0IGlzb2xhdGlvbkhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSA9IHtcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIHRoZSBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcblxuICAgIGlmIChiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmIChkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyB0aGUgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovIFxuICBfX2lzU3lzdGVtQmluZGluZ0tleShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID09ICdfX2RhdGEnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGJpbmRpbmcgYnkgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5lc3RlZCBiaW5kaW5ncyBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICovXG4gIF9fZ2V0QWxsQmluZHMoa2V5cykge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBjb25zdCBjb2xsZWN0ID0gb2JqID0+IHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChvYmouX19kYXRhIHx8IFtdKTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGtleSA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdChvYmpba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdChyb290KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBiaW5kaW5nIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGNvbnN0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBjb25zdCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTsgICAgXG4gICAgY29uc3QgaGFzaCA9IHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSBub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuaGFzaCA9IGhhc2g7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgaGFzaCxcbiAgICAgIG5vZGUsXG4gICAgICBrZXlzLFxuICAgICAgZXZhbHVhdGVkICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBjb25zdCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogTWFwIHRoZSBub2Rlc1xuICAgKiBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX21hcE5vZGVzKGZuLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyByb290QXR0cnM6IHRydWUsIGF0dHJzOiB0cnVlLCBub2RlOiB0cnVlLCBlbDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgZmluZCA9IGVsID0+IHtcbiAgICAgIGlmKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYXR0cnMgJiYgKGVsICE9PSB0aGlzLmVsIHx8IG9wdGlvbnMucm9vdEF0dHJzKSkge1xuICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgZm4oYXR0cnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBlbC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBlbC5jaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBvcHRpb25zLm5vZGUgJiYgZm4obm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PSAxICYmICFub2RlLl9fYWtpbGkpIHtcbiAgICAgICAgICBmaW5kKG5vZGUpO1xuICAgICAgICAgIG9wdGlvbnMuZWwgJiYgZm4obm9kZSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBmaW5kKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbm9kZXNcbiAgICogXG4gICAqIEByZXR1cm5zIHtOb2RlW119XG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqL1xuICBfX2dldEFsbE5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4gbm9kZXMucHVzaChub2RlKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICAvKipcbiAgICogQmluZCB0aGUgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBub2RlcyBpbnN0YW5jZW9mIE5vZGUgJiYgKG5vZGVzID0gW25vZGVzXSk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBjID0ga2V5cy5sZW5ndGg7IGogPCBjOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgIFxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBiaW5kLm5vZGU7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcmVudCAmJiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwYXJlbnQgYmluZGluZ3Mgd2l0aCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZXxOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpIHsgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX19wYXJlbnRzW2ldOyAgICAgIFxuICAgICAgcGFyZW50ICYmIHBhcmVudC5fX2FraWxpICYmIHBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykgeyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgYXJyLnNwbGljZShpLCAxKTsgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIGxpbmtzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgdGhlIGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7IFxuICAgIHRoaXMucmVtb3ZlZCgpO1xuICAgIGNvbnN0IGRldGFjaE5vZGVzID0gdGhpcy5fX2RldGFjaCh7IHNhdmVCaW5kaW5nczogdHJ1ZSwgZGVpbml0aWFsaXplTm9kZXM6IHRydWUgfSk7XG4gICAgY29uc3Qgbm9kZXMgPSBbXS5jb25jYXQoZGV0YWNoTm9kZXMsIHRoaXMuX19lbXB0eSh7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KSk7IFxuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKGRldGFjaE5vZGVzKTtcbiAgICAhb3B0aW9ucy5zYXZlQmluZGluZ3MgJiYgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTsgICAgXG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpOyAgXG4gICAgdGhpcy5fX3Njb3BlLl9fcmVtb3ZlKCk7XG4gICAgZGVsZXRlIHRoaXMuX19zY29wZTtcbiAgICBkZWxldGUgdGhpcy5zY29wZTsgXG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgICBkZWxldGUgdGhpcy5lbC5fX2FraWxpO1xuICAgIGRlbGV0ZSB0aGlzLmVsOyAgICBcbiAgICBkZWxldGUgdGhpcy5fX3BhcmVudDtcbiAgICBkZWxldGUgdGhpcy5fX2F0dHJpYnV0ZU9mO1xuICAgIGRlbGV0ZSB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudDtcbiAgICBkZWxldGUgdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQ7ICAgXG4gICAgZGVsZXRlIHRoaXMuX19wYXJlbnRzO1xuICAgIGRlbGV0ZSB0aGlzLl9fYmluZGluZ3M7XG4gICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3M7XG4gICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzO1xuICAgIGRlbGV0ZSB0aGlzLl9fYXR0cnM7XG4gICAgZGVsZXRlIHRoaXMuYXR0cnM7XG4gICAgdGhpcy5fX2lzUmVtb3ZlZCA9IHRydWU7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGRyZW5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7Tm9kZVtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcbiAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkLl9fYWtpbGkuX19yZW1vdmUob3B0aW9ucykpO1xuICAgICAgaS0tO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICBvcHRpb25zLmRlaW5pdGlhbGl6ZU5vZGVzICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgICFvcHRpb25zLnNhdmVCaW5kaW5ncyAmJiB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7Tm9kZVtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuX19yZW1vdmVDaGlsZHJlbih7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KTtcbiAgICBcbiAgICB0aGlzLl9fbWFwTm9kZXMobm9kZSA9PiB7ICAgICAgXG4gICAgICBpZihub2RlLm5vZGVUeXBlID09IDEpIHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighbm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gICAgICBcbiAgICAgIFxuICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSwgeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7ICBcbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgfSwgeyByb290QXR0cnM6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuXG4gICAgIW9wdGlvbnMuc2F2ZUJpbmRpbmdzICYmIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IHBhcmVudCA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSBjaGlsZHJlbiA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGxpbmsgd2l0aCB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJzdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgdXNpbmcgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCBsZWZ0Y29tcG9uZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCByaWdodCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHsgICBcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGlsZSB0aGUgY29tcG9uZW50IGJ1dCBwcmV2ZW50IHRoZSBjb21waWxhdGlvbiBpbnNpZGVcbiAgICovXG4gIHByZXZlbnQoKSB7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBlbGVtZW50IGNvbnRlbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fcmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cblxuICBnZXQgdHJhbnNpdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuX19zY29wZSAmJiB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uKSB8fCBudWxsO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxpbmtzLlxuICogSXQgd29ya3Mgd2l0aCByb3V0ZXIgYXMgd2VsbC4gXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xpbmtzfVxuICogXG4gKiBAdGFnIGFcbiAqIEBzZWxlY3RvciBhW3N0YXRlXTpub3QoW3VybF0pLGFbdXJsXTpub3QoW3N0YXRlXSlcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdIC0gdXJsIHRvIGdvXG4gKiBAYXR0ciB7c3RyaW5nfSBbc3RhdGVdIC0gc3RhdGUgdG8gZ28ge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICogQGF0dHIge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9wYXJhbXN9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9xdWVyeX1cbiAqIEBhdHRyIHtzdHJpbmd9IFtoYXNoXSAtIGhhc2ggZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9oYXNofVxuICogQGF0dHIge29iamVjdH0gW29wdGlvbnNdIC0gb3B0aW9ucyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3JvdXRlci5sb2NhdGlvbn1cbiAqIEBzY29wZSB7Ym9vbGVhbn0gaXNBY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBhY3RpdmUgb3Igbm90IFxuICogQHNjb3BlIHtib29sZWFufSBpbkFjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIHBhcnQgb2YgdGhlIGFjdGl2ZSBzdGF0ZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkID0gKCkgPT4gdGhpcy5zdGF0ZSAmJiB0aGlzLnNldEFjdGl2aXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcblxuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnNldFN0YXRlKTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMuc2V0UGFyYW1zKTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5zZXRRdWVyeSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5zZXRIYXNoKTtcbiAgICB0aGlzLmF0dHIoJ29wdGlvbnMnLCB0aGlzLnNldE9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNldEFjdGl2aXR5KCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eSgpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnICYmIGhhc2ggIT09IHVuZGVmaW5lZCAmJiBoYXNoICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmd8bnVsbGApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGUobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZShuYW1lKTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYoKSB7XG4gICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB0aGlzLnVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSByb3V0ZXIuY3JlYXRlU3RhdGVVcmwodGhpcy5zdGF0ZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhdWRpbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGF1ZGlvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdpdGggdGhlIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQHRhZyBjb250ZW50XG4gKiBAc2VsZWN0b3IgY29udGVudCxbY29udGVudGVkaXRhYmxlXVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAYXR0ciB7Ym9vbGVhbn0gW2VkaXRhYmxlXSAtIGVkaXRhYmxlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgdGhpcyk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZW1iZWQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBlbWJlZFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgZm9yXG4gKiBAc2VsZWN0b3IgZm9yW2luXSxvbFtpbl0sdWxbaW5dLHRoZWFkW2luXSx0Ym9keVtpbl0sdGZvb3RbaW5dXG4gKiBAYXR0ciB7b2JqZWN0fGFycmF5fSBpbiAtIGRhdGEgdG8gY3JlYXRlIHRoZSBsb29wXG4gKiBAbWVzc2FnZSB7b2JqZWN0fGFycmF5fSBvdXQgLSBzZW50IG9uIHRoZSBkYXRhIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnb3V0J107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICBcbiAgICB0aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgIFxuICAgIGlmKChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUubmFtZSA9PSAnaW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLl9fcHJlcGFyZUF0dHJpYnV0ZUluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wLm5vZGU7XG5cbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJyAmJiBwcm9wLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3VwZXIuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3KTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgc3VwZXIucmVtb3ZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXRlcmF0b3JFbCAmJiB0aGlzLml0ZXJhdG9yRWwucmVtb3ZlKCk7XG4gICAgZGVsZXRlIHRoaXMuaHRtbDtcbiAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnM7XG4gICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JFbDsgXG4gICAgZGVsZXRlIHRoaXMuX19pdGVyYXRvcjtcbiAgICBkZWxldGUgdGhpcy5fX3ZhbHVlO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmIChjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yRWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudChlbC5vdXRlckhUTUwpO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KGh0bWwpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlOyAgICBcbiAgICB0aGlzLl9faGFzaCA9IHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpO1xuXG4gICAgaWYodGhpcy5pdGVyYXRvcnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2luZGV4XTsgICAgICAgIFxuICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodGhpcy5fX2luZGV4ID09PSBpdGVyYXRvci5pbmRleCk7ICAgICBcbiAgICAgIGl0ZXJhdG9yLnNldEtleSh0aGlzLl9fa2V5ID09PSBpdGVyYXRvci5rZXkpO1xuICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodXRpbHMuY29tcGFyZSh0aGlzLl9faGFzaCwgaXRlcmF0b3IuaGFzaCkpO1xuICAgICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShpdGVyYXRvci5lbCwgeyBcbiAgICAgICAgcmVjb21waWxlOiB7IFxuICAgICAgICAgIGNoZWNrQ2hhbmdlczogdHJ1ZVxuICAgICAgICB9IFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cbiAgICBcbiAgICBsZXQgZWwgPSB0aGlzLml0ZXJhdG9yRWwuY2xvbmVOb2RlKCk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoZWwpKTtcbiAgICB0aGlzLml0ZXJhdG9ycy5wdXNoKGVsLl9fYWtpbGkpO1xuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7IFxuICAgIHRoaXMuaXRlcmF0b3JzLnNvcnQoKGEsIGIpID0+IGNoaWxkcmVuLmluZGV4T2YoYS5lbCkgLSBjaGlsZHJlbi5pbmRleE9mKGIuZWwpKTtcbiAgICB0aGlzLl9fY2hpbGRyZW4uc29ydCgoYSwgYikgPT4gY2hpbGRyZW4uaW5kZXhPZihhKSAtIGNoaWxkcmVuLmluZGV4T2YoYikpO1xuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHRoaXMubG9vcChrZXksIHZhbHVlLCBpbmRleCkuaXRlcmF0ZShpbmRleCk7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBsID0gZGF0YS5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsb29wKGluZGV4LCBkYXRhW2luZGV4XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgICAgZm9yIChsZXQgbCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgICBsb29wKGtleSwgZGF0YVtrZXldLCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBpbmRleCwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaV07XG4gICAgICBpdGVyYXRvci5fX3JlbW92ZSgpO1xuICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl9fcHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdHRycy5vbk91dC50cmlnZ2VyKGRhdGEsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB9KTsgICAgXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gMDtcbiAgICB0aGlzLl9fa2V5ID0gJyc7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faGFzaCA9ICcnO1xuICAgIHRoaXMuX19wcm9taXNlcyA9IFtdO1xuICB9ICBcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBsb29wXG4gKiBAc2VsZWN0b3IgbG9vcCx0clxuICogQGF0dHIgQHNlZSBGb3JcbiAqIEBzY29wZSB7Kn0gbG9vcFZhbHVlIC0gZGF0YSBpdGVtJ3MgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIFxuICogQHNjb3BlIHtzdHJpbmd8bnVtYmVyfSBsb29wS2V5IC0ga2V5IG9mIHRoZSBpdGVyYXRpb25cbiAqIEBzY29wZSB7bnVtYmVyfSBsb29wSW5kZXggLSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICBzdXBlci5yZW1vdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZGVsZXRlIHRoaXMuZm9yO1xuICAgIGRlbGV0ZSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgeyB0YXJnZXQgfSk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIHsgdGFyZ2V0IH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgeyB0YXJnZXQsIHNhdmVQcm94eTogdHJ1ZSB9KTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLmZvci5fX2hhc2g7XG4gIH1cblxuICBpdGVyYXRlKCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGlmXG4gKiBAc2VsZWN0b3IgaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgLSBzaG93IHRoZSBlbGVtZW50IGNvbnRlbnQgb3Igbm90XG4gKiBAYXR0ciB7Ym9vbGVhbn0gcmVjcmVhdGUgLSBkZWxldGUgdGhlIGNvbnRlbnQgYW5kIHJlY3JlYXRlIG9yIGp1c3Qgc2hvdy9oaWRlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdyZWNyZWF0ZScsIHRoaXMuc2V0UmVjcmVhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaXMnLCB0aGlzLnNldElzKTtcbiAgfVxuXG4gIHNldElzKHZhbCkge1xuICAgIHRoaXMuc3RhdGUgPSAhIXZhbDtcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7ICAgIFxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+ICByZXN1bHQpO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcyA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgdGhpcy5kaXNwbGF5LCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG4gICAgdGhpcy5lbXB0eSgpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sOyAgIFxuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2UtaWZcbiAqIEBzZWxlY3RvciBlbHNlLWlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIEBzZWUgSWZcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaWZyYW1lcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGlmcmFtZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpbWFnZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpbWdcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGluY2x1ZGUgdGVtcGxhdGVzIGJ5IHVybC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaHRtbF90ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgaW5jbHVkZVxuICogQHNlbGVjdG9yIGluY2x1ZGVbdXJsXVxuICogQGF0dHIge3N0cmluZ30gdXJsIC0gdGVtcGxhdGUgcGF0aFxuICogQGF0dHIge251bWJlcnxmdW5jdGlvbnxib29sZWFufSBbY2FjaGVdIC0gcmVxdWVzdCBjYWNoZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzI2RvY3NfY2FjaGV9XG4gKiBAbWVzc2FnZSB7dm9pZH0gbG9hZCAtIHNlbnQgb24gdGhlIHRlbXBsYXRlIGxvYWRcbiAqIEBtZXNzYWdlIHtFcnJvcn0gZXJyb3IgLSBzZW50IG9uIGVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2FjaGUnLCB0aGlzLnNldENhY2hlKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldENhY2hlKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvblN0YXJ0OiB4aHIgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBpbnB1dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jaGVja2JveF9hbmRfcmFkaW99XG4gKiBcbiAqIEB0YWcgaW5wdXRcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddLmNvbmNhdChUZXh0LmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KFRleHQuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nOyAgICBcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ICBcblxuICBzZXRDaGVja2VkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIFxuICAgIGlmICh0aGlzLmVsLmNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIG9iamVjdCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIG9iamVjdFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvXG4gKiBAc2VsZWN0b3IgcmFkaW9bbmFtZV1cbiAqIEBhdHRyIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBncm91cFxuICogQGF0dHIge3N0cmluZ3xudWxsfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKiBAbWVzc2FnZSB7c3RyaW5nfSByYWRpbyAtIHNlbnQgb24gdmFsdWUgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgKCkgPT4gdGhpcy5zZXROYW1lcygpLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCduYW1lJywgdGhpcy5zZXROYW1lcyk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lIHx8IHRoaXMuYXR0cnMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAgaXRlbS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW8tYnV0dG9uXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcm91dGVyIHRlbXBsYXRlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIHJvdXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQgPSB0cnVlKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuXG4gICAgY29uc3QgZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uID0gcGF0aCA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gaHRtbCA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCFsb2FkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn0iLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHNlbGVjdC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3Nfc2VsZWN0fVxuICogXG4gKiBAdGFnIHNlbGVjdCAgXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ10uY29uY2F0KEZvci5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7IFxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCkpO1xuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHV0aWxzLmRlYm91bmNlKCgpID0+IHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pLCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2hpY2ggaGF2ZSBhc3luYyBhdHRyaWJ1dGUgY29udGVudC5cclxuICogXHJcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cclxuICogXHJcbiAqIEB0YWcgdXJsXHJcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufSIsIi8qKlxuICogQ2xhc3MgdG8gd29yayB3aXRoIGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYodGhpcy5fX3JlbW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZih0aGlzLl9fcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgdGhlIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07IFxuICAgIHRoaXMubm9kZS5fX2NvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVPdXQodGhpcy5ub2RlLCBvcHRpb25zLmRldGFpbCk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZWx5XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZW1pdHRlclxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMudW5iaW5kKCk7XG4gICAgZGVsZXRlIHRoaXMubmFtZTtcbiAgICBkZWxldGUgdGhpcy5ub2RlO1xuICAgIGRlbGV0ZSB0aGlzLmNvbXBvbmVudFxuICAgIGRlbGV0ZSB0aGlzLmVsO1xuICAgIHRoaXMuX19yZW1vdmVkID0gdHJ1ZTtcbiAgfVxufSIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuY29uc3Qgb2JqID0ge307XG5cbi8qKlxuICogR2xvYmFscyBpcyBmb3IgdXNpbmcgdGhlIGN1c3RvbSB2YXJpYWJsZXMgaW4gaHRtbFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlI2RvY3NfZ2xvYmFsc31cbiAqL1xuY29uc3QgZ2xvYmFscyA9IG5ldyBQcm94eShvYmosIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZihrZXkgPT0gJ19fdGFyZ2V0Jykge1xuICAgICAgcmV0dXJuIG9ialxuICAgIH0gICBcbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRhcmdldFtrZXldID0gQWtpbGkud3JhcCh2YWx1ZSwgeyB0YWc6IGtleSB9KTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHsgICBcbiAgICBBa2lsaS5yZW1vdmVUYWcoa2V5KTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxzOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzY29wZSB2YWx1ZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNhdmVQcm94eV0gXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuc2lsZW50XVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRhcmdldF1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlKCgpID0+IHtcbiAgICAgIG9wdGlvbnMuc2F2ZVByb3h5ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgb3B0aW9ucy5zaWxlbnQgJiYgdGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVLZXlzKCk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBvcHRpb25zLnRhcmdldD8gdGhpcy5fX3RhcmdldDogdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zLnNpbGVudCAmJiB0aGlzLl9fY29tcG9uZW50Ll9fZW5hYmxlS2V5cygpO1xuICAgICAgb3B0aW9ucy5zYXZlUHJveHkgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc2NvcGVcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19uYW1lKTtcblxuICAgIGZvcihsZXQga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzcy5cbiAqIFRoZSBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gbWFrZSByZXF1ZXN0cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0c31cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBfX2NhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGVmYXVsdHNdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JQYXR0ZXJuOiAvXlteMjNdLyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTsgXG4gICAgICBvcHRpb25zLnVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDsgIFxuICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgIFxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICAgIFxuICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKTtcbiAgICAgIHhociA9IGJlZm9yZS54aHI7XG4gICAgICBvcHRpb25zID0gYmVmb3JlLm9wdGlvbnM7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTsgIFxuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgXG4gICAgICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuanNvbiAhPT0gdHJ1ZSAmJiAob3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICBzdHIgJiYgKG9wdGlvbnMudXJsICs9IFwiP1wiICsgc3RyKTtcbiAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICBsZXQgaGFzaCA9IG51bGw7XG4gICAgICBsZXQgY2FjaGUgPSB0eXBlb2Ygb3B0aW9ucy5jYWNoZSA9PSAnZnVuY3Rpb24nPyBvcHRpb25zLmNhY2hlKG9wdGlvbnMpOiBvcHRpb25zLmNhY2hlO1xuICAgICAgKCF3aW5kb3cuQUtJTElfU1NSICYmICFBa2lsaS5fX2luaXQpICYmIChjYWNoZSA9IHRydWUpO1xuXG4gICAgICBpZihvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnICYmICghb3B0aW9ucy5ib2R5IHx8IHR5cGVvZiBvcHRpb25zLmJvZHkgPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGhhc2ggPSB0aGlzLmNyZWF0ZUNhY2hlSGFzaCh7IFxuICAgICAgICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXIsIFxuICAgICAgICAgIHBhc3N3b3JkOiBvcHRpb25zLnBhc3N3b3JkLCBcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNhY2hlICYmIGhhc2gpIHsgICAgICAgIFxuICAgICAgICBsZXQgX2NhY2hlID0gdGhpcy5nZXRDYWNoZShoYXNoKTtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKF9jYWNoZSAmJiAoY2FjaGUgPT09IHRydWUgfHwgbm93IC0gX2NhY2hlLmNyZWF0ZWRBdCA8PSBjYWNoZSkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLnRyYW5zZm9ybUFmdGVyKF9jYWNoZS5yZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWFkZXJLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgayA9IGhlYWRlcktleXNbaV07XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZSxcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB4aHIud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogeGhyLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHhoci5yZXNwb25zZVR5cGUgPT0gJ3RleHQnPyB4aHIucmVzcG9uc2VUZXh0OiAnJyxcbiAgICAgICAgICByZXNwb25zZVhNTDogeGhyLnJlc3BvbnNlVHlwZSA9PSAnZG9jdW1lbnQnPyB4aHIucmVzcG9uc2VYTUw6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlVVJMOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgdGltZW91dDogeGhyLnRpbWVvdXQsXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKHhociksICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuICYmICh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuXG4gICAgICAgIChjYWNoZSB8fCB3aW5kb3cuQUtJTElfU1NSKSAmJiBoYXNoICYmIHRoaXMuY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KTtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBoZWFkZXJzIG9mIGFuIFhNTEh0dHBSZXF1ZXN0IGluc3RhbmNlXG4gICAqIFxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fVxuICAgKi9cbiAgZ2V0SGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgIGxldCBoZWFkZXJzID0ge307XG4gICAgbGV0IHN0ciA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTsgIFxuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJ1xcdTAwMGRcXHUwMDBhJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5pbmRleE9mKCdcXHUwMDNhXFx1MDAyMCcpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGxldCBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIGxldCB2YWwgPSBsaW5lLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIGdldENhY2hlKGhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NhY2hlW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgcmVtb3ZlQ2FjaGUoaGFzaCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fY2FjaGVbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgaGFzaCBmb3Igc2F2aW5nIGluIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZUNhY2hlSGFzaChkYXRhKSB7XG4gICAgcmV0dXJuIHV0aWxzLmNyZWF0ZUhhc2goZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgb2JqZWN0IHRvIGEgcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChrID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoa2V5ID0+IG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSkpO1xuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBxdWVyeSBzdHJpbmcgdG8gYW4gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSB0aGUgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIGRhdGEgYmVmb3JlIHRoZSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucykge1xuICAgIHJldHVybiB7IHhociwgb3B0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBkYXRhIGFmdGVyIHRoZSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkYXRhOiByZXN1bHQucmVzcG9uc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBhIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VhIGEgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBhIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBIRUFEIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGhlYWQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdIRUFEJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxucmVxdWVzdC5fX2luc3RhbmNlcyA9IHt9O1xucmVxdWVzdC5fX2NhY2hlID0ge307XG5cbi8qKlxuICogQWRkIGEgbmV3IGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uIChuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbi8qKlxuICogVHJhbnNpdGlvbiBjbGFzcy5cbiAqIFRoZSBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGluY2x1ZGVzIHRoZSBsYXN0IGFjdHVhbCByb3V0ZXIgdHJhbnNpdGlvbiBpbmZvcm1hdGlvbi5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdHJhbnNpdGlvbn1cbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHByZXZpb3VzID0gbnVsbCkgeyAgXG4gICAgdGhpcy51cmwgPSB1cmw7ICBcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlOyAgICBcbiAgICB0aGlzLl9fZmluaXNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3Qoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyAuLi50aGlzLnBhdGgub3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuY2FuY2VsKCk7ICAgXG4gICAgcmV0dXJuIHJvdXRlci5zdGF0ZS5jYWxsKHJvdXRlciwgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZCB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSByb3V0ZXIuc3RhdGVcbiAgICovXG4gIHJlbG9hZChwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgLi4udGhpcy5wYXRoLm9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICBwYXJhbXMgPSB7IC4uLnRoaXMucGF0aC5wYXJhbXMsIC4uLnBhcmFtcyB9O1xuICAgIHF1ZXJ5ID0geyAuLi50aGlzLnBhdGgucXVlcnksIC4uLnF1ZXJ5IH07XG4gICAgaGFzaCA9IGhhc2ggPT09IHVuZGVmaW5lZD8gdGhpcy5wYXRoLmhhc2g6IGhhc2g7XG4gICAgcmV0dXJuIHJvdXRlci5zdGF0ZS5jYWxsKHJvdXRlciwgdGhpcy5wYXRoLnN0YXRlLm5hbWUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwYXRoXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF0aCBcbiAgICovXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0geyBwYXJhbXM6IHt9LCBxdWVyeToge30sIC4uLnBhdGggfTtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHRoaXMucGF0aCk7XG4gICAgdGhpcy5zdGF0ZXNbdGhpcy5wYXRoLnN0YXRlLm5hbWVdID0gdGhpcy5wYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHJvdXRlIGJ5IHRoZSBzdGF0ZVxuICAgKiAgXG4gICAqIEBwYXJhbSB7Kn0gc3RhdGUgXG4gICAqL1xuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYgKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIHRoZSBzdGF0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICAgKi9cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gISF0aGlzLnN0YXRlc1tzdGF0ZS5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgcm91dGUgaXMgY2hhbmdlZFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHJvdXRlXG4gICAqL1xuICBpc1JvdXRlQ2hhbmdlZChyb3V0ZSkge1xuICAgIGlmKCF0aGlzLnByZXZpb3VzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IHJvdXRlLnN0YXRlO1xuXG4gICAgaWYoIXRoaXMucHJldmlvdXMuaGFzU3RhdGUoc3RhdGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbUtleXMgPSBbXTtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHJvdXRlci5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiBwYXJhbUtleXMucHVzaCh2KSk7XG4gICAgXG4gICAgZm9yKGxldCBrZXkgaW4gc3RhdGUucGFyYW1zKSB7XG4gICAgICBpZihwYXJhbUtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICAgIHBhcmFtS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlLZXlzID0gT2JqZWN0LmtleXMoc3RhdGUucXVlcnkpO1xuICAgIGNvbnN0IHdhdGNoSGFzaCA9IHN0YXRlLmhhc2ggIT09IHVuZGVmaW5lZDsgICAgXG4gICAgY29uc3QgcHJldlJvdXRlID0gdGhpcy5wcmV2aW91cy5nZXRSb3V0ZShzdGF0ZSk7IFxuXG4gICAgY29uc3QgcHJldiA9IHsgXG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHByZXZSb3V0ZS5wYXJhbXMsIHBhcmFtS2V5cyksIFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHByZXZSb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH07XG5cbiAgICBjb25zdCBjdXJyZW50ID0ge1xuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5wYXJhbXMsIHBhcmFtS2V5cyksXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9XG5cbiAgICBpZih3YXRjaEhhc2gpIHtcbiAgICAgIHByZXYuaGFzaCA9IHByZXZSb3V0ZS5oYXNoO1xuICAgICAgY3VycmVudC5oYXNoID0gcm91dGUuaGFzaDtcbiAgICB9XG5cbiAgICByZXR1cm4gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHRoZSBjdXJyZW50IHRyYW5zaXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHsgICBcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTsgIFxuICAgIHRoaXMuZmluaXNoKCk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2ggdGhlIHRyYW5zaXRpb25cbiAgICovXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLl9fZmluaXNoZWQgPSB0cnVlO1xuICAgIGRlbGV0ZSB0aGlzLnByZXZpb3VzO1xuICAgIGNvbnN0IGluZGV4ID0gcm91dGVyLl9fcXVldWUuaW5kZXhPZih0aGlzKTtcbiAgICBpbmRleCA+PSAwICYmIHJvdXRlci5fX3F1ZXVlLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIudHJhbnNpdGlvbiA9IG51bGw7XG5yb3V0ZXIuX19xdWV1ZSA9IFtdO1xucm91dGVyLl9fcmVkaXJlY3RzID0gMDtcbnJvdXRlci5fX2luaXQgPSBmYWxzZTtcbnJvdXRlci5fX3BhcmFtUmVnZXggPSAvKFxcLz86KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBhIG5ldyBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHBhcmFtczoge30sXG4gICAgcXVlcnk6IHt9LFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtzdGF0ZX1gKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKSk7ICBcbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpOyAgICBcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpO1xuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gc29tZSBwb3NpdGlvblxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIGJ5IHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIG9wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpOyAgXG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSByb3V0ZXIuIFxuICogTXVzdCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlOyAgICBcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlIGJ5IHRoZSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzdGF0ZSBieSB0aGUgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdXJsIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMucmVwbGFjZUhhc2hVcmwodXJsKTogdGhpcy5yZXBsYWNlSGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB1cmwgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB1cmwgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnIycgKyAodXJsIHx8ICcvJykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1ZXJ5IHBhcmFtcyB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcXVlcnkgcGFyYW1zIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwYXJlXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30sIHByZXBhcmUgPSB0cnVlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIFxuICBpZihwcmVwYXJlKSB7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7XG4gIH1cblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+ICcvJyArIChwYXJhbXNbdl0gfHwgJycpKTtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15cXF4vLCAnJyk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGlmICghdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVBcmdzID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBhcmdzID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcbiAgICBjb25zdCBwYXJhbXNUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVQYXJhbXMoc3RhdGUsIHBhcmFtcywgYXJncyk7XG4gICAgY29uc3QgcXVlcnlUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVRdWVyeShzdGF0ZSwgcXVlcnksIGFyZ3MpO1xuICAgIGNvbnN0IGhhc2hUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVIYXNoKHN0YXRlLCBoYXNoLCBhcmdzKTtcbiAgICBcbiAgICBpZihoYXNoVGVtcCA9PT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmKGhhc2hUZW1wID09PSAnJykge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBuZXdBcmdzID0geyBwYXJhbXM6IHBhcmFtc1RlbXAsIHF1ZXJ5OiBxdWVyeVRlbXAsIGhhc2g6IGhhc2hUZW1wLCBvcHRpb25zIH07XG5cbiAgICBpZih1dGlscy5jb21wYXJlKG5ld0FyZ3MsIGFyZ3MpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBhcmdzID0gbmV3QXJncztcbiAgfVxuICAgIFxuICByZXR1cm4gYXJncztcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBwYXJhbXNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUGFyYW1zID0gZnVuY3Rpb24oc3RhdGUsIHBhcmFtcywgYXJncykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xuXG4gIGZvcihsZXQgaSA9IHN0YXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBwYXJhbXMgPSB0aGlzLmNyZWF0ZVN0YXRlT2JqZWN0QXJncyhwYXJhbXMsIHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucGFyYW1zLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXM7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcXVlcnlcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVRdWVyeSA9IGZ1bmN0aW9uKHN0YXRlLCBxdWVyeSwgYXJncykgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpO1xuXG4gIGZvcihsZXQgaSA9IHN0YXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBxdWVyeSA9IHRoaXMuY3JlYXRlU3RhdGVPYmplY3RBcmdzKHF1ZXJ5LCB0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnF1ZXJ5LCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0YXRlIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gY3VycmVudFxuICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZU9iamVjdEFyZ3MgPSBmdW5jdGlvbiAoY3VycmVudCwgZGVmYXVsdHMsIGFyZ3MgPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSB9KSB7XG4gIGNvbnN0IGFsbCA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnQpO1xuXG4gIGZvcihsZXQga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgbGV0IHZhbCA9IGRlZmF1bHRzW2tleV07XG5cbiAgICBpZihhbGxba2V5XSA9PT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhbGxba2V5XSA9IHZhbChhcmdzKTtcbiAgICB9XG5cbiAgICBpZihhbGxba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiBhbGwpIHtcbiAgICBpZihhbGxba2V5XSA9PT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGFsbFtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbGw7IFxufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGhhc2hcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUhhc2ggPSBmdW5jdGlvbihzdGF0ZSwgaGFzaCwgYXJncykge1xuICBpZihoYXNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IHN0YXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBoYXNoID0gdGhpcy5jcmVhdGVTdGF0ZUhhc2hBcmdzKGhhc2gsIHRoaXMuZ2V0U3RhdGUoY3VycmVudCkuaGFzaCwgYXJncyk7XG4gIH1cbiAgXG4gIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3RhdGUgaGFzaCBhcmd1bWVudHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gY3VycmVudFxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlSGFzaEFyZ3MgPSBmdW5jdGlvbiAoY3VycmVudCwgZGVmYXVsdHMsIGFyZ3MgPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSB9KSB7XG4gIGlmKGN1cnJlbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIGlmKHR5cGVvZiBkZWZhdWx0cyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRzKGFyZ3MpO1xuICB9XG5cbiAgaWYoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBhdHRlcm4gaW5mb1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG4gICAgcmV0dXJuICcvPyhbXi9dKiknO1xuICB9KTtcblxuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC8oW15eL10rKVsvXSskLywgJyQxJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybiwgJ2cnKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuICBcbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIC4uLmFyZ3MpID0+IHsgXG4gICAgYXJncyA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAyKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcmdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHYgPSBhcmdzW2ldO1xuICAgICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgfSAgXG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCB1cmwgPSByb3V0ZXIudHJhbnNpdGlvbiAmJiAhcm91dGVyLnRyYW5zaXRpb24uX19maW5pc2hlZD8gcm91dGVyLnRyYW5zaXRpb24udXJsOiB0aGlzLmdldFVybCgpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcygnLycgKyB1cmwuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJy8/KFteL10qKScpO1xuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC9eXFxeLywgJycpLnJlcGxhY2UoL1xcJCQvLCAnJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14vJyArIHVybFBhdHRlcm4gKyAnLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpOyAgXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHJvdXRlIGNvbXBvbmVudCBieSB0aGUgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCBmaW5kID0gZWwgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBwYXR0ZXJucyBhcnJheSBpbmZvXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXRlOiBzdGF0ZSwgLi4uY29udGVudCB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgc3RhdGVzIGJ5IHRoZSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogUmVsb2FkIHRoZSBzdGF0ZVxuICogXG4gKiBAc2VlIFRyYW5zaXRpb24ucmVsb2FkXG4gKi9cbnJvdXRlci5yZWxvYWQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIGlmKCF0aGlzLnRyYW5zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBmb3VuZCBhbiBhY3RpdmUgdHJhbnNpdGlvbiB0byByZWxvYWQgdGhlIHN0YXRlJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnJlbG9hZCguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xucm91dGVyLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5fX2lzb2xhdGVkID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRlZCA9IGZhbHNlO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7ICAgIFxuICBpZih0aGlzLl9faXNvbGF0ZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwpOyAgXG4gIHRoaXMuX19xdWV1ZS5wdXNoKHRyYW5zaXRpb24pO1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZih0aGlzLl9fcXVldWVbMF0gPT09IHRyYW5zaXRpb24pIHsgICAgICAgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLnRoZW4oKCkgPT4geyBcbiAgICB0cmFuc2l0aW9uLnByZXZpb3VzID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgICByb3V0ZXIudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7ICAgXG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTtcbiAgICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpOyBcbiAgICBsZXQgbGV2ZWwgPSAwOyAgICAgIFxuXG4gICAgY29uc3QgbmV4dCA9IHN0YXRlcyA9PiB7XG4gICAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7IFxuICAgICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIGNvbXBvbmVudDogcm91dGUgfSk7ICAgIFxuICAgICAgcGFyYW1zID0geyAuLi5wYXJhbXMsIC4uLmNvbnRlbnQucGFyYW1zIH07XG4gICAgICBoYXNoID0gaGFzaCB8fCBvcHRpb25zLmVtcHR5SGFzaDtcbiAgICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpOyAgICAgXG4gICAgICBoYXNoID0gaGFzaCB8fCAnJztcbiAgICAgIGxldCByZWFsVXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpOyBcbiAgICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwocmVhbFVybCkpOyBcbiAgICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKGxldmVsKTtcbiAgICAgIFxuICAgICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHsgICAgICBcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICAgIH0gICAgXG5cbiAgICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICB0cmFuc2l0aW9uLnBhdGgucXVlcnkgPSBxdWVyeTtcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5oYXNoID0gaGFzaDtcbiAgICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgICAgdHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgIXN0YXRlLmFic3RyYWN0ICYmIGxldmVsKys7XG4gICAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgICBpZihyZWFsVXJsICE9IHVybCkge1xuICAgICAgICBpc0RpZmZlcmVudCA9IHRyYW5zaXRpb24uaXNSb3V0ZUNoYW5nZWQodHJhbnNpdGlvbi5wYXRoKTtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICBsZXQgbG9hZCA9IGlzRGlmZmVyZW50ICYmIG9wdGlvbnMucmVsb2FkICE9PSBmYWxzZTsgICAgXG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZD8gc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKTogdHJhbnNpdGlvbi5wYXRoLmRhdGEpLnRoZW4oZGF0YSA9PiB7ICAgICAgICBcbiAgICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuICAgICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRyYW5zaXRpb24ucHJldmlvdXMgJiYgdHJhbnNpdGlvbi5wcmV2aW91cy5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICAgIChwcmV2Um91dGUgJiYgIXByZXZSb3V0ZS5sb2FkZWQpICYmIChsb2FkID0gdHJ1ZSk7XG4gICAgICAgIHJldHVybiByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQpLnRoZW4oKCkgPT4gdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWUpO1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCkpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCA9PSB0aGlzLmdldFVybCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybCh0aGlzLmRlZmF1bHRVcmwpKTsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuICAgICAgICAgIHRyYW5zaXRpb24uZmluaXNoKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIW9wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICghdHJhbnNpdGlvbi5wYXRoIHx8ICF0cmFuc2l0aW9uLnBhdGguaGFzaCkpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDsgICAgICBcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICAgIHRyYW5zaXRpb24uZmluaXNoKCk7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbjtcbiAgICB9KTtcbiAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICB0cmFuc2l0aW9uICYmIHRyYW5zaXRpb24uZmluaXNoKCk7XG4gICAgdGhyb3cgZXJyO1xuICB9KVxufTtcblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIHJvdXRlclxuICovXG5yb3V0ZXIuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IGZhbHNlO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFN0b3JlIGFsbG93cyB5b3UgdG8gc2F2ZSBhbmQgc2hhcmUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG4vKipcbiAqIFRoZSBvYmplY3Qgd2l0aCBhIGxvdCBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvdXRpbHN9XG4gKi9cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSB0aGUgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIHRoZSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIFNwbGl0IHRoZSBzdHJpbmcgZXh0ZW5kZWRcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciB0aGUgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCAneCcpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFtbJ3gnXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV0sICcxJywgW1sneCcsICd5J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV0gXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFsneCcsICd5J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbWyd4J10sIFsneSddXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIHRoZSBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgYnkgdGhlIGtleXNcbiAqIEByZXR1cm5zIHtBcnJheX0gXG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU29ydCB0aGUgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3gnLCAneiddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5pbmNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IG9iamVjdCB3aXRob3V0IHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd5J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmV4Y2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgdGhlIHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgcGxhaW46IGZhbHNlLCAuLi5vcHRpb25zIH07XG5cbiAgY29uc3QgbmV4dCA9IG9iaiA9PiB7XG4gICAgaWYob3B0aW9ucy5wbGFpbiAmJiAhdGhpcy5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgdG8gdGhlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgaWdub3JlVW5kZWZpbmVkOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9IHZhbCA9PiB7XG4gICAgICBsZXQgb2JqID0gQXJyYXkuaXNBcnJheSh2YWwpPyBbXToge307XG4gICAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKHZhbCk7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFsW2tleV0gIT09IHVuZGVmaW5lZCAmJiAob2JqW2tleV0gPSB2YWxba2V5XSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmlnbm9yZVVuZGVmaW5lZCkge1xuICAgICAgYSA9IGNsZWFyVW5kZWZpbmVkKGEpO1xuICAgICAgYiA9IGNsZWFyVW5kZWZpbmVkKGIpO1xuICAgIH1cblxuICAgIGxldCBhS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGEpO1xuICAgIGxldCBiS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGIpO1xuICAgIFxuICAgIGlmIChhS2V5cy5sZW5ndGggIT0gYktleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYSA9IHRoaXMuaXNTY29wZVByb3h5KGEpPyBhLl9fdGFyZ2V0OiBhO1xuICAgIGIgPSB0aGlzLmlzU2NvcGVQcm94eShiKT8gYi5fX3RhcmdldDogYjtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGhhc2ggZnJvbSB0aGUgc3RyaW5nXG4gKiBcbiAqIEBwYXJhbSB7Kn0gc291cmNlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jcmVhdGVIYXNoID0gZnVuY3Rpb24oc291cmNlKSB7XG4gIHR5cGVvZiBzb3VyY2UgPT0gJ29iamVjdCcgJiYgKHNvdXJjZSA9IEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xuICB0eXBlb2Ygc291cmNlICE9ICdzdHJpbmcnICYmIChzb3VyY2UgPSAn4qCAJyArIFN0cmluZyhzb3VyY2UpKTtcbiAgbGV0IGhhc2ggPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoYXIgPSBzb3VyY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcbiAgfVxuXG4gIHJldHVybiBoYXNoICsgJyc7XG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSB0aGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB2YWx1ZSA9IGVsLnZhbHVlO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIHN0cmluZyBmcm9tIGEgZGFzaCB0byBhIGNhbWVsIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBzdHJpbmcgZnJvbSBhIGNhbWVsIHRvIGEgZGFzaCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBvYmplY3QgbmVzdGVkIHByb3BlcnR5IGV4aXN0ZW5jZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICghbyB8fCB0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG9iamVjdCBuZXN0ZWQgcHJvcGVydHkgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBvW2tdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIERlbGV0ZSB0aGUgcHJvcGVydHkgZnJvbSB0aGUgb2JqZWN0XG4gKiBZb3UgY2FuIGNhbmNlbCB0aGUgZGVsZXRpb24gcmV0dXJuaW5nIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICghbyB8fCB0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuICAgICAgKCFmbiB8fCBmbih2YWx1ZSkpICYmIChkZWxldGUgb1trXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IG9iaiA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSBvYmogPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgbGV0IHZhbCA9ICcnOyAgXG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKCEobm93ICUgaSkpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgZGVib3VuY2VcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJucyB7Zm59XG4gKi9cbnV0aWxzLmRlYm91bmNlID0gZnVuY3Rpb24oZm4sIGRlbGF5ID0gMCkgeyAgXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICBmbi5fX2RlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4oKTtcbiAgICAgIGNsZWFyVGltZW91dChmbi5fX2RlYm91bmNlVGltZW91dCk7XG4gICAgICBkZWxldGUgZm4uX19kZWJvdW5jZVRpbWVvdXQ7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXSwic291cmNlUm9vdCI6IiJ9