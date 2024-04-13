let flag = false;
let counter = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let turn = document.getElementById("turn");
let cell = document.getElementsByClassName("cell");
let messageWin = document.getElementById("messageWin");
let x = "X";
let o = "O";
// Doz function
function Doz(event, i) {
    // Fill the cell with X
  if (flag === false) {
    cell[i].setAttribute("id", "x");
    cell[i].currentTarget = "X";
    cell[i].innerHTML = "X";
    turn.innerHTML = "O's man turn";
    flag = true;
    cell[i].disabled = true;
  } else {
    // Fill the cell with O
    cell[i].setAttribute("id", "circle");
    cell[i].currentTarget = "O";
    cell[i].innerHTML = "O";
    turn.innerHTML = "X's man turn";
    flag = false;
    cell[i].disabled = true;
  }
}