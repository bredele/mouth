
/**
 * Test dependencies.
 */

var mouth = require('..');
var assert = require('assert');

describe("compiler", function() {
	
	it('should return a compiled function', function() {
		var result = mouth('${ beep }').text;
		assert.equal(result({
			beep: 'boop'
		}), 'boop');
	});

	it('should return a compiled function from an advanced expresion', function() {
		var result = mouth('${ beep + boop }').text;
		assert.equal(result({
			beep: 'boop',
			boop: 'hello'
		}), 'boophello');
	});

	it('should return the expression properties', function() {
		var props = mouth('${beep} and ${boop}').props;
		assert.deepEqual(props, ['beep', 'boop']);
	})


});


// 
// /\$([^{}]*)\{([^{}]*)\}/g

// describe("mixins", function() {

// 	var tmpl;
// 	beforeEach(function() {
// 		tmpl = mouth({
// 			link: 'home'
// 		});
// 	});

// 	it("should add middlware", function() {
// 		tmpl.use('path', function(str) {
// 			return '/path/' + this[str.trim()];
// 		});
// 		var result = tmpl('$path{link}');
// 		assert.equal(result, '/path/home');
// 	});

// });

describe("filters", function() {
	
});


