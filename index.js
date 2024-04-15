let flag = false;
let counter = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let turn = document.getElementById("turn");
let cell = document.getElementsByClassName("cell");
let messageWin = document.getElementById("messageWin");
let messageLost = document.getElementById("messageLost");
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
  // check  conditions winner
  conditions();
}
// Restart function
function Restart() {
  location.reload();
}
// conditions function
function conditions() {
  //condition to win
  if (
    //Horizontal: X
    (cell[0].currentTarget == "X" &&
      cell[1].currentTarget == "X" &&
      cell[2].currentTarget == "X") ||
    (cell[3].currentTarget == "X" &&
      cell[4].currentTarget == "X" &&
      cell[5].currentTarget == "X") ||
    (cell[6].currentTarget == "X" &&
      cell[7].currentTarget == "X" &&
      cell[8].currentTarget == "X") ||
    //vertical: X
    (cell[0].currentTarget == "X" &&
      cell[3].currentTarget == "X" &&
      cell[6].currentTarget == "X") ||
    (cell[1].currentTarget == "X" &&
      cell[4].currentTarget == "X" &&
      cell[7].currentTarget == "X") ||
    (cell[2].currentTarget == "X" &&
      cell[5].currentTarget == "X" &&
      cell[8].currentTarget == "X") ||
    //cross: X
    (cell[0].currentTarget == "X" &&
      cell[4].currentTarget == "X" &&
      cell[8].currentTarget == "X") ||
    (cell[2].currentTarget == "X" &&
      cell[4].currentTarget == "X" &&
      cell[6].currentTarget == "X") ||
    //Horizontal: O
    (cell[0].currentTarget == "O" &&
      cell[1].currentTarget == "O" &&
      cell[2].currentTarget == "O") ||
    (cell[3].currentTarget == "O" &&
      cell[4].currentTarget == "O" &&
      cell[5].currentTarget == "O") ||
    (cell[6].currentTarget == "O" &&
      cell[7].currentTarget == "O" &&
      cell[8].currentTarget == "O") ||
    //vertical: O
    (cell[0].currentTarget == "O" &&
      cell[3].currentTarget == "O" &&
      cell[6].currentTarget == "O") ||
    (cell[1].currentTarget == "O" &&
      cell[4].currentTarget == "O" &&
      cell[7].currentTarget == "O") ||
    (cell[2].currentTarget == "O" &&
      cell[5].currentTarget == "O" &&
      cell[8].currentTarget == "O") ||
    //cross: O
    (cell[0].currentTarget == "O" &&
      cell[4].currentTarget == "O" &&
      cell[8].currentTarget == "O") ||
    (cell[2].currentTarget == "O" &&
      cell[4].currentTarget == "O" &&
      cell[6].currentTarget == "O")
  ) {
    setTimeout(() => {
      messageWin.style.display = "block";
    }, 1500);
  }
  setTimeout(() => {
    messageLost.style.display = "block";
  }, 20000);
}
