import { game, getRandomNumber } from '..';

const termsOfTheGame = 'What is the result of the expression?';

const findCorrectAnswer = () => {
  const first = getRandomNumber(100);
  const second = getRandomNumber(100);
  const numberForOperator = getRandomNumber(3);
  const makeQuestionOperator = operator => `${first} ${operator} ${second}`;
  let termForQuestion;
  let correctAnswer;
  if (numberForOperator === 1) {
    termForQuestion = makeQuestionOperator('-');
    correctAnswer = first - second;
    return [correctAnswer, termForQuestion];
  } else if (numberForOperator === 2) {
    termForQuestion = makeQuestionOperator('+');
    correctAnswer = first + second;
    return [correctAnswer, termForQuestion];
  }
  termForQuestion = makeQuestionOperator('*');
  correctAnswer = first * second;
  return [correctAnswer, termForQuestion];
};

export default () => {
  game(termsOfTheGame, findCorrectAnswer);
};
