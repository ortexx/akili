import Component from '../component.js';

export default class Text extends Component {
  constructor(...args) {
    super(...args);

    this.valueKey = 'value';
  }

  compiled() {
    this.attr('focus', this.setFocus);
    this.attr('value', this.setValue);
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

