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
  constructor(url, previous = null) {  
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
  redirect(state, params = {}, query = {}, hash = undefined, options = {}) {
    options = { ...router.transition.path.options, ...options };
    this.cancel();   
    return router.state.call(router, state, params, query, hash, options);
  }

  /**
   * Reload the current state
   * 
   * @see Transition.prototype.redirect
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
   * Check the route is changed
   * 
   * @param {object} route
   */
  isRouteChanged(route) {
    if(!this.previous) {
      return true;
    }

    const state = route.state;

    if(!this.previous.hasState(state)) {
      return true;
    }

    const paramKeys = [];
    state.fullPattern.replace(router.__paramRegex, (m, f, v) => paramKeys.push(v));
    
    for(let key in state.params) {
      if(paramKeys.indexOf(key) == -1) {
        paramKeys.push(key);
      }
    }

    const queryKeys = Object.keys(state.query);
    const watchHash = state.hash !== undefined;    
    const prevRoute = this.previous.getRoute(state); 

    const prev = { 
      params: utils.includeKeys(prevRoute.params, paramKeys), 
      query: utils.includeKeys(prevRoute.query, queryKeys)
    };

    const current = {
      params: utils.includeKeys(route.params, paramKeys),
      query: utils.includeKeys(route.query, queryKeys)
    }

    if(watchHash) {
      prev.hash = prevRoute.hash;
      current.hash = route.hash;
    }

    return !utils.compare(prev, current);
  }

  /**
   * Cancel the current transition
   */
  cancel() {   
    this.__cancelled = true;
    this.finish();
  }

  /**
   * Finish the transition
   */
  finish() {
    this.__finised = true;
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

  options = { ...options };
  options.manual = true;
  ({ params, query, hash, options } = this.prepareStateArgs(state, params, query, hash, options, false));  
  let url = this.createStateUrl(state, params, query, hash, options);    
  this.isolate(() => this.setUrl(url));
  return this.changeState(options);
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
router.location = function (url, options = {}) {
  options = { ...options };
  options.manual = true;
  this.isolate(() => this.setUrl(url));  
  return this.changeState(options);
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
  this.hashMode? this.replaceHashUrl(url): this.replaceHistoryUrl(url);
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
 * @param {object} [options]
 * @param {boolean} [prepare]
 */
router.createStateUrl = function (state, params = {}, query = {}, hash = undefined, options = {}, prepare = true) {
  typeof state !== 'object' && (state = this.getState(state));
  options = { ...options };
  
  if(prepare) {
    ({ params, query, hash, options } = this.prepareStateArgs(state, params, query, hash, options));
  }

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
 * Prepare the state arguments
 * 
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 * @param {object} [options]
 */
router.prepareStateArgs = function (state, params = {}, query = {}, hash = undefined, options = {}) {
  let args = { params, query, hash, options };

  for(let i = 0; i < 9; i++) {
    const paramsTemp = this.prepareStateParams(state, params, args);
    const queryTemp = this.prepareStateQuery(state, query, args);
    const hashTemp = this.prepareStateHash(state, hash, args);
    
    if(hashTemp === null) {
      options.emptyHash = null;
    }
    else if(hashTemp === '') {
      options.emptyHash = '';
    }

    args = { params: paramsTemp, query: queryTemp, hash: hashTemp, options };
  }
    
  return args;
}

/**
 * Prepare the state params
 * 
 * @param {string|Object} state
 * @param {object} params
 * @param {object} [args]
 */
router.prepareStateParams = function(state, params, args) {
  typeof state !== 'object' && (state = this.getState(state));
  const list = [params];
  const states = state.name.split('.');

  for(let i = 0, l = states.length; i < l; i++) {
    let current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).params);
  }

  return this.createStateArgs(list, args);
}

/**
 * Prepare the state query
 * 
 * @param {string|Object} state
 * @param {object} query
 * @param {object} [args]
 */
router.prepareStateQuery = function(state, query, args) {  
  typeof state !== 'object' && (state = this.getState(state));
  const list = [query];
  const states = state.name.split('.');  

  for(let i = 0, l = states.length; i < l; i++) {
    const current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).query);
  }
 
  return this.createStateArgs(list, args);
}

/**
 * Merge list items as transition objects
 * 
 * @param {object[]} list
 * @param {object} [args]
 */
