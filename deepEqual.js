var deepEqual = function(val1, val2) {
  if (val1 === val2) {
    return true;
  }
  if (typeof val1 === typeof val2) {
    if (typeof val1 === "object") {
      if (typeof val1 === null) {
        return true;
      }
      // learn this from classmate - Phuoc
      val1Array = Object.keys(val1).sort();
      val2Array = Object.keys(val2).sort();
      if (val1Array.length !== val2Array.lenght) {
        return false;
      }
      for (let i = 0; i < val1Array.length; i++) {
        if (val1Array[i] !== val2Array[i]) {
          return false;
        }
      }
      return true;
    }
  }
};
