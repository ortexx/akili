import Akili from '../../src/akili.js';
import App from './app';
import { SectionOne, SectionTwo, SectionOneOne, SectionEmpty } from './sections';
import Abstract from './abstract';
import All from './all';
import elements from './elements';

elements.home = document.createElement('home');
elements.app = document.createElement('app');
elements.abstract = document.createElement('abstract');
elements.sectionOne = document.createElement('section-one');
elements.sectionOneOne = document.createElement('section-one-one');
elements.sectionTwo = document.createElement('section-two');
elements.sectionEmpty = document.createElement('section-empty');
elements.all = document.createElement('all');
elements.forCompile = document.createElement('for-compile');

document.body.appendChild(elements.app);
document.body.appendChild(elements.sectionEmpty);
document.body.appendChild(elements.all);
elements.app.appendChild(elements.abstract);
elements.app.appendChild(elements.sectionOne);
elements.app.appendChild(elements.sectionTwo);
elements.sectionOne.appendChild(elements.sectionOneOne);

Akili.component('app', App);
Akili.component('abstract', Abstract);
Akili.component('section-one', SectionOne);
Akili.component('section-two', SectionTwo);
Akili.component('section-one-one', SectionOneOne);
Akili.component('section-empty', SectionEmpty);
Akili.component('all', All);

Akili.options.debug = false;

describe('Application initialization', () => {
  return Akili.init(document.body);
});
