var minimum = function(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
};
// should store return in variable for later use

//other way
var minimum = function(a, b) {
  return a < b ? a : b;
};
