mouth
=====


## Installation

component:

    $ component install bredele/mouth

nodejs:

    $ npm install mouth

## Usage

```js
var mouth = require('mouth');
var tmpl = mouth({
	beep: 'boop'
});
tmpl('${ beep }!');
// => boop!
```

## API

### store(data)

  Create a new store with the given `data` (Object or Array).

```js
var Store = require('datastore');
var users = new Store([{
  name : 'eric'
},{
  name : 'olivier'
}]);
```