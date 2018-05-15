import EventEmitter from './event-emitter.js'

/**
 * An object with a lot of useful functions
 * 
 * {@link https://akilijs.com/docs/utils}
 */
const utils = {};

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
  if (!obj || typeof obj !== 'object') {
    return '';
  }

  let classes = [];
  let keys = Object.keys(obj);

  for (let i = 0, l = keys.length; i < l; i++) {
    let k = keys[i];
    let val = obj[k];
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
utils.style = function(obj) {
  if (!obj || typeof obj !== 'object') {
    return '';
  }

  let styles = [];
  let keys = Object.keys(obj);

  for (let i = 0, l = keys.length; i < l; i++) {
    let k = keys[i];
    let val = obj[k];
    val && styles.push(`${this.toDashCase(k)}:${val}`);
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
utils.split = function(str, del = '', exclude = []) {
	const exps = [];     
  let last = '';

  if(!del) {
    return str.split('');
  }
  else if(del instanceof RegExp) {
    return str.split(del);
  }
  else if(str.indexOf(del) == -1) {
    last = str;
  }
  else {
    const arr = str.split('');
    let open = ''; 

    for(let i = 0, l = arr.length; i < l; i++) {
      let val = arr[i];
      let index = exclude.indexOf(val);      

      if(index > -1 && (!open || open == val)) {
        !open? open = exclude[index]: open = '';
      }

      if(val == del && !open) {
        exps.push(last);
        last = '';
        continue;
      }

      last += val;
    }
  }

  last && exps.push(last);
  return exps;
}

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
utils.filter = function (arr, handler, keys = null) {
  let res = [];

  if (keys && !Array.isArray(keys)) {
    keys = [keys];
  }

  if(typeof handler != 'function') {
    const str = handler? (handler + '').toLowerCase(): '';
    handler = val => (val? (val + '').toLowerCase(): '').match(str);
  }

  for (let i = 0, l = arr.length; i < l; i++) {
    let item = arr[i];
    let filtered = false;

    if(!keys && handler(item)) {
      filtered = true;
    }
    else if(keys) {
      for(let k = 0, c = keys.length; k < c; k++) {
        let key = keys[k];
        key = Array.isArray(key)? key: [key];
        let val = key? this.getPropertyByKeys(key, item): item;
    
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
utils.sort = function(arr, keys = true, order = []) {
  arr = arr.slice();

  if (keys === true) {
    keys = [];
    order = [true];
  }
  else if (keys === false) {
    keys = [];
    order = [false];
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  if (!Array.isArray(order)) {
    order = [order];
  }

  let l = keys.length;

  arr.sort((a, b) => {
    let i = 0;

    const check = (a, b, reverse = false) => {
      if (a instanceof Date) {
        a = a.getTime();
      }

      if (b instanceof Date) {
        b = b.getTime();
      }

      if (a > b) {
        return reverse? -1: 1;
      }
      else if (a < b) {
        return reverse? 1: -1;
      }

      return 0;
    };

    const next = () => {
      if (i >= l) {
        return 0;
      }

      let key = keys[i];

      if (!Array.isArray(key)) {
        key = [key];
      }

      let aV = this.getPropertyByKeys(key, a);
      let bV = this.getPropertyByKeys(key, b);
      let res = check(aV, bV, order[i] === false);

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
utils.includeKeys = function(obj, keys) {
  let newObj = {};
  let objKeys = Object.keys(obj);

  for(let i = 0, l = objKeys.length; i < l; i++) {
    let key = objKeys[i];

    if(keys.indexOf(key) != -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

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
utils.excludeKeys = function(obj, keys) {
  let newObj = {};
  let objKeys = Object.keys(obj);

  for(let i = 0, l = objKeys.length; i < l; i++) {
    let key = objKeys[i];

    if(keys.indexOf(key) == -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

/**
 * Check the value is component scope proxy object
 *
 * @param {*} val
 * @returns {boolean}
 */
utils.isScopeProxy = function(val) {
  return !!(val && typeof val == 'object' && val.__isProxy);
};

/**
 * Check the value is plain object
 *
 * @param {*} obj
 * @returns {boolean}
 */
utils.isPlainObject = function(obj) {
  return !!(obj && typeof obj == 'object' && (obj.constructor == Object || obj.constructor == Array));
};

/**
 * Copy the value
 *
 * @param {*} value
 * @param {boolean} [options] 
 * @returns {*}
 */
utils.copy = function(value, options = {}) {
  if (typeof value != 'object' || !value) {
    return value;
  }

  options = { nested: true, enumerable: true, ...options };

  const next = (obj) => {
    obj = this.isScopeProxy(obj)? obj.__target: obj;
    let keys = !options.enumerable? Object.getOwnPropertyNames(obj): Object.keys(obj);
    let newObj = Array.isArray(obj)? []: {};
    
    for (let i = 0, l = keys.length; i < l; i++) {
      let key = keys[i];
      let val = obj[key];
      val = val && typeof val == 'object' && options.nested? next(val): val;      
      
      if(!obj.propertyIsEnumerable(key)) {
        Object.defineProperty(newObj, key, {
          ...Object.getOwnPropertyDescriptor(obj, key),
          value: val
        });

        continue;
      }

      newObj[key] = val;  
    }

    return newObj;
  }

  return next(value);
};

/**
 * Change the value to attribute appropriate format
 *
 * @param {*} value
 * @returns {*}
 */
utils.makeAttributeValue = function(value) {
  if (value === false || value === null || value === undefined) {
    return '';
  }

  if (value instanceof EventEmitter) {
    return '[object Event]';
  }

  if (typeof value == 'function') {
    return '[object Function]';
  }

  if (typeof value == 'object') {
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
utils.compare = function (a, b, options = {}) {
  if ((a instanceof Date) && (b instanceof Date)) {
    return a.getTime() === b.getTime();
  }
  else if (typeof a == 'function' && typeof b == 'function') {
    return a.toString() === b.toString();
  }
  else if (typeof a == 'object' && typeof b == 'object') {
    if (a === null || b === null) {
      return a === b;
    }

    options = { enumerable: true, ignoreUndefined: true, ...options };

    const clearUndefined = (val) => {
      let obj = Array.isArray(val)? []: {};
      let keys = !options.enumerable? Object.getOwnPropertyNames(): Object.keys(val);

      for(let i = 0, l = keys.length; i < l; i++) {
        let key = keys[i];
        val[key] !== undefined && (obj[key] = val[key])
      }

      return obj;
    }

    if(options.ignoreUndefined) {
      a = clearUndefined(a);
      b = clearUndefined(b);
    }

    let aKeys = !options.enumerable? Object.getOwnPropertyNames(): Object.keys(a);
    let bKeys = !options.enumerable? Object.getOwnPropertyNames(): Object.keys(b);
    
    if (aKeys.length != bKeys.length) {
      return false;
    }

    a = this.isScopeProxy(a)? a.__target: a;
    b = this.isScopeProxy(b)? b.__target: b;

    for(let i = 0, l = aKeys.length; i < l; i++) {
      let key = aKeys[i];

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
 * @param {object} [options]
 * @returns {boolean}
 */
utils.comparePreviousValue = function(current, previous, options) {
  if(typeof current == 'object') {
    current = { hash: this.createObjectHash(current) };
  }

  return this.compare(current, previous, options);
};

/**
 * Create a string hash from an object
 * 
 * @param {object} obj
 */
utils.createObjectHash = function(obj) {
  let hash = 0;
  let str = JSON.stringify(obj);

  for (let i = 0; i < str.length; i++) {
    let  char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; 
  }

  return hash + '';
}

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
utils.encodeHtmlEntities = function(html) {
  let el = document.createElement("div");
  let value;
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
utils.decodeHtmlEntities = function(html) {
  let el = document.createElement("textarea");
  let value;
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
utils.toCamelCase = function(str) {
  return str.replace(/\W+(.)/g, (m, c) => c.toUpperCase());
};

/**
 * Capitalize the string
 *
 * @param {string} str
 * @returns {string}
 */
utils.capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * Change string from camel to dash case format
 *
 * @param {string} str
 * @returns {string}
 */
utils.toDashCase = function(str) {
  return str.replace(/([A-Z])/g, (m, c) => `-${c.toLowerCase()}`);
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
utils.getPropertyByKeys = function(keys, object) {
  let current;
  let length = keys.length;
  let i = 0;

  keys.reduce((o, k) => {
    i++;

    if (typeof o != 'object') {
      return o;
    }

    if (o[k] === undefined) {
      return {};
    }

    (i == length) && (current = o[k]);
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
utils.hasPropertyByKeys = function(keys, object) {
  let has = false;
  let length = keys.length;
  let i = 0;

  keys.reduce((o, k) => {
    i++;

    if (typeof o != 'object') {
      return !!o;
    }

    if (!o.hasOwnProperty(k)) {
      return {};
    }

    (i == length) && (has = o.hasOwnProperty(k));
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
utils.setPropertyByKeys = function(keys, object, fn) {
  let current = undefined;
  let length = keys.length;
  let i = 0;

  keys.reduce((o, k) => {
    i++;

    if (typeof o != 'object') {
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
utils.deletePropertyByKeys = function(keys, object, fn) {
  let length = keys.length;
  let value;
  let i = 0;

  keys.reduce((o, k) => {
    i++;

    if (typeof o != 'object') {
      return;
    }

    if (!o.hasOwnProperty(k)) {
      return {};
    }

    if (i == length) {
      value = o[k];
      (!fn || fn(value)) && (delete o[k]);
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

utils.getEnumerablePropertyTarget = function(target, key) {
  const check = (obj) => {
    if (obj.propertyIsEnumerable(key)) {
      return obj;
    }

    let proto = Object.getPrototypeOf(obj);

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
utils.getOwnPropertyTarget = function(target, key) {
  const check = (obj) => {
    if (obj.hasOwnProperty(key)) {
      return obj;
    }

    let proto = Object.getPrototypeOf(obj);

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
utils.createRandomString = function(length = 16, fn = null) {
  let str = Math.random().toString(36).substring(2, length + 2);
  let val = '';

  for (let i = 0, l = str.length; i < l; i++) {
    if (Math.random() > 0.66) {
      val += str[i].toUpperCase();
    }
    else {
      val += str[i];
    }
  }

  if (fn && fn(val)) {
    return this.createRandomString(length, fn);
  }

  return val;
};

export default utils;