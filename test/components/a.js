import { assert } from 'chai';
import A from '../../src/components/a.js';
import router from '../../src/services/router.js';

describe('a.js', () => {
  describe('A', () => {
    let component;
    let currentUrl;

    before(() => {
      component = new A(document.createElement('a'));
      component.__create();
      currentUrl = 'test/url';
    });

    describe('.setUrl()', () => {
      it('should set .url property', () => {
        component.setUrl(currentUrl);
        assert.equal(component.url, currentUrl);
      });
    });

    describe('.setState()', () => {
      it('should not set the undefined state', () => {
        assert.throws(() => component.setState('a-test'));
      });

      it('should set the defined state', () => {
        let state = 'a-test';
        router.add(state, '/a-test/:id');
        component.setState(state);
        assert.equal(component.state.name, state);
      });
    });

    describe('.setActivity()', () => {
      it('should set isActiveState and inActiveState to false', () => {
        component.setActivity();
        assert.isFalse(component.scope.isActiveState, 'check isActiveState');
        assert.isFalse(component.scope.inActiveState, 'check inActiveState');
      });
    });

    describe('.setParams()', () => {
      it('should not set wrong params', () => {
        assert.throws(() => component.setParams('isNotObject'));
      });

      it('should set right params', () => {
        let params = { id: 1 };
        component.setParams(params);
        assert.equal(JSON.stringify(component.params), JSON.stringify(params));
      });
    });

    describe('.setQuery()', () => {
      it('should not set wrong query', () => {
        assert.throws(() => component.setQuery('isNotObject'));
      });

      it('should set right query', () => {
        let query = { query: 1 };
        component.setQuery(query);
        assert.equal(JSON.stringify(component.query), JSON.stringify(query));
      });
    });

    describe('.setOptions()', () => {
      it('should not set wrong options', () => {
        assert.throws(() => component.setOptions('isNotObject'));
      });

      it('should set right options', () => {
        let options = { reload: true };
        component.setOptions(options);
        assert.equal(JSON.stringify(component.options), JSON.stringify(options));
      });
    });

    describe('.setHash()', () => {
      it('should not set wrong hash', () => {
        assert.throws(() => component.setHash({is: 'notString'}));
      });

      it('should set right options', () => {
        let hash = 'hash';
        component.setHash(hash);
        assert.equal(component.hash, hash);
      });
    });

    describe('.getState()', () => {
      it('should not get undefined state', () => {
        assert.throws(() => component.getState('undefined'));
      });

      it('should get defined state', () => {
        let state = 'a-test';
        assert.equal(component.getState(state).name, state);
      });
    });

    describe('.resetHref()', () => {
      it('should set the current url', () => {
        component.resetHref();
        assert.equal(component.attrs.href, currentUrl);
      });

      it('should set the real url', () => {
        delete component.url;
        component.resetHref();
        assert.equal(component.attrs.href, '/a-test/1?query=1#hash');
      });
    });

    describe('.remove()', () => {
      it('should remove the component', () => {
        component.remove();
      });
    });
  });
});
