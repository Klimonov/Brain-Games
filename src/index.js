import readlineSync from 'readline-sync';

const readLineQuestion = str => readlineSync.question(str);

export const randomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;

export default (getNumberFromMassive, termsOfTheGame, findCorrectAnswer) => {
  console.log(`Welcome to the Brain Games!\n${termsOfTheGame}\n`);
  const userName = readLineQuestion('May I have your name ? ');
  console.log(`Hello, ${userName}!`);
  for (let counter = 0; counter < 3; counter += 1) {
    const randomNumbers = [randomNumber(100), randomNumber(100), randomNumber(3)];
    console.log(`\nQuestion: ${getNumberFromMassive(randomNumbers)}`);
    const correctAnswer = String(findCorrectAnswer(randomNumbers));
    const userAnswer = readLineQuestion('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`\n'${userAnswer}' is wrong answer ;(. Corect answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!`);
};
