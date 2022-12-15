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
    if (gameBoard[index] !== "") {
      return;
    }
    const currentPlayer = switchTurn();
    drawOnScreen(index, currentPlayer);
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

  const drawOnScreen = (index, whoseTurn) => {
    gameBoard[index] = whoseTurn;
    cellsList[index].textContent = gameBoard[index];
  };

  startGame();
};

let x = GameBoard();
