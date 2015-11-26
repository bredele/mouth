
/**
 * Test dependencies.
 */

var mouth = require('..');
var assert = require('assert');


describe('basic', function() {

	var interpolate =  mouth('${name}');

	it('should return a function', function() {
		assert.equal(typeof interpolate[0]);
	});


	it('should return a list of variable to interpolate', function() {
		assert.deepEqual(mouth[1], ['name']);
	});

	it('should interpolate variable', function() {
		assert.equal(interpolate[0]({
			name: 'olivier'
		}), 'olivier';)
	});

});
