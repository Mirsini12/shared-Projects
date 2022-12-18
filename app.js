const GameBoard = () => {
  const cellsList = document.querySelectorAll(".cell");
  const resetBtn = document.getElementById("resetBtn");
  const output = document.getElementById("messageOutput");

  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  //true for player1 , otherwise false
  let playingNow = true;
  let gameInProgress = true;

  const startGame = () => {
    cellsList.forEach((cell) =>
      cell.addEventListener("click", getClickedCellIndex)
    );
    resetBtn.addEventListener("click", resetGame);
    
  };

  function getClickedCellIndex() {
    const index = this.getAttribute("data-index");
    const cellAvailable = checkAvailableCell(index);

    if (cellAvailable && gameInProgress) {
      const currentPlayer = switchTurn();
      updateCell(index, currentPlayer);
      drawMessage(currentPlayer);
    }
    if (!cellAvailable && gameInProgress) {
      console.log("tie");
    }
  }
  const drawMessage = (currentPlayer) => {
    if (gameInProgress) {
      currentPlayer === "X"
        ? (output.textContent = `Playing Now : O `)
        : (output.textContent = `Playing Now: X `);
    }
  };

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

  const updateCell = (index, playerMark) => {
    gameBoard[index] = playerMark;
    cellsList[index].textContent = playerMark;
    console.log(gameBoard);
    checkForWinner(playerMark);
  };

  const resetGame = () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cellsList.forEach((cell) => (cell.textContent = ""));
    output.textContent = `The Game Starts with X`;
    console.log(gameBoard);
    playingNow = true;
    return;
  };

  const checkForWinner = (playerMark) => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCombinations.length; i++) {
      let c1 = winCombinations[i][0];
      let c2 = winCombinations[i][1];
      let c3 = winCombinations[i][2];
      if (
        gameBoard[c1] === playerMark &&
        gameBoard[c2] === playerMark &&
        gameBoard[c3] === playerMark
      ) {
        output.textContent = `The Winner Is : ${playerMark}`;
        gameInProgress = false;
      }
    }
  };
  startGame();
};

let x = GameBoard();
