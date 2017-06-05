import Component from '../component.js';
import Akili from '../akili.js';

export default class Embed extends Component {
  static matches = '[url]';
  
  static define() {
    Akili.component('embed', Embed);
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