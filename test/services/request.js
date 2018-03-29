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
  const end = (err, status = 200) => {
    this.status = status;

    if(err) {
      this.response = 'error';
      this.status = 500;
      this.onerror(new Error(`Wrong test url "${this.requestURL}"`));
      return;
    }

    this.onprogress && this.onprogress();
    this.onload();
  }

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
    this.requestURL == 'form' ||
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
  else if(this.requestURL == 'status404') {
    return end(null, 404);
  }

  end(!this.response);  
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
          done(new Error('must be an error response'))
        }).catch(() => done());
      });

      it('should handle bad status pattern', (done) => {
        request.query({ url: 'status404'}).then(() => {
          done(new Error('must be an error response'))
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
        return request.get('json', { 
            json: { 
              id: 1 
            },
            onProgress: () => {}
          }).then((res) => {
          assert.equal(JSON.stringify(res.data), JSON.stringify({ success: true }));
        });
      });

      it('should make request with form', () => {
        return request.get('form', { 
          form: { 
            id: 1, 
            file: new Blob([1, 0]),
            date: new Date()
          } 
        }).then((res) => {
          assert.equal(res.data, 'ok');
        });
      });

      it('should set "responseType" option', () => {
        return request.get('ping', { responseType: 'json' }).then((res) => {
          assert.equal(res.responseType, 'json');
        });
      });

      it('should set "withCredentials" option', () => {
        return request.get('ping', { withCredentials: true }).then((res) => {
          assert.isOk(res.withCredentials);
        });
      });

      it('should create cache', () => {
        return request.get('ping', { cache: 1000 }).then((res) => {
          return request.get('ping', { cache: true }).then((result) => {
            assert.equal(JSON.stringify(res), JSON.stringify(result));
          });
        });
      });

      it('should create cache', () => {
        let length = Object.keys(request.__cache).length;

        return request.get('ping', { cache: 1000, params: { x: 1 } }).then(() => {
          assert.lengthOf(Object.keys(request.__cache), length + 1);
        });
      });

      it('should remove cache', () => {
        let length = Object.keys(request.__cache).length;
        let hash = Object.keys(request.__cache)[0];
        request.removeCache(hash);        
        assert.lengthOf(Object.keys(request.__cache), length - 1);
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