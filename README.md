# [Akili](http://akilijs.com) [beta] [![npm version](https://badge.fury.io/js/akili.svg)](https://badge.fury.io/js/akili) [![Build Status](https://travis-ci.org/ortexx/akili.svg?branch=master)](https://travis-ci.org/ortexx/akili) [![Coverage Status](https://coveralls.io/repos/github/ortexx/akili/badge.svg?branch=master)](https://coveralls.io/github/ortexx/akili?branch=master)

Akili is a component-based javascript framework. 
It includes a powerful system of components, router, functions to make ajax requests and some useful utils.

* very easy for learning, using and testing
* without any additional dependencies
* can be used without javascript compilation in all modern browsers
* pure, lightweight, expandable and powerful framework
* supports [server rendering](https://github.com/ortexx/akili-connect)
* javascript way, without magic

## Examples

```js
class HelloWorld extends Akili.Component {
  constructor(...args) {
    super(...args);
    
    this.scope.title = 'Hello World';
  }
}

Akili.component('hello-world', HelloWorld);
Akili.init();
```

```html
<body>
  <hello-world>${ this.title }</hello-world>
</body>
```

More examples are on the [site](http://akilijs.com).

## Installation
You can install it via npm

```
npm install akili --save
```

or [download](http://akilijs.com/js/libs/akili.min.js) and include as script
 
```
<script src="/akili.min.js"></script>
```

## Documentation
Documentation is [here](http://akilijs.com/docs/getting-started).

## Changelog
A new entry will be added to the changelog after the version's first or second number changing.

## License
Akili is [MIT licensed](/LICENSE).


 
