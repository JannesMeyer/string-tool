var startsWith = require('../string-tool.es5').startsWith;
var capitalize = require('../string-tool.es5').capitalize;

describe('startsWith', function() {

	it('should return true when the String starts with that other String', function() {
		expect(startsWith('A test', 'A t')).toBe(true);
		expect(startsWith('A test', 'A test')).toBe(true);
	});

	it('should return false when the String starts with something else', function() {
		expect(startsWith('something', 'nothing')).toBe(false);
	});

});

describe('capitalize', function() {

	it('should return true when the String was capitalized correctly', function() {
		expect(capitalize('über')).toEqual('Über');
		expect(capitalize('égalité')).toEqual('Égalité');
	});

	it('should return an empty String when the input is empty', function() {
		expect(capitalize('')).toEqual('');
	});

});