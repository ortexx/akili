import Url from './url.js';
import Akili from '../akili.js';

export default class Image extends Url {  
  static define() {
    Akili.component('img', this);
  }
}