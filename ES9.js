// Async Iteration
// Doesn't work
async function process(array) {
  for (let i of array) {
    await doSomething(i);
  }
}

// Doesn't work
async function process(array) {
  array.forEach(async i => {
    await doSomething(i);
  });
}

// Work
async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}


// Rest Spread properties
// enables similar rest/spread functionality for object destructuring
const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

// use it to pass values to a function
restParam({
  a: 1,
  b: 2,
  c: 3
});

function restParam({ a, ...x }) {
  // a = 1
  // x = { b: 2, c: 3 }
}

// The spread operator can be used within other objects. 
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, z: 26 };
// obj2 is { a: 1, b: 2, c: 3, z: 26 }

// Regular Expression Named Capture Groups
const
  reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
  match  = reDate.exec('2018-04-30'),
  year   = match[1], // 2018
  month  = match[2], // 04
  day    = match[3]; // 30

// ES2018 permits groups to be named using the notation ?<name> immediately after the opening capture bracket (.
const
  reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  match  = reDate.exec('2018-04-30'),
  year   = match.groups.year,  // 2018
  month  = match.groups.month, // 04
  day    = match.groups.day;   // 30

// Named captures can also be used in replace() methods.
const
  reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  d      = '2018-04-30',
  usDate = d.replace(reDate, '$<month>-$<day>-$<year>');

// regex unicode prop escape
const reGreekSymbol = /\p{Script=Greek}/u;
reGreekSymbol.test('π'); // true

// regex lookbehind assertion
//lookahead
const
  reLookahead = /\D(?=\d+)/,
  match       = reLookahead.exec('$123.89');

console.log( match[0] ); // $

//lookbehind
const
  reLookbehind = /(?<=\D)\d+/,
  match        = reLookbehind.exec('$123.89');

console.log( match[0] ); // 123.89

// dot all flag for regex
/hello.world/s.test('hello\nworld'); // true

// Finally
function doSomething() {
  doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // finish here!
  });
}

// template literal revision
// all syntactic restrictions related to escape sequences in template literals have been removed.
// Previously, a \u started a unicode escape, an \x started a hex escape, and \ followed by a digit started an octal escape. This made it impossible to create certain strings such as a Windows file path C:\uuu\xxx\111.