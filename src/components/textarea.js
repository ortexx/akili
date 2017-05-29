import Text from './text';
import Akili from '../akili';

export default class Textarea extends Text {
  static define() {
    Akili.component('textarea', Textarea);
  }
};