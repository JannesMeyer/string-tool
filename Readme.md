# string-tool

[![Build Status](https://travis-ci.org/JannesMeyer/string-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/string-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/string-tool.svg)](https://david-dm.org/JannesMeyer/string-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/string-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/string-tool#info=devDependencies)

[![npm](https://nodei.co/npm/string-tool.png?compact=true)](https://www.npmjs.com/package/string-tool)

## Usage

**Import what you need**

```js
import { capitalize } from 'string-tool';
```

- [.startsWith](#startswith)
- [.capitalize](#capitalize)
- [.nthindexof](#nthindexof)
- [.cutFirst](#cutfirst)
- [.cutFromIndex](#cutfromindex)

### startsWith

	startsWith(str, searchString) → Boolean

Checks if `str` starts with the `searchString`

### capitalize

	capitalize(str) → String

Capitalizes the first letter of `str`

### nthIndexOf

	nthIndexOf(str, searchString, n[, fromIndex]) → Number

Finds the index of the nth occurence of `searchString`

### cutFirst

	cutFirst(str, searchString) → String

Remove the first occurence of `searchString`

### cutFromIndex

	cutFromIndex(str, fromIndex) → String

Remove everything after `fromIndex`

## Contributing

Download source and compile:

	git clone git@github.com:[USERNAME]/string-tool.git
	make

Watch for changes and recompile:

	make watch

Run tests:

	npm test
