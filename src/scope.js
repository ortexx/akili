import Akili from './akili.js';
import utils from './utils.js';

/**
 * Scope class.
 *
 * All properties starting with __ will not be watching.
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

  get __utils() {
    return utils;
  }

  /**
   * Set a scope value
   * @param {string|string[]} keys
   * @param {*} value
   * @param {boolean} [strict=false] - without object copying
   * @protected
   */
  __set(keys, value, strict = false, target = false) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    
    Akili.unisolated(() => {
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
}