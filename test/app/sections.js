import Component from '../../src/component.js';

export class SectionEmpty extends Component {}
export class SectionOne extends Component {}

export class SectionOneOne extends Component {
  constructor(...args) {
    super(...args);

    this.el.innerHTML = '${this.counter += 1}';
    this.scope.counter = 0;
  }
}

export class SectionTwo extends Component {
  constructor(...args) {
    super(...args);

    this.el.innerHTML = '${this.html}';
    this.scope.html = '0';
  }
}