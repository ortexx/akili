import Akili from '../akili.js';
import utils from '../utils.js';
import request from './request.js';
import Route from '../components/route.js';

/**
 * Transition class.
 * The instance of this class includes the last actual router transition information.
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
    this.__finished = false;
  }

  /**
   * Redirect to another state
   * 
   * @see router.state
   */
  redirect(state, params = {}, query = {}, hash = undefined, options = {}) {
    options = { ...this.path.options, ...options };
    this.cancel();   
    return router.state.call(router, state, params, query, hash, options);
  }

  /**
   * Reload the current state
   * 
   * @see router.state
   */
  reload(params = {}, query = {}, hash = undefined, options = {}) {
    options = { ...this.path.options, ...options };
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
    this.__finished = true;
    delete this.previous;
    const index = router.__queue.indexOf(this);
    index >= 0 && router.__queue.splice(index, 1);
  }
}

/**
 * Akili router
 * 
 * {@link https://akilijs.com/docs/routing}
 */
const router = {};

router.baseUrl = "/";
router.states = [];
router.hashMode = true;
router.transition = null;
router.__info = {};
router.__queue = [];
router.__redirects = 0;
router.__init = false;
router.__paramRegex = /(\/?:([\w\d-]+))/g;
router.__routeSelector = c => c instanceof Route;

/**
 * Add a new state
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
    options: {}
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
 * Remove the state
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
 * Check the state exists
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
 * Change the state
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
 * Go to some position
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
 * Change the state by the url
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
 * Initialize the router. 
 * Must be called before Akili.init()
 *
 * @param {string} [defaultUrl]
 * @param {boolean} [hashMode=true]
 */
