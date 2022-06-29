const wordsToSentence = (words) => {
  if (words === null) return "";

  wordsArr = words.filter(Boolean);
  let sentence = wordsArr.join(", ");

  if (sentence && wordsArr.length - 1) {
    return sentence.replace(/,\s([^,]+)$/, " and $1");
  } else return sentence;
};

// https://edabit.com/challenge/ddXhrbFi4ozxxgYdG
