/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.6.5
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

/**
 * The framework object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
var Akili = {};

/**
 * Set the framework's default variables
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

  Akili.wrap(_utils2.default, { unevaluate: true });

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
  Akili.unwrap(_utils2.default);
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
 * Wrap objects/classes to isolate and unevaluate data
 *
 * @param {*} obj
 * @param {object|function} [options] 
 */
Akili.wrap = function (obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var arr = [];

  if (typeof obj == 'function') {
    arr.push(obj.prototype);
    arr.push(obj);
  } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && !Array.isArray(obj)) {
    arr.push(obj);
  } else {
    return;
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    var _obj = arr[i];
    var keys = Object.getOwnPropertyNames(_obj);

    for (var k = 0, c = keys.length; k < c; k++) {
      var key = keys[k];
      var val = _obj[key];

      if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object') {
        this.wrap(val, options);
      } else if (typeof val != 'function') {
        continue;
      }

      if (options.reverse) {
        _obj[key] = _obj[key].__akili;
        continue;
      }

      _obj[key] = this.wrapFunction(_obj[key], options);
    }
  }
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
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { isolate: true };

  if (fn.__akili) {
    return fn;
  }

  var akiliWrappedFunction = function akiliWrappedFunction() {
    var _this7 = this,
        _arguments4 = arguments;

    if (options.unevaluate && options.isolate) {
      return Akili.unevaluate(function () {
        return Akili.isolate(function () {
          return fn.apply(_this7, _arguments4);
        });
      });
    } else if (options.unevaluate) {
      return Akili.unevaluate(function () {
        return fn.apply(_this7, _arguments4);
      });
    } else if (options.isolation) {
      return Akili.isolate(function () {
        return fn.apply(_this7, _arguments4);
      });
    }

    return fn.apply(this, arguments);
  };

  Object.defineProperty(akiliWrappedFunction, '__akili', {
    enumerable: false,
    value: fn
  });

  return akiliWrappedFunction;
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
      return _router2.default.changeState();
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
        var parentBindings = {};
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
          var parentsHash = _this5.__createKeysHash(data.parents);

          if (data.notBinding) {
            continue;
          }

          if (existingBindings[hash]) {
            continue;
          }

          var parentValue = _utils2.default.getPropertyByKeys(data.parents, data.component.__scope);
          var evalComponent = node.__attributeOf || node.__component;

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
      if (!node || systemAttributes.indexOf(node.nodeName) != -1) {
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
              realTarget[key] = _akili2.default.wrapFunction(realTarget[key], { isolate: true });
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

        var current = _utils2.default.getPropertyByKeys(link.keys, component.__scope);
        !_utils2.default.compare(current, value) && component.scope.__set(link.keys, value);
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

        if (link.fn) {
          _akili2.default.unisolate(function () {
            return link.fn.call(_this12, value);
          });
        } else {
          var current = _utils2.default.getPropertyByKeys(link.keys, _this12.__scope);
          !_utils2.default.compare(current, value) && _this12.scope.__set(link.keys, value);
        }

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
      if (!this.__isMounted) {
        throw new Error('Method "store" must be called after the compilation. For example, in "compiled" method.');
      }

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
      if (!this.__isMounted) {
        throw new Error('Method "attr" must be called after the compilation. For example, in "compiled" method.');
      }

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
      if (!this.__isMounted) {
        throw new Error('Method "unstore" must be called after the compilation. For example, in "compiled" method.');
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
        window.AKILI_SERVER && !_akili2.default.__init && (cache = true);

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

          if ((xhr.status + '').match(options.statusErrorsPattern)) {
            var err = new Error('Request to "' + options.url + '" returns failure status code ' + xhr.status);
            err.response = response;
            return reject(err);
          }

          hash && _this.createCache(hash, result);
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
exports.Chunk = exports.Loop = undefined;

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

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag for
 * @selector for[in],ol[in],ul[in],thead[in],tbody[in],tfoot[in]
 * @attr {object|array} in - data to create the loop
 * @attr {number|false} chunk=500 - chunk size
 * @attr {string} render=asc - render type
 * @message {object|array} out - sent on the data render
 * @message {object|array} chunk - sent on the data chunk render
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

    _this.__iterator = null;
    _this.__index = 0;
    _this.__count = 0;
    _this.__key = '';
    _this.__value = null;
    _this.__comparisonValue = null;
    _this.__promises = [];
    _this.renderTypes = ['asc', 'desc', 'mid'];
    _this.renderType = _this.renderTypes[0];
    _this.iterators = [];
    _this.iteratorRef = null;
    _this.iteratorOuterHTML = null;
    _this.chunkSize = 500;
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
      this.attr('chunk', this.setChunkSize);
      this.attr('render', this.setRenderType);
      return this.attr('in', this.draw);
    }
  }, {
    key: 'setRenderType',
    value: function setRenderType(type) {
      if (this.renderTypes.indexOf(type) == -1) {
        throw new Error('Wrong render type. It must be "asc", "desc" or "mid"');
      }

      this.renderType = type;
    }
  }, {
    key: 'setChunkSize',
    value: function setChunkSize(size) {
      this.chunkSize = size;
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
    value: function loop(key, value, index) {
      this.__index = index;
      this.__count++;
      this.__key = key;
      this.__value = value;
      this.__comparisonValue = _utils2.default.copy(value);

      if (this.iterators.length > this.__count - 1) {
        var iterator = this.iterators[this.__count - 1];
        var cCopy = iterator.comparison.copy;

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

        if (!_utils2.default.compare(cCopy, this.__comparisonValue, { ignoreUndefined: true })) {
          iterator.setValue();
        } else {
          iterator.setValue(true);
        }

        this.renderType !== 'asc' && this.el.insertBefore(iterator.el, this.getClosestElement(index));
        this.__promises.push(_akili2.default.compile(iterator.el, { recompile: true }));
        return iterator;
      }

      var el = this.createIteratorElement();
      el.innerHTML = this.html;
      this.el.insertBefore(el, this.renderType !== 'asc' ? this.getClosestElement(index) : this.iteratorRef);
      this.__promises.push(_akili2.default.compile(el));
      this.iterators.push(el.__akili);
      return el.__akili;
    }
  }, {
    key: 'getClosestElement',
    value: function getClosestElement(index) {
      var closest = this.iteratorRef;

      this.iterators.reduce(function (min, iterator) {
        var diff = iterator.index - index;

        if ((!min || diff < min) && diff > 0) {
          closest = iterator.el;
          return diff;
        }

        return min;
      }, 0);

      return closest;
    }

    /**
     * Draw the data
     * 
     * @param {object|array} data 
     * @return {Promise}
     */

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

      this.chunk && this.chunk.stop();
      this.chunk = new Chunk(this, data);
      this.data = data;
      this.dataCopy = _utils2.default.copy(data);

      return this.chunk.start().then(function (done) {
        for (var i = _this2.__count, l = _this2.iterators.length; i < l; i++) {
          var iterator = _this2.iterators[i];
          iterator.__destroy();
          _this2.iterators.splice(i, 1);
          l--;
          i--;
        }

        if (!done) {
          return;
        }

        return Promise.all(_this2.__promises).then(function () {
          _this2.reset();
          _this2.attrs.onOut.trigger(_this2.data, { bubbles: true });
        });
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.__index = 0;
      this.__count = 0;
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
For.events = ['out', 'chunk'];
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

      this.comparison = {
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

/**
 * Class to manage loop chunks
 */


Loop.matches = '';
Loop.controlAttributes = true;

var Chunk = exports.Chunk = function () {
  function Chunk(instance, data) {
    _classCallCheck(this, Chunk);

    this.instance = instance;
    this.arr = this.create(data);
    this.index = 0;
  }

  _createClass(Chunk, [{
    key: 'start',
    value: function start() {
      var _this4 = this;

      return Promise.resolve(this.next()).then(function () {
        return !_this4.cancelled;
      });
    }
  }, {
    key: 'next',
    value: function next() {
      var _this5 = this;

      if (this.cancelled) {
        return;
      }

      if (!this.arr.length) {
        return;
      }

      if (this.index > this.arr.length - 1) {
        return;
      }

      return this.draw(this.arr[this.index]).then(function () {
        _this5.index++;
        return _akili2.default.nextTick(_this5.next.bind(_this5));
      });
    }

    /**
     * Create chunks
     * 
     * @param {object|array} data 
     * @return {array}
     */

  }, {
    key: 'create',
    value: function create(data) {
      var keys = Object.keys(data);
      Array.isArray(data) && (keys = keys.filter(function (key) {
        return +key == key;
      }));
      return this['create' + _utils2.default.capitalize(this.instance.renderType)](data, keys);
    }
  }, {
    key: 'createAsc',
    value: function createAsc(data, keys) {
      var arr = [];

      for (var i = 0, l = keys.length; i < l; i++) {
        if (i % this.instance.chunkSize == 0) {
          arr.push([]);
        }

        var key = keys[i];
        arr[arr.length - 1].push({ value: data[key], key: key, index: i });
      }

      return arr;
    }
  }, {
    key: 'createDesc',
    value: function createDesc(data, keys) {
      var arr = [];
      var length = keys.length;

      for (var i = length - 1; i >= 0; i--) {
        if ((i + 1) % this.instance.chunkSize == 0 || i == length - 1) {
          arr.push([]);
        }

        var key = keys[i];
        arr[arr.length - 1].push({ value: data[key], key: key, index: i });
      }

      return arr;
    }
  }, {
    key: 'createMid',
    value: function createMid(data, keys) {
      var arr = [[]];
      var length = keys.length;
      var mid = Math.floor(length / 2);
      var c = 0;

      for (var i = mid, k; i >= 0; i--) {
        if (!mid) {
          continue;
        }

        k = mid + (mid - i + 1);
        c += 2;

        if (c % this.instance.chunkSize == 0) {
          arr.push([]);
        }

        var keyPrev = keys[i];
        var keyNext = keys[k];
        arr[arr.length - 1].push({ value: data[keyPrev], key: keyPrev, index: i });
        k < length && arr[arr.length - 1].push({ value: data[keyNext], key: keyNext, index: k });
      }

      for (var _i = c, l = length; _i < l; _i++) {
        if (_i % this.instance.chunkSize == 0) {
          arr.push([]);
        }

        var key = keys[_i];
        arr[arr.length - 1].push({ value: data[key], key: key, index: _i });
      }

      return arr;
    }

    /**
     * Draw the chunk
     * 
     * @param {object|array} data 
     * @returns {Promise}
     */

  }, {
    key: 'draw',
    value: function draw(data) {
      var _this6 = this;

      var loop = function loop(key, value, index) {
        var iterator = _this6.instance.loop(key, value, index);
        iterator.iterate(index);
      };

      var p = [];

      for (var i = 0, l = data.length; i < l; i++) {
        var obj = data[i];
        loop(obj.key, obj.value, obj.index);
        p.push(this.instance.__promises[this.instance.__promises.length - 1]);

        if (this.cancelled) {
          break;
        }
      }

      return Promise.all(p).then(function () {
        !_this6.cancelled && _this6.instance.attrs.onChunk.trigger(data, { bubbles: true });
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.index = 0;
      this.cancelled = true;
      this.instance.reset();
    }
  }]);

  return Chunk;
}();

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

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for working with events.
 * An instance of this class allows you to trigger custom javascript events.
 * 
 * {@link https://akilijs.com/docs/events}
 */
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

    /**
     * Prepere an event options
     * 
     * @param {object} [options] 
     */

  }, {
    key: 'prepareOptions',
    value: function prepareOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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

/**
 * Transition class.
 * An instance of this class consists the last actual router transition information.
 * 
 * {@link https://akilijs.com/docs/routing#docs_transition}
 */
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

  /**
   * Redirect to another state
   * 
   * @see router.state
   */


  _createClass(Transition, [{
    key: 'redirect',
    value: function redirect() {
      this.cancel();
      router.state.apply(router, arguments);
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
      this.path = path;
      this.routes.push(path);
      this.states[path.state.name] = path;
      this.params = !path.parent ? path.params : _extends({}, path.parent.params, path.params);
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
     * Cancel the current transition
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
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

        this.el.style.display = this.display;
      } else {
        if (this.recreate) {
          this.empty();
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
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag else-if
 * @selector else-if[is]
 * @attr {boolean} is @see If
 */


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
    key: 'created',
    value: function created() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        _this2.el.content = _this2.getContent();
      });

      return _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      this.attr('multiple', this.setMultiple);
      this.attr('content', this.setContent);
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this3 = this;

      return _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'draw', this).apply(this, arguments).then(function () {
        return _this3.drawSelect();
      });
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

Input.booleanAttributes = ['checked', 'multiple'].concat(_text2.default.booleanAttributes);
Input.events = ['change'].concat(_text2.default.events);
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
      this.attr('value', this.setValue);
      this.attr('name', this.setNames);
      return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'resolved', this).apply(this, arguments);
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this3 = this;

      return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'draw', this).apply(this, arguments).then(function () {
        return _this3.__isResolved && _this3.setNames(_this3.attrs.name);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWJmNTFhMTZlNTYxNDFjMzc3NTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwic2V0RGVmYXVsdHMiLCJvcHRpb25zIiwiZGVidWciLCJnbG9iYWxzIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX19vbkVycm9yIiwidHJpZ2dlckluaXQiLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJ3cmFwIiwidW5ldmFsdWF0ZSIsImNvbXBvbmVudHMiLCJzZXJ2aWNlcyIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJkZWZpbmUiLCJlcnJvckhhbmRsaW5nIiwiaXNvbGF0ZUV2ZW50cyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJjbGVhckdsb2JhbHMiLCJrZXkiLCJFbGVtZW50IiwicHJvdG90eXBlIiwiQXJyYXkiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJQcm9taXNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVud3JhcCIsImpvaW5CaW5kaW5nS2V5cyIsImtleXMiLCJtYXAiLCJlbCIsInRvU3RyaW5nIiwiam9pbiIsImFkZFNjb3BlIiwic2NvcGUiLCJfX25hbWUiLCJFcnJvciIsImdldFNjb3BlIiwibmFtZSIsInJlbW92ZVNjb3BlIiwiZ2V0QWtpbGlQYXJlbnRzIiwidHJlZSIsImFyciIsImNoZWNrIiwibm9kZSIsInBhcmVudE5vZGUiLCJfX2FraWxpIiwicHVzaCIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsImZuIiwicmVzIiwicHJvcHMiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJpIiwibCIsImxlbmd0aCIsInByb3AiLCJpc0RlbGV0ZWQiLCJjb21wb25lbnQiLCJfX2V2YWx1YXRlQnlLZXlzIiwidW5kZWZpbmVkIiwiX19zZXQiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsIl9fc2NvcGUiLCJldmFsdWF0aW9uIiwidW5pc29sYXRlIiwiaXNvbGF0aW9uIiwibmV4dFRpY2siLCJyZXNvbHZlIiwidGhlbiIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIl9fY2FuY2VsbGVkIiwiZmluZCIsInAiLCJfX3ByZXZlbnQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwiX19jb21waWxlIiwiYWxsIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImNhdGNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmd1bWVudHMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiaXNBcnJheSIsIm51bSIsImluZGV4IiwiY2FsbGJhY2siLCJvYmoiLCJjIiwidmFsIiwicmV2ZXJzZSIsIndyYXBGdW5jdGlvbiIsImFraWxpV3JhcHBlZEZ1bmN0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJzdGF0dXMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiQUtJTElfU0VSVkVSIiwiaW5pdFNlcnZlclNpZGVIdG1sIiwiaHRtbCIsImluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwicmVxdWVzdENhY2hlIiwiQUtJTElfQ0xJRU5UIiwicHJlcGFyZVNlcnZlclNpZGVIdG1sIiwiY2hhbmdlU3RhdGUiLCJwcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsImVyciIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwib3V0ZXJIVE1MIiwiY2FjaGUiLCJfX21haW4iLCJkZWluaXQiLCJzdG9yZUtleXMiLCJfX3RhcmdldCIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJpbmRleE9mIiwib3BlbiIsImZpbHRlciIsImhhbmRsZXIiLCJtYXRjaCIsIml0ZW0iLCJmaWx0ZXJlZCIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImluY2x1ZGVLZXlzIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwiaXNTY29wZVByb3h5IiwiaXNQbGFpbk9iamVjdCIsImNvcHkiLCJuZXN0ZWQiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsImNvbXBhcmUiLCJjbGVhclVuZGVmaW5lZCIsImlnbm9yZVVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJzIiwidHJpbSIsIkZ1bmN0aW9uIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2lzUmVzb2x2ZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nIiwiX19jaGlsZHJlbiIsIl9fcGFyZW50IiwiX19wYXJlbnRzIiwiX19hdHRycyIsIl9fYXR0ckxpbmtzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsIl9fY29udGVudCIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJzYXZlQXR0cmlidXRlUHJveHlJbiIsIl9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0Iiwic2F2ZUF0dHJpYnV0ZVByb3h5T3V0IiwiX19uZXN0ZWRPYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2NvbXBvbmVudCIsImNvbSIsIl9fZXhwcmVzc2lvbiIsIkF0dHIiLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyZW50QmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiYXR0ck5hbWUiLCJlbGVtZW50TmFtZSIsIl9fZWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJoYXNoIiwiX19jcmVhdGVLZXlzSGFzaCIsInBhcmVudHNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsInJlYWxDb21wb25lbnQiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImVsZW1lbnQiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJfX2VuYWJsZUtleXMiLCJ1bmJpbmQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJyZWFsVGFyZ2V0IiwiZXhjQXJyIiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50Iiwia2V5U3RyaW5nIiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsImluZm8iLCJjYWxsT25TdGFydCIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJDSEVDS19QUk9YWSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbktleSIsInVwZGF0ZWRBdCIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJub2RlcyIsIl9fY2xlYXJFbXB0eUJpbmRpbmdzIiwiY2xlYXIiLCJfX3JlbW92ZSIsIl9fY2xlYXJTdG9yZUxpbmtzIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZGVmYXVsdHMiLCJnZXRIZWFkZXJzIiwieGhyIiwiaGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImxpbmUiLCJzdGF0dXNFcnJvcnNQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsIm5vdyIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJjaGFyIiwiY2hhckNvZGVBdCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsInZhbHVlS2V5IiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlVGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uRGVib3VuY2UiLCJzZXRGb2N1cyIsInNldFZhbHVlIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiZm9jdXMiLCJibHVyIiwiTG9vcCIsIl9faXRlcmF0b3IiLCJfX2luZGV4IiwiX19jb3VudCIsIl9fa2V5IiwiX192YWx1ZSIsIl9fY29tcGFyaXNvblZhbHVlIiwiX19wcm9taXNlcyIsInJlbmRlclR5cGVzIiwicmVuZGVyVHlwZSIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJjaHVua1NpemUiLCJjcmVhdGVJdGVyYXRvciIsInNldENodW5rU2l6ZSIsInNldFJlbmRlclR5cGUiLCJkcmF3IiwidHlwZSIsInNpemUiLCJtYXNrIiwibmV4dFNpYmxpbmciLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIml0ZXJhdG9yIiwiY0NvcHkiLCJjb21wYXJpc29uIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJpbnNlcnRCZWZvcmUiLCJnZXRDbG9zZXN0RWxlbWVudCIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImNsb3Nlc3QiLCJtaW4iLCJkaWZmIiwiY2h1bmsiLCJzdG9wIiwiQ2h1bmsiLCJkYXRhQ29weSIsInN0YXJ0IiwiZG9uZSIsInJlc2V0Iiwib25PdXQiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsImNyZWF0ZSIsImNhbmNlbGxlZCIsIm1pZCIsImZsb29yIiwia2V5UHJldiIsImtleU5leHQiLCJsb29wIiwiaXRlcmF0ZSIsIm9uQ2h1bmsiLCJfX2VsIiwic3RyaWN0IiwiZWxDb21wb25lbnQiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsInByZXBhcmVPcHRpb25zIiwiX0V2ZW50IiwidHJhbnNpdGlvbiIsInN0YXRlIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImVtcHR5IiwiZXhpc3RzIiwibG9hZGVkIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsInJvdXRlIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fb3B0aW9ucyIsIl9fcGFyYW1SZWdleCIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsImNyZWF0ZVN0YXRlVXJsIiwicmVsb2FkIiwiZ2V0VXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsImVycm9yIiwicHVzaFN0YXRlIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJpbml0U3RhdGUiLCJwYXJlbnROYW1lIiwiZnVsbFBhdHRlcm4iLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwiZiIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsImluQWN0aXZlU3RhdGUiLCJnZXRSb3V0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwiX19pc29sYXRlZCIsIl9fZGlzYWJsZUNoYW5nZSIsInByZXZUcmFuc2l0aW9uIiwib25FbmQiLCJzZXRQYXRoIiwiaGFzU3RhdGUiLCJpc0RpZmZlcmVudCIsInByZXYiLCJ0aXRsZSIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldEFjdGl2aXR5IiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsImdldENvbnRlbnQiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwic2VsZWN0aW9uIiwicmVkZWZpbmUiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJzZXRTZWxlY3RlZCIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJwcmV2Q2hlY2tlZCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJzZXROYW1lcyIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbm5lY3Rpb24iLCJzZXRDYWNoZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsIk9iamVjdHMiLCJpc1VybCIsInByZXZlbnREZWZhdWx0Iiwib25TdGF0ZUNoYW5nZWQiLCJzZXRQYXJhbXMiLCJzZXRRdWVyeSIsInNldEhhc2giLCJzZXRPcHRpb25zIiwicmVzZXRIcmVmIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OFFDN0RBOzs7Ozs7Ozs7QUFTQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLElBQU1BLFFBQVEsRUFBZDs7QUFFQTs7O0FBR0FBLE1BQU1DLFdBQU4sR0FBb0IsWUFBWTtBQUFBOztBQUM5QixPQUFLQyxPQUFMLEdBQWU7QUFDYkMsV0FBTyxJQURNO0FBRWJDLGFBQVM7QUFGSSxHQUFmOztBQUtBLE9BQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLE9BQUtDLFlBQUwsR0FB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QSxPQUFmO0FBQ0Q7Ozs2QkFFUXlFLEksRUFBTTtBQUNiLFVBQUlra0IsUUFBUSxpQkFBT3FCLFFBQVAsQ0FBZ0J2bEIsSUFBaEIsQ0FBWjs7QUFFQSxVQUFJLENBQUNra0IsS0FBTCxFQUFZO0FBQ1YsY0FBTSxJQUFJcGtCLEtBQUosd0NBQStDRSxJQUEvQyxPQUFOO0FBQ0Q7O0FBRUQsYUFBT2trQixLQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQUksS0FBSzVXLEdBQVQsRUFBYztBQUNaLGFBQUtDLEtBQUwsQ0FBV29mLElBQVgsR0FBa0IsS0FBS3JmLEdBQXZCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0MsS0FBTCxDQUFXb2YsSUFBWCxHQUFrQixpQkFBT25ILGNBQVAsQ0FBc0IsS0FBS3RCLEtBQTNCLEVBQWtDLEtBQUszSCxNQUF2QyxFQUErQyxLQUFLb0MsS0FBcEQsRUFBMkQsS0FBSzlLLElBQWhFLENBQWxCO0FBQ0Q7QUFDRjs7Ozs7O0FBckhrQi9XLEMsQ0FDWndHLE8sR0FBVSx1QztBQURFeEcsQyxDQUVab1UsaUIsR0FBb0IsSTtrQkFGUnBVLEMiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1YmY1MWExNmU1NjE0MWMzNzc1NSIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBUaGUgZnJhbWV3b3JrIG9iamVjdFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2dldHRpbmctc3RhcnRlZH1cbiAqL1xuY29uc3QgQWtpbGkgPSB7fTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWUsXG4gICAgZ2xvYmFsczoge31cbiAgfTtcbiAgXG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX2NsZWFyZWQgPSBmYWxzZTtcbiAgdGhpcy5fX2NvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5fX2FsaWFzZXMgPSB7fTtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fd2luZG93ID0ge307XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHRoaXMuX19vbkVycm9yID0gKCkgPT4gdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIFxuICB0aGlzLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbiAgXTtcblxuICBBa2lsaS53cmFwKHV0aWxzLCB7IHVuZXZhbHVhdGU6IHRydWUgfSk7XG5cbiAgdGhpcy5jb21wb25lbnRzID0ge307XG4gIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgdGhpcy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gIHRoaXMuU2NvcGUgPSBTY29wZTtcbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuICB0aGlzLmNvbXBvbmVudHMuQSA9IEE7XG4gIHRoaXMuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG4gIHRoaXMuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG4gIHRoaXMuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuICB0aGlzLmNvbXBvbmVudHMuSWYgPSBJZjtcbiAgdGhpcy5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuICB0aGlzLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbiAgdGhpcy5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbiAgdGhpcy5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG4gIHRoaXMuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuICB0aGlzLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbiAgdGhpcy5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG4gIHRoaXMuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG4gIHRoaXMuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbiAgdGhpcy5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG4gIHRoaXMuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuICB0aGlzLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuICB0aGlzLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbiAgdGhpcy5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgdGhpcy5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuICB0aGlzLmRlZmluZSgpO1xuICB0aGlzLmVycm9ySGFuZGxpbmcoKTtcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpOyAgXG59XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24gKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG4vKipcbiAqIENsZWFyIHRoZSBnbG9iYWwgY29udGV4dFxuICovXG5Ba2lsaS5jbGVhckdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIEFraWxpLnVud3JhcCh1dGlscyk7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuX19pc29sYXRpb24uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cbiAgXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHByb3AgPSBwcm9wc1tpXTtcblxuICAgIGlmIChwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgXG4gICAgcHJvcC5jb21wb25lbnQuc2NvcGUuX19zZXQocHJvcC5rZXlzLCB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpKTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgaWYgKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKCk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmICghc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYgKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcblxuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7ICBcbiAgXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZihBa2lsaS5nZXRBa2lsaVBhcmVudHMoZWwpLmZpbmQocCA9PiBwLl9fYWtpbGkuX19wcmV2ZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uIChyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG4gIFxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1ZykgeyAgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IFByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4gPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuLCBbMCwgJ2xhc3QnXSk7XG4gIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50ID0geyBwcm90b3R5cGU6IHt9IH07XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIG9iamVjdHMvY2xhc3NlcyB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IFtvcHRpb25zXSBcbiAqL1xuQWtpbGkud3JhcCA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgaWYodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgYXJyLnB1c2gob2JqLnByb3RvdHlwZSk7XG4gICAgYXJyLnB1c2gob2JqKTtcbiAgfVxuICBlbHNlIGlmKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBhcnIucHVzaChvYmopO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IG9iaiA9IGFycltpXTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZih0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMud3JhcCh2YWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0eXBlb2YgdmFsICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucmV2ZXJzZSkge1xuICAgICAgICBvYmpba2V5XSA9IG9ialtrZXldLl9fYWtpbGk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBvYmpba2V5XSA9IHRoaXMud3JhcEZ1bmN0aW9uKG9ialtrZXldLCBvcHRpb25zKTsgIFxuICAgIH0gICAgXG4gIH1cbn07XG5cbi8qKlxuICogVW53cmFwIG9iamVjdHMvY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqL1xuQWtpbGkudW53cmFwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy53cmFwKG9iaiwgeyByZXZlcnNlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIElzb2xhdGUgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBvcHRpb25zID0geyBpc29sYXRlOiB0cnVlIH0pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihvcHRpb25zLnVuZXZhbHVhdGUgJiYgb3B0aW9ucy5pc29sYXRlKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiBBa2lsaS5pc29sYXRlKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpKTtcbiAgICB9XG4gICAgZWxzZSBpZihvcHRpb25zLnVuZXZhbHVhdGUpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBlbHNlIGlmKG9wdGlvbnMuaXNvbGF0aW9uKSB7XG4gICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWtpbGlXcmFwcGVkRnVuY3Rpb24sICdfX2FraWxpJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmblxuICB9KTtcblxuICByZXR1cm4gYWtpbGlXcmFwcGVkRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24ocm9vdCkge1xuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKCkgICAgICBcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fX3Jvb3QuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgfVxuXG4gIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBsZXQgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLl9fcm9vdCA9PT0gZG9jdW1lbnQuYm9keT8gJ2JvZHknOiAnYm9keSA+IConKTsgICAgXG4gIHRoaXMuX19yb290LmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcblxuICBmb3IgKGxldCBpID0gZWwuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICB0aGlzLl9fcm9vdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgfSAgXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX19yb290Lm91dGVySFRNTDtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEV4dGVuZGVkIHNwbGl0IG9mIHRoZSBzdHJpbmdcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCB0aGUgcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgb3B0aW9ucykge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGN1cnJlbnQsIHByZXZpb3VzQ29weSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuICAgICAgKCFmbiB8fCBmbih2YWx1ZSkpICYmIChkZWxldGUgb1trXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZnJvbSB3aGljaCBhbGwgY29tcG9uZW50cyBhcmUgaW5oZXJpdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eU91dCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFtnbG9iYWxzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGdsb2JhbHMgPSB7fSkge1xuICAgIGdsb2JhbHMgPSB7IHV0aWxzLCAuLi5Ba2lsaS5vcHRpb25zLmdsb2JhbHMsIC4uLmdsb2JhbHN9O1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24udHJpbSgpLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IobGV0IGtleSBpbiBnbG9iYWxzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaChnbG9iYWxzW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV0gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIGlmKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGFuIGh0bWwgZWxlbWVudCB0byB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IGZhbHNlO1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUoKSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycykpOyAgICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG4gICAgICAgICAgY2hpbGQubm9kZVZhbHVlID0gdGhpcy5fX2V2YWx1YXRlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmICh0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNvbHZlZCgpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9faXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7ICAgIFxuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpOyAgICAgXG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlJbiA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5SW47XG4gICAgdGhpcy5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5T3V0O1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgbm9kZSBoYXMgY2hhbmdlZCBvbiB0aGUgY2VydGFpbiBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIG5vZGUuX19leHByZXNzaW9uO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJlbnRCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICBsZXQgdGFnTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwudGFnTmFtZTtcbiAgICAgICAgbGV0IGF0dHJOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgZWxlbWVudE5hbWUgPSBub2RlLl9fZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/IG5vZGUubmFtZS50b0xvd2VyQ2FzZSgpOiAnJzsgICAgICAgIFxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgXTtcbiAgICAgICAgYXR0cmlidXRlTmFtZSAmJiBtZXNzYWdlcy5wdXNoKGBbYXR0cmlidXRlICR7YXR0cmlidXRlTmFtZX1dYCk7XG4gICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuY29uY2F0KFsgYFtlbGVtZW50ICR7ZWxlbWVudE5hbWV9XWAsIGBbY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX1dYCBdKTtcbiAgICAgICAgdGhyb3cgYEV4cHJlc3Npb24gZXJyb3I6IGAgKyBtZXNzYWdlcy5qb2luKCdcXG5cXHRhdCAnKTtcbiAgICAgIH1cblxuICAgICAgaWYoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGRhdGEua2V5cyk7XG4gICAgICAgIGxldCBwYXJlbnRzSGFzaCA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChkYXRhLnBhcmVudHMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPT0gNTApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICBgRm9yIGhpZ2hlciBwZXJmb3JtYW5jZSwgZG9uJ3QgbG9vcCBQcm94eSBhcnJheXMvb2JqZWN0cyBpbnNpZGUgZXhwcmVzc2lvbiBmdW5jdGlvbnMsIG9yIHVzZSBBa2lsaS51bmV2YWx1YXRlKCkgdG8gd3JhcCB5b3UgY29kZS5gLFxuICAgICAgICAgICAgICBgJHsgbm9kZS5fX2V4cHJlc3Npb24udHJpbSgpIH1gLFxuICAgICAgICAgICAgICBgc2NvcGUgcHJvcGVydHkgXCIkeyBkYXRhLnBhcmVudHMuam9pbignLicpfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAhcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdPyBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPSAxOiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0rKztcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgPT09IGRhdGEucmVhbENvbXBvbmVudFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAgIFxuXG4gICAgICAgIGxldCBiaW5kID0gZGF0YS5jb21wb25lbnQuX19nZXRCb3VuZE5vZGUoZGF0YS5rZXlzLCBub2RlKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5rZXlzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICBpZiAoIWJpbmQpIHtcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmQoZGF0YS5rZXlzLCB7IG5vZGU6IG5vZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIHZhbHVlLCBkYXRhLmV2YWx1YXRlZCk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG5cbiAgICAgIGlmIChjb3VudGVyKSB7XG4gICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcbiAgICAgIGxldCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcblxuICAgICAgaWYgKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgfSAgICAgICAgICBcblxuICAgICAgaWYgKG5vZGUuX19hdHRyaWJ1dGVPbikgeyAgICAgICAgXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICFjb21wb25lbnQuX19zYXZlQXR0cmlidXRlUHJveHlJbiAmJiAodmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKSk7XG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnQuYXR0cnNbY2FtZWxBdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNNb3VudGVkKSB7XG4gICAgICAgICAgY29tcG9uZW50Ll9fYXR0clRyaWdnZXJCeU5hbWUoY2FtZWxBdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcblxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdOyBcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGxldCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH0gIFxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyBldmVudDogZSB9KTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBpZiAoY2hlY2s/IHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSk6IHRydWUpIHsgICAgICBcbiAgICAgIGxldCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnO1xuICAgICAgbGV0IHJlcyA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgICAgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pO1xuICAgICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZSkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG5cbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4geyBcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcblxuICAgICAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkud3JhcEZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSwgeyBpc29sYXRlOiB0cnVlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHsgIFxuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBldmFsdWF0ZWQgPSAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTsgXG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgICAgbGV0IGV4Y0FyciA9IGtleXMuc2xpY2UoKTtcblxuICAgICAgICAgIGlmKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykgeyBcbiAgICAgICAgICAgICAgY29uc3QgZm9yRGF0YSA9IGZvclBhcmVudHNbaV0uZGF0YTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGV4Y0FyciwgY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvcihsZXQgayBpbiB0YXJnZXRQYXJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHsgXG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHlba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVQcm94eVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0Rpc2FibGVtZW50KGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rpc2FibGVQcm94eS5fX2FsbD8gdHJ1ZTogdGhpcy5fX2Rpc2FibGVQcm94eVt0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIFxuICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5TmFtZShsaW5rLm5hbWUsIHZhbHVlKTtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkgeyAgXG4gICAgc3RvcmUuX190YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcblxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICBpZihjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCBjb21wb25lbnQuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgICAgXG4gICAgfSAgICAgXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmKCF0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGluZm8gPSB7IGNvbXBvbmVudDogdGhpcywgbmFtZSwga2V5cywga2V5U3RyaW5nIH07XG4gICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXS5wdXNoKGluZm8pO1xuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKGluZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAgIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX3N0b3JlQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7IFxuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyBzdG9yZS5fX3RhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDtcblxuICAgIGlmKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaCh7IGNvbXBvbmVudDogdGhpcywgbmFtZSwgZm4gfSk7XG5cbiAgICBpZihjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCAhPT0gdGhpcyB8fCByZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZihsaW5rLmNvbXBvbmVudCA9PT0gdGhpcyAmJiBsaW5rLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgICBsaW5rcy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBpZih0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuXG4gICAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG5cbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gICAgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IHRydWU7XG5cbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIH0gXG5cbiAgICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTsgXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7ICAgIFxuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7ICBcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7ICBcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZCBcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX2F0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgICAgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4gfSk7XG4gICAgXG4gICAgaWYoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrIGluIHRhcmdldCkgeyAgICAgICAgXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTsgIFxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5czoga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LCAgICAgIFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgICAgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1toYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICAgIHRoaXMuX19jbGVhckVtcHR5QmluZGluZ3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgZW1wdHkgYmluZGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvYmpdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJFbXB0eUJpbmRpbmdzKG9iaikge1xuICAgIGNvbnN0IGNsZWFyID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnICYmICghdmFsIHx8ICF2YWwubGVuZ3RoKSkge1xuICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9ialtrXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAmJiBwYXJlbnQpIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjbGVhcihvYmogfHwgdGhpcy5fX2JpbmRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgbGlua3NcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJTdG9yZUxpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsaW5rID0gYXJyW2ldO1xuICBcbiAgICAgICAgaWYobGluay5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBjb25zdCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLl9fY2xlYXJTdG9yZUxpbmtzKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgdGhpcy5yZW1vdmVkKCk7ICAgIFxuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX19ldmFsdWF0ZVBhcmVudCAmJiAhdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMoW10uc2xpY2UuY2FsbCh0aGlzLmVsLmF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX3BhcmVudCkge1xuICAgICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggY2hpbGRyZW5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXN0cm95KCkge1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIHRoaXMuX19yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eSgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBmaW5kKHRoaXMuZWwuY2hpbGROb2Rlcyk7XG4gICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB0byB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwiYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5zdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5hdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBtYWtlIHJlcXVlc3RzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIF9fY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGVmYXVsdHNdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JzUGF0dGVybjogL14oW14yM10pfDQwNC8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcbiAgICAgICh3aW5kb3cuQUtJTElfU0VSVkVSICYmICFBa2lsaS5fX2luaXQpICYmIChjYWNoZSA9IHRydWUpO1xuXG4gICAgICBpZihvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnICYmICghb3B0aW9ucy5ib2R5IHx8IHR5cGVvZiBvcHRpb25zLmJvZHkgPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGhhc2ggPSB0aGlzLmNyZWF0ZUNhY2hlSGFzaCh7IFxuICAgICAgICAgIHVybDogb3B0aW9ucy51cmwsIFxuICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgdXNlcjogb3B0aW9ucy51c2VyLCBcbiAgICAgICAgICBwYXNzd29yZDogb3B0aW9ucy5wYXNzd29yZCwgXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5IFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjYWNoZSAmJiBoYXNoKSB7ICAgICAgICBcbiAgICAgICAgbGV0IF9jYWNoZSA9IHRoaXMuZ2V0Q2FjaGUoaGFzaCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihfY2FjaGUgJiYgKGNhY2hlID09PSB0cnVlIHx8IG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy50cmFuc2Zvcm1BZnRlcihfY2FjaGUucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVhZGVyS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGsgPSBoZWFkZXJLZXlzW2ldO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogeGhyLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHhoci5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUeXBlID09ICd0ZXh0Jz8geGhyLnJlc3BvbnNlVGV4dDogJycsXG4gICAgICAgICAgcmVzcG9uc2VYTUw6IHhoci5yZXNwb25zZVR5cGUgPT0gJ2RvY3VtZW50Jz8geGhyLnJlc3BvbnNlWE1MOiAnJyxcbiAgICAgICAgICByZXNwb25zZVVSTDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIHRpbWVvdXQ6IHhoci50aW1lb3V0LFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycyh4aHIpLCAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcihyZXN1bHQpO1xuXG4gICAgICAgIGlmICgoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCk7ICAgICAgICBcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzIG9mIGEgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIHRvIHNhdmUgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0ICBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgXG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2ggKyAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV0gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICB9LCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdmb2N1cycsIHRoaXMuc2V0Rm9jdXMpO1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTtcbiAgICB0aGlzLmF0dHIoJ2RlYm91bmNlJywgdGhpcy5zZXREZWJvdW5jZSk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gIH1cblxuICBzZXREZWJvdW5jZShpbnRlcnZhbCkge1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9ICtpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBmb3JcbiAqIEBzZWxlY3RvciBmb3JbaW5dLG9sW2luXSx1bFtpbl0sdGhlYWRbaW5dLHRib2R5W2luXSx0Zm9vdFtpbl1cbiAqIEBhdHRyIHtvYmplY3R8YXJyYXl9IGluIC0gZGF0YSB0byBjcmVhdGUgdGhlIGxvb3BcbiAqIEBhdHRyIHtudW1iZXJ8ZmFsc2V9IGNodW5rPTUwMCAtIGNodW5rIHNpemVcbiAqIEBhdHRyIHtzdHJpbmd9IHJlbmRlcj1hc2MgLSByZW5kZXIgdHlwZVxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gb3V0IC0gc2VudCBvbiB0aGUgZGF0YSByZW5kZXJcbiAqIEBtZXNzYWdlIHtvYmplY3R8YXJyYXl9IGNodW5rIC0gc2VudCBvbiB0aGUgZGF0YSBjaHVuayByZW5kZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ291dCcsICdjaHVuayddO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0cnVlOyAgXG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gMDtcbiAgICB0aGlzLl9fY291bnQgPSAwO1xuICAgIHRoaXMuX19rZXkgPSAnJztcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsOyAgICBcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgICB0aGlzLnJlbmRlclR5cGVzID0gWydhc2MnLCAnZGVzYycsICdtaWQnXTtcbiAgICB0aGlzLnJlbmRlclR5cGUgPSB0aGlzLnJlbmRlclR5cGVzWzBdO1xuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gICAgdGhpcy5jaHVua1NpemUgPSA1MDA7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2h1bmsnLCB0aGlzLnNldENodW5rU2l6ZSk7XG4gICAgdGhpcy5hdHRyKCdyZW5kZXInLCB0aGlzLnNldFJlbmRlclR5cGUpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3KTtcbiAgfVxuXG4gIHNldFJlbmRlclR5cGUodHlwZSkge1xuICAgIGlmKHRoaXMucmVuZGVyVHlwZXMuaW5kZXhPZih0eXBlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yICgnV3JvbmcgcmVuZGVyIHR5cGUuIEl0IG11c3QgYmUgXCJhc2NcIiwgXCJkZXNjXCIgb3IgXCJtaWRcIicpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyVHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRDaHVua1NpemUoc2l6ZSkge1xuICAgIHRoaXMuY2h1bmtTaXplID0gc2l6ZTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7ICAgICBcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmIChjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gZWwubmV4dFNpYmxpbmc7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19jb3VudCsrO1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7ICAgIFxuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICBcbiAgICBpZih0aGlzLml0ZXJhdG9ycy5sZW5ndGggPiB0aGlzLl9fY291bnQgLSAxKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1t0aGlzLl9fY291bnQgLSAxXTtcbiAgICAgIGxldCBjQ29weSA9IGl0ZXJhdG9yLmNvbXBhcmlzb24uY29weTtcbiAgICAgICAgXG4gICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlKGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlLCB7IGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSB9KSkge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbmRlclR5cGUgIT09ICdhc2MnICYmIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGl0ZXJhdG9yLmVsLCB0aGlzLmdldENsb3Nlc3RFbGVtZW50KGluZGV4KSk7ICAgICAgXG4gICAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KSk7IFxuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cbiAgICBcbiAgICBsZXQgZWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgXG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMucmVuZGVyVHlwZSAhPT0gJ2FzYyc/IHRoaXMuZ2V0Q2xvc2VzdEVsZW1lbnQoaW5kZXgpOiB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGdldENsb3Nlc3RFbGVtZW50KGluZGV4KSB7XG4gICAgbGV0IGNsb3Nlc3QgPSB0aGlzLml0ZXJhdG9yUmVmO1xuXG4gICAgdGhpcy5pdGVyYXRvcnMucmVkdWNlKChtaW4sIGl0ZXJhdG9yKSA9PiB7XG4gICAgICBsZXQgZGlmZiA9IGl0ZXJhdG9yLmluZGV4IC0gaW5kZXg7XG5cbiAgICAgIGlmKCghbWluIHx8IGRpZmYgPCBtaW4pICYmIGRpZmYgPiAwKSB7XG4gICAgICAgIGNsb3Nlc3QgPSBpdGVyYXRvci5lbDtcbiAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtaW47XG4gICAgfSwgMCk7XG5cbiAgICByZXR1cm4gY2xvc2VzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBkYXRhXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gZGF0YSBcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmNodW5rICYmIHRoaXMuY2h1bmsuc3RvcCgpOyAgICAgXG4gICAgdGhpcy5jaHVuayA9IG5ldyBDaHVuayh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuZGF0YUNvcHkgPSB1dGlscy5jb3B5KGRhdGEpO1xuICAgIFxuICAgIHJldHVybiB0aGlzLmNodW5rLnN0YXJ0KCkudGhlbigoZG9uZSkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX19jb3VudCwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpXTtcbiAgICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgbC0tO1xuICAgICAgICBpLS07XG4gICAgICB9XG5cbiAgICAgIGlmKCFkb25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuX19wcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXQoKTsgICAgICAgIFxuICAgICAgICB0aGlzLmF0dHJzLm9uT3V0LnRyaWdnZXIodGhpcy5kYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTsgICAgIFxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fX2luZGV4ID0gMDtcbiAgICB0aGlzLl9fY291bnQgPSAwO1xuICAgIHRoaXMuX19rZXkgPSAnJztcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsOyAgICBcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGxvb3BcbiAqIEBzZWxlY3RvciBsb29wLHRyXG4gKiBAYXR0ciBAc2VlIEZvclxuICogQHNjb3BlIHsqfSBsb29wVmFsdWUgLSBkYXRhIGl0ZW0ncyB2YWx1ZSBvZiB0aGUgY3VycmVudCBpdGVyYXRpb24gXG4gKiBAc2NvcGUge3N0cmluZ3xudW1iZXJ9IGxvb3BLZXkgLSBrZXkgb2YgdGhlIGl0ZXJhdGlvblxuICogQHNjb3BlIHtudW1iZXJ9IGxvb3BJbmRleCAtIGluZGV4IG9mIHRoZSBpdGVyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCh0cnVlKTtcbiAgICB0aGlzLnNldEtleSh0cnVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHRydWUpO1xuXG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuXG4gICAgdGhpcy5jb21wYXJpc29uID0ge1xuICAgICAgY29weTogdGhpcy5mb3IuX19jb21wYXJpc29uVmFsdWUsXG4gICAgICB2YWx1ZTogdGhpcy5mb3IuX192YWx1ZVxuICAgIH07XG4gIH1cblxuICBpdGVyYXRlKCkge31cbn1cblxuLyoqXG4gKiBDbGFzcyB0byBtYW5hZ2UgbG9vcCBjaHVua3NcbiAqL1xuZXhwb3J0IGNsYXNzIENodW5rIHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2UsIGRhdGEpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgdGhpcy5hcnIgPSB0aGlzLmNyZWF0ZShkYXRhKTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5uZXh0KCkpLnRoZW4oKCkgPT4gIXRoaXMuY2FuY2VsbGVkKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgaWYodGhpcy5jYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdGhpcy5hcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYodGhpcy5pbmRleCA+IHRoaXMuYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kcmF3KHRoaXMuYXJyW3RoaXMuaW5kZXhdKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuaW5kZXgrKzsgICBcbiAgICAgIHJldHVybiBBa2lsaS5uZXh0VGljayh0aGlzLm5leHQuYmluZCh0aGlzKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNodW5rc1xuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IGRhdGEgXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgKGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4gK2tleSA9PSBrZXkpKTtcbiAgICByZXR1cm4gdGhpc1tgY3JlYXRlJHt1dGlscy5jYXBpdGFsaXplKHRoaXMuaW5zdGFuY2UucmVuZGVyVHlwZSl9YF0oZGF0YSwga2V5cyk7XG4gIH1cblxuICBjcmVhdGVBc2MoZGF0YSwga2V5cykge1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICAgICAgXG4gICAgICBpZihpICUgdGhpcy5pbnN0YW5jZS5jaHVua1NpemUgPT0gMCkge1xuICAgICAgICBhcnIucHVzaChbXSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXS5wdXNoKHsgdmFsdWU6IGRhdGFba2V5XSwga2V5OiBrZXksIGluZGV4OiBpIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBjcmVhdGVEZXNjKGRhdGEsIGtleXMpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgZm9yKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsgICAgICAgIFxuICAgICAgaWYoKGkgKyAxKSAlIHRoaXMuaW5zdGFuY2UuY2h1bmtTaXplID09IDAgfHwgaSA9PSBsZW5ndGggLSAxKSB7XG4gICAgICAgIGFyci5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdLnB1c2goeyB2YWx1ZTogZGF0YVtrZXldLCBrZXk6IGtleSwgaW5kZXg6IGkgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNyZWF0ZU1pZChkYXRhLCBrZXlzKSB7XG4gICAgbGV0IGFyciA9IFtbXV07XG4gICAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGxldCBjID0gMDtcblxuICAgIGZvcihsZXQgaSA9IG1pZCwgazsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmKCFtaWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGsgPSBtaWQgKyAobWlkIC0gaSArIDEpO1xuICAgICAgYyArPSAyO1xuXG4gICAgICBpZihjICUgdGhpcy5pbnN0YW5jZS5jaHVua1NpemUgPT0gMCkge1xuICAgICAgICBhcnIucHVzaChbXSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBrZXlQcmV2ID0ga2V5c1tpXTtcbiAgICAgIGxldCBrZXlOZXh0ID0ga2V5c1trXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0ucHVzaCh7IHZhbHVlOiBkYXRhW2tleVByZXZdLCBrZXk6IGtleVByZXYsIGluZGV4OiBpIH0pO1xuICAgICAgayA8IGxlbmd0aCAmJiBhcnJbYXJyLmxlbmd0aCAtIDFdLnB1c2goeyB2YWx1ZTogZGF0YVtrZXlOZXh0XSwga2V5OiBrZXlOZXh0LCBpbmRleDogayB9KTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSBjLCBsID0gbGVuZ3RoOyBpIDwgbDsgaSsrKSB7ICAgICAgICBcbiAgICAgIGlmKGkgJSB0aGlzLmluc3RhbmNlLmNodW5rU2l6ZSA9PSAwKSB7XG4gICAgICAgIGFyci5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdLnB1c2goeyB2YWx1ZTogZGF0YVtrZXldLCBrZXk6IGtleSwgaW5kZXg6IGkgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBjaHVua1xuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IGRhdGEgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZHJhdyhkYXRhKSB7ICBcbiAgICBjb25zdCBsb29wID0gKGtleSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLmluc3RhbmNlLmxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpbmRleCk7XG4gICAgfTtcbiAgICBcbiAgICBsZXQgcCA9IFtdO1xuICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb2JqID0gZGF0YVtpXTtcbiAgICAgIGxvb3Aob2JqLmtleSwgb2JqLnZhbHVlLCBvYmouaW5kZXgpO1xuICAgICAgcC5wdXNoKHRoaXMuaW5zdGFuY2UuX19wcm9taXNlc1t0aGlzLmluc3RhbmNlLl9fcHJvbWlzZXMubGVuZ3RoIC0gMV0pO1xuXG4gICAgICBpZih0aGlzLmNhbmNlbGxlZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IFxuICAgIFxuICAgIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICAgICF0aGlzLmNhbmNlbGxlZCAmJiB0aGlzLmluc3RhbmNlLmF0dHJzLm9uQ2h1bmsudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluc3RhbmNlLnJlc2V0KCk7XG4gIH1cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZX1cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIGFyZSBub3QgbW9uaXRvcmVkLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0YXJnZXQ/IHRoaXMuX190YXJnZXQ6IHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGV2ZW50cy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byB0cmlnZ2VyIGN1c3RvbSBqYXZhc2NyaXB0IGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmVsQ29tcG9uZW50ID0gdGhpcy5lbC5fX2FraWxpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMoeyBkZXRhaWw6IGRhdGEsICAuLi5vcHRpb25zIH0pKSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgYW4gZXZlbnQgb3B0aW9uc1xuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICovXG4gIHByZXBhcmVPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIC4uLm9wdGlvbnMgfTsgIFxuICAgIHRoaXMuZWxDb21wb25lbnQgJiYgIXRoaXMuZWxDb21wb25lbnQuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgJiYgKG9wdGlvbnMuZGV0YWlsID0gdXRpbHMuY29weShvcHRpb25zLmRldGFpbCkpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogU3RvcmUgYWxsb3dzIHlvdSB0byBzYXZlIGFuZCBkaXN0cmlidXRlIGRhdGEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc3RvcmV9XG4gKi9cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHt9LCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRhcmdldFtrZXldLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdmFsdWUpOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcm91dGVyIHRlbXBsYXRlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIHJvdXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gdHJhbnNpdGlvbi5wYXRoLnBhcmFtcztcbiAgICBsZXQgdXJsID0gdHJhbnNpdGlvbi51cmw7XG4gICAgbGV0IHF1ZXJ5ID0gdHJhbnNpdGlvbi5xdWVyeTtcblxuICAgIGNvbnN0IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiA9IChwYXRoKSA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gKGh0bWwpID0+IHsgXG4gICAgICB0aGlzLmVtcHR5KCk7ICBcbiAgICAgIGxldCBuYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgIGlmKHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZvcihsZXQga2V5IGluIEFraWxpLl9fY29tcG9uZW50cykge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEFraWxpLl9fY29tcG9uZW50c1trZXldO1xuICAgIFxuICAgICAgICAgIGlmKGNvbXBvbmVudCA9PT0gc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBuYW1lID0ga2V5OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke3N0YXRlLm5hbWV9XCIgaGFzIG5vIGRlZmluZWQgY29tcG9uZW50YClcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPCR7IG5hbWUgfT4keyBodG1sIH08LyR7IG5hbWUgfT5gO1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKVxuICAgICAgfSxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXJhbXMsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICBpZiAoIXRyYW5zaXRpb24ucGF0aC5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudGVtcGxhdGU7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oaHRtbCA9PiBjb21waWxlKGh0bWwpKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG4vKipcbiAqIFRyYW5zaXRpb24gY2xhc3MuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGNvbnNpc3RzIHRoZSBsYXN0IGFjdHVhbCByb3V0ZXIgdHJhbnNpdGlvbiBpbmZvcm1hdGlvbi5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdHJhbnNpdGlvbn1cbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHF1ZXJ5LCBoYXNoID0gJycsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTsgICAgXG4gICAgcm91dGVyLnN0YXRlLmFwcGx5KHJvdXRlciwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcGF0aFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhdGggXG4gICAqL1xuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5yb3V0ZXMucHVzaChwYXRoKTtcbiAgICB0aGlzLnN0YXRlc1twYXRoLnN0YXRlLm5hbWVdID0gcGF0aDtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByb3V0ZSBieSB0aGUgc3RhdGVcbiAgICogIFxuICAgKiBAcGFyYW0geyp9IHN0YXRlIFxuICAgKi9cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyB0aGUgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAgICovXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHRoZSBjdXJyZW50IHRyYW5zaXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEFraWxpIHJvdXRlclxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKi9cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG4vKipcbiAqIFNldCByb3V0ZXIncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5yb3V0ZXIuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmFzZVVybCA9IFwiL1wiO1xuICB0aGlzLnN0YXRlcyA9IFtdO1xuICB0aGlzLmhhc2hNb2RlID0gdHJ1ZTtcbiAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG4gIHRoaXMuX19pbml0ID0gZmFsc2U7XG4gIHRoaXMuX19vcHRpb25zID0ge307XG4gIHRoaXMuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xuICB0aGlzLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xufVxuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpO1xuXG4gIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgdXJsID09PSB0aGlzLmdldFVybCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuc2V0VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24odXJsLCBvcHRpb25zID0geyByZWxvYWQ6IGZhbHNlIH0pIHtcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuXG4gIGlmICh0aGlzLmhhc2hNb2RlKSB7XG4gICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY3VycmVudCA9PT0gdXJsICYmIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiBwYXJhbXNbdl0gfHwgJycpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXlxcXi8sICcnKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaGFzaCA9IChoYXNoIHx8ICcnKS5yZXBsYWNlKCcjJywgJycpO1xuXG4gIGlmICghdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2g7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1svXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIHVybCBjb250ZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG4gICAgcmV0dXJuICcoW15cXFxcL10qKSc7XG4gIH0pO1xuXG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybik7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgdikgPT4ge1xuICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpOyAgXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcblxuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXRlOiBzdGF0ZSwgLi4uY29udGVudH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb24gdG8gbm90IHRyaWdnZXIgcm91dGVyIGhhbmRsZXJzIGluc2lkZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xucm91dGVyLmlzb2xhdGUgPSBmdW5jdGlvbihmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9fZGlzYWJsZUNoYW5nZSkge1xuICAgIGRlbGV0ZSB0aGlzLl9fZGlzYWJsZUNoYW5nZTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuIFxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcblxuICBjb25zdCBuZXh0ID0gKHN0YXRlcywgb25FbmQpID0+IHsgICAgXG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IGNvbnRlbnQucGFyYW1zO1xuICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKHN0YXRlLmxldmVsKTtcblxuICAgIGlmICghcm91dGUgJiYgIXN0YXRlLmFic3RyYWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgIH0gICAgXG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcbiAgICAgXG4gICAgaWYgKGhhc1N0YXRlKSB7XG4gICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5nZXRSb3V0ZShzdGF0ZSk7ICAgICAgXG4gICAgICBsZXQgcHJldiA9IHsgcGFyYW1zOiByb3V0ZS5wYXJhbXMsIHF1ZXJ5OiByb3V0ZS5xdWVyeSwgaGFzaDogcm91dGUuaGFzaCB9O1xuICAgICAgbGV0IGN1cnJlbnQgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IGlzRGlmZmVyZW50ICYmIHRoaXMuX19vcHRpb25zLnJlbG9hZCAhPT0gZmFsc2U7XG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKHRyYW5zaXRpb24ucGF0aC5sb2FkZWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKChkYXRhKSA9PiB7ICBcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgaWYgKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9XG4gXG4gICAgICByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBvbkVuZCAmJiBvbkVuZChlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCA9PSB0aGlzLmdldFVybCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2Rpc2FibGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLl9fb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgIXRyYW5zaXRpb24uaGFzaCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19vcHRpb25zID0ge307XG4gICAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcblxuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07ICAgICAgICAgIFxuICAgICAgICAgIHJvdXRlLmNvbXBvbmVudCAmJiByb3V0ZS5jb21wb25lbnQuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZWQnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG4gICAgICByZXNvbHZlKHRyYW5zaXRpb24pOyAgXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHJvdXRlci5zZXREZWZhdWx0cygpO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xucm91dGVyLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGlmXG4gKiBAc2VsZWN0b3IgaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgLSBzaG93IHRoZSBlbGVtZW50IGNvbnRlbnQgb3Igbm90XG4gKiBAYXR0ciB7Ym9vbGVhbn0gcmVjcmVhdGUgLSBkZWxldGUgdGhlIGNvbnRlbnQgYW5kIHJlY3JlYXRlIG9yIGp1c3Qgc2hvdy9oaWRlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgdGhpcy5FbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIHRoaXMuRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHZhbCA9PiAodGhpcy5zdGF0ZSA9ICEhdmFsLCB0aGlzLnNldFN0YXRlKCkpKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+ICByZXN1bHQpO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICh0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7ICAgIFxuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2UtaWZcbiAqIEBzZWxlY3RvciBlbHNlLWlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIEBzZWUgSWZcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHNlbGVjdC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3Nfc2VsZWN0fVxuICogXG4gKiBAdGFnIHNlbGVjdCAgXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ10uY29uY2F0KEZvci5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlc29sdmVkKCkgeyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIHJldHVybiBzdXBlci5kcmF3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbigoKSA9PiB0aGlzLmRyYXdTZWxlY3QoKSk7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBpbnB1dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jaGVja2JveF9hbmRfcmFkaW99XG4gKiBcbiAqIEB0YWcgaW5wdXRcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddLmNvbmNhdChUZXh0LmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KFRleHQuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nOyAgICBcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pc1JhZGlvIHx8IHRoaXMuaXNDaGVja2JveCkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuZWwuY2hlY2tlZCwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ICBcblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmICh0aGlzLnByZXZDaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHRoaXMucHJldkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0cmlnZ2VyICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW9cbiAqIEBzZWxlY3RvciByYWRpb1tuYW1lXVxuICogQGF0dHIge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGdyb3VwXG4gKiBAYXR0ciB7c3RyaW5nfG51bGx9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqIEBtZXNzYWdlIHtzdHJpbmd9IHJhZGlvIC0gc2VudCBvbiB2YWx1ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICByZXR1cm4gc3VwZXIuZHJhdy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnRoZW4oKCkgPT4gdGhpcy5fX2lzUmVzb2x2ZWQgJiYgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpKTtcbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdpdGggY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAdGFnIGNvbnRlbnRcbiAqIEBzZWxlY3RvciBjb250ZW50LFtjb250ZW50ZWRpdGFibGVdXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBhdHRyIHtib29sZWFufSBbZWRpdGFibGVdIC0gZWRpdGFibGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCB0aGlzKTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2FjaGUnLCB0aGlzLnNldENhY2hlKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldENhY2hlKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGlmcmFtZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpZnJhbWVcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWZyYW1lLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaW1hZ2VzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaW1nXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbWJlZCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGVtYmVkXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGF1ZGlvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgYXVkaW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYXVkaW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdmlkZW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB2aWRlb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0cmFjayBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHRyYWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHNvdXJjZSBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHNvdXJjZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc291cmNlJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBvYmplY3QgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBvYmplY3RcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdHMgZXh0ZW5kcyBVcmwgeyAgXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ2RhdGEnO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29iamVjdCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxpbmtzLlxuICogSXQgd29ya3Mgd2l0aCByb3V0ZXIgdG9vLiBcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbGlua3N9XG4gKiBcbiAqIEB0YWcgYVxuICogQHNlbGVjdG9yIGFbc3RhdGVdOm5vdChbdXJsXSksYVt1cmxdOm5vdChbc3RhdGVdKVxuICogQGF0dHIge3N0cmluZ30gW3VybF0gLSB1cmwgdG8gZ28gb24gY2xpY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFtzdGF0ZV0gLSBzdGF0ZSBvZiByb3V0ZXIgdG8gZ28gb24gY2xpY2sge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICogQGF0dHIge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9wYXJhbXN9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9xdWVyeX1cbiAqIEBhdHRyIHtzdHJpbmd9IFtoYXNoXSAtIGhhc2ggZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9oYXNofVxuICogQGF0dHIge29iamVjdH0gW29wdGlvbnNdIC0gb3B0aW9ucyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3JvdXRlci5sb2NhdGlvbn1cbiAqIEBzY29wZSB7Ym9vbGVhbn0gaXNBY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBhY3RpdmUgb3Igbm90IFxuICogQHNjb3BlIHtib29sZWFufSBpbkFjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIHBhcnQgb2YgdGhlIGFjdGl2ZSBzdGF0ZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZigpIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHRoaXMudXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==