import Akili from '../akili.js';
import utils from '../utils.js';
import request from './request.js';
import Route from '../components/route.js';

export class Transition {
  constructor(url, query, hash = '', previous = null) {
    this.url = url;
    this.query = query;
    this.hash = hash;
    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = [];
    this.params = {};
    this.__cancelled = false;
  }

  redirect() {
    this.cancel();
    router.state.apply(router, arguments);
  }

  setPath(path) {
    path.parent = this.path || null;
    this.path = path;
    this.routes.push(path);
    this.states.push(path.state);
    this.params = !path.parent? path.params: {...path.parent.params, ...path.params};
  }

  getRoute(state) {
    for (let i = 0, l = this.routes.length; i < l; i++) {
      let route = this.routes[i];

      if (route.state === state) {
        return route;
      }
    }

    return null;
  }

  hasState(state) {
    return this.states.indexOf(state) != -1;
  }

  cancel() {
    this.__cancelled = true;
  }
}

const router = {};

router.baseUrl = "/";
router.states = [];
router.hashMode = true;
router.__redirects = 0;
router.__init = false;
router.__options = {};
router.__paramRegex = /(:([\w\d-]+))/g;
router.__routeSelector = c => c instanceof Route;

/**
 * Add new state to the router
 *
 * @param {string} name - state name. To set parents you can use dot, e.g. 'app.article.edit'
 * @param {string} pattern - url pattern like 'app/article/:id'
 * @param {object} [options]
 * @returns {router}
 */
router.add = function (name, pattern, options = {}) {
  let defaultOptions = {
    template: '',
    templateUrl: '',
    abstract: false,
    handler: (transition) => {}
  };

  if (!options.template && !options.templateUrl) {
    options.abstract = true;
  }

  if (this.has(name)) {
    throw new Error(`Router state "${name}" is already exists`)
  }

  this.setState(name, pattern, {...defaultOptions, ...options});

  return this;
};

/**
 * Remove state from the list
 *
 * @param {string} name
 */
