import Akili from './akili.js';
import utils from './utils.js';

/**
 * Scope class
 * 
 * {@link https://akilijs.com/docs/scope}
 *
 * All properties starting with __ are not monitored.
 * You can use them for internal manipulations.
 */
export default class Scope {
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
   * @param {object} [options] 
   * @param {boolean} [options.saveProxy] 
   * @param {boolean} [options.silent]
   * @param {boolean} [options.target]
   * @protected
   */
  __set(keys, value, options = {}) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    
    Akili.unisolate(() => {
      options.saveProxy && (this.__component.__disableProxyRedefining = true);
      options.silent && this.__component.__disableKeys();
      utils.setPropertyByKeys(keys, options.target? this.__target: this, (last, val) => {
        if (!last) {
          return val || {};
        }

        return value;
      });
      options.silent && this.__component.__enableKeys();
      options.saveProxy && (this.__component.__disableProxyRedefining = false);
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
      if(!Object.prototype.hasOwnProperty.call(this, key)) {
        continue;
      }

      delete this[key];
    }
  }
}