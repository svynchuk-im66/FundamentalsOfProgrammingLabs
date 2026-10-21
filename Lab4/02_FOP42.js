function sum2(...args) {
  let a = 0;
  for (const x of args) {
    a += x;
  }
  return a;
}

console.log(sum2(1, 2, 3, 4, 5)); 