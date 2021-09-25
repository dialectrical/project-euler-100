const largestPrimeFactor = (num) => {
  console.log("recursion");
  for (let i = 2; i <= num; i++) {
    if (num === i) {
      console.log("the end!");
      return num;
    } else if (num % i == 0) {
      console.log("num: " + num);
      console.log("i: " + i);
      console.log(num / i);
      return largestPrimeFactor(num / i);
    }
  }
  return num;
};

//600851475143
console.log(largestPrimeFactor(600851475143));
