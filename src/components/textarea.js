import Text from './text.js';
import Akili from '../akili.js';

export default class Textarea extends Text {
  static define() {
    Akili.component('textarea', this);
  }
}