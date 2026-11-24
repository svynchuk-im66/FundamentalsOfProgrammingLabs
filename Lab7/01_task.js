function removeElement(array, item) {
  const final = array.filter(function (element) {
    return element !== item;
  });

  while (array.length > 0) {
    array.pop();
  }

  for (let i = 0; i < final.length; i++) {
    array.push(final[i]);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array); 

const array1 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array1,'Lima');
removeElement(array1,'Berlin');
console.log(array1); 