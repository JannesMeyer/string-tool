/**
 * Checks if `str` starts with the `searchString`
 */
export function startsWith(str, searchString) {
	return str.slice(0, searchString.length) === searchString;
}

/**
 * Capitalizes the first letter of `str`
 */
export function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Finds the index of the nth occurence of `search` in `text`
 */
export function nthIndexOf(text: string, n: number, search: string): number {
	for(; n > 0; --n) {
		var index = text.indexOf(search, index);
		if (index === -1) { return undefined; }
		if (n > 1) { index += search.length; }
	}
	return index;
}

/**
 * Removes the first occurence of `searchString`
 */
export function cutFirst(searchString, str) {
	var index = str.indexOf(searchString);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchString.length);
}

/**
 * Removes everything after and including `searchString`.
 * Returns the unmodified String if `searchString` is not found.
 *
 * Useful for extracting the URL protocol, for example:
 * cutBefore(':', 'http://www.example.org/');
 * 'http'
 */
export function cutBefore(searchString, str) {
	var index = str.indexOf(searchString);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index);
}

/**
 * Removes everything after and including `index`.
 * Returns the unmodified String if `index` is -1
 */
export function cutBeforeIndex(index, str) {
	if (index === -1) {
		return str;
	}
	return str.slice(0, index);
}