var isEven = function(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    num = num - 2;
    return isEven(num);
  }
};
