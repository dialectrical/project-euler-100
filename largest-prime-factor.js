const largestPrimeFactor = (num) => {
  console.log(num);
  for (let i = 2; i <= num; i++) {
    if (i === num) {
      return num;
    } else if (num % i == 0) {
      console.log("num: " + num);
      console.log("i: " + i);
      console.log(num / i);
      largestPrimeFactor(i);
    }
  }
};

//600851475143
console.log(largestPrimeFactor(600851475143));
