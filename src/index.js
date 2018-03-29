import readlineSync from 'readline-sync';

export const question = str => readlineSync.question(str);

let userName;

// ask name and say hello 'name'
export const sayWelcomeAndHelloName = (termsOfTheGame) => {
  console.log(`Welcome to the Brain Games!\n${termsOfTheGame}\n`);
  userName = question('May I have your name ? ');
  console.log(`Hello, ${userName}!`);
};
export const nameForExport = userName;

export const wrongAnswer = (userAnswer, corectAnswer, name) => console.log(`\n'${userAnswer}' is wrong answer ;(. Corect answer was '${corectAnswer}'.\nLet's try again, ${name}!`);
export const correct = () => console.log('Correct!');
export const grac = () => console.log(`\nCongratulations, ${userName}!`);

export const randomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;
