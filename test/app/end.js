import Akili from '../../src/akili';
import router from '../../src/services/router';

describe('Application deinitialization', () => {
  it('should be deinitialized', () => {
    Akili.deinit();
  });  
});
