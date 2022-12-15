function GameBoard() {
  const cellsList = document.querySelectorAll(".cell");
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  const player1 = "X";
  const player2 = "O";
  //true for player1 , otherwise false
  let playingNow = true;

  function getInput() {
    cellsList.forEach((cell) => cell.addEventListener("click", getCellIndex));
  }
  function getCellIndex() {
    const index = this.getAttribute("data-index");

    drawOnScreen(index)
  }

  function drawOnScreen(index) {
    if (playingNow) {
      gameBoard[index] = player1; 
      cellsList[index].textContent = player1
      playingNow = !playingNow;
    }
    else {
      gameBoard[index] = player2;
      cellsList[index].textContent = player2;
      playingNow = !playingNow;
    }
    console.log(gameBoard);
  }

  getInput();
}

let x = GameBoard();
