import Text from './text.js';
import Akili from '../akili.js';

export default class Input extends Text {
  static booleanAttributes = ['checked'];
  static events = ['change'];

  static define() {
    Akili.component('input', Input);
  }

  constructor(...args) {
    super(...args);

    this.isCheckbox = this.el.type == 'checkbox';
    this.isRadio = this.el.type == 'radio';
  }

  changedChecked(value) {
    this.setChecked(value);
  }

  created() {
    (this.isRadio || this.isCheckbox) && this.el.addEventListener('click', () => {
      this.setChecked(this.el.checked, false);
    });
  }

  resolved() {
    (this.isCheckbox || this.isRadio) && this.setChecked(this.attrs.checked);
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