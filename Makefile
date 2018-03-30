install:
	npm install
starteven:
	npm run babel-node -- 'src/bin/brain-even.js'
startcalc:
	npm run babel-node -- 'src/bin/brain-calc.js'
startgcd:
	npm run babel-node -- 'src/bin/brain-gcd.js'
publish:
	npm publish
lint:
	npm run eslint .
rec:
	asciinema rec
