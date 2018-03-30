import game from '..';

const termsOfTheGame = 'What is the result of the expression?';

const findCorrectAnswer = (randomNumbers) => {
  const first = randomNumbers[0];
  const second = randomNumbers[1];
  const numberForOperator = randomNumbers[2];
  if (numberForOperator === 1) {
    return first - second;
  } else if (numberForOperator === 2) {
    return first + second;
  }
  return first * second;
};

const makeQuestion = (randomNumbers) => {
  const numberForOperator = randomNumbers[2];
  const makeQuestionOperator = operator => randomNumbers[0] + operator + randomNumbers[1];

  if (numberForOperator === 1) {
    return makeQuestionOperator(' - ');
  } else if (numberForOperator === 2) {
    return makeQuestionOperator(' + ');
  }
  return makeQuestionOperator(' * ');
};

export default () => {
  game(makeQuestion, termsOfTheGame, findCorrectAnswer);
};
