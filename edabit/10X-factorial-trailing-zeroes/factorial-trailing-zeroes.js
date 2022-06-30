const trailingZeroes = (n) => {
  let count = 0;
  for (let i = 5; Math.floor(n / i); i *= 5) count += Math.floor(n / i);

  return count;
};

const facto = (num) => {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else return num * facto(num - 1);
};

// https://edabit.com/challenge/5s9TFExBx8sbreoeF
//   return facto(n).toString().match(/(0*$)/g);
