import Akili from '../../src/akili';

describe('Application deinitialization', () => {
  it('should prepare request cache', () => {
    let cache = Akili.prepareServerSideRequestCache();
    assert.isTrue(Object.keys(cache.__main).length > 0);
  });

  it('should be deinitialized', () => {
    Akili.deinit();
  });  
});
