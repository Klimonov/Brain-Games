import readlineSync from 'readline-sync';

const question = str => readlineSync.question(str);

let userName;

// ask name and say hello 'name'
export const sayWelcomeAndHelloName = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  userName = question('May I have your name ? ');
  console.log(`Hello, ${userName}!`);
};

// game. ask user is number even
export const gameIsNumberEven = () => {
  const yes = 'yes';
  const no = 'no';
  for (let counter = 0; counter < 3; counter += 1) {
    const randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log(`\nQuestion: ${randomNumber}`);
    const userAnswer = question('Your answer: ');
    const isEven = randomNumber % 2 === 0;
    if ((isEven && userAnswer === yes) || (!isEven && userAnswer === no)) {
      console.log('Correct!');
    } else {
      return console.log(`\n'${userAnswer}' is wrong answer ;(. Corect answer was '${isEven ? yes : no}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!`);
};
