var readline = require('readline');

var row1 = ' 1 |   |   |   |';
var row2 = ' 2 |   |   |   |';
var row3 = ' 3 |   |   |   |';
var foundWinner = false;

console.log('   | A | B | C |');
console.log(row1);
console.log(row2);
console.log(row3);


var changeBoard = (change) => {
  if (change === 'A2') {
    console.log('got here');
  }
};

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Choose a Space > ');
rl.prompt();
rl.on('line', (input) => {
  if (input === 'G6') {
    rl.close();
  }
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});
