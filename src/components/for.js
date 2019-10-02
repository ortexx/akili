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
    this.iteratorEl = null;
    this.reset();
  }

  __prepareAttributeIn(node, value) {  
    if((node instanceof window.Attr) && node.name == 'in') {
      return value;
    }

    return super.__prepareAttributeIn.apply(this, arguments);
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

  removed() {
    delete this.html;
    delete this.iterators;
    delete this.iteratorEl; 
    delete this.__iterator;
    delete this.__value;
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
    this.iteratorEl = this.createIteratorElement(el.outerHTML);
    el.remove();
  }

  createIteratorElement(html) {
    let el = document.createElement('template');
    el.innerHTML = html;
    return el.content.firstChild;
  }

  loop(key, value, index) {
    this.__index = index;
    this.__key = key;
    this.__value = value;    
    this.__hash = utils.createHash(value);

    if(this.iterators.length > index) {
      let iterator = this.iterators[index];        
      iterator.setIndex(this.__index === iterator.index);     
      iterator.setKey(this.__key === iterator.key);
      iterator.setValue(utils.compare(this.__hash, iterator.hash));
      this.__promises.push(Akili.compile(iterator.el, { 
        recompile: { 
          checkChanges: true
        } 
      }));
      return iterator;
    }
    
    let el = this.iteratorEl.cloneNode();
    el.innerHTML = this.html;
    this.el.appendChild(el);
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
    this.__children.sort((a, b) => children.indexOf(a) - children.indexOf(b));
    const loop = (key, value, index) => this.loop(key, value, index).iterate(index);

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
    this.__hash = '';
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

  removed() {
    super.removed.apply(this, arguments);
    delete this.for;
    delete this.value;
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
    this.hash = this.for.__hash;
  }

  iterate() {}
}

For.Loop = Loop;