import Url from './url.js';
import Akili from '../akili.js';

export default class Objects extends Url {  
  constructor(...args) {
    super(...args);

    this.urlAttribute = 'data';
  }

  static define() {
    Akili.component('object', Objects);
  }
}