import EventEmitter from '../src/event-emitter.js';
import elements from './app/elements.js';
import { assert } from 'chai';

let oldAddEventListener = Element.prototype.addEventListener;
let oldRemoveEventListener = Element.prototype.removeEventListener;
let listeners = {};

Element.prototype.addEventListener = function(name, fn) {
  if(!listeners[name]) {
    listeners[name] = [];
  }

  listeners[name].push(fn);
  return oldAddEventListener.apply(this, arguments);
};

Element.prototype.removeEventListener = function(name, fn) {
  if(!listeners[name]) {
    listeners[name] = [];
  }

  for(let i = 0; i < listeners[name].length; i++) {
    let listener = listeners[name][i];

    if(listener === fn) {
      listeners[name].splice(i, 1);
      break;
    }
  }

  if(!listeners[name].length) {
    delete listeners[name];
  }

  return oldRemoveEventListener.apply(this, arguments);
};

Element.prototype.hasEventListener = function(name, fn) {
  if(!listeners[name]) {
    return false;
  }

  for(let i = 0; i < listeners[name].length; i++) {
    let listener = listeners[name][i];

    if(listener === fn) {
      return true;
    }
  }

  return false;
};

describe('event-emitter.js', () => {
  describe('EventEmitter', () => {
    let el;
    let emitter;
    let counter = 0;
    let fn;
    
    before(() => {
      el = elements.app;
      emitter = new EventEmitter('event', el, el.__akili);
      fn = (e) => {
        counter++;
        counter == 1 && assert.equal(e.detail, 1, 'check detail');
        counter > 1 &&  assert.instanceOf(e, Event, 'check event instance');
      }
    });
    
    describe('.bind()', () => {
      it('should add event listener', () => {
        emitter.bind(fn);
        assert.isOk(el.hasEventListener('event', fn));
      });
    });

    describe('.trigger()', () => {
      it('should trigger the event', () => {
        emitter.trigger(1, {}, false);
        assert.equal(counter, 1);
      });
    });

    describe('.dispatch()', () => {
      it('should dispatch the event', () => {
        emitter.dispatch(Event, {}, true);
        assert.equal(counter, 2);
      });
    });

    describe('.unbind()', () => {
      it('should not have event listener', () => {
        emitter.unbind();
        assert.isNotOk(el.hasEventListener('event', fn));
      });
    });
  });
});