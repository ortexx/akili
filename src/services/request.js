import utils from '../utils.js';
import Akili from '../akili.js';

/**
 * Request class.
 * An instance of this class allows you to make requests.
 * 
 * {@link https://akilijs.com/docs/requests}
 */
export class Request {
  __cache = {};

  /**
   * Constructor
   * 
   * @param {string} baseUrl
   * @param {object} [defaults] 
   */
  constructor(baseUrl, defaults) {
    this.baseUrl = baseUrl? (baseUrl.replace(/\/$/, '') + '/'): '';

    this.defaults = {
      statusErrorPattern: /^[^23]/,
      cache: false,
      ...(defaults || {})
    };
  }

  /**
   * Send request with any method
   *
   * @param {object} options
   * @returns {Promise}
   */
  query(options) {
    return new Promise((resolve, reject) => {
      options = {...this.defaults, ...(options || {})}; 
      options.url = this.baseUrl? `${this.baseUrl}${options.url.replace(/^\//, '')}`: options.url;  
      options.method = options.method || 'GET';
      
      let xhr = new XMLHttpRequest();      
      const before = this.transformBefore(xhr, options);
      xhr = before.xhr;
      options = before.options;
      (typeof options.onStart == 'function') && options.onStart(xhr);  
      options.headers = options.headers || {};
      
      if (options.json) {
        options.json !== true && (options.body = JSON.stringify(options.json));
        options.headers['content-type'] = 'application/json';
        options.responseType = options.responseType || 'json';
      }
      else if (options.form) {
        options.body = this.createFormData(options.form);
        options.headers['content-type'] = 'multipart/form-data';
      }

      if (options.params) {
        let str = this.paramsToQuery(options.params);
        str && (options.url += "?" + str);
      }
           
      let hash = null;
      let cache = typeof options.cache == 'function'? options.cache(options): options.cache;
      (!window.AKILI_SSR && !Akili.__init) && (cache = true);

      if(options.method.toUpperCase() == 'GET' && (!options.body || typeof options.body == 'string')) {
        hash = this.createCacheHash({ 
          url: options.url,
          method: options.method,
          user: options.user, 
          password: options.password, 
          body: options.body 
        });        
      }
      
      if(cache && hash) {        
        let _cache = this.getCache(hash);
        let now = new Date().getTime();

        if(_cache && (cache === true || now - _cache.createdAt <= cache)) {
          return resolve(this.transformAfter(_cache.result));
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

      let headerKeys = Object.keys(options.headers);

      for (let i = 0, l = headerKeys.length; i < l; i++) {
        let k = headerKeys[i];
        xhr.setRequestHeader(k, options.headers[k]);
      }

      if (typeof options.onProgress == 'function') {
        xhr.onprogress = () => {
          return options.onProgress(xhr);
        };
      }

      xhr.onload = () => {
        const result = {
          response: xhr.response,
          status: xhr.status,
          readyState: xhr.readyState,
          statusText: xhr.statusText,
          withCredentials: xhr.withCredentials,
          responseType: xhr.responseType,
          responseText: xhr.responseType == 'text'? xhr.responseText: '',
          responseXML: xhr.responseType == 'document'? xhr.responseXML: '',
          responseURL: xhr.responseURL,
          timeout: xhr.timeout,
          headers: this.getHeaders(xhr),         
        };

        const response = this.transformAfter(result);

        if (options.statusErrorPattern && (xhr.status + '').match(options.statusErrorPattern)) {
          let err = new Error(`Request to "${options.url}" returns failure status code ${xhr.status}`);
          err.response = response;
          return reject(err);
        } 

        (cache || window.AKILI_SSR) && hash && this.createCache(hash, result);
        resolve(response);
      };

      xhr.ontimeout = () => {
        reject(new Error(`Request to "${options.url}" timed out`));
      };

      xhr.onerror = reject;
      xhr.send(options.body);
    });
  }

  /**
   * Get headers of a XMLHttpRequest instance
   * 
   * @param {XMLHttpRequest}
   */
  getHeaders = function(xhr) {
    let headers = {};
    let str = xhr.getAllResponseHeaders();  
    let arr = str.split('\u000d\u000a');

    for (let i = 0, l = arr.length; i < l; i++) {
      let line = arr[i];
      let index = line.indexOf('\u003a\u0020');

      if (index > 0) {
        let key = line.substring(0, index);
        let val = line.substring(index + 2);
        headers[key] = val;
      }
    }

    return headers;
  }

  /**
   * Get cache
   * 
   * @param {string} hash
   * @returns {object}
   */
  getCache(hash) {
    return this.__cache[hash] || null;
  }

  /**
   * Create cache
   * 
   * @param {string} hash
   * @param {object} result
   */
  createCache(hash, result) {
    this.__cache[hash] = { result, createdAt: new Date().getTime() };
  }

  /**
   * Remove cache
   * 
   * @param {string} hash
   */
  removeCache(hash) {
    delete this.__cache[hash];
  }

  /**
   * Create a hash to save in the cache
   * 
   * @param {object} data
   * @returns {string}
   */
  createCacheHash(data) {
    return utils.createObjectHash(data);
  }

  /**
   * Convert object to query string
   *
   * @param {object} obj
   * @returns {string}
   */
  paramsToQuery(obj) {
    let sep = '&';
    let eq = '=';

    if (!obj || typeof obj !== 'object') {
      return '';
    }

    return Object.keys(obj).map((k) => {
      let ks = encodeURIComponent(k);

      if (Array.isArray(obj[k])) {
        ks = encodeURIComponent(k);
        return obj[k].map((v, i) => ks + `[${i}]` + eq + encodeURIComponent(v)).join(sep);
      }
      else if (obj[k] && typeof obj[k] === 'object') {
        let opt = [];
        Object.keys(obj[k]).map((key) => opt.push(ks + `[${key}]` + eq + encodeURIComponent(obj[k][key])));
        return opt.join(sep);
      }
      else {
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
  paramsFromQuery(str) {
    let query = {};
    let amps = str.split('&');

    for (let i = 0, l = amps.length; i <l; i++) {
      let eqs =  amps[i].split('=');
      let key = decodeURIComponent(eqs[0]);
      let val = decodeURIComponent(eqs[1]);

      if (!key) {
        continue;
      }

      if (Array.isArray(query[key])) {
        query[key].push(val);
      }
      else if (query[key]) {
        query[key] = [query[key], val];
      }
      else {
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
  createFormData(obj, data = null, namespace = '') {
    let fd = data || new FormData();

    for (let k in obj) {
      if (obj.hasOwnProperty(k) && obj[k]) {
        let key = namespace? namespace + '[' + k + ']': k;

        if (obj[k] instanceof Date) {
          fd.append(key, obj[k].toISOString());
        }
        else if (utils.isPlainObject(obj[k])) {
          this.createFormData(obj[k], fd, key);
        }
        else {
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
  transformBefore(xhr, options) {
    return { xhr, options }
  }

  /**
   * Transform data after a request
   *
   * @param {object} result
   * @returns {object}
   */
  transformAfter(result) {
    return {
      ...result,
      data: result.response,
    };
  }

  /**
   *  Make GET request
   *
   * @param {string} url
   * @param {object} options
   * @returns {Promise}
   */
  get(url, options = {}) {
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
  delete(url, options = {}) {
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
  post(url, options = {}) {
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
  put(url, options = {}) {
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
  patch(url, options = {}) {
    options.url = url;
    options.method = 'PATCH';

    return this.query(options);
  }

   /**
   *  Make HEAD request
   *
   * @param {string} url
   * @param {object} options
   * @returns {Promise}
   */
  head(url, options = {}) {
    options.url = url;
    options.method = 'HEAD';

    return this.query(options);
  }
}

const request = new Request();

/**
 * Set router's default variables
 */
request.setDefaults = function () {
  this.__instances = {};
  this.__cache = {};
}

/**
 * Add new request instance to the main service
 *
 * @param {string} name
 * @param {Request} instance
 */
request.addInstance = function(name, instance) {
  this.__instances[name] = instance;
};

/**
 * Remove instance
 *
 * @param {string} name
 */
request.removeInstance = function(name) {
  delete this.__instances[name];
};

/**
 * Deinit router
 */
request.deinit = function() {
  this.setDefaults();
};


Object.defineProperty(request, 'use', {
  get: () => {
    return request.__instances;
  }
});

request.Request = Request;
export default request;
request.setDefaults();