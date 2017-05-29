import Component from '../../src/component.js';

export default class Home extends Component {
  constructor(...args) {
    super(...args);

    this.el.setAttribute('hidden', 'hidden');
    this.el.setAttribute('parent', '${ this.homeAttr }');
    this.el.setAttribute('parent-two', '${ this.homeAttrTwo }');
    this.el.setAttribute('on-action', '${ this.onHomeAction() }');

    this.el.innerHTML = `
      <b>\${this.html}</b>
      <b>\${this.htmlTwo}</b>
      <p>\${this.parentTwo}</p>
      <x>\${this.data[0].title}</x> 
      <y>\${this.data[1]}</y> 
      <z>\${this.data[2]}</z>
      <f>\${this.data; ++this.a}</f>
      <s>\${this.data[0]; ++this.b}</s>
      <e on-click="\${this.onEvent()}"></e>
    `;

    this.scope.html = 'Hello World!';
    this.scope.htmlTwo = 'Hi!';
    this.scope.a = 0;
    this.scope.b = 0;

    this.scope.data = [
      { title: 'value1' },
      { title: 'value2' },
      { title: 'value3' }
    ];

    this.scope.onEvent = () => {
      this.onEventCount++;
    };

    this.changedCount = 0;
    this.onEventCount = 0;
  }
  
  created() {
    this.wasCreated = true;
  }

  compiled() {
    this.wasCompiled = true;
    this.scope.parentTwo = this.attrs.parentTwo;
  }

  changed() {
    this.changedCount++;
  }

  removed() {
    this.wasRemoved = true;
  }
};