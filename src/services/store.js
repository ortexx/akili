import Akili from '../akili.js';

const target = {};

const store = new Proxy(target, {
  get: (target, key) => {
    if (key == "__target") {
      return target;
    }

    return target[key];
  },
  set: (target, key, value) => {
    target[key] = value;
    Akili.root && Akili.root.store(key, value);
    
    return true;
  },
  deleteProperty: (target, key) => {
    Akili.root && Akili.root.store(key, undefined);
    delete target[key];

    return true;
  }
});

export default store;