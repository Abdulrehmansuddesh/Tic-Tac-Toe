
const cells = document.querySelectorAll('.cell');
var currentPlayer = 'X';
var gameEnded = false;

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

function handleCellClick(e) {
  var cell = e.target;

  if (cell.textContent !== '' || gameEnded) {
    return;
  }

  cell.textContent = currentPlayer;
  cell.style.backgroundColor = currentPlayer === 'X' ? 'lightblue' : 'lightcoral';

  if (checkWin()) {
    alert(currentPlayer + ' wins!');
    gameEnded = true;
    return;
  }

  if (checkDraw()) {
    alert('It\'s a draw!');
    gameEnded = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  var winningCombinations = [ 
                // rows

    [0, 1, 2], [3, 4, 5], [6, 7, 8],

                 // columns

    [0, 3, 6], [1, 4, 7], [2, 5, 8],

                  // diagonals

    [0, 4, 8], [2, 4, 6] 
  ];

  return winningCombinations.some(combination => {
    var [a, b, c] = combination;
    return cells[a].textContent !== '' &&
           cells[a].textContent === cells[b].textContent &&
           cells[a].textContent === cells[c].textContent;
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function reset(){
  location.reload()
}