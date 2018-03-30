import game from '..';

const termsOfTheGame = 'Find the greatest common divisor of given numbers.';

const findCorrectAnswer = (randomNumbers) => {
  const first = randomNumbers[0];
  const second = randomNumbers[1];
  const startCounter = first > second ? first : second;
  const iterForFindCorrectAnswer = (a, b, counter) => {
    if (a % counter === 0 && b % counter === 0) {
      return counter;
    }
    return iterForFindCorrectAnswer(a, b, counter - 1);
  };
  return iterForFindCorrectAnswer(first, second, startCounter);
};

const makeQuestion = randomNumbers => `${randomNumbers[0]} ${randomNumbers[1]}`;

export default () => {
  game(makeQuestion, termsOfTheGame, findCorrectAnswer);
};
