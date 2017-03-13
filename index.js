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

var changeBoard = (change) => {
  currentTurnPlayer = (currentTurnPlayer === '1') ? '2' : '1';
  var validColumns = ['A', 'B', 'C'];
  var validRows = ['1', '2', '3'];
  if (validColumns.includes(change[0]) && validRows.includes(change[1]) && (change.length === 2)) {
    var letter = (change[0] === 'A') ? 5 : (change[0] === 'B') ? 9 : 13;
    var row = (change[1] === '1') ? row1 : (change[1] === '2') ? row2 : row3;
    if (change[1] === '1') {
      row1[letter] = 'X';
    } else if (change[1] === '2') {
      row2[letter] = 'X';
    } else {
      row3[letter] = 'X';
    }
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
  renderBoard();
  if (input === 'G6') {
    rl.close();
  }
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});
