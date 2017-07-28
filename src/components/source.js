import Url from './url.js';
import Akili from '../akili.js';

export default class Source extends Url {  
  static define() {
    Akili.component('source', Source);
  }
}