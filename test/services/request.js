import request, { Request } from '../../src/services/request';

let oldXMLHttpRequestOpen = XMLHttpRequest.prototype.open;

Object.defineProperty(XMLHttpRequest.prototype, 'response', {
  writable: true
});

Object.defineProperty(XMLHttpRequest.prototype, 'status', {
  writable: true
});

XMLHttpRequest.prototype.open = function(method, url) {
  this.requestURL = url;
  this.requestMethod = method;
  return oldXMLHttpRequestOpen.apply(this, arguments);
};

XMLHttpRequest.prototype.send = function() {
  if(this.requestMethod == 'GET' && this.requestURL == 'include.html') {
    this.response = '${this.__content}1';
  }
  else if(this.requestMethod == 'GET' && this.requestURL == 'router-1.html') {
    this.response = '<x>1</x>:<route></route>';
  }
  else if(this.requestMethod == 'GET' && this.requestURL == 'router-1-1.html') {
    this.response = '<y>1-1</y>:<route></route>';
  }
  else if(this.requestMethod == 'GET' && this.requestURL == 'router-1-2.html') {
    this.response = '<z>1-2</z>';
  }
  else if(this.requestMethod == 'GET' && this.requestURL == 'router-2.html') {
    this.response = '<w>2</w>';
  }
  else if(
    this.requestURL == 'ping' || 
    this.requestURL == 'ping?x=1' ||
    (this.requestMethod == 'GET' && this.requestURL == 'get') ||
    (this.requestMethod == 'POST' && this.requestURL == 'post') ||
    (this.requestMethod == 'PUT' && this.requestURL == 'put') ||
    (this.requestMethod == 'DELETE' && this.requestURL == 'delete') ||
    (this.requestMethod == 'PATCH' && this.requestURL == 'patch')
  ) {
    this.response = 'ok';
  }
  else if(this.requestURL == 'json') {
    this.response = { success: true };
  }

  if(this.response) {
    this.status = 200;
    this.onload();
    return;
  }

  this.status = 500;
  this.response = 'error';
  this.onerror(new Error(`Wrong test url "${this.requestURL}"`));
};

describe('request.js', () => {
  describe('request', () => {
    let instance;

    before(() => {
      instance = new Request('/');
    });

    describe('.addInstance()', () => {
      it('should add new instance', () => {
        request.addInstance('new', instance);
        assert.equal(request.__instances['new'], instance);
      });
    });

    describe('.use', () => {
      it('should get an instance', () => {
        assert.equal(request.use.new, instance);
      });
    });

    describe('.removeInstance()', () => {
      it('should remove an instance', () => {
        request.removeInstance('new');
        assert.isNotOk(request.__instances['new']);
      });
    });
  });

  describe('Request', () => {
    describe('.query()', () => {
      it('should make query request', () => {
        return request.query({ url: 'ping'}).then((res) => {
          assert.equal(res.data, 'ok');
        });
      });

      it('should get the bad response', (done) => {
        request.query({ url: 'non-existent'}).then(() => {
          done(new Error('must be error response'))
        }).catch(() => done());
      });

      it('should make GET request', () => {
        return request.get('get').then((res) => {
          assert.equal(res.data, 'ok');
        });
      });

      it('should make POST request', () => {
        return request.post('post').then((res) => {
          assert.equal(res.data, 'ok');
        });
      });

      it('should make PUT request', () => {
        return request.put('put').then((res) => {
          assert.equal(res.data, 'ok');
        });
      });

      it('should make DELETE request', () => {
        return request.delete('delete').then((res) => {
          assert.equal(res.data, 'ok');
        });
      });

      it('should make PATCH request', () => {
        return request.patch('patch').then((res) => {
          assert.equal(res.data, 'ok');
        });
      });

      it('should make JSON request', () => {
        return request.get('json', { json: { id: 1 } }).then((res) => {
          assert.equal(JSON.stringify(res.data), JSON.stringify({ success: true }));
        });
      });

      it('should set "responseType" option', () => {
        return request.get('ping', { responseType: 'json' }).then((res) => {
          assert.equal(res.xhr.responseType, 'json');
        });
      });

      it('should set "withCredentials" option', () => {
        return request.get('ping', { withCredentials: true }).then((res) => {
          assert.isOk(res.xhr.withCredentials);
        });
      });

      it('should create cache', () => {
        return request.get('ping', { cache: 1000 }).then((res) => {
          assert.lengthOf(Object.keys(request.__cache), 1);
        });
      });

      it('should create cache', () => {
        return request.get('ping', { cache: 1000, params: { x: 1 } }).then((res) => {
          assert.lengthOf(Object.keys(request.__cache), 2);
        });
      });

      it('should remove cache', () => {
        let hash = Object.keys(request.__cache)[0];
        request.removeCache(hash);        
        assert.lengthOf(Object.keys(request.__cache), 1);
      });
    });

    describe('.paramsToQuery()', () => {
      it('should create query string', () => {
        let obj = {
          x: 5,
          y: false,
          z: [1, 2],
          a: {x: 1}
        };

        assert.equal(request.paramsToQuery(obj), 'x=5&y=false&z[0]=1&z[1]=2&a[x]=1');
      });
    });

    describe('.paramsFromQuery()', () => {
      it('should create object from query string', () => {
        let query = 'x=5&y=&z=1&z=2';

        let obj = {
          x: '5',
          y: '',
          z: ['1', '2']
        };

        assert.equal(JSON.stringify(request.paramsFromQuery(query)), JSON.stringify(obj));
      });

      it('should be an empty object', () => {
        let obj = request.paramsFromQuery('');
        assert.isObject(obj, 'check type');
        assert.isNotOk(Object.keys(obj).length, 'check empty or not');
      })
    });

    describe('.createFormData()', () => {
      it('should create FormData', () => {
        let obj = {
          x: 5,
          y: false,
          z: [1, 2],
          a: {x: 1}
        };

        let formData = request.createFormData(obj);
        let output = {};

        formData.forEach((val, key) => {
          output[key] = val;
        });

        assert.equal(output.x, '5', 'check x');
        assert.equal(output['z[0]'], '1', 'check z[0]');
        assert.equal(output['z[1]'], '2', 'check z[1]');
        assert.equal(output['a[x]'], '1', 'check a[x1]');
      });
    });
  });
});