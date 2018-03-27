import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!\n');
}
export const sayHelloName = () => {
  const userName = readlineSync.question('May I have your name ? ');
  console.log(`Hello, ${userName}!`);
};
