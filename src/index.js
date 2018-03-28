import readlineSync from 'readline-sync';

const question = str => readlineSync.question(str);

let userName;

// ask name and say hello 'name'
export const sayWelcomeAndHelloName = (termsOfTheGame) => {
  console.log(`Welcome to the Brain Games!\n${termsOfTheGame}\n`);
  userName = question('May I have your name ? ');
  console.log(`Hello, ${userName}!`);
};

const wrongAnswer = (userAnswer, corectAnswer, name) => console.log(`\n'${userAnswer}' is wrong answer ;(. Corect answer was '${corectAnswer}'.\nLet's try again, ${name}!`);
const correct = () => console.log('Correct!');
const grac = () => console.log(`\nCongratulations, ${userName}!`);

const randomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;

// game. ask user is number even
export const gameIsNumberEven = () => {
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
      return wrongAnswer(userAnswer, isEven ? yes : no, userName);
    }
  }
  return grac();
};

// game. calculator
export const gameCalculator = () => {
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
      return wrongAnswer(userAnswer, result, userName);
    }
  }
  return grac();
};
