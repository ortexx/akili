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
  
  describe('Component.prototype.store()', () => {
    it('should create the link by a scope property', () => {        
      elements.sectionOne.__akili.store('test', ['test']);
      elements.sectionTwo.__akili.store('test', ['tasty']);        
      assert.equal(elements.sectionOne.__akili.__storeLinks['test'][0].keyString, 'test', 'check the component.__storeLinks');
      assert.equal(Akili.__storeLinks['test'][1].keyString, 'tasty', 'check Akili.__storeLinks');
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
      elements.sectionOne.__akili.store('handler', handler);       
      assert.strictEqual(Akili.__storeLinks['handler'][0].fn, handler, 'check Akili.__storeLinks');
      assert.equal(elements.sectionOne.__akili.scope.linkHandler, 'start', 'check the value');
    });    
  });  

  describe('store property changing', () => {
    it('should change sectionOne scope value by property ', () => {
      store.test = 'end';   
      assert.equal(elements.sectionOne.__akili.scope.test, 'end');
    });

    it('should change sectionOne scope value by handler', () => {
      store.handler = 'end';    
      assert.equal(elements.sectionOne.__akili.scope.linkHandler, 'end');
    });
  });

  describe('Component.prototype.unstore()', () => {
    it('should remove all links', () => {
      elements.sectionOne.__akili.unstore('test', 'test');
      elements.sectionTwo.__akili.unstore('test', 'tasty');
      elements.sectionOne.__akili.unstore('handler', handler);
      assert.doesNotHaveAllKeys(elements.sectionOne.__akili.__storeLinks, ['test'], 'check component.__storeLinks for sectionOne');
      assert.doesNotHaveAllKeys(elements.sectionTwo.__akili.__storeLinks, ['tasty'], 'check component.__storeLinks for sectionTwo');
      assert.doesNotHaveAllKeys(Akili.__storeLinks, ['test', 'handler'], 'check Akili.__storeLinks for sectionOne');
      assert.doesNotHaveAllKeys(Akili.__storeLinks, ['tasty'], 'check Akili.__storeLinks for sectionTwo');
    });
  });  
});