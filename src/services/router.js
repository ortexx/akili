import Akili from '../akili.js';
import utils from '../utils.js';
import request from './request.js';
import Route from '../components/route.js';

/**
 * Transition class.
 * An instance of this class consists the last actual router transition information.
 * 
 * {@link https://akilijs.com/docs/routing#docs_transition}
 */
export class Transition {
  constructor(previous = null) {    
    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = {};
    this.__cancelled = false;
  }

  /**
   * Redirect to another state
   * 
   * @see router.state
   */
  redirect() {
    this.cancel();   
    router.state.apply(router, arguments);
  }

  /**
   * Reload the current state
   * 
   * @param {object} [params]
   * @param {object} [query]
   * @param {string} [hash]
   * @param {object} [options]
   */
  reload(params = {}, query = {}, hash = undefined, options = {}) {
    params = { ...this.path.params, ...params };
    query = { ...this.path.query, ...query };
    hash = hash === undefined? this.path.hash: hash;
    return this.redirect(this.path.state.name, params, query, hash, options);
  }

  /**
   * Set the current path
   * 
   * @param {object} path 
   */
  setPath(path) {
    path.parent = this.path || null;
    this.path = { params: {}, query: {}, ...path };
    this.routes.push(this.path);
    this.states[this.path.state.name] = this.path;
  }

