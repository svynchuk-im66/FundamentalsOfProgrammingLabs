
// Підрахунок елементів різних типів у масиві.
const array = [true, 'hello', 5, 12, -200, false, false, 'evil', 'ok', 42, undefined,  { name: 'Alex' },  [1, 2, 3], 100n, Symbol('$'), () => {}];

const count1 = { number: 0, string: 0, boolean: 0, undefined: 0, object: 0, bigint: 0, symbol: 0, function: 0 };

for (const item of array) {
  if (typeof item in count1) count1[typeof item]++;
}   

console.table(count1); 

//Змініть приклад: видаліть усі ключі з початкової колекції та додайте їх динамічно у циклі.
const count2 = {};

for (const item of array) {
  count2[typeof item] = (count2[typeof item] || 0) + 1;
}

console.table(count2);
