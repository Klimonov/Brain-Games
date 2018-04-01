import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Is this number prime?';


const isPrime = (randomNumber) => {
  const findingDivisor = (num, counter) => {
    if (randomNumber % counter !== 0) return findingDivisor(num, counter + 1);
    return counter === randomNumber;
  };
  return randomNumber === 1 ? true : findingDivisor(randomNumber, 2);
};

const findCorrectAnswerAndQuestion = () => {
  const randomNumber = getRandomNumber(100);
  const correctAnswer = (isPrime(randomNumber) ? 'yes' : 'no');
  console.log(correctAnswer);
  return [correctAnswer, randomNumber];
};

export default () => {
  game(termsOfTheGame, findCorrectAnswerAndQuestion);
};
