import Text from './text.js';
import Akili from '../akili.js';

/**
 * Component for elements with the contenteditable attribute.
 * 
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @tag content
 * @selector content,[contenteditable]
 * @attr @see Text
 * @attr {boolean} [editable] - editable or not
 */
export default class Content extends Text {
  static define() {
    Akili.component('content', this);
    Akili.alias('[contenteditable]', 'content');
  }

  constructor(...args) {
    super(...args);

    if (this.el.hasAttribute('editable')) {
      this.el.setAttribute('contenteditable', this.el.getAttribute('editable'));
      this.el.removeAttribute('editable');
    }

    if (getComputedStyle(this.el).display == 'inline') {
      this.el.style.display = 'block';
    }

    this.valueKey = 'innerHTML';
  }

  setElementFocus() {
    let range = document.createRange();
    let selection = window.getSelection();

    range.selectNodeContents(this.el);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    this.el.focus();
  }
}