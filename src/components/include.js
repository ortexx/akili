import Component from '../component.js';
import Akili from '../akili.js';
import request from '../services/request.js';

export default class Include extends Component {
  static transparent = true;
  static matches = '[url]';
  static events = ['load', 'error'];

  static define() {
    Akili.component('include', Include);
  }

  constructor(...args) {
    super(...args);

    this.html = this.el.innerHTML;
    this.el.innerHTML = '';
    this.connection = null;
  }

  changedUrl(url) {
    this.getTemplate(url);
  }

  compiled() {
    return this.getTemplate(this.attrs.url);
  }

  getTemplate(url) {
    this.connection && this.connection.abort();

    return request.get(url, {
      onStart: (xhr) => {
        this.connection = xhr;
      }
    }).then((res) => {
      this.connection = null;
      this.empty();
      this.el.innerHTML = this.html;
      Akili.setTemplate(this.el, res.data);

      return Akili.compile(this.el, { recompile: true }).then(() => {
        this.attrs.onLoad.trigger(undefined, { bubbles: false });
      });
    }).catch((err) => {
      this.attrs.onError.trigger(err, { bubbles: false });
      throw err;
    });
  }
}