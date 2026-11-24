function unique(array) {
  return array.filter(function (element, index) {
    return array.indexOf(element) === index;
  });
}


const n = unique([2, 1, 1, 3, 2]);
console.log(n); 

const u = unique(['top', 'bottom', 'top', 'left']);
console.log(u); 