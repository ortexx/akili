import { assert } from 'chai';
import Akili from '../src/akili.js';
import router from '../src/services/router.js';
import elements from './app/elements.js';

describe('components/', () => {
  let component;

  before(() => {
    component = elements.all.__akili;
  });

  describe('if.js', () => {
    let _if, _elseIfOne, _elseIfTwo, _else;

    before(() => {
      let ei = component.children('else-if');

      _if = component.child('if');
      _elseIfOne = ei[0];
      _elseIfTwo = ei[1];
      _else = component.child('else');
    });

    it('should fill only "else"', () => {
      assert.equal(_if.el.innerHTML, '', 'check if');
      assert.equal(_elseIfOne.el.innerHTML, '', 'check else-if 1');
      assert.equal(_elseIfTwo.el.innerHTML, '', 'check else-if 2');
      assert.equal(_else.el.innerHTML, '4', 'check else');
    });

    it('should fill only "if"', () => {
      component.scope.cIfData = 0;

      assert.equal(_if.el.innerHTML, '0', 'check if');
      assert.equal(_elseIfOne.el.innerHTML, '', 'check else-if 1');
      assert.equal(_elseIfTwo.el.innerHTML, '', 'check else-if 2');
      assert.equal(_else.el.innerHTML, '', 'check else');
    });

    it('should fill only the first "else-if"', () => {
      component.scope.cIfData = 1;

      assert.equal(_if.el.innerHTML, '', 'check if');
      assert.equal(_elseIfOne.el.innerHTML, '1', 'check else-if 1');
      assert.equal(_elseIfTwo.el.innerHTML, '', 'check else-if 2');
      assert.equal(_else.el.innerHTML, '', 'check else');
    });

    it('should fill only the second "else-if"', () => {
      component.scope.cIfData = 2;

      assert.equal(_if.el.innerHTML, '', 'check if');
      assert.equal(_elseIfOne.el.innerHTML, '', 'check else-if 1');
      assert.equal(_elseIfTwo.el.innerHTML, '2', 'check else-if 2');
      assert.equal(_else.el.innerHTML, '', 'check else');
    });
  });

  describe('for.js', () => {
    let _for, _ul;

    before(() => {
      let data = [];

      for (let i = 0; i < 10; i++) {
        data.push(i);
      }
      
      _for = component.child('for');
      _ul = component.child('ul');
      component.scope.cForData = data;
    });

    it('should fill "for" node with all data', () => {
      assert.equal(_for.children().length, 10);
    });

    it('should fill "ul" node with all data', () => {
      assert.equal(_ul.children().length, 10);
    });

    it('should fill any item html', () => {
      assert.equal(_ul.children()[0].el.innerHTML, '0=0', 'check key 0');
      assert.equal(_ul.children()[5].el.innerHTML, '5=5', 'check key 5');
      assert.equal(_ul.children()[9].el.innerHTML, '9=9', 'check key 9');
    });

    it('should splice one element', () => {
      component.scope.cForData.splice(0, 1);
      assert.equal(_ul.children().length, 9, 'check length');
      assert.equal(_ul.children()[0].el.innerHTML, '0=1', 'check key 0');
    });
  });

  describe('include.js', () => {
    it('should load a template', (done) => {
      let include = document.createElement('include');

      include.setAttribute('url', 'include.html');
      include.setAttribute('on-load', '${this.cIncludeOnLoad()}');
      include.innerHTML = '1';
      component.el.appendChild(include);

      component.scope.cIncludeOnLoad = () => {
        assert.equal(include.innerHTML, '11');
        done();
      };

      Akili.compile(component.el, {recompile: true});
    });
  });

  describe('text.js,input.js,textarea.js,content.js', () => {
    describe('text input manipulations', () => {
      let input;

      before(() => {
        input = component.children('input')[0];
      });

      it('should change input value', () => {
        component.scope.cInputValue = '1';
        assert.equal(input.el.value, '1');
      });

      it('should change scope input value', () => {
        input.el.value = '2';
        input.el.dispatchEvent(new Event('input'));
        assert.equal(component.scope.cInputValue, '2');
      });

      it('should not be focused', () => {
        assert.notStrictEqual(input.el, document.activeElement);
      });

      it('should be focused', () => {
        component.scope.cInputFocus = true;
        assert.strictEqual(input.el, document.activeElement);
      });
    });

    describe('textarea manipulations', () => {
      let textarea;

      before(() => {
        textarea = component.child('textarea');
      });

      it('should change textarea value', () => {
        component.scope.cTextareaValue = '1';
        assert.equal(textarea.el.value, '1');
      });

      it('should change scope textarea value', () => {
        textarea.el.value = '2';
        textarea.el.dispatchEvent(new Event('input'));
        assert.equal(component.scope.cTextareaValue, '2');
      });
    });

    describe('content manipulations', () => {
      let content;

      before(() => {
        content = component.child('content');
      });

      it('should change content value', () => {
        component.scope.cContentValue = '1';
        assert.equal(content.el.innerHTML, '1');
      });

      it('should change scope content value', () => {
        content.el.innerHTML = '2';
        content.el.dispatchEvent(new Event('input'));
        assert.equal(component.scope.cContentValue, '2');
      });
    });

    describe('checkbox manipulations', () => {
      let checkbox;

      before(() => {
        checkbox = component.children('input[type=checkbox]')[0];
      });

      it('should be checked', () => {
        component.scope.cCheckboxChecker = true;
        assert.isOk(checkbox.el.checked);
      });

      it('should not be checked', () => {
        component.scope.cCheckboxChecker = false;
        assert.isNotOk(checkbox.el.checked);
      });
    });

    describe('select manipulations', () => {
      let select;

      before(() => {
        let data = [];

        for (let i = 0; i < 5; i++) {
          data.push(i);
        }

        select = component.child('select');
        component.scope.cSelectData = data;
      });

      it('should set the option "selected" value', () => {
        assert.equal(select.el.value, '2', 'check value');
        assert.equal(select.el.content, '2', 'check content');
      });

      it('should save the option "selected" value after any deletion', () => {
        component.scope.cSelectData.splice(0, 1);
        assert.equal(select.el.value, '3', 'check value');
        assert.equal(select.el.content, '3', 'check content');

      });

      it('should change the value', () => {
        component.scope.cSelectValue = '1';
        assert.equal(select.el.value, '1', 'check value');
        assert.equal(select.el.content, '1', 'check content');
      });

      it('should set multiple mode', () => {
        component.scope.cSelectMultiple = true;
        assert.equal(select.el.value, '1', 'check value');
        assert.equal(select.el.content[0], '1', 'check content');
      });

      it('should set multiple value', () => {
        component.scope.cSelectValue = ['1', '2'];
        assert.equal(select.el.value, '1', 'check value');
        assert.equal(select.el.content[0], '1', 'check the first content value');
        assert.equal(select.el.content[1], '2', 'check the second content value');
      });
    });
  });

  describe('radio.js', () => {
    let radio;

    before(() => {
      radio = component.child('radio');
      component.scope.cRadioValue = 'radio-2';
    });

    it('should set default value to "radio-2"', () => {
      assert.isNotOk(radio.el.querySelector("input[value='radio-1']").checked, 'check radio-1');
      assert.isOk(radio.el.querySelector("input[value='radio-2']").checked, 'check radio-2');
    });

    it('should set default value to "radio-1"', () => {
      component.scope.cRadioValue = 'radio-1';
      assert.isOk(radio.el.querySelector("input[value='radio-1']").checked, 'check radio-1');
      assert.isNotOk(radio.el.querySelector("input[value='radio-2']").checked, 'check radio-2');
    });

    it('should set default value to null', () => {
      component.scope.cRadioValue = null;
      assert.isNotOk(radio.el.querySelector("input[value='radio-1']").checked, 'check radio-1');
      assert.isNotOk(radio.el.querySelector("input[value='radio-2']").checked, 'check radio-2');
    });
  });

  describe('url.js', 'object.js', () => {
    let object;

    before(() => {
      object = component.child('object');
      component.scope.cObjectValue = '/fake';
    });

    it('should set attrbure data to object', () => {
      assert.isEqual(object.el.getAttribute('src'), '/fake');
    });
  });

  describe('route.js,a.js', () => {
    function onStateChange(callback) {
      let fn = (e) => {
        window.removeEventListener('state-changed', fn);
        callback(e);
      };

      window.addEventListener('state-changed', fn);
    }

    it('should set right url to a link', () => {
      let a = document.createElement('a');
      let route = document.createElement('route');

      a.setAttribute('state', '1');
      a.setAttribute('params', '${ ({}) }');
      a.setAttribute('query', '${ ({}) }');
      a.setAttribute('options', '${ ({}) }');
      component.el.appendChild(a);
      component.el.appendChild(route);
      Akili.compile(component.el, { recompile: true });
    });

    describe('state manipulations', () => {
      let route;

      before(() => {
        route = component.child('route');
      });

      it('should change state by click', (done) => {
        onStateChange(() => {
          assert.equal(location.pathname, '/1', 'check url');
          assert.equal(route.el.querySelector('x').innerHTML, '1', 'check html');
          done();
        });

        component.child('a').el.click();
      });

      it('should change to 1-1', (done) => {
        onStateChange(() => {
          assert.equal(route.el.querySelector('y').innerHTML, '1-1');
          done();
        });

        let state = router.getState('1.1');

        state.handler = (transition) => {
          assert.equal(transition.path.state.name, '1.1', 'check transition');
        };

        router.state('1.1');
      });

      it('should change to 1-2', (done) => {
        onStateChange(() => {
          assert.equal(route.el.querySelector('z').innerHTML, '1-2');
          done();
        });

        router.state('1.2');
      });

      it('should change to 2', (done) => {
        onStateChange(() => {
          assert.equal(route.el.querySelector('w').innerHTML, '2');
          done();
        });

        router.state('2');
      });
    });
  });
});