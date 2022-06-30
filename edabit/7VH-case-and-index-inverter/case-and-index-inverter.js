const invert = (s) => {
  let chars = s.split("");
  chars.reverse();

  let caseReverse = chars.map((char) => {
    if (char == char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  });
  return caseReverse.join("");
};

// https://edabit.com/challenge/TYcMysG6yy4RKEQPP
