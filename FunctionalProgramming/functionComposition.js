const compose = (f, g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!!!`;

const scream = compose(exclaim, toUpperCase);

scream("stop"); // STOP!!!