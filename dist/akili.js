/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.1.0
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

      if (!data) {
        return;
      }

      var evaluate = function evaluate(val, keys) {
        _this7.__evaluateNested(keys, true);

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

      return _akili2.default.nextTick(function () {
        var _loop = function _loop(i, l) {
          var link = links[i];
          var component = link.component;

          if (component.__isRemoved) {
            return 'continue';
          }

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
        if (_this12.__isRemoved) {
          return;
        }

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
      transition.finish();
      window.dispatchEvent(new CustomEvent('state-changed', { detail: transition }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ba2lsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWtpbGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJkZWJ1ZyIsIl9faW5pdCIsIl9fcm9vdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX3RhZ3MiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9fd3JhcHBpbmciLCJfX3Jvb3RPdXRlckhUTUwiLCJfX29uRXJyb3IiLCJ0cmlnZ2VySW5pdCIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJzZXJ2aWNlcyIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJnbG9iYWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIk9iamVjdHMiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiU291cmNlIiwiVGV4dCIsIlRleHRhcmVhIiwiVHJhY2siLCJVcmwiLCJWaWRlbyIsInJlcXVlc3QiLCJyb3V0ZXIiLCJzdG9yZSIsImRlZmluZSIsImNsZWFyR2xvYmFscyIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJpIiwibCIsImxlbmd0aCIsInByb3AiLCJjb21wb25lbnQiLCJfX2lzUmVtb3ZlZCIsIl9faXNSZXNvbHZlZCIsIl9fdHJpZ2dlclN0b3JlQW5kQXR0ciIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsIndyYXBwaW5nIiwidW5pc29sYXRlIiwiaXNvbGF0aW9uIiwibmV4dFRpY2siLCJyZXNvbHZlIiwidGhlbiIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIl9fY2FuY2VsbGVkIiwiZmluZCIsInAiLCJfX3ByZXZlbnQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJBS0lMSV9TU1IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsIl9fY29tcGlsZSIsImFsbCIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInJlbW92ZUNvbXBvbmVudCIsImFsaWFzIiwicmVtb3ZlQWxpYXMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImNhdGNoIiwiaXNvbGF0ZUdsb2JhbHMiLCJfX3RhcmdldCIsIndyYXAiLCJpc29sYXRlRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiaXNBcnJheSIsIm51bSIsImluZGV4IiwiY2FsbGJhY2siLCJfX2lzb2xhdGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJha2lsaVdyYXBwZWRGdW5jdGlvbiIsInRhZyIsImFkZFRhZyIsImhhc1RhZyIsInJlbW92ZVRhZyIsInVuZGVmaW5lZCIsInRyaWdnZXJUYWciLCJfX2NvbXBvbmVudCIsIl9fZXZhbHVhdGVOb2RlIiwiaGFuZGxlRXJyb3JzIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsIm91dGVySFRNTCIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJkZWluaXQiLCJkZXN0cm95Iiwic3RvcmVLZXlzIiwiYXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiaW5zdGFuY2UiLCJfX2NhY2hlIiwiX19pbnN0YW5jZXMiLCJjYWNoZSIsIl9fbWFpbiIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsIlJlZ0V4cCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInZhcmlhYmxlcyIsInZhcnMiLCJleHBzIiwic3BsaXQiLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVTdG9yZUtleXMiLCJfX2Rpc2FibGVBdHRyS2V5cyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fY29udGVudCIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImF0dHJzIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRpb25QYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwiY2hpbGROb2RlcyIsIm9uQ29tcGlsZWQiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJ0ZW1wbGF0ZUNhY2hlIiwiZGF0YSIsIm9uUmVjb21waWxlZCIsInJlY29tcGlsZWQiLCJvblJlc29sdmVkIiwicmVzb2x2ZWQiLCJfX3Njb3BlIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImluZGV4T2YiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0aW9uUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImhhc093blByb3BlcnR5IiwiZ2V0UHJvcGVydHlCeUtleXMiLCJfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY29tcGFyZSIsImNyZWF0ZUhhc2giLCJoYXNoIiwiYXR0ck5hbWUiLCJlbGVtZW50TmFtZSIsIl9fZWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJBdHRyIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiX19leHByZXNzaW9uIiwidHJpbSIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJjb20iLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsIl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZSIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImlzU2NvcGVQcm94eSIsInJlYWxDb21wb25lbnQiLCJfX2JpbmRBbmRTZXRQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsImVsZW1lbnQiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJfX2dldEFsbEJpbmRzIiwiX19pbml0aWFsaXplZCIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UiLCJfX2Rpc2FibGVLZXlzIiwiY2hlY2tQcm9wIiwiX19zZXQiLCJzaWxlbnQiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidmFsIiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJfX2V2YWx1YXRlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjYW1lbEF0dHJpYnV0ZSIsInRvQ2FtZWxDYXNlIiwiX19hdHRyaWJ1dGVPbiIsIl9fcHJlcGFyZUF0dHJpYnV0ZUluIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImNvcHkiLCJwbGFpbiIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19pc0V2ZW50IiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2hhc0JpbmRpbmdzIiwiX19ldmFsdWF0ZUV2ZW50IiwiaXNBdHRyIiwiaGFzQmluZGluZ3MiLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0Jvb2xlYW4iLCJzYXZlQmluZGluZ3MiLCJfX3VuYmluZEJ5Tm9kZXMiLCJfX3VuYmluZFBhcmVudHNCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiaXNEZWxldGVkIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5IiwidGFyZ2V0Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImhhc1Byb3BlcnR5QnlLZXlzIiwiZXhjQXJyIiwicmVhbFRhcmdldCIsImdldE93blByb3BlcnR5VGFyZ2V0IiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50IiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsImN1cnJlbnRLZXlzIiwiY3VycmVudEtleVN0cmluZyIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsInR5cGUiLCJwcm94eSIsIl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUiLCJfX2FsbCIsImxpbmtzIiwiX19zdG9yZVRyaWdnZXJCeU5hbWUiLCJzb3J0Iiwia2V5U3RyaW5nIiwiaW5mbyIsImRhdGUiLCJEYXRlIiwibm93IiwiY2FsbE9uU3RhcnQiLCJjYXBpdGFsaXplIiwiYXR0cnNLZXlzIiwiZmlsdGVyIiwibWF0Y2giLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiaXNQbGFpbk9iamVjdCIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19rZXlzIiwibmVzdGVkIiwidGFyZ2V0S2V5cyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbkhhc2giLCJ1cGRhdGVkQXQiLCJnZXRUaW1lIiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJjb2xsZWN0Iiwicm9vdEF0dHJzIiwibm9kZXMiLCJfX21hcE5vZGVzIiwic2V0UHJvcGVydHlCeUtleXMiLCJsYXN0IiwiTm9kZSIsInVuYmluZCIsImoiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiZGV0YWNoTm9kZXMiLCJkZWluaXRpYWxpemVOb2RlcyIsIl9fZW1wdHkiLCJfX2NsZWFyU3RvcmVMaW5rcyIsIl9fcmVtb3ZlIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJyaWdodCIsImxldmVsRWxlbWVudHMiLCJoYW5kbGVyIiwidW5zaGlmdCIsIl9fc3RvcmVCeUZ1bmN0aW9uIiwiX19zdG9yZUJ5S2V5cyIsIl9fYXR0ckJ5RnVuY3Rpb24iLCJfX2F0dHJCeUtleXMiLCJfX3Vuc3RvcmVCeUZ1bmN0aW9uIiwiX191bnN0b3JlQnlLZXlzIiwiX191bmF0dHJCeUZ1bmN0aW9uIiwiX191bmF0dHJCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fdHJhbnNpdGlvbiIsInN0YXRlIiwicGFyYW1zIiwicXVlcnkiLCJpc1VybCIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJ1cmwiLCJvblN0YXRlQ2hhbmdlZCIsInNldEFjdGl2aXR5Iiwic2V0U3RhdGUiLCJzZXRQYXJhbXMiLCJzZXRRdWVyeSIsInNldEhhc2giLCJzZXRPcHRpb25zIiwic2V0VXJsIiwicmVzZXRIcmVmIiwiZ2V0U3RhdGUiLCJpc0FjdGl2ZVN0YXRlIiwiaW5BY3RpdmVTdGF0ZSIsImhyZWYiLCJjcmVhdGVTdGF0ZVVybCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwic3R5bGUiLCJ2YWx1ZUtleSIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJMb29wIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JFbCIsInJlc2V0IiwiY3JlYXRlSXRlcmF0b3IiLCJkcmF3IiwiX19pdGVyYXRvciIsIl9fdmFsdWUiLCJjcmVhdGVFbGVtZW50IiwibWFzayIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiX19pbmRleCIsIl9fa2V5IiwiX19oYXNoIiwiaXRlcmF0b3IiLCJzZXRJbmRleCIsInNldEtleSIsInNldFZhbHVlIiwiX19wcm9taXNlcyIsImNsb25lTm9kZSIsImEiLCJiIiwibG9vcCIsIml0ZXJhdGUiLCJvbk91dCIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwic2F2ZVByb3h5IiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsInNldFJlY3JlYXRpb24iLCJzZXRJcyIsImNvbXBpbGF0aW9uIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsInJlc3VsdCIsInNldFByb3BlcnR5IiwiZW1wdHkiLCJjb25uZWN0aW9uIiwic2V0Q2FjaGUiLCJhYm9ydCIsIm9uU3RhcnQiLCJ4aHIiLCJvbkxvYWQiLCJvbkVycm9yIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJ1cmxBdHRyaWJ1dGUiLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJzZXROYW1lcyIsInByZXYiLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwidHJhbnNpdGlvbiIsImxvYWQiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiZXhpc3RzIiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsImdldENvbnRlbnQiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwicmVkZWZpbmUiLCJkZWNvZGVIdG1sRW50aXRpZXMiLCJzZXRTZWxlY3RlZCIsImRlYm91bmNlSW50ZXJ2YWwiLCJkZWJvdW5jZSIsIm9uRGVib3VuY2UiLCJzZXRGb2N1cyIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImJsdXIiLCJmb3JjZSIsIl9fcmVtb3ZlZCIsImluRXZhbHVhdGluZyIsInByZXBhcmVPcHRpb25zIiwiX0V2ZW50IiwiX19wcmVwYXJlQXR0cmlidXRlT3V0IiwiX19lbCIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZGVmYXVsdHMiLCJnZXRIZWFkZXJzIiwiaGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImxpbmUiLCJzdWJzdHJpbmciLCJzdGF0dXNFcnJvclBhdHRlcm4iLCJyZWplY3QiLCJtZXRob2QiLCJYTUxIdHRwUmVxdWVzdCIsImJlZm9yZSIsInRyYW5zZm9ybUJlZm9yZSIsImpzb24iLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJwYXJhbXNUb1F1ZXJ5IiwidG9VcHBlckNhc2UiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwib3BlbiIsInRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJLZXlzIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlWE1MIiwicmVzcG9uc2VVUkwiLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwic2VwIiwiZXEiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInYiLCJvcHQiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsIlRyYW5zaXRpb24iLCJwcmV2aW91cyIsInJvdXRlcyIsInN0YXRlcyIsIl9fZmluaXNoZWQiLCJyb3V0ZSIsImhhc1N0YXRlIiwicGFyYW1LZXlzIiwiZnVsbFBhdHRlcm4iLCJfX3BhcmFtUmVnZXgiLCJmIiwicXVlcnlLZXlzIiwid2F0Y2hIYXNoIiwicHJldlJvdXRlIiwiZ2V0Um91dGUiLCJpbmNsdWRlS2V5cyIsImZpbmlzaCIsIl9fcXVldWUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJoYXMiLCJtYW51YWwiLCJwcmVwYXJlU3RhdGVBcmdzIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwicHVzaFN0YXRlIiwiZXJyb3IiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwiaW5pdFN0YXRlIiwicGFyZW50TmFtZSIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJyZXBsYWNlVXJsIiwicmVwbGFjZUhhc2hVcmwiLCJyZXBsYWNlSGlzdG9yeVVybCIsInJlcGxhY2VTdGF0ZSIsImdldFVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsInByZXBhcmUiLCJwYXJhbXNUZW1wIiwicHJlcGFyZVN0YXRlUGFyYW1zIiwicXVlcnlUZW1wIiwicHJlcGFyZVN0YXRlUXVlcnkiLCJoYXNoVGVtcCIsInByZXBhcmVTdGF0ZUhhc2giLCJlbXB0eUhhc2giLCJuZXdBcmdzIiwiY3JlYXRlU3RhdGVPYmplY3RBcmdzIiwiY3JlYXRlU3RhdGVIYXNoQXJncyIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImluY2x1ZGVzIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJyZWxvYWQiLCJjbGVhckludGVydmFsIiwic2V0UGF0aCIsInJlYWxVcmwiLCJpc0RpZmZlcmVudCIsImlzUm91dGVDaGFuZ2VkIiwidGl0bGUiLCJsb2FkZWQiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZXMiLCJkZWwiLCJleGNsdWRlIiwiaXRlbSIsImZpbHRlcmVkIiwib3JkZXIiLCJhViIsImJWIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpZ25vcmVVbmRlZmluZWQiLCJjbGVhclVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJTdHJpbmciLCJjaGFyIiwiY2hhckNvZGVBdCIsImVuY29kZUh0bWxFbnRpdGllcyIsInRleHRDb250ZW50Iiwib2JqZWN0IiwicmVkdWNlIiwibyIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk1hdGgiLCJyYW5kb20iLCJkZWxheSIsImNsZWFyVGltZW91dCIsIl9fZGVib3VuY2VUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4UUNsRkE7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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TCxDQUF3QlMsTUFBeEIsRUFBZ0NOLEVBQWhDLENBQVA7QUFDRDs7QUFFRCxTQUFPdVMsR0FBUDtBQUNELENBbkJEOztBQXFCQTs7Ozs7OztBQU9BMVcsTUFBTXVtQixRQUFOLEdBQWlCLFVBQVNwaUIsRUFBVCxFQUF3QjtBQUFBLE1BQVhvdUIsS0FBVyx1RUFBSCxDQUFHOztBQUN2QyxTQUFPLFlBQU07QUFDWEMsaUJBQWFydUIsR0FBR3N1QixpQkFBaEI7QUFDQXR1QixPQUFHc3VCLGlCQUFILEdBQXVCdndCLFdBQVcsWUFBTTtBQUN0Q2lDO0FBQ0FxdUIsbUJBQWFydUIsR0FBR3N1QixpQkFBaEI7QUFDQSxhQUFPdHVCLEdBQUdzdUIsaUJBQVY7QUFDRCxLQUpzQixFQUlwQkYsS0FKb0IsQ0FBdkI7QUFLRCxHQVBEO0FBUUQsQ0FURDs7a0JBV2V2eUIsSyIsImZpbGUiOiJha2lsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFraWxpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFraWxpXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ha2lsaS5qc1wiKTtcbiIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBtYWluIG9iamVjdFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2dldHRpbmctc3RhcnRlZH1cbiAqL1xuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkub3B0aW9ucyA9IHtcbiAgZGVidWc6IHRydWVcbn07XG5cbkFraWxpLl9faW5pdCA9IG51bGw7XG5Ba2lsaS5fX3Jvb3QgPSBudWxsO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX3N0b3JlTGlua3MgPSB7fTtcbkFraWxpLl9fd2luZG93ID0ge307XG5Ba2lsaS5fX3RhZ3MgPSB7fTtcbkFraWxpLl9faXNvbGF0aW9uID0gbnVsbDtcbkFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbkFraWxpLl9fcm9vdE91dGVySFRNTCA9ICcnO1xuQWtpbGkuX19vbkVycm9yID0gKCkgPT4gQWtpbGkudHJpZ2dlckluaXQoZmFsc2UpO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuZ2xvYmFscyA9IGdsb2JhbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuQWtpbGkuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuQWtpbGkuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG5Ba2lsaS5jb21wb25lbnRzLlVybCA9IFVybDtcbkFraWxpLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbkFraWxpLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuQWtpbGkuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuQWtpbGkuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuLyoqXG4gKiBEZWZpbmUgdGhlIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdGhlIGdsb2JhbCBjb250ZXh0XG4gKi9cbkFraWxpLmNsZWFyR2xvYmFscyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgIGRlbGV0ZSBnbG9iYWxzW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLnVud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldKTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBKb2luIHRoZSBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzY29wZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgdGhhdCBpcyB3cmFwcGVkIGluIHRoZSBBa2lsaSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHRlbXBsYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24gKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB0aGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIHN0ciA9PiAhIXRoaXMuX19zY29wZXNbc3RyXSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIHNjb3BlIGNoYW5nZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgICAgXG4gICAgY29uc3QgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYocHJvcC5jb21wb25lbnQuX19pc1JlbW92ZWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIGV2YWx1YXRpb24gaW5zaWRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgb25seSB0aGUgcm9vdCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS53cmFwcGluZyA9IGZ1bmN0aW9uIChmbikge1xuICBpZih0aGlzLl9fd3JhcHBpbmcpIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7ICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbiAgcmV0dXJuIHJlczsgICBcbn1cblxuLyoqXG4gKiBTdG9wIHRoZSBpc29sYXRpb24gaW5zaWRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzKSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUocmVjb21waWxlID09PSB0cnVlPyB7fTogcmVjb21waWxlKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXG4gICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTsgIFxuICBcbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKEFraWxpLmdldEFraWxpUGFyZW50cyhlbCkuZmluZChwID0+IHAuX19ha2lsaS5fX3ByZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24gKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGlmKHdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICBjb25zdCBhcnIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuby1zc3JdJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgYXJyW2ldLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5lc3RlZEluaXRpYWxpemluZyA9IGVsID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG4gIFxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07ICAgIFxuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpOyAgICBcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50LlxuICogT3IgZ2V0IGl0IGlmIHRoZSBmdW5jdGlvbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuICBcbiAgaWYgKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHsgIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcy5cbiAqIE9yIGdldCBpdCBpZiB0aGUgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkucmVtb3ZlQWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIFxuICBpZighd2luZG93LkFLSUxJX1NTUikge1xuICAgIHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3Rvcik7XG4gICAgd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4gPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuLCBbMCwgJ2xhc3QnXSk7XG4gICAgd2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gpO1xuICB9ICBcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZ2xvYmFsc1xuICovXG5Ba2lsaS5pc29sYXRlR2xvYmFscyA9IGZ1bmN0aW9uICgpIHsgIFxuICBnbG9iYWxzLl9fdGFyZ2V0LnV0aWxzID0gdGhpcy53cmFwKHV0aWxzKTsgXG4gIHRoaXMuaXNvbGF0ZUV2ZW50cygpO1xuICB0aGlzLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuICB0aGlzLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGlmKHdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9ICAgIFxuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYgKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFyZ3NbMV0gPSBsaXN0ZW5lci5mbjtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgd2l0aCB0aGUgaXNvbGF0aW9uIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfG51bWJlcltdfHN0cmluZ1tdfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uIChmbiwgcG9zID0gJ2xhc3QnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgIUFycmF5LmlzQXJyYXkocG9zKSAmJiAocG9zID0gW3Bvc10pO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwb3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbnVtID0gcG9zW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbnVtO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJnc1tudW1dO1xuXG4gICAgICBpZihudW0gPT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4ID0gYXJncy5sZW5ndGggLSAxO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3NbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIWNhbGxiYWNrLl9faXNvbGF0ZWQpIHtcbiAgICAgICAgYXJnc1tpbmRleF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcmdzW2luZGV4XSwgJ19faXNvbGF0ZWQnLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgb2JqZWN0L2Z1bmN0aW9uIHRvIGlzb2xhdGUgYW5kIHVuZXZhbHVhdGUgZGF0YVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gKi9cbkFraWxpLndyYXAgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGN1cnJlbnQgPSBvYmo7XG5cbiAgaWYodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgb2JqID0gdGhpcy53cmFwRnVuY3Rpb24ob2JqLCBvcHRpb25zKTtcblxuICAgIGlmKG9iaiA9PT0gY3VycmVudCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZighb2JqIHx8IHR5cGVvZiBvYmogIT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXG4gICAgaWYoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlIHx8ICFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLnJldmVyc2UpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiBvYmpba2V5XS5fX2FraWxpIHx8IG9ialtrZXldIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiB0aGlzLndyYXAob2JqW2tleV0sIG9wdGlvbnMpIH0pO1xuICB9IFxuICBcbiAgcmV0dXJuIG9iajtcbn07XG5cbi8qKlxuICogVW53cmFwIHRoZSBvYmplY3QvZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKi9cbkFraWxpLnVud3JhcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMud3JhcChvYmosIHsgcmV2ZXJzZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS53cmFwRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGNvbnN0IGFraWxpV3JhcHBlZEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKG9wdGlvbnMudGFnICYmIEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgQWtpbGkuYWRkVGFnKG9wdGlvbnMudGFnLCBBa2lsaS5fX2V2YWx1YXRpb24ubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLndyYXBwaW5nKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZm4pO1xuICBha2lsaVdyYXBwZWRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgYWtpbGlXcmFwcGVkRnVuY3Rpb25ba2V5XSA9IGZuW2tleV07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWtpbGlXcmFwcGVkRnVuY3Rpb24sICdfX2FraWxpJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmblxuICB9KTtcblxuICByZXR1cm4gYWtpbGlXcmFwcGVkRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEFkZCB0aGUgdGFnXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICovXG5Ba2lsaS5hZGRUYWcgPSBmdW5jdGlvbiAodGFnLCBub2RlKSB7XG4gIGlmKHRoaXMuaGFzVGFnKHRhZywgbm9kZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKSB7XG4gICAgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdID0ge307ICAgIFxuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddKSB7XG4gICAgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10gPSBbXTsgICAgXG4gIH1cblxuICB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXS5wdXNoKHsgbm9kZSB9KTtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGUgdGFnIGV4aXN0c1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge05vZGV9IFtub2RlXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkFraWxpLmhhc1RhZyA9IGZ1bmN0aW9uKHRhZywgbm9kZSkge1xuICBpZighbm9kZSl7XG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICAgIGZvcihsZXQgayBpbiB0aGlzLl9fdGFnc1trZXldKSB7XG4gICAgICAgIGlmKGsgPT0gdGFnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAgICBcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSkge1xuICAgIHJldHVybiBmYWxzZTsgICAgXG4gIH0gXG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSB0YWdcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IFt0YWddXG4gKiBAcGFyYW0ge05vZGV9IFtub2RlXVxuICovXG5Ba2lsaS5yZW1vdmVUYWcgPSBmdW5jdGlvbiAodGFnLCBub2RlKSB7XG4gIGlmKHR5cGVvZiB0YWcgPT0gJ29iamVjdCcpIHtcbiAgICBub2RlID0gdGFnO1xuICAgIHRhZyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmKCF0YWcpIHsgXG4gICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGUuX19uYW1lXTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighbm9kZSkge1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgICBpZihrID09IHRhZykge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1trZXldW2tdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBpZighT2JqZWN0LmtleXModGhpcy5fX3RhZ3Nba2V5XSkubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybjsgICAgXG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pIHtcbiAgICBpZihrZXkgPT0gdGFnKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW2tleV07XG4gICAgfVxuICB9XG5cbiAgaWYoIU9iamVjdC5rZXlzKHRoaXMuX190YWdzW25vZGUuX19uYW1lXSkubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGUuX19uYW1lXTtcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB0YWcgZXhwcmVzc2lvbnNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICovXG5Ba2lsaS50cmlnZ2VyVGFnID0gZnVuY3Rpb24gKHRhZykge1xuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgIGZvcihsZXQgayBpbiB0aGlzLl9fdGFnc1trZXldKSB7XG4gICAgICBpZihrID09IHRhZykge1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLl9fdGFnc1trZXldW2tdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgb2JqID0gYXJyW2ldO1xuICAgICAgICAgIG9iai5ub2RlLl9fY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG9iai5ub2RlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgdGhlIGVycm9yc1xuICovXG5Ba2lsaS5oYW5kbGVFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciB0aGUgaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24gKHJvb3QpIHsgXG4gIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG4gIHRoaXMuX19yb290T3V0ZXJIVE1MID0gcm9vdC5vdXRlckhUTUw7XG5cbiAgaWYoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIGh0bWwgZWxlbWVudGApO1xuICB9XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdCA9IHJvb3Q7XG4gIFxuICBpZih3aW5kb3cuQUtJTElfU0VSVkVSKSB7ICAgIFxuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCh3aW5kb3cuQUtJTElfU0VSVkVSLmh0bWwpO1xuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKHdpbmRvdy5BS0lMSV9TRVJWRVIucmVxdWVzdENhY2hlKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UID0ge1xuICAgICAgaHRtbDogdGhpcy5wcmVwYXJlU2VydmVyU2lkZUh0bWwoKVxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoeyBpbml0OiB0cnVlIH0pO1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7ICAgIFxuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgJiYgKHdpbmRvdy5BS0lMSV9DTElFTlQucmVxdWVzdENhY2hlID0gdGhpcy5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSgpKTtcbiAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICB9KS5jYXRjaChlcnIgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24gKCkgeyBcbiAgdGhpcy5fX3Jvb3QgJiYgKHRoaXMuX19yb290Lm91dGVySFRNTCA9IHRoaXMuX19yb290T3V0ZXJIVE1MKTtcblxuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fc2NvcGVzKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5fX3Njb3Blc1trZXldLl9fY29tcG9uZW50O1xuICAgIGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVtb3ZlKCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdE91dGVySFRNTCA9ICcnO1xuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19yb290ID0gbnVsbDtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fdGFncyA9IHt9O1xufTtcblxuLyoqXG4gKiBEZXN0cm95IHRoZSBmcmFtZXdvcmtcbiAqL1xuQWtpbGkuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5kZWluaXQoKTsgIFxuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuXG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgcm91dGVyLl9faW5pdCAmJiByb3V0ZXIuZGVpbml0KCk7XG4gIGRlbGV0ZSB3aW5kb3cuQUtJTElfU0VSVkVSO1xuICBkZWxldGUgd2luZG93LkFLSUxJX0NMSUVOVDtcbiAgZGVsZXRlIHdpbmRvdy5BS0lMSV9TU1I7XG5cbiAgZm9yKGxldCBrZXkgaW4gQWtpbGkpIHtcbiAgICBkZWxldGUgQWtpbGlba2V5XTtcbiAgfVxuXG4gIGRlbGV0ZSB3aW5kb3cuQWtpbGk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgU1NSIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBTU1IgY2FjaGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgaW5pdCA9IChpbnN0YW5jZSwgb2JqKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpbnN0YW5jZS5fX2NhY2hlW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBrZXkgPT09ICdfX21haW4nPyByZXF1ZXN0OiByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV07XG4gICAgaW5pdChpbnN0YW5jZSwgb2JqW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgU1NSIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIFNTUiBjYWNoZVxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0geyBfX21haW46IHJlcXVlc3QuX19jYWNoZSB9O1xuXG4gIGZvcihsZXQga2V5IGluIHJlcXVlc3QuX19pbnN0YW5jZXMpIHtcbiAgICBjYWNoZVtrZXldID0gcmVxdWVzdC5fX2luc3RhbmNlc1trZXldLl9fY2FjaGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xud2luZG93LkFraWxpID0gQWtpbGk7XG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmhhbmRsZUVycm9ycygpO1xuQWtpbGkuaXNvbGF0ZUdsb2JhbHMoKTsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnLCAnbm8tc3NyJ107XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBjb21wb25lbnRzIGFyZSBpbmhlcml0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7ICBcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc11cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCB2YXJpYWJsZXMgPSB7fSkge1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24sICc7JywgWydcIicsIFwiJ1wiLCAnYCddKTsgIFxuICAgIGV4cHNbZXhwcy5sZW5ndGggLSAxXSA9IGByZXR1cm4gJHtleHBzW2V4cHMubGVuZ3RoIC0gMV19YDtcblxuICAgIGZvciAobGV0IGtleSBpbiB2YXJpYWJsZXMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKHZhcmlhYmxlc1trZXldKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5rZXlzLCBgJHtleHBzLmpvaW4oJzsgJyl9YCkuYXBwbHkoY29udGV4dCwgdmFycyk7XG4gIH1cblxuICAvKiogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGVdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYW4gaHRtbCBlbGVtZW50IHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3JgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1JlbW92ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVN0b3JlS2V5cyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSB7fTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19jb250ZW50ID0gJyc7XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgY2hlY2tDaGFuZ2VzOiBmYWxzZSwgXG4gICAgICBzZXRFdmVudHM6IHRydWUsXG4gICAgICBzZXRQYXJlbnRzOiB0cnVlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgcmVjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgLi4udGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpLFxuICAgICAgc2V0RXZlbnRzOiBmYWxzZSxcbiAgICAgIHNldFBhcmVudHM6IGZhbHNlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cbiBcbiAgLyoqXG4gICAqIFJlY29tcGlsZSB0aGUgY29tcG9uZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB0cnVlOyBcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHt9OyAgXG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zKTsgICAgXG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRFdmVudHMgJiYgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0UGFyZW50cyAmJiB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0Qm9vbGVhbkF0dHJpYnV0ZXMgJiYgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5kZWZpbmVBdHRyaWJ1dGVzICYmIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKTsgXG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpOyBcbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21waWxlIHRoZSBub2RlXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0aW9uUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQuX19ha2lsaTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZyB8fCB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCB8fCB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXModGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMgJiYgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpKSB7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZU5vZGUoY2hpbGQsIHRoaXMuX19jb21waWxpbmc/IHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzOiBmYWxzZSk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTsgICAgXG5cbiAgICBpbnRlcnBvbGF0ZSh0aGlzLmVsLmNoaWxkTm9kZXMsIHRoaXMuZWwpO1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcCA9IHJlcXVlc3QuZ2V0KHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwsIHsgY2FjaGU6IHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVDYWNoZSB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmICh0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMucmVzb2x2ZWQoKSkpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX19pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHsgICAgXG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7ICAgICBcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2NvcGUnKSB8fCBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUoaXNSb290PyAncm9vdCc6IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICAgIGlzUm9vdCAmJiAoQWtpbGkucm9vdCA9IHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBfX3Njb3BlID0gc2NvcGU7XG4gICAgbGV0IF9zY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHRoaXMuc2NvcGUpO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICB0aGlzLl9fY29udGVudCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpOyAgICBcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBzZXRBdHRyID0gZWwgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvbXBvbmVudCBwYXJlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0UGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50cyA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsKTtcblxuICAgIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGlvblBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0aW9uUGFyZW50ID0gcGFyZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGlvblBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW9uUGFyZW50ID0gZXZhbHVhdGlvblBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0aW9uUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIHRoZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBhcnNlZCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBuZWVkIG9mIHRoZSBhdmFsdWF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBub2RlIHByb3BlcnRpZXMgY2hhbmdlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2Uobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgXG4gICAgaWYgKCFwcm9wKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmUgdGhlIG5vZGUgcHJvcGVydHkgdmFsdWVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7ICBcbiAgICByZXR1cm4gdXRpbHMuY29tcGFyZSh1dGlscy5jcmVhdGVIYXNoKHZhbHVlKSwgcHJvcC5oYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKSB7XG4gICAgbGV0IHRhZ05hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLnRhZ05hbWU7XG4gICAgbGV0IGF0dHJOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuICAgIGxldCBjb21wb25lbnROYW1lID0gKGF0dHJOYW1lIHx8IHRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGVsZW1lbnROYW1lID0gbm9kZS5fX2VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/IG5vZGUubmFtZS50b0xvd2VyQ2FzZSgpOiAnJzsgICAgICAgIFxuICAgIGxldCBtZXNzYWdlcyA9IFsgZXJyLm1lc3NhZ2UsIG5vZGUuX19leHByZXNzaW9uLnRyaW0oKSBdO1xuICAgIGF0dHJpYnV0ZU5hbWUgJiYgbWVzc2FnZXMucHVzaChgW2F0dHJpYnV0ZSAke2F0dHJpYnV0ZU5hbWV9XWApO1xuICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuY29uY2F0KFtgW2VsZW1lbnQgJHtlbGVtZW50TmFtZX1dYCwgYFtjb21wb25lbnQgJHtjb21wb25lbnROYW1lfV1gXSk7XG4gICAgcmV0dXJuIGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG4gICAgY29uc3QgZXZhbENvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPZiB8fCBub2RlLl9fY29tcG9uZW50O1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cyhjb20gPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7ICAgICBcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcmVudEJpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXSwgY29tcG9uZW50OiBub2RlLl9fY29tcG9uZW50IH07XG4gICAgICBcbiAgICAgIHRyeSB7ICAgICAgICBcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlLCB7IC4uLmdsb2JhbHMgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgICBsZXQgcGFyZW50c0hhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEucGFyZW50cyk7XG4gICAgICAgXG4gICAgICAgIGlmIChkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGlzdGluZ0JpbmRpbmdzW2hhc2hdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50VmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLnBhcmVudHMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpOyAgICAgICAgXG5cbiAgICAgICAgaWYgKHBhcmVudFZhbHVlICYmIHR5cGVvZiBwYXJlbnRWYWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnICYmIHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9PSA1MCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgICAgICAgIGBGb3IgaGlnaGVyIHBlcmZvcm1hbmNlLCBkb24ndCBsb29wIFByb3h5IGFycmF5cy9vYmplY3RzIGluc2lkZSBleHByZXNzaW9uIGZ1bmN0aW9ucywgb3IgdXNlIEFraWxpLnVuZXZhbHVhdGUoKSB0byB3cmFwIHlvdSBjb2RlLmAsXG4gICAgICAgICAgICAgIGAkeyBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgfWAsXG4gICAgICAgICAgICAgIGBzY29wZSBwcm9wZXJ0eSBcIiR7IGRhdGEucGFyZW50cy5qb2luKCcuJykgfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICFwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0/IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9IDE6IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSsrO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICBcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlcywgY291bnRlciwgZXhwcmVzc2lvbiwgYXR0cmlidXRlVmFsdWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBub2RlIGFuZCBzZXQgdGhlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZF1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwga2V5cywgZXZhbHVhdGVkKSB7XG4gICAgbGV0IGJpbmQgPSB0aGlzLl9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpO1xuICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICBpZiAoIWJpbmQpIHtcbiAgICAgIHRoaXMuX19iaW5kKGtleXMsIHsgbm9kZSB9KTtcbiAgICB9ICAgXG5cbiAgICB0aGlzLl9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgICAgZGF0YSA9IGJpbmQ/IChiaW5kLl9fZGF0YSB8fCBbXSk6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBjb21wb25lbnQuX19nZXRBbGxCaW5kcyhwcm9wLmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgY29uc3QgYmluZCA9IGRhdGFba107ICAgXG5cbiAgICAgICAgICBpZighYmluZCB8fCAhYmluZC5ub2RlIHx8ICFiaW5kLm5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIHsgc2lsZW50OiB0cnVlIH0pOyBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhwcm9wLmtleXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IGVsZW1lbnRzID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMgKGtleXMpIHsgIFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGlmKCFkYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGV2YWx1YXRlID0gKHZhbCwga2V5cykgPT4geyAgIFxuICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMsIHRydWUpO1xuXG4gICAgICBmb3IgKGxldCBrIGluIHZhbCkge1xuICAgICAgICBpZighdmFsLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2YWx1YXRlKHZhbFtrXSwga2V5cy5jb25jYXQoW2tdKSk7ICAgICAgICBcbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBldmFsdWF0ZShkYXRhLCBrZXlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB0aGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyAuLi5nbG9iYWxzLCAgZXZlbnQ6IGUgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBub2RlIGV4cHJlc3Npb24gd2l0aCBjaGVja1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrID0gdHJ1ZSkge1xuICAgIGNvbnN0IGtleSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSc7ICBcblxuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyBcbiAgICAgIGNvbnN0IHsgcmVzLCBhdHRyaWJ1dGVWYWx1ZSwgZXhwcmVzc2lvbiwgY291bnRlciB9ID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpOyAgXG4gICAgICBub2RlW2tleV0gIT0gcmVzICYmIChub2RlW2tleV0gPSByZXMpO1xuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuICBcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICB9XG4gIFxuICAgICAgICBjb25zdCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcbiAgICAgICAgY29uc3QgY2FtZWxBdHRyaWJ1dGUgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gIFxuICAgICAgICBpZiAoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgICB9ICAgICAgICAgIFxuICBcbiAgICAgICAgaWYgKG5vZGUuX19hdHRyaWJ1dGVPbikgeyAgICAgICAgXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgICAgICAgIHZhbHVlID0gY29tcG9uZW50Ll9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICBjb21wb25lbnQuYXR0cnNbY2FtZWxBdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgcmVjZWl2aW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSkgeyAgICBcbiAgICByZXR1cm4gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHNlbmRpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZU91dChub2RlLCB2YWx1ZSkgeyAgICBcbiAgICByZXR1cm4gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTsgICAgXG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmIChub2RlLl9faXNFdmVudCkge1xuICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgbm9kZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKGUgPT4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkpO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSldID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQXR0ciA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cjtcbiAgICBjb25zdCB2YWwgPSBub2RlW2lzQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIGNvbnN0IGhhc0JpbmRpbmdzID0gZXZhbHVhdGlvblJlZ2V4LnRlc3QodmFsLnRyaW0oKSk7XG4gICAgY29uc3QgaXNCb29sZWFuID0gaXNBdHRyPyAvXmJvb2xlYW4tL2kudGVzdChub2RlLm5vZGVOYW1lKTogZmFsc2U7XG4gICAgY29uc3QgaXNFdmVudCA9IGlzQXR0cj8gL15vbi0oLispL2kudGVzdChub2RlLm5vZGVOYW1lKTogZmFsc2U7XG5cbiAgICBpZighZWwuX19ha2lsaSAmJiAhaGFzQmluZGluZ3MgJiYgIWlzQm9vbGVhbiAmJiAhaXNFdmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19uYW1lID0gdGhpcy5fX3Njb3BlLl9fbmFtZSArIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNik7XG4gICAgbm9kZS5fX2lzRXZlbnQgPSBpc0V2ZW50O1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGhhc0JpbmRpbmdzO1xuICAgIG5vZGUuX19pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWw7XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDsgICAgXG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlaW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICBub2RlLl9fZXZlbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncyAmJiAhb3B0aW9ucy5zYXZlQmluZGluZ3MpIHsgXG4gICAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2RlKTsgICAgIFxuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGUpOyAgICBcbiAgICB9XG4gICAgXG4gICAgQWtpbGkucmVtb3ZlVGFnKG5vZGUpOyAgICBcbiAgICBkZWxldGUgbm9kZS5fX25hbWU7XG4gICAgZGVsZXRlIG5vZGUuX19oYXNCaW5kaW5ncztcbiAgICBkZWxldGUgbm9kZS5fX2lzQm9vbGVhbjtcbiAgICBkZWxldGUgbm9kZS5fX2lzRXZlbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19leHByZXNzaW9uO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllcztcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9mO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgZGVsZXRlIG5vZGUuX19ldmVudDsgICAgXG4gICAgZGVsZXRlIG5vZGUuX19pbml0aWFsaXplZDtcbiAgICBkZWxldGUgbm9kZS5fX2NvbXBvbmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2VsZW1lbnQ7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIHRoZSBlbGVtZW50IGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgdGhlIG5vZGUgaGFzIGxpbmsgd2l0aCB0aGUgcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBhdHRyaWJ1dGVzIGFzIGEgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICBub2RlICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbm9kZSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG4gICAgICAgICAgdmFsdWU/IHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpOiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgb2JqZWN0IHRvIGEgcHJveHlcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4geyBcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHsgIFxuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBldmFsdWF0ZWQgPSAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTsgXG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgICAgbGV0IGV4Y0FyciA9IGtleXMuc2xpY2UoKTtcblxuICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBTY29wZSkge1xuICAgICAgICAgICAgbGV0IHJlYWxUYXJnZXQgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICByZWFsVGFyZ2V0ICYmIChyZWFsVGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpICYmIChjb21wb25lbnQgPSAgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGlmIChBa2lsaS5fX3dyYXBwaW5nICYmIGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZvclBhcmVudHMgPSBBa2lsaS5fX2V2YWx1YXRpb24uY29tcG9uZW50LnBhcmVudHMoYyA9PiBjIGluc3RhbmNlb2YgQWtpbGkuY29tcG9uZW50cy5Gb3IpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmb3JQYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykgeyBcbiAgICAgICAgICAgICAgY29uc3QgZm9yRGF0YSA9IGZvclBhcmVudHNbaV0uZGF0YTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGV4Y0FyciwgY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmIChkYXRhICYmIHR5cGVvZiBkYXRhID09ICdvYmplY3QnICYmIGZvckRhdGEgPT09IGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIGV4Y0Fyci5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICBlbHNlIGlmICghdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBjb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nLCBldmFsdWF0ZWQpO1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHsgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSBBa2lsaS53cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBDSEVDS19FWElTVEVOQ0U6IGlmIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0UGFyZW50VmFsdWUgPSBwYXJlbnRzLmxlbmd0aCA+IDE/IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHBhcmVudHMuc2xpY2UoMCwgLTEpLCB0aGlzLl9fc2NvcGUpOiB0aGlzLl9fc2NvcGU7XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yIChsZXQgayBpbiB0YXJnZXRQYXJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXRQYXJlbnRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldFBhcmVudFZhbHVlW2tdICYmIHRhcmdldFBhcmVudFZhbHVlW2tdLl9fdGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgYnJlYWsgQ0hFQ0tfRVhJU1RFTkNFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKHZhbHVlLCBrZXlzKTtcblxuICAgICAgICBpZighdGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHsgXG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIHN0b3JlIGFuZCB0aGUgYXR0cmlidXRlcyBjaGFuZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50S2V5cyA9IGtleXMuc2xpY2UoMCwgbCAtIGkpO1xuICAgICAgY29uc3QgY3VycmVudEtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhjdXJyZW50S2V5cyk7XG4gICAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhjdXJyZW50S2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgICAgaWYgKHRoaXMuX19zdG9yZUxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7ICBcbiAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19hdHRyTGlua3NbY3VycmVudEtleVN0cmluZ10pIHtcbiAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGN1cnJlbnRLZXlzLCB2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RvcmUgb2YgdGhlIGRpc2FibGVtZW50IHR5cGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHByb3h5OiAnX19kaXNhYmxlUHJveHknLFxuICAgICAgc3RvcmU6ICdfX2Rpc2FibGVTdG9yZUtleXMnLFxuICAgICAgYXR0cjogJ19fZGlzYWJsZUF0dHJLZXlzJ1xuICAgIH0pW3R5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHsgICAgXG4gICAgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgZGVsZXRlIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKTtcbiAgICByZXR1cm4gdGhpc1tzdG9yZV0uX19hbGw/IHRydWU6IHRoaXNbc3RvcmVdW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkgeyBcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ3N0b3JlJykpIHsgICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICAgIGNvbnN0IHAgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgXG4gICAgICBcbiAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHAucHVzaCh0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpKTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGxldCBsaW5rcyA9IChBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdChBa2lsaS5fX3N0b3JlTGlua3NbJyonXSB8fCBbXSk7XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc1JlbW92ZWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUsIG5hbWUpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgIFxuICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICB9ICBcbiAgICB9KTsgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iaGVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5nZXQgJiYgIW9wdGlvbnMuc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIGF0IGxlYXN0IFwiZ2V0XCIgb3IgXCJzZXRcIiBvcHRpb24gYXMgdHJ1ZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIChzdG9yZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmICghdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvID0geyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10ucHVzaChpbmZvKTtcbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAgIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX3N0b3JlQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7IFxuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyBzdG9yZS5fX3RhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDtcblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaCh7IGNvbXBvbmVudDogdGhpcywgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBzdG9yZUtleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSBzdG9yZS5fX3RhcmdldFtrZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCBrZXkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHN0b3JlW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3Igc3RvcmUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG4gICAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbcmVzLm5hbWVdO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCAhPT0gdGhpcyB8fCByZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGsgPSBsaW5rcy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICBsZXQgbGluayA9IGxpbmtzW2tdO1xuXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcyAmJiBsaW5rLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgICBsaW5rcy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMsICdhdHRyJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGlmKHRoaXMuX19pc1JlbW92ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIFxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbGlua3MgPSAodGhpcy5fX2F0dHJMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KHRoaXMuX19hdHRyTGlua3NbJyonXSB8fCBbXSk7XG4gICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgXG4gICAgXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG5cbiAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUsIHV0aWxzLnRvRGFzaENhc2UobmFtZSkpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLl9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7ICAgXG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICAodGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCB0aGlzLmF0dHJzW25hbWVdKTsgXG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10ucHVzaCh7IG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBhdHRyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYXR0cnMpLmZpbHRlcihrID0+ICEodGhpcy5fX2F0dHJzW2tdIGluc3RhbmNlb2YgQWtpbGkuRXZlbnRFbWl0dGVyKSk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGF0dHJzS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGF0dHJzS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuX19hdHRyc1trZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCB1dGlscy50b0Rhc2hDYXNlKGtleSkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLmF0dHJzW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgYXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgY29uc3Qga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGNvbnN0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgKGtleSkge1xuICAgIHJldHVybiAoa2V5Lm1hdGNoICYmIGtleS5tYXRjaCgnXl98IycpKSB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgb2JzZXJ2aW5nIG9mIHRoZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzdGFydEtleXNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbmVzdGVkT2JzZXJ2ZSAodmFsdWUsIHN0YXJ0S2V5cykge1xuICAgIGNvbnN0IG9ic2VydmUgPSAodmFsdWUsIHBhcmVudHMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIENIRUNLX1BST1hZOiBpZiAodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmICh0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGJyZWFrIENIRUNLX1BST1hZO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMgfHxcbiAgICAgICAgICBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cykgIT0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHZhbHVlLl9fa2V5cylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9KTtcbiAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9ICk7ICAgICAgICAgIFxuICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFyZ2V0S2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGFyZ2V0S2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgICAgXG4gICAgICAgIGNvbnN0IGsgPSB0YXJnZXRLZXlzW2ldO1xuICAgICAgICBjb25zdCB2YWwgPSB0YXJnZXRba107ICAgICAgICBcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pOyAgIFxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh2YWx1ZSwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG4gIH1cblxuICAgLyoqXG4gICAqIENyZWF0ZSBhbiBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSkge1xuICAgIGNvbnN0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBjb25zdCBpc29sYXRpb25IYXNoID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byB0aGUgYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCByZWFsQ29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgdGhlIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBiaW5kaW5nIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuZXN0ZWQgYmluZGluZ3MgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqL1xuICBfX2dldEFsbEJpbmRzKGtleXMpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgY29uc3QgY29sbGVjdCA9IG9iaiA9PiB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQob2JqLl9fZGF0YSB8fCBbXSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSB8fCBrZXkgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3Qob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3Qocm9vdCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgYmluZGluZyBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBjb25zdCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGNvbnN0IGhhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmhhc2ggPSBoYXNoO1xuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuICAgIFxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhhc2gsXG4gICAgICBub2RlLFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgY29uc3QgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19tYXBOb2Rlcyhmbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgcm9vdEF0dHJzOiB0cnVlLCBhdHRyczogdHJ1ZSwgbm9kZTogdHJ1ZSwgZWw6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGZpbmQgPSBlbCA9PiB7XG4gICAgICBpZighZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmF0dHJzICYmIChlbCAhPT0gdGhpcy5lbCB8fCBvcHRpb25zLnJvb3RBdHRycykpIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGZuKGF0dHJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBub2RlID0gZWwuY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgb3B0aW9ucy5ub2RlICYmIGZuKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT0gMSAmJiAhbm9kZS5fX2FraWxpKSB7XG4gICAgICAgICAgZmluZChub2RlKTtcbiAgICAgICAgICBvcHRpb25zLmVsICYmIGZuKG5vZGUpOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZmluZCh0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5vZGVzXG4gICAqIFxuICAgKiBAcmV0dXJucyB7Tm9kZVtdfVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKi9cbiAgX19nZXRBbGxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IG5vZGVzLnB1c2gobm9kZSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgLyoqXG4gICAqIEJpbmQgdGhlIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfE5vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgbm9kZXMgaW5zdGFuY2VvZiBOb2RlICYmIChub2RlcyA9IFtub2Rlc10pO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICBmb3IgKGxldCBqID0gMCwgYyA9IGtleXMubGVuZ3RoOyBqIDwgYzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzW2pdO1xuICAgICAgICBcbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgICBkZWxldGUgYmluZC5ub2RlOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10sIG9iaiwgayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJlbnQgJiYgIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoKSB7XG4gICAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgcGFyZW50IGJpbmRpbmdzIHdpdGggdGhlIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKSB7ICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX3BhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9fcGFyZW50c1tpXTsgICAgICBcbiAgICAgIHBhcmVudCAmJiBwYXJlbnQuX19ha2lsaSAmJiBwYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgbGlua3NcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJTdG9yZUxpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBjb25zdCBhcnIgPSBsaW5rc1trZXldO1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBhcnJbaV07XG4gIFxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMpIHsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7ICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IHRoZSBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtOb2RlW119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pOyBcbiAgICB0aGlzLnJlbW92ZWQoKTtcbiAgICBjb25zdCBkZXRhY2hOb2RlcyA9IHRoaXMuX19kZXRhY2goeyBzYXZlQmluZGluZ3M6IHRydWUsIGRlaW5pdGlhbGl6ZU5vZGVzOiB0cnVlIH0pO1xuICAgIGNvbnN0IG5vZGVzID0gW10uY29uY2F0KGRldGFjaE5vZGVzLCB0aGlzLl9fZW1wdHkoeyBzYXZlQmluZGluZ3M6IHRydWUgfSkpOyBcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2RlcyhkZXRhY2hOb2Rlcyk7XG4gICAgIW9wdGlvbnMuc2F2ZUJpbmRpbmdzICYmIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7ICAgIFxuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTsgIFxuICAgIHRoaXMuX19zY29wZS5fX3JlbW92ZSgpO1xuICAgIGRlbGV0ZSB0aGlzLl9fc2NvcGU7XG4gICAgZGVsZXRlIHRoaXMuc2NvcGU7IFxuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gICAgZGVsZXRlIHRoaXMuZWwuX19ha2lsaTtcbiAgICBkZWxldGUgdGhpcy5lbDsgICAgXG4gICAgZGVsZXRlIHRoaXMuX19wYXJlbnQ7XG4gICAgZGVsZXRlIHRoaXMuX19hdHRyaWJ1dGVPZjtcbiAgICBkZWxldGUgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQ7XG4gICAgZGVsZXRlIHRoaXMuX19ldmFsdWF0aW9uUGFyZW50OyAgIFxuICAgIGRlbGV0ZSB0aGlzLl9fcGFyZW50cztcbiAgICBkZWxldGUgdGhpcy5fX2JpbmRpbmdzO1xuICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzO1xuICAgIGRlbGV0ZSB0aGlzLl9fc3RvcmVMaW5rcztcbiAgICBkZWxldGUgdGhpcy5fX2F0dHJzO1xuICAgIGRlbGV0ZSB0aGlzLmF0dHJzO1xuICAgIHRoaXMuX19pc1JlbW92ZWQgPSB0cnVlO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG4gICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKG9wdGlvbnMpKTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5hdHRyaWJ1dGVzW2ldO1xuXG4gICAgICBpZihub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgb3B0aW9ucy5kZWluaXRpYWxpemVOb2RlcyAmJiB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlLCB7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAhb3B0aW9ucy5zYXZlQmluZGluZ3MgJiYgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eShvcHRpb25zID0ge30pIHsgICAgXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7XG4gICAgXG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4geyAgICAgIFxuICAgICAgaWYobm9kZS5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pOyAgXG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH0sIHsgcm9vdEF0dHJzOiBmYWxzZSB9KTtcblxuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcblxuICAgICFvcHRpb25zLnNhdmVCaW5kaW5ncyAmJiB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSBwYXJlbnQgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gY2hpbGRyZW4gPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBsaW5rIHdpdGggdGhlIHN0b3JlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwic3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19zdG9yZUJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19zdG9yZUJ5S2V5cyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgbGVmdGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgcmlnaHQgY29tcG9uZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7ICAgXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IHNldFBhcmVudHM6IHRydWUsIGNoZWNrQ2hhbmdlczogZmFsc2UgfSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIGNvbXBvbmVudCBidXQgcHJldmVudCB0aGUgY29tcGlsYXRpb24gaW5zaWRlXG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZWxlbWVudCBjb250ZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3JlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG5cbiAgZ2V0IHRyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLl9fc2NvcGUgJiYgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbikgfHwgbnVsbDtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsaW5rcy5cbiAqIEl0IHdvcmtzIHdpdGggcm91dGVyIGFzIHdlbGwuIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnb1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIHRvIGdvIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqIEBhdHRyIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcGFyYW1zfVxuICogQGF0dHIge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcXVlcnl9XG4gKiBAYXR0ciB7c3RyaW5nfSBbaGFzaF0gLSBoYXNoIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfaGFzaH1cbiAqIEBhdHRyIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19yb3V0ZXIubG9jYXRpb259XG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdCBcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaW5BY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBwYXJ0IG9mIHRoZSBhY3RpdmUgc3RhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aXRoIHRoZSBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEB0YWcgY29udGVudFxuICogQHNlbGVjdG9yIGNvbnRlbnQsW2NvbnRlbnRlZGl0YWJsZV1cbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQGF0dHIge2Jvb2xlYW59IFtlZGl0YWJsZV0gLSBlZGl0YWJsZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVtYmVkIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgZW1iZWRcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGZvclxuICogQHNlbGVjdG9yIGZvcltpbl0sb2xbaW5dLHVsW2luXSx0aGVhZFtpbl0sdGJvZHlbaW5dLHRmb290W2luXVxuICogQGF0dHIge29iamVjdHxhcnJheX0gaW4gLSBkYXRhIHRvIGNyZWF0ZSB0aGUgbG9vcFxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gb3V0IC0gc2VudCBvbiB0aGUgZGF0YSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ291dCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCB0aGlzLkxvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIHRoaXMuTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yRWwgPSBudWxsO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICBcbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5fX3ByZXBhcmVBdHRyaWJ1dGVJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBub2RlID0gcHJvcC5ub2RlO1xuXG4gICAgaWYoKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5uYW1lID09ICdpbicgJiYgcHJvcC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN1cGVyLl9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkgeyAgICBcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhdyk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHN1cGVyLnJlbW92ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLml0ZXJhdG9yRWwgJiYgdGhpcy5pdGVyYXRvckVsLnJlbW92ZSgpO1xuICAgIGRlbGV0ZSB0aGlzLmh0bWw7XG4gICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzO1xuICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yRWw7IFxuICAgIGRlbGV0ZSB0aGlzLl9faXRlcmF0b3I7XG4gICAgZGVsZXRlIHRoaXMuX192YWx1ZTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvckVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoZWwub3V0ZXJIVE1MKTtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudChodG1sKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHJldHVybiBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2hhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07ICAgICAgICBcbiAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRoaXMuX19pbmRleCA9PT0gaXRlcmF0b3IuaW5kZXgpOyAgICAgXG4gICAgICBpdGVyYXRvci5zZXRLZXkodGhpcy5fX2tleSA9PT0gaXRlcmF0b3Iua2V5KTtcbiAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHV0aWxzLmNvbXBhcmUodGhpcy5fX2hhc2gsIGl0ZXJhdG9yLmhhc2gpKTtcbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgXG4gICAgICAgIHJlY29tcGlsZTogeyBcbiAgICAgICAgICBjaGVja0NoYW5nZXM6IHRydWVcbiAgICAgICAgfSBcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5pdGVyYXRvckVsLmNsb25lTm9kZSgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwuY2hpbGRyZW4pOyBcbiAgICB0aGlzLml0ZXJhdG9ycy5zb3J0KChhLCBiKSA9PiBjaGlsZHJlbi5pbmRleE9mKGEuZWwpIC0gY2hpbGRyZW4uaW5kZXhPZihiLmVsKSk7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnNvcnQoKGEsIGIpID0+IGNoaWxkcmVuLmluZGV4T2YoYSkgLSBjaGlsZHJlbi5pbmRleE9mKGIpKTtcbiAgICBjb25zdCBsb29wID0gKGtleSwgdmFsdWUsIGluZGV4KSA9PiB0aGlzLmxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpLml0ZXJhdGUoaW5kZXgpO1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yIChsZXQgbCA9IGRhdGEubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgbG9vcChrZXksIGRhdGFba2V5XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19yZW1vdmUoKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2hhc2ggPSAnJztcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgfSAgXG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgbG9vcFxuICogQHNlbGVjdG9yIGxvb3AsdHJcbiAqIEBhdHRyIEBzZWUgRm9yXG4gKiBAc2NvcGUgeyp9IGxvb3BWYWx1ZSAtIGRhdGEgaXRlbSdzIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBcbiAqIEBzY29wZSB7c3RyaW5nfG51bWJlcn0gbG9vcEtleSAtIGtleSBvZiB0aGUgaXRlcmF0aW9uXG4gKiBAc2NvcGUge251bWJlcn0gbG9vcEluZGV4IC0gaW5kZXggb2YgdGhlIGl0ZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG5cbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgc3VwZXIucmVtb3ZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGRlbGV0ZSB0aGlzLmZvcjtcbiAgICBkZWxldGUgdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHNldEluZGV4KHRhcmdldCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgsIHsgdGFyZ2V0IH0pO1xuICB9XG5cbiAgc2V0S2V5KHRhcmdldCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5LCB7IHRhcmdldCB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHRhcmdldCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHsgdGFyZ2V0LCBzYXZlUHJveHk6IHRydWUgfSk7XG4gICAgdGhpcy5oYXNoID0gdGhpcy5mb3IuX19oYXNoO1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBpZlxuICogQHNlbGVjdG9yIGlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIC0gc2hvdyB0aGUgZWxlbWVudCBjb250ZW50IG9yIG5vdFxuICogQGF0dHIge2Jvb2xlYW59IHJlY3JlYXRlIC0gZGVsZXRlIHRoZSBjb250ZW50IGFuZCByZWNyZWF0ZSBvciBqdXN0IHNob3cvaGlkZSBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdGhpcy5zZXRJcyk7XG4gIH1cblxuICBzZXRJcyh2YWwpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWw7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpOyAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiAgcmVzdWx0KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXMgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGlmICh0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIHRoaXMuZGlzcGxheSwgJ2ltcG9ydGFudCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgICBcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlLWlmXG4gKiBAc2VsZWN0b3IgZWxzZS1pZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyBAc2VlIElmXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlOyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGlmcmFtZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpZnJhbWVcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaW1hZ2VzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaW1nXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogeGhyID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggaW5wdXQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY2hlY2tib3hfYW5kX3JhZGlvfVxuICogXG4gKiBAdGFnIGlucHV0XG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXS5jb25jYXQoVGV4dC5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChUZXh0LmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJzsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5hdHRyKCdjaGVja2VkJywgdGhpcy5zZXRDaGVja2VkKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSAgXG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBcbiAgICBpZiAodGhpcy5lbC5jaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBvYmplY3QgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBvYmplY3RcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdHMgZXh0ZW5kcyBVcmwgeyAgXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ2RhdGEnO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29iamVjdCcsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpb1xuICogQHNlbGVjdG9yIHJhZGlvW25hbWVdXG4gKiBAYXR0ciB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZ3JvdXBcbiAqIEBhdHRyIHtzdHJpbmd8bnVsbH0gdmFsdWUgLSBzZWxlY3RlZCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICogQG1lc3NhZ2Uge3N0cmluZ30gcmFkaW8gLSBzZW50IG9uIHZhbHVlIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgdGhpcy5SYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgKCkgPT4gdGhpcy5zZXROYW1lcygpLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCduYW1lJywgdGhpcy5zZXROYW1lcyk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lIHx8IHRoaXMuYXR0cnMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAgaXRlbS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW8tYnV0dG9uXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcm91dGVyIHRlbXBsYXRlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIHJvdXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQgPSB0cnVlKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuXG4gICAgY29uc3QgZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uID0gcGF0aCA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gaHRtbCA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCFsb2FkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn0iLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHNlbGVjdC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3Nfc2VsZWN0fVxuICogXG4gKiBAdGFnIHNlbGVjdCAgXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ10uY29uY2F0KEZvci5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7IFxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCkpO1xuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHV0aWxzLmRlYm91bmNlKCgpID0+IHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pLCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2hpY2ggaGF2ZSBhc3luYyBhdHRyaWJ1dGUgY29udGVudC5cclxuICogXHJcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cclxuICogXHJcbiAqIEB0YWcgdXJsXHJcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufSIsIi8qKlxuICogQ2xhc3MgdG8gd29yayB3aXRoIGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYodGhpcy5fX3JlbW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZih0aGlzLl9fcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgdGhlIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07IFxuICAgIHRoaXMubm9kZS5fX2NvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVPdXQodGhpcy5ub2RlLCBvcHRpb25zLmRldGFpbCk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZWx5XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZW1pdHRlclxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMudW5iaW5kKCk7XG4gICAgZGVsZXRlIHRoaXMubmFtZTtcbiAgICBkZWxldGUgdGhpcy5ub2RlO1xuICAgIGRlbGV0ZSB0aGlzLmNvbXBvbmVudFxuICAgIGRlbGV0ZSB0aGlzLmVsO1xuICAgIHRoaXMuX19yZW1vdmVkID0gdHJ1ZTtcbiAgfVxufSIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuY29uc3Qgb2JqID0ge307XG5cbi8qKlxuICogR2xvYmFscyBpcyBmb3IgdXNpbmcgdGhlIGN1c3RvbSB2YXJpYWJsZXMgaW4gaHRtbFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlI2RvY3NfZ2xvYmFsc31cbiAqL1xuY29uc3QgZ2xvYmFscyA9IG5ldyBQcm94eShvYmosIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZihrZXkgPT0gJ19fdGFyZ2V0Jykge1xuICAgICAgcmV0dXJuIG9ialxuICAgIH0gICBcbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRhcmdldFtrZXldID0gQWtpbGkud3JhcCh2YWx1ZSwgeyB0YWc6IGtleSB9KTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHsgICBcbiAgICBBa2lsaS5yZW1vdmVUYWcoa2V5KTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxzOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNjb3BlIHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuc2F2ZVByb3h5XSBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5zaWxlbnRdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudGFyZ2V0XVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgb3B0aW9ucy5zYXZlUHJveHkgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICBvcHRpb25zLnNpbGVudCAmJiB0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZUtleXMoKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIG9wdGlvbnMudGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbnMuc2lsZW50ICYmIHRoaXMuX19jb21wb25lbnQuX19lbmFibGVLZXlzKCk7XG4gICAgICBvcHRpb25zLnNhdmVQcm94eSAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzY29wZVxuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX25hbWUpO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcykge1xuICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzLlxuICogVGhlIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBtYWtlIHJlcXVlc3RzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIF9fY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkZWZhdWx0c10gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvclBhdHRlcm46IC9eW14yM10vLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9OyBcbiAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsOyAgXG4gICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgXG4gICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpO1xuICAgICAgeGhyID0gYmVmb3JlLnhocjtcbiAgICAgIG9wdGlvbnMgPSBiZWZvcmUub3B0aW9ucztcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpOyAgXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBcbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgIHN0ciAmJiAob3B0aW9ucy51cmwgKz0gXCI/XCIgKyBzdHIpO1xuICAgICAgfVxuICAgICAgICAgICBcbiAgICAgIGxldCBoYXNoID0gbnVsbDtcbiAgICAgIGxldCBjYWNoZSA9IHR5cGVvZiBvcHRpb25zLmNhY2hlID09ICdmdW5jdGlvbic/IG9wdGlvbnMuY2FjaGUob3B0aW9ucyk6IG9wdGlvbnMuY2FjaGU7XG4gICAgICAoIXdpbmRvdy5BS0lMSV9TU1IgJiYgIUFraWxpLl9faW5pdCkgJiYgKGNhY2hlID0gdHJ1ZSk7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCxcbiAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlciwgXG4gICAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMucGFzc3dvcmQsIFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY2FjaGUgJiYgaGFzaCkgeyAgICAgICAgXG4gICAgICAgIGxldCBfY2FjaGUgPSB0aGlzLmdldENhY2hlKGhhc2gpO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYoX2NhY2hlICYmIChjYWNoZSA9PT0gdHJ1ZSB8fCBub3cgLSBfY2FjaGUuY3JlYXRlZEF0IDw9IGNhY2hlKSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMudHJhbnNmb3JtQWZ0ZXIoX2NhY2hlLnJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgbGV0IGhlYWRlcktleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlYWRlcktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrID0gaGVhZGVyS2V5c1tpXTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLFxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICByZWFkeVN0YXRlOiB4aHIucmVhZHlTdGF0ZSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHhoci53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiB4aHIucmVzcG9uc2VUeXBlLFxuICAgICAgICAgIHJlc3BvbnNlVGV4dDogeGhyLnJlc3BvbnNlVHlwZSA9PSAndGV4dCc/IHhoci5yZXNwb25zZVRleHQ6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlWE1MOiB4aHIucmVzcG9uc2VUeXBlID09ICdkb2N1bWVudCc/IHhoci5yZXNwb25zZVhNTDogJycsXG4gICAgICAgICAgcmVzcG9uc2VVUkw6IHhoci5yZXNwb25zZVVSTCxcbiAgICAgICAgICB0aW1lb3V0OiB4aHIudGltZW91dCxcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoeGhyKSwgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIocmVzdWx0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4gJiYgKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgKGNhY2hlIHx8IHdpbmRvdy5BS0lMSV9TU1IpICYmIGhhc2ggJiYgdGhpcy5jcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpO1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhlYWRlcnMgb2YgYW4gWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUoaGFzaCkge1xuICAgIHJldHVybiB0aGlzLl9fY2FjaGVbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqL1xuICBjcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpIHtcbiAgICB0aGlzLl9fY2FjaGVbaGFzaF0gPSB7IHJlc3VsdCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIGZvciBzYXZpbmcgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICByZXR1cm4gdXRpbHMuY3JlYXRlSGFzaChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBvYmplY3QgdG8gYSBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGsgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpKS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcChrZXkgPT4gb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKSk7XG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHF1ZXJ5IHN0cmluZyB0byBhbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIHRoZSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZGF0YSBiZWZvcmUgdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIGRhdGEgYWZ0ZXIgdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIGEgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZWEgYSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIGEgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEhFQUQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgaGVhZCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0hFQUQnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Ll9faW5zdGFuY2VzID0ge307XG5yZXF1ZXN0Ll9fY2FjaGUgPSB7fTtcblxuLyoqXG4gKiBBZGQgYSBuZXcgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24gKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0OyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogVGhlIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaW5jbHVkZXMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcHJldmlvdXMgPSBudWxsKSB7ICBcbiAgICB0aGlzLnVybCA9IHVybDsgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7ICAgIFxuICAgIHRoaXMuX19maW5pc2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0IHRvIGFub3RoZXIgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgcm91dGVyLnN0YXRlXG4gICAqL1xuICByZWRpcmVjdChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IC4uLnRoaXMucGF0aC5vcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5jYW5jZWwoKTsgICBcbiAgICByZXR1cm4gcm91dGVyLnN0YXRlLmNhbGwocm91dGVyLCBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVsb2FkKHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyAuLi50aGlzLnBhdGgub3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIHBhcmFtcyA9IHsgLi4udGhpcy5wYXRoLnBhcmFtcywgLi4ucGFyYW1zIH07XG4gICAgcXVlcnkgPSB7IC4uLnRoaXMucGF0aC5xdWVyeSwgLi4ucXVlcnkgfTtcbiAgICBoYXNoID0gaGFzaCA9PT0gdW5kZWZpbmVkPyB0aGlzLnBhdGguaGFzaDogaGFzaDtcbiAgICByZXR1cm4gcm91dGVyLnN0YXRlLmNhbGwocm91dGVyLCB0aGlzLnBhdGguc3RhdGUubmFtZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSwgLi4ucGF0aCB9O1xuICAgIHRoaXMucm91dGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICB0aGlzLnN0YXRlc1t0aGlzLnBhdGguc3RhdGUubmFtZV0gPSB0aGlzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSByb3V0ZSBpcyBjaGFuZ2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcm91dGVcbiAgICovXG4gIGlzUm91dGVDaGFuZ2VkKHJvdXRlKSB7XG4gICAgaWYoIXRoaXMucHJldmlvdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gcm91dGUuc3RhdGU7XG5cbiAgICBpZighdGhpcy5wcmV2aW91cy5oYXNTdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtS2V5cyA9IFtdO1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2Uocm91dGVyLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtS2V5cy5wdXNoKHYpKTtcbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBzdGF0ZS5wYXJhbXMpIHtcbiAgICAgIGlmKHBhcmFtS2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgICAgcGFyYW1LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5xdWVyeSk7XG4gICAgY29uc3Qgd2F0Y2hIYXNoID0gc3RhdGUuaGFzaCAhPT0gdW5kZWZpbmVkOyAgICBcbiAgICBjb25zdCBwcmV2Um91dGUgPSB0aGlzLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTsgXG5cbiAgICBjb25zdCBwcmV2ID0geyBcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSwgXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSxcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH1cblxuICAgIGlmKHdhdGNoSGFzaCkge1xuICAgICAgcHJldi5oYXNoID0gcHJldlJvdXRlLmhhc2g7XG4gICAgICBjdXJyZW50Lmhhc2ggPSByb3V0ZS5oYXNoO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGN1cnJlbnQgdHJhbnNpdGlvblxuICAgKi9cbiAgY2FuY2VsKCkgeyAgIFxuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlOyAgXG4gICAgdGhpcy5maW5pc2goKTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmlzaCB0aGUgdHJhbnNpdGlvblxuICAgKi9cbiAgZmluaXNoKCkge1xuICAgIHRoaXMuX19maW5pc2hlZCA9IHRydWU7XG4gICAgZGVsZXRlIHRoaXMucHJldmlvdXM7XG4gICAgY29uc3QgaW5kZXggPSByb3V0ZXIuX19xdWV1ZS5pbmRleE9mKHRoaXMpO1xuICAgIGluZGV4ID49IDAgJiYgcm91dGVyLl9fcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG4vKipcbiAqIEFraWxpIHJvdXRlclxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKi9cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci50cmFuc2l0aW9uID0gbnVsbDtcbnJvdXRlci5fX3F1ZXVlID0gW107XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG5yb3V0ZXIuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG5cbi8qKlxuICogQWRkIGEgbmV3IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke3N0YXRlfWApO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBvcHRpb25zLm1hbnVhbCA9IHRydWU7XG4gICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpKTsgIFxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7ICAgIFxuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7XG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBzb21lIHBvc2l0aW9uXG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgYnkgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7ICBcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHJvdXRlci4gXG4gKiBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7ICAgIFxuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMuc3RhdGVzW2ldKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHN0YXRlIFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gKi9cbnJvdXRlci5pbml0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IHBhcmVudHMgPSBbXTtcbiAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcGFyZW50cy5wb3AoKTtcbiAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTdGF0ZShwYXJlbnROYW1lKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgIH1cblxuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgc3RhdGUgYnkgdGhlIG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcbiAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gIHRoaXMuX19pbml0ICYmIHRoaXMuaW5pdFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHN0YXRlIGJ5IHRoZSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHVybCB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSB1cmwgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIucmVwbGFjZVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5yZXBsYWNlSGFzaFVybCh1cmwpOiB0aGlzLnJlcGxhY2VIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIHVybCB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVybCk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgdGhlIHVybCB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsICcjJyArICh1cmwgfHwgJy8nKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVybCB1c2luZyB0aGUgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHVybCB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcXVlcnkgcGFyYW1zIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBxdWVyeSBwYXJhbXMgdXNpbmcgdGhlIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBhcmVdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSwgcHJlcGFyZSA9IHRydWUpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgXG4gIGlmKHByZXBhcmUpIHtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gJy8nICsgKHBhcmFtc1t2XSB8fCAnJykpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXlxcXi8sICcnKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGFyZ3MgPSB7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIFxuICAgIGlmKGhhc2hUZW1wID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYoaGFzaFRlbXAgPT09ICcnKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0FyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAsIG9wdGlvbnMgfTtcblxuICAgIGlmKHV0aWxzLmNvbXBhcmUobmV3QXJncywgYXJncykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICB9XG4gICAgXG4gIHJldHVybiBhcmdzO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHBhcmFtc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVQYXJhbXMgPSBmdW5jdGlvbihzdGF0ZSwgcGFyYW1zLCBhcmdzKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk7XG5cbiAgZm9yKGxldCBpID0gc3RhdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIHBhcmFtcyA9IHRoaXMuY3JlYXRlU3RhdGVPYmplY3RBcmdzKHBhcmFtcywgdGhpcy5nZXRTdGF0ZShjdXJyZW50KS5wYXJhbXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBxdWVyeVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcXVlcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVF1ZXJ5ID0gZnVuY3Rpb24oc3RhdGUsIHF1ZXJ5LCBhcmdzKSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSk7XG5cbiAgZm9yKGxldCBpID0gc3RhdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIHF1ZXJ5ID0gdGhpcy5jcmVhdGVTdGF0ZU9iamVjdEFyZ3MocXVlcnksIHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucXVlcnksIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBjdXJyZW50XG4gKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlT2JqZWN0QXJncyA9IGZ1bmN0aW9uIChjdXJyZW50LCBkZWZhdWx0cywgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgY29uc3QgYWxsID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudCk7XG5cbiAgZm9yKGxldCBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBsZXQgdmFsID0gZGVmYXVsdHNba2V5XTtcblxuICAgIGlmKGFsbFtrZXldID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFsbFtrZXldID0gdmFsKGFyZ3MpO1xuICAgIH1cblxuICAgIGlmKGFsbFtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIGFsbCkge1xuICAgIGlmKGFsbFtrZXldID09PSBudWxsKSB7XG4gICAgICBkZWxldGUgYWxsW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFsbDsgXG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgaGFzaFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlSGFzaCA9IGZ1bmN0aW9uKHN0YXRlLCBoYXNoLCBhcmdzKSB7XG4gIGlmKGhhc2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gc3RhdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGhhc2ggPSB0aGlzLmNyZWF0ZVN0YXRlSGFzaEFyZ3MoaGFzaCwgdGhpcy5nZXRTdGF0ZShjdXJyZW50KS5oYXNoLCBhcmdzKTtcbiAgfVxuICBcbiAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBzdGF0ZSBoYXNoIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBjdXJyZW50XG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBkZWZhdWx0c1xuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVIYXNoQXJncyA9IGZ1bmN0aW9uIChjdXJyZW50LCBkZWZhdWx0cywgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgaWYoY3VycmVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgaWYodHlwZW9mIGRlZmF1bHRzID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdHMoYXJncyk7XG4gIH1cblxuICBpZihjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICByZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcGF0dGVybiBpbmZvXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCBrZXlzID0gW107XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcbiAgICByZXR1cm4gJy8/KFteL10qKSc7XG4gIH0pO1xuXG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoLyhbXl4vXSspWy9dKyQvLCAnJDEnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuLCAnZycpO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG4gIFxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgLi4uYXJncykgPT4geyBcbiAgICBhcmdzID0gYXJncy5zbGljZSgwLCBhcmdzLmxlbmd0aCAtIDIpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdiA9IGFyZ3NbaV07XG4gICAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICB9ICBcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHJvdXRlci50cmFuc2l0aW9uICYmICFyb3V0ZXIudHJhbnNpdGlvbi5fX2ZpbmlzaGVkPyByb3V0ZXIudHJhbnNpdGlvbi51cmw6IHRoaXMuZ2V0VXJsKCk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKCcvJyArIHVybC5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnLz8oW14vXSopJyk7XG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXi8nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcm91dGUgY29tcG9uZW50IGJ5IHRoZSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSBlbCA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBhdHRlcm5zIGFycmF5IGluZm9cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLCAuLi5jb250ZW50IH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZXMgYnkgdGhlIGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBSZWxvYWQgdGhlIHN0YXRlXG4gKiBcbiAqIEBzZWUgVHJhbnNpdGlvbi5yZWxvYWRcbiAqL1xucm91dGVyLnJlbG9hZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgaWYoIXRoaXMudHJhbnNpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIHRvIHJlbG9hZCB0aGUgc3RhdGUnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnRyYW5zaXRpb24ucmVsb2FkKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCk7ICBcbiAgdGhpcy5fX3F1ZXVlLnB1c2godHJhbnNpdGlvbik7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmKHRoaXMuX19xdWV1ZVswXSA9PT0gdHJhbnNpdGlvbikgeyAgICAgICBcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkudGhlbigoKSA9PiB7IFxuICAgIHRyYW5zaXRpb24ucHJldmlvdXMgPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICAgIHJvdXRlci50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTsgICBcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICAgIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7IFxuICAgIGxldCBsZXZlbCA9IDA7ICAgICAgXG5cbiAgICBjb25zdCBuZXh0ID0gc3RhdGVzID0+IHtcbiAgICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTsgXG4gICAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgY29tcG9uZW50OiByb3V0ZSB9KTsgICAgXG4gICAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4uY29udGVudC5wYXJhbXMgfTtcbiAgICAgIGhhc2ggPSBoYXNoIHx8IG9wdGlvbnMuZW1wdHlIYXNoO1xuICAgICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7ICAgICBcbiAgICAgIGhhc2ggPSBoYXNoIHx8ICcnO1xuICAgICAgbGV0IHJlYWxVcmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSk7IFxuICAgICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybChyZWFsVXJsKSk7IFxuICAgICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUobGV2ZWwpO1xuICAgICAgXG4gICAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkgeyAgICAgIFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgICAgfSAgICBcblxuICAgICAgdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgICAgdHJhbnNpdGlvbi5wYXRoLnVybCA9IHJlYWxVcmw7XG4gICAgICB0cmFuc2l0aW9uLnBhdGgub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAhc3RhdGUuYWJzdHJhY3QgJiYgbGV2ZWwrKztcbiAgICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICAgIGlmKHJlYWxVcmwgIT0gdXJsKSB7XG4gICAgICAgIGlzRGlmZmVyZW50ID0gdHJhbnNpdGlvbi5pc1JvdXRlQ2hhbmdlZCh0cmFuc2l0aW9uLnBhdGgpO1xuICAgICAgfVxuICAgICAgICBcbiAgICAgIGxldCBsb2FkID0gaXNEaWZmZXJlbnQgJiYgb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlOyAgICBcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbihkYXRhID0+IHsgICAgICAgIFxuICAgICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldlJvdXRlID0gdHJhbnNpdGlvbi5wcmV2aW91cyAmJiB0cmFuc2l0aW9uLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTtcbiAgICAgICAgKHByZXZSb3V0ZSAmJiAhcHJldlJvdXRlLmxvYWRlZCkgJiYgKGxvYWQgPSB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCkudGhlbigoKSA9PiB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gdHJ1ZSk7XG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXBsYWNlVXJsKHRoaXMuZGVmYXVsdFVybCkpOyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG4gICAgICAgICAgdHJhbnNpdGlvbi5maW5pc2goKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgKCF0cmFuc2l0aW9uLnBhdGggfHwgIXRyYW5zaXRpb24ucGF0aC5oYXNoKSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICAgICAgdHJhbnNpdGlvbi5maW5pc2goKTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICAgIH0pO1xuICB9KS5jYXRjaChlcnIgPT4ge1xuICAgIHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbi5maW5pc2goKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pXG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gZmFsc2U7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogU3RvcmUgYWxsb3dzIHlvdSB0byBzYXZlIGFuZCBzaGFyZSBkYXRhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3N0b3JlfVxuICovXG5jb25zdCBzdG9yZSA9IG5ldyBQcm94eSh7fSwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0YXJnZXRba2V5XSwgdmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdmFsdWUpOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogVGhlIG9iamVjdCB3aXRoIGEgbG90IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy91dGlsc31cbiAqL1xuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIHRoZSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3R5bGUgYXR0cmlidXRlIGZyb20gdGhlIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogU3BsaXQgdGhlIHN0cmluZyBleHRlbmRlZFxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbXCJIZWxsb1wiLCBcIldvcmxkXCJdXG4gKiB1dGlscy5zcGxpdChcIkhlbGxvIFdvcmxkXCIsIFwiIFwiKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyd4ID0gNScsICcgeSA9IFwiMTsyOzNcIiddXG4gKiB1dGlscy5zcGxpdCgneCA9IDU7IHkgPSBcIjE7MjszXCInLCBcIjtcIiwgWydcIiddKTtcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdHIgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlbF1cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtleGNsdWRlXSBcbiAqL1xudXRpbHMuc3BsaXQgPSBmdW5jdGlvbihzdHIsIGRlbCA9ICcnLCBleGNsdWRlID0gW10pIHtcblx0Y29uc3QgZXhwcyA9IFtdOyAgICAgXG4gIGxldCBsYXN0ID0gJyc7XG5cbiAgaWYoIWRlbCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xuICB9XG4gIGVsc2UgaWYoZGVsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWwpO1xuICB9XG4gIGVsc2UgaWYoc3RyLmluZGV4T2YoZGVsKSA9PSAtMSkge1xuICAgIGxhc3QgPSBzdHI7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gZXhjbHVkZS5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IGV4Y2x1ZGVbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSBkZWwgJiYgIW9wZW4pIHtcbiAgICAgICAgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG4gIH1cblxuICBsYXN0ICYmIGV4cHMucHVzaChsYXN0KTtcbiAgcmV0dXJuIGV4cHM7XG59XG5cbi8qKlxuICogRmlsdGVyIHRoZSBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgdGhlIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBieSB0aGUga2V5c1xuICogQHJldHVybnMge0FycmF5fSBcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IG51bGwpIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmIChrZXlzICYmICFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBzdHIgPSBoYW5kbGVyPyAoaGFuZGxlciArICcnKS50b0xvd2VyQ2FzZSgpOiAnJztcbiAgICBoYW5kbGVyID0gdmFsID0+ICh2YWw/ICh2YWwgKyAnJykudG9Mb3dlckNhc2UoKTogJycpLm1hdGNoKHN0cik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCFrZXlzICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihrZXlzKSB7XG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICAgIGtleSA9IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgICAgbGV0IHZhbCA9IGtleT8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGl0ZW0pOiBpdGVtO1xuICAgIFxuICAgICAgICBpZiAoaGFuZGxlcih2YWwpKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTb3J0IHRoZSBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gYXJyLnNsaWNlKCk7XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneCcsICd6J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmluY2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyB0aGUgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnNdIFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgbmVzdGVkOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCBwbGFpbjogZmFsc2UsIC4uLm9wdGlvbnMgfTtcblxuICBjb25zdCBuZXh0ID0gb2JqID0+IHtcbiAgICBpZihvcHRpb25zLnBsYWluICYmICF0aGlzLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgICAgdmFsID0gdmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgb3B0aW9ucy5uZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB0byB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCBpZ25vcmVVbmRlZmluZWQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gdmFsID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgaGFzaCBmcm9tIHRoZSBzdHJpbmdcbiAqIFxuICogQHBhcmFtIHsqfSBzb3VyY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNyZWF0ZUhhc2ggPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgdHlwZW9mIHNvdXJjZSA9PSAnb2JqZWN0JyAmJiAoc291cmNlID0gSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG4gIHR5cGVvZiBzb3VyY2UgIT0gJ3N0cmluZycgJiYgKHNvdXJjZSA9ICfioIAnICsgU3RyaW5nKHNvdXJjZSkpO1xuICBsZXQgaGFzaCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2hhciA9IHNvdXJjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgaGFzaCA9IGhhc2ggJiBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIGhhc2ggKyAnJztcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIHRoZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgc3RyaW5nIGZyb20gYSBkYXNoIHRvIGEgY2FtZWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIHN0cmluZyBmcm9tIGEgY2FtZWwgdG8gYSBkYXNoIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICghbyB8fCB0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIG9iamVjdCBuZXN0ZWQgcHJvcGVydHkgZXhpc3RlbmNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgb2JqZWN0IG5lc3RlZCBwcm9wZXJ0eSB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogRGVsZXRlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBvYmplY3RcbiAqIFlvdSBjYW4gY2FuY2VsIHRoZSBkZWxldGlvbiByZXR1cm5pbmcgZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKCFvIHx8IHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gb2JqID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IG9iaiA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICBsZXQgdmFsID0gJyc7ICBcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoIShub3cgJSBpKSkge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBkZWJvdW5jZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqIEByZXR1cm5zIHtmbn1cbiAqL1xudXRpbHMuZGVib3VuY2UgPSBmdW5jdGlvbihmbiwgZGVsYXkgPSAwKSB7ICBcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQoZm4uX19kZWJvdW5jZVRpbWVvdXQpO1xuICAgIGZuLl9fZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgIGRlbGV0ZSBmbi5fX2RlYm91bmNlVGltZW91dDtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=