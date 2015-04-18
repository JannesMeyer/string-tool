BABEL=./node_modules/.bin/babel
JASMINE=./node_modules/.bin/jasmine

js = string-tool.es5.js
spec = spec/string-tool-spec.es5.js

all: $(js) $(spec) node_modules

test: build
	$(JASMINE)

test-without-color: build
	$(JASMINE) --no-color

node_modules:
	npm install

%.es5.js:: %.js
	$(BABEL) -o $@ $<

.PHONY: all test test-without-color