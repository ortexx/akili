import { assert } from 'chai';
import Akili from '../../src/akili.js';
import store from '../../src/services/store.js';
import elements from '../app/elements.js';

describe('store.js', () => {
  let handler;
  class TestStore extends Akili.Component {
    created() {
      this.checkStore? this.store('test', 'test'): this.unstore('test', 'test');     
    }
  } 

  before(() => {
    store.test = 'start';
    store.handler = 'start';
    handler = val => elements.sectionOne.__akili.scope.linkHandler = val;
  });
  
  describe('Component.prototype.store()', () => {
    it('should throw an error', () => {        
      let testStore = new TestStore(document.createElement('test-store')); 
      testStore.checkStore = true;
      assert.throws(() => elements.sectionOne.__akili.store('test'), '', 'nonexistent handler');
      assert.throws(() => testStore.created(), '', 'before the compilation');
    });

    it('should create the link by a scope property', () => {        
      store.test = 'start';  
      elements.sectionOne.__akili.store('test', ['test']);
      elements.sectionOne.__akili.store('test', 'test');
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
      elements.sectionOne.__akili.store('handler', handler);      
      assert.strictEqual(Akili.__storeLinks['handler'][0].fn, handler, 'check Akili.__storeLinks');
      assert.equal(elements.sectionOne.__akili.scope.linkHandler, 'start', 'check the value');
    }); 
    
    it('should create the link with all store properties by a function', () => { 
      elements.sectionOne.__akili.store(handler);       
      assert.strictEqual(Akili.__storeLinks['*'][0].fn, handler, 'check Akili.__storeLinks');
      store.test = '*'; 
      assert.equal(elements.sectionOne.__akili.scope.linkHandler, '*', 'check the value');
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

  describe('delete store property', () => {
    it('should set sectionOne scope value to undefined', () => {
      delete store.test;   
      assert.isUndefined(elements.sectionOne.__akili.scope.test);
    });
  });

  describe('Component.prototype.unstore()', () => {
    it('should throw an error', () => {        
      let testStore = new TestStore(document.createElement('test-store'));  
      assert.throws(() => elements.sectionOne.__akili.unstore('test'), '', 'nonexistent handler');
      assert.throws(() => testStore.created(), '', 'before the compilation');
    });

    it('should remove all links', () => {
      elements.sectionOne.__akili.unstore('test', 'test');
      elements.sectionTwo.__akili.unstore('test', 'tasty');
      elements.sectionOne.__akili.unstore('handler', handler);
      elements.sectionOne.__akili.unstore(handler);
      assert.doesNotHaveAllKeys(elements.sectionOne.__akili.__storeLinks, ['test', '*'], 'check component.__storeLinks for sectionOne');
      assert.doesNotHaveAllKeys(elements.sectionTwo.__akili.__storeLinks, ['tasty'], 'check component.__storeLinks for sectionTwo');
      assert.doesNotHaveAllKeys(Akili.__storeLinks, ['test', 'handler'], 'check Akili.__storeLinks for sectionOne');
      assert.doesNotHaveAllKeys(Akili.__storeLinks, ['tasty'], 'check Akili.__storeLinks for sectionTwo');
    });
  });  
});