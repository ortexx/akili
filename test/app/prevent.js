import Component from '../../src/component.js';

export default class Prevent extends Component {
  constructor(...args) {
    super(...args);

    this.prevent();
  }
}