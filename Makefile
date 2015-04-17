BABEL=./node_modules/.bin/babel
JASMINE=./node_modules/.bin/jasmine

test: string-tool.es5.js
	$(JASMINE)

%.es5.js:: %.js
	$(BABEL) -o $@ $<