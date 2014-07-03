
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

	
});
