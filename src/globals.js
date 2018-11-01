import Akili from './akili.js';

const obj = {};

/**
 * Globals to use the custom variables in scope expressions
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
const globals = new Proxy(obj, {
  get: (target, key) => {
    if(key == '__target') {
      return obj
    }   
    
    return target[key];
  },
  set: (target, key, value) => {
    target[key] = Akili.wrap(value, { tag: key });    
    return true;
  },
  deleteProperty: (target, key) => {   
    Akili.removeTag(key);
    delete target[key];
    return true;
  }
});

export default globals;