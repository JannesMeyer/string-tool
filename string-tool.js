"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.startsWith = startsWith;
exports.capitalize = capitalize;
exports.nthIndexOf = nthIndexOf;
exports.cutFirst = cutFirst;
exports.cutBefore = cutBefore;
exports.cutBeforeIndex = cutBeforeIndex;
/**
 * Checks if `str` starts with the `searchString`
 */
function startsWith(str, searchString) {
	return str.slice(0, searchString.length) === searchString;
}

/**
 * Capitalizes the first letter of `str`
 */
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Finds the index of the nth occurence of `searchString`
 *
 * @see: String.prototype.indexOf
 * @see: String.prototype.lastIndexOf
 */
function nthIndexOf(text, n, searchString) {
	var index = undefined;
	for (var i = 0; i < n; ++i) {
		if (index != null) {
			index += searchString.length;
		}
		index = text.indexOf(searchString, index);
		if (index === -1) {
			return undefined;
		}
	}
	return index;
}

/**
 * Removes the first occurence of `searchString`
 */
function cutFirst(searchString, str) {
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
function cutBefore(searchString, str) {
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
function cutBeforeIndex(index, str) {
	if (index === -1) {
		return str;
	}
	return str.slice(0, index);
}