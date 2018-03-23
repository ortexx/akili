import Text from './text.js';
import Akili from '../akili.js';

/**
 * Component to work with textarea.
 * 
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * 
 * @tag textarea
 * @attr @see Text
 * @message @see Text
 */
export default class Textarea extends Text {
  static define() {
    Akili.component('textarea', this);
  }
}