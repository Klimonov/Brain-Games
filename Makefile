install:
	sudo npm install -g brain-games-klimonov
starteven:
	npm run babel-node -- 'src/bin/brain-even.js'
startcalc:
	npm run babel-node -- 'src/bin/brain-calc.js'
startgcd:
	npm run babel-node -- 'src/bin/brain-gcd.js'
startbalance:
	npm run babel-node -- 'src/bin/brain-balance.js'
startprogression:
	npm run babel-node -- 'src/bin/brain-progression.js'
startprime:
		npm run babel-node -- 'src/bin/brain-prime.js'
publish:
	npm publish
lint:
	npm run eslint .
rec:
	asciinema rec
