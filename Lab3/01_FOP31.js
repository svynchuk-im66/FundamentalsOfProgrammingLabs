
const random = (min, max) => {
  if (max === undefined) [min, max] = [0, min]; //деструктизація, якщо max не переданий, то min стає 0, а max стає min.
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(random(5, 1000)); 
