import Url from './url.js';
import Akili from '../akili.js';

export default class Embed extends Url {  
  static define() {
    Akili.component('embed', this);
  }
}