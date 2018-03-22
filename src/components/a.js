import Component from '../component.js';
import router from '../services/router.js';
import Akili from '../akili.js';

export default class A extends Component {
  static matches = '[state]:not([url]),[url]:not([state])';
  static controlAttributes = true;

  static define() {
    Akili.component('a', this);
  }

  constructor(...args) {
    super(...args);

    this.state = null;
    this.params = {};
    this.query = {};
    this.hash = '';
    this.options = {};
    this.isUrl = this.el.getAttribute('url');
  }

  created() {
    this.el.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.isUrl) {
        router.location(this.attrs.url, this.options);
        return;
      }

      router.state(this.state.name, this.params, this.query, this.hash,  this.options);
    });

    this.onStateChanged = () => this.state && this.setActivity();
    window.addEventListener('state-changed', this.onStateChanged);
  }

  compiled() {
    this.attr('state', this.setState);
    this.attr('params', this.setParams);
    this.attr('query', this.setQuery);
    this.attr('hash', this.setHash);
    this.attr('options', this.setOptions);
    this.attr('url', this.setUrl);
    this.attr('state', this.resetHref, { callOnStart: false });
    this.attr('params', this.resetHref, { callOnStart: false });
    this.attr('query', this.resetHref, { callOnStart: false });
    this.attr('hash', this.resetHref, { callOnStart: false });
    this.attr('url', this.resetHref, { callOnStart: false });
    this.resetHref();
  }

  removed() {
    window.removeEventListener('state-changed', this.onStateChanged);
  }

  setUrl(url) {
    this.url = url;
  }

  setState(name) {
    this.state = this.getState(name);
    this.setActivity();
  }

  setActivity() {
    this.scope.isActiveState = router.isActiveState(this.state);
    this.scope.inActiveState = router.inActiveState(this.state);
  }

  setParams(params) {
    if (typeof params != 'object' || !params) {
      throw new Error(`Router state params must be an object`);
    }

    this.params = params;
  }

  setQuery(query) {
    if (typeof query != 'object' || !query) {
      throw new Error(`Router state query must be an object`);
    }

    this.query = query;
  }

  setHash(hash) {
    if (typeof hash != 'string') {
      throw new Error(`Router state hash must be a string`);
    }

    this.hash = hash;
  }

  setOptions(options) {
    if (typeof options != 'object' || !options) {
      throw new Error(`Router state options must be an object`);
    }

    this.options = options;
  }

  getState(name) {
    let state = router.getState(name);

    if (!state) {
      throw new Error(`Not found router state with name "${name}"`);
    }

    return state;
  }

  resetHref() {
    if (this.url) {
      this.attrs.href = this.url;
    }
    else {
      this.attrs.href = router.createStateUrl(this.state, this.params, this.query, this.hash);
    }
  }
}