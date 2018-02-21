import { assert } from 'chai';
import Akili from '../../src/akili.js';
import store from '../../src/services/store.js';
import elements from '../app/elements.js';

describe('store.js', () => {
  let handler;

  before(() => {
    store.test = 'start';
    store.handler = 'start';
    handler = val => elements.sectionOne.__akili.scope.linkHandler = val;
  });

  describe('.link()', () => {
    it('should create the link by a scope property', () => {        
      elements.sectionOne.__akili.link('test', ['test']);
      elements.sectionTwo.__akili.link('test', ['tasty']);        
      assert.equal(elements.sectionOne.__akili.__links['test'][0].keyString, 'test', 'check the component.__links');
      assert.equal(Akili.__links['test'][1].keyString, 'tasty', 'check Akili.__links');
      assert.equal(elements.sectionOne.__akili.scope.test, 'start', 'check the value for sectionOne');
      assert.equal(elements.sectionTwo.__akili.scope.tasty, 'start', 'check the value for sectionTwo');
    });

    it('should change the scope property for sectionTwo', () => {
      elements.sectionOne.__akili.scope.test = 'link';   
      assert.equal(elements.sectionTwo.__akili.scope.tasty, 'link');
    });

    it('should change the scope property for sectionOne', () => {
      elements.sectionTwo.__akili.scope.tasty = 'nolink';   
      assert.equal(elements.sectionOne.__akili.scope.test, 'nolink');
    });

    it('should create the link by a function', () => { 
      elements.sectionOne.__akili.link('handler', handler);       
      assert.strictEqual(Akili.__links['handler'][0].fn, handler, 'check Akili.__links');
      assert.equal(elements.sectionOne.__akili.scope.linkHandler, 'start', 'check the value');
    });    
  });

  describe('.store()', () => {
    it('should change sectionOne scope value by property ', () => {
      elements.sectionTwo.__akili.store('test', 'end');   
      assert.equal(elements.sectionOne.__akili.scope.test, 'end');
    });

    it('should change sectionOne scope value by handler', () => {
      elements.sectionTwo.__akili.store('handler', 'end');   
      assert.equal(elements.sectionOne.__akili.scope.linkHandler, 'end');
    });
  });

  describe('.unlink()', () => {
    it('should remove all links', () => {
      elements.sectionOne.__akili.unlink('test', 'test');
      elements.sectionTwo.__akili.unlink('test', 'tasty');
      elements.sectionOne.__akili.unlink('handler', handler);

      assert.doesNotHaveAllKeys(elements.sectionOne.__akili.__links, ['test'], 'check component.__links for sectionOne');
      assert.doesNotHaveAllKeys(elements.sectionTwo.__akili.__links, ['tasty'], 'check component.__links for sectionTwo');
      assert.doesNotHaveAllKeys(Akili.__links, ['test', 'handler'], 'check Akili.__links for sectionOne');
      assert.doesNotHaveAllKeys(Akili.__links, ['tasty'], 'check Akili.__links for sectionTwo');
    });
  });
});