import { startsWith, capitalize, nthIndexOf, cutFirst, cutFromIndex } from '..';

describe("startsWith", () => {
	it("should return true when the string starts with another string", () => {
		expect(startsWith('A test', 'A t')).toBe(true);
		expect(startsWith('A test', 'A test')).toBe(true);
	});

	it("should return false when the string starts with something else", () => {
		expect(startsWith('something', 'nothing')).toBe(false);
	});
});

describe("capitalize", () => {
	it("should return true when the first letter was capitalized correctly", () => {
		expect(capitalize('a')).toEqual('A');
		expect(capitalize('ß')).toEqual('SS');
		expect(capitalize('über')).toEqual('Über');
		expect(capitalize('égalité')).toEqual('Égalité');
	});

	it("should return an empty string when the input is empty", () => {
		expect(capitalize('')).toEqual('');
	});
});

describe("nthIndexOf", () => {
	it("should find the position of the searchString", () => {
		expect(nthIndexOf('test test test', 'test', 2)).toEqual(5);
	});

	it("should return undefined when the searchString doesn't exist", () => {
		expect(nthIndexOf('bla bla bla', 'test', 2)).toBe(undefined);
	});
});