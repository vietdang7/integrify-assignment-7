var listToArray = function(list) {
  let finalArray = [];
  for (i = list; i; i = i.rest) {
    finalArray.push(i.value);
  }
  return finalArray;
};
