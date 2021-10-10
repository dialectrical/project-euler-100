const smallestMultiple = (n) => {
  let found;
  let output;
  let search = n;

  while (!output) {
    found = 0;
    for (let i = 1; i <= n; i++) {
      if (search % i === 0) {
        found++;
      }
    }
    if (found === n) {
      output = search;
    } else {
      search++;
    }
  }

  return output;
};

console.log(smallestMultiple(20));
