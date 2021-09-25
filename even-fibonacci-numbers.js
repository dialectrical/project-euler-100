let getFib = (fibLength) => {
  let fibSequence = [];
  for (let i = 0; i < fibLength; i++) {
    if (i > 1) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    } else if (i === 0) {
      fibSequence.push(1);
    } else if (i === 1) {
      fibSequence.push(2);
    }
  }

  return fibSequence;
};

let addFibEvens = (fibLength) => {
  let evensTotal = 0;
  let fibSequence = getFib(fibLength);

  for (let i = 0; i < fibSequence.length; i++) {
    if (fibSequence[i] > 4000000) {
      return evensTotal;
    } else if (fibSequence[i] % 2 === 0) {
      evensTotal += fibSequence[i];
    }
  }
  return evensTotal;
};
console.log(addFibEvens(10000));
