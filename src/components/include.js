import Component from '../component.js';
import Akili from '../akili.js';
import request from '../services/request.js';

/**
 * Component to include templates by url.
 * 
 * {@link https://akilijs.com/docs/components#docs_html_templates}
 * 
 * @tag include
 * @selector include[url]
 * @attr {string} url - template path
 * @attr {number|function|boolean} [cache] - request cache {@link https://akilijs.com/docs/requests#docs_cache}
 * @message {void} load - sent on the template load
 * @message {Error} error - sent on error
 */
export default class Include extends Component {
  static transparent = true; 
  static matches = '[url]';
  static events = ['load', 'error'];

  static define() {
    Akili.component('include', this);
  }

  constructor(...args) {
    super(...args);

    this.html = this.el.innerHTML;
    this.el.innerHTML = '';
    this.connection = null;
  }

  compiled() {
    this.attr('cache', this.setCache);
    return this.attr('url', this.setTemplate);
  }

  setCache(cache) {
    this.cache = cache;
  }

  setTemplate(url) {
    this.connection && this.connection.abort();

    return request.get(url, {
      cache: this.cache,
      onStart: xhr => {
        this.connection = xhr;
      }
    }).then(res => {
      this.connection = null;
      this.empty();
      this.el.innerHTML = this.html;
      Akili.setTemplate(this.el, res.data);

      return Akili.compile(this.el, { recompile: true }).then(() => {
        this.attrs.onLoad.trigger(undefined, { bubbles: false });
      });
    }).catch(err => {
      this.attrs.onError.trigger(err, { bubbles: false });
      throw err;
    });
  }
}