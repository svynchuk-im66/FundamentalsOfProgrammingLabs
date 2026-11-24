const contract = (fn, ...types) => {
    const type = [...types];
    const returning = type.pop();

    return (...args) => {
        for (let i = 0; i < type.length; i++) {
            if (typeof args[i] !== typeof type[i]()) {
                throw new TypeError('Невідповідний тип переданого значення');
            }
        }

        const final = fn(...args);

        if (typeof final !== typeof returning()) {
            throw new TypeError('Невідповідний тип у результаті');
        }

        return final;
    };
};


const s = (a, b) => a + b;
const adding = contract(s, Number, Number, Number);
console.log(adding(2, 3));

const w = (s1, s2) => s1 + s2;
const plus = contract(w, String, String, String);
console.log(plus('Hello ', 'world!')); 