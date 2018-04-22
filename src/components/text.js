import Component from '../component.js';

/**
 * Base component to work with text elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @attr {string} value - actual value
 * @attr {boolean} focus - set the focus or not
 * @attr {number} debounce - debounce delay
 * @message {void} debounce - sent on the debounce {@link https://akilijs.com/docs/components#docs_input}
 */
export default class Text extends Component {
  constructor(...args) {
    super(...args);

    this.valueKey = 'value';
    this.debounceInterval = 500;
    this.debounceTimeout = null;
  }

  compiled() {
    if(this.el.hasAttribute('on-debounce')) {
      this.el.addEventListener('input', () => {        
        this.debounceTimeout && clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
          this.attrs.onDebounce.trigger(undefined, { bubbles: true });
        }, this.debounceInterval);
      });
    }

    this.attr('focus', this.setFocus);
    this.attr('value', this.setValue);
    this.attr('debounce', this.setDebounce);
  }

  removed() {
    this.debounceTimeout && clearTimeout(this.debounceTimeout);
  }

  setDebounce(interval) {
    this.debounceInterval = +interval;
  }

  setFocus(value) {
    value? this.setElementFocus(): this.setElementBlur();
  }

  setValue(value) {
    (this.el[this.valueKey] !== value) && (this.el[this.valueKey] = value === 0? '0': (value || ''));
  }

  setElementFocus() {
    this.el.focus();
  }

  setElementBlur() {
    this.el.blur();
  }
}

