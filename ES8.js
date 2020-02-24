//async functions
async function request() {}
let response = await request();

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

// getOwnPropertyDescriptor 
// (.value, .writable, .get, .set, .configurable, .enumerable)
const object1 = {
  property1: 42
}

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable); // true

console.log(descriptor1.value); // 42

// Trailing Commas
const anotherObject = {
  first: 1,
  second: 2,
}
const array = [1, 2, 3,]
const array2 = [1, , 3]; // array2[1] === undefined




//shared memory and atomics
//https://stackoverflow.com/questions/48346490/what-does-the-atomics-object-do-in-javascript
//This feature was introduced with ECMAScript 2017. Shared Memory and Atomics introduce a new memory model that allows multi-agent programs to communicate using atomic operations that ensure a well-defined execution order even on parallel CPUs. This specification also includes new static methods on Object: Object.values, Object.entries, and Object.getOwnPropertyDescriptors.

//The main idea is to bring some sort of multi-threading feature to JavaScript so that JS developers can write high-performance, concurrent programs in the future by allowing to manage memory by themselves instead of letting JS engine manage memory.

//This is done by a new type of a global object called SharedArrayBuffer that essentially stores data in a shared memory space. So this data can be shared between the main JS thread and web-worker threads.

//You simply use SharedArrayBuffer and the data is instantly accessible by both the main thread and multiple web-worker threads.

//But sharing memory between threads can cause race conditions. To help avoid race conditions, the Atomics global object is introduced. Atomics provides various methods to lock the shared memory when a thread is using its data. It also provides methods to update such data in that shared memory safely.