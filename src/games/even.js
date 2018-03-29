import { wrongAnswer, correct, grac, randomNumber, question, nameForExport } from '..';

// game. ask user is number even
const gameIsNumberEven = () => {
  const yes = 'yes';
  const no = 'no';
  for (let counter = 0; counter < 3; counter += 1) {
    const randomNumberForGameEven = randomNumber(100);
    console.log(`\nQuestion: ${randomNumberForGameEven}`);
    const userAnswer = question('Your answer: ');
    const isEven = randomNumberForGameEven % 2 === 0;
    if ((isEven && userAnswer === yes) || (!isEven && userAnswer === no)) {
      correct();
    } else {
      return wrongAnswer(userAnswer, isEven ? yes : no, nameForExport);
    }
  }
  return grac();
};

export default gameIsNumberEven;