  /**
   * Get a route by the state
   *  
   * @param {*} state 
   */
  getRoute(state) {
    for (let i = 0, l = this.routes.length; i < l; i++) {
      let route = this.routes[i];

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
  hasState(state) {
    return !!this.states[state.name];
  }

  /**
   * Cancel the current transition
   */
  cancel() {
    this.__cancelled = true;
  }
}

/**
 * Akili router
 * 
 * {@link https://akilijs.com/docs/routing}
 */
const router = {};

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
  this.__paramRegex = /(\/?:([\w\d-]+))/g;
  this.__routeSelector = c => c instanceof Route;
}

/**
 * Add new state to the router
 *
 * @param {string} name - state name. To set parents you can use dot, e.g. 'app.article.edit'
 * @param {string} pattern - url pattern like 'app/article/:id'
 * @param {object} [options]
 * @returns {router}
 */
router.add = function (name, pattern, options = {}) {
  if(typeof name == 'object') {
    options = name;
    pattern = options.pattern;
    name = options.state;
    delete options.pattern;
    delete options.state;
  }

  if(!name) {
    throw new Error(`Router state must have a name`);
  }

  const defaultOptions = {
    template: '',
    templateUrl: '',
    abstract: false,
    component: null,
    params: {},
    query: {},
    hash: null,
    handler: () => {},
  };

  if(Akili.options.debug && options.component && (options.template || options.templateUrl)) {
    // eslint-disable-next-line no-console
    console.warn(`Router state "${name}" must only have a component or template option`);
  } 

  if (!options.template && !options.templateUrl && !options.component) {
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
 * @param {string} state
 * @param {object} [params] - params for state {id: 1} => '/app/:id' => '/app/1'
 * @param {object} [query] - query {x: 1} => '/app/?x=1'
 * @param {string} [hash]
 * @param {object} [options]
 */
router.state = function (state, params = {}, query = {}, hash = undefined, options = {}) {
  typeof state !== 'object' && (state = this.getState(state));
  
  if (!state) {
    throw new Error(`Not found route state with name ${state}`);
  }

  let url = this.createStateUrl(state, params, query, hash);  
  this.__options = options;
  this.__options.manual = true;
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
  this.__options.manual = true;

  if (this.hashMode) {
    let current = window.location.hash.replace('#', '');
    window.location.hash = url;
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    router.changeState().catch((err) => console.error(err));
    return res;
  };

  this.__onStateChangeHandler = () => {
    // eslint-disable-next-line no-console
    this.changeState().catch((err) => console.error(err));
  };

  this.defaultUrl = defaultUrl;
  this.hashMode = hashMode;

  this.states.sort((a, b) => {
    a = a.name.split('.').length;
    b = b.name.split('.').length;
    return a - b;
  });

  for (let i = 0, l = this.states.length; i < l; i++) {
    this.initState(this.states[i]);
  }

  if (!this.states.length && Akili.options.debug) {
    // eslint-disable-next-line no-console
    console.warn(`You didn't add any routes to the router`);
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
  let parents = [];
  state.children = [];
  parents = state.name.split('.');
  parents.pop();
  state.level = state.abstract? null: parents.length;

  if (parents.length) {
    let parentName = parents.join('.');
    let parent = this.getState(parentName);

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
 * @param {boolean} [prepare=true]
 */
router.createStateUrl = function (state, params = {}, query = {}, hash = undefined, prepare = true) {
  typeof state !== 'object' && (state = this.getState(state));
  prepare && (params = this.prepareStateParams(state, params));
  prepare && (query = this.prepareStateQuery(state, query));
  prepare && (hash = this.prepareStateHash(state, hash));
  let url = state.fullPattern.replace(this.__paramRegex, (m, f, v) => '/' + (params[v] || ''));
  url = url.replace(/^\^/, '');
  url = this.splitSlashes(url);

  if (Object.keys(query).length) {
    url += '?' + request.paramsToQuery(query);
  }

  if (!this.hashMode && hash) {
    url += '#' + hash.replace('#', '');
  }

  return url;
};

/**
 * Prepare the state params
 * 
 * @param {string|Object} state
 * @param {object} params
 */
router.prepareStateParams = function(state, params) {
  typeof state !== 'object' && (state = this.getState(state));  
  let allParams = {};  
  let lastState = '';
  const defaultParams = {};
  const states = state.name.split('.');

  for(let i = 0, l = states.length; i < l; i++) {
    let current = lastState + states[i];
    allParams = { ...allParams, ...this.getState(current).params };
    lastState = current + '.';
  }

  const paramKeys = Object.keys(allParams);
 
  for(let i = 0, l = paramKeys.length; i < l; i++) {
    let key = paramKeys[i];
    let val = allParams[key];
    defaultParams[key] = typeof val == 'function'? val(router.transition, params[key]): val;
  }

  return {...defaultParams, ...params};  
}

/**
 * Prepare the state query
 * 
 * @param {string|Object} state
 * @param {object} query
 */
router.prepareStateQuery = function(state, query) {
  typeof state !== 'object' && (state = this.getState(state)); 
  let allQuery = {};
  let lastState = '';
  const defaultQuery = {};
  const states = state.name.split('.');

  for(let i = 0, l = states.length; i < l; i++) {
    const current = lastState + states[i];
    allQuery = { ...allQuery, ...this.getState(current).query };
    lastState = current + '.';
  }

  const queryKeys = Object.keys(allQuery);
 
  for(let i = 0, l = queryKeys.length; i < l; i++) {
    let key = queryKeys[i];
    let val = allQuery[key];
    defaultQuery[key] = typeof val == 'function'? val(router.transition, query[key]): val;
  }

  return {...defaultQuery, ...query};  
}

/**
 * Prepare the state hash
 * 
 * @param {string|Object} state
 * @param {string} hash
 */
router.prepareStateHash = function(state, hash) {
  if(hash !== undefined) {
    return hash;
  }

  typeof state !== 'object' && (state = this.getState(state));
  const states = state.name.split('.');
  let lastState = '';

  for(let i = 0, l = states.length; i < l; i++) {
    const current = lastState + states[i];
    const currentHash = this.getState(current).hash;
    currentHash !== undefined && (hash = currentHash);
    lastState = current + '.';
  }

  return hash || '';
}

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
  typeof state !== 'object' && (state = this.getState(state));
  let keys = [];
  let params = {};

  url = url.split('?')[0];
  url = url.split('#')[0];

  let urlPattern = state.fullPattern.replace(this.__paramRegex, (m, f, v) => {
    keys.push(v);
    return '/?([^/]*)';
  });

  urlPattern = urlPattern.replace(/([^^/]+)[/]+$/, '$1');
  let regex = new RegExp(urlPattern, 'g');
  let isIncluded = url.match(regex);
  
  if (!isIncluded) {
    return null;
  }

  url.replace(regex, (m, ...args) => { 
    args = args.slice(0, args.length - 2);

    for(let i = 0, l = args.length; i < l; i++) {
      let v = args[i];
      v && (params[keys[i]] = v);
    }  
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
  let url = this.splitSlashes('/' + this.getUrl().split('?')[0] + '/');
  let urlPattern = state.fullPattern.replace(this.__paramRegex, '/?([^/]*)');
  urlPattern = urlPattern.replace(/^\^/, '').replace(/\$$/, '');
  let str = includes? urlPattern: this.splitSlashes('^/' + urlPattern + '/$');
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

    return { state: state, ...content };
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
 * Reload the state
 * 
 * @see Transition.reload
 */
router.reload = function(...args) {
  if(!this.transition) {
    throw new Error('Not found an active transition to reload the state');
  }

  return this.transition.reload(...args);
}

/**
 * Isolate the function to not trigger router handlers inside
 *
 * @param {function} fn
 * @returns {*}
 */
router.isolate = function (fn) {
  this.__isolated = true;
  let res = fn();
  this.__isolated = false;
  return res;
}

/**
 * Change state
 */
router.changeState = function () {    
  if(this.__isolated) {
    return Promise.resolve();
  }
  
  let url = this.getUrl();
  let params = {};
  let query = this.getUrlQuery();  
  let hash = this.hashMode? '': window.location.hash.replace('#', ''); 
  let prevTransition = router.transition || null;
  let transition = router.transition = new Transition(prevTransition);
  let level = 0;
  let componentLevel = 0;
   
  window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));

  const next = (states, onEnd) => {    
    if (!states.length) {
      return onEnd && onEnd();
    }

    let content = this.getArrayPatternContent(states, url);

    if (!content) {
      return onEnd && onEnd();
    }

    let state = content.state;
    transition.setPath({ state, component: route, loaded: true });
    let currentUrl = this.createStateUrl(state, content.params, query, hash, false);
    params = this.prepareStateParams(state, { ...params, ...content.params });
    query = this.prepareStateQuery(state, query);
    hash = this.prepareStateHash(state, hash || (!this.__options.manual? undefined: '')) || '';
    let realUrl = this.createStateUrl(state, params, query, hash, false); 
    currentUrl != realUrl && this.isolate(() => this.setUrl(realUrl));   
    let route = state.abstract? null: this.getRoute(componentLevel);

    if (!route && !state.abstract) {
      throw new Error (`Not found route component for state "${state.name}"`);
    }    

    transition.path.params = params;
    transition.path.query = query;
    transition.path.hash = hash;
    transition.path.url = realUrl;
    !state.abstract && componentLevel++;
    level++;    

    let hasState = prevTransition && prevTransition.hasState(state);
    let isDifferent = true;
     
    if (hasState && this.__options.manual && realUrl != url) {
      let route = prevTransition.getRoute(state);      
      let prev = { params: route.params, query: route.query, hash: route.hash };
      let current = { params, query, hash };
      isDifferent = !utils.compare(prev, current);
    }   
    
    transition.path.loaded = isDifferent && this.__options.reload !== false;
    
    Promise.resolve(transition.path.loaded? state.handler(transition): transition.path.data).then((data) => {  
      if (transition.__cancelled) {
        return onEnd && onEnd();
      }
      
      transition.path.data = data;
      state.title && (document.title = typeof state.title == 'function'? state.title(transition): state.title);

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

          this.isolate(() => this.setUrl(this.defaultUrl));          
          this.__redirects++;
          return this.changeState().then(resolve).catch(reject);
        }
        
        if (Akili.options.debug) {
          // eslint-disable-next-line no-console
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
export default router;
router.setDefaults();