import Akili from './akili.js';

/**
 * Globals to use the custom variables in scope expressions
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
const globals = new Proxy({}, {
  set: (target, key, value) => {    
    target[key] = Akili.wrap(value, { tag: `globals.${key}` });
    return true;
  },
  deleteProperty: (target, key) => {
    Akili.removeTag(`globals.${key}`);
    delete target[key];
    return true;
  }
});

export default globals;