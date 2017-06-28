import Url from './url.js';
import Akili from '../akili.js';

export default class Audio extends Url {  
  static define() {
    Akili.component('audio', Audio);
  }
};