router.remove = function(name) {
  for (let i = 0, l = this.states.length; i < l; i++) {
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
router.has = function(name) {
  for (let i = 0, l = this.states.length; i < l; i++) {
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
router.state = function (name, params = {}, query = {}, hash = '', options = {}) {
  let state = this.getState(name);

  if (!state) {
    throw new Error(`Not found route state with name ${name}`);
  }

  let url = this.createStateUrl(state, params, query, hash);

  if (!options.reload && url === this.getUrl()) {
    return;
  }

  this.__options = options;
  this.setUrl(url);
};

/**
 * Go back
 */
router.back = function() {
  return window.history.back.apply(window.history, arguments);
};

/**
 * Go to any way
 */
router.go = function() {
  return window.history.go.apply(window.history, arguments);
};

/**
 * Go forward
 */
router.forward = function() {
  return window.history.forward.apply(window.history, arguments);
};

/**
 * Change state by url
 *
 * @param {string} url
 * @param {object} [options]
 */
router.location = function(url, options = { reload: false }) {
  this.__options = options;

  if (this.hashMode) {
    let current = window.location.hash.replace('#', '');

    window.location.hash = url;
    current === url && this.changeState().catch((err) => console.error(err));
  }
  else {
    window.history.pushState(null, '', url);
  }
};

/**
 * Router initialization. Should be called before Akili.init()
 *
 * @param {string} [defaultUrl]
 * @param {boolean} [hashMode=true]
 */
router.init = function (defaultUrl = '', hashMode = true) {
  let oldPushState = window.history.pushState;

  window.history.pushState = function() {
    let res = oldPushState.apply(this, arguments);

    router.changeState().catch((err) => console.error(err));

    return res;
  };

  this.__onStateChangeHandler = () => {
    this.changeState().catch((err) => console.error(err));
  };

  this.defaultUrl = defaultUrl;
  this.hashMode = hashMode;

  this.states.sort((a, b) => {
    a = a.name.split('.').length;
    b = b.name.split('.').length;

    return a - b;
  });

  let states = {};

  for (let i = 0, l = this.states.length; i < l; i++) {
    let state = this.states[i];
    let parents = [];

    states[state.name] = state;
    state.children = [];
    parents = state.name.split('.');
    parents.pop();
    state.level = state.abstract? null: parents.length;

    if (parents.length) {
      let parentName = parents.join('.');
      let parent = states[parentName];

      if (!parent) {
        throw new Error(`Not found parent route state "${parentName}" for "${state.name}"`)
      }

      if (state.level !== null && parent.abstract) {
        state.level--;
      }

      state.fullPattern = this.splitSlashes(parent.fullPattern + '/' + state.pattern);
      parent.children.push(state);
    }
    else {
      state.fullPattern = state.pattern;
    }
  }

  if (!this.states.length && Akili.options.debug) {
    console.warn(`You didn't add any routes to the router`);
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
  for (let i = 0, l = this.states.length; i < l; i++) {
    let state = this.states[i];

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
router.setState = function (name, pattern, options = {}) {
  let state = {...options, name, pattern};

  router.states.push(state);

  return state;
};

/**
 * Remove state by name
 *
 * @param {string} name
 */
router.removeState = function (name) {
  for (let i = 0, l = this.states.length; i < l; i++) {
    let state = this.states[i];

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
  this.hashMode? this.setHashUrl(url): this.setHistoryUrl(url);
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
router.getUrlQuery = function() {
  return this.hashMode ? this.getHashUrlQuery() : this.getHistoryUrlQuery();
};

/**
 * Get query params using history
 *
 * @returns {object}
 */
router.getHistoryUrlQuery = function() {
  return request.paramsFromQuery(window.location.search.replace(/^\?/, ''));
};

/**
 * Get query params using hash
 *
 * @returns {object}
 */
router.getHashUrlQuery = function() {
  return request.paramsFromQuery((window.location.hash.split('?')[1] || ''));
};

/**
 * Create url by data
 *
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 */
router.createStateUrl = function (state, params = {}, query = {}, hash = '') {
  typeof state !== 'object' && (state = this.getState(state));

  let url = state.fullPattern.replace(this.__paramRegex, (m, f, v) => {
    return params[v] || '';
  });

  url = this.splitSlashes(url);

  if (Object.keys(query).length) {
    url += '?' + request.paramsToQuery(query);
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
  return url.replace(/[\/]+/g, '/');
};

/**
 * Clear all router dependencies
 */
router.clear = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
};

/**
 * Get state url content
 *
 * @param {string|Object} state
 * @param {string} url
 * @returns {object}
 */
router.getPatternContent = function (state, url) {
  typeof state !== 'object' && (state = this.getState(state));

  let keys = [];
  let i = 0;
  let params = {};

  url = url.split('?')[0];
  url = url.split('#')[0];

  let urlPattern = state.fullPattern.replace(this.__paramRegex, (m, f, v) => {
    keys.push(v);

    return '([^\\/]*)';
  });

  let regex = new RegExp(urlPattern);
  let isIncluded = url.match(regex);

  if (!isIncluded) {
    return null;
  }

  url.replace(regex, (m, v) => {
    v && (params[keys[i]] = v);
    i++;
  });

  return { params };
};

/**
 * Check the state is active now
 *
 * @param {string|Object} state
 * @param {boolean} includes
 * @returns {boolean}
 */
router.isActiveState = function(state, includes = false) {
  typeof state !== 'object' && (state = this.getState(state));

  let url = this.splitSlashes(this.getUrl().split('?')[0] + '/');
  let urlPattern = state.fullPattern.replace(this.__paramRegex, '([^\\/]*)');
  let str = includes? urlPattern: this.splitSlashes('^' + urlPattern + '\/$');
  let regex = new RegExp(str);

  return regex.test(url);
};

/**
 * Check the current url includes a state
 *
 * @param {string|Object} state
 * @returns {boolean}
 */
router.inActiveState = function(state) {
  return router.isActiveState(state, true);
};

/**
 * Get route component by level
 *
 * @param {number} level
 */
router.getRoute = function (level) {
  let i = 0;

  const find = (el) => {
    let route = el.child(this.__routeSelector);

    if (!route) {
      return null;
    }

    if (i == level) {
      return route;
    }

    i++;

    return find(route);
  };

  return find(Akili.root);
};

/**
 * Get the first match
 *
 * @param {array} arr
 * @param {string} url
 * @returns {object|null}
 */
router.getArrayPatternContent = function (arr, url) {
  for (let i = 0, l = arr.length; i < l; i++) {
    let state = arr[i];
    let content = this.getPatternContent(state, url);

    if (!content) {
      continue;
    }

    return {state: state, ...content};
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
  let states = [];

  for (let i = 0, l = this.states.length; i < l; i++) {
    let state = this.states[i];

    if (state.level < level) {
      continue;
    }
    else if (state.level > level) {
      break;
    }

    states.push(state);
  }

  return states;
};

/**
 * Change state
 */
router.changeState = function () {
  if (this.__disableChange) {
    delete this.__disableChange;

    return Promise.resolve();
  }

  let url = this.getUrl();
  let hash = this.hashMode? '': window.location.hash.replace('#', '');
  let query = this.getUrlQuery();
  let prevTransition = router.transition || null;
  let transition = router.transition = new Transition(url, query, hash, prevTransition);
  let level = 0;

  const next = (states, onEnd) => {
    if (!states.length) {
      return onEnd && onEnd();
    }

    let content = this.getArrayPatternContent(states, url);

    if (!content) {
      return onEnd && onEnd();
    }

    let state = content.state;
    let params = content.params;
    let route = state.abstract? null: this.getRoute(state.level);

    if (!route && !state.abstract) {
      throw new Error (`Not found route component for state "${state.name}"`);
    }

    transition.setPath({ state, params, query, hash, component: route, loaded: true });
    level++;

    let hasState = prevTransition && prevTransition.hasState(state);
    let isDifferent = true;

    if (hasState) {
      let route = prevTransition.getRoute(state);
      let prev = { params: route.params, query: route.query, hash: route.hash };
      let current = { params, query, hash };

      isDifferent = !utils.compare(prev, current);
    }

    let isHistory = this.__options.reload === undefined && !isDifferent;
    let isReload = this.__options.reload === false;

    transition.path.loaded = !(hasState && (isHistory || isReload));

    Promise.resolve(state.handler(transition)).then((data) => {
      if (transition.__cancelled) {
        return onEnd && onEnd();
      }

      transition.path.data = data;

      if (state.abstract) {
        return next(state.children, onEnd);
      }
 
      route.setTransition(transition).then(() => {
        next(state.children, onEnd);
      }).catch((err) => onEnd && onEnd(err));
    });
  };

  return new Promise((resolve, reject) => {
    next(this.getStatesByLevel(0), (err) => {
      if (err) {
        return reject(err);
      }

      if (!transition.routes.length) {
        if (this.__redirects) {
          return reject(new Error(`Wrong router default url "${this.defaultUrl}"`));
        }

        if (this.defaultUrl) {
          if (this.defaultUrl == this.getUrl()) {
            return reject(new Error(`Not found any routes`));
          }

          this.hashMode && (this.__disableChange = true);
          this.setUrl(this.defaultUrl);
          this.__redirects++;

          return this.changeState().then(resolve).catch(reject);
        }

        if (Akili.options.debug) {
          console.warn(`Not found a default route. You can pass it in "router.init(defaultUrl)" function`);
        }
      }
      
      if (!this.__options.saveScrollPosition && !transition.hash) {
        window.scrollTo(0, 0);
      }

      this.__options = {};
      this.__redirects = 0;

      if (prevTransition) {
        for (let i = level, l = prevTransition.routes.length; i < l; i++) {
          let route = prevTransition.routes[i];
          
          route.component && route.component.empty();
        }
      }

      window.dispatchEvent(new CustomEvent('state-change', {
        detail: transition
      }));

      resolve();
    });
  });
};

router.Transition = Transition;

export default router;
