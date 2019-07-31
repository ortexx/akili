import Akili from '../akili.js';
import utils from '../utils.js';

/**
 * Store allows you to save and share data.
 * 
 * {@link https://akilijs.com/docs/store}
 */
const store = new Proxy({}, {
  get: (target, key) => {
    if (key == "__target") {
      return target;
    }

    return target[key];
  },
  set: (target, key, value) => {
    if(utils.compare(target[key], value)) {
      return true;
    }
    
    value = utils.copy(value, { plain: true });
    target[key] = value;
    Akili.root && Akili.root.__storeTriggerByName(key, value);    
    return true;
  },
  deleteProperty: (target, key) => {
    Akili.root && Akili.root.__storeTriggerByName(key, undefined);
    delete target[key];
    return true;
  }
});

export default store;