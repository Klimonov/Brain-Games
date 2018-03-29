import game from '..';

// game. ask user is number even
const termsOfTheGame = 'Answer "yes" if number even otherwise answer "no".';
const foo = randomNumbers => randomNumbers[0];
const correctAnswer = num => (num % 2 === 0 ? 'yes' : 'no');
export default () => {
  game(foo, termsOfTheGame, correctAnswer);
};
