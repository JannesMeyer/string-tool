[![Build Status](https://travis-ci.org/JannesMeyer/string-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/string-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/string-tool.svg)](https://david-dm.org/JannesMeyer/string-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/string-tool.svg)](https://david-dm.org/JannesMeyer/string-tool/dev-status.svg)

# string-tool

**Import what you need** (ES6 syntax)
~~~js
import { startsWith, capitalize } from 'string-tool';
~~~

- [string-tool](#string-tool)
	- [.startsWith](#startswith)
	- [.capitalize](#capitalize)
	- [.nthindexof](#nthindexof)
	- [.cutFirst](#cutfirst)
	- [.cutFromIndex](#cutfromindex)

## startsWith

	startsWith(str, searchString) → Boolean

Checks if `str` starts with the `searchString`

## capitalize

	capitalize(str) → String

Capitalizes the first letter of `str`

## nthIndexOf

	nthIndexOf(str, searchString, n[, fromIndex]) → Number

Finds the index of the nth occurence of `searchString`

## cutFirst

	cutFirst(str, searchString) → String

Remove the first occurence of `searchString`

## cutFromIndex

	cutFromIndex(str, fromIndex) → String

Remove everything after `fromIndex`
