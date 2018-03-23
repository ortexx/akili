import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for video elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag video
 * @attr {string} [url]
 */
export default class Video extends Url {  
  static define() {
    Akili.component('video', this);
  }
}