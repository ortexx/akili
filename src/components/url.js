import Component from '../component.js';
import Akili from '../akili.js';

export default class Url extends Component {
  static matches = '[url]';

  constructor(...args) {
    super(...args);
    this.urlAttribute = 'src';
  }

  compiled() {
    this.attr('url', this.setUrl);
  }

  setUrl(url) {
    this.attrs[this.urlAttribute] = url;
  }
}