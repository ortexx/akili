import { assert } from 'chai';
import Akili from '../src/akili.js';
import Home from './app/home.js';
import elements from './app/elements.js';

elements.abstract.appendChild(elements.home);

describe('component.js', () => {
  describe('Component', () => {
    let component;
    let parentComponent;

    describe('.__constructor()', () => {
      it('should throw an error', () => {
        assert.throws(() => new Home());
      });

      it('should create an instance', () => {
        component = new Home(elements.home);
        assert.instanceOf(component, Home);
      });
    });

    describe('.__create()', () => {
      before(() => {
        component.__create();
        parentComponent = component.__evaluateParent.__akili;
      });

      it('should call created function', () => {
        assert.isOk(component.wasCreated);
      });

      describe('.__initialize()', () => {
        it('should has proxy scope', () => {
          assert.isOk(component.scope.__isProxy);
        });

        it('should has right scope proto', () => {
          assert.strictEqual(Object.getPrototypeOf(component.__scope), elements.abstract.__akili.__scope);
        });
      });

      describe('.__setParents()', () => {
        it('should has parent', () => {
          assert.strictEqual(component.__parent, elements.abstract, 'check nearest parent');
        });

        it('should has parents tree', () => {
          assert.isArray(component.__parents, 'check parents existent');
          assert.strictEqual(component.__parents[0], elements.abstract, 'check first parent');
          assert.strictEqual(component.__parents[1], elements.app, 'check second parent');
          assert.strictEqual(component.__parents[2], Akili.__root, 'check root parent');
        });

        it('should has evaluate parent', () => {
          assert.strictEqual(component.__evaluateParent, elements.app);
        });
      });
    });

    describe('children manipulation', () => {
      let el;

      before(() => {
        el = document.createElement('div');
      });
      
      describe('.__addChild()', () => {
        it('should add new child to the children list', () => {
          component.__addChild(el);
          assert.strictEqual(component.__children[component.__children.length - 1], el);
        });        
      });

      describe('.__spliceChild()', () => {
        it('should splice element from the children list', () => {
          component.__spliceChild(el);
          assert.isOk(component.__children.indexOf(el) == -1);
        });
      });
    });

    describe('.__compile()', () => {
      before(() => {
        return component.__compile();
      });

      it('should call compiled function', () => {
        assert.isOk(component.wasCompiled);
      });

      it('should create scope html binding', () => {
        assert.equal(component.__bindings.html.__data.length, 1);
      });

      it('should create scope data binding', () => {
        assert.equal(component.__bindings.data.__data.length, 1);
      });

      it('should create scope data[0] binding', () => {
        assert.equal(component.__bindings.data[0].__data.length, 1);
      });

      it('should create scope data[0].title binding', () => {
        assert.equal(component.__bindings.data[0].title.__data.length, 1);
      });

      it('should create scope data[1] binding', () => {
        assert.equal(component.__bindings.data[1].__data.length, 1);
      });

      it('should create scope data[2] binding', () => {
        assert.equal(component.__bindings.data[2].__data.length, 1);
      });

      it('should set scope a = 1', () => {
        assert.equal(component.__scope.a, 1);
      });

      it('should set scope b = 1', () => {
        assert.equal(component.__scope.b, 1);
      });

      it('should create evaluate parent scope htmlAttr binding', () => {
        assert.equal(parentComponent.__bindings.homeAttr.__data.length, 1);
      });

      it('should evaluate scope html value', () => {
        assert.equal(elements.home.querySelector('b').innerHTML, component.scope.html);
      });

      it('should create component attribute "parent"', () => {
        assert.equal(component.attrs.parent, component.__evaluateParent.__akili.scope.homeAttr);
      });

      it('should create component attribute "parentTwo"', () => {
        assert.equal(component.attrs.parentTwo, component.__evaluateParent.__akili.scope.homeAttrTwo);
      });

      it('should create component attribute "onAction"', () => {
        assert.instanceOf(component.attrs.onAction, Akili.EventEmitter);
      });

      it('should create component attribute "hidden"', () => {
        assert.isOk(component.attrs.hidden);
      });

      it('should create element attribute "boolean-hidden"', () => {
        assert.isOk(component.el.hasAttribute('boolean-hidden'));
      });

      it('should set <p> element', () => {
        assert.equal(elements.home.querySelector('p').innerHTML, parentComponent.scope.homeAttrTwo);
      });
    });

    describe('node property changing manipulations', () => {
      let node;

      before(() => {
        node = component.__bindings.html.__data[0].node;
      });

      describe('.__checkEvaluation()', () => {
        it('should be false', () => {
          assert.isNotOk(component.__checkEvaluation(node));
        });

        it('should be true', () => {
          component.__scope.html = 'Goodbye World';
          assert.isOk(component.__checkEvaluation(node));
        });
      });

      describe('.__checkNodePropertyChange()', () => {
        it('should be false', () => {
          assert.isNotOk(component.__checkNodePropertyChange(node, ['html'], 'Hello World!'));
        });

        it('should be true', () => {
          assert.isOk(component.__checkNodePropertyChange(node, ['html'], 'new value'));
        });
      });

      describe('.__evaluateNode()', () => {
        it('should change node html', () => {
          component.__disableKeys();
          component.scope.html = 'New World';
          component.__enableKeys();
          component.__evaluateNode(node);
          assert.equal(node.nodeValue, 'New World');
        });
      });

      describe('.__evaluate()', () => {
        let node;

        before(() => {
          node = parentComponent.__bindings.homeAttr.__data[0].node;
          component.__disableKeys();
          parentComponent.scope.homeAttr = 'New value';
          component.__enableKeys();
        });

        it('should return right value', () => {
          assert.equal(parentComponent.__evaluate(node), 'New value');
        });

        it('should change component attrs value', () => {
          assert.equal(component.attrs.parent, 'New value');
        });
      });
    });

    describe('.__evaluateByKeys()', () => {
      before(() => {
        component.__disableKeys();
        component.scope.data.splice(2, 1);
        component.__enableKeys();
        component.__evaluateByKeys(['data'], component.scope.data);
      });

      it('should change <z> element to undefined', () => {
        assert.equal(elements.home.querySelector('z').innerHTML, 'undefined');
      });

      it('should unbind data[2]', () => {
        assert.isNotOk(component.__bindings.data[2]);
      });

      it('should increment <f> element', () => {
        assert.equal(elements.home.querySelector('f').innerHTML, '2');
      });

      it('should not increment <s> element', () => {
        assert.equal(elements.home.querySelector('s').innerHTML, '1');
      });

      it('should not change <x> element', () => {
        assert.equal(elements.home.querySelector('x').innerHTML, component.__scope.data[0].title);
      });

      it('should not change <y> element', () => {
        assert.equal(elements.home.querySelector('y').innerHTML, JSON.stringify(component.__scope.data[1]));
      });
    });

    describe('.__evaluateNested()', () => {
      describe('evaluation with parents', () => {
        before(() => {
          component.__disableKeys();
          component.scope.data[0].title = 'New value 1';
          component.__enableKeys();
          component.__evaluateNested(['data', '0', 'title']);
        });

        it('should change <x> element to new value', () => {
          assert.equal(elements.home.querySelector('x').innerHTML, 'New value 1');
        });

        it('should increment <f> element', () => {
          assert.equal(elements.home.querySelector('f').innerHTML, '4');
        });

        it('should increment <s> element', () => {
          assert.equal(elements.home.querySelector('s').innerHTML, '2');
        });
      });

      describe('evaluation without parents', () => {
        before(() => {
          component.__disableKeys();
          component.scope.data[0].title = 'Very new value 1';
          component.__enableKeys();
          component.__evaluateNested(['data', '0', 'title'], true);
        });

        it('should change <x> element to new value', () => {
          assert.equal(elements.home.querySelector('x').innerHTML, 'Very new value 1');
        });

        it('should not increment <f> element', () => {
          assert.equal(elements.home.querySelector('f').innerHTML, '4');
        });

        it('should not increment <s> element', () => {
          assert.equal(elements.home.querySelector('s').innerHTML, '2');
        });
      });
    });

    describe('.__evaluateEvent()', () => {
      let el;

      before(() => {
        el = elements.home.querySelector('e');
        el.click();
      });

      it('should call onEvent function', () => {
        assert.equal(component.onEventCount, 1);
      });
    });

    describe('.__clearEmptyBindings()', () => {
      it('should clear empty bindings', () => {
        let obj = {
          data: {
            __data: [],
            0: {
              title: {
                __data: [1]
              },
              value: {}
            },
            1: {
              title: {
                __data: []
              }
            }
          }
        };

        let clearObj = {
          data: {
            0: {
              title: {
                __data: [1]
              }
            }
          }
        };

        component.__clearEmptyBindings(obj);
        assert.equal(JSON.stringify(obj), JSON.stringify(clearObj));
      });
    });

    describe('component attributes manipulation', () => {
      it('should change attribute', () => {
        component.attrs.parent = "Parent value";
        assert.equal(elements.home.getAttribute('parent'), "Parent value", 'check element attribute');
        assert.isOk(parentComponent.__bindings.homeAttr, 'check parent binding');
      });

      it('should change attribute with an expression', () => {
        component.attrs.parent = "${ this.newParentBinding }";
        assert.isUndefined(component.attrs.parent, 'check component attribute value');
        assert.isOk(parentComponent.__bindings.newParentBinding, 'check parent binding');
      });

      it('should delete attribute', () => {
        delete component.attrs.parent;
        assert.isNotOk(elements.home.hasAttribute('parent'));
      });
    });

    describe('.__observe()', () => {
      it('should set proxy to the object', () => {
        let obj = {};

        obj = component.__observe(obj, []);
        assert.isOk(obj.__isProxy);
      });
    });

    describe('.__nestedObserve()', () => {
      it('should set nested proxy', () => {
        let obj = {
          x: {
            y: {}
          }
        };

        obj = component.__nestedObserve(obj, []);
        assert.isOk(obj.__isProxy, 'check obj');
        assert.isOk(obj.__isProxy, 'check obj.x');
        assert.isOk(obj.__isProxy, 'check obj.y');
      });
    });

    describe('.__createIsolationObject()', () => {
      let obj;

      before(() => {
        Akili.__isolation = {};
      });

      after(() => {
        Akili.__isolation = null;
      });

      it('should return correct object', () => {
        obj = component.__createIsolationObject(['data', '0'], 'title');
        assert.equal(obj.component, component, 'check component');
        assert.equal(obj.keys[0], 'data', 'check keys');
        assert.isNotOk(obj.isDeleted, 'check deletion');
      });

      it('should return without deletion option', () => {
        obj = component.__createIsolationObject(['data', '0'], 'title', true);
        assert.isNotOk(obj.isDeleted);
      });

      it('should return also deletion option', () => {
        obj = component.__createIsolationObject([], 'data', true);
        assert.isOk(obj.isDeleted);
      });

      it('should rewrite deletion option', () => {
        obj = component.__createIsolationObject([], 'data', false);
        assert.isNotOk(obj.isDeleted);
      });
    });

    describe('.__bindNode()', () => {
      let list;

      before(() => {
        list = []
      });

      it('should create a correct object', () => {
        let keys = ['data'];
        let parents = [];
        let obj;

        component.__bindNode(list, component, keys, parents, 1);
        obj = list[0];

        assert.equal(obj.component, component, 'check component');
        assert.equal(obj.keysString, Akili.joinBindingKeys(keys), 'check keysString');
        assert.equal(Akili.joinBindingKeys(obj.keys), Akili.joinBindingKeys(keys), 'check keys');
        assert.equal(Akili.joinBindingKeys(obj.parents), Akili.joinBindingKeys(parents), 'check parents');
        assert.equal(obj.value, 1, 'check value');
        assert.equal(obj.notBinding, false, 'check notBinding');
      });

      it('should create only 2 bindings', () => {
        component.__bindNode(list, component, ['data'], [], 1);
        component.__bindNode(list, component,  ['data', '0'], ['data'], 1);
        component.__bindNode(list, component,  ['data', '0', 'title'], ['data', '0'], 1);

        assert.equal(list.length, 2, 'check count');
        assert.equal(list[0].keysString, 'data', 'check content one');
        assert.equal(list[1].keysString, Akili.joinBindingKeys(['data', '0', 'title']), 'check content two');
      });

      it('should create 3 new bindings', () => {
        component.__bindNode(list, component, ['x'], [], 1);
        component.__bindNode(list, component, ['y'], [], 1, true);
        component.__bindNode(list, component,  ['x', '0'], ['x'], 1);
        assert.equal(list.length, 5);
      });
    });

    describe('.__getBind()', () => {
      it('should get a correct binding', () => {
        let obj = component.__getBind(['data']);
        assert.strictEqual(obj, component.__bindings.data);
      });

      it('should get null', () => {
        let obj = component.__getBind(['fakeData']);
        assert.isNull(obj);
      });
    });

    describe('.__getBoundNode()', () => {
      it('should get a binding', () => {
        let obj = component.__getBoundNode(['data'], component.__bindings.data.__data[0].node);
        assert.strictEqual(obj, component.__bindings.data.__data[0]);
      });

      it('should get a binding', () => {
        let obj = component.__getBoundNode(['data'], 'fake');
        assert.isNull(obj);
      });
    });

    describe('bindings manipulation', () => {
      let node;
      let keys;

      before(() => {
        keys = ['new'];
        node = component.__bindings.html.__data[0].node;
      });

      describe('.__bind()', () => {
        it('should create a binding', () => {
          let data = {
            node: node
          };

          component.__bind(keys, data);
          assert.strictEqual(data, component.__bindings.new.__data[0]);
        });
      });

      describe('.__setNodeProperty()', () => {
        it('should set a node property', () => {
          let obj;
          let _keys;

          component.__setNodeProperty(node, keys, 1);
          _keys = Object.keys(node.__properties);
          obj = node.__properties[_keys[_keys.length - 1]];

          assert.equal(obj.component, component, 'check component');
          assert.equal(obj.keys.join('.'), keys.join('.'), 'check keys');
          assert.equal(obj.value, 1, 'check value');
          assert.equal(obj.copy, 1, 'check copy');
        });
      });

      describe('.__getNodeProperty()', () => {
        it('should get a node property', () => {
          let obj = component.__getNodeProperty(node, keys);

          assert.equal(obj.component, component, 'check component');
          assert.equal(obj.keys.join('.'), keys.join('.'), 'check keys');
          assert.equal(obj.value, 1, 'check value');
          assert.equal(obj.copy, 1, 'check copy');
        });
      });

      describe('.__deleteNodeProperty()', () => {
        it('should delete a node property', () => {
          let _keys = Object.keys(node.__properties);
          let prevHash = _keys[_keys.length - 1];
          let prevProperty = node.__properties[prevHash];
          let property;

          component.__deleteNodeProperty(node, keys);
          _keys = Object.keys(node.__properties);
          property = node.__properties[_keys[_keys.length - 1]];
          assert.notStrictEqual(property, prevProperty);
          node.__properties[prevHash] = prevProperty;
        });
      });

      describe('.__unbind()', () => {
        it('should unbind keys', () => {
          let _keys;
          let prop;

          component.__unbind(keys);
          _keys = Object.keys(node.__properties);
          prop = node.__properties[_keys[_keys.length - 1]];

          assert.isNotOk(component.__bindings.new);
          assert.notEqual(prop.keys.join('.'), keys.join('.'));
        });
      });

      describe('.__unbindByNodes()', () => {
        it('should unbind by nodes', () => {
          component.__unbindByNodes([component.__bindings.htmlTwo.__data[0].node]);

          assert.isNotOk(component.__bindings.htmlTwo);
        });
      });
    });

    describe('.appendTo()', () => {
      it('should change parent element', () => {
        component.appendTo(elements.sectionEmpty);
        assert.strictEqual(component.__parent.__akili.el, elements.sectionEmpty);
        parentComponent = component.__parent.__akili;
      });

      it('should has new evaluation parent', () => {
        assert.strictEqual(component.__evaluateParent, elements.sectionEmpty);
      });

      it('should has new scope proto', () => {
        assert.strictEqual(Object.getPrototypeOf(component.__scope), parentComponent.__scope);
      });

      it('should not change <p> element to undefined', () => {
        assert.equal(elements.home.querySelector('p').innerHTML, component.__scope.parentTwo);
      });

      it('should unbind old parent scope "htmlAttrTwo"', () => {
        assert.isNotOk(elements.app.__akili.__bindings.homeAttrTwo);
      });

      it('should bind new parent scope "htmlAttrTwo"', () => {
        assert.isOk(parentComponent.__bindings.homeAttrTwo);
      });

      it('should increment onEvent function counter', () => {
        elements.home.querySelector('e').click();
        assert.equal(component.onEventCount, 2);
      });
    });

    describe('.parent()', () => {
      it('should return nearest parent', () => {
        assert.strictEqual(component.parent().el, elements.sectionEmpty);
      });

      it('should return by selector', () => {
        assert.strictEqual(component.parent('[scope=root]').el, Akili.__root);
      });

      it('should return null', () => {
        assert.isNull(component.parent('non-existent'));
      });
    });

    describe('.parents()', () => {
      it('should return all parents list', () => {
        let parents = component.parents();

        assert.strictEqual(parents.length, 2, 'check count');
        assert.strictEqual(parents[0].el, elements.sectionEmpty, 'check nearest');
        assert.strictEqual(parents[1].el, Akili.__root, 'check root');
      });

      it('should return only one parent in the list', () => {
        assert.strictEqual(component.parents('[scope=root]')[0].el, Akili.__root);
      });

      it('should return empty array', () => {
        let parents = component.parents('non-existent');

        assert.isOk(Array.isArray && !parents.length);
      });
    });

    describe('.child()', () => {
      it('should return nearest child', () => {
        assert.strictEqual(Akili.root.child().el, elements.app);
      });

      it('should return by selector', () => {
        assert.strictEqual(Akili.root.child('section-one').el, elements.sectionOne);
      });

      it('should return null', () => {
        assert.isNull(component.child('non-existent'));
      });
    });

    describe('.children()', () => {
      it('should return all children list', () => {
        let children = elements.app.__akili.children();

        assert.strictEqual(children.length, 4, 'check count');
        assert.strictEqual(children[0].el, elements.abstract, 'check first');
        assert.strictEqual(children[1].el, elements.sectionOne, 'check second');
        assert.strictEqual(children[2].el, elements.sectionTwo, 'check third');
        assert.strictEqual(children[3].el, elements.sectionOneOne, 'check fourth');
      });

      it('should return only one child in the list', () => {
        assert.strictEqual(elements.app.__akili.children('abstract')[0].el,  elements.abstract);
      });

      it('should return empty array', () => {
        let children = component.children('non-existent');

        assert.isOk(Array.isArray && !children.length);
      });
    });

    describe('.prev()', () => {
      it('should return nearest previous element component', () => {
        assert.strictEqual(elements.sectionTwo.__akili.prev().el, elements.sectionOne);
      });

      it('should return by selector', () => {
        assert.strictEqual(elements.sectionTwo.__akili.prev('abstract').el, elements.abstract);
      });

      it('should return null', () => {
        assert.isNull(component.prev('non-existent'));
      });
    });

    describe('.before()', () => {
      it('should return all element components list from the left', () => {
        let before = elements.sectionTwo.__akili.before();

        assert.strictEqual(before.length, 2, 'check count');
        assert.strictEqual(before[0].el, elements.sectionOne, 'check nearest');
        assert.strictEqual(before[1].el, elements.abstract, 'check the next');
      });

      it('should return only one component in the list', () => {
        assert.strictEqual(elements.sectionTwo.__akili.before('abstract')[0].el, elements.abstract);
      });

      it('should return empty array', () => {
        let before = component.before('non-existent');

        assert.isOk(Array.isArray && !before.length);
      });
    });

    describe('.next()', () => {
      it('should return nearest next element component', () => {
        assert.strictEqual(elements.sectionOne.__akili.next().el, elements.sectionTwo);
      });

      it('should return by selector', () => {
        assert.strictEqual(elements.abstract.__akili.next('section-two').el, elements.sectionTwo);
      });

      it('should return null', () => {
        assert.isNull(component.next('non-existent'));
      });
    });

    describe('.after()', () => {
      it('should return all element components list from the right', () => {
        let after = elements.abstract.__akili.after();

        assert.strictEqual(after.length, 2, 'check count');
        assert.strictEqual(after[0].el, elements.sectionOne, 'check nearest');
        assert.strictEqual(after[1].el, elements.sectionTwo, 'check the next');
      });

      it('should return only one component in the list', () => {
        assert.strictEqual(elements.abstract.__akili.after('section-two')[0].el, elements.sectionTwo);
      });

      it('should return empty array', () => {
        let after = component.after('non-existent');

        assert.isOk(Array.isArray && !after.length);
      });
    });

    describe('call the evaluation error', () => {
      it('should be an error', () => {
        assert.throws(() => {
          component.__scope.data = false;
          Akili.compile(component.el, { recompile: true });
        });
      });
    });

    describe('.empty()', () => {
      before(() => {
        component.empty();
      });

      it('should clear html', () => {
        assert.isNotOk(component.el.innerHTML);
      });

      it('should remove bindings', () => {
        assert.isNotOk(Object.keys(component.__bindings).length);
      });
    });

    describe('.remove()', () => {
      before(() => {
        component.__storeByFunction('store', () => {});
        component.remove();
      });

      it('should call removed function', () => {
        assert.isOk(component.wasRemoved);
      });

      it('should be deleted from the parent element', () => {
        assert.isNotOk(parentComponent.el.querySelector('home'));
      });

      it('should remove parent bindings', () => {
        assert.isNotOk(Object.keys(parentComponent.__bindings).length);
      });

      it('should remove all store links', () => {
        assert.doesNotHaveAllKeys(Akili.__storeLinks, ['store']);
      });
    });

    describe('attributes manipulation', () => {
      let all, attr, fn;
      class TestAttr extends Akili.Component {
        created() {
          this.checkAttr? this.attr('test', 'test'): this.unattr('test', 'test');     
        }
      } 

      before(() => {
        fn = val => attr.scope.handlerTest = val;
        all = Akili.root.child('all');
        attr = all.child('attr');      
      });

      describe('.attr()', () => {
        it('should throw an error', () => {       
          let testAttr = new TestAttr(document.createElement('test-attr')); 
          testAttr.checkAttr = true;
          assert.throws(() => testAttr.created(), '', 'before the compilation');   
          assert.throws(() => attr.attr('test'));
        });

        it('should create the link by a scope property', () => {  
          attr.attr('test', 'test');            
          assert.equal(attr.__attrLinks['test'][0].keyString, 'test');
        });
  
        it('should create the link by a function', () => {  
          attr.attr('test', fn);         
          assert.strictEqual(attr.__attrLinks['test'][1].fn, fn);
        });
        
        it('should have the necessary scope value', () => {  
          all.scope.cAttr = 'link';             
          assert.equal(attr.scope.test, 'link', 'check by a scope');
          assert.equal(attr.scope.handlerTest, 'link', 'check by a function');
        });
  
        it('should change the parent scope value', () => {  
          attr.scope.test = 'linked';  
          
          return Akili.nextTick(() => {
            assert.equal(all.scope.cAttrEvent, 'linked');
          });          
        });
      });  
    
      describe('.unattr()', () => {
        it('should throw an error', () => {   
          let testAttr = new TestAttr(document.createElement('test-attr')); 
          assert.throws(() => testAttr.created(), '', 'before the compilation');        
          assert.throws(() => attr.unattr('test'));
        });

        it('should remove all links', () => {
          attr.unattr('test', 'test');
          attr.unattr('test', fn);
          assert.doesNotHaveAllKeys(attr.__attrLinks, ['test']);
        });
      }); 
    });  
    
    describe('.cancel()', () => {
      it('should not be compiled', () => { 
        assert.isNull(Akili.root.child('cancel'));
      });
    });  

    describe('.prevent()', () => {
      let prevent, all;

      before(() => {
        all = Akili.root.child('all');
        prevent = all.child('prevent');      
      });

      it('should prevent children compilation', () => {       
        assert.lengthOf(prevent.children(), 0);
      });
    });
    
    describe('set nonexistend nested scope value()', () => {
      it('should create parent object for the  key', () => {   
        component.scope.__set(['unex', 'key'], 1)    
        assert.isObject(component.scope.unex, 'check an object');
        assert.equal(component.scope.unex.key, 1, 'check the key');
      });
    });
  });
});