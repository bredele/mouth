
/**
 * Test dependencies.
 */

var mouth = require('..');
var assert = require('assert');


describe('basic', function() {

	var interpolate =  mouth('${name}');

	it('should return a function', function() {
		assert.equal(typeof interpolate[0], 'function');
	});


	it('should return a list of variable to interpolate', function() {
		assert.deepEqual(interpolate[1], ['name']);
	});

	it('should interpolate variable', function() {
		assert.equal(interpolate[0]({
			name: 'olivier'
		}), 'olivier');
	});

});


describe('expression', function() {

	it('should return an list of uniq variables to interpolate', function() {
		var interpolate =  mouth('${first + last + first}');
		assert.deepEqual(interpolate[1], ['first', 'last']);
	});

	it('concatenate string', function() {
		var interpolate =  mouth('${foo + " and " + bar}');
		assert.equal(interpolate[0]({
			foo: 'olivier',
			bar: 'bruno'
		}), 'olivier and bruno');
	});


});

