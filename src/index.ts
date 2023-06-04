/**
 * @name multiply will multiply two numbers when entered
 *
 * @param firstNumber {number}
 * @param secondNumber {number}
 *
 * @return number
 * */
const multiply = (firstNumber:number, secondNumber:number): number => {
    return firstNumber && secondNumber ? firstNumber * secondNumber : 0;
}

export default multiply;
