function GameBoard() {
  const cellsList = document.querySelectorAll(".cell");
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  const player1 = "X";
  const player2 = "O";
  //true for player1 , otherwise false
  let playingNow = true;
 
  function init() {
    // cells.forEach(cell => cell.textContent = "x")
  }

  function getInput() {
    cellsList.forEach(cell => cell.addEventListener('click',getCellIndex))
    
  }
  //cellClicked()
  function getCellIndex() {
    const index = this.getAttribute("data-index");
    playingNow ? gameBoard[index] = player1 : gameBoard[index] = player2
    playingNow = !playingNow;
    console.log(gameBoard);
  }

  getInput()
}



let x = GameBoard();