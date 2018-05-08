var reverseArray = function(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
};
