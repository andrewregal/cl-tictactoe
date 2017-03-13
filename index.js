var readline = require('readline');

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};

var row1 = ' 1 |   |   |   |';
var row2 = ' 2 |   |   |   |';
var row3 = ' 3 |   |   |   |';
var foundWinner = false;


var renderBoard = () => {
  console.log('   | A | B | C |');
  console.log(row1);
  console.log(row2);
  console.log(row3);
};

var changeBoard = (change) => {
  var validColumns = ['A', 'B', 'C'];
  var validRows = ['1', '2', '3'];
  if (validColumns.includes(change[0]) && validRows.includes(change[1]) && (change.length === 2)) {
    var letter = (change[0] === 'A') ? 5 : (change[0] === 'B') ? 9 : 13;
    var row = (change[1] === '1') ? row1 : (change[1] === '2') ? row2 : row3;
    if (change[1] === '1') {
      row1 = row1.replaceAt(letter, 'X');
    } else if (change[1] === '2') {
      row2 = row2.replaceAt(letter, 'X');
    } else {
      row3 = row3.replaceAt(letter, 'X');
    }
  } else {
    console.log('Invalid column or row');
  }
};

renderBoard();
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Choose a Space > ');
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
