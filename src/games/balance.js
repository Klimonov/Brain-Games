import { game, getRandomNumber } from '..';

const termsOfTheGame = 'Balance the given number.';

const findCorrectAnswer = () => {
  const randomNumber = getRandomNumber(10000);
  const stringNumber = String(randomNumber);
  const lengthOfNumber = stringNumber.length;

  // the sum of all the numerals of a random number
  let sumOfNumeral = 0;
  for (let counter = 0; counter < lengthOfNumber; counter += 1) {
    sumOfNumeral += Number(stringNumber[counter]);
  }

  // make a number from basic numeral
  const basicNumeral = Math.floor(sumOfNumeral / lengthOfNumber);
  let numberOfBasicNumeral = '';
  for (let counter = 0; counter < lengthOfNumber; counter += 1) {
    numberOfBasicNumeral += basicNumeral;
  }

  // find how many Ones need to sum with the base numerals to get the correct answer
  let onesForSum = '';
  const amountOfOnes = sumOfNumeral % lengthOfNumber;
  for (let counter = 0; counter < amountOfOnes; counter += 1) {
    onesForSum += 1;
  }
  const correctAnswer = Number(numberOfBasicNumeral) + Number(onesForSum);
  return [correctAnswer, randomNumber];
};


export default () => {
  game(termsOfTheGame, findCorrectAnswer);
};
