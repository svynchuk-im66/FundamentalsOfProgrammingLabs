function compose(...fns) {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new Error('Не все функції');
  }

  let errorTable = null;

  const f = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (error) {
      if (errorTable) {
        errorTable(error);
      }
      return undefined;
    }
  };

  f.on = function (event, handler) {
    if (event === 'error') {
      errorTable = handler;
    }
  };

  return f;
}

const inc = x => ++x;
const twice = x => x * 2;
const bad = x => { throw new Error('No'); };
console.log(compose(inc, twice)(5));

const down = compose(bad, inc, twice);

down.on('error', (err) => {
  console.log(err.message);
});

console.log(down(5));