import { assert } from 'chai';
import Include from '../../src/components/include.js';

describe('include.js', () => {
  describe('Include', () => {
    let component;

    before(() => {
      component = new Include(document.createElement('include'));
      component.__create();
      return component.__compile();
    });

    describe('.setCache()', () => {
      it('should set cache', () => {
        let cache = 1000;
        component.setCache(cache);
        assert.equal(component.cache, cache);
      });
    });

    describe('.getTemplate()', () => {
      it('should not set wrong template', done => {
        component.setTemplate('undefined').then(() => {
          done(new Error('Must throw an exception'));
        }).catch(() => done());
      });

      it('should set the right template', () => {
        return component.setTemplate('include.html');
      });
    });
  });
});
