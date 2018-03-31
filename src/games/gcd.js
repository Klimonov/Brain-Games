import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Find the greatest common divisor of given numbers.';

const findCorrectAnswer = () => {
  const first = getRandomNumber(100);
  const second = getRandomNumber(100);
  const startCounter = first > second ? second : first;
  const termForQuestion = `${first} ${second}`;
  const iterForFindCorrectAnswer = (a, b, counter) => {
    if (a % counter === 0 && b % counter === 0) {
      return [counter, termForQuestion];
    }
    return iterForFindCorrectAnswer(a, b, counter - 1);
  };
  return iterForFindCorrectAnswer(first, second, startCounter);
};

export default () => {
  game(termsOfTheGame, findCorrectAnswer);
};
