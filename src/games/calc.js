import game from '..';

// game. ask user is number even
const termsOfTheGame = 'What is the result of the expression?';
const foo = randomNumbers => randomNumbers[0];
const correctAnswer = num => (num % 2 === 0 ? 'yes' : 'no');
export default () => {
  game(foo, termsOfTheGame, correctAnswer);
};
// game. calculator
const gameCalculator = () => {
  for (let counter = 0; counter < 3; counter += 1) {
    const firstRandomNumber = randomNumber(100);
    const secondRandomNumber = randomNumber(100);
    const numberForRandomOperator = randomNumber(3);
    // make random operation with random numbers
    let randomOperation;
    let result;
    if (numberForRandomOperator === 1) {
      result = firstRandomNumber + secondRandomNumber;
      randomOperation = '+';
    } else if (numberForRandomOperator === 2) {
      result = firstRandomNumber - secondRandomNumber;
      randomOperation = '-';
    } else {
      result = firstRandomNumber * secondRandomNumber;
      randomOperation = '*';
    }
    const randomNumbersAndOperator = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;
    questions(randomNumbersAndOperator);
    const userAnswer = readLineQuestion('Your answer: ');
    if (String(result) === userAnswer) {
      correct();
    } else {
      return wrongAnswer(userAnswer, result);
    }
  }
  return grac();
};

export default gameCalculator;