router.init = function (defaultUrl = '', hashMode = true) {
  let oldPushState = window.history.pushState;

  window.history.pushState = function() {
    let res = oldPushState.apply(this, arguments);
    // eslint-disable-next-line no-console
    router.changeState().catch(err => console.error(err));
    return res;
  };

  this.__onStateChangeHandler = () => {
    // eslint-disable-next-line no-console
    this.changeState().catch(err => console.error(err));
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
 * Get the state by the name
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
 * Set the state
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
 * Remove the state by the name
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
 * Set the url
 *
 * @param {string} url
 */
router.setUrl = function (url) {
  this.hashMode? this.setHashUrl(url): this.setHistoryUrl(url);
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
  this.hashMode? this.replaceHashUrl(url): this.replaceHistoryUrl(url);
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
router.getUrlQuery = function() {
  return this.hashMode ? this.getHashUrlQuery() : this.getHistoryUrlQuery();
};

/**
 * Get the query params using the history
 *
 * @returns {object}
 */
router.getHistoryUrlQuery = function() {
  return request.paramsFromQuery(window.location.search.replace(/^\?/, ''));
};

/**
 * Get the query params using the hash
 *
 * @returns {object}
 */
router.getHashUrlQuery = function() {
  return request.paramsFromQuery((window.location.hash.split('?')[1] || ''));
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

  for(let i = 0; i < 4^4; i++) {
    const paramsTemp = this.prepareStateParams(state, params, args);
    const queryTemp = this.prepareStateQuery(state, query, args);
    const hashTemp = this.prepareStateHash(state, hash, args);
    const optionsTemp = this.prepareStateOptions(state, options, args);

    if(hashTemp === null) {
      optionsTemp.emptyHash = null;
    }
    else if(hashTemp === '') {
      optionsTemp.emptyHash = '';
    }

    const newArgs = { params: paramsTemp, query: queryTemp, hash: hashTemp, options: optionsTemp };

    if(utils.compare(newArgs, args)) {
      break;
    }

    args = newArgs;
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
  const states = state.name.split('.');
  params = Object.assign({}, params);

  for(let i = states.length - 1; i >= 0; i--) {
    const current = states.slice(0, states.length - i).join('.');
    params = this.createStateObjectArgs(params, this.getState(current).params, args);
  }

  return params;
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
  const states = state.name.split('.');
  query = Object.assign({}, query);

  for(let i = states.length - 1; i >= 0; i--) {
    const current = states.slice(0, states.length - i).join('.');
    query = this.createStateObjectArgs(query, this.getState(current).query, args);
  }

  return query;
}

/**
 * Prepare the state options
 * 
 * @param {string|Object} state
 * @param {object} options
 * @param {object} [args]
 */
router.prepareStateOptions = function(state, options, args) {  
  typeof state !== 'object' && (state = this.getState(state));
  const states = state.name.split('.');
  options = Object.assign({}, options);

  for(let i = states.length - 1; i >= 0; i--) {
    const current = states.slice(0, states.length - i).join('.');
    options = this.createStateObjectArgs(options, this.getState(current).options, args);
  }

  return options;
}

/**
 * Create the state arguments
 * 
 * @param {object} current
 * @param {object} defaults
 * @param {object} [args]
 */
router.createStateObjectArgs = function (current, defaults, args = { params: {}, query: {}, options: {} }) {
  const all = Object.assign({}, current);

  for(let key in defaults) {
    let val = defaults[key];

    if(all[key] === null) {
      continue;
    }

    if(typeof val == 'function') {
      all[key] = val(args);
    }

    if(all[key] === undefined) {
      all[key] = val;
    }
  }

  for(let key in all) {
    if(all[key] === null) {
      delete all[key];
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

  for(let i = states.length - 1; i >= 0; i--) {
    const current = states.slice(0, states.length - i).join('.');
    hash = this.createStateHashArgs(hash, this.getState(current).hash, args);
  }
  
  return hash;
}

/**
 * Create the state hash arguments
 * 
 * @param {string|null} current
 * @param {string|null} defaults
 * @param {object} [args]
 */
router.createStateHashArgs = function (current, defaults, args = { params: {}, query: {} }) {
  if(current === null) {
    return current;
  }

  if(typeof defaults == 'function') {
    return defaults(args);
  }

  if(current === undefined) {
    return defaults;
  }

  return current;
}

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
 * Check the state is active
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
 * Check the current url includes the state
 *
 * @param {string|Object} state
 * @returns {boolean}
 */
router.inActiveState = function(state) {
  return router.isActiveState(state, true);
};

/**
 * Get the route component by the level
 *
 * @param {number} level
 */
router.getRoute = function (level) {
  let i = 0;

  const find = el => {
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
 * Get the patterns array info
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

    return { state, ...content };
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
 * Isolate the function
 *
 * @param {function} fn
 * @returns {*}
 */
router.isolate = function (fn) { 
  this.__isolated = true;
  let res;

  try {
    res = fn();
  }
  catch(err) {
    this.__isolated = false;
    throw err;
  }

  this.__isolated = false
  return res;
}

/**
 * Change the state
 * 
 * @param {object} [options]
 */
router.changeState = function (options = {}) {    
  if(this.__isolated) {
    return Promise.resolve();
  }

  let url = this.getUrl();
  let transition = new Transition(url);  
  this.__queue.push(transition);
  
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if(this.__queue[0] === transition) {       
        clearInterval(interval);
        resolve();
      }
    });
  }).then(() => {   
    transition.previous = router.transition || null;
    router.transition = transition;
    window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));   
    const emptyHash = options.emptyHash;
    
    if(!this.__redirects) {
      const docStyle = getComputedStyle(document.documentElement);
      this.__info.scrollPos = { left: window.scrollX, top: window.scrollY };      
      this.__info.docMinHeight = docStyle.minHeight;
      this.__info.docMinWidth = docStyle.minWidth;    
      document.documentElement.style.minHeight = document.documentElement.offsetHeight + 'px';
      document.documentElement.style.minWidth = document.documentElement.offsetWidth + 'px';
    }
   
    let params = {};
    let query = this.getUrlQuery();
    let hash = this.hashMode? '': window.location.hash.replace('#', '');
    let level = 0;

    const next = states => {
      if (!states.length) {
        return Promise.resolve();
      }

      let content = this.getArrayPatternContent(states, url);

      if (!content) {
        return Promise.resolve();
      }

      let state = content.state;
      let route = state.abstract? null: this.getRoute(level);
      transition.setPath({ state, component: route });
      params = { ...params, ...content.params };
      hash = hash || emptyHash;
      ({ params, query, hash, options } = this.prepareStateArgs(state, params, query, hash, options));  
      options.init = Akili.__init === null;
      hash = hash || '';
      let realUrl = this.createStateUrl(state, params, query, hash, options, false); 
      this.isolate(() => this.replaceUrl(realUrl)); 
      
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
      const prevData = transition.previous && transition.previous.path? transition.previous.path.data: undefined;

      return Promise.resolve(load? state.handler(transition): prevData).then(data => {
        transition.path.data = data;

        if (transition.__cancelled) {
          return;
        }

        state.title !== undefined && (document.title = typeof state.title == 'function'? state.title(transition): state.title);

        if (state.abstract) {
          return;
        }

        const prevRoute = transition.previous && transition.previous.getRoute(state);
        ((prevRoute && !prevRoute.loaded) || options.reload === true) && (load = true);
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
          transition.finish();
          return this.changeState(options);
        }
        
        if (Akili.options.debug) {
          // eslint-disable-next-line no-console
          console.warn(`Not found a default route. You can pass it in "router.init(defaultUrl)" function`);
        }
      }

      if(
        (this.hashMode || !transition.path || !transition.path.hash) && 
        (options.reload !== false || options.saveScrollPosition !== undefined) &&
        options.saveScrollPosition !== null
      ) {
        window.scrollTo({ ...options.saveScrollPosition? this.__info.scrollPos: { top: 0, left: 0 } });
      }

      document.documentElement.style.minHeight = this.__info.docMinHeight;
      document.documentElement.style.minWidth = this.__info.docMinWidth;
      this.__redirects = 0;
      this.__info = {};
      window.dispatchEvent(new CustomEvent('state-changed', { detail: transition }));      
      transition.finish();
      return transition;
    });
  }).catch(err => {
    transition && transition.finish();
    throw err;
  })
};

/**
 * Deinitialize the router
 */
router.deinit = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
  this.__init = false;
};

router.Transition = Transition;
export default router;
