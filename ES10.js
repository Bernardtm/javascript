// Array.flat()
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11 ,12]]]];

arr.flat() // [1, 2, 3, 4, 5, 6, Array(4)]
arr.flat().flat() // [1, 2, 3, 4, 5, 6, 7, 8, 9, Array(3)]
arr.flat().flat().flat() // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
arr.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Array.flatMap()
let arr = [1, 2, 3, 4, 5];

arr.map(x => [x, x * 2]);

// [Array(2), Array(2), Array(2)]
// 0: (2)[1, 2]
// 1: (2)[2, 4]
// 2: (2)[3, 6]

arr.flatMap(v => [v, v * 2]) // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]


// Object.fromEntries
//The Object.fromEntries() method transforms a list of key-value pairs into an object.
//Note: Object.fromEntries only accept iterable (i.e) Object.fromEntries(iterable)
//It will accept only Map or Array

let obj = {
  key1: 'value 1',
  key2: 'value 2',
  key3: 'value 3'
}

let entries = Object.entries(obj);

// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["key1", "value1"]
// 1: (2) ["key2", "value2"]
// 2: (2) ["key3", "value3"]

let fromEntries = Object.fromEntries(entries);
// {key1: "value 1", key2: "value 2", key3: "value 3"}

let entries = new Map([
  ['name', 'ben'],
  ['age', 25]
]);

Object.fromEntries(entries); // {name: "ben", age: 25}



// String.trimStart() & String.trimEnd()
// The trimStart() method removes whitespace from the beginning of a string.
// The trimEnd() method removes whitespace from the end of a string.

let greeting = '    Hello World!     ';
console.log(JSON.stringify(greeting.trimEnd())); // "     Hello World!"
console.log(JSON.stringify(greeting.trimStart())); // "Hello World!     "

// Optional Catch Binding
//Allow developers to use try/catch without creating an unused binding.
//You are free to go ahead make use of catch block without a param
try {
  throw new Error("some error");
} catch { // no params for catch, catch(e)
  console.log("no params for catch");
}

// Enhanced toString()
//The toString() method returns a string representing the source code of the function.Earlier white spaces,new lines and comments will be removed when you do now they are retained with original source code
function sayHello(text) {
  console.log(`Hello ${text}`);
}

console.log(sayHello.toString());
//function sayHello(text) {
//  console.log(`Hello ${text}`);
//}




//Symbol.description
//The read-only description property is a string returning the optional description of Symbol objects.
let mySymbol = 'My Symbol';
let symObj = Symbol(mySymbol);
console.log(symObj); // Symbol(My Symbol)
console.log(symObj.description); // My Symbol

// Well-formed JSON.stringify
// To prevent JSON.stringify from returning ill-formed Unicode strings.

// Array.Sort Stability
// Users with same rating retain their sorting order
// Previously, V8 used an unstable QuickSort for arrays with more than 10 elements. As of V8 v7.0 / Chrome 70, V8 uses the stable TimSort algorithm.






// JSON ⊂ ECMAScript
// Extend ECMA-262 syntax into a superset of JSON.

// String.matchAll()
// Given a string and a regular expression, matchAll() returns an iterator for the match objects of all matches.
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

let array = [...str.matchAll(regexp)];
array[0]; // ['test1', 'e', 'st1', index: 0, input: 'test1test2', length: 4]
array[1]; // ['test2', 'e', 'st2', index: 5, input: 'test1test2', length: 4]


// Dynamic Import
// Dynamic import Imports can now be assigned to a variable!
(async () => {
  const myModule = await import('./myModule.js');
}) ();


// Standardized “globalThis” Object
// ES10 added the globalThis object which should be used from now on to access global scope on any platform: The global globalThis property returns the top level global object.
//Before:
let getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

let globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
}

//Now:
if (typeof globalThis.setTimeout !== 'function') {
}