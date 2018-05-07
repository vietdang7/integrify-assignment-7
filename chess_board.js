var size = 8;
var chess_board = "";
var chess_rows = 0;
while (chess_rows < size) {
  var chess_cols = 0;
  var check_hashed;
  if (chess_rows % 2 === 0) {
    check_hashed = true;
  }
  else {
    check_hashed = false;
  }
  while (chess_cols < size) {
    if(check_hashed) {
      chess_board += " ";
    }
    else {
      chess_board += "#";
    }
    check_hashed = !check_hashed;
    chess_cols++;
  }
  chess_board += "\n";
  chess_rows++;


}
console.log(chess_board);
