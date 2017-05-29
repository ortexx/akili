import Component from '../component';
import Akili from '../akili';
import request from '../services/request';

export default class Route extends Component {
  static define() {
    Akili.component('route', Route);
  }

  constructor(...args) {
    super(...args);

    this.el.innerHTML = '';
  }

  /**
   * @param {Transition} transition
   * @returns {Promise}
   */
  setTransition(transition) {
    let state = transition.path.state;
    let params = transition.path.params;
    let url = transition.url;
    let query = transition.query;
    let p = Promise.resolve();

    function getParentScopeTransition(path) {
      if(path.parent) {
        if (path.parent.component) {
          return path.parent.component.__scope.__transition.path;
        }

        return getParentScopeTransition(path.parent);
      }

      return null;
    }

    this.__scope.__transition = {
      path: {
        state: state.name,
        data: transition.path.data,
        params: params,
        parent: getParentScopeTransition(transition.path)
      },
      params: transition.params,
      url: url,
      query: query
    };

    if (state.template) {
      this.empty();
      this.el.innerHTML = `<component>${state.template}</component>`;
    }

    if (state.templateUrl) {
      p = request.get(state.templateUrl).then((res) => {
        this.empty();
        this.el.innerHTML = `<component>${res.data}</component>`;
      });
    }

    return p.then(() => {
      return Akili.compile(this.el, { recompile: true });
    });
  }
};