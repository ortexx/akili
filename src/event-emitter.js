import utils from './utils';

/**
 * Class to work with events.
 * 
 * {@link https://akilijs.com/docs/events}
 */
export default class EventEmitter {
  constructor(name, node, el, component) {
    this.name = name;
    this.node = node;
    this.el = el;
    this.component = component;
  }

  /**
   * Trigger the event
   *
   * @param {*} data
   * @param {object} [options]
   * @param {boolean} [force]
   * @returns {Promise}
   */
  trigger(data, options = {}, force = false) {
    if(this.__removed) {
      return;
    }

    if (force || !this.inEvaluating()) {
      data = utils.copy(data, { plain: true });
      this.el.dispatchEvent(new CustomEvent(this.name, this.prepareOptions({ detail: data,  ...options })));
    }   
  }

  /**
   * Dispatch the event
   *
   * @param {Event} _Event - class of the event
   * @param {object} [options]
   * @param {boolean} [force]
   * @returns {Promise}
   */
  dispatch(_Event, options = {}, force = false) {
    if(this.__removed) {
      return;
    }

    if (force || !this.inEvaluating()) {
      this.el.dispatchEvent(new _Event(this.name, this.prepareOptions(options)));
    }
  }

  /**
   * Prepere the event options
   * 
   * @param {object} [options] 
   */
  prepareOptions(options = {}) {
    options = { bubbles: true, ...options }; 
    this.node.__component.__prepareAttributeOut(this.node, options.detail);
    return options;
  }

  /**
   * Check the event callback doesn't run recursively
   *
   * @returns {boolean}
   */
  inEvaluating() {
    let data = this.component.__evaluatingEvent;

    if (!data) {
      return false;
    }

    return data.el === this.el && data.event.type === this.name && data.component === this.component;
  }

  /**
   * Bind the function
   *
   * @param {function} fn
   */
  bind(fn) {
    this.el.addEventListener(this.name, this.fn = fn);
  }

  /**
   * Unbind the function
   */
  unbind() {
    this.fn && this.el.removeEventListener(this.name, this.fn);
  }

  /**
   * Remove the emitter
   */
  remove() {
    this.unbind();
    delete this.name;
    delete this.node;
    delete this.component
    delete this.el;
    this.__removed = true;
  }
}