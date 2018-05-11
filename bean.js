/* Counting the letter B */
const countBs = function(string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.toUpperCase()[i] === "B") {
      // transform string to uppercase
      total++;
    }
  }
  return total;
};

/* Counting the letter provided*/
const countChar = function(string, char) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      total++;
    }
  }
  return total;
};
