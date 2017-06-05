import Component from '../component.js';
import Akili from '../akili.js';

export default class Iframe extends Component {
  static matches = '[url]';
  
  static define() {
    Akili.component('iframe', Iframe);
  }

  changedUrl(url) {
    this.setSrc(url);
  }

  compiled() {
    this.attrs.hasOwnProperty('url') && this.setSrc(this.attrs.url);
  }

  setSrc(url) {
    this.attrs.src = url;
  }
};