const iface = {
  m1: x => [x],
  m2: (x, y) => [x, y],
  m3: (x, y, z) => [x, y, z]
};
const result = [];
for (const key in iface) {
  if (typeof iface[key] === 'function') {
    const count = iface[key].length; 
    result.push([key, count]);
  }
}
console.log(JSON.stringify(result));

