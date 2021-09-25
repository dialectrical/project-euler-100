const createTable = () => {
  let table = [];
  for (let i = 0; i < 899; i++) {
    table.push([]);
    let x = 999 - i;
    for (let d = 999; d > 99; d--) {
      table[i].push(d * x);
    }
  }
  return table;
};

const checkPalindrome = (num) => {
  let numCheck = num.toString();
  for (let i = 0; i < numCheck.length / 2; i++) {
    if (numCheck[i] !== numCheck[numCheck.length - 1 - i]) {
      i = num.length;
      return false;
    }
  }
  return true;
};

const largestPalindromProduct = () => {
  const table = createTable();
  let biggestPalindrome = 0;
  for (let i = 0; i < 899; i++) {
    for (let d = 0; d < 899; d++) {
      if (checkPalindrome(table[i][d]) && table[i][d] > biggestPalindrome) {
        biggestPalindrome = table[i][d];
      }
    }
  }
  return biggestPalindrome;
};

console.log(largestPalindromProduct());
