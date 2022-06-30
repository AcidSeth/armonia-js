const caesarCipher = (s, k) => {
  return s
    .split("")
    .map((char) => shiftChar(char, k))
    .join("");
};

const A = 65;
const Z = 90;
const a = 97;
const z = 122;

const codeSet = (code) => (code < a ? A : a);
const mod = (n, m) => ((n % m) + m) % m;

const shiftChar = (char, k) => {
  const code = char.charCodeAt();

  if ((code >= A && code <= Z) || (code >= a && code <= z)) {
    return String.fromCharCode(
      mod(code + k - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

// https://edabit.com/challenge/a33jdGXkaQRtK9ZTs
