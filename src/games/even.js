import { game } from '..';

const termsOfTheGame = 'Answer "yes" if number even otherwise answer "no".';

const foo = massive => console.log(`\nQuestion: ${massive[0]}`);

const correctAnswer = massive => (massive[0] % 2 === 0 ? 'yes' : 'no');

export default () => {
  game(foo, termsOfTheGame, correctAnswer);
};
