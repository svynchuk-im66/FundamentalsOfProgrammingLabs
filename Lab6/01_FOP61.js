const pipe = (...fns) => {
  for (const func of fns) {
    if (typeof func !== 'function') {
      throw new Error('Не функція');
    }
  }
  return (x) => fns.reduce((acc, func) => func(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const example1 = pipe(inc, twice, cube);
console.log(example1(5)); 

const example2 = pipe(inc, inc);
console.log(example2(7)); 


const error = pipe(7); 
console.log(error(7));
