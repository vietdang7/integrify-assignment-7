var deepEqual = function(val1, val2) {
  if (typeof val1 === typeof val2) {
    if (typeof val1 === "object") {
      if (val1.value === val2.value) {
        return true;
      } else {
        return false;
      }
    } else if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  }
};
