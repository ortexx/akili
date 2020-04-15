import Akili from '../../src/akili';
import router, { Transition } from '../../src/services/router';
import Component from '../../src/component';

class RouterComponent extends Component {
  static templateUrl = "router-2.html";

  static define() {    
    Akili.component('router-component', this);
  }
}

describe('router.js', () => {
  describe('router', () => {
    function onStateChange(callback, event = 'popstate') {
      const fn = e => {
        callback(e);
        window.removeEventListener(event, fn);
      };
      window.addEventListener(event, fn);
    }

    let indexHref;
    let routeOptions;

    before(() => {      
      RouterComponent.define();
      indexHref = location.href;

      routeOptions = [
        {
          state: '1',
          pattern: '^/1',
          templateUrl: "router-1.html",
          title: 'Router title'
        },
        {
          state: '1.1',
          pattern: '/1-1',
          templateUrl: "router-1-1.html"
        },
        {
          state: '1.2',
          pattern: '/1-2',
          templateUrl: "router-1-2.html"
        },
        {
          params: { o: () => 1 },
          query: { m: () => 1 },
          hash: 's',
          state: '2',
          pattern: '^/2',
          component: RouterComponent
        },
        {
          state: '3',
          pattern: '^/3',
          handler: transition => {
            if(transition.path.query.type == 1) {              
              transition.redirect('4');
            }
            else if(transition.path.query.type == 2) {
              transition.cancel();
            }
            else if(transition.path.query.type == 3) {
              transition.reload({}, { type: 4 });
            }
          }
        },
        {
          state: '4',
          pattern: '^/4',
        }
      ];
    });

    describe('.add()', () => {
      it('should add new state', () => {
        router.add('x', '/x/:id', { 
          params: { id: args => args.params.id || 4 }, 
          query: { z: args => args.query.z || 3 } 
        });
        routeOptions.forEach(route => router.add(route));
        assert.equal(router.states[0].name, 'x');
      });

      it('should not add an empty state', () => {
        assert.throws(() => router.add('', '/empty'));
      });      

      it('should not add an existent state', () => {
        assert.throws(() => router.add('x', '/x2'));
      });
    });

    describe('.init()', () => {
      it('should initialize router', () => {
        router.init('', false);
      });

      it('should not add state with wrong parent after the initializtion', () => {
        assert.throws(() => router.add('noparent.x', '/noparent'));
      });
    });

    describe('.has()', () => {
      it('should find existing state', () => {
        assert.isOk(router.has('x'));
      });

      it('should not find existing state', () => {
        assert.isNotOk(router.has('non-existent'));
      });
    });

    describe('.getState()', () => {
      it('should get the necessary state by name', () => {
        assert.equal(router.getState('x').name, 'x');
      });
    });

    describe('.setState()', () => {
      it('should set a new state', () => {
        router.setState('fake', '!fake!');
        assert.isOk(router.has('fake'));
      });
    });

    describe('.removeState()', () => {
      it('should remove state by name', () => {
        router.removeState('fake');
        assert.isNotOk(router.has('fake'));
      });
    });

    describe('.createStateUrl()', () => {
      it('should create right url by data', () => {
        let state = router.getState('x');
        let params = { id: 2, fix: 3 };
        let query = { x: 1, y: 2 };
        assert.equal(router.createStateUrl(state, params, query), '/x/2?x=1&y=2&z=3');
      });

      it('should create right url by data', () => {
        assert.equal(router.createStateUrl('x', {}, {}), '/x/4?z=3');
      });
    });

    describe('.splitSlashes()', () => {
      it('should remove repeated slashes', () => {
        let url = '/path//to///something';
        assert.equal(router.splitSlashes(url), '/path/to/something');
      });
    });

    describe('.getPatternContent()', () => {
      it('should get content', () => {
        let url = '/x/9';
        let content = router.getPatternContent(router.getState('x'), url);
        assert.equal(JSON.stringify(content.params), JSON.stringify({ id: "9" }));
      });

      it('should not get content', () => {
        let url = '/y/9';
        assert.isNull(router.getPatternContent(router.getState('x'), url));
      });
    });

    describe('.getStatesByLevel()', () => {
      it('should return 0 level', () => {
        assert.lengthOf(router.getStatesByLevel(0), 5);
      });

      it('should return 1 level', () => {
        assert.lengthOf(router.getStatesByLevel(1), 2);
      });
    });

    describe('.getArrayPatternContent()', () => {
      it('should return a necessary pattern content', () => {
        let url = '/1/1-2';
        let content = router.getArrayPatternContent(router.getStatesByLevel(1), url);
        assert.strictEqual(content.state, router.getState('1.2'));
      });
    });

    describe('.state()', () => {
      it('should change the state', () => {
        return router.state('x', { id: 1 }, { z: 2 }).then(() => {
          assert.equal(location.pathname + location.search, '/x/1?z=2');
        });        
      });

      it('should not change the state with nonexistent state', () => {
        assert.throws(() => router.state('y'));
      });

      it('should has transition', () => {
        assert.instanceOf(router.transition, Transition);
      });
    });

    describe('.back()', () => {
      it('should go back', done => {
        onStateChange(() => {
          assert.equal(location.href, indexHref);
          done();
        });

        router.back();
      });
    });

    describe('.forward()', () => {
      it('should go forward', done => {
        onStateChange(() => {
          assert.equal(location.pathname + location.search, '/x/1?z=2');
          done();
        });

        router.forward();
      });
    });

    describe('.go()', () => {
      it('should go 1 step back', done => {
        onStateChange(() => {
          assert.equal(location.href, indexHref);
          done();
        });

        router.go(-1);
      });
    });

    describe('.remove()', () => {
      it('should remove a state', () => {
        router.remove('x');
        assert.isNotOk(router.has('x'));
      });
    });

    describe('.location()', () => {
      it('should change the location', () => {
        return router.location('/x/1?z=1').then(() => {
          assert.equal(location.pathname + location.search, '/x/1?z=1');
        });        
      });
    });

    describe('.isolate()', () => {
      it('should isolate the code', () => {
        router.isolate(() => window.history.pushState(null, '', `/f/a/k/e`));
        assert.equal(location.pathname + location.search, '/f/a/k/e');
      });
    });

    describe('Transition.prototype.redirect()', () => {
      it('should redirect', done => {
        onStateChange(() => {
          assert.equal(location.pathname + location.search, '/4');
          done();
        }, 'state-changed');

        router.state('3', {},  { type: 1 });       
      });
    });

    describe('Transition.prototype.reload()', () => {
      it('should reload', done => {
        onStateChange(() => {
          assert.equal(location.pathname + location.search, '/3?type=4');
          done();
        }, 'state-changed');

        router.state('3', {},  { type: 3 });       
      });
    });

    describe('.reload()', () => {
      it('should reload', done => {
        onStateChange(() => {          
          assert.equal(location.pathname + location.search, '/3?type=4&z=1');
          done();
        }, 'state-changed');

        router.reload({}, { z: 1 });       
      });
    });

    describe('wrong url', () => {
      it('should set the default url', done => {   
        router.defaultUrl = '/3';  

        onStateChange(() => {
          assert.equal(location.pathname + location.search, '/3');
          done();
        }, 'state-changed'); 

        window.history.pushState(null, '', `/f/a/k/e`);
      });
    });

    describe('enable hash mode', () => {
      before(() => {
        router.hashMode = true;
      });

      after(() => {
        router.hashMode = false;
        window.location.hash = '';
      });

      describe('.state()', () => {
        it('should change the state', () => { 
          return router.state('4').then(() => {
            assert.equal(location.hash, '#/4');
          });
        });
      });

      describe('.location()', () => {
        it('should change url', () => { 
          return router.state('3').then(() => {
            assert.equal(location.hash, '#/3');
          });
        });
      });
    });
  });
});