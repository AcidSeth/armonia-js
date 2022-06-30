function convert(deg) {
  let num = deg.split("°");

  if (deg.endsWith("°F")) {
    let c = (num[0] - 32) * (5 / 9);
    return Math.round(c) + "°C";

  } else if (deg.endsWith("°C")) {
    let f = num[0] * (9 / 5) + 32;
    return Math.round(f) + "°F";
    
  } else {
    return "Error";
  }
}

// https://edabit.com/challenge/9CNJtMXaw2K5NwMLJ
