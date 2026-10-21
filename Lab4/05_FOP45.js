function sum5(...args) {
  return args.reduce((a, c) => a + c, 0);
}
console.log(sum5(1, 2, 3, 4, 5)); 