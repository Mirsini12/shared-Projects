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
    let player = null;
    const player1 = "X";
    const player2 = "O";

    if (playingNow) {
      player = player1;
      playingNow = !playingNow;
      return player;
    } else {
      player = player2;
      playingNow = !playingNow;
      return player;
    }
  };

  const drawOnScreen = (index) => {
    gameBoard[index] = index;
    cellsList[index].textContent = gameBoard[index];
    console.log(gameBoard);
  };

  const resetGame = () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cellsList.forEach((cell) => (cell.textContent = ""));
    console.log(gameBoard);
  };

  const checkForWinner = () => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    // for (let i = 0 i<gameBoard.length; )
  }

  startGame();
};

let x = GameBoard();
