let triangle; //should use let instead of var
for (i = 0; i < 7; i++) {
  triangle += "#";
  console.log(triangle);
}

//or this way
for (i = 0; i < 7; i++) {
  console.log("#".repeat(i));
}
