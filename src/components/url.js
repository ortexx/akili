import Component from '../component.js';

/**
 * Component for elements which have async attribute content.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag url
 * @attr {string} [url]
 */
export default class Url extends Component {
  static matches = '[url]';

  constructor(...args) {
    super(...args);
    this.urlAttribute = 'src';
  }

  compiled() {
    this.attr('url', this.setUrl);
  }

  setUrl(url) {
    this.attrs[this.urlAttribute] = url;
  }
}