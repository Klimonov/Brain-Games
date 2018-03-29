import { wrongAnswer, correct, grac, randomNumber, question, nameForExport } from '..';

// game. calculator
const gameCalculator = () => {
  for (let counter = 0; counter < 3; counter += 1) {
    const firstRandomNumber = randomNumber(100);
    const secondRandomNumber = randomNumber(100);
    const numberForRandomOperation = randomNumber(3);

    // make random operation with random numbers
    let randomOperation;
    let result;
    if (numberForRandomOperation === 1) {
      result = firstRandomNumber + secondRandomNumber;
      randomOperation = '+';
    } else if (numberForRandomOperation === 2) {
      result = firstRandomNumber - secondRandomNumber;
      randomOperation = '-';
    } else {
      result = firstRandomNumber * secondRandomNumber;
      randomOperation = '*';
    }

    console.log(`\nQuestion: ${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`);
    const userAnswer = question('Your answer: ');
    if (String(result) === userAnswer) {
      correct();
    } else {
      return wrongAnswer(userAnswer, result, nameForExport);
    }
  }
  return grac();
};

export default gameCalculator;
