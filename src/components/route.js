import Component from '../component.js';
import Akili from '../akili.js';
import request from '../services/request.js';

/**
 * Component to work with router templates.
 * 
 * {@link https://akilijs.com/docs/routing#docs_templates}
 * 
 * @tag route
 */
export default class Route extends Component {
  static define() {
    Akili.component('route', this);
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

    const getParentScopeTransition = (path) => {
      if (path.parent) {
        if (path.parent.component) {
          return path.parent.component.__scope.__transition.path;
        }

        return getParentScopeTransition(path.parent);
      }

      return null;
    }

    const compile = (html) => { 
      this.empty();  
      let name = 'component';

      if(state.component) {
        let exists = false;
    
        for(let key in Akili.__components) {
          const component = Akili.__components[key];
    
          if(component === state.component) {
            name = key;            
            exists = true;
            break;
          }
        }
    
        if(!exists) {
          throw new Error(`Router state "${state.name}" has no defined component`)
        } 
      }

      this.el.innerHTML = `<${ name }>${ html }</${ name }>`;
      return Akili.compile(this.el, { recompile: true });
    }

    this.__scope.__transition = {  
      parent: getParentScopeTransition(transition.path),   
      state: transition.path.state,
      data: transition.path.data,
      url: transition.path.url,
      params: transition.path.params,
      query: transition.path.query,
      hash: transition.path.hash
    };

    if (!transition.path.loaded) {
      return Akili.compile(this.el, { recompile: { checkChanges: true } });
    }

    return Promise.resolve().then(() => {
      if (state.template) {
        return state.template;
      }
  
      if (state.templateUrl) {
        return request.get(state.templateUrl).then(res => res.data);
      }
    }).then(html => compile(html));
  }
}