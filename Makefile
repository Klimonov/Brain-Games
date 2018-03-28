install:
	npm install
start:
	npm run babel-node -- 'src/games/brain-calc.js'
publish:
	npm publish
lint:
	npm run eslint .
