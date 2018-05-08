/* Range*/
var range = function(start, end, step) {
  var range_array = [];
  if (!step) {
    step = 1;
  }
  if (start < end) {
    for (i = start; i <= end; i = i + step) {
      console.log("them vao array");
      range_array.push(i);
    }
    return range_array;
  } else {
    for (i = start; i >= end; i = i + step) {
      console.log("them vao array");
      range_array.push(i);
    }
    return range_array;
  }
};

/* Sum */
var sum = function(array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
};
