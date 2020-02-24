// Arrows

// Classes
class Bike{
  constructor(color, model) {
    this.color= color;
    this.model= model;
  }
}

// Enhanced object literals

// Template Strings

// Destructuring

// default, rest, spread

// iterators + for..of

// generators

//unicode

//modules

//module loaders

//map, set, weakmap, weakset

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