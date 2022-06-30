const caesarCipher = (s, k) => {
  return s
    .split("")
    .map((char) => shiftChar(char, k))
    .join("");
};

const codeSet = (code) => (code < 97 ? 65 : 97);
const mod = (n, m) => ((n % m) + m) % m;

const shiftChar = (char, k) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + k - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

// https://edabit.com/challenge/a33jdGXkaQRtK9ZTs
