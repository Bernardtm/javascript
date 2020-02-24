const add = (x, y) => x + y;

// Currying
const add = (x) => {
  return (y) => {
    return x + y;
  }
}

// Simplified Currying
const add = x => y => x + y;

//Without currying
add(1, 2);

//With currying
add(1)(2);

//Uses
const add = x => y => x + y;
const addFive = add(5);
console.log(addFive); // function (y) { return x + y; }

console.log(addFive(3)) // 8