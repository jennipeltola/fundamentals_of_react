// Your task is to write .map array method for print out capitalized names 
// from given names array.

// Find how is best way to edit code

// const names = ['alice', 'bob', 'carol'];

// Return a new array with names capitalized

// const capitalized = names.map(name => /* your code here */);

// console.log(capitalized); // The answer should be: ['Alice', 'Bob', 'Carol']

// Solution:

const names = ['alice', 'bob', 'carol'];

// Create a new array by taking the first letter, capitalize it and add the
// rest of the unchanged letters to the name
const capitalized = names.map(
    name => name.charAt(0).toUpperCase() + name.slice(1)
);

console.log(capitalized);