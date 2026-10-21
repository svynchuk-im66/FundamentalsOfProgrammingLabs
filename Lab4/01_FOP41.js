function sum1(...args) {
  let a = 0;
  for (let y = 0; y < args.length; y++) {
    a += args[y];
  }
  return a;
}
console.log(sum1(1, 2, 3, 4, 5))