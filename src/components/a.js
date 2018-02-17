import Component from '../component.js';
import router from '../services/router.js';
import Akili from '../akili.js';

export default class A extends Component {
  static matches = '[state]:not([url]),[url]:not([state])';
  static controlAttributes = true;
  static booleanAttributes = ['reload'];

  static define() {
    Akili.component('a', A);
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

  changedUrl(url) {
    this.setUrl(url);
    this.resetHref(url);
  }

  changedState(state) {
    this.setState(state);
    this.resetHref();
  }

  changedParams(params) {
    this.setParams(params);
    this.resetHref();
  }

  changedQuery(query) {
    this.setQuery(query);
    this.resetHref();
  }

  changedHash(query) {
    this.setHash(query);
    this.resetHref();
  }

  changedOptions(options) {
    this.setQuery(options);
  }

  changedReload(val) {
    this.setReload(val);
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
  }

  compiled() {
    this.attrs.hasOwnProperty('state') && this.setState(this.attrs.state);
    this.attrs.hasOwnProperty('params') && this.setParams(this.attrs.params);
    this.attrs.hasOwnProperty('query') && this.setQuery(this.attrs.query);
    this.attrs.hasOwnProperty('hash') && this.setHash(this.attrs.hash);
    this.attrs.hasOwnProperty('options') && this.setOptions(this.attrs.options);
    this.attrs.hasOwnProperty('reload') && this.setReload(this.attrs.reload);
    this.attrs.hasOwnProperty('url') && this.setUrl(this.attrs.url);
    this.resetHref(this.url);
  }

  setUrl(url) {
    this.url = url;
  }

  setState(name) {
    this.state = this.getState(name);
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

  setReload(val) {
    this.options.reload = val;
  }

  getState(name) {
    let state = router.getState(name);

    if (!state) {
      throw new Error(`Not found router state with name "${name}"`);
    }

    return state;
  }

  resetHref(url) {
    if (url) {
      this.attrs.href = url;
    }
    else {
      this.attrs.href = router.createStateUrl(this.state, this.params, this.query, this.hash);
    }
  }
}