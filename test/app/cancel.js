import Component from '../../src/component.js';

export default class Cancel extends Component {
  constructor(...args) {
    super(...args);
    this.cancel();
  }
}