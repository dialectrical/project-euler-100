const multiples = (maxNum) => {
  let total = 0;
  let multiplesOfThree = (maxNum - 1) / 3;
  let multiplesOfFive = (maxNum - 1) / 5;
  let multiplesOfFifteen = (maxNum - 1) / 15;

  for (let i = 1; i <= multiplesOfThree; i++) {
    total += i * 3;
  }
  for (let d = 1; d <= multiplesOfFive; d++) {
    total += d * 5;
  }
  for (let p = 1; p <= multiplesOfFifteen; p++) {
    total -= p * 15;
  }
  return total;
};

console.log(multiples(1000));
