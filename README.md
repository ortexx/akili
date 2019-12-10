# [Akili](http://akilijs.com) [![npm version](https://badge.fury.io/js/akili.svg)](https://badge.fury.io/js/akili) [![Build Status](https://travis-ci.org/ortexx/akili.svg?branch=master)](https://travis-ci.org/ortexx/akili) [![Coverage Status](https://coveralls.io/repos/github/ortexx/akili/badge.svg?branch=master)](https://coveralls.io/github/ortexx/akili?branch=master)

Akili is a component-based javascript framework. 
It includes a powerful system of components, router, store to save and distribute data, functions to make ajax requests and some useful utils.

* very easy for learning, using and testing
* without any additional dependencies
* can be used without javascript compilation in all modern browsers
* pure, lightweight, expandable and powerful framework
* supports [server-side rendering](https://github.com/ortexx/akili-connect)
* javascript way, without magic

## Examples

```js
class HelloWorld extends Akili.Component {
  created() {
    this.scope.count = 0;
    this.scope.title = 'Hello World';
  }
}

Akili.component('hello-world', HelloWorld);

document.addEventListener('DOMContentLoaded', () => {
  Akili.init().catch(err => console.error(err));
});
```

```html
<body>
  <hello-world>
    <div on-click="${ this.count++ }">
      ${ this.title }: ${ this.count }
    </div>
  </hello-world>
</body>
```

More simple examples are on the [site](https://akilijs.com).  
And you can [see a complete example](https://example.akilijs.com) of the site's architecture and [get the source code](https://github.com/ortexx/akili-example).

## Installation
You can install it via npm

```
npm install akili --save
```

or [download](https://akilijs.com/js/libs/akili.min.js) and include as script
 
```
<script src="/akili.min.js"></script>
```

## Documentation
Documentation is [here](https://akilijs.com/docs/getting-started).

## Additional things
* [akili-localization](https://github.com/ortexx/akili-localization)
* [akili-tabs](https://github.com/ortexx/akili-tabs) 

## Changelog
A new entry will be added to the changelog after the version's first or second number changing.

## License
Akili is [MIT licensed](/LICENSE).


 
