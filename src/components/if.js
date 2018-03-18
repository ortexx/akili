import Component from '../component.js';
import Akili from '../akili.js';

/**
 * If component
 */
export default class If extends Component {
  static transparent = true;
  static matches = '[is]';
  static booleanAttributes = ['recreate'];

  static define() {
    Akili.component('if', this);
    Akili.component('else-if', this.ElseIf);
    Akili.component('else', this.Else);
  }

  constructor(...args) {
    super(...args);

    this.html = this.el.innerHTML;
    this.el.innerHTML = '';
    this.state = false;
    this.active = false;
    this.recreate = false;
    this.isCompiled = false;
    this.display = getComputedStyle(this.el).display;
  }

  compiled() {
    this.attr('recreate', this.setRecreation);
    return this.attr('is', val => (this.state = !!val, this.setState()));
  }

  setActivity(active) {
    this.active = active;
  }

  setRecreation(recreate) {
    this.recreate = recreate;
  }

  setState() {
    let res = this.compilation();
    let next = this.el.nextElementSibling;
    let result;

    if (!next || !next.matches('else-if,else')) {
      return;
    }

    next.__akili.setActivity(this.active || this.state);
    next.__akili.setRecreation(this.recreate);
    result = next.__akili.setState();
    return Promise.resolve(res).then(() =>  result);
  }

  compilation() {
    let res;

    if (this.state && !this.active) {
      if (this.recreate || !this.isCompiled) {
        res = this.compile();
      }

      this.el.style.display = this.display;
    }
    else {
      if (this.recreate) {
        this.__empty();
      }
      else if (!this.isCompiled) {
        res = this.compile();
      }

      this.el.style.display = "none";
    }

    return res;
  }

  compile() {
    let res;

    this.el.innerHTML = this.html;
    res = Akili.compile(this.el, { recompile: true });
    this.isCompiled = true;

    return res;
  }
}

/**
 * ElseIf component
 */
export class ElseIf extends If {
  constructor(...args) {
    super(...args);

    this.active = true;
  }
}

/**
 * Else component
 */
export class Else extends ElseIf {
  static matches = '';

  constructor(...args) {
    super(...args);

    this.el.setAttribute('is', 'true');
  }
}

If.ElseIf = ElseIf;
If.Else = Else;