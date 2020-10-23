import Akili from '../akili.js';
import utils from '../utils.js';

/**
 * Store allows you to save and share data.
 * 
 * {@link https://akilijs.com/docs/store}
 */
const store = wrap({}, []);

function createProxy (obj, parents) {
  return new Proxy(obj, {
    get: (target, key) => {
      if (key == '__target') {
        return obj;
      }
      else if (key == "__keys") {
        return parents;
      }
      else if(key == '__isProxy') {
        return true;
      }
  
      return target[key];
    },
    set: (target, key, value) => {      
      const keys = [...parents, key];      
      const rootKey = keys[0];
      target[key] = wrap(value, keys);  

      if(Akili.__disableStoreProxy) {
        return true;
      }       

      if (Akili.__isolation) { 
        createIsolationObject(parents, key);
        return true;
      }

      const copy = utils.copy(store[rootKey], { plain: true });  
      Akili.root && Akili.root.__storeTriggerByName(rootKey, copy);
      return true;
    },
    deleteProperty: (target, key) => {      
      if(Akili.__disableStoreProxy) {
        delete target[key];
        return true;
      }  

      const keys = [...parents, key];
      const rootKey = keys[0];
      const value = rootKey === key? undefined: store[rootKey];

      if (Akili.__isolation) {
        createIsolationObject(parents, key);
        delete target[key];
        return true;
      }

      const copy = utils.copy(value, { plain: true });
      Akili.root && Akili.root.__storeTriggerByName(rootKey, copy);
      delete target[key];
      return true;
    }
  });
}

function createIsolationObject (parents, key) {
  const rootKeys = parents.length? [parents[0]]: [key];
  const rootKey = rootKeys[0];
  const keys = [...parents, key];
  const isolationHash = `store.${ rootKey }`;
  Akili.__isolation[isolationHash] = { updatedAt: Date.now(), rootKey, rootKeys, keys };
}

function wrap (value, keys) {
  if(typeof value != 'object' || value === null) {
    return value;
  }

  if(!utils.isPlainObject(value) && !utils.isStoreProxy(value) && value !== store) {
    return value;
  }

  let target = value;

  if(value.__isProxy) {
    target = value.__target;

    if (
      !utils.isStoreProxy(value) ||
      Akili.joinBindingKeys(keys) != Akili.joinBindingKeys(value.__keys)
    ) {
      target = utils.copy(target, { nested: false });
      value = target;
    }
  }

  const targetKeys = Object.keys(value);

  for (let i = 0, l = targetKeys.length; i < l; i++) {
    const k = targetKeys[i];
    const val = target[k];
    target[k] = wrap(val, [...keys, k]);
  }

  if (!value.__isProxy) {
    return createProxy(value, keys);
  }

  return value;
}

export default store;