import { assert } from 'chai';
import Akili from '../../src/akili.js';
import App from './app';
import { SectionOne, SectionTwo, SectionOneOne, SectionEmpty } from './sections';
import { FirstStore, SecondStore } from './store';
import Abstract from './abstract';
import Attribute from './attribute';
import Prevent from './prevent';
import Cancel from './cancel';
import All from './all';
import elements from './elements';

elements.root = document.createElement('root');
elements.home = document.createElement('home');
elements.app = document.createElement('app');
elements.abstract = document.createElement('abstract');
elements.sectionOne = document.createElement('section-one');
elements.sectionOneOne = document.createElement('section-one-one');
elements.sectionTwo = document.createElement('section-two');
elements.sectionEmpty = document.createElement('section-empty');
elements.all = document.createElement('all');
elements.forCompile = document.createElement('for-compile');

document.body.appendChild(elements.root);

Akili.component('attr', Attribute);
Akili.component('first-store', FirstStore);
Akili.component('second-store', SecondStore);
Akili.component('cancel', Cancel);
Akili.component('prevent', Prevent);
Akili.component('app', App);
Akili.component('abstract', Abstract);
Akili.component('section-one', SectionOne);
Akili.component('section-two', SectionTwo);
Akili.component('section-one-one', SectionOneOne);
Akili.component('section-empty', SectionEmpty);
Akili.component('all', All);

Akili.options.debug = false;

describe('Application initialization', () => {
  it('should not be initialized', () => {
    assert.throws(() => Akili.init(document.documentElement), '',  'by html element');
    assert.throws(() => Akili.init({}), '',  'by non-element');
  }); 

  it('should be initialized on the client side', () => {
    window.AKILI_SERVER = { 
      html: elements.root.outerHTML, 
      requestCache: { 
        __main: {
          undefined: { result: {}, date: Date.now() }
        }
      }, 
    };   

    return Akili.init(elements.root).then(() => {
      elements.root.appendChild(elements.app);
      elements.root.appendChild(elements.sectionEmpty);
      elements.root.appendChild(elements.all);
      elements.app.appendChild(elements.abstract);
      elements.app.appendChild(elements.sectionOne);
      elements.app.appendChild(elements.sectionTwo);
      elements.sectionOne.appendChild(elements.sectionOneOne);      
      Akili.compile(elements.root);
    });
  });  
});
