/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.6.6
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
    globals: { utils: _utils2.default }
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
  var res = obj;

  if (typeof obj == 'function') {
    arr.push(obj.prototype);
    arr.push(obj);
    res = options.reverse ? obj.__akili || obj : this.wrapFunction(obj, options);
  } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && !Array.isArray(obj)) {
    arr.push(obj);
  } else {
    return obj;
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
        _obj[key] = _obj[key].__akili || _obj[key];
        continue;
      }

      _obj[key] = this.wrapFunction(_obj[key]);
    }
  }

  return res;
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

  for (var key in this.options.globals) {
    this.options.globals[key] = this.wrap(this.options.globals[key]);
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

      globals = _extends({}, _akili2.default.options.globals, globals);
      var keys = [];
      var vars = [];
      var exps = _utils2.default.split(expression, ';', ['"', "'", '`']);
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
    this.__recompiling = false;
    this.__compiling = null;
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

          if (child.nodeType == 3 && _this2.__initializeNode(child, parent, true)) {
            _this2.__evaluateNode(child, _this2.__compiling.checkChanges);
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

      this.__recompiling = false;
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
    key: '__checkNodePropertyChange',
    value: function __checkNodePropertyChange(node, keys, value) {
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
          var messages = [err.message, node.__expression];
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
          var hash = data.component.__createKeysHash(data.keys);
          var parentsHash = data.component.__createKeysHash(data.parents);

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
              console.warn(['For higher performance, don\'t loop Proxy arrays/objects inside expression functions, or use Akili.unevaluate() to wrap you code.', '' + node.__expression, 'scope property "' + data.parents.join('.') + '"'].join('\n\tat '));
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

            if (component.__checkNodePropertyChange(bind.node, prop.keys, prop.value)) {
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

      var key = node instanceof window.Attr ? 'value' : 'nodeValue';

      if (check ? this.__checkEvaluation(node) : true) {
        var res = this.__evaluate(node);
        node[key] != res && (node[key] = res);
      }

      return node[key];
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

      var check = this.__compiling ? this.__compiling.checkChanges : false;
      el.setAttribute(node.nodeName, component.__evaluateNode(node, check));
    }

    /**
     * Initialize the node
     *
     * @param {Node} node
     * @param {Element} el
     * @param {boolean} [checkBinding]
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__initializeNode',
    value: function __initializeNode(node, el) {
      var checkBinding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (node.__initialized) {
        return true;
      }

      var val = node[node instanceof window.Attr ? 'value' : 'nodeValue'].trim();
      var hasBinding = checkBinding ? evaluationRegex.test(val) : false;

      if (checkBinding && !hasBinding) {
        return false;
      }

      node.__expression = val;
      node.__properties = {};
      node.__attributeOf = null;
      node.__attributeOn = null;
      node.__event = null;
      node.__hasBindings = hasBinding;
      node.__initialized = true;
      node.__component = this;
      node.__element = el;
      return true;
    }

    /**
     * Deinitialize the node
     *
     * @param {Node} node
     * @protected
     */

  }, {
    key: '__deinitializeNode',
    value: function __deinitializeNode(node) {
      if (node.__event) {
        node.__event.unbind();
        node.__event = null;
      }

      if (node.__hasBindings) {
        this.__parent && this.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
      }

      delete node.__expression;
      delete node.__properties;
      delete node.__attributeOf;
      delete node.__attributeOn;
      delete node.__event;
      delete node.__hasBindings;
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
      var _this7 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this7.__disableAttributeSetter) {
          return;
        }

        var node = _this7.el.getAttributeNode(key);

        if (isDeleted) {
          node && _this7.__deinitializeNode(node);
          _this7.el.removeAttribute(key);
          return;
        } else if (!node) {
          _this7.el.setAttribute(key, value);
          node = _this7.el.getAttributeNode(key);
        } else {
          node.value = value;
          _this7.__deinitializeNode(node);
        }

        _this7.__initializeAttribute(node, _this7.el, _this7.__attributeOf);
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
            value ? _this7.el.setAttribute(key, value) : _this7.el.removeAttribute(key);
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

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;
            var evaluated = !_utils2.default.hasPropertyByKeys(keys, _this8.__scope);
            var component = _this8;
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

          if (typeof target[key] === 'function') {
            value = _akili2.default.wrapFunction(value);
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

        if (_this2.renderType !== 'asc') {
          _this2.__children.sort(function (a, b) {
            return a.__akili.index - b.__akili.index;
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWZjZjA1NjVmZmMwZjkxNWFhZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwic2V0RGVmYXVsdHMiLCJvcHRpb25zIiwiZGVidWciLCJnbG9iYWxzIiwidXRpbHMiLCJfX2luaXQiLCJfX2NsZWFyZWQiLCJfX2NvbXBvbmVudHMiLCJfX2FsaWFzZXMiLCJfX3Njb3BlcyIsIl9fc3RvcmVMaW5rcyIsIl9fd2luZG93IiwiX19pc29sYXRpb24iLCJfX2V2YWx1YXRpb24iLCJfX3dyYXBwaW5nIiwiX19vbkVycm9yIiwidHJpZ2dlckluaXQiLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJjb21wb25lbnRzIiwic2VydmljZXMiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsIkEiLCJBdWRpbyIsIkNvbnRlbnQiLCJGb3IiLCJFbWJlZCIsIklmIiwiSW5jbHVkZSIsIklucHV0IiwiSWZyYW1lIiwiSW1hZ2UiLCJPYmplY3QiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiU291cmNlIiwiVGV4dCIsIlRleHRhcmVhIiwiVHJhY2siLCJVcmwiLCJWaWRlbyIsInJlcXVlc3QiLCJyb3V0ZXIiLCJzdG9yZSIsImRlZmluZSIsImVycm9ySGFuZGxpbmciLCJpc29sYXRlRXZlbnRzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyIsImNsZWFyR2xvYmFscyIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsIiwibGVuZ3RoIiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJfX3NldCIsImdldFByb3BlcnR5QnlLZXlzIiwiX19zY29wZSIsInVuZXZhbHVhdGUiLCJldmFsdWF0aW9uIiwid3JhcHBpbmciLCJ1bmlzb2xhdGUiLCJpc29sYXRpb24iLCJuZXh0VGljayIsInJlc29sdmUiLCJ0aGVuIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiX19jYW5jZWxsZWQiLCJmaW5kIiwicCIsIl9fcHJldmVudCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsIndyYXAiLCJvYmoiLCJyZXZlcnNlIiwid3JhcEZ1bmN0aW9uIiwiYyIsInZhbCIsImFraWxpV3JhcHBlZEZ1bmN0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJzdGF0dXMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiQUtJTElfU0VSVkVSIiwiaW5pdFNlcnZlclNpZGVIdG1sIiwiaHRtbCIsImluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwicmVxdWVzdENhY2hlIiwiQUtJTElfQ0xJRU5UIiwicHJlcGFyZVNlcnZlclNpZGVIdG1sIiwiY2hhbmdlU3RhdGUiLCJwcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsImVyciIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwib3V0ZXJIVE1MIiwiY2FjaGUiLCJfX21haW4iLCJkZWluaXQiLCJzdG9yZUtleXMiLCJfX3RhcmdldCIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJpbmRleE9mIiwib3BlbiIsImZpbHRlciIsImhhbmRsZXIiLCJtYXRjaCIsIml0ZW0iLCJmaWx0ZXJlZCIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImluY2x1ZGVLZXlzIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwiaXNTY29wZVByb3h5IiwiaXNQbGFpbk9iamVjdCIsImNvcHkiLCJuZXN0ZWQiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsImNvbXBhcmUiLCJjbGVhclVuZGVmaW5lZCIsImlnbm9yZVVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJzIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9faXNSZXNvbHZlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlQXR0clRyaWdnZXJpbmciLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiY2hlY2tDaGFuZ2VzIiwic2V0RXZlbnRzIiwic2V0UGFyZW50cyIsInNldEJvb2xlYW5BdHRyaWJ1dGVzIiwiZGVmaW5lQXR0cmlidXRlcyIsIl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zIiwiX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwiX19ldmFsdWF0ZU5vZGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsInRlbXBsYXRlQ2FjaGUiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX3NhdmVBdHRyaWJ1dGVQcm94eUluIiwic2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJfX3NhdmVBdHRyaWJ1dGVQcm94eU91dCIsInNhdmVBdHRyaWJ1dGVQcm94eU91dCIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19jb21wb25lbnQiLCJjb20iLCJfX2V4cHJlc3Npb24iLCJBdHRyIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiaGFzaCIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImVsZW1lbnQiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZSIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidW5iaW5kIiwiX19pc1N5c3RlbUJpbmRpbmdLZXkiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiX19ldmFsdWF0ZSIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2V2YWx1YXRlRXZlbnQiLCJjaGVja0JpbmRpbmciLCJfX2luaXRpYWxpemVkIiwidHJpbSIsImhhc0JpbmRpbmciLCJfX2hhc0JpbmRpbmdzIiwiX191bmJpbmRCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJrZXlTdHJpbmciLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwiaW5mbyIsImNhbGxPblN0YXJ0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uS2V5IiwidXBkYXRlZEF0IiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhclN0b3JlTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJyaWdodCIsImxldmVsRWxlbWVudHMiLCJfX3N0b3JlQnlGdW5jdGlvbiIsIl9fc3RvcmVCeUtleXMiLCJfX2F0dHJCeUZ1bmN0aW9uIiwiX19hdHRyQnlLZXlzIiwiX191bnN0b3JlQnlGdW5jdGlvbiIsIl9fdW5zdG9yZUJ5S2V5cyIsIl9fdW5hdHRyQnlGdW5jdGlvbiIsIl9fdW5hdHRyQnlLZXlzIiwiX19nZXRQYXJlbnQiLCJfX2dldENoaWxkcmVuIiwiX19nZXROZWFyIiwiYXBwZW5kQ2hpbGQiLCJfX2VtcHR5IiwiX19kZXN0cm95IiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsImdldEhlYWRlcnMiLCJ4aHIiLCJoZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwibGluZSIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJtZXRob2QiLCJYTUxIdHRwUmVxdWVzdCIsImJlZm9yZSIsInRyYW5zZm9ybUJlZm9yZSIsIm9uU3RhcnQiLCJqc29uIiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwicGFyYW1zIiwicGFyYW1zVG9RdWVyeSIsImNyZWF0ZUNhY2hlSGFzaCIsInVzZXIiLCJwYXNzd29yZCIsIl9jYWNoZSIsImdldENhY2hlIiwibm93IiwiY3JlYXRlZEF0IiwidHJhbnNmb3JtQWZ0ZXIiLCJyZXN1bHQiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVyS2V5cyIsInNldFJlcXVlc3RIZWFkZXIiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZVhNTCIsInJlc3BvbnNlVVJMIiwiY3JlYXRlQ2FjaGUiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwic2VuZCIsImNoYXIiLCJjaGFyQ29kZUF0Iiwic2VwIiwiZXEiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInYiLCJvcHQiLCJxdWVyeSIsImFtcHMiLCJlcXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9JU09TdHJpbmciLCJhZGRJbnN0YW5jZSIsInJlbW92ZUluc3RhbmNlIiwidmFsdWVLZXkiLCJkZWJvdW5jZUludGVydmFsIiwiZGVib3VuY2VUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25EZWJvdW5jZSIsInNldEZvY3VzIiwic2V0VmFsdWUiLCJzZXREZWJvdW5jZSIsImludGVydmFsIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJmb2N1cyIsImJsdXIiLCJMb29wIiwiX19pdGVyYXRvciIsIl9faW5kZXgiLCJfX2NvdW50IiwiX19rZXkiLCJfX3ZhbHVlIiwiX19jb21wYXJpc29uVmFsdWUiLCJfX3Byb21pc2VzIiwicmVuZGVyVHlwZXMiLCJyZW5kZXJUeXBlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImNodW5rU2l6ZSIsImNyZWF0ZUl0ZXJhdG9yIiwic2V0Q2h1bmtTaXplIiwic2V0UmVuZGVyVHlwZSIsImRyYXciLCJ0eXBlIiwic2l6ZSIsIm1hc2siLCJuZXh0U2libGluZyIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaXRlcmF0b3IiLCJjQ29weSIsImNvbXBhcmlzb24iLCJzZXRJbmRleCIsInNldEtleSIsImluc2VydEJlZm9yZSIsImdldENsb3Nlc3RFbGVtZW50IiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiY2xvc2VzdCIsIm1pbiIsImRpZmYiLCJjaHVuayIsInN0b3AiLCJDaHVuayIsImRhdGFDb3B5Iiwic3RhcnQiLCJkb25lIiwicmVzZXQiLCJvbk91dCIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiY3JlYXRlIiwiY2FuY2VsbGVkIiwibWlkIiwiZmxvb3IiLCJrZXlQcmV2Iiwia2V5TmV4dCIsImxvb3AiLCJpdGVyYXRlIiwib25DaHVuayIsIl9fZWwiLCJzdHJpY3QiLCJlbENvbXBvbmVudCIsImZvcmNlIiwiaW5FdmFsdWF0aW5nIiwicHJlcGFyZU9wdGlvbnMiLCJfRXZlbnQiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJleGlzdHMiLCJsb2FkZWQiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZXJyb3IiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJmIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2lzb2xhdGVkIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsInRpdGxlIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0UmVjcmVhdGlvbiIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2V0QWN0aXZpdHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiT2JqZWN0cyIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs4UUM3REE7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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V0FBS3RFLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7NkJBRVF3RSxJLEVBQU07QUFDYixVQUFJK2tCLFFBQVEsaUJBQU9xQixRQUFQLENBQWdCcG1CLElBQWhCLENBQVo7O0FBRUEsVUFBSSxDQUFDK2tCLEtBQUwsRUFBWTtBQUNWLGNBQU0sSUFBSWpsQixLQUFKLHdDQUErQ0UsSUFBL0MsT0FBTjtBQUNEOztBQUVELGFBQU8ra0IsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUt0WCxHQUFULEVBQWM7QUFDWixhQUFLQyxLQUFMLENBQVc4ZixJQUFYLEdBQWtCLEtBQUsvZixHQUF2QjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtDLEtBQUwsQ0FBVzhmLElBQVgsR0FBa0IsaUJBQU9uSCxjQUFQLENBQXNCLEtBQUt0QixLQUEzQixFQUFrQyxLQUFLM0gsTUFBdkMsRUFBK0MsS0FBS29DLEtBQXBELEVBQTJELEtBQUtuTCxJQUFoRSxDQUFsQjtBQUNEO0FBQ0Y7Ozs7OztBQXJIa0J2WCxDLENBQ1owRyxPLEdBQVUsdUM7QUFERTFHLEMsQ0FFWjRVLGlCLEdBQW9CLEk7a0JBRlI1VSxDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWZjZjA1NjVmZmMwZjkxNWFhZTEiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbi8qKlxuICogU2V0IHRoZSBmcmFtZXdvcmsncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5Ba2lsaS5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGRlYnVnOiB0cnVlLFxuICAgIGdsb2JhbHM6IHsgdXRpbHMgfVxuICB9O1xuICBcbiAgdGhpcy5fX2luaXQgPSBudWxsO1xuICB0aGlzLl9fY2xlYXJlZCA9IGZhbHNlO1xuICB0aGlzLl9fY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLl9fYWxpYXNlcyA9IHt9O1xuICB0aGlzLl9fc2NvcGVzID0ge307XG4gIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gIHRoaXMuX193aW5kb3cgPSB7fTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7XG4gIHRoaXMuX19vbkVycm9yID0gKCkgPT4gdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIFxuICB0aGlzLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbiAgXTtcblxuICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5zZXJ2aWNlcyA9IHt9O1xuXG4gIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICB0aGlzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgdGhpcy5TY29wZSA9IFNjb3BlO1xuICB0aGlzLnV0aWxzID0gdXRpbHM7XG4gIHRoaXMuY29tcG9uZW50cy5BID0gQTtcbiAgdGhpcy5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbiAgdGhpcy5jb21wb25lbnRzLkZvciA9IEZvcjtcbiAgdGhpcy5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZiA9IElmO1xuICB0aGlzLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG4gIHRoaXMuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuICB0aGlzLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuICB0aGlzLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbiAgdGhpcy5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG4gIHRoaXMuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbiAgdGhpcy5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbiAgdGhpcy5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbiAgdGhpcy5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbiAgdGhpcy5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG4gIHRoaXMuY29tcG9uZW50cy5VcmwgPSBVcmw7XG4gIHRoaXMuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuICB0aGlzLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB0aGlzLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5zZXJ2aWNlcy5zdG9yZSA9IHN0b3JlO1xuXG4gIHRoaXMuZGVmaW5lKCk7XG4gIHRoaXMuZXJyb3JIYW5kbGluZygpO1xuICB0aGlzLmlzb2xhdGVFdmVudHMoKTtcbiAgdGhpcy5pc29sYXRlQXJyYXlQcm90b3R5cGUoKTtcbiAgdGhpcy5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7ICBcbn1cblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdGhlIGdsb2JhbCBjb250ZXh0XG4gKi9cbkFraWxpLmNsZWFyR2xvYmFscyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5fX2NsZWFyZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLnVud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldKTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xuICB0aGlzLl9fY2xlYXJlZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24gKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICBpZiAodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjaW5nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24gKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYgKHByb3AuaXNEZWxldGVkKSB7XG4gICAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBwcm9wLmNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSkpO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIG9ubHkgcm9vdCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS53cmFwcGluZyA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmKHRoaXMuX193cmFwcGluZykge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIFxuICB0aGlzLl9fd3JhcHBpbmcgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTsgIFxuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUocmVjb21waWxlID09PSB0cnVlPyB7fTogcmVjb21waWxlKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXG4gICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTsgIFxuICBcbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKEFraWxpLmdldEFraWxpUGFyZW50cyhlbCkuZmluZChwID0+IHAuX19ha2lsaS5fX3ByZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24gKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJBbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHNvbWUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgd2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYgKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFyZ3NbMV0gPSBsaXN0ZW5lci5mbjtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgdG8gYW4gaXNvbGF0ZSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbiAoZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgb2JqZWN0cy9jbGFzc2VzIHRvIGlzb2xhdGUgYW5kIHVuZXZhbHVhdGUgZGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBhcnIgPSBbXTtcbiAgbGV0IHJlcyA9IG9iajtcblxuICBpZih0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicpIHtcbiAgICBhcnIucHVzaChvYmoucHJvdG90eXBlKTtcbiAgICBhcnIucHVzaChvYmopO1xuICAgIHJlcyA9IG9wdGlvbnMucmV2ZXJzZT8gKG9iai5fX2FraWxpIHx8IG9iaik6IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG4gIH1cbiAgZWxzZSBpZihvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgYXJyLnB1c2gob2JqKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgb2JqID0gYXJyW2ldO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmKHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy53cmFwKHZhbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHR5cGVvZiB2YWwgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICAgIG9ialtrZXldID0gb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG9ialtrZXldID0gdGhpcy53cmFwRnVuY3Rpb24ob2JqW2tleV0pOyAgXG4gICAgfSAgICBcbiAgfVxuICBcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogVW53cmFwIG9iamVjdHMvY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqL1xuQWtpbGkudW53cmFwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy53cmFwKG9iaiwgeyByZXZlcnNlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIElzb2xhdGUgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY29uc3QgYWtpbGlXcmFwcGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEFraWxpLndyYXBwaW5nKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShha2lsaVdyYXBwZWRGdW5jdGlvbiwgJ19fYWtpbGknLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZuXG4gIH0pO1xuXG4gIHJldHVybiBha2lsaVdyYXBwZWRGdW5jdGlvbjtcbn07XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbihyb290KSB7XG4gIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIGh0bWwgZWxlbWVudGApO1xuICB9XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdCA9IHJvb3Q7XG4gIFxuICBpZih3aW5kb3cuQUtJTElfU0VSVkVSKSB7ICAgIFxuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCh3aW5kb3cuQUtJTElfU0VSVkVSLmh0bWwpO1xuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKHdpbmRvdy5BS0lMSV9TRVJWRVIucmVxdWVzdENhY2hlKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UID0ge1xuICAgICAgaHRtbDogdGhpcy5wcmVwYXJlU2VydmVyU2lkZUh0bWwoKSAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldKTtcbiAgfVxuICBcbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4geyAgICBcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UICYmICh3aW5kb3cuQUtJTElfQ0xJRU5ULnJlcXVlc3RDYWNoZSA9IHRoaXMucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUoKSk7XG4gICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGluaXQgPSAoaW5zdGFuY2UsIG9iaikgPT4ge1xuICAgIGZvcihsZXQga2V5IGluIG9iaikge1xuICAgICAgaW5zdGFuY2UuX19jYWNoZVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG4gIFxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgbGV0IGluc3RhbmNlID0ga2V5ID09PSAnX19tYWluJz8gcmVxdWVzdDogcmVxdWVzdC5fX2luc3RhbmNlc1trZXldO1xuICAgIGluaXQoaW5zdGFuY2UsIG9ialtrZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlcXVlc3QgY2FjaGVcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYWNoZSA9IHsgX19tYWluOiByZXF1ZXN0Ll9fY2FjaGUgfTtcblxuICBmb3IobGV0IGtleSBpbiByZXF1ZXN0Ll9faW5zdGFuY2VzKSB7XG4gICAgY2FjaGVba2V5XSA9IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XS5fX2NhY2hlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2xlYXJHbG9iYWxzKCk7XG4gIHJvdXRlci5kZWluaXQoKTtcbiAgcmVxdWVzdC5kZWluaXQoKTtcbiAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGVsZXRlIHN0b3JlLl9fdGFyZ2V0W3N0b3JlS2V5c1tpXV07XG4gIH1cblxuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuQWtpbGkuc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWtpbGkuanMiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhIGxvdCBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvdXRpbHN9XG4gKi9cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRXh0ZW5kZWQgc3BsaXQgb2YgdGhlIHN0cmluZ1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbXCJIZWxsb1wiLCBcIldvcmxkXCJdXG4gKiB1dGlscy5zcGxpdChcIkhlbGxvIFdvcmxkXCIsIFwiIFwiKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyd4ID0gNScsICcgeSA9IFwiMTsyOzNcIiddXG4gKiB1dGlscy5zcGxpdCgneCA9IDU7IHkgPSBcIjE7MjszXCInLCBcIjtcIiwgWydcIiddKTtcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdHIgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlbF1cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtleGNsdWRlXSBcbiAqL1xudXRpbHMuc3BsaXQgPSBmdW5jdGlvbihzdHIsIGRlbCA9ICcnLCBleGNsdWRlID0gW10pIHtcblx0Y29uc3QgZXhwcyA9IFtdOyAgICAgXG4gIGxldCBsYXN0ID0gJyc7XG5cbiAgaWYoIWRlbCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xuICB9XG4gIGVsc2UgaWYoZGVsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWwpO1xuICB9XG4gIGVsc2UgaWYoc3RyLmluZGV4T2YoZGVsKSA9PSAtMSkge1xuICAgIGxhc3QgPSBzdHI7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gZXhjbHVkZS5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IGV4Y2x1ZGVbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSBkZWwgJiYgIW9wZW4pIHtcbiAgICAgICAgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG4gIH1cblxuICBsYXN0ICYmIGV4cHMucHVzaChsYXN0KTtcbiAgcmV0dXJuIGV4cHM7XG59XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgJ3gnKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbWyd4J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dLCAnMScsIFtbJ3gnLCAneSddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dIFxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgW1sneCddLCBbJ3knXV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IG51bGwpIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmIChrZXlzICYmICFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBzdHIgPSBoYW5kbGVyPyAoaGFuZGxlciArICcnKS50b0xvd2VyQ2FzZSgpOiAnJztcbiAgICBoYW5kbGVyID0gdmFsID0+ICh2YWw/ICh2YWwgKyAnJykudG9Mb3dlckNhc2UoKTogJycpLm1hdGNoKHN0cik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCFrZXlzICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihrZXlzKSB7XG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICAgIGtleSA9IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgICAgbGV0IHZhbCA9IGtleT8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGl0ZW0pOiBpdGVtO1xuICAgIFxuICAgICAgICBpZiAoaGFuZGxlcih2YWwpKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gYXJyLnNsaWNlKCk7XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3gnLCAneiddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5pbmNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogUmV0dXJuIG5ldyBvYmplY3Qgd2l0aG91dCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneSddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5leGNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnNdIFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgbmVzdGVkOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgY29uc3QgbmV4dCA9IChvYmopID0+IHtcbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgICAgdmFsID0gdmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgb3B0aW9ucy5uZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICgoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSB7IGVudW1lcmFibGU6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gKHZhbCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IEFycmF5LmlzQXJyYXkodmFsKT8gW106IHt9O1xuICAgICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyh2YWwpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbFtrZXldICE9PSB1bmRlZmluZWQgJiYgKG9ialtrZXldID0gdmFsW2tleV0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5pZ25vcmVVbmRlZmluZWQpIHtcbiAgICAgIGEgPSBjbGVhclVuZGVmaW5lZChhKTtcbiAgICAgIGIgPSBjbGVhclVuZGVmaW5lZChiKTtcbiAgICB9XG5cbiAgICBsZXQgYUtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhhKTtcbiAgICBsZXQgYktleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhiKTtcbiAgICBcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGEgPSB0aGlzLmlzU2NvcGVQcm94eShhKT8gYS5fX3RhcmdldDogYTtcbiAgICBiID0gdGhpcy5pc1Njb3BlUHJveHkoYik/IGIuX190YXJnZXQ6IGI7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gYUtleXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0aGUgY3VycmVudCB2YWx1ZSB3aXRoIHRoZSBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIHByZXZpb3VzIHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzQ29weSAtIHRoZSBwcmV2aW91cyB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbihjdXJyZW50LCBwcmV2aW91cywgcHJldmlvdXNDb3B5LCBvcHRpb25zKSB7XG4gIGlmIChjdXJyZW50ICE9PSBwcmV2aW91cykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBhcmUoY3VycmVudCwgcHJldmlvdXNDb3B5LCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBjYW1lbCB0byBkYXNoIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCBuZXN0ZWQgb2JqZWN0cyB0cmVlIHByb3BlcnR5XG4gKiBSZXR1cm5zIGNoYW5nZWQgcHJvcGVydHkgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgb1trXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IHZhbCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2hpY2ggaGF2ZSBhc3luYyBhdHRyaWJ1dGUgY29udGVudC5cclxuICogXHJcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cclxuICogXHJcbiAqIEB0YWcgdXJsXHJcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VybC5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5leHBvcnQgY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBjb21wb25lbnRzIGFyZSBpbmhlcml0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW2dsb2JhbHNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgZ2xvYmFscyA9IHt9KSB7XG4gICAgZ2xvYmFscyA9IHsgLi4uQWtpbGkub3B0aW9ucy5nbG9iYWxzLCAuLi5nbG9iYWxzfTtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgY29uc3QgdmFycyA9IFtdO1xuICAgIGNvbnN0IGV4cHMgPSB1dGlscy5zcGxpdChleHByZXNzaW9uLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IobGV0IGtleSBpbiBnbG9iYWxzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaChnbG9iYWxzW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV0gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIGlmKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGFuIGh0bWwgZWxlbWVudCB0byB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IGZhbHNlO1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBjaGVja0NoYW5nZXM6IGZhbHNlLCBcbiAgICAgIHNldEV2ZW50czogdHJ1ZSxcbiAgICAgIHNldFBhcmVudHM6IHRydWUsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHJlY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIC4uLnRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKSwgICAgXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB0cnVlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zKTsgICAgXG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRFdmVudHMgJiYgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0UGFyZW50cyAmJiB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0Qm9vbGVhbkF0dHJpYnV0ZXMgJiYgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5kZWZpbmVBdHRyaWJ1dGVzICYmIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyAgIFxuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKSk7ICAgICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZyB8fCB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCB8fCB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXModGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMyAmJiB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCwgdHJ1ZSkpIHsgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlTm9kZShjaGlsZCwgdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXMpOyAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzb2x2ZWQoKSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTsgICAgIFxuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICB0aGlzLl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eUluO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eU91dDtcblxuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTtcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2hhbmdlIGV4cHJlc3Npb24gYmVmb3JlIHBhcnNpbmcgaGVyZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBub2RlIGhhcyBhbnkgcHJvcGVydHkgY2hhbmdlcyBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcmVudEJpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXSwgY29tcG9uZW50OiBub2RlLl9fY29tcG9uZW50IH07XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgICAgICBsZXQgYXR0ck5hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lID0gKGF0dHJOYW1lIHx8IHRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gbm9kZS5uYW1lLnRvTG93ZXJDYXNlKCk6ICcnOyAgICAgICAgXG4gICAgICAgIGxldCBtZXNzYWdlcyA9IFsgZXJyLm1lc3NhZ2UsIG5vZGUuX19leHByZXNzaW9uIF07XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgJiYgbWVzc2FnZXMucHVzaChgW2F0dHJpYnV0ZSAke2F0dHJpYnV0ZU5hbWV9XWApO1xuICAgICAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbIGBbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWAgXSk7XG4gICAgICAgIHRocm93IGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICAgbGV0IHBhcmVudHNIYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLnBhcmVudHMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPT0gNTApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICBgRm9yIGhpZ2hlciBwZXJmb3JtYW5jZSwgZG9uJ3QgbG9vcCBQcm94eSBhcnJheXMvb2JqZWN0cyBpbnNpZGUgZXhwcmVzc2lvbiBmdW5jdGlvbnMsIG9yIHVzZSBBa2lsaS51bmV2YWx1YXRlKCkgdG8gd3JhcCB5b3UgY29kZS5gLFxuICAgICAgICAgICAgICBgJHsgbm9kZS5fX2V4cHJlc3Npb24gfWAsXG4gICAgICAgICAgICAgIGBzY29wZSBwcm9wZXJ0eSBcIiR7IGRhdGEucGFyZW50cy5qb2luKCcuJyl9XCJgXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcdGF0ICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgIXBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXT8gcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID0gMTogcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdKys7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICBsZXQgY2FtZWxBdHRyaWJ1dGUgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG5cbiAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH0gICAgICAgICAgXG5cbiAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgICAgICAhY29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gJiYgKHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSkpO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW2NhbWVsQXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzTW91bnRlZCkge1xuICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIG5vZGUgYW5kIHNldCBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGtleXMsIGV2YWx1YXRlZCkge1xuICAgIGxldCBiaW5kID0gdGhpcy5fX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKTtcbiAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgaWYgKCFiaW5kKSB7XG4gICAgICB0aGlzLl9fYmluZChrZXlzLCB7IG5vZGUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICAgIFxuXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGEgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107IFxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGxldCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH0gIFxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzIChrZXlzLCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpIHsgICAgIFxuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCB0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG4gICAgICAgIFxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiAhaGFzS2V5KSB7XG4gICAgICAgICAgX2lzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cyk7XG5cbiAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGV2ZW50IGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBub2RlOiBub2RlXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIHsgZXZlbnQ6IGUgfSk7XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrID0gdHJ1ZSkge1xuICAgIGxldCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnO1xuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7ICAgICAgXG4gICAgICBsZXQgcmVzID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpOyAgICAgXG4gICAgICBub2RlW2tleV0gIT0gcmVzICYmIChub2RlW2tleV0gPSByZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBsZXQgY2hlY2sgPSB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2U7XG4gICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjaykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tCaW5kaW5nXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCwgY2hlY2tCaW5kaW5nID0gZmFsc2UpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gbm9kZVsobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddLnRyaW0oKTtcbiAgICBsZXQgaGFzQmluZGluZyA9IGNoZWNrQmluZGluZz8gZXZhbHVhdGlvblJlZ2V4LnRlc3QodmFsKTogZmFsc2U7XG4gICAgXG4gICAgaWYoY2hlY2tCaW5kaW5nICYmICFoYXNCaW5kaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWw7XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBoYXNCaW5kaW5nO1xuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVpbml0aWFsaXplTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgbm9kZS5fX2V2ZW50LnVuYmluZCgpO1xuICAgICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7ICAgICAgICAgIFxuICAgIH1cblxuICAgIGRlbGV0ZSBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXM7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPZjtcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgIGRlbGV0ZSBub2RlLl9fZXZlbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19oYXNCaW5kaW5ncztcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICBub2RlICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbm9kZSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG4gICAgICAgICAgdmFsdWU/IHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpOiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYodGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpIHtcbiAgICAgICAgICAgIGxldCByZWFsVGFyZ2V0ID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgcmVhbFRhcmdldCAmJiAocmVhbFRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSAmJiAoY29tcG9uZW50ID0gIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBpZihBa2lsaS5fX3dyYXBwaW5nICYmIGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZvclBhcmVudHMgPSBBa2lsaS5fX2V2YWx1YXRpb24uY29tcG9uZW50LnBhcmVudHMoYyA9PiBjIGluc3RhbmNlb2YgQWtpbGkuY29tcG9uZW50cy5Gb3IpO1xuXG4gICAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHsgXG4gICAgICAgICAgICAgIGNvbnN0IGZvckRhdGEgPSBmb3JQYXJlbnRzW2ldLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhleGNBcnIsIGNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBpZihkYXRhICYmIHR5cGVvZiBkYXRhID09ICdvYmplY3QnICYmIGZvckRhdGEgPT09IGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIGV4Y0Fyci5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICBlbHNlIGlmICghdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBjb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nLCBldmFsdWF0ZWQpO1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHsgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSBBa2lsaS53cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvcihsZXQgayBpbiB0YXJnZXRQYXJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHsgXG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHlba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVQcm94eVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0Rpc2FibGVtZW50KGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rpc2FibGVQcm94eS5fX2FsbD8gdHJ1ZTogdGhpcy5fX2Rpc2FibGVQcm94eVt0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIFxuICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5TmFtZShsaW5rLm5hbWUsIHZhbHVlKTtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkgeyAgXG4gICAgc3RvcmUuX190YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcblxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICBpZihjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCBjb21wb25lbnQuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgICAgXG4gICAgfSAgICAgXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmKCF0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGluZm8gPSB7IGNvbXBvbmVudDogdGhpcywgbmFtZSwga2V5cywga2V5U3RyaW5nIH07XG4gICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXS5wdXNoKGluZm8pO1xuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKGluZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAgIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX3N0b3JlQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7IFxuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyBzdG9yZS5fX3RhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDtcblxuICAgIGlmKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaCh7IGNvbXBvbmVudDogdGhpcywgbmFtZSwgZm4gfSk7XG5cbiAgICBpZihjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCAhPT0gdGhpcyB8fCByZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZihsaW5rLmNvbXBvbmVudCA9PT0gdGhpcyAmJiBsaW5rLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgICBsaW5rcy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBpZih0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuXG4gICAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG5cbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gICAgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IHRydWU7XG5cbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIH0gXG5cbiAgICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTsgXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7ICAgIFxuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7ICBcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7ICBcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZCBcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX2F0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgICAgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4gfSk7XG4gICAgXG4gICAgaWYoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrIGluIHRhcmdldCkgeyAgICAgICAgXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTsgIFxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5czoga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LCAgICAgIFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgICAgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0geyBfX2RhdGE6IFtdIH07XG5cbiAgICAgIGlmICghbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU/IHZhbHVlOiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBkYXRhIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBjb25zdCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyU3RvcmVMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rcztcblxuICAgIGZvcihsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBjb25zdCBhcnIgPSBsaW5rc1trZXldO1xuXG4gICAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmKGxpbmsuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgbGlua3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gY2hpbGQuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgICAgbm9kZXMucHVzaChhdHRyc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmluZChjaGlsZC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmVhcmVzdCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyaWdodD1mYWxzZV0gLSBmcm9tIHRoZSByaWdodCBzaWRlIGlmIHRydWVcbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROZWFyKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCByaWdodCA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIHJpZ2h0ICYmIGxldmVsRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsZXZlbEVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGVsID0gbGV2ZWxFbGVtZW50c1tpXTtcblxuICAgICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IGVsLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXJyLnB1c2goZWwuX19ha2lsaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnJldmVyc2UoKTtcblxuICAgIGlmICghZmluZEFsbCkge1xuICAgICAgcmV0dXJuIGFyci5sZW5ndGg/IGFyclswXTogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgdG8gdGhlIHN0b3JlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZighdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJzdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX19zdG9yZUJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX2F0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuc3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5hdHRyQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fdW5hdHRyQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBtYXRjaGVzIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY2hpbGQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGJlZm9yZShzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwcmV2KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIG5leHQoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IHNldFBhcmVudHM6IHRydWUsIGNoZWNrQ2hhbmdlczogZmFsc2UgfSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFsZSB0aGUgY29tcG9uZW50LCBidXQgY2FuY2VsIHRoZSBjb21waWxhdGlvbiBpbnNpZGUgb2YgaXRcbiAgICovXG4gIHByZXZlbnQoKSB7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGVsZW1lbnQgaHRtbFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9fZW1wdHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rlc3Ryb3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIG1ha2UgcmVxdWVzdHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHN9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgX19jYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkZWZhdWx0c10gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvcnNQYXR0ZXJuOiAvXihbXjIzXSl8NDA0LyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTsgXG4gICAgICBvcHRpb25zLnVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDsgIFxuICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgIFxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICAgIFxuICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKTtcbiAgICAgIHhociA9IGJlZm9yZS54aHI7XG4gICAgICBvcHRpb25zID0gYmVmb3JlLm9wdGlvbnM7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTsgIFxuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgXG4gICAgICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuanNvbiAhPT0gdHJ1ZSAmJiAob3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICBzdHIgJiYgKG9wdGlvbnMudXJsICs9IFwiP1wiICsgc3RyKTtcbiAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICBsZXQgaGFzaCA9IG51bGw7XG4gICAgICBsZXQgY2FjaGUgPSB0eXBlb2Ygb3B0aW9ucy5jYWNoZSA9PSAnZnVuY3Rpb24nPyBvcHRpb25zLmNhY2hlKG9wdGlvbnMpOiBvcHRpb25zLmNhY2hlO1xuICAgICAgKHdpbmRvdy5BS0lMSV9TRVJWRVIgJiYgIUFraWxpLl9faW5pdCkgJiYgKGNhY2hlID0gdHJ1ZSk7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCwgXG4gICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXIsIFxuICAgICAgICAgIHBhc3N3b3JkOiBvcHRpb25zLnBhc3N3b3JkLCBcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNhY2hlICYmIGhhc2gpIHsgICAgICAgIFxuICAgICAgICBsZXQgX2NhY2hlID0gdGhpcy5nZXRDYWNoZShoYXNoKTtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKF9jYWNoZSAmJiAoY2FjaGUgPT09IHRydWUgfHwgbm93IC0gX2NhY2hlLmNyZWF0ZWRBdCA8PSBjYWNoZSkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLnRyYW5zZm9ybUFmdGVyKF9jYWNoZS5yZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWFkZXJLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgayA9IGhlYWRlcktleXNbaV07XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZSxcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB4aHIud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogeGhyLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHhoci5yZXNwb25zZVR5cGUgPT0gJ3RleHQnPyB4aHIucmVzcG9uc2VUZXh0OiAnJyxcbiAgICAgICAgICByZXNwb25zZVhNTDogeGhyLnJlc3BvbnNlVHlwZSA9PSAnZG9jdW1lbnQnPyB4aHIucmVzcG9uc2VYTUw6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlVVJMOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgdGltZW91dDogeGhyLnRpbWVvdXQsXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKHhociksICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKCh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JzUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcblxuICAgICAgICBoYXNoICYmIHRoaXMuY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KTsgICAgICAgIFxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhlYWRlcnMgb2YgYSBYTUxIdHRwUmVxdWVzdCBpbnN0YW5jZVxuICAgKiBcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH1cbiAgICovXG4gIGdldEhlYWRlcnMgPSBmdW5jdGlvbih4aHIpIHtcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xuICAgIGxldCBzdHIgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7ICBcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KCdcXHUwMDBkXFx1MDAwYScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGxpbmUuaW5kZXhPZignXFx1MDAzYVxcdTAwMjAnKTtcblxuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZXQga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBsZXQgdmFsID0gbGluZS5zdWJzdHJpbmcoaW5kZXggKyAyKTtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIGdldENhY2hlKGhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NhY2hlW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqL1xuICBjcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpIHtcbiAgICB0aGlzLl9fY2FjaGVbaGFzaF0gPSB7IHJlc3VsdCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICovXG4gIHJlbW92ZUNhY2hlKGhhc2gpIHtcbiAgICBkZWxldGUgdGhpcy5fX2NhY2hlW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGhhc2ggdG8gc2F2ZSBpbiB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjcmVhdGVDYWNoZUhhc2goZGF0YSkge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgIGNoYXIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICAgICAgaGFzaCA9IGhhc2ggJiBoYXNoOyBcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaCArICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodik7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXSAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyB4aHIsIG9wdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGFmdGVyIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcihyZXN1bHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZGF0YTogcmVzdWx0LnJlc3BvbnNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG4vKipcbiAqIFNldCByb3V0ZXIncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5yZXF1ZXN0LnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9faW5zdGFuY2VzID0ge307XG4gIHRoaXMuX19jYWNoZSA9IHt9O1xufVxuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucmVxdWVzdC5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbnJlcXVlc3Quc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuLyoqXG4gKiBCYXNlIGNvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIHtib29sZWFufSBmb2N1cyAtIHNldCB0aGUgZm9jdXMgb3Igbm90XG4gKiBAYXR0ciB7bnVtYmVyfSBkZWJvdW5jZSAtIGRlYm91bmNlIGRlbGF5XG4gKiBAbWVzc2FnZSB7dm9pZH0gZGVib3VuY2UgLSBzZW50IG9uIHRoZSBkZWJvdW5jZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICAgIH0sIHRoaXMuZGVib3VuY2VJbnRlcnZhbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGZvclxuICogQHNlbGVjdG9yIGZvcltpbl0sb2xbaW5dLHVsW2luXSx0aGVhZFtpbl0sdGJvZHlbaW5dLHRmb290W2luXVxuICogQGF0dHIge29iamVjdHxhcnJheX0gaW4gLSBkYXRhIHRvIGNyZWF0ZSB0aGUgbG9vcFxuICogQGF0dHIge251bWJlcnxmYWxzZX0gY2h1bms9NTAwIC0gY2h1bmsgc2l6ZVxuICogQGF0dHIge3N0cmluZ30gcmVuZGVyPWFzYyAtIHJlbmRlciB0eXBlXG4gKiBAbWVzc2FnZSB7b2JqZWN0fGFycmF5fSBvdXQgLSBzZW50IG9uIHRoZSBkYXRhIHJlbmRlclxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gY2h1bmsgLSBzZW50IG9uIHRoZSBkYXRhIGNodW5rIHJlbmRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnb3V0JywgJ2NodW5rJ107XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IHRydWU7ICBcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgdGhpcy5Mb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCB0aGlzLkxvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSAwO1xuICAgIHRoaXMuX19jb3VudCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7ICAgIFxuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19wcm9taXNlcyA9IFtdO1xuICAgIHRoaXMucmVuZGVyVHlwZXMgPSBbJ2FzYycsICdkZXNjJywgJ21pZCddO1xuICAgIHRoaXMucmVuZGVyVHlwZSA9IHRoaXMucmVuZGVyVHlwZXNbMF07XG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gbnVsbDtcbiAgICB0aGlzLmNodW5rU2l6ZSA9IDUwMDtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdjaHVuaycsIHRoaXMuc2V0Q2h1bmtTaXplKTtcbiAgICB0aGlzLmF0dHIoJ3JlbmRlcicsIHRoaXMuc2V0UmVuZGVyVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgc2V0UmVuZGVyVHlwZSh0eXBlKSB7XG4gICAgaWYodGhpcy5yZW5kZXJUeXBlcy5pbmRleE9mKHR5cGUpID09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKCdXcm9uZyByZW5kZXIgdHlwZS4gSXQgbXVzdCBiZSBcImFzY1wiLCBcImRlc2NcIiBvciBcIm1pZFwiJyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJUeXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldENodW5rU2l6ZShzaXplKSB7XG4gICAgdGhpcy5jaHVua1NpemUgPSBzaXplO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2NvdW50Kys7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIFxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IHRoaXMuX19jb3VudCAtIDEpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW3RoaXMuX19jb3VudCAtIDFdO1xuICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyaXNvbi5jb3B5O1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmUoY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUsIHsgaWdub3JlVW5kZWZpbmVkOiB0cnVlIH0pKSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVuZGVyVHlwZSAhPT0gJ2FzYycgJiYgdGhpcy5lbC5pbnNlcnRCZWZvcmUoaXRlcmF0b3IuZWwsIHRoaXMuZ2V0Q2xvc2VzdEVsZW1lbnQoaW5kZXgpKTsgICAgICBcbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pKTsgXG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sOyBcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5yZW5kZXJUeXBlICE9PSAnYXNjJz8gdGhpcy5nZXRDbG9zZXN0RWxlbWVudChpbmRleCk6IHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoZWwpKTtcbiAgICB0aGlzLml0ZXJhdG9ycy5wdXNoKGVsLl9fYWtpbGkpO1xuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZ2V0Q2xvc2VzdEVsZW1lbnQoaW5kZXgpIHtcbiAgICBsZXQgY2xvc2VzdCA9IHRoaXMuaXRlcmF0b3JSZWY7XG5cbiAgICB0aGlzLml0ZXJhdG9ycy5yZWR1Y2UoKG1pbiwgaXRlcmF0b3IpID0+IHtcbiAgICAgIGxldCBkaWZmID0gaXRlcmF0b3IuaW5kZXggLSBpbmRleDtcblxuICAgICAgaWYoKCFtaW4gfHwgZGlmZiA8IG1pbikgJiYgZGlmZiA+IDApIHtcbiAgICAgICAgY2xvc2VzdCA9IGl0ZXJhdG9yLmVsO1xuICAgICAgICByZXR1cm4gZGlmZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1pbjtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBjbG9zZXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIGRhdGFcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBkYXRhIFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuY2h1bmsgJiYgdGhpcy5jaHVuay5zdG9wKCk7ICAgICBcbiAgICB0aGlzLmNodW5rID0gbmV3IENodW5rKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5kYXRhQ29weSA9IHV0aWxzLmNvcHkoZGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuY2h1bmsuc3RhcnQoKS50aGVuKChkb25lKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5fX2NvdW50LCBsID0gdGhpcy5pdGVyYXRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBsLS07XG4gICAgICAgIGktLTtcbiAgICAgIH1cblxuICAgICAgaWYoIWRvbmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnJlbmRlclR5cGUgIT09ICdhc2MnKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zb3J0KChhLCBiKSA9PiBhLl9fYWtpbGkuaW5kZXggLSBiLl9fYWtpbGkuaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldCgpOyAgICAgICAgXG4gICAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcih0aGlzLmRhdGEsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pOyAgICAgXG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9faW5kZXggPSAwO1xuICAgIHRoaXMuX19jb3VudCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7ICAgIFxuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19wcm9taXNlcyA9IFtdO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgbG9vcFxuICogQHNlbGVjdG9yIGxvb3AsdHJcbiAqIEBhdHRyIEBzZWUgRm9yXG4gKiBAc2NvcGUgeyp9IGxvb3BWYWx1ZSAtIGRhdGEgaXRlbSdzIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBcbiAqIEBzY29wZSB7c3RyaW5nfG51bWJlcn0gbG9vcEtleSAtIGtleSBvZiB0aGUgaXRlcmF0aW9uXG4gKiBAc2NvcGUge251bWJlcn0gbG9vcEluZGV4IC0gaW5kZXggb2YgdGhlIGl0ZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG5cbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEluZGV4KHRhcmdldCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgsIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0S2V5KHRhcmdldCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldFZhbHVlKHRhcmdldCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHRydWUsIHRhcmdldCk7XG5cbiAgICB0aGlzLmNvbXBhcmlzb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIGl0ZXJhdGUoKSB7fVxufVxuXG4vKipcbiAqIENsYXNzIHRvIG1hbmFnZSBsb29wIGNodW5rc1xuICovXG5leHBvcnQgY2xhc3MgQ2h1bmsge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZSwgZGF0YSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB0aGlzLmFyciA9IHRoaXMuY3JlYXRlKGRhdGEpO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm5leHQoKSkudGhlbigoKSA9PiAhdGhpcy5jYW5jZWxsZWQpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZih0aGlzLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLmFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZih0aGlzLmluZGV4ID4gdGhpcy5hcnIubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYXcodGhpcy5hcnJbdGhpcy5pbmRleF0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5pbmRleCsrOyAgIFxuICAgICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKHRoaXMubmV4dC5iaW5kKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2h1bmtzXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gZGF0YSBcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuICBjcmVhdGUoZGF0YSkge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgQXJyYXkuaXNBcnJheShkYXRhKSAmJiAoa2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiAra2V5ID09IGtleSkpO1xuICAgIHJldHVybiB0aGlzW2BjcmVhdGUke3V0aWxzLmNhcGl0YWxpemUodGhpcy5pbnN0YW5jZS5yZW5kZXJUeXBlKX1gXShkYXRhLCBrZXlzKTtcbiAgfVxuXG4gIGNyZWF0ZUFzYyhkYXRhLCBrZXlzKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7ICAgICAgICBcbiAgICAgIGlmKGkgJSB0aGlzLmluc3RhbmNlLmNodW5rU2l6ZSA9PSAwKSB7XG4gICAgICAgIGFyci5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBhcnJbYXJyLmxlbmd0aCAtIDFdLnB1c2goeyB2YWx1ZTogZGF0YVtrZXldLCBrZXk6IGtleSwgaW5kZXg6IGkgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNyZWF0ZURlc2MoZGF0YSwga2V5cykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBmb3IobGV0IGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGktLSkgeyAgICAgICAgXG4gICAgICBpZigoaSArIDEpICUgdGhpcy5pbnN0YW5jZS5jaHVua1NpemUgPT0gMCB8fCBpID09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgYXJyLnB1c2goW10pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0ucHVzaCh7IHZhbHVlOiBkYXRhW2tleV0sIGtleToga2V5LCBpbmRleDogaSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgY3JlYXRlTWlkKGRhdGEsIGtleXMpIHtcbiAgICBsZXQgYXJyID0gW1tdXTtcbiAgICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgbGV0IGMgPSAwO1xuXG4gICAgZm9yKGxldCBpID0gbWlkLCBrOyBpID49IDA7IGktLSkge1xuICAgICAgaWYoIW1pZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgayA9IG1pZCArIChtaWQgLSBpICsgMSk7XG4gICAgICBjICs9IDI7XG5cbiAgICAgIGlmKGMgJSB0aGlzLmluc3RhbmNlLmNodW5rU2l6ZSA9PSAwKSB7XG4gICAgICAgIGFyci5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGV0IGtleVByZXYgPSBrZXlzW2ldO1xuICAgICAgbGV0IGtleU5leHQgPSBrZXlzW2tdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXS5wdXNoKHsgdmFsdWU6IGRhdGFba2V5UHJldl0sIGtleToga2V5UHJldiwgaW5kZXg6IGkgfSk7XG4gICAgICBrIDwgbGVuZ3RoICYmIGFyclthcnIubGVuZ3RoIC0gMV0ucHVzaCh7IHZhbHVlOiBkYXRhW2tleU5leHRdLCBrZXk6IGtleU5leHQsIGluZGV4OiBrIH0pO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IGMsIGwgPSBsZW5ndGg7IGkgPCBsOyBpKyspIHsgICAgICAgIFxuICAgICAgaWYoaSAlIHRoaXMuaW5zdGFuY2UuY2h1bmtTaXplID09IDApIHtcbiAgICAgICAgYXJyLnB1c2goW10pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0ucHVzaCh7IHZhbHVlOiBkYXRhW2tleV0sIGtleToga2V5LCBpbmRleDogaSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIGNodW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gZGF0YSBcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkcmF3KGRhdGEpIHsgIFxuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaW5zdGFuY2UubG9vcChrZXksIHZhbHVlLCBpbmRleCk7XG4gICAgICBpdGVyYXRvci5pdGVyYXRlKGluZGV4KTtcbiAgICB9O1xuICAgIFxuICAgIGxldCBwID0gW107XG4gIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvYmogPSBkYXRhW2ldO1xuICAgICAgbG9vcChvYmoua2V5LCBvYmoudmFsdWUsIG9iai5pbmRleCk7XG4gICAgICBwLnB1c2godGhpcy5pbnN0YW5jZS5fX3Byb21pc2VzW3RoaXMuaW5zdGFuY2UuX19wcm9taXNlcy5sZW5ndGggLSAxXSk7XG5cbiAgICAgIGlmKHRoaXMuY2FuY2VsbGVkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgICAgIXRoaXMuY2FuY2VsbGVkICYmIHRoaXMuaW5zdGFuY2UuYXR0cnMub25DaHVuay50cmlnZ2VyKGRhdGEsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5zdGFuY2UucmVzZXQoKTtcbiAgfVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRhcmdldD8gdGhpcy5fX3RhcmdldDogdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggZXZlbnRzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHRyaWdnZXIgY3VzdG9tIGphdmFzY3JpcHQgZXZlbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2V2ZW50c31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuZWxDb21wb25lbnQgPSB0aGlzLmVsLl9fYWtpbGkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyh7IGRldGFpbDogZGF0YSwgIC4uLm9wdGlvbnMgfSkpKTtcbiAgICB9ICAgXG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlcGVyZSBhbiBldmVudCBvcHRpb25zXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKi9cbiAgcHJlcGFyZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgLi4ub3B0aW9ucyB9OyAgXG4gICAgdGhpcy5lbENvbXBvbmVudCAmJiAhdGhpcy5lbENvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCAmJiAob3B0aW9ucy5kZXRhaWwgPSB1dGlscy5jb3B5KG9wdGlvbnMuZGV0YWlsKSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIGRpc3RyaWJ1dGUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByb3V0ZXIgdGVtcGxhdGVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgcm91dGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSB0cmFuc2l0aW9uLnBhdGgucGFyYW1zO1xuICAgIGxldCB1cmwgPSB0cmFuc2l0aW9uLnVybDtcbiAgICBsZXQgcXVlcnkgPSB0cmFuc2l0aW9uLnF1ZXJ5O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uID0gKHBhdGgpID0+IHtcbiAgICAgIGlmIChwYXRoLnBhcmVudCkge1xuICAgICAgICBpZiAocGF0aC5wYXJlbnQuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdGgucGFyZW50LmNvbXBvbmVudC5fX3Njb3BlLl9fdHJhbnNpdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBpbGUgPSAoaHRtbCkgPT4geyBcbiAgICAgIHRoaXMuZW1wdHkoKTsgIFxuICAgICAgbGV0IG5hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgaWYoc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gQWtpbGkuX19jb21wb25lbnRzKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQWtpbGkuX19jb21wb25lbnRzW2tleV07XG4gICAgXG4gICAgICAgICAgaWYoY29tcG9uZW50ID09PSBzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIG5hbWUgPSBrZXk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKCFleGlzdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cIiBoYXMgbm8gZGVmaW5lZCBjb21wb25lbnRgKVxuICAgICAgICB9IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8JHsgbmFtZSB9PiR7IGh0bWwgfTwvJHsgbmFtZSB9PmA7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBzdGF0ZTogc3RhdGUubmFtZSxcbiAgICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIGlmICghdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50ZW1wbGF0ZTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHN0YXRlLnRlbXBsYXRlVXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICB9XG4gICAgfSkudGhlbihodG1sID0+IGNvbXBpbGUoaHRtbCkpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbi8qKlxuICogVHJhbnNpdGlvbiBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgY29uc2lzdHMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0IHRvIGFub3RoZXIgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgcm91dGVyLnN0YXRlXG4gICAqL1xuICByZWRpcmVjdCgpIHtcbiAgICB0aGlzLmNhbmNlbCgpOyAgICBcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwYXRoXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF0aCBcbiAgICovXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3BhdGguc3RhdGUubmFtZV0gPSBwYXRoO1xuICAgIHRoaXMucGFyYW1zID0gIXBhdGgucGFyZW50PyBwYXRoLnBhcmFtczogey4uLnBhdGgucGFyZW50LnBhcmFtcywgLi4ucGF0aC5wYXJhbXN9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHJvdXRlIGJ5IHRoZSBzdGF0ZVxuICAgKiAgXG4gICAqIEBwYXJhbSB7Kn0gc3RhdGUgXG4gICAqL1xuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYgKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIHRoZSBzdGF0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICAgKi9cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gISF0aGlzLnN0YXRlc1tzdGF0ZS5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGN1cnJlbnQgdHJhbnNpdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQWtpbGkgcm91dGVyXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqL1xuY29uc3Qgcm91dGVyID0ge307XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJvdXRlci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iYXNlVXJsID0gXCIvXCI7XG4gIHRoaXMuc3RhdGVzID0gW107XG4gIHRoaXMuaGFzaE1vZGUgPSB0cnVlO1xuICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgdGhpcy5fX2luaXQgPSBmYWxzZTtcbiAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgdGhpcy5fX3BhcmFtUmVnZXggPSAvKDooW1xcd1xcZC1dKykpL2c7XG4gIHRoaXMuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICBcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7XG5cbiAgaWYgKCFvcHRpb25zLnJlbG9hZCAmJiB1cmwgPT09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYgKHRoaXMuaGFzaE1vZGUpIHtcbiAgICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjdXJyZW50ID09PSB1cmwgJiYgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMuc3RhdGVzW2ldKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHN0YXRlIFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gKi9cbnJvdXRlci5pbml0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IHBhcmVudHMgPSBbXTtcbiAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcGFyZW50cy5wb3AoKTtcbiAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTdGF0ZShwYXJlbnROYW1lKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgIH1cblxuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcbiAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gIHRoaXMuX19pbml0ICYmIHRoaXMuaW5pdFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtc1t2XSB8fCAnJyk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBoYXNoID0gKGhhc2ggfHwgJycpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcbiAgICByZXR1cm4gJyhbXlxcXFwvXSopJztcbiAgfSk7XG5cbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCB2KSA9PiB7XG4gICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgaSsrO1xuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJyhbXlxcXFwvXSopJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciByb3V0ZXIgaGFuZGxlcnMgaW5zaWRlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIHRoaXMuX19pc29sYXRlZCA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkgeyAgICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlQ2hhbmdlO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4geyAgICBcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gY29udGVudC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoc3RhdGUubGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBjb21wb25lbnQ6IHJvdXRlLCBsb2FkZWQ6IHRydWUgfSk7XG4gICAgbGV2ZWwrKztcblxuICAgIGxldCBoYXNTdGF0ZSA9IHByZXZUcmFuc2l0aW9uICYmIHByZXZUcmFuc2l0aW9uLmhhc1N0YXRlKHN0YXRlKTtcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuICAgICBcbiAgICBpZiAoaGFzU3RhdGUpIHtcbiAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLmdldFJvdXRlKHN0YXRlKTsgICAgICBcbiAgICAgIGxldCBwcmV2ID0geyBwYXJhbXM6IHJvdXRlLnBhcmFtcywgcXVlcnk6IHJvdXRlLnF1ZXJ5LCBoYXNoOiByb3V0ZS5oYXNoIH07XG4gICAgICBsZXQgY3VycmVudCA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9O1xuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gaXNEaWZmZXJlbnQgJiYgdGhpcy5fX29wdGlvbnMucmVsb2FkICE9PSBmYWxzZTtcbiAgICBcbiAgICBQcm9taXNlLnJlc29sdmUodHJhbnNpdGlvbi5wYXRoLmxvYWRlZD8gc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKTogdHJhbnNpdGlvbi5wYXRoLmRhdGEpLnRoZW4oKGRhdGEpID0+IHsgIFxuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cbiBcbiAgICAgIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IG9uRW5kICYmIG9uRW5kKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCksIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXRoaXMuX19vcHRpb25zLnNhdmVTY3JvbGxQb3NpdGlvbiAmJiAhdHJhbnNpdGlvbi5oYXNoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgICBpZiAocHJldlRyYW5zaXRpb24pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTsgICAgICAgICAgXG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICAgIHJlc29sdmUodHJhbnNpdGlvbik7ICBcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucm91dGVyLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgcm91dGVyLnNldERlZmF1bHRzKCk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5yb3V0ZXIuc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgaWZcbiAqIEBzZWxlY3RvciBpZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyAtIHNob3cgdGhlIGVsZW1lbnQgY29udGVudCBvciBub3RcbiAqIEBhdHRyIHtib29sZWFufSByZWNyZWF0ZSAtIGRlbGV0ZSB0aGUgY29udGVudCBhbmQgcmVjcmVhdGUgb3IganVzdCBzaG93L2hpZGUgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdmFsID0+ICh0aGlzLnN0YXRlID0gISF2YWwsIHRoaXMuc2V0U3RhdGUoKSkpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgICAgXG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZS1pZlxuICogQHNlbGVjdG9yIGVsc2UtaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgQHNlZSBJZlxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZVxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggc2VsZWN0LlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19zZWxlY3R9XG4gKiBcbiAqIEB0YWcgc2VsZWN0ICBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXS5jb25jYXQoRm9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7ICAgXG4gICAgdGhpcy5hdHRyKCdtdWx0aXBsZScsIHRoaXMuc2V0TXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cignY29udGVudCcsIHRoaXMuc2V0Q29udGVudClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmRyYXcuYXBwbHkodGhpcywgYXJndW1lbnRzKS50aGVuKCgpID0+IHRoaXMuZHJhd1NlbGVjdCgpKTtcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIGlucHV0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NoZWNrYm94X2FuZF9yYWRpb31cbiAqIFxuICogQHRhZyBpbnB1dFxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJywgJ211bHRpcGxlJ10uY29uY2F0KFRleHQuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoVGV4dC5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7ICAgIFxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLmlzUmFkaW8gfHwgdGhpcy5pc0NoZWNrYm94KSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICBcbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuYXR0cignY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZCk7XG4gICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0gIFxuXG4gIHNldENoZWNrZWQodmFsdWUsIHRyaWdnZXIgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuXG4gICAgaWYgKHRoaXMucHJldkNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdGhpcy5wcmV2Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRyaWdnZXIgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpb1xuICogQHNlbGVjdG9yIHJhZGlvW25hbWVdXG4gKiBAYXR0ciB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZ3JvdXBcbiAqIEBhdHRyIHtzdHJpbmd8bnVsbH0gdmFsdWUgLSBzZWxlY3RlZCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICogQG1lc3NhZ2Uge3N0cmluZ30gcmFkaW8gLSBzZW50IG9uIHZhbHVlIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgdGhpcy5SYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVkKCkgeyAgIFxuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTsgXG4gICAgdGhpcy5hdHRyKCduYW1lJywgdGhpcy5zZXROYW1lcyk7XG4gICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHJldHVybiBzdXBlci5kcmF3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbigoKSA9PiB0aGlzLl9faXNSZXNvbHZlZCAmJiB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSkpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAgaXRlbS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW8tYnV0dG9uXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRleHRhcmVhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIFxuICogQHRhZyB0ZXh0YXJlYVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2l0aCBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEB0YWcgY29udGVudFxuICogQHNlbGVjdG9yIGNvbnRlbnQsW2NvbnRlbnRlZGl0YWJsZV1cbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQGF0dHIge2Jvb2xlYW59IFtlZGl0YWJsZV0gLSBlZGl0YWJsZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGluY2x1ZGUgdGVtcGxhdGVzIGJ5IHVybC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaHRtbF90ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgaW5jbHVkZVxuICogQHNlbGVjdG9yIGluY2x1ZGVbdXJsXVxuICogQGF0dHIge3N0cmluZ30gdXJsIC0gdGVtcGxhdGUgcGF0aFxuICogQGF0dHIge251bWJlcnxmdW5jdGlvbnxib29sZWFufSBbY2FjaGVdIC0gcmVxdWVzdCBjYWNoZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzI2RvY3NfY2FjaGV9XG4gKiBAbWVzc2FnZSB7dm9pZH0gbG9hZCAtIHNlbnQgb24gdGhlIHRlbXBsYXRlIGxvYWRcbiAqIEBtZXNzYWdlIHtFcnJvcn0gZXJyb3IgLSBzZW50IG9uIGVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdjYWNoZScsIHRoaXMuc2V0Q2FjaGUpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VGVtcGxhdGUpO1xuICB9XG5cbiAgc2V0Q2FjaGUoY2FjaGUpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gIH1cblxuICBzZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaWZyYW1lcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGlmcmFtZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpbWFnZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpbWdcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVtYmVkIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgZW1iZWRcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB2aWRlbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHZpZGVvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHRyYWNrIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdHJhY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndHJhY2snLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIG9iamVjdCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIG9iamVjdFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbGlua3MuXG4gKiBJdCB3b3JrcyB3aXRoIHJvdXRlciB0b28uIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnbyBvbiBjbGlja1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIG9mIHJvdXRlciB0byBnbyBvbiBjbGljayB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3BhcmFtc31cbiAqIEBhdHRyIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3F1ZXJ5fVxuICogQGF0dHIge3N0cmluZ30gW2hhc2hdIC0gaGFzaCBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX2hhc2h9XG4gKiBAYXR0ciB7b2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfcm91dGVyLmxvY2F0aW9ufVxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIGFjdGl2ZSBvciBub3QgXG4gKiBAc2NvcGUge2Jvb2xlYW59IGluQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgcGFydCBvZiB0aGUgYWN0aXZlIHN0YXRlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkID0gKCkgPT4gdGhpcy5zdGF0ZSAmJiB0aGlzLnNldEFjdGl2aXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnNldFN0YXRlKTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMuc2V0UGFyYW1zKTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5zZXRRdWVyeSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5zZXRIYXNoKTtcbiAgICB0aGlzLmF0dHIoJ29wdGlvbnMnLCB0aGlzLnNldE9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNldEFjdGl2aXR5KCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eSgpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiXSwic291cmNlUm9vdCI6IiJ9