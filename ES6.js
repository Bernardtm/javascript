// Let and Const
let variable
const constant

// Arrow Functions
// More than one argument	
const myFunct =  (name, lastName) => { return name + ' ' + lastName }
// Single Argument	
const myFunct = name => { return name }
// No Argument
const myFunct = () => { return 1 + 1 }
// One line command
const myFunct = number => number * 2

// Classes
class Bike{
  constructor(color, model) {
    this.color= color;
    this.model= model;
  }
}

// Enhanced object literals

// Template Strings
let templateString = `Value: ${value} dollars`;

// Destructuring
// List
[a, b] = [20, 25]
console.log(a); // 20

// Objects	
const person = { name: 'John', age: 26 };	
{ name } = person;
// destructuring and rename
const { twitter: tweet, facebook: fb } = wes.links.social;	


// Default Parameter Values
function f (x, y = 7, z = 42) { return x + y + z } f(1) === 50

// Rest Parameters
// Rest receive many arguments and treat as a list	
function ordenar(...numeros){
  return numeros.sort();
}
ordenar(4, 3, 1, 6, 2);	

// Spread Operator
// Spread add elements of a list in another list	
const numbers = [1,2,3]

// add as many as you want
const newNumbers = [...numbers, 4]
console.log(newNumbers); // [1,2,3,4]
	
const person = { name: 'John' }	
const newPerson = { ...person , age: 26 }
console.log(newPerson); // { name: 'John', age: 26 }



// iterators + for..of

// generators

//unicode

// Modules - export, import
export default person;
import person from './person.js';

import prs from './person.js'; // it's possible to give any name
export const clean;
import { clean } from 'utility.js' // must use the same name



//map, set, weakmap, weakset
// Array Functions
const numeros = [1,2,3,4]	
//Map retorna uma lista	
const multiplica = numeros.map(el => el * 2)
//Find retorna o primeiro elemento	
const maior = numeros.find( el => el > 4)
FindIndex	findIndex() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Filter	filter() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Reduce	reduce() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
Concat	concat() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
Slice	slice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Splice	splice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//proxies

//symbols

//subclassable built-ins

// Promises
// promise states: pending, fulfilled, rejected
var promise1 = new Promise(function(resolve, reject) {
  isDbOperationCompleted = false;
  if (isDbOperationCompleted) {
      resolve('Completed');
  } else {
      reject('Not completed');
  }
});
promise1.then(function(result) {
  console.log(result); //Output : Completed
}).catch(function(error) {
  console.log(error); //if isDbOperationCompleted=FALSE                                                  
  //Output : Not Completed
})

//math, number,string,array,object apis

//binary,octal literals

//reflect api

//tail calls