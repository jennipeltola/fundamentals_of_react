// Use array destructuring to print out a simple calculating between two numbers.

// Add this function to App.js:

// const calculate = (a, b) => {

    /* Your code here */

    //return [add, subtract, multiply, divide];

// }

// const [add, subtract, multiply, divide] = calculate(6, 8);

// Now print on the screen "6 * 8 = 24" using destructured array.

// Solution:

const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(6, 8);
console.log(`6 * 8 = ${multiply}`);
