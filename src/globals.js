import Akili from './akili.js';

/**
 * Globals to use the custom variables in scope expressions
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
const globals = new Proxy({}, {
  get: (target, key) => {
    const tag = `globals.${key}`;

    if(Akili.__evaluation) {
      Akili.__evaluation.component.__addTag(tag, Akili.__evaluation.node);
      return target[key];
    }
  },
  set: (target, key, value) => {
    const tag = `globals.${key}`; 
    const prev = target[key];
    target[key] = Akili.wrap(value);    
    prev !== value && Akili.evaluateTag(tag);
    return true;
  },
  deleteProperty: (target, key) => {
    const tag = `globals.${key}`;    
    Akili.removeTag(tag);
    delete target[key];
    Akili.evaluateTag(tag);
    return true;
  }
});

export default globals;