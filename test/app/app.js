import Component from '../../src/component.js';

export default class App extends Component {
  
  constructor(el, scope) {
    super(el, scope);
    
    this.scope.proxy = {
      x: {}
    };

    this.scope.homeAttr = 'home';
    this.scope.homeAttrTwo = 'home two';

    this.scope.onHomeAction = () => {
      this.onHomeActionCount++;
    };

    this.onHomeActionCount = 0;
    this.recompiledCount = -1;
  }

  compiled() {
    this.recompiledCount++;
  }
}