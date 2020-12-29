import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for images.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag img
 * @see Url
 */
export default class Image extends Url {  
  static define() {
    Akili.component('img', this);
  }
}