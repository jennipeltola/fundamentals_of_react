// In this assignment use .filter array method for printing out only 
// active users from given users array.

// const users = [

  // { name: 'Anna', active: true },

  // { name: 'Tom', active: false },

  // { name: 'Luna', active: true }

// ];

//  Return only users who are active

// const activeUsers = users.filter(user => /* your code here */);

// console.log(activeUsers);

// The answer should be - 
// { name: 'Anna', active: true }, { name: 'Luna', active: true }

// Solution:

const users = [

 { name: 'Anna', active: true },

 { name: 'Tom', active: false },

 { name: 'Luna', active: true }];

 // user.active has values of true/false, filter() -method always returns true
 const activeUsers = users.filter(user => user.active);

 console.log(activeUsers);