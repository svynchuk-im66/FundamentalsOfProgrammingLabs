function removeElements(array) {
    const removed = [];
    for (let i = 1; i < arguments.length; i++) {
        removed.push(arguments[i]);
    }

    const final = array.filter(function (element) {
        return !removed.includes(element);
    });

    while (array.length > 0) {
        array.pop();
    }

    for (let i = 0; i < final.length; i++) {
        array.push(final[i]);
    }
}


const n = [1, 2, 3, 4, 5, 6, 7];
removeElements(n, 5, 1, 6);
console.log(n);


const c = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(c, 'Lima', 'Berlin', 'Kiev');
console.log(c);
