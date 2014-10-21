
/**
 * Test dependencies.
 */

var mouth = require('..');
var assert = require('assert');

describe('substitution', function() {

	it("should substitue a single variable", function() {
		var tmpl = mouth('hello ${name}');
		var result = tmpl({
			name: 'boop'
		});

		assert.equal(result, 'hello boop');
	});

	it("should substitue multiple variables", function() {
		var tmpl = mouth('${ beep } and ${ foo }');
		var result = tmpl({
			beep: 'boop',
			foo: 'bar'
		});

		assert.equal(result, 'boop and bar');
	});

	it('should be dead simple', function() {
		assert.equal(mouth('hello ${hello}!', {
			hello: 'world'
		}), 'hello world!');
	});

});

// describe("substitution", function() {
	
// 	var tmpl;
// 	beforeEach(function() {
// 		tmpl = mouth({
// 			beep: 'boop',
// 			foo: 'bar'
// 		});
// 	});

// 	it("should substitue a single variable", function() {
// 		var result = tmpl('${ beep }');
// 		assert.equal(result, 'boop');
// 	});

// 	it("should substitue multiple variables", function() {
// 		var result = tmpl('${ beep } and ${ foo }');
// 		assert.equal(result, 'boop and bar');
// 	});

// 	it('should be dead simple', function() {
// 		assert.equal(mouth({
// 			hello: 'world'
// 		}, 'hello ${hello}!'), 'hello world!');
// 	});
// });
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


