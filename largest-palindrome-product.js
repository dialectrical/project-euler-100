const largestPalindromProduct = () => {
  let biggestPalindrome = 0;
  for (let i = 0; i < 899; i++) {
    let x = 999 - i;
    for (let d = 999; d > 99; d--) {
      if (checkPalindrome(d * x) && d * x > biggestPalindrome) {
        biggestPalindrome = d * x;
      }
    }
  }
  return biggestPalindrome;
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

console.log(largestPalindromProduct());
