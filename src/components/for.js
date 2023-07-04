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
 * @attr {number} [chunks] - chunks to load data asynchronously
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

  __stepIterationChunk(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.drawChunk(index)
          .then(resolve)
          .catch(reject)
      });
    });
  }

  __removeExcessIterators() {
    const length = Object.keys(this.data).length;

    for (let i = length, l = this.iterators.length; i < l; i++) {
      let iterator = this.iterators[i];
      iterator.__remove();
      this.iterators.splice(i, 1);
      l--;
      i--;
    }
  }

  __completeDrawing() {
    if(this.__isRemoved) {
      return;
    }
    
    this.reset();
    this.attrs.onOut.trigger(this.data, { bubbles: true });
  }

  __createIterator() {
    let el;
    this.iteratorIndex = 0;    

    for (let i = 0, l = this.el.children.length; i < l; i++) {
      let child = this.el.children[i];
      this.iteratorIndex = i;

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
    this.iteratorEl = this.__createIteratorElement(el.outerHTML);
    el.remove();
  }

  __createIteratorElement(html) {
    let el = document.createElement('template');
    el.innerHTML = html;
    return el.content.firstChild;
  }

  created() {    
    this.__createIterator();
  }

  compiled() {
    return this.attr('in', this.draw);
  }

  removed() {
    super.removed.apply(this, arguments);
    this.iteratorEl && this.iteratorEl.remove();
    delete this.html;
    delete this.iterators;
    delete this.iteratorEl; 
    delete this.__iterator;
    delete this.__value;
  }  

  loop(key, value, index) {
    let promise = Promise.resolve();
    this.__index = index;
    this.__key = key;
    this.__value = value;    
    this.__hash = utils.createHash(value);

    if(this.iterators.length > index) {
      let iterator = this.iterators[index];        
      iterator.setIndex(this.__index === iterator.index);     
      iterator.setKey(this.__key === iterator.key);
      iterator.setValue(utils.compare(this.__hash, iterator.hash));
      return { promise, iterator };
    }
    
    let el = this.iteratorEl.cloneNode();
    el.innerHTML = this.html;    
    this.el.insertBefore(el, this.el.children[this.iteratorIndex + this.iterators.length]);    
    promise = Akili.compile(el); 
    this.iterators.push(el.__akili);  
    return { promise, iterator: el.__akili};
  }

  drawChunk(index) {
    if(this.__isRemoved) {
      return Promise.resolve();
    }

    const keys = Object.keys(this.data);
    const length = keys.length;

    if(index == length) {
      this.__removeExcessIterators();
      return Promise.resolve(this.__completeDrawing());
    }

    const promises = [];    
    let chunks = +(this.attrs.chunks || length);
    let size = index + chunks;      
    size > length && (size = length);  
    let finisher = this.__stepIterationChunk.bind(this);   

    for (let i = index; i < size; i++) {
      const key = keys[i];
      const n = i + 1;
      const res = this.loop(key, this.data[key], i);
      res.iterator.iterate(i);
      promises.push(res.promise);      

      if(n != size) {
        continue;
      }

      if(n == length) {
        this.__removeExcessIterators();
        finisher = this.__completeDrawing.bind(this);
      }

      return Promise.all(promises).then(() => finisher(n));
    }

    return Promise.resolve(this.__completeDrawing());
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
    const children = [].slice.call(this.el.children); 
    this.iterators.sort((a, b) => children.indexOf(a.el) - children.indexOf(b.el));
    this.__children.sort((a, b) => children.indexOf(a) - children.indexOf(b));    
    return this.drawChunk(0);
  }

  reset() {
    this.__iterator = null;
    this.__index = 0;
    this.__key = '';
    this.__value = null;
    this.__hash = '';
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
    this.scope.__set('loopIndex', this.index, { target });
  }

  setKey(target) {
    this.key = this.for.__key;
    this.scope.__set('loopKey', this.key, { target });
  }

  setValue(target) {
    this.value = this.for.__value;
    this.scope.__set('loopValue', this.value, { target, saveProxy: true });
    this.hash = this.for.__hash;
  }

  iterate() {}
}

For.Loop = Loop;