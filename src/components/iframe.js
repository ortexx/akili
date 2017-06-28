import Url from './url.js';
import Akili from '../akili.js';

export default class Iframe extends Url {  
  static define() {
    Akili.component('iframe', Iframe);
  }
};