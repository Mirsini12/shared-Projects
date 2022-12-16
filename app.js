const GameBoard = () => {
  const cellsList = document.querySelectorAll(".cell");
  const resetBtn = document.getElementById("resetBtn");

  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  //true for player1 , otherwise false
  let playingNow = true;

  const startGame = () => {
    cellsList.forEach((cell) =>
      cell.addEventListener("click", getClickedCellIndex)
    );
    resetBtn.addEventListener("click", resetGame);
  };

  function getClickedCellIndex() {
    const index = this.getAttribute("data-index");
    const cellAvailable = checkAvailableCell(index);

    if (cellAvailable) {
      const currentPlayer = switchTurn();
      drawOnScreen(index, currentPlayer);
    }
    return;
  }

  const checkAvailableCell = (index) => {
    if (gameBoard[index] !== "") {
      return false;
    }
    return true;
  };

  const switchTurn = () => {
    const player1 = "X";
    const player2 = "O";

    if (playingNow) {
      playingNow = !playingNow;
      return player1;
    } else {
      playingNow = !playingNow;
      return player2;
    }
  };

  const drawOnScreen = (index, playerMark) => {
    gameBoard[index] = playerMark;
    cellsList[index].textContent = playerMark;
    console.log(gameBoard);
  };

  const resetGame = () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cellsList.forEach((cell) => (cell.textContent = ""));
    playingNow = true;
  };

  const checkForWinner = () => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    // for (let i = 0 i<gameBoard.length; )
  };

  startGame();
};

let x = GameBoard();
