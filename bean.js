/* Counting the letter B */
var countBs = function(string) {
  var total = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      total = total + 1;
      console.log("total moi cong them");
    }
  }
  return total;
};

/* Counting the letter provided*/
var countChar = function(string, char) {
  var total = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
      total += 1;
      console.log("total moi cong them");
    }
  }
  return total;
};
