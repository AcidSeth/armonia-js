const incrementString = (str) => {
  let strArr = str.split(/(\d+)/);
  let strWord = strArr[0];
  let num = strArr[1];
  if (/(\d+)/.test(str)) {
    let leadingZeros = num.match(/^0*/g);
    num = parseInt(num) + 1;
    return strWord +  leadingZeros + num;
  } else {
    return (str += "1");
  }
};

// https://edabit.com/challenge/4cKsMQnxaA7APdeg4

https: console.log(incrementString("foo"));
console.log(incrementString("foobar01002"));
console.log(incrementString("foobar00599"));
console.log(incrementString("foo099"));
console.log(incrementString("foo09999"));