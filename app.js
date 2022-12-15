const GameBoard = () => {
  const cellsList = document.querySelectorAll(".cell");
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  const player1 = "X";
  const player2 = "O";
  //true for player1 , otherwise false
  let playingNow = true;

  const startGame = () => {
    cellsList.forEach((cell) =>
      cell.addEventListener("click", getClickedCellIndex)
    );
  };
  function getClickedCellIndex() {
    const index = this.getAttribute("data-index");
    checkAvailableCell(index);
  }

  const checkAvailableCell = (index) => {
    gameBoard[index] !== "" ? null : drawOnScreen(index);
  };

  const drawOnScreen = (index) => {
    if (playingNow) {
      gameBoard[index] = player1;
      cellsList[index].textContent = player1;
      playingNow = !playingNow;
      console.log(gameBoard);
      return;
    } else {
      gameBoard[index] = player2;
      cellsList[index].textContent = player2;
      playingNow = !playingNow;
      console.log(gameBoard);
      return;
    }
  };

  startGame();
};

let x = GameBoard();
