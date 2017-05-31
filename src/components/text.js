import Component from '../component.js';

export default class Text extends Component {
  constructor(...args) {
    super(...args);

    this.valueKey = 'value';
  }

  changedValue(value) {
    this.setValue(value);
  }

  changedFocus(value) {
    this.setFocus(value);
  }

  compiled() {
    this.attrs.hasOwnProperty('focus') && this.setFocus(this.attrs.focus);
    this.attrs.hasOwnProperty('value') && this.setValue(this.attrs.value);
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
};

