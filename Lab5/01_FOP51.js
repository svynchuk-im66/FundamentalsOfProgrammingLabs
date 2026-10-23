function seq(fn) {
  if (typeof fn === 'number') return fn;

return function seq2(next) {
    if (typeof next === 'number') {
      return fn(next);
    } 
    return seq(x => fn(next(x)));
  };
}

console.log(seq(x => x + 7)(x => x * 2)(5)); 
console.log(seq(x => x * 2)(x => x + 7)(5)); 
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); 
