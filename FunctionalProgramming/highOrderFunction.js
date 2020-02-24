const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const calculate = (fn, x, y) => fn(x, y);

calculate(add, 1 ,2);
calculate(mult, 1, 2);