function numLeapYears(years) {
  let year = years.split("-");
  let count = 0;
  let start = parseInt(year[0]);
  let end = parseInt(year[1]);
  for (let yr = start; yr <= end; ++yr) {
    if ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0) ++count;
  }
  return count;
}

// https://edabit.com/challenge/EzxPadgs3Y9hYWymS