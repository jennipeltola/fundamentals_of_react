// Use object destructuring to extract title and year in App.js

// const movie = { title: "Inception", year: 2010, director: "Nolan" };

// const /* Your code here */

// Now use destructed object to print out  // The movie "Inception" was released in 2010.

// Solution:

const movie = { title: "Inception", year: 2010, director: "Nolan" };

const { title, year, director } = movie;

console.log(`The movie "${title}" was released in ${year}.`);
