
/**
 * Test dependencies.
 */

var mouth = require('..');
var assert = require('assert');

describe("substitution", function() {
	
	var tmpl;
	beforeEach(function() {
		tmpl = mouth({
			beep: 'boop',
			foo: 'bar'
		});
	});

	it("should substitue a single variable", function() {
		var result = tmpl('${ beep }');
		assert.equal(result, 'boop');
	});

	it("should substitue multiple variables", function() {
		var result = tmpl('${ beep } and ${ foo }');
		assert.equal(result, 'boop and bar');
	});

	it('should be dead simple', function() {
		assert.equal(mouth({
			hello: 'world'
		}, 'hello ${hello}!'), 'hello world!');
	});
});

describe("plugins", function() {

	var tmpl;
	beforeEach(function() {
		tmpl = mouth({
			link: 'home'
		});
	});

	it("should add middlware", function() {
		tmpl.use('path', function(str) {
			return '/path/' + this[str.trim()];
		});
		var result = tmpl('$path{link}');
		assert.equal(result, '/path/home');
	});

});

describe("filters", function() {
	
});


