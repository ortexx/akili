import For, { Loop } from './for.js';
import Akili from '../akili.js';

/**
 * The radio group component
 */
export default class Radio extends For {
  static matches = '[name]';
  static events = ['radio'];

  static define() {
    Akili.component('radio', Radio);
    Akili.component('radio-button', RadioButton);
  }

  constructor(...args) {
    super(...args);

    this.iterable = this.el.hasAttribute('in');
  }

  changedIn(value) {
    super.changedIn.apply(this, arguments);
    this.setNames(this.attrs.name);
  }

  changedName(name) {
    this.setNames(name);
  }

  changedValue(value) {
    this.setValue(value);
  }

  created() {
    this.iterable && super.created.apply(this, arguments);

    this.el.addEventListener('change', () => {
      setTimeout(() => {
        let value = this.getRadioValue();

        if (value === this.prevValue) {
          return;
        }

        this.prevValue = value;
        this.attrs.onRadio.trigger(value, { bubbles: true });
      });
    });
  }

  resolved() {
    this.setNames(this.attrs.name);
    this.attrs.hasOwnProperty('value') && this.setValue(this.attrs.value);
  }

  setNames(name) {
    let children = this.children('input[type=radio]');

    for (let i = 0, l = children.length; i < l; i++) {
      children[i].el.setAttribute('name', name);
    }
  }

  setValue(value) {
    if (value === this.prevValue) {
      return;
    }

    let prev = this.prevValue;
    let children = this.children('input[type=radio]');
    let isTrue = false;

    this.prevValue = value;

    for (let i = 0, l = children.length; i < l; i++) {
      let radio = children[i];
      let isSelected = radio.el.value === value;

      isSelected && (isTrue = true);
      radio.setChecked(isSelected);
    }

    if (!isTrue) {
      if (value === null) {
        if (prev === undefined) {
          return;
        }
      }
      else {
        this.prevValue = undefined;
        value = null;
      }
    }

    this.attrs.onRadio.trigger(value, { bubbles: true });
  }

  getRadioValue() {
    let children = this.children('input[type=radio]');

    for (let i = 0, l = children.length; i < l; i++) {
      let radio = children[i];

      if (radio.el.checked) {
        return radio.el.value;
      }
    }

    return null;
  }
};

/**
 * The radio item component
 */
export class RadioButton extends Loop {
  static template = `<label><input type="radio" value="\${this.value}"/>\${this.__content}</label>`;

  constructor(...args) {
    super(...args);
  }

  changedValue(value) {
    this.setRadioValue(value);
  }

  compiled() {
    this.setRadioValue(this.attrs.value);
  }

  setRadioValue(value) {
    this.scope.value = value;
  }
}

Radio.RadioButton = RadioButton;