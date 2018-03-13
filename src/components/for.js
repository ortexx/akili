import Component from '../component.js';
import Akili from '../akili.js';
import utils from '../utils.js';

export default class For extends Component {
  static matches = '[in]';
  static saveAttributeProxyIn = true;  

  static define() {
    Akili.component('for', this);
    Akili.component('ol', this);
    Akili.component('ul', this);
    Akili.component('thead', this);
    Akili.component('tbody', this);
    Akili.component('tfoot', this);
    Akili.component('tr', this.Loop);
    Akili.component('loop', this.Loop);
  }

  constructor(...args) {
    super(...args);

    this.__iterator = null;
    this.__key = null;
    this.__value = null;
    this.__index = null;
    this.__comparisonValue = null;
    this.iterators = [];
    this.iteratorRef = null;
    this.iteratorOuterHTML = null;
  }

  created() {
    this.createIterator();
  }

  compiled() {
    this.attr('in', this.draw);
  }

  createIterator() {
    let el;

    for (let i = 0, l = this.el.children.length; i < l; i++) {
      let child = this.el.children[i];

      if (child.getAttribute('component') == 'loop') {
        el = child;
        break;
      }

      el = child;
    }

    if (!el) {
      el = document.createElement('loop');      
      el.innerHTML = this.el.innerHTML; 
      this.el.innerHTML = '';     
      this.el.appendChild(el);
    }

    let componentName = el.getAttribute('component');

    if (componentName != 'loop') {
      let component = Akili.component(componentName || el.tagName);

      if (!component) {
        el.setAttribute('component', 'loop');
      }
      else if (!(component.prototype instanceof For)) {
        let mask = document.createElement('loop');
        mask.appendChild(el);
        el = mask;
      }
    }

    this.html = el.innerHTML;
    this.iteratorRef = el.nextSibling;
    this.iteratorOuterHTML = el.outerHTML;
    el.remove();
  }

  createIteratorElement() {
    let el = document.createElement('template');
    el.innerHTML = this.iteratorOuterHTML;
    el = el.content.firstChild;
    return el;
  }

  loop(key, value, keys, index, dataChanged) {
    this.__index = index;
    this.__key = key;
    this.__value = value;    
    this.__comparisonValue = utils.copy(value);

    if(this.iterators.length > index) {
      let iterator = this.iterators[index];
      let cCopy = iterator.comparsion.copy;
      let changed = false;
        
      if (this.__index !== iterator.index) {
        iterator.setIndex();
        changed = true;
      }
      else {
        iterator.setIndex(true);
      }

      if (this.__key !== iterator.key) {
        iterator.setKey();
        changed = true;
      }
      else {
        iterator.setKey(true);
      }
      
      if (!utils.compare(cCopy, this.__comparisonValue, { ignoreUndefined: true })) {
        iterator.setValue();
        changed = true;
      }
      else {
        iterator.setValue(true);
      }

      (changed || dataChanged) && Akili.compile(iterator.el, { recompile: true });
      return iterator;
    }
    
    let el = this.createIteratorElement();
    el.innerHTML = this.html;
    this.el.insertBefore(el, this.iteratorRef);
    Akili.compile(el);
    this.iterators.push(el.__akili);
    return el.__akili;
  }

  draw(data) {
    if (typeof data != 'object' || data === null) {
      if (Akili.options.debug) {
        console.warn(`"For" component "in" attribute value type must be an object/array`);
        data = [];
      }
    }

    let dataChanged = utils.compare(this.data, data);
    this.data = data;    
    let keys = {};
    let iterators = [];
    let index = 0;

    if (Array.isArray(data)) {
      for (let l = data.length; index < l; index++) {
        iterators.push(this.loop(index, data[index], keys, index, dataChanged));
      }
    }
    else {
      for (let k in data) {
        if (!data.hasOwnProperty(k)) {
          continue;
        }

        iterators.push(this.loop(k, data[k], keys, index, dataChanged));
        index++;
      }
    }

    for (let i = 0, l = iterators.length; i < l; i++) {
      let iterator = iterators[i];
      this.el.appendChild(iterator.el);
      iterator.iterate(i);
    }

    for (let i = index, l = this.iterators.length; i < l; i++) {
      let iterator = this.iterators[i];
      iterator.__destroy();
      this.iterators.splice(i, 1);
      l--;
      i--;
    }
  }
};

export class Loop extends For {
  static matches = '';
  static controlAttributes = true;

  constructor(...args) {
    super(...args);

    this.for = null;
    this.html = this.el.innerHTML;
    this.isFor = this.el.hasAttribute('in');

    if (!this.isFor && !(this.el.parentNode.__akili instanceof For)) {
      this.cancel();
    }
  }

  created() {
    this.__parent.__akili.__iterator = this;
    this.for = this.__parent.__akili;
    this.setIndex(true);
    this.setKey(true);
    this.setValue(true);
    this.isFor && super.created.apply(this, arguments);
  }

  compiled() {
    if(this.isFor) {
      return super.compiled.apply(this, arguments);
    }
  }

  setIndex(target) {
    this.index = this.for.__index;
    this.scope.__set('loopIndex', this.index, false, target);
  }

  setKey(target) {
    this.key = this.for.__key;
    this.scope.__set('loopKey', this.key, false, target);
  }

  setValue(target) {
    this.value = this.for.__value;
    this.scope.__set('loopValue', this.value, true, target);

    this.comparsion = {
      copy: this.for.__comparisonValue,
      value: this.for.__value
    };
  }

  iterate(index) {}
}

For.Loop = Loop;