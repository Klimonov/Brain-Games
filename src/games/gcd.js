import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Find the greatest common divisor of given numbers.';


const gcd = (first, second) => {
  if (second === 0) return first;
  return gcd(second, first % second);
};

const findCorrectAnswerAndQuestion = () => {
  const first = getRandomNumber(100);
  const second = getRandomNumber(100);
  const termForQuestion = `${first} ${second}`;
  const correctAnswer = gcd(first, second);
  return [correctAnswer, termForQuestion];
};

export default () => {
  game(termsOfTheGame, findCorrectAnswerAndQuestion);
};
