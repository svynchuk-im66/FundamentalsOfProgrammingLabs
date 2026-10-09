
const average = (a, b) => (a + b) / 2;
const square = (x) => x ** 2; 
const cube = (x) => x ** 3; 

const calculate = (start= 0, end = 9) => {
  const array = []; 
  for (let a = start; a <= end  ; a++) {
    const squareValue = square(a); 
    const cubeValue = cube(a); 
    const averageValue = average(squareValue, cubeValue); 
    array.push(averageValue); 
  }
  return array; 
};

console.log(calculate());