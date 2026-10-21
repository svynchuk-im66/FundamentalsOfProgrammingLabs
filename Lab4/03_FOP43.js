function sum3(...args) {
  let a = 0;
  let i = 0; 
  while (i < args.length) { 
    a += args[i];          
    i++;                    
  }

  return a;
}

console.log(sum3(1, 2, 3, 4, 5));