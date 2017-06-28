import Url from './url.js';
import Akili from '../akili.js';

export default class Video extends Url {  
  static define() {
    Akili.component('video', Video);
  }
};