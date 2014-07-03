mouth
=====

  Fast and composable template engine for client/server side (and CSS).

## Installation

component:

    $ component install bredele/mouth

nodejs:

    $ npm install mouth

## Usage

  Basically `mouth` do everything that others template engine do...

```js
var mouth = require('mouth');
mouth({
	beep: 'boop'
}, 'hello ${beep}!');
// => hello boop!
```

  ...and more (plugins, filters, etc)!

```js
var tmpl = mouth({
	link: 'home'
});
tmpl.use('path', function(str) {
	return '/path/to/' + this[str];
});

tmpl('<a href="$path{link}"></a>');
// => <a href="/path/to/home"></a>
```

<!-- 
## API

### plugins -->

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
