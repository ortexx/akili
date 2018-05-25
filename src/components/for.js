import Component from '../component.js';
import Akili from '../akili.js';
import utils from '../utils.js';

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag for
 * @selector for[in],ol[in],ul[in],thead[in],tbody[in],tfoot[in]
 * @attr {object|array} in - data to create the loop
 * @message {object|array} out - sent on the data change
 */
export default class For extends Component {
  static matches = '[in]';
  static events = ['out'];
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
    
    this.iterators = [];
    this.iteratorRef = null;
    this.iteratorOuterHTML = null;
    this.reset();
  }

  __compareNodePropertyValue(prop, value) {
    const node = prop.node;

    if((node instanceof window.Attr) && node.name == 'in' && prop.value !== value) {
      return false;
    }
    
    return super.__compareNodePropertyValue.apply(this, arguments);
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

  loop(key, value, index) {
    this.__index = index;
    this.__key = key;
    this.__value = value;    
    this.__comparisonValue = typeof value == 'object'? { hash: utils.createObjectHash(value) }: utils.copy(value);

    if(this.iterators.length > index) {
      let iterator = this.iterators[index];
        
      if (this.__index !== iterator.index) {
        iterator.setIndex();
      }
      else {
        iterator.setIndex(true);
      }

      if (this.__key !== iterator.key) {
        iterator.setKey();
      }
      else {
        iterator.setKey(true);
      }
      
      if (!utils.compare(this.__comparisonValue, iterator.comparisonValue)) {
        iterator.setValue();
      }
      else {
        iterator.setValue(true);
      }

      this.__promises.push(Akili.compile(iterator.el, { recompile: { checkChanges: true } }));
      return iterator;
    }
    
    let el = this.createIteratorElement();
    el.innerHTML = this.html;
    this.el.insertBefore(el, this.iteratorRef);
    this.__promises.push(Akili.compile(el));
    this.iterators.push(el.__akili);
    return el.__akili;
  }

  draw(data) {
    if (typeof data != 'object' || data === null) {
      if (Akili.options.debug) {
        // eslint-disable-next-line no-console
        console.warn(`"For" component "in" attribute value type must be an object/array`);        
      }

      data = [];
    }

    this.data = data;   
    let index = 0;
    const children = [].slice.call(this.el.children); 
    this.iterators.sort((a, b) => children.indexOf(a.el) - children.indexOf(b.el));

    const loop = (key, value, index) => {
      let iterator = this.loop(key, value, index);
      iterator.iterate(index);
    };

    if(Array.isArray(data)) {
      for (let l = data.length; index < l; index++) {
        loop(index, data[index], index);
      }
    }
    else {
      let keys = Object.keys(data);

      for (let l = keys.length; index < l; index++) {
        let key = keys[index];
        loop(key, data[key], index);
      }
    }

    for (let i = index, l = this.iterators.length; i < l; i++) {
      let iterator = this.iterators[i];
      iterator.__remove();
      this.iterators.splice(i, 1);
      l--;
      i--;
    }

    return Promise.all(this.__promises).then(() => {
      this.reset();
      this.attrs.onOut.trigger(data, { bubbles: true });
    });    
  }

  /**
   * Reset the initial state
   */
  reset() {
    this.__iterator = null;
    this.__index = 0;
    this.__key = '';
    this.__value = null;
    this.__comparisonValue = null;
    this.__promises = [];
  }
}

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag loop
 * @selector loop,tr
 * @attr @see For
 * @scope {*} loopValue - data item's value of the current iteration 
 * @scope {string|number} loopKey - key of the iteration
 * @scope {number} loopIndex - index of the iteration
 */
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

    if(this.isFor) {
      return super.created.apply(this, arguments);
    }
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
    this.comparisonValue =  this.for.__comparisonValue;
  }

  iterate() {}
}

For.Loop = Loop;