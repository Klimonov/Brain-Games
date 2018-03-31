import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Find the greatest common divisor of given numbers.';

const findCorrectAnswer = () => {
  const randomNumber = getRandomNumber(100);
  const step = getRandomNumber(100);
  const dots = getRandomNumber(10);
  let question = randomNumber;
  let result = '';
  let answer;
  for (let counter = 1; counter < 11; counter += 1) {
    question += step;
    if (counter === dots) {
      result += '.. ';
      answer = question;
    } else {
      result += `${question} `;
    }
  }
  return [answer, result];
};

export default () => {
  game(termsOfTheGame, findCorrectAnswer);
};
