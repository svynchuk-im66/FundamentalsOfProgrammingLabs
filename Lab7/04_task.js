function difference(array1, array2) {
    const d = array1.filter(function (element) {
        return !array2.includes(element);
    });

    return d;
}

const arr1 = [7, -2, 10, 5, 0];
const arr2 = [0, 10];
const result1 = difference(arr1, arr2);
console.log(result1);


const c1 = ['Beijing', 'Kiev'];
const c2 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(c1, c2);
console.log(result2); 