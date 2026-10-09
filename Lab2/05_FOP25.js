'use strict';
1.
const phonebook = [
  { name: 'Ігор', phone: '+380445554433' },
  { name: 'Світлана', phone: '+380991234567' },
  { name: 'Олена', phone: '+380501112233' },
  { name: 'Леся', phone: '+380501555533' }
];

const find = (name) => {
  for (let a = 0; a < phonebook.length; a++) {
    const contact = phonebook[a]; 
    if (contact.name === name) {
      return contact.phone; 
    }
  }
};
console.log(find('Леся')); 

2.
const phonebook1 = {
  'Ігор': '+380445554433',
  'Світлана': '+380991234567',
  'Олена': '+380501112233',
  'Леся': '+380501555533'
};
const find1 = (name) => {
  return phonebook1[name];
};
console.log(find1('Ігор')); 
