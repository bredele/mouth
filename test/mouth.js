
/**
 * Test dependencies.
 */

var mouth = require('..');
var assert = require('assert');

describe("compiler", function() {
	
	var tmpl;
	beforeEach(function() {
		tmpl = mouth({
			beep: 'boop',
			foo: 'bar'
		});
	});

	it('should return a compiled function', function() {
		var result = tmpl('${ beep }').text;
		assert.equal(result(), 'boop');
	});

	it('should return the expression properties', function() {
		var props = tmpl('${beep} and ${boop}').props;
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


