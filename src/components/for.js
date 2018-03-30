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
 * @attr {number|false} chunk=500 - chunk size
 * @attr {string} render=asc - render type
 * @message {object|array} out - sent on the data render
 * @message {object|array} chunk - sent on the data chunk render
 */
export default class For extends Component {
  static matches = '[in]';
  static events = ['out', 'chunk'];
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
    this.__index = 0;
    this.__count = 0;
    this.__key = '';
    this.__value = null;    
    this.__comparisonValue = null;
    this.__promises = [];
    this.renderTypes = ['asc', 'desc', 'mid'];
    this.renderType = this.renderTypes[0];
    this.iterators = [];
    this.iteratorRef = null;
    this.iteratorOuterHTML = null;
    this.chunkSize = 500;
  }

  created() {
    this.createIterator();
  }

  compiled() {
    this.attr('chunk', this.setChunkSize);
    this.attr('render', this.setRenderType);
    return this.attr('in', this.draw);
  }

  setRenderType(type) {
    if(this.renderTypes.indexOf(type) == -1) {
      throw new Error ('Wrong render type. It must be "asc", "desc" or "mid"');
    }

    this.renderType = type;
  }

  setChunkSize(size) {
    this.chunkSize = size;
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
    this.__count++;
    this.__key = key;
    this.__value = value;    
    this.__comparisonValue = utils.copy(value);
    
    if(this.iterators.length > this.__count - 1) {
      let iterator = this.iterators[this.__count - 1];
      let cCopy = iterator.comparison.copy;
        
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
      
      if (!utils.compare(cCopy, this.__comparisonValue, { ignoreUndefined: true })) {
        iterator.setValue();
      }
      else {
        iterator.setValue(true);
      }

      this.renderType !== 'asc' && this.el.insertBefore(iterator.el, this.getClosestElement(index));      
      this.__promises.push(Akili.compile(iterator.el, { recompile: true })); 
      return iterator;
    }
    
    let el = this.createIteratorElement();
    el.innerHTML = this.html; 
    this.el.insertBefore(el, this.renderType !== 'asc'? this.getClosestElement(index): this.iteratorRef);
    this.__promises.push(Akili.compile(el));
    this.iterators.push(el.__akili);
    return el.__akili;
  }

  getClosestElement(index) {
    let closest = this.iteratorRef;

    this.iterators.reduce((min, iterator) => {
      let diff = iterator.index - index;

      if((!min || diff < min) && diff > 0) {
        closest = iterator.el;
        return diff;
      }

      return min;
    }, 0);

    return closest;
  }

  /**
   * Draw the data
   * 
   * @param {object|array} data 
   * @return {Promise}
   */
  draw(data) {
    if (typeof data != 'object' || data === null) {
      if (Akili.options.debug) {
        // eslint-disable-next-line no-console
        console.warn(`"For" component "in" attribute value type must be an object/array`);        
      }

      data = [];
    }

    this.chunk && this.chunk.stop();     
    this.chunk = new Chunk(this, data);
    this.data = data;
    this.dataCopy = utils.copy(data);
    
    return this.chunk.start().then((done) => {
      for (let i = this.__count, l = this.iterators.length; i < l; i++) {
        let iterator = this.iterators[i];
        iterator.__destroy();
        this.iterators.splice(i, 1);
        l--;
        i--;
      }

      if(!done) {
        return;
      }

      return Promise.all(this.__promises).then(() => {
        this.reset();        
        this.attrs.onOut.trigger(this.data, { bubbles: true });
      });     
    });
  }

  reset() {
    this.__index = 0;
    this.__count = 0;
    this.__key = '';
    this.__value = null;    
    this.__comparisonValue = null;
    this.__promises = [];
    this.renderType = 'asc';
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

    this.comparison = {
      copy: this.for.__comparisonValue,
      value: this.for.__value
    };
  }

  iterate() {}
}

/**
 * Class to manage loop chunks
 */
export class Chunk {
  constructor(instance, data) {
    this.instance = instance;
    this.arr = this.create(data);
    this.index = 0;
  }

  start() {
    return Promise.resolve(this.next()).then(() => !this.cancelled);
  }

  next() {
    if(this.cancelled) {
      return;
    }

    if(!this.arr.length) {
      return;
    }

    if(this.index > this.arr.length - 1) {
      return;
    }

    return this.draw(this.arr[this.index]).then(() => {
      this.index++;   
      return Akili.nextTick(this.next.bind(this));
    });
  }

  /**
   * Create chunks
   * 
   * @param {object|array} data 
   * @return {array}
   */
  create(data) {
    let keys = Object.keys(data);
    Array.isArray(data) && (keys = keys.filter(key => +key == key));
    return this[`create${utils.capitalize(this.instance.renderType)}`](data, keys);
  }

  createAsc(data, keys) {
    let arr = [];

    for(let i = 0, l = keys.length; i < l; i++) {        
      if(i % this.instance.chunkSize == 0) {
        arr.push([]);
      }
      
      let key = keys[i];
      arr[arr.length - 1].push({ value: data[key], key: key, index: i });
    }

    return arr;
  }

  createDesc(data, keys) {
    let arr = [];
    let length = keys.length;

    for(let i = length - 1; i >= 0; i--) {        
      if((i + 1) % this.instance.chunkSize == 0 || i == length - 1) {
        arr.push([]);
      }
      
      let key = keys[i];
      arr[arr.length - 1].push({ value: data[key], key: key, index: i });
    }

    return arr;
  }

  createMid(data, keys) {
    let arr = [[]];
    let length = keys.length;
    let mid = Math.floor(length / 2);
    let c = 0;

    for(let i = mid, k; i >= 0; i--) {
      if(!mid) {
        continue;
      }
      
      k = mid + (mid - i + 1);
      c += 2;

      if(c % this.instance.chunkSize == 0) {
        arr.push([]);
      }
      
      let keyPrev = keys[i];
      let keyNext = keys[k];
      arr[arr.length - 1].push({ value: data[keyPrev], key: keyPrev, index: i });
      k < length && arr[arr.length - 1].push({ value: data[keyNext], key: keyNext, index: k });
    }

    for(let i = c, l = length; i < l; i++) {        
      if(i % this.instance.chunkSize == 0) {
        arr.push([]);
      }
      
      let key = keys[i];
      arr[arr.length - 1].push({ value: data[key], key: key, index: i });
    }

    return arr;
  }

  /**
   * Draw the chunk
   * 
   * @param {object|array} data 
   * @returns {Promise}
   */
  draw(data) {  
    const loop = (key, value, index) => {
      let iterator = this.instance.loop(key, value, index);
      iterator.iterate(index);
    };
    
    let p = [];
  
    for (let i = 0, l = data.length; i < l; i++) {
      let obj = data[i];
      loop(obj.key, obj.value, obj.index);
      p.push(this.instance.__promises[this.instance.__promises.length - 1]);

      if(this.cancelled) {
        break;
      }
    } 
    
    return Promise.all(p).then(() => {
      !this.cancelled && this.instance.attrs.onChunk.trigger(data, { bubbles: true });
    });
  }

  stop() {
    this.index = 0;
    this.cancelled = true;
    this.instance.reset();
  }
}

For.Loop = Loop;