router.createStateArgs = function (list, args = { params: {}, query: {} }) {
  const all = {};
  const excluded = {};

  for(let i = 0, l = list.length; i < l; i++) {
    const obj = list[i];
    const keys = Object.keys(obj);
 
    for(let k = 0, c = keys.length; k < c; k++) {
      let key = keys[k];
      let val = obj[key];

      if(excluded[key]) {
        continue;
      }

      val = typeof val == 'function'? val(args): val;

      if(val === undefined) {
        continue;
      }

      if(val === null) {
        delete all[key];
        excluded[key] = true;
        continue;
      }

      all[key] = val;
    }
  }

  return all; 
}

/**
 * Prepare the state hash
 * 
 * @param {string|Object} state
 * @param {string} hash
 * @param {object} [args]
 */
router.prepareStateHash = function(state, hash, args) {
  if(hash === null) {
    return hash;
  }

  typeof state !== 'object' && (state = this.getState(state));
  const states = state.name.split('.');

  for(let i = 0, l = states.length; i < l; i++) {
    const current = states.slice(0, states.length - i).join('.');
    let val = this.getState(current).hash;
    val = typeof val == 'function'? val(args): val;

    if(val === undefined) {
      continue;
    }

    if(val === null) {
      return null;
    }

    hash = val;
  }

  return hash;
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
  let url = router.transition && !router.transition.__finished? router.transition.url: this.getUrl();
  url = this.splitSlashes('/' + url.split('?')[0] + '/');
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
 * 
 * @param {object} [options]
 */
router.changeState = function (options = {}) {    
  if(this.__isolated) {
    return Promise.resolve();
  }
  
  let url = this.getUrl();
  let params = {};
  let query = this.getUrlQuery();  
  let hash = this.hashMode? '': window.location.hash.replace('#', ''); 
  let prevTransition = router.transition || null;
  let transition = router.transition = new Transition(url, prevTransition);
  let level = 0;
  
  window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));

  const next = (states) => {    
    if (!states.length) {
      return Promise.resolve();
    }

    let content = this.getArrayPatternContent(states, url);

    if (!content) {
      return Promise.resolve();
    }

    let state = content.state; 
    transition.setPath({ state, component: route });    
    params = { ...params, ...content.params };
    hash = hash || options.emptyHash;
    ({ params, query, hash, options } = this.prepareStateArgs(state, params, query, hash, options));     
    hash = hash || '';
    let realUrl = this.createStateUrl(state, params, query, hash, options, false); 
    this.isolate(() => this.replaceUrl(realUrl)); 
    let route = state.abstract? null: this.getRoute(level);
    
    if (!route && !state.abstract) {      
      throw new Error (`Not found route component for state "${state.name}"`);
    }    

    transition.path.params = params;
    transition.path.query = query;
    transition.path.hash = hash;
    transition.path.url = realUrl;
    transition.path.options = options;
    !state.abstract && level++;
    let isDifferent = true;

    if(realUrl != url) {
      isDifferent = transition.isRouteChanged(transition.path);
    }
       
    let load = isDifferent && options.reload !== false;

    return Promise.resolve(load? state.handler(transition): transition.path.data).then((data) => {       
      transition.path.data = data;
      state.title && (document.title = typeof state.title == 'function'? state.title(transition): state.title);

      if (transition.__cancelled) {
        return;
      }

      if (state.abstract) {
        return;
      }

      const prevRoute = transition.previous && transition.previous.getRoute(state);
      (prevRoute && !prevRoute.loaded) && (load = true);
      return route.setTransition(transition, load).then(() => transition.path.loaded = true);
    }).then(() => {
      return next(state.children);
    });
  };

  return next(this.getStatesByLevel(0)).then(() => {
    if (!transition.routes.length) {
      if (this.__redirects) {
        throw new Error(`Wrong router default url "${this.defaultUrl}"`);
      }

      if (this.defaultUrl) {
        if (this.defaultUrl == this.getUrl()) {
         throw new Error(`Not found any routes`);
        }

        this.isolate(() => this.replaceUrl(this.defaultUrl));          
        this.__redirects++;
        return this.changeState();
      }
      
      if (Akili.options.debug) {
        // eslint-disable-next-line no-console
        console.warn(`Not found a default route. You can pass it in "router.init(defaultUrl)" function`);
      }
    }
    
    if (!options.saveScrollPosition && (!transition.path || !transition.path.hash)) {
      window.scrollTo(0, 0);
    }

    this.__redirects = 0;
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
export default router;
router.setDefaults();