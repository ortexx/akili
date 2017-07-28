import Component from '../component.js';
import Akili from '../akili.js';

export default class Url extends Component {
  static matches = '[url]';

  constructor(...args) {
    super(...args);

    this.urlAttribute = 'src';
  }

  changedUrl(url) {
    this.setUrl(url);
  }

  compiled() {
    this.attrs.hasOwnProperty('url') && this.setUrl(this.attrs.url);
  }

  setUrl(url) {
    this.attrs[this.urlAttribute] = url;
  }
}