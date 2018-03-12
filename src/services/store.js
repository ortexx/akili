import Akili from '../akili.js';
import utils from '../utils.js';

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
    
    value = utils.copy(value);
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