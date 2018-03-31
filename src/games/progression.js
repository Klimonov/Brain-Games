import { game, getRandomNumber } from '..';

const termsOfTheGame = 'What number is missing in this progression?';


const mathProgression = (randomNumber, skipedNumber, step) =>
  randomNumber + (skipedNumber * step);

const findCorrectAnswerAndQuestion = () => {
  const randomNumber = getRandomNumber(100);
  const step = getRandomNumber(100);
  const skipedNumber = getRandomNumber(10);
  let numberForTerm = randomNumber;
  let termForQuestion = '';
  const correctAnswer = mathProgression(randomNumber, skipedNumber, step);
  for (let counter = 1; counter < 11; counter += 1) {
    numberForTerm += step;
    if (skipedNumber === counter) {
      termForQuestion += '.. ';
    } else {
      termForQuestion += `${numberForTerm} `;
    }
  }
  return [correctAnswer, termForQuestion];
};

export default () => {
  game(termsOfTheGame, findCorrectAnswerAndQuestion);
};
