// for a parameter x, always return y
//Eliminate side effects
//Easy to test
//More memory
//Multi-core friendly

// Impure Function, if you call in march, returns 31, if in april returns 30
const dayThisMonth = function() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let start = new Date(year, month, 1);
  let end = new Date(year, month + 1, 1);

  return Math.round((end - start) / (1000 * 60 * 60 * 24)); 
}

// Pure Function, always return the same value for the same parameters
let daysInMonth = function(year, month) {
  let start = new Date(year, month - 1, 1);
  let end = new Date(year, month, 1);

  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

// No side effects, stateless(no assignments)
