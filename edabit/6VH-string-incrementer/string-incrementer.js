const incrementString = (str) => {
  let strArr = str.split(/(\d+)/);
  let strWord = strArr[0];
  let num = strArr[1];

  if (/(\d+)/.test(str)) {
    num = parseInt(num) + 1;
    return strWord + num.toString().padStart(strArr[1].length, 0);
  } else {
    return (str += "1");
  }
};

// https://edabit.com/challenge/4cKsMQnxaA7APdeg4
