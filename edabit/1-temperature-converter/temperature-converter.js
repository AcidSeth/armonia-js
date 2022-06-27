function convert(deg) {
  let num = deg.split("°");

  if (deg.endsWith("°F")) {
    let c = (num[0] - 32) * (5 / 9);
    return Math.round((c * 10) / 10) + "°C";
  } else if (deg.endsWith("°C")) {
    let f = num[0] * (9 / 5) + 32;
    return Math.round((f * 10) / 10) + "°F";
  } else {
    return "Error";
  }
}
