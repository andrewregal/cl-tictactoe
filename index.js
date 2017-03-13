var readline = require('readline');

var row1 = [' ', '1', ' ', '|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'];
var row2 = [' ', '2', ' ', '|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'];
var row3 = [' ', '3', ' ', '|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'];
var foundWinner = false;
var currentTurnPlayer = '1';

var renderBoard = () => {
  console.log('   | A | B | C |');
  console.log(row1.join(''));
  console.log(row2.join(''));
  console.log(row3.join(''));
};

var checkBoard = () => {
  // search Xs
  var XcheckColumnA = (row1[5] === 'X' && row2[5] === 'X' && row3[5] === 'X');
  var XcheckColumnB = (row1[9] === 'X' && row2[9] === 'X' && row3[9] === 'X');
  var XcheckColumnC = (row1[13] === 'X' && row2[13] === 'X' && row3[13] === 'X');
  var XcheckRow1 = (row1[5] === 'X' && row1[9] === 'X' && row1[13] === 'X');
  var XcheckRow2 = (row2[5] === 'X' && row2[9] === 'X' && row2[13] === 'X');
  var XcheckRow3 = (row3[5] === 'X' && row3[9] === 'X' && row3[13] === 'X');
  var XcheckDiagonal1 = (row1[5] === 'X' && row2[9] === 'X' && row3[13] === 'X');
  var XcheckDiagonal2 = (row1[13] === 'X' && row2[9] === 'X' && row3[5] === 'X');

  var OcheckColumnA = (row1[5] === 'O' && row2[5] === 'O' && row3[5] === 'O');
  var OcheckColumnB = (row1[9] === 'O' && row2[9] === 'O' && row3[9] === 'O');
  var OcheckColumnC = (row1[13] === 'O' && row2[13] === 'O' && row3[13] === 'O');
  var OcheckRow1 = (row1[5] === 'O' && row1[9] === 'O' && row1[13] === 'O');
  var OcheckRow2 = (row2[5] === 'O' && row2[9] === 'O' && row2[13] === 'O');
  var OcheckRow3 = (row3[5] === 'O' && row3[9] === 'O' && row3[13] === 'O');
  var OcheckDiagonal1 = (row1[5] === 'O' && row2[9] === 'O' && row3[13] === 'O');
  var OcheckDiagonal2 = (row1[13] === 'O' && row2[9] === 'O' && row3[5] === 'O');

  if (XcheckColumnA || XcheckColumnB || XcheckColumnC || XcheckRow1 || XcheckRow2 || XcheckRow3 || XcheckDiagonal1 || XcheckDiagonal2 || OcheckColumnA || OcheckColumnB || OcheckColumnC || OcheckRow1 || OcheckRow2 || OcheckRow3 || OcheckDiagonal1 || OcheckDiagonal2) {
    foundWinner = true;
  }
};

var changeBoard = (change) => {
  XorO = (currentTurnPlayer === '1') ? 'X' : 'O';
  var validColumns = ['A', 'B', 'C'];
  var validRows = ['1', '2', '3'];
  if (validColumns.includes(change[0]) && validRows.includes(change[1]) && (change.length === 2)) {
    var letter = (change[0] === 'A') ? 5 : (change[0] === 'B') ? 9 : 13;

    if (change[1] === '1') {
      row1[letter] = XorO;
    } else if (change[1] === '2') {
      row2[letter] = XorO;
    } else {
      row3[letter] = XorO;
    }
    checkBoard();
  } else {
    console.log('Invalid column or row');
  }
};

renderBoard();
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Choose a Space  > ');
rl.prompt();
rl.on('line', (input) => {
  changeBoard(input);
  if ((foundWinner === true) || (input === 'exit')) {
    renderBoard();
    console.log('**** Player ' + currentTurnPlayer + ' wins! ****');
    rl.close();
  } else {
    renderBoard();
    currentTurnPlayer = (currentTurnPlayer === '1') ? '2' : '1';
    rl.prompt();
  }
}).on('close', () => {
  process.exit(0);
});
