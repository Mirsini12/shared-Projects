const GameBoard = () => {
  const cellsList = document.querySelectorAll(".cell");
  const resetBtn = document.getElementById("resetBtn");
  const output = document.getElementById("messageOutput");
  printMessage("Welcome! Player X starts first!");

  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  //true for player1 , otherwise false
  let playingNow = true;
  let gameInProgress = true;

  const startGame = () => {
    cellsList.forEach((cell) => cell.addEventListener("click", onCellClick));
    resetBtn.addEventListener("click", resetGame);
  };

  function onCellClick() {
    const index = this.getAttribute("data-index");
    const cellAvailable = checkAvailableCell(index);

    if (cellAvailable && gameInProgress) {
      const currentPlayer = switchTurn();
      updateBoard(index, currentPlayer);
      checkForWinner(currentPlayer);
      checkForDraw();
      printCurrentPlayersTurn(currentPlayer);
    }
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

  const updateBoard = (index, playerMark) => {
    gameBoard[index] = playerMark;
    cellsList[index].textContent = playerMark;
  };

  const printCurrentPlayersTurn = (currentPlayer) => {
    if (gameInProgress) {
      currentPlayer === "X"
        ? (output.textContent = `Playing Now : O `)
        : (output.textContent = `Playing Now: X `);
    }
  };

  function printMessage(message){
    output.textContent = message;
  }

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
        printMessage(`The Winner Is : ${playerMark} !`)
        gameInProgress = false;
      }
    }
  };

  const checkForDraw = () => {
    if (gameBoard.every((elem) => elem !== "") && gameInProgress) {
      printMessage("The Game is Draw!");
      gameInProgress = false;
    }
  };

  const resetGame = () => {
    cellsList.forEach((cell) => (cell.textContent = ""));
    gameBoard = ["", "", "", "", "", "", "", "", ""];

    playingNow = true;
    gameInProgress = true;

    printMessage("The Game Starts with X");
  };

  startGame();
};

GameBoard();
