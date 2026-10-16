const generateKey = (length, charact) => {
  let key = '';
  for (let a = 0; a < length; a ++) {
    const random = Math.floor(Math.random() * charact.length);
    key += charact[random];
  }
  return key;
};

const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(generateKey(8, characters));