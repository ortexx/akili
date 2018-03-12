import router, { Transition } from '../../src/services/router';

describe('router.js', () => {
  describe('router', () => {
    function onStateChange(callback) {
      let fn = (e) => {
        callback(e);
        window.removeEventListener('popstate', fn);
      };

      window.addEventListener('popstate', fn);
    }

    let indexHref;
    let routeOptions = {};

    before(() => {
      indexHref = location.href;
      routeOptions["1"] = {
        templateUrl: "router-1.html",
      };
      routeOptions["1-1"] = {
        templateUrl: "router-1-1.html"
      };
      routeOptions["1-2"] = {
        templateUrl: "router-1-2.html"
      };
      routeOptions["2"] = {
        templateUrl: "router-2.html"
      };
    });

    describe('.add()', () => {
      it('should add new state', () => {
        router.add('x', '/x/:id');
        router.add('1', '/1', routeOptions["1"]);
        router.add('1.1', '/1-1', routeOptions["1-1"]);
        router.add('1.2', '/1-2', routeOptions["1-2"]);
        router.add('2', '/2', routeOptions["2"]);
        assert.equal(router.states[0].name, 'x');
      });
    });

    describe('.init()', () => {
      it('should initialize router', () => {
        router.init('', false);
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
        let params = {id: 2, fix: 3};
        let query = {x: 1, y: 2};
        assert.equal(router.createStateUrl(state, params, query), '/x/2?x=1&y=2');
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
        assert.equal(router.getStatesByLevel(0).length, 3);
      });

      it('should return 1 level', () => {
        assert.equal(router.getStatesByLevel(1).length, 2);
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
        router.state('x', { id: 1 }, { y: 2 });
        assert.equal(location.pathname + location.search, '/x/1?y=2');
      });

      it('should has transition', () => {
        assert.instanceOf(router.transition, Transition);
      });
    });

    describe('.isActiveState()', () => {
      it('should be an active state', () => {
        assert.isOk(router.isActiveState('x'));
      });

      it('should not be an active state', () => {
        assert.isNotOk(router.isActiveState('1'));
      });
    });

    describe('.back()', () => {
      it('should go back', (done) => {
        onStateChange(() => {
          assert.equal(location.href, indexHref);
          done();
        });

        router.back();
      });
    });

    describe('.forward()', () => {
      it('should go forward', (done) => {
        onStateChange(() => {
          assert.equal(location.pathname + location.search, '/x/1?y=2');
          done();
        });

        router.forward();
      });
    });

    describe('.go()', () => {
      it('should go 1 step back', (done) => {
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
  });
});