import { assert } from 'chai';
import Akili from '../src/akili.js';
import router from '../src/services/router.js';
import elements from './app/elements.js';

describe('components/', () => {
  let component;

  before(() => {
    component = elements.all.__akili;
  });

  describe('If', () => {
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

  describe('For, Loop', () => {
    let _for, _ul;
    let data;

    before(() => {
      data = [];

      for (let i = 0; i < 10; i++) {
        data.push(i);
      }
      
      _for = component.child('for');
      _ul = component.child('ul');
    });

    it('should fill "for" node with all data', () => {
      component.scope.cForData = data;
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

  describe('Include', () => {
    it('should load a template', () => {
      let include = document.createElement('include');
      let html;
      include.setAttribute('url', 'include.html');
      include.setAttribute('on-load', '${ this.cIncludeOnLoad() }');
      include.innerHTML = '1';
      component.el.appendChild(include);

      component.scope.cIncludeOnLoad = () => {
        html = include.innerHTML;
      };

      return Akili.compile(component.el, { recompile: true }).then(() => {
        assert.equal(html, '11');
      });
    });
  });

  describe('Text, Input, Textarea, Content', () => {
    describe('text input manipulations', () => {
      let input;

      before(() => {
        input = component.child('input');
      });

      it('should change the input value', () => {
        component.scope.cInputValue = '1';
        assert.equal(input.el.value, '1');
      });

      it('should change scope input value with debounce', done => {
        const fn = () => {
          assert.equal(component.scope.cInputValue, '21');
          input.el.removeEventListener('debounce', fn);
          done();
        }

        input.el.value = '2';
        input.el.dispatchEvent(new Event('input'));
        assert.equal(component.scope.cInputValue, '1');
        input.el.value += '1';
        input.el.dispatchEvent(new Event('input'));
        input.el.addEventListener('debounce', fn);        
      });

      it('should not be focused on the input', () => {
        assert.notStrictEqual(input.el, document.activeElement);
      });

      it('should be focused on the input', () => {
        component.scope.cInputFocus = true;
        assert.strictEqual(input.el, document.activeElement);
      });

      it('should be removed', () => {
        input.remove();
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
      let div;

      before(() => {
        content = component.child('content');        
        div = component.child('[contenteditable]');
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

      it('should set focus on the div', () => {
        div.setElementFocus();
        assert.strictEqual(div.el, document.activeElement, 'check the activity');
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
      let data;

      before(() => {
        data = [];

        for (let i = 0; i < 5; i++) {
          data.push(i);
        }

        select = component.child('select');
      });

      it('should set the option "selected" value', done => {
        const fn = () => {
          select.el.removeEventListener('change', fn);
          assert.equal(select.el.value, '2', 'check value');
          assert.equal(select.el.content, '2', 'check content');            
          done();
        };        
        select.el.addEventListener('change', fn);
        component.scope.cSelectData = data; 
      });
      
      it('should save the option "selected" value after any deletion', done => {
        const fn = () => {                  
          select.el.removeEventListener('change', fn); 
          assert.equal(select.el.value, '3', 'check value');
          assert.equal(select.el.content, '3', 'check content');
          done();
        };

        select.el.addEventListener('change', fn);  
        component.scope.cSelectData.splice(2, 1);
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
        component.scope.cSelectValue = ['1', '3'];
        assert.equal(select.el.value, '1', 'check value');
        assert.equal(select.el.content[0], '1', 'check the first content value');
        assert.equal(select.el.content[1], '3', 'check the second content value');
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

  describe('Url, Object, Image', () => {
    let object;
    let img;
    let imgOne;
    let imgTwo;

    before(() => {
      object = component.child('object');
      img = component.child('img');      
      component.scope.cObjectValue = '/fake';    
      component.scope.imageLoading = "viewport";
      imgOne = `base/test/img/logo.svg`;
      imgTwo = `base/test/img/logo.png`;
    });

    it('should set attrbure data to object', () => {
      assert.isOk(object.el.data.includes('/fake'));
    });
  
    it('should set image src', done => {
      img.observer.disconnect();

      const fn = () => {
        img.el.removeEventListener('load', fn);
        assert.equal(getComputedStyle(img.el).opacity, '1');
        done();
      }

      img.el.addEventListener('load', fn);  
      img.isIntersecting = true;
      component.scope.imageUrl = imgOne;
    });

    it('should handle the wrong url', done => {
      const fn = () => {
        img.el.removeEventListener('error', fn);
        assert.equal(getComputedStyle(img.el).opacity, '0');
        done();
      }

      img.el.addEventListener('error', fn);
      img.isIntersecting = true;
      component.scope.imageUrl = "unexistent.jpg";
    });

    it('should cancel the useless request', done => {
      const fn = () => {
        img.el.removeEventListener('error', fn);
        done();
      }

      img.el.addEventListener('error', fn); 
      img.isIntersecting = true;    
      component.scope.imageUrl = imgTwo;
      img.intersectionHandler([{ isIntersecting: false }]);
    });

    it('should not cancel without the viewport', done => {
      const fn = () => {
        img.el.removeEventListener('load', fn);
        done();
      }

      img.el.addEventListener('load', fn);
      component.scope.imageLoading = '';
      component.scope.imageUrl = imgOne;
    });
  });

  describe('Route, A', () => {
    function onStateChange(callback) {
      let fn = e => {
        window.removeEventListener('state-changed', fn);
        callback(e);
      };

      window.addEventListener('state-changed', fn);
    }

    it('should set the default url', done => {
      onStateChange(() => {
        assert.equal(location.pathname + location.search, '/3');
        done();
      });

      component.child('a[url]').el.click();
    });

    it('should set right url to a link', () => {
      let a = document.createElement('a');
      let route = document.createElement('route');

      a.setAttribute('state', '1');
      a.setAttribute('params', '${ ({}) }');
      a.setAttribute('query', '${ ({}) }');
      a.setAttribute('options', '${ ({}) }');
      component.el.appendChild(a);
      component.el.appendChild(route);
      return Akili.compile(component.el, { recompile: true });
    });

    describe('state manipulations', () => {
      let route;

      before(() => {
        route = component.child('route');
      });

      it('should change state by click', done => {
        onStateChange(() => {
          assert.equal(location.pathname, '/1', 'check url');
          assert.equal(route.el.querySelector('x').innerHTML, '1', 'check html');
          done();
        });

        component.child('a[state]').el.click();
      });

      it('should change to 1-1', done => {
        onStateChange(() => {
          assert.equal(route.el.querySelector('y').innerHTML, '1-1');
          done();
        });

        let state = router.getState('1.1');

        state.handler = transition => {
          assert.equal(transition.path.state.name, '1.1', 'check transition');
        };

        router.state('1.1');
      });

      it('should change to 1-2', done => {
        onStateChange(() => {
          assert.equal(route.el.querySelector('z').innerHTML, '1-2');
          done();
        });

        router.state('1.2');
      });

      it('should change to 2', done => {
        onStateChange(() => {
          assert.equal(route.el.querySelector('w').innerHTML, '2');
          done();
        });

        router.state('2');
      });
    });
  });

  describe('event stages', () => {
    it('should trigger the events', () => {
      let a = component.child('a[url]');
      assert.isTrue(a.scope.compiled, 'on-compiled');
      assert.isTrue(a.scope.resolved, 'on-resolved');
      return Akili.compile(a.el, { recompile: true }).then(() => {
        assert.isTrue(a.scope.recompiled, 'on-recompiled'); 
        a.remove();
        assert.isTrue(a.checkRemovedEvent, 'on-removed');
      });
    });
  });
});