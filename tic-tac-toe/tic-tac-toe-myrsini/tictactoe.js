const selectionWindow = document.querySelector(".selectionWindow");
const gameWindow = document.querySelector(".gameWindow");
gameWindow.style.display = "none";

const btnPlayerVsPlayer = document.getElementById("btnPlayerVsPlayer");
btnPlayerVsPlayer.addEventListener("click", playAgainstPlayer);

function playAgainstPlayer() {
  //create a function switchWindows() to switch the game modes
  selectionWindow.style.display = "none";
  gameWindow.style.display = "block";
  let running = true;

  //id playerText for a p that displays tic tac toe text and win message?
  const header = document.getElementById("header");
  const restartBtn = document.getElementById("restartBtn");

  const boxes = document.querySelectorAll(".box");

  const letterX = "X";
  const letterO = "O";
  let currentPlayer = letterX;

  let tieCounter = 0;
  let gameBoard = Array(9).fill(null);

  const startGame = function () {
    boxes.forEach((box) => box.addEventListener("click", boxClicked));
    restartBtn.addEventListener("click", restart);

    function boxClicked(b) {
      if (running) {
        updateBoard(b);
        let winner = checkForWinner();

        if (winner) {
          markWinningBlocks(winner);
        }
        checkForTie();
        switchPlayer();
      }
      return;
    }
  };

  function updateBoard(b) {
    const id = b.target.id;
    if (!gameBoard[id]) {
      gameBoard[id] = currentPlayer;
      b.target.innerText = currentPlayer;
      tieCounter += 1;
    }
  }

  function markWinningBlocks(winningBlocks) {
    const winnerColor = getComputedStyle(document.body).getPropertyValue(
      "--winning-blocks"
    );

    winningBlocks.map(
      (box) => (boxes[box].style.backgroundColor = winnerColor)
    );
  }

  function checkForWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combo of winningCombinations) {
      let [a, b, c] = combo;

      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        running = false;
        return [a, b, c];
      }
    }
    return false;
  }

  function checkForTie() {
    if (tieCounter === 9) {
      //   playerText.innerHTML = "It's a tie!!!!";
      return;
    }
  }

  function switchPlayer() {
    if (currentPlayer === letterX) {
      currentPlayer = letterO;
    } else {
      currentPlayer = letterX;
    }
  }

  function restart() {
    running = true;
    gameBoard.fill(null);
    boxes.forEach((box) => {
      box.innerText = " ";
      box.style.backgroundColor = "";
    });
    tieCounter = 0;
    currentPlayer = letterX;
    // playerText.innerHTML = "tic tac toe";
  }

  startGame();
}
