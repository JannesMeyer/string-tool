import { capitalize, nthIndexOf } from '../String';

describe('capitalize', () => {

  it('should return true when the first letter was capitalized correctly', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('ß')).toBe('SS');
    expect(capitalize('über')).toBe('Über');
    expect(capitalize('égalité')).toBe('Égalité');
  });

  it('should return an empty string when the input is empty', () => {
    expect(capitalize('')).toBe('');
  });

});

describe('nthIndexOf', () => {

  it('should find the position of the searchString', () => {
    expect(nthIndexOf('testtest test', 1, 'test')).toBe(0);
    expect(nthIndexOf('testtest test', 2, 'test')).toBe(4);
    expect(nthIndexOf('testtest test', 3, 'test')).toBe(9);
  });

  it('should return undefined when the searchString does not exist', () => {
    expect(nthIndexOf('testtest test', 0, 'test')).toBe(undefined);
    expect(nthIndexOf('bla bla bla', 2, 'test')).toBe(undefined);
  });

});