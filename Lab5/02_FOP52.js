const array = () => {
  const points = []; 
  const fn = (index) => {
    return points[index]; 
  };

  fn.push = (value) => {
    return points.push(value);
  };

  fn.pop = () => {
    return points.pop();
  };

  return fn;
}

const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first
console.log(arr.pop()); // undefined