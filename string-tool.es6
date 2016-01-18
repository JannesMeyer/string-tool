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
 * Finds the index of the nth occurence of `searchString`
 *
 * @see: String.prototype.indexOf
 * @see: String.prototype.lastIndexOf
 */
export function nthIndexOf(text, n, searchString) {
	for(; n > 0; --n) {
		var index = text.indexOf(searchString, index);
		if (index === -1) { return undefined; }
		if (n > 1) { index += searchString.length; }
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