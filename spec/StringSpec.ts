import { capitalize, nthIndexOf } from '../String';

describe('capitalize', () => {

  it('should return true when the first letter was capitalized correctly', () => {
    expect(capitalize('a')).toEqual('A');
    expect(capitalize('ß')).toEqual('SS');
    expect(capitalize('über')).toEqual('Über');
    expect(capitalize('égalité')).toEqual('Égalité');
  });

  it('should return an empty string when the input is empty', () => {
    expect(capitalize('')).toEqual('');
  });

});

describe('nthIndexOf', () => {

  it('should find the position of the searchString', () => {
    expect(nthIndexOf('testtest test', 1, 'test')).toEqual(0);
    expect(nthIndexOf('testtest test', 2, 'test')).toEqual(4);
    expect(nthIndexOf('testtest test', 3, 'test')).toEqual(9);
  });

  it('should return undefined when the searchString does not exist', () => {
    expect(nthIndexOf('testtest test', 0, 'test')).toBe(undefined);
    expect(nthIndexOf('bla bla bla', 2, 'test')).toBe(undefined);
  });

});