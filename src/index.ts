/**
 * @name multiply will multiply two numbers when entered
 *
 * @param firstNumber {number}
 * @param secondNumber {number}
 *
 * @return number
 * */
const multiply = (firstNumber: number, secondNumber: number): number | null =>
  firstNumber && secondNumber ? firstNumber * secondNumber : null;

export default multiply;
