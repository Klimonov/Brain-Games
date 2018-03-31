import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Is this number prime?';

const findCorrectAnswer = () => {
  const randomNumber = getRandomNumber(100);
  const correctAnswer = (randomNumber % 2 === 0 ? 'yes' : 'no');
  return [correctAnswer, randomNumber];
};

export default () => {
  game(termsOfTheGame, findCorrectAnswer);
};