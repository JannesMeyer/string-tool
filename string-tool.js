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
export function nthIndexOf(str, searchString, n, fromIndex) {
	for (var i = 0; i < n && fromIndex !== -1; i++) {
		if (fromIndex !== undefined) {
			fromIndex += 1;
		}
		fromIndex = str.indexOf(searchString, fromIndex);
	}
	return (fromIndex === -1 ? undefined : fromIndex);
}

/**
 * Remove the first occurence of `searchString`
 */
export function cutFirst(str, searchString) {
	var index = str.indexOf(searchString);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchString.length);
}

/**
 * Remove everything after `fromIndex`
 */
export function cutFromIndex(str, fromIndex) {
	if (fromIndex === -1 || fromIndex === undefined) {
		return str;
	}
	return str.slice(0, fromIndex);
}