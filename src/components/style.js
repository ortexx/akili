import Akili from '../akili.js';
import Component from '../component.js';

/**
 * Component for a style element.
 */
export default class Style extends Component {
  static define() {
    Akili.component('style', this);
  }

  constructor(...args) {
    super(...args);
    this.prevent();
  }
}