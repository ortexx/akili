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

  walkTextNodes(el, fn){
    const nodes = el.childNodes;

    for (let i = 0, l = nodes.length; i < l; i++) {
      let node = nodes[i];
      node.nodeType == 3? fn(node): this.walkTextNodes(node, fn);
    }
  }

  getElementTextLength() {
    let length = 0;
    this.walkTextNodes(this.el, node => length += node.nodeValue.length);
    return length;
  }

  setElementFocusOn(pos) {
    const nodes = [];
    let node;
    const max = this.getElementTextLength();
    pos > max && (pos = max); 
    
    if(pos <= 0) {
      return this.el.focus();
    }
    
    this.walkTextNodes(this.el, node => nodes.push(node));    

    for(let i = 0; i < nodes.length; i++) {
      node = nodes[i];
      
      if (pos > nodes[i].nodeValue.length && nodes[i + 1]) {
        pos -= nodes[i].nodeValue.length;
        continue;
      }
        
      node = nodes[i];
      break;
    }

    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(node, pos);
    range.setEnd(node, pos);
    sel.removeAllRanges();
    sel.addRange(range);
    this.el.focus();
  }
}