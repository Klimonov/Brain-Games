import game from '..';

const termsOfTheGame = 'Answer "yes" if number even otherwise answer "no".';

const makeQuestion = randomNumbers => randomNumbers[0];

const findCorrectAnswer = randomNumbers => (randomNumbers[0] % 2 === 0 ? 'yes' : 'no');

export default () => {
  game(makeQuestion, termsOfTheGame, findCorrectAnswer);
};
