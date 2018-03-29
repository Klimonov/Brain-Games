import readlineSync from 'readline-sync';

const readLineQuestion = str => readlineSync.question(str);

const randomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;

export default (getNumberFromMassive, termsOfTheGame, correctAnswer) => {
  console.log(`Welcome to the Brain Games!\n${termsOfTheGame}\n`);
  const userName = readLineQuestion('May I have your name ? ');
  console.log(`Hello, ${userName}!`);
  for (let counter = 0; counter < 3; counter += 1) {
    const randomNumbers = [randomNumber(100), randomNumber(100), randomNumber(3)];
    const randomNumberForGame = getNumberFromMassive(randomNumbers);
    console.log(`\nQuestion: ${randomNumberForGame}`);
    const userAnswer = readLineQuestion('Your answer: ');
    const correct = correctAnswer(randomNumberForGame);
    if (userAnswer === correct) {
      console.log('Correct!');
    } else {
      return console.log(`\n'${userAnswer}' is wrong answer ;(. Corect answer was '${correct}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!`);
};
