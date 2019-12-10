import Akili from './akili.js';
import utils from './utils.js';

/**
 * Scope class.
 * 
 * {@link https://akilijs.com/docs/scope}
 *
 * All properties starting with __ are not monitored.
 * You can use them for internal manipulations.
 */
export default class Scope {
  static nestedWatching;

  constructor(name, el, component) {
    this.__name = name;
    this.__el = el;
    this.__component = component;
    el.setAttribute('scope', name);
  }

  /**
   * Set the scope value
   * 
   * @param {string|string[]} keys
   * @param {*} value
   * @param {boolean} [strict=false] - without object copying
   * @protected
   */
  __set(keys, value, strict = false, target = false) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    
    Akili.unisolate(() => {
      strict && (this.__component.__disableProxyRedefining = true);
      utils.setPropertyByKeys(keys, target? this.__target: this, (last, val) => {
        if (!last) {
          return val || {};
        }

        return value;
      });
      strict && (this.__component.__disableProxyRedefining = false);
    });
  }

  /**
   * Remove the scope
   * 
   * @protected
   */
  __remove() {
    Akili.removeScope(this.__name);

    for(let key in this) {
      if(!this.hasOwnProperty(key)) {
        continue;
      }

      delete this[key];
    }
  }
}