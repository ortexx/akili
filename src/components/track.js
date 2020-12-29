import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for track elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag track
 * @see Url
 */
export default class Track extends Url {  
  static define() {
    Akili.component('track', this);
  }
}