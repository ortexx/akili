import EventEmitter from './event-emitter'

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
  if(!obj || typeof obj !== 'object') {
    return '';
  }

  let classes = [];

  for(let k in obj) {
    if(!obj.hasOwnProperty(k)) {
      continue;
    }

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
  if(!obj || typeof obj !== 'object') {
    return '';
  }

  let styles = [];

  for(let k in obj) {
    if(!obj.hasOwnProperty(k)) {
      continue;
    }

    let val = obj[k];

    val && styles.push(`${this.toDashCase(k)}:${val}`);
  }

  return styles.join(';');
};

/**
 * Filter an array
 *
 * @example
 * // returns [1, 11]
 * utils.filter([1, 2, 3, 11], '1');
 *
 * @example
 * // returns [{x:1}, {x:11}]
 * utils.filter([{x:1}, {x:2}, {x:3}, {x:11}], '1', ['x']);
 *
 * @param {Array} arr
 * @param {string|RegExp|function} handler - type of filtering
 * @param {string[]|string} [keys] - filter in the keys if array elements are object
 * @returns {Array} - returns other array
 */
utils.filter = function (arr, handler, keys = []) {
  let res = [];

  if(!Array.isArray(keys)) {
    keys = [keys];
  }

  if(!handler) {
    return [...arr];
  }

  for(let i = 0, l = arr.length; i < l; i++) {
    let item = arr[i];
    let val = keys.length? this.getPropertyByKeys(keys, item): item;

    if(!val) {
      continue;
    }

    val += '';

    if((typeof handler == 'function') && handler(item)) {
      res.push(item);
    }
    else if(val.match(handler || '')) {
      res.push(item);
    }
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
 * @param {Array} arr
 * @param {boolean|Array[]|string[]|string} [keys]
 * @param {boolean|boolean[]} [order] - reverse or not
 * @returns {Array}
 */
utils.sort = function(arr, keys = true, order = []) {
  arr = [...arr];

  if(keys === true) {
    keys = [];
    order = [true];
  }
  else if(keys === false) {
    keys = [];
    order = [false];
  }

  if(!Array.isArray(keys)) {
    keys = [keys];
  }

  if(!Array.isArray(order)) {
    order = [order];
  }

  let l = keys.length;

  arr.sort((a, b) => {
    let i = 0;

    let check = (a, b, reverse = false) => {
      if(a instanceof Date) {
        a = a.getTime();
      }

      if(b instanceof Date) {
        b = b.getTime();
      }

      if(a > b) {
        return reverse? -1: 1;
      }
      else if(a < b) {
        return reverse? 1: -1;
      }

      return 0;
    };

    let next = () => {
      if(i >= l) {
        return 0;
      }

      let key = keys[i];

      if(!Array.isArray(key)) {
        key = [key];
      }

      let aV = this.getPropertyByKeys(key, a);
      let bV = this.getPropertyByKeys(key, b);
      let res = check(aV, bV, order[i] === false);

      if(res !== 0) {
        return res;
      }

      i++;

      return next();
    };

    if(!l) {
      return check(a, b, order[i] === false);
    }

    return next();
  });

  return arr;
};

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
 * @param {boolean} [nested=true] - deep copy if is true
 * @returns {*}
 */
utils.copy = function(value, nested = true) {
  if(typeof value != 'object' || !value) {
    return value;
  }

  function next(obj) {
    obj = Array.isArray(obj)? [...obj]: {...obj};

    if(!nested) {
      return obj;
    }

    for(let k in obj) {
      if(!obj.hasOwnProperty(k)) {
        continue;
      }

      if(obj[k] && typeof obj[k] == 'object') {
        obj[k] = next(obj[k]);
      }
    }

    return obj;
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
  if(value === false || value === null || value === undefined) {
    return '';
  }

  if(value instanceof EventEmitter) {
    return '[object Event]';
  }

  if(typeof value == 'function') {
    return '[object Function]';
  }

  if(typeof value == 'object') {
    return Object.prototype.toString.call(value);
  }

  return value + '';
};

/**
 * Compare two values
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
utils.compare = function (a, b) {
  if((a instanceof Date) && (b instanceof Date)) {
    return a.getTime() === b.getTime();
  }
  if(typeof a == 'function' && typeof b == 'function') {
    return a.toString() === b.toString();
  }
  else if(typeof a == 'object' && typeof b == 'object') {
    if(a === null || b === null) {
      return a === b;
    }

    if(Object.keys(a).length != Object.keys(b).length) {
      return false;
    }

    for(let k in a) {
      if(!a.hasOwnProperty(k)) {
        continue;
      }

      if(!this.compare(a[k], b[k])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
};

/**
 * Compare current value with previous
 *
 * @param {*} current - the current value
 * @param {*} previous - the current value copy
 * @param {*} previousCopy - the previous value copy
 * @param {*} [currentCopy] - the current value copy
 * @returns {boolean}
 */
utils.comparePreviousValue = function(current, previous, previousCopy, currentCopy) {
  if(current !== previous) {
    return false;
  }

  return this.compare(arguments.length == 3? currentCopy: this.copy(current), previousCopy);
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

  keys.reduce(function(o, k) {
    i++;

    if(typeof o != 'object') {
      return o;
    }

    if(o[k] === undefined) {
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

  keys.reduce(function(o, k) {
    i++;

    if(typeof o != 'object') {
      return !!o;
    }

    if(!o.hasOwnProperty(k)) {
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

  keys.reduce(function(o, k) {
    i++;

    if(typeof o != 'object') {
      return;
    }

    if(!o.hasOwnProperty(k)) {
      return current = o[k] = fn(i == length);
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

  keys.reduce(function(o, k) {
    i++;

    if(typeof o != 'object') {
      return;
    }

    if(!o.hasOwnProperty(k)) {
      return {};
    }

    if(i == length) {
      value = o[k];

      if(!fn || fn(value)) {
        delete o[k];
      }

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
  let check = (obj) => {
    if(obj.propertyIsEnumerable(key)) {
      return obj;
    }

    let proto = Object.getPrototypeOf(obj);

    if(!proto) {
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
  let check = (obj) => {
    if(obj.hasOwnProperty(key)) {
      return obj;
    }

    let proto = Object.getPrototypeOf(obj);

    if(!proto) {
      return null;
    }

    return check(proto);
  };

  return check(target);
};

/**
 * Clear value proxy if it existent
 *
 * @param {*} value
 * @returns {*}
 */
utils.clearScopeProxy = function (value) {
  if(typeof value != 'object' || !value) {
    return value;
  }

  let clear = (obj) => {
    for(let k in obj) {
      if (!obj.hasOwnProperty(k)) {
        continue;
      }

      if(obj[k] && typeof obj[k] == 'object') {
        if(obj[k].__isProxy) {
          obj[k] = obj[k].__target;
        }

        clear(obj[k]);
      }
    }
  };

  if(value.__isProxy) {
    value = value.__target;
  }

  clear(value);

  return value;
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

  for(let i = 0, l = str.length; i < l; i++) {
    if(Math.random() > 0.66) {
      val += str[i].toUpperCase();
    }
    else {
      val += str[i];
    }
  }

  if(fn && fn(val)) {
    return this.createRandomString(length, fn);
  }

  return val;
};

export default utils;