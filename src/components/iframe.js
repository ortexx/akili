import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for iframes.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag iframe
 * @see Url
 */
export default class Iframe extends Url {  
  static define() {
    Akili.component('iframe', this);
  }
}