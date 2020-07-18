import Text from './text.js';
import Akili from '../akili.js';

/**
 * Component to work with input elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_checkbox_and_radio}
 * 
 * @tag input
 * @attr @see Text
 * @message @see Text
 */
export default class Input extends Text {
  static booleanAttributes = ['checked', 'multiple'].concat(Text.booleanAttributes);
  static events = ['change'].concat(Text.events);

  static define() {
    Akili.component('input', this);
  }

  constructor(...args) {
    super(...args);
    this.isCheckbox = this.el.type == 'checkbox';
    this.isRadio = this.el.type == 'radio';
  }

  compiled() {
    (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);    
    return super.compiled.apply(this, arguments);
  }  

  setChecked(value) {
    value = !!value;

    if(this.el.checked === value) {
      return;
    }
    
    this.el.checked = value;
    this.__isCompiled && this.attrs.onChange.dispatch(Event, { bubbles: true });
    this.isRadio && this.changeRadio();
  }

  setValue(value) {
    super.setValue.apply(this, arguments);
    this.isRadio && this.el[this.valueKey] != value && this.attrs.onChange.dispatch(Event, { bubbles: true });
  }

  changeRadio() {
    let name = this.el.getAttribute('name');
    let selector = `input[type=radio][name='${name}']:not([scope='${this.scope.__name}'])`;
    let children = this.parent().children(selector);

    for (let i = 0, l = children.length; i < l; i++) {
      let radio = children[i];
      radio.setChecked(radio.el.checked);
    }
  }
}