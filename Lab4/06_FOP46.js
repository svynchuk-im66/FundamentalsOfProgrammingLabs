function max(matrix) {
  const flat1 = matrix.flat(); 
  return Math.max(...flat1);
}
console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 