import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for source elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag source
 * @attr {string} [url]
 */
export default class Source extends Url {  
  static define() {
    Akili.component('source', this);
  }
}