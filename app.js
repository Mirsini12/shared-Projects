function GameBoard() {
  const cellsList = document.querySelectorAll(".cell");
  let gameBoard = ["", "", "", "", "", "", "", "", ""];
 
  function init() {
    // cells.forEach(cell => cell.textContent = "x")
  }

  function getInput() {
    cellsList.forEach(cell => cell.addEventListener('click',getCellIndex))
    
  }
  //cellClicked()
  function getCellIndex() {
    const index = this.getAttribute("data-index");
    gameBoard[index] = "x"
    console.log(gameBoard);
  }

  getInput()
}



let x = GameBoard();