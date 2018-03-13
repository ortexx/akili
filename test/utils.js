import { assert } from 'chai';
import elements from './app/elements.js';
import utils from '../src/utils.js';
import Akili from '../src/akili.js';

describe('utils.js', () => {
  describe('utils', () => {
    describe('.isScopeProxy()', () => {
      it('should return true', () => {
        assert.isOk(utils.isScopeProxy(elements.app.__akili.__scope.proxy));
      });

      it('should return false', () => {
        assert.isNotOk(utils.isScopeProxy([]), 'check array');
        assert.isNotOk(utils.isScopeProxy({}), 'check object');
        assert.isNotOk(utils.isScopeProxy(() => {}), 'check function');
        assert.isNotOk(utils.isScopeProxy(1), 'check number');
        assert.isNotOk(utils.isScopeProxy("1"), 'check string');
        assert.isNotOk(utils.isScopeProxy(true), 'check boolean');
      });
    });

    describe('.isPlainObject()', () => {
      it('should return true', () => {
        assert.isOk(utils.isPlainObject({}));
        assert.isOk(utils.isPlainObject([]));
      });

      it('should return false', () => {
        assert.isNotOk(utils.isPlainObject(() => {}), 'check function');
        assert.isNotOk(utils.isPlainObject(utils.Component), 'check Component');
        assert.isNotOk(utils.isPlainObject(1), 'check number');
        assert.isNotOk(utils.isPlainObject("1"), 'check string');
        assert.isNotOk(utils.isPlainObject(true), 'check boolean');
      });
    });

    describe('.copy()', () => {
      it('should be equal but difference', () => {
        let obj = { key: 1, obj: utils.Component };
        let arr = ['1', '2'];

        assert.equal(JSON.stringify(utils.copy(obj)), JSON.stringify(obj), 'check object');
        assert.equal(JSON.stringify(utils.copy(arr)), JSON.stringify(arr), 'check array');
        assert.equal(utils.copy(1), 1, 'check primitive');
        assert.notStrictEqual(utils.copy(obj), obj, 'check difference');
      });

      it('should be copied only root level', () => {
        let obj = { key: 1, obj: {} };

        assert.strictEqual(utils.copy(obj, false).obj, obj.obj);
      });
    });

    describe('.makeAttributeValue()', () => {
      it('should be appropriate', () => {
        assert.equal(utils.makeAttributeValue([]), '[object Array]',  'check array');
        assert.equal(utils.makeAttributeValue({}), '[object Object]',  'check object');
        assert.equal(utils.makeAttributeValue(() => {}), '[object Function]',  'check function');
        assert.equal(utils.makeAttributeValue(1), '1', 'check number');
        assert.equal(utils.makeAttributeValue('1'), '1', 'check string');
        assert.equal(utils.makeAttributeValue(true), 'true', 'check boolean');
        assert.equal(utils.makeAttributeValue(null), '', 'check null');
        assert.equal(utils.makeAttributeValue(undefined), '', 'check undefined');
      });
    });

    describe('.compare()', () => {
      it('should be equal', () => {
        assert.isOk(utils.compare(1, 1), 'check number');
        assert.isOk(utils.compare('1', '1'), 'check string');
        assert.isOk(utils.compare(undefined, undefined), 'check undefined');
        assert.isOk(utils.compare(null, null), 'check null');
        assert.isOk(utils.compare(function x(a) {}, function x(a) {}), 'check function');
        assert.isOk(utils.compare(new Date(), new Date()), 'check date');
        assert.isOk(utils.compare(['1', 2, null], ['1', 2, null]), 'check array');
        assert.isOk(utils.compare({x: 1, y: 2}, {y: 2, x: 1}), 'check object');
        assert.isOk(utils.compare({x: {y: 2}, y: '&'}, {x: {y: 2}, y: '&'}), 'check nested object');
        assert.isOk(utils.compare({y: Akili.Component}, {y: Akili.Component}), 'check non-plain object');
      });

      it('should not be equal', () => {
        assert.isNotOk(utils.compare(1, '1'), 'check number');
        assert.isNotOk(utils.compare('1', '2'), 'check string');
        assert.isNotOk(utils.compare(undefined, null), 'check undefined');
        assert.isNotOk(utils.compare(null, {}), 'check null');
        assert.isNotOk(utils.compare(new Date(), new Date(new Date().getTime + 1)), 'check date');
        assert.isNotOk(utils.compare(function x(a) {}, function y(a) {}), 'check function');
        assert.isNotOk(utils.compare(['1', 2, null], ['1', null, 2]), 'check array');
        assert.isNotOk(utils.compare({x: 1, y: 2}, {y: 2, x: 1, z: 3}), 'check object');
        assert.isNotOk(utils.compare({x: {y: 2}, y: '&'}, {x: {y: 2, i: {}}, y: '&'}), 'check nested object');
        assert.isNotOk(utils.compare({y: Akili.Component}, {y: Akili.Scope}), 'check non-plain object');
      });
    });

    describe('.comparePreviousValue()', () => {
      it('should not be equal', () => {
        assert.isNotOk(utils.comparePreviousValue({ x: 1 }, { x: 1 }, { x: 1 }));
      });
    });

    describe('.decodeHtmlEntities()', () => {
      it('should be without html entities', () => {
        assert.equal(utils.decodeHtmlEntities('&lt;you &amp me&gt'), '<you & me>');
      });
    });

    describe('.encodeHtmlEntities()', () => {
      it('should be with html entities', () => {
        assert.equal(utils.encodeHtmlEntities('<you & me>'), '&lt;you &amp; me&gt;');
      });
    });

    describe('.capitalize()', () => {
      it('should be in the camel case', () => {
        assert.equal(utils.capitalize('you and me'), 'You and me');
      });
    });

    describe('.toCamelCase()', () => {
      it('should be in the camel case', () => {
        assert.equal(utils.toCamelCase('you-and-me'), 'youAndMe');
      });
    });

    describe('.toDashCase()', () => {
      it('should be in the dash case', () => {
        assert.equal(utils.toDashCase('YouAndMe'), '-you-and-me');
      });
    });

    describe('nested object manipulations', () => {
      let obj;

      before(() => {
        obj = {
          x: {
            y: 5,
            u: 6,
            c: 7,
            z: [
              {
                w: 1
              }
            ]
          }
        };
      });

      describe('.getPropertyByKeys()', () => {
        it('should return true value', () => {
          assert.equal(utils.getPropertyByKeys(['x', 'y'], obj), 5, 'simple checking');
          assert.equal(utils.getPropertyByKeys(['x', 'z', '0', 'w'], obj), 1, 'nested array checking');
        });

        it('should return undefined if value does not exist', () => {
          assert.isUndefined(utils.getPropertyByKeys(['x', 'f'], obj), 'simple checking');
          assert.isUndefined(utils.getPropertyByKeys(['x', 'y', 'z'], obj), 'check over primitive');
        });
      });

      describe('.hasPropertyByKeys()', () => {
        it('should return true', () => {
          assert.isOk(utils.getPropertyByKeys(['x', 'y'], obj), 'simple checking');
          assert.isOk(utils.getPropertyByKeys(['x', 'z', '0', 'w'], obj), 'nested array checking');
        });

        it('should return false', () => {
          assert.isNotOk(utils.getPropertyByKeys(['x', 'f'], obj), 'simple checking');
          assert.isNotOk(utils.getPropertyByKeys(['x', 'y', 'z'], obj), 'check over primitive');
        });
      });

      describe('.setPropertyByKeys()', () => {
        it('should set true value', () => {
          utils.setPropertyByKeys(['x', 'y'], obj, (last, val) => last ? 6 : val);
          assert.equal(obj.x.y, 6, 'set to the existent property');
          utils.setPropertyByKeys(['x', 'a', 'b'], obj, (last, val) => last ? 6 : (val || {}));
          assert.equal(obj.x.a.b, 6, 'set to the nonexistent property');
        });

        it('should return object of changed value property', () => {
          assert.strictEqual(utils.setPropertyByKeys(['x', 'z', '0', 'w'], obj, (last, val) => last ? 2 : val), obj.x.z[0]);
        });
      });

      describe('.deletePropertyByKeys()', () => {
        it('should delete property', () => {
          utils.deletePropertyByKeys(['x', 'y'], obj);
          assert.notProperty(obj.x, 'y', 'from the existent property');
          utils.deletePropertyByKeys(['x', 'a'], obj);
          assert.notProperty(obj.x, 'set to the nonexistent property');
        });

        it('should return deleted property value', () => {
          assert.equal(utils.deletePropertyByKeys(['x', 'u'], obj), 6);
        });

        it('should cancel deletion', () => {
          utils.deletePropertyByKeys(['x', 'c'], obj, val => false);
          assert.property(obj.x, 'c');
        });

        it('should not cancel deletion', () => {
          utils.deletePropertyByKeys(['x', 'c'], obj, val => true);
          assert.notProperty(obj.x, 'c');
        });
      });
    });

    describe('object property manipulations', () => {
      let obj;
      let parent;

      before(() => {
        obj = {
          x: 1
        };

        parent = {
          y: 2,
          z: 4
        };

        Object.defineProperty(obj, 'z', {
          enumerable: false,
          value: 3
        });

        Object.defineProperty(parent, 'a', {
          enumerable: false,
          value: 5
        });

        Object.setPrototypeOf(obj, parent);
      });

      describe('.getEnumerablePropertyTarget()', () => {
        it('should return enumerable target object', () => {
          assert.strictEqual(utils.getEnumerablePropertyTarget(obj, 'x'), obj, 'check current object');
          assert.strictEqual(utils.getEnumerablePropertyTarget(obj, 'y'), parent, 'check parent object');
          assert.strictEqual(utils.getEnumerablePropertyTarget(obj, 'z'), parent, 'check nested object');
        });

        it('should not return enumerable target object', () => {
          assert.isNull(utils.getEnumerablePropertyTarget(obj, 'a'), 'check existent key');
          assert.isNull(utils.getEnumerablePropertyTarget(obj, 'f'), 'check non-existent key');
        });
      });

      describe('.getOwnPropertyTarget()', () => {
        it('should return own target object', () => {
          assert.strictEqual(utils.getOwnPropertyTarget(obj, 'x'), obj, 'check current object');
          assert.strictEqual(utils.getOwnPropertyTarget(obj, 'y'), parent, 'check parent object');
          assert.strictEqual(utils.getOwnPropertyTarget(obj, 'a'), parent, 'check enumerate property');
        });

        it('should not return own target object', () => {
          assert.isNull(utils.getOwnPropertyTarget(obj, 'f'), 'check non-existent key');
        });
      });
    });

    describe('.class()', () => {
      it('should create string class attribute', () => {
        let obj = {
          red: true,
          active: 55,
          green: false
        };

        assert.equal('red active', utils.class(obj));
      });
    });

    describe('.style()', () => {
      it('should create string style attribute', () => {
        let obj = {
          color: "red",
          background: false,
          width: "10px"
        };

        assert.equal('color:red;width:10px', utils.style(obj));
      });
    });

    describe('.filter()', () => {
      it('should filter array of primitive', () => {
        let arr = [
          '1',
          '2',
          '3'
        ];

        let res = utils.filter(arr, '1');
        assert.equal(JSON.stringify(['1']), JSON.stringify(res));
      });

      it('should filter array of objects', () => {
        let arr = [
          { value: 1 },
          { value: 2 },
          { value: 3 }
        ];

        let res = utils.filter(arr, '2', 'value');
        assert.equal(JSON.stringify([{value: 2}]), JSON.stringify(res));
      });

      it('should filter using function handler without keys', () => {
        let arr = [
          { value: 1 },
          { value: 2 },
          { value: 3 }
        ];

        let res = utils.filter(arr, o => o.value === 3);
        assert.equal(JSON.stringify([{value: 3}]), JSON.stringify(res));
      });

      it('should filter using function handler with keys', () => {
        let arr = [
          { value: 1 },
          { value: 2 },
          { value: 3 }
        ];

        let res = utils.filter(arr, val => val === 3, ['value']);
        assert.equal(JSON.stringify([{value: 3}]), JSON.stringify(res));
      });

      it('should filter array with the nested property key', () => {
        let arr = [
          { x: { value: 1 } },
          { x: { value: 2 } },
          { x: { value: 3 } }
        ];

        let res = utils.filter(arr, '1', [['x', 'value']]);
        assert.equal(JSON.stringify([{ x: { value: 1 } }]), JSON.stringify(res));
      });

      it('should filter array with several keys', () => {
        let arr = [
          { x: 1, y: 2 },
          { x: 2, y: 1 },
          { x: 3, y: 3 }
        ];

        let res = utils.filter(arr, '1', ['x', 'y']);
        let res2 = utils.filter(arr, '1', [['x'], ['y']]);
        assert.equal(JSON.stringify([{ x: 1, y: 2 }, { x: 2, y: 1 }]), JSON.stringify(res), 'first option');
        assert.equal(JSON.stringify([{ x: 1, y: 2 }, { x: 2, y: 1 }]), JSON.stringify(res2), 'second option');
      });
    });

    describe('.sort()', () => {
      it('should sort array of primitive', () => {
        let arr = [3, 2, 1, 2];
        let res = utils.sort(arr, true);

        assert.equal(JSON.stringify([1, 2, 2, 3]), JSON.stringify(res));
      });

      it('should reverse array of primitive', () => {
        let arr = [1, 2, 3, 2];
        let res = utils.sort(arr, false);

        assert.equal(JSON.stringify([3, 2, 2, 1]), JSON.stringify(res));
      });

      it('should sort array by property "x"', () => {
        let arr = [{x: 3}, {x: 2}, {x: 1}, {x: 2}];
        let sorted = [{x: 1}, {x: 2}, {x: 2}, {x: 3}];

        assert.equal(JSON.stringify(sorted), JSON.stringify(utils.sort(arr, 'x')), 'check string,default');
        assert.equal(JSON.stringify(sorted), JSON.stringify(utils.sort(arr, ['x'], true)), 'check array,boolean');
        assert.equal(JSON.stringify(sorted), JSON.stringify(utils.sort(arr, [['x']], [true])), 'check array[],boolean[]');
      });

      it('should reverse array by property "x"', () => {
        let arr = [{x: 3}, {x: 2}, {x: 1}, {x: 2}];
        let sorted = [{x: 3}, {x: 2}, {x: 2}, {x: 1}];

        assert.equal(JSON.stringify(sorted), JSON.stringify(utils.sort(arr, ['x'], false)), 'check array,boolean');
        assert.equal(JSON.stringify(sorted), JSON.stringify(utils.sort(arr, [['x']], [false])), 'check array[],boolean[]');
      });

      it('should order by two keys', () => {
        let arr = [{x: 3, y: 1}, {x: 2, y: 2}, {x: 2, y: 1}, {x: 2, y: 3}];
        let sorted = [{x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3}, {x: 3, y: 1}];

        assert.equal(JSON.stringify(sorted), JSON.stringify(utils.sort(arr, ['x', 'y'], [true, true])));
      });

      it('should order nested keys', () => {
        let arr = [{x: {y: 2}}, {x: {y: 1}}];
        let sorted = [{x: {y: 1}}, {x: {y: 2}}];

        assert.equal(JSON.stringify(sorted), JSON.stringify(utils.sort(arr, [['x', 'y']], [true])));
      });
    });
  });
});

