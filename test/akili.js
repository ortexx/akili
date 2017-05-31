import { assert } from 'chai';
import Akili from '../src/akili.js';
import elements from './app/elements.js';
import ForCompile from './app/for-compile.js';

describe('akili.js', () => {
  describe('Akili', () => {
    describe('scope manipulations', () => {
      let name;
      let scope;
      
      before(() => {
        name = "fakeScope";
        scope = new Akili.Scope(name, document.createElement('div'));
      });

      describe('.addScope()', () => {
        it('should add new scope to the scopes list', () => {
          Akili.addScope(scope);
          assert.property(Akili.__scopes, name);
        });

        it('should not add scope with existent name', () => {
          assert.throws(() => {
            Akili.addScope(scope)
          });
        });
      });

      describe('.getScope()', () => {
        it('should return current scope', () => {
          assert.strictEqual(Akili.getScope(name), scope);
        });
      });
    });

    describe('.getAkiliParents()', () => {
      let parents;
      
      before(() => {
        parents = Akili.getAkiliParents(elements.sectionOneOne);
      });

      it('should return three parents', () => {
        assert.equal(parents.length, 3);
      });

      it('should be right order', () => {
        assert.strictEqual(parents[0], elements.sectionOne, 'check first parent');
        assert.strictEqual(parents[1], elements.app, 'check second parent');
        assert.strictEqual(parents[2], Akili.__root, 'check root element');
      });

      it('should return two parents', () => {
        parents = Akili.getAkiliParents(elements.sectionTwo);
        assert.equal(parents.length, 2);
      });
    });

    describe('.setTemplate()', () => {
      it('should return template with content replacing', () => {
        let el = document.createElement('div');

        el.innerHTML = "<b>World</b>";
        assert.equal(Akili.setTemplate(el, "<i>Hello</i>${this.__content}"), "<i>Hello</i><b>World</b>");
      });
    });

    describe('.createScopeName()', () => {
      it('should return string value', () => {
        assert.isString(Akili.createScopeName());
      });

      it('should be unique', () => {
        assert.isString(Akili.createScopeName());
      });
    });

    describe('.component()', () => {
      it('should add a component to a list', () => {
        Akili.component('for-compile', ForCompile);
        assert.property(Akili.__components, 'for-compile');
      });
    });

    describe('.unregisterComponent()', () => {
      it('should remove a component from a list', () => {
        Akili.unregisterComponent('for-compile');
        assert.notProperty(Akili.__components, 'for-compile');
        Akili.component('for-compile', ForCompile);
      });
    });

    describe('.compile()', () => {
      it('should create component for the element', () => {
        Akili.compile(elements.forCompile);
        assert.instanceOf(elements.forCompile.__akili, Akili.Component);
      });

      it('should not recompile existing', () => {
        Akili.compile(elements.app);
        assert.isNotOk(elements.app.__akili.wasRecompiled);
      });

      it('should recompile existing', () => {
        Akili.compile(elements.app, { recompile: true });
        assert.equal(elements.sectionOneOne.innerHTML, '2', 'full recompiling');
      });
    });

    describe('.createCallbackIsolation()', () => {
      it('should be in an isolation', () => {
        let fn = (callback) => {
          callback();
        };

        fn = Akili.createCallbackIsolation(fn);

        fn(() => {
          assert.isOk(Akili.__isolation, 'check before');
        });

        assert.isNotOk(Akili.__isolation, 'check after');
      });
    });

    describe('.isolate()', () => {
      let component;

      before(() => {
        component = elements.sectionTwo.__akili;
      });

      it('should create isolation object', () => {
        Akili.isolate(() => {
          assert.isOk(Akili.__isolation);
        });
      });
    
      it('should be isolate', () => {
        Akili.isolate(() => {
          component.scope.html = '1';
          assert.equal(component.el.innerHTML, '0', 'check changing');
          delete component.scope.html;
          assert.equal(component.el.innerHTML, '0', 'check deleting');
          component.scope.html = '2';
          assert.equal(component.el.innerHTML, '0', 'check resetting');
        });

        assert.equal(component.el.innerHTML, '2', 'check a result');
      });

      it('should not be isolate', () => {
        component.scope.html = '3';
        assert.equal(component.el.innerHTML, '3');
      });
    });
  });
});