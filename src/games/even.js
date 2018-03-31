import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Answer "yes" if number even otherwise answer "no".';

const findCorrectAnswerAndQuestion = () => {
  const randomNumber = getRandomNumber(100);
  // console.log(`\nQuestion: ${randomNumber}`);
  const correctAnswer = (randomNumber % 2 === 0 ? 'yes' : 'no');
  return [correctAnswer, randomNumber];
};

export default () => {
  game(termsOfTheGame, findCorrectAnswerAndQuestion);
};
