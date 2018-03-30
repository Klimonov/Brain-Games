import { game } from '..';

// game. ask user is number even
const termsOfTheGame = 'What is the result of the expression?';

const correctAnswer = (massive) => {
  const first = massive[0];
  const second = massive[1];
  const numberForOperator = massive[2];
  if (numberForOperator === 1) {
    return first - second;
  } else if (numberForOperator === 2) {
    return first + second;
  }
  return first * second;
};

const foo = (massive) => {
  const numberForOperator = massive[2];
  const operator = op => console.log(`\nQuestion: ${massive[0]} ${op} ${massive[1]}`);

  if (numberForOperator === 1) {
    return operator('-');
  } else if (numberForOperator === 2) {
    return operator('+');
  }
  return operator('*');
};

export default () => {
  game(foo, termsOfTheGame, correctAnswer);
};
