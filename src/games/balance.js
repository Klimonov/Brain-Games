import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Balance the given number.';

const findCorrectAnswer = (arrayNumber, length) => {
  const firstNumber = Number(arrayNumber[0]);
  const lastNumber = Number(arrayNumber[length - 1]);
  if (lastNumber - firstNumber > 1) {
    const arrayForChange = arrayNumber;
    arrayForChange[0] += 1;
    arrayForChange[length - 1] -= 1;
    return findCorrectAnswer(arrayForChange.sort(), length);
  }
  return arrayNumber.join('');
};

const findCorrectAnswerAndQuestion = () => {
  const randomNumber = getRandomNumber(10000);
  const stringNumber = String(randomNumber);
  const lengthOfNumber = stringNumber.length;

  const numberToArray = [];
  for (let counter = 0; counter < lengthOfNumber; counter += 1) {
    numberToArray.push(Number(stringNumber[counter]));
  }
  const sortedArrayNumber = numberToArray.sort();

  const correctAnswer = findCorrectAnswer(sortedArrayNumber, lengthOfNumber);
  return [correctAnswer, randomNumber];
};


export default () => {
  game(termsOfTheGame, findCorrectAnswerAndQuestion);
};
