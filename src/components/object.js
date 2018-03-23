import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for object elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag object
 * @attr {string} [url]
 */
export default class Objects extends Url {  
  constructor(...args) {
    super(...args);

    this.urlAttribute = 'data';
  }

  static define() {
    Akili.component('object', this);
  }
}