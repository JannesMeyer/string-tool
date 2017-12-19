/**
 * Checks if the text starts with a certain string
 */
export function startsWith(text: string, search: string): boolean {
  return text.slice(0, search.length) === search;
}

/**
 * Capitalizes the first letter
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Finds the index of the nth occurence of the search string
 */
export function nthIndexOf(text: string, n: number, search: string): number | undefined {
  let index: number | undefined;
  for(; n > 0; --n) {
    index = text.indexOf(search, index);
    if (index === -1) { return; }
    if (n > 1) { index += search.length; }
  }
  return index;
}

/**
 * Removes the first occurence of the search string
 */
export function cutFirst(search: string, text: string): string {
  var index = text.indexOf(search);
  if (index === -1) {
    return text;
  }
  return text.slice(0, index) + text.slice(index + search.length);
}

/**
 * Removes everything after (and including) the search string
 * 
 * Returns the unmodified text if the search string is not found
 *
 * Useful for extracting the URL protocol:
 * cutBefore(':', 'http://www.example.org/');
 */
export function cutBefore(search: string, text: string): string {
  var index = text.indexOf(search);
  if (index < 0) {
    return text;
  }
  return text.slice(0, index);
}

/**
 * Removes everything after (and including) the index.
 * 
 * Returns the unmodified text if the index is negative.
 */
export function cutBeforeIndex(index: number, text: string): string {
  if (index < 0) {
    return text;
  }
  return text.slice(0, index);
}