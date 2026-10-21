function sum4(...args) {
  let a = 0;
  let i = 0;
  do {
    a += args[i];
    i++;
  } while (i < args.length);
  return a;
}

console.log(sum4(1, 2, 3, 4, 5)); 
