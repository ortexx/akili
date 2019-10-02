import Akili from '../../src/akili';
import store from '../../src/services/store';
import globals from '../../src/services/store';

describe('Application deinitialization', () => {
  it('should prepare request cache', () => {
    let cache = Akili.prepareServerSideRequestCache();
    assert.isTrue(Object.keys(cache.__main).length > 0);
  });

  it('should be deinitialized', () => {
    Akili.deinit();
    assert.isNull(Akili.__init, 'check init');
    assert.isNull(Akili.__root, 'check the root');
  });

  it('should be destroyed', () => {
    Akili.destroy();
    assert.isUndefined(window.Akili, 'check window.Akili');
    assert.lengthOf(Object.keys(store.__target), 0, 'check the store');
    assert.lengthOf(Object.keys(globals.__target), 0, 'check the globals');
  });
});
