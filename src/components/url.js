import Component from '../component.js';

/**
 * Component for elements which have async attribute content.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag url
 * @selector [url],[urlset]
 * @attr {string} [url] - source link
 * @attr {string} [urlset] - source link set
 * @attr {boolean} [hidden-error] - hide the failed request picture
 * @attr {string} [loading] - loading type: "lazy", "viewport"
 */
export default class Url extends Component {
  static matches = '[url],[urlset]';
  static booleanAttributes = ['hidden-error'];

  constructor(...args) {
    super(...args);
    this.urlAttribute = 'src';
    this.handlerAttribute = this.el.hasAttribute('urlset')? 'urlset': 'url';
    this.elOpacity = getComputedStyle(this.el).opacity;
  }

  created() {
    this.viewport = false;
    this.cancelable = false;
    this.observer = null;
    this.finished = false;
    this.cancelling = false;
    this.onLoadListener = this.onLoad.bind(this);
    this.onErrorListener = this.onError.bind(this);
    this.el.addEventListener('load', this.onLoadListener);   
    this.el.addEventListener('error', this.onErrorListener);
    this.createUrlAttribute();
  }

  compiled() {
    this.attr('loading', this.setLoading);
    this.attr(this.handlerAttribute, this.setUrl);
  }

  createUrlAttribute() {
    if(this.handlerAttribute == 'urlset') {
      this.urlAttribute + 'set';
    }
  }

  onLoad() {
    this.attrs.hiddenError && (this.el.style.opacity = this.elOpacity);
    this.finished = true;
    this.cancelling = false;
  }

  onError() {
    this.attrs.hiddenError && (this.el.style.opacity = 0);
    !this.cancelling && (this.finished = true);
  }

  intersectionHandler(entries) {
    const entry = entries[0];
    this.isIntersecting = entry.isIntersecting;

    if(!entry.isIntersecting && !this.finished) {
      this.cancelling = true;
      this.attrs[this.urlAttribute] = '';
      return;
    }

    if(!this.finished) {
      this.cancelling = false;
      this.attrs[this.urlAttribute] = this.attrs[this.handlerAttribute];
    }
  }

  setLoading(value) {
    this.viewport = value == 'viewport';
    
    if(!this.viewport) {
      this.observer && this.observer.disconnect();
      delete this.isIntersecting;
      return;
    }

    this.observer = new IntersectionObserver(this.intersectionHandler.bind(this));
    this.observer.observe(this.el);
  }

  setUrl(url) {
    this.finished = false;
    this.cancelling = false;
    
    if(this.viewport && !this.isIntersecting) {
      return;
    }

    this.attrs[this.urlAttribute] = url;
  }
}