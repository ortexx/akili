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
 * @attr {string} [loading] - loading type: "lazy", "viewport", "chunk"
 * @attr {integer} [chunk-size] - chunk size, if loading type = "chunk"
 * @attr {string} [chunk-name] - chunk name, if loading type = "chunk"
 * @attr {integer} [timeout] - loading timeout
 */
export default class Url extends Component {
  static matches = '[url],[urlset]';
  static events = ['timeout', 'abort'];
  static booleanAttributes = ['hidden-error'];
  static __activeUrlLoading = [];

  constructor(...args) {
    super(...args);
    this.urlAttribute = 'src';
    this.handlerAttribute = this.el.hasAttribute('urlset')? 'urlset': 'url';
    this.elOpacity = getComputedStyle(this.el).opacity;
  }

  created() {
    this.viewport = false;
    this.chunk = false;
    this.cancelable = false;
    this.observer = null;
    this.finished = false;
    this.cancelling = false;
    this.chunkName = 'main',
    this.chunkSize = 1;
    this.timeout = 0;
    this.onLoadListener = this.onLoad.bind(this);
    this.onErrorListener = this.onError.bind(this);
    this.el.addEventListener('load', this.onLoadListener);   
    this.el.addEventListener('error', this.onErrorListener);
    this.createUrlAttribute();
  }

  compiled() {
    this.attr('loading', this.setLoading);   
    this.attr(this.handlerAttribute, this.setUrl);
    this.attr('chunkName', this.setChunkName);
    this.attr('chunkSize', this.setChunkSize);
    this.attr('timeout', this.setTimeout);
  }

  removed() {
    this.abort();
    this.removeViewport();
    this.removeChunk();
  }

  createUrlAttribute() {
    if(this.handlerAttribute == 'urlset') {
      this.urlAttribute + 'set';
    }
  }

  onLoad() {
    if(this.isRemoved) {
      return;
    }

    this.removeChunkFromQueue();
    this.el.style.opacity = this.elOpacity;
    this.finished = true;
    this.cancelling = false;
    this.isLoading = false;
    clearTimeout(this.loadingTimeout);
  }

  onError() {
    if(this.isRemoved) {
      return;
    }

    this.el.style.opacity = this.attrs.hiddenError? 0: this.elOpacity;
    !this.cancelling && (this.finished = true);   
    this.cancelling = false;
    this.isLoading = false;
    this.removeChunkFromQueue();
    clearTimeout(this.loadingTimeout);
  }

  onTimeout() {
    this.abort();
    this.finished = true;
    this.attrs.onTimeout.trigger();
  }

  intersectionHandler(entries) {
    if(!this.viewport || this.finished) {
      return;
    }

    const entry = entries[0];
    this.isIntersecting = entry.isIntersecting;

    if(!entry.isIntersecting) {      
      return this.abort();
    }

    !this.isLoading && this.setUrlAttribute(this.attrs[this.handlerAttribute]); 
  }

  removeViewport() {
    if(!this.viewport) {
      return;
    }
    
    this.observer && this.observer.disconnect();
    delete this.isIntersecting;
    this.viewport = false;
  }

  addViewport() {
    if(this.viewport) {
      return;
    }

    this.viewport = true;
    this.observer = new IntersectionObserver(this.intersectionHandler.bind(this));
    this.observer.observe(this.el);
  }

  removeChunk() {
    if(!this.chunk) {
      return;
    }
    
    window.removeEventListener('akili-url-loading', this.chunkListener);
    this.removeChunkFromQueue(); 
    this.chunk = false;
  }

  removeChunkFromQueue() {
    if(!this.chunk) {
      return;
    }

    let removed = false;

    for(let i = this.constructor.__activeUrlLoading.length - 1; i >= 0; i--) {
      if(this.constructor.__activeUrlLoading[i].component === this) {
        this.constructor.__activeUrlLoading.splice(i, 1);
        removed = true;
      }
    }
    
    removed && window.dispatchEvent(new CustomEvent('akili-url-loading', { 
      detail: { name: this.chunkName, component: this }
    }));
  }

  addChunk() {
    if(this.chunk) {
      return;
    }

    this.chunk = true;
    this.chunkListener = (event) => {
      if(event.detail.name != this.chunkName || event.detail.component === this) {
        return;
      }
         
      this.checkChunk();
    };
    window.addEventListener('akili-url-loading', this.chunkListener);
  }

  checkChunk() {
    if(!this.chunk || this.finished) {
      return;
    } 

    const active = this.constructor.__activeUrlLoading.filter(r => r.name == this.chunkName);
    const current = this.constructor.__activeUrlLoading.find(r => r.component === this);
    
    if(current || active.length >= this.chunkSize) {
      return;
    }
    
    this.constructor.__activeUrlLoading.push({ name: this.chunkName, component: this });
    this.setUrlAttribute(this.attrs[this.handlerAttribute]);
  }

  setLoading(value) {   
    value == 'viewport'? this.addViewport(): this.removeViewport();
    value == 'chunk'? this.addChunk(): this.removeChunk();
  }

  setUrl(url) {    
    this.abort();
    this.removeChunkFromQueue();
    this.finished = false;
    
    if((this.viewport && !this.isIntersecting)) {
      return this.setUrlAttribute();
    }
    else if(this.chunk) {
      this.checkChunk();
      return this.setUrlAttribute();
    }

    this.setUrlAttribute(url);
  }

  setUrlAttribute(value) {
    this.el.style.opacity = 0;
    
    if(value === undefined) {
      return;
    }
    else if(value === false) {
      this.cancelling = true;
    }
    else {
      this.cancelling = false;
      this.timeout && (this.loadingTimeout = setTimeout(this.onTimeout.bind(this), this.timeout));        
    }
    
    this.isLoading = true;
    this.attrs[this.urlAttribute] = value;    
  }

  setChunkName(value) {
    if(!this.isCompiled || !this.chunk) {
      return this.chunkName = value;
    }

    this.abort();
    this.removeChunkFromQueue();
    this.chunkName = value;
    this.checkChunk();
  }

  setChunkSize(value) {
    if(!this.isCompiled || !this.chunk) {
      return this.chunkSize = +value;
    }

    this.abort();
    this.removeChunkFromQueue();
    this.chunkSize = +value;
    this.checkChunk();
  }

  setTimeout(value) {
    this.timeout = +value;
  }

  abort() {
    if(!this.isLoading) {
      return;
    }

    this.setUrlAttribute(false);
    this.attrs.onAbort.trigger();
  }
}