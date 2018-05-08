var arrayToList = function(array) {
  list = null;
  for (i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};
