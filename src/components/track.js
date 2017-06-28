import Url from './url.js';
import Akili from '../akili.js';

export default class Track extends Url {  
  static define() {
    Akili.component('track', Track);
  }
};