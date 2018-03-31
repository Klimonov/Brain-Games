import readlineSync from 'readline-sync';

const readLineQuestion = str => readlineSync.question(str);

export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;

export const game = (termsOfTheGame, findCorrectAnswer) => {
  console.log(`Welcome to the Brain Games!\n${termsOfTheGame}\n`);
  const userName = readLineQuestion('May I have your name ? ');
  console.log(`Hello, ${userName}!`);
  for (let counter = 0; counter < 3; counter += 1) {
    const [correctAnswer, termForQuestion] = findCorrectAnswer();
    console.log(`\nQuestion: ${termForQuestion}`);
    const userAnswer = readLineQuestion('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`\n'${userAnswer}' is wrong answer ;(. Corect answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!`);
};
