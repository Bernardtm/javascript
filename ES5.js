// Callback
function greeting(name) {
  console.log('Hello ' + name);
}
function processUserInput(callback) {
    //var name = prompt('Please enter your name.');
    name = 'raja';
    callback(name);
}
processUserInput(greeting); //output Hello Raja

"use strict"

String.trim()
Array.isArray()
Array.forEach()
Array.map()
Array.filter()
Array.reduce()
Array.reduceRight()
Array.every()
Array.some()
Array.indexOf()
Array.lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
//Property Getters and Setters
//New Object Property Methods