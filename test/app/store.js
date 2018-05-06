import Akili from '../../src/akili.js';

export class FirstStore extends Akili.Component {
  static template = '${ this.val }';

  resolved() {
    this.store('val', 'val');
    this.scope.val = 1;
  }
}

export class SecondStore extends Akili.Component {
  static template = '${ this.val }';

  resolved() {
    this.store('val', 'val');
    this.scope.val = 2;
  }
}