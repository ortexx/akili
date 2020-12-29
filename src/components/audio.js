import Url from './url.js';
import Akili from '../akili.js';

/**
 * Component for audio elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag audio
 * @see Url
 */
export default class Audio extends Url {  
  static define() {
    Akili.component('audio', this);
  }
}