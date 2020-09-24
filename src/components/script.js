import Akili from '../akili.js';
import Component from '../component.js';

/**
 * Component for a script element.
 */
export default class Script extends Component {
  static define() {
    Akili.component('script', this);
  }

  constructor(...args) {
    super(...args);
    this.prevent();
  }
}