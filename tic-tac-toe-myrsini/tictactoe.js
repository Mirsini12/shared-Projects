const selectionWindow = document.querySelector(".selectionWindow");
const gameWindow = document.querySelector(".gameWindow");
gameWindow.style.display = "none";

const btnPlayerVsPlayer = document.getElementById("btnPlayerVsPlayer");
btnPlayerVsPlayer.addEventListener("click", playAgainstPlayer);

function playAgainstPlayer() {
  selectionWindow.style.display = "none";
  gameWindow.style.display = "block";

  const playerText = document.getElementById("playerText");
  const restartBtn = document.getElementById("restartBtn");
  const boxes = Array.from(document.getElementsByClassName("box"));
  const congratulation = getComputedStyle(document.body).getPropertyValue(
    "--winning-blocks"
  );

  const X_Letter = "X";
  const O_Letter = "O";
  let currentPlayer = X_Letter;
  let counter = 0;
  let spaces = Array(9).fill(null);
  const startGame = function () {
    boxes.forEach((box) => box.addEventListener("click", boxClicked));
  };

  function boxClicked(b) {
    const id = b.target.id;
    if (!spaces[id]) {
      spaces[id] = currentPlayer;
      b.target.innerText = currentPlayer;
      counter += 1;
    }

    if (winner() !== false) {
      playerText.innerHTML = currentPlayer + " has won!!!!";
      let winning_blocks = winner();
      winning_blocks.map(
        (box) => (boxes[box].style.backgroundColor = congratulation)
      );
      return;
    }

    if (counter === 9) {
      playerText.innerHTML = "It's a tie!!!!";
      return;
    }

    if (currentPlayer === X_Letter) {
      currentPlayer = O_Letter;
    } else {
      currentPlayer = X_Letter;
    }
  }

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

  function winner() {
    for (const combo of winningCombinations) {
      let [a, b, c] = combo;

      if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
        return [a, b, c];
      }
    }
    return false;
  }

  restartBtn.addEventListener("click", restart);

  function restart() {
    spaces.fill(null);
    boxes.forEach((box) => {
      box.innerText = " ";
      box.style.backgroundColor = "";
    });
    counter = 0;
    currentPlayer = X_Letter;
    playerText.innerHTML = "tic tac toe";
  }

  startGame();
}
