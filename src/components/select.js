import For, { Loop } from './for.js';
import utils from '../utils.js';
import Akili from '../akili.js';

/**
 * Component to work with select.
 * 
 * {@link https://akilijs.com/docs/components#docs_select}
 * 
 * @tag select  
 * @attr {string} value - actual value
 * @attr [in] @see For
 */
export default class Select extends For {
  static booleanAttributes = ['multiple'].concat(For.booleanAttributes);
  static events = ['change'].concat(For.events);

  static define() {
    Akili.component('select', this);
    Akili.component('option', this.Option);
  }

  constructor(...args) {
    super(...args);

    this.iteratorTagName = 'option';
    this.isMultiple = false;
  }

  created() {
    this.el.addEventListener('change', () => {
      this.el.content = this.getContent();
    });

    return super.created.apply(this, arguments);
  }

  compiled() { 
    let res = super.compiled.apply(this, arguments);   
    this.attr('multiple', this.setMultiple);
    this.attr('content', this.setContent);
    this.attr('in', this.drawSelect);
    return res;
  }

  setMultiple(value) {
    this.isMultiple = value;
    this.changeValue(this.formatValue(utils.copy(this.el.content)));
  }

  setContent(value) {
    this.changeValue(this.formatValue(value));
  }

  drawSelect() {
    let selected = [];

    for (let i = 0, l = this.el.options.length; i < l; i++) {
      let option = this.el.options[i].__akili;
      let selection = option.attrs.selected;

      if (selection) {
        selected.push(option.el.value);
      }

      option.el.selected = selection;
    }

    if (!selected.length) {
      this.redefine();
    }
    else {
      this.changeValue(this.formatValue(selected));
    }
  }

  createIteratorElement() {
    let el = super.createIteratorElement();

    if (!el.hasAttribute('value')) {
      el.setAttribute('value', this.html.trim());
    }

    return el;
  }

  getContent() {
    if (!this.isMultiple) {
      return this.el.value;
    }

    let content = [];

    for (let i = 0, l = this.el.options.length; i < l; i++) {
      let option = this.el.options[i];

      if (option.selected) {
        content.push(option.value);
      }
    }

    return content;
  }

  formatValue(value) {
    if (this.isMultiple) {
      if (!Array.isArray(value)) {
        value = (value !== undefined && value !== null)? [value]: [];
      }
    }
    else {
      if (Array.isArray(value)) {
        value = value.length? value[0]: '';
      }
      else if (typeof value == 'object' || typeof value == 'function') {
        value = '';
      }
    }

    return value;
  }

  redefine() {
    this.changeValue(this.getContent());
  }

  changeValue(value) {
    if (utils.compare(this.el.content, value)) {
      return;
    }

    if (Array.isArray(value)) {
      this.el.value = value[value.length - 1];

      for (let i = 0, l = this.el.options.length; i < l; i++) {
        let option = this.el.options[i];

        option.selected = value.indexOf(option.value) != -1;
      }
    }
    else {
      this.el.value = value;

      for (let i = 0, l = this.el.options.length; i < l; i++) {
        let option = this.el.options[i];

        option.selected = option.value == value;
      }
    }

    this.el.content = value;
    this.attrs.onChange.dispatch(Event, { bubbles: true });
  }
}

export class Option extends Loop {
  static booleanAttributes = ['selected'];

  __getParsedExpression(expression) {
    return utils.decodeHtmlEntities(expression);
  }

  changedSelected(value) {
    this.setSelected(value);
  }

  setSelected(value) {
    this.el.selected = value;
    this.for.redefine();
  }
}

Select.Option = Option;