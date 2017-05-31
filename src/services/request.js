import utils from '../utils.js';

export class Request {
  constructor(baseUrl, defaults) {
    this.baseUrl = baseUrl? (baseUrl.replace(/\/$/, '') + '/'): '';

    this.defaults = {
      statusErrorsPattern: /^([^23])|404/,
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
      let url;
      let xhr;

      options = {...this.defaults, ...(options || {})};

      xhr = new XMLHttpRequest();
      (typeof options.onStart == 'function') && options.onStart(xhr);
      options = this.transformBefore(options);
      url = this.baseUrl? `${this.baseUrl}${options.url.replace(/^\//, '')}`: options.url;
      xhr.open(options.method, url, true, options.user, options.password);
      options.headers = options.headers || {};

      if(options.json) {
        options.body = JSON.stringify(options.json);
        options.headers['content-type'] = 'application/json';
        options.responseType = options.responseType || 'json';
      }
      else if(options.form) {
        options.body = this.createFormData(options.form);
        options.headers['content-type'] = 'multipart/form-data';
      }

      if(options.hasOwnProperty('timeout')) {
        xhr.timeout = options.timeout;
      }

      if(options.responseType) {
        xhr.responseType = options.responseType;
      }

      if(options.withCredentials) {
        xhr.withCredentials = options.withCredentials;
      }

      if(options.headers) {
        for(let k in options.headers) {
          if(!options.headers.hasOwnProperty(k)) {
            continue;
          }

          xhr.setRequestHeader(k, options.headers[k]);
        }
      }

      if(options.params) {
        let str = this.paramsToQuery(options.params);

        if(str) {
          url += "?" + str;
        }
      }

      if(typeof options.onProgress == 'function') {
        xhr.onprogress = () => {
          return options.onProgress(xhr);
        };
      }

      xhr.onload = () => {
        let response = this.transformAfter(xhr);

        if((xhr.status + '').match(options.statusErrorsPattern)) {
          let err = new Error(`Request to "${url}" returns failure status code ${xhr.status}`);

          err.response = response;

          return reject(err);
        }

        resolve(response);
      };

      xhr.timeout = () => {
        reject(new Error(`Request to "${url}" timed out`));
      };

      xhr.onerror = (err) => {
        reject(err);
      };

      xhr.send(options.body);
    });
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

        return obj[k].map((v, i) => {
          return ks + `[${i}]` + eq + encodeURIComponent(v);
        }).join(sep);
      }
      else if(obj[k] && typeof obj[k] === 'object') {
        let opt = [];

        Object.keys(obj[k]).map((key) => {
          opt.push(ks + `[${key}]` + eq + encodeURIComponent(obj[k][key]));
        });

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

    for(let i = 0, l = amps.length; i <l; i++) {
      let eqs =  amps[i].split('=');
      let key = decodeURIComponent(eqs[0]);
      let val = decodeURIComponent(eqs[1]);

      if(!key) {
        continue;
      }

      if(Array.isArray(query[key])) {
        query[key].push(val);
      }
      else if(query[key]) {
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
   * @param {string} [namespace]
   *
   * @returns {FormData}
   */
  createFormData(obj, data = null, namespace = '') {
    let fd = data || new FormData();

    for(let k in obj) {
      if(obj.hasOwnProperty(k) && obj[k]) {
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
   * @param {object} options
   * @returns {object}
   */
  transformBefore(options) {
    return options;
  }

  /**
   * Transform data after a request
   *
   * @param {XMLHttpRequest} xhr
   * @returns {object}
   */
  transformAfter(xhr) {
    return {
      xhr: xhr,
      data: xhr.response,
      status: xhr.status
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
}

const request = new Request();

request.__instances = {};

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

Object.defineProperty(request, 'use', {
  get: () => {
    return request.__instances;
  }
});

request.Request = Request;
export default request;