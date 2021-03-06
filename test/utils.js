import { assert } from 'chai';
import elements from './app/elements.js';
import utils from '../src/utils.js';
import Akili from '../src/akili.js';
import store from '../src/services/store.js';

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

    describe('.isStoreProxy()', () => {
      it('should return true', () => {
        assert.isOk(utils.isStoreProxy(store));
      });

      it('should return false', () => {
        assert.isNotOk(utils.isStoreProxy([]), 'check array');
        assert.isNotOk(utils.isStoreProxy({}), 'check object');
        assert.isNotOk(utils.isStoreProxy(() => {}), 'check function');
        assert.isNotOk(utils.isStoreProxy(1), 'check number');
        assert.isNotOk(utils.isStoreProxy("1"), 'check string');
        assert.isNotOk(utils.isStoreProxy(true), 'check boolean');
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

    describe('.split()', () => {
      let opts = [
        { val: 'string', res: ["s", "t", "r", "i", "n", "g"] },
        { val: 'Hello World', res: ["Hello", "World"], del: /\s+/ },
        { val: 'Hello World', res: ["Hello", "World"], del: ' ' },
        { 
          val: `x = 5; y = "1;2;3"; z = '4;5;6'`, 
          res: [`x = 5`, ` y = "1;2;3"`, ` z = '4;5;6'`], 
          del: ';', 
          exclude: ["'", '"'] 
        }
      ];
    
      opts.forEach(opt => {
        assert.equal(JSON.stringify(utils.split(opt.val, opt.del, opt.exclude)), JSON.stringify(opt.res))
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

      it('should copy only root level', () => {
        let obj = { key: 1, obj: {} };
        assert.strictEqual(utils.copy(obj, { nested: false }).obj, obj.obj);
      });

      it('should not copy non-enumerable values', () => {
        let obj = { key: 1 };
        Object.defineProperty(obj, 'nonen', { enumerable: false, value: true });
        let copy = utils.copy(obj);
        assert.lengthOf(Object.getOwnPropertyNames(copy), 1);
      });

      it('should not change non-plain object', () => {
        let obj = { x: new Error('test') };
        let copy = utils.copy(obj, { plain: true });
        assert.instanceOf(copy.x, Error);
      });

      it('should copy non-enumerable values', () => {
        let obj = { key: 1 };
        Object.defineProperty(obj, 'nonen', { enumerable: false, value: true });
        let copy = utils.copy(obj, { enumerable: false });
        assert.lengthOf(Object.getOwnPropertyNames(copy), 2);
      });
    });

    describe('.includeKeys()', () => {
      it('should include the specified keys', () => {
        let obj = {x: 1, y: 1, z: 1};
        let res = {x: 1, y: 1};
        assert.equal(JSON.stringify(utils.includeKeys(obj, ['x', 'y'])), JSON.stringify(res));
      });
    });

    describe('.excludeKeys()', () => {
      it('should exclude the specified keys', () => {
        let obj = {x: 1, y: 1, z: 1};
        let res = {x: 1, z: 1};
        assert.equal(JSON.stringify(utils.excludeKeys(obj, ['y'])), JSON.stringify(res));
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
        // eslint-disable-next-line no-unused-vars
        assert.isOk(utils.compare(function x(a) {}, function x(a) {}), 'check function');
        assert.isOk(utils.compare(new Date(), new Date()), 'check date');
        assert.isOk(utils.compare(['1', 2, null], ['1', 2, null]), 'check array');
        assert.isOk(utils.compare({x: 1, y: 2}, {y: 2, x: 1}), 'check object');
        assert.isOk(utils.compare({x: 1, y: undefined}, {x: 1}, { ignoreUndefined: true }), 'check object ignoring undefined values');
        assert.isOk(utils.compare({x: {y: 2}, y: '&'}, {x: {y: 2}, y: '&'}), 'check nested object');
        assert.isOk(utils.compare({y: Akili.Component}, {y: Akili.Component}), 'check non-plain object');
      });

      it('should not be equal', () => {
        assert.isNotOk(utils.compare(1, '1'), 'check number');
        assert.isNotOk(utils.compare('1', '2'), 'check string');
        assert.isNotOk(utils.compare(undefined, null), 'check undefined');
        assert.isNotOk(utils.compare(null, {}), 'check null');
        assert.isNotOk(utils.compare(new Date(), new Date(new Date().getTime + 1)), 'check date');
        // eslint-disable-next-line no-unused-vars
        assert.isNotOk(utils.compare(function x(a) {}, function y(a) {}), 'check function');
        assert.isNotOk(utils.compare(['1', 2, null], ['1', null, 2]), 'check array');
        assert.isNotOk(utils.compare({x: 1, y: 2}, {y: 2, x: 1, z: 3}), 'check object');
        assert.isNotOk(utils.compare({x: 1, y: undefined}, {x: 1}, { ignoreUndefined: false }), 'check object including undefined values');
        assert.isNotOk(utils.compare({x: {y: 2}, y: '&'}, {x: {y: 2, i: {}}, y: '&'}), 'check nested object');
        assert.isNotOk(utils.compare({y: Akili.Component}, {y: Akili.Scope}), 'check non-plain object');
      });
    });

    describe('.escapeForRegExp()', () => {
      it('should change the string right way', () => {
        const str = 'hello \\ ^ $ * + ? . ( ) | { } [ ]';
        const escaped = 'hello \\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]';
        assert.equal(utils.escapeForRegExp(str), escaped);
      });
    });

    describe('.createHash()', () => {
      it('should be equal', () => {
        assert.equal(utils.createHash({ x: 1, z: { y: 1 } }), utils.createHash({ x: 1, z: { y: 1 } }));
      });

      it('should not be equal', () => {
        assert.notEqual(utils.createHash({ x: 1, z: { y: 2 } }), utils.createHash({ x: 1, z: { y: 3 } }));
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

        Object.defineProperty(obj, 'e', {
          enumerable: false
        });
      });      

      describe('.getPropertyByKeys()', () => {
        it('should return the right value', () => {
          const closest = [];
          assert.equal(utils.getPropertyByKeys(['x', 'y'], obj), 5, 'simple checking');
          assert.equal(utils.getPropertyByKeys(['x', 'z', '0', 'w'], obj), 1, 'nested array checking');
          const val = utils.getPropertyByKeys(['x', '6'], obj, { closest });
          assert.strictEqual(val, obj.x, 'closest value checking');
          assert.isOk(closest[0] == 'x' && closest.length == 1, 'closest keys checking');
        });

        it('should return undefined if value does not exist', () => {
          assert.isUndefined(utils.getPropertyByKeys(['x', 'f'], obj), 'simple checking');
          assert.isUndefined(utils.getPropertyByKeys(['x', 'y', 'z'], obj), 'check over primitive');
        });
      });

      describe('.hasPropertyByKeys()', () => {
        it('should return true', () => {
          assert.isOk(utils.hasPropertyByKeys(['x', 'y'], obj), 'simple checking');
          assert.isOk(utils.hasPropertyByKeys(['x', 'z', '0', 'w'], obj), 'nested array checking');
        });

        it('should return false', () => {
          assert.isNotOk(utils.hasPropertyByKeys(['x', 'f'], obj), 'simple checking');
          assert.isNotOk(utils.hasPropertyByKeys(['x', 'y', 'z'], obj), 'check over primitive');
        });
      });

      describe('.hasEnumerablePropertyByKeys()', () => {
        it('should return true', () => {
          assert.isOk(utils.hasEnumerablePropertyByKeys(['x', 'y'], obj), 'simple checking');
        });

        it('should return false', () => {
          assert.isNotOk(utils.hasEnumerablePropertyByKeys(['e'], obj), 'simple checking');
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
          utils.deletePropertyByKeys(['x', 'c'], obj, () => false);
          assert.property(obj.x, 'c');
        });

        it('should not cancel deletion', () => {
          utils.deletePropertyByKeys(['x', 'c'], obj, () => true);
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
          z: {
            u: 1
          }
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
          assert.strictEqual(utils.getEnumerablePropertyTarget(obj, ['x']), obj, 'check current object');
          assert.strictEqual(utils.getEnumerablePropertyTarget(obj, ['y']), parent, 'check parent object');
          assert.strictEqual(utils.getEnumerablePropertyTarget(obj, ['z']), parent, 'check nested object');
        });

        it('should not return enumerable target object', () => {
          assert.isNull(utils.getEnumerablePropertyTarget(obj, ['a']), 'check existent key');
          assert.isNull(utils.getEnumerablePropertyTarget(obj, ['f']), 'check non-existent key');
        });
      });

      describe('.getOwnPropertyTarget()', () => {
        it('should return own target object', () => {
          assert.strictEqual(utils.getOwnPropertyTarget(obj, ['x']), obj, 'check current object');
          assert.strictEqual(utils.getOwnPropertyTarget(obj, ['y']), parent, 'check parent object');
          assert.strictEqual(utils.getOwnPropertyTarget(obj, ['a']), parent, 'check enumerate property');
          assert.strictEqual(utils.getOwnPropertyTarget(obj, ['z', 'u']), parent, 'check nested object');
        });

        it('should not return own target object', () => {
          assert.isNull(utils.getOwnPropertyTarget(obj, ['f']), 'check non-existent key');
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

      it('should return an empty string', () => {
        assert.isEmpty(utils.class());
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

      it('should return an empty string', () => {
        assert.isEmpty(utils.style());
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

      it('should filter array of RegExp dangerous primitive', () => {
        let arr = [
          '1',
          '2(^',
          '3'
        ];

        let res = utils.filter(arr, '2(');
        assert.equal(JSON.stringify([arr[1]]), JSON.stringify(res));
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

      it('should sort dates', () => {
        let now = new Date();
        let after = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        let before = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        let arr = [after, before, now];
        let res = utils.sort(arr, true);
        assert.equal(res[0], before, 'before');
        assert.equal(res[1], now, 'now');
        assert.equal(res[2], after, 'after');
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

