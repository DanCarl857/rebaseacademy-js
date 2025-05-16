const board = document.getElementById("board");
const message = document.getElementById("message");
let currentPlayer = "X";
let cells = Array(9).fill(null); // [null, null, ...]

function drawBoard() {
  board.innerHTML = "";
  cells.forEach((_, i) => {
    const cellElement = document.createElement("div");
    cellElement.className = "cell";
    cellElement.dataset.index = i;
    cellElement.addEventListener("click", handleCellClick, { once: true });
    board.appendChild(cellElement);
  });
  message.textContent = `Turn: ${currentPlayer}`;
}

function handleCellClick(e) {
  const index = e.target.dataset.index;

  if (cells[index] || checkWinner()) return;

  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  const winner = checkWinner();
  if (winner === "X" || winner === "O") {
    message.textContent = `${winner} wins!!`;
  } else if (!cells.includes(null)) {
    message.textContent = "It's a draw!!";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `Turn: ${currentPlayer}`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (const [a, b, c] of winPatterns) {
    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

function restartGame() {
  cells = Array(9).fill(null);
  currentPlayer = "X";
  drawBoard();
}

drawBoard();
message.textContent = `Turn ${currentPlayer}`;
