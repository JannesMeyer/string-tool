BABEL=./node_modules/.bin/babel
JASMINE=./node_modules/.bin/jasmine

test: build
	$(JASMINE)

test-without-color: build
	$(JASMINE) --no-color

build: string-tool.es5.js spec/string-tool-spec.es5.js

%.es5.js:: %.js
	$(BABEL) -o $@ $<