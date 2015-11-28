
/**
 * Test dependencies.
 */

var mouth = require('..');
var assert = require('assert');


describe('interpolate', function() {

	var template =  mouth('${name}');

	it('should return a function', function() {
		assert.equal(typeof template[0], 'function');
	});

	it('should return a list of variable to interpolate', function() {
		assert.deepEqual(template[1], ['name']);
	});

	it('should interpolate variable inside expression', function() {
		assert.equal(template[0]({
			name: 'olivier'
		}), 'olivier');
	});

	it('should not change regular strings', function() {
		var template = mouth('hello world');
		assert.equal(template[0](), 'hello world');
	});

});


describe('expression', function() {

	it('should compile string', function() {
		var interpolate =  mouth('${foo + " and " + bar}');
		assert.equal(interpolate[0]({
			foo: 'olivier',
			bar: 'bruno'
		}), 'olivier and bruno');
		assert.deepEqual(interpolate[1], ['foo', 'bar']);
	});

	it('should compile nested data', function() {
		var interpolate =  mouth('${foo.name + " is " + bar[0]}');
		assert.equal(interpolate[0]({
			foo: {
				name: 'olivier'
			},
			bar: [28]
		}), 'olivier is 28');
		assert.deepEqual(interpolate[1], ['foo', 'bar']);
	});

	it('should compile javascript subset and function call', function() {
		var interpolate =  mouth('${foo() ? "hello" : bar.label}');
		assert.equal(interpolate[0]({
			foo: function() {
				return true;
			},
			bar: {
				label: 'world'
			}
		}), 'hello');
		assert.deepEqual(interpolate[1], ['foo', 'bar']);
	})

});

describe('static', function() {

	it('should compile string', function() {
		var fn =  mouth('#{foo}', {
			foo: 'olivier'
		})[0];

		var str = fn({
			foo: 'bruno'
		})
		assert.equal(str, 'olivier');
	});
});

