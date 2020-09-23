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
  static matches = '';
  static booleanAttributes = ['multiple'].concat(For.booleanAttributes);
  static events = ['change'].concat(For.events);

  static define() {
    Akili.component('select', this);
    Akili.component('option', this.Option);
  }

  constructor(...args) {
    super(...args);
    this.iteratorTagName = 'option';
    this.iterable = this.el.hasAttribute('in');
  }

  created() {
    this.el.addEventListener('change', () => this.el.content = this.getContent());

    if(this.iterable) {
      return super.created.apply(this, arguments);
    }
  }

  compiled() {    
    this.iterable && (super.compiled.apply(this, arguments));
    this.attr('multiple', this.setMultiple, { callOnStart: false });
    this.attr('value', this.setValue);
    this.unattr('in', this.draw);
    return this.attr('in', this.setIn);
  }

  setIn(data) {
    return this.draw(data).then(this.redrawSelect.bind(this));
  }

  redrawSelect() {
    const vals = this.removeUnproperValues(this.el.content);
    const content = vals.length? vals: null;
    let selected = [];
    
    for (let i = this.el.options.length - 1; i >= 0; i--) {
      let option = this.el.options[i];
      let selection = !!option.getAttribute('selected');

      if(content && !content.includes(option.value)) {
        option.selected = false;
        continue;
      } 

      if(content) {
        option.selected = true;
        selected.push(option.value);
        continue;
      }

      option.selected = selection;
      selection && selected.push(option.value);
    }

    this.changeValue(this.formatValue(selected));
  }

  setMultiple() {    
    this.changeValue(this.formatValue(utils.copy(this.el.content)));
  }

  setValue(value) {
    if(value === undefined && !this.__isCompiled) {
      return;
    }

    const properValue = this.formatValue(value);
    this.changeValue(properValue, !utils.compare(properValue, value));
  }

  createIteratorElement() {
    let el = super.createIteratorElement.apply(this, arguments);

    if (!el.hasAttribute('value')) {
      el.setAttribute('value', this.html.trim());
    }

    return el;
  }

  getContent() {    
    if (!this.attrs.multiple) {
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
    if (this.attrs.multiple) {
      !Array.isArray(value) && (value = [value]);
      value = this.removeUnproperValues(value);
      return value;
    }

    Array.isArray(value) && (value = value[0]);  
    return this.removeUnproperValues(value).length? value: this.getDefaultValue();
  }

  removeUnproperValues(values) {
    !Array.isArray(values)? values = [values]: values.slice();
    const hash = {};

    for (let i = 0, l = this.el.options.length; i < l; i++) {
      hash[this.el.options[i].value] = true;
    }

    for (let i = values.length - 1; i >= 0; i--) {
      if(!hash[values[i]]) {
        values.splice(i, 1);
      }
    }

    return values;
  }

  redefine() {
    if(!this.el.querySelector('[selected]')) {
      this.el.value = this.getDefaultValue();
    }

    this.changeValue(this.getContent());
  }

  getDefaultValue() {
    const firstEl = this.el.options[0];
    return this.attrs.multiple? []: (firstEl? firstEl.value: undefined);
  }

  changeValue(value, force = false) {
    if (!utils.compare(this.el.content, value)) {
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
    }
    else {
      if(!force) {
        return;
      }
    }
    
    this.attrs.onChange.dispatch(Event, { bubbles: true });
  }
}

export class Option extends Loop {
  static booleanAttributes = ['selected'];

  constructor(...args) {
    super(...args);
    this.iterable = this.el.parentNode.__akili.iterable;    

    if (!this.iterable) {
      this.__cancelled = false;
    }
  }

  __getParsedExpression(expression) {
    return utils.decodeHtmlEntities(expression);
  }

  compiled() { 
    this.attr('selected', this.setSelected, { callOnStart: false });

    if(this.iterable) {
      super.compiled.apply(this, arguments);
    }
  }

  setSelected(value) {
    this.el.selected = value;
    this.for.redefine();
  }
}

Select.Option = Option;