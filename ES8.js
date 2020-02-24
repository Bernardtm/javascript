//async functions
async function request() {}
let response = await request();

//shared memory and atomics

// Object Values 
const object = {
  name: 'John',
  age: 20
}

console.log(Object.values(object)); // ['John', 20]

// Object Entries
console.log(Object.entries(object)); // [ ['name', 'John'], ['age', 20] ]


// String Padding
const string = '12345';
console.log(string.padStart(10, '.'));
console.log(string.padEnd(10, '.'));

//getownpropdescrip

// Trailing Commas
const anotherObject = {
  first: 1,
  second: 2,
}
const array = [1, 2, 3,]
const array2 = [1, , 3]; // array2[1] === undefined



