'use strict';

const fn = () => {
  const objConst = { name: 'Георгій' };
  let objLet = { name: 'Джин' };
  objConst.name = 'Георгіна';
  objLet.name = 'Джуніперіна';    
  // objConst = { name: 'Щось інше' }; - дає помилку, бо константа не може бути переназначена.
  objLet = { name: 'Джуніпер' }; 
  return { objConst, objLet };
};
console.table(fn());

const createUser = (name, city) => {
  return { name: name, city: city
  };
};
console.log(createUser('Георгій', 'Бердичів'));