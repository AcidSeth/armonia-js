const keyboardShortcut = (str) => {
  const chunk = str.split(" ");
  return chunk.map((word) => shortcuts(word));
};

const shortcuts = (word) => {
  if (word.endsWith("+ V")) {
  } else if (word.endsWith("+ C")) {
  }
};

const copy = (str) => {};

const paste = (str) => {};
// https://edabit.com/challenge/oL32o4Qwwmx34ntLm

console.log(keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon"));
console.log(keyboardShortcut("WARNING Ctrl + V Ctrl + C Ctrl + V"));
console.log(keyboardShortcut("The Ctrl + C Ctrl + V Town Ctrl + C Ctrl + V"));
console.log(
  keyboardShortcut(
    "bacteria Ctrl + C Ctrl + V Ctrl + C Ctrl + V Ctrl + C Ctrl + V"
  )
);
console.log(
  keyboardShortcut("You gotta copy something Ctrl + V first my Ctrl + V guy")
);
console.log(
  keyboardShortcut("You gotta paste at Ctrl + C some point my Ctrl + C guy")
);
