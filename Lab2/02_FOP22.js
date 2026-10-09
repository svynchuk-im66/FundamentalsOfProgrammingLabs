
'use strict';

const range = (start = 15, end = 30) => {
  const final = [];
  for (let a = start; a <= end; a++) {
    final.push(a);
  }
  return final;
};
console.log(range(15, 30));

const rangeOdd = (start = 15, end = 30) => {
  const final1 = [];
  let s = start; 
  while (s <= end) { 
    if (s % 2 !== 0) {
      final1.push(s);
    }
    s++;
  }
  return final1;
};

console.log(rangeOdd(15, 30));
