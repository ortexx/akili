import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for embed elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag embed
 * @attr {string} [url]
 */
export default class Embed extends Url {  
  static define() {
    Akili.component('embed', this);
  }
}