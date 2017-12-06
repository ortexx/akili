import Component from '../component.js';
import Akili from '../akili.js';
import utils from '../utils.js';

export default class For extends Component {
  static matches = '[in]';

  static define() {
    Akili.component('for', For);
    Akili.component('ol', For);
    Akili.component('ul', For);
    Akili.component('thead', For);
    Akili.component('tbody', For);
    Akili.component('tfoot', For);
    Akili.component('tr', Loop);
    Akili.component('loop', Loop);
  }

  constructor(...args) {
    super(...args);

    this.__iterator = null;
    this.__key = null;
    this.__value = null;
    this.__index = null;
    this.__comparisonValue = null;
    this.iterators = {};
    this.iteratorRef = null;
    this.iteratorOuterHTML = null;
  }

  changedIn(data) {
    this.draw(data);
  }

  created() {
    this.createIterator();
  }

  compiled() {
    this.draw(this.attrs.in);
  }

  createIterator() {
    let el;

    for(let i = 0, l = this.el.children.length; i < l; i++) {
      let child = this.el.children[i];

      if(child.getAttribute('component') == 'loop') {
        el = child;

        break;
      }

      el = child;
    }

    if(!el) {
      el = document.createElement('loop');      
      el.innerHTML = this.el.innerHTML; 
      this.el.innerHTML = '';     
      this.el.appendChild(el);
    }

    let componentName = el.getAttribute('component');

    if(componentName != 'loop') {
      let component = Akili.component(componentName || el.tagName);

      if(!component) {
        el.setAttribute('component', 'loop');
      }
      else if(!(component.prototype instanceof For)) {
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

  loop(key, value, keys, index) {
    this.__index = index;
    this.__key = key;
    this.__value = value;
    this.__comparisonValue = utils.copy(value);

    let hash = '';
    let found = 0;

    if(value && typeof value == 'object' && value.__hash) {
      hash = value.__hash;
    }

    if(this.iterators[hash]) {
      key = hash;
      found = 2;
    }
    else if(this.iterators[key]) {
      found = 1;
    }

    if(found) {
      let iterator = this.iterators[key];

      if(found == 2) {
        let cValue = iterator.comparsion.value;
        let cCopy = iterator.comparsion.copy;
       
        if (this.__index !== iterator.index) {
          iterator.setIndex();
        }

        if (this.__key !== iterator.key) {
          iterator.setKey();
        }

        if (!utils.comparePreviousValue(value, cValue, cCopy, this.__comparisonValue)) {
          iterator.setValue();
        }

        keys[key] = iterator;
        delete this.iterators[key];

        return iterator;
      }

      this.iteratorRef = iterator.el.nextSibling;
      iterator.__destroy();
    }

    let el = this.createIteratorElement();

    el.innerHTML = this.html;
    this.el.insertBefore(el, this.iteratorRef);
    Akili.compile(el);

    if(value && typeof value == 'object') {
      if(!value.__hash) {
        hash = utils.createRandomString(32, (str) => {
          return this.iterators[str];
        });

        Object.defineProperty(value, '__hash', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: hash
        });
      }

      keys[hash] = this.__iterator;
      delete this.iterators[hash];
    }
    else {
      if(Akili.options.debug) {
        let eValue = typeof this.__value == 'string'? `"${this.__value}"`: this.__value;

        let args = [
          `"For" component loop items should have "object" type for higher performance.`,
          `You can change ${eValue} to {value: ${eValue}}, for example.`
        ];

        console.warn.apply(console.warn, args);
      }

      keys[key] = this.__iterator;
      delete this.iterators[key];
    }

    return el.__akili;
  }

  draw(data) {
    if (typeof data != 'object' || data === null) {
      if(Akili.options.debug) {
        console.warn(`"For" component "in" attribute value type must be an object/array`);
        data = [];
      }
    }

    let keys = {};
    let indexKeys = [];
    let lastElement = null;
    let last = this.el.children[this.el.children.length - 1];

    if(last && !(last.__akili instanceof Loop)) {
      lastElement = last;
    }

    if(Array.isArray(data)) {
      for(let i = 0, l = data.length; i < l; i++) {
        indexKeys.push(this.loop(i, data[i], keys, i));
      }
    }
    else {
      let i = 0;

      for(let k in data) {
        if(!data.hasOwnProperty(k)) {
          continue;
        }

        indexKeys.push(this.loop(k, data[k], keys, i));
        i++;
      }
    }

    for(let i = 0, l = indexKeys.length; i < l; i++) {
      let iterator = indexKeys[i];

      this.el.appendChild(iterator.el);
      iterator.iterate(i);
    }

    lastElement && this.el.appendChild(lastElement);

    for(let k in this.iterators) {
      if(!this.iterators.hasOwnProperty(k)) {
        continue;
      }

      this.iterators[k].__destroy();
    }

    this.iterators = keys;
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

    if(!this.isFor && !(this.el.parentNode.__akili instanceof For)) {
      this.cancel();
    }
  }

  created() {
    this.__parent.__akili.__iterator = this;
    this.for = this.__parent.__akili;
    this.setIndex();
    this.setKey();
    this.setValue();

    this.isFor && super.created.apply(this, arguments);
  }

  compiled() {
    this.isFor && super.compiled.apply(this, arguments);
  }

  setIndex() {
    this.index = this.for.__index;
    this.scope.__set('loopIndex', this.index);
  }

  setKey() {
    this.key = this.for.__key;
    this.scope.__set('loopKey', this.key);
  }

  setValue() {
    this.value = this.for.__value;
    this.scope.__set('loopValue', this.value, true);

    this.comparsion = {
      copy: this.for.__comparisonValue,
      value: this.for.__value
    };
  }

  iterate(index) {}
}

For.Loop = Loop;
