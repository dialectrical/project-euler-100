const largestPrimeFactor = (num) => {
  console.log(num);
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      largestPrimeFactor(num / i);
    }
  }
};

//600851475143
console.log(largestPrimeFactor(600851475143));
