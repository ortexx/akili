import Text from './text.js';
import Akili from '../akili.js';

export default class Input extends Text {
  static booleanAttributes = ['checked', 'multiple'];
  static events = ['change', 'debounce'];

  static define() {
    Akili.component('input', this);
  }

  constructor(...args) {
    super(...args);

    this.isCheckbox = this.el.type == 'checkbox';
    this.isRadio = this.el.type == 'radio';
    this.debounceInterval = 500;
    this.debounceTimeout = null;
  }

  created() {
    if(this.isRadio || this.isCheckbox) {
      this.el.addEventListener('click', () => {
        this.setChecked(this.el.checked, false);
      });
    }
    else if(this.el.hasAttribute('on-debounce')) {
      this.el.addEventListener('input', () => {        
        this.debounceTimeout && clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
          this.attrs.onDebounce.trigger(undefined, { bubbles: true });
        }, this.debounceInterval);
      });
    }
  }

  compiled() {    
    this.attr('debounce', this.setDebounce);
    return super.compiled.apply(this, arguments);
  }

  resolved() {
    (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
    return super.resolved.apply(this, arguments);
  }

  removed() {
    this.debounceTimeout && clearTimeout(this.debounceTimeout);
  }

  setDebounce(interval) {
    this.debounceInterval = +interval;
  }

  setChecked(value, trigger = true) {
    value = !!value;

    if (this.prevChecked === value) {
      return;
    }

    this.el.checked = this.prevChecked = value;
    trigger && this.attrs.onChange.dispatch(Event, { bubbles: true });
    this.isRadio && this.changeRadio();
  }

  setValue() {
    super.setValue.apply(this, arguments);
    this.isRadio && this.attrs.onChange.dispatch(Event, { bubbles: true });
  }

  changeRadio() {
    let name = this.el.getAttribute('name');
    let selector = `input[type=radio][name='${name}']:not([scope='${this.scope.__name}'])`;
    let children = Akili.root.children(selector);

    for (let i = 0, l = children.length; i < l; i++) {
      let radio = children[i];
      radio.setChecked(radio.el.checked);
    }
  }
}