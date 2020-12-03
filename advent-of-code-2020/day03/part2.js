let fs = require('fs');
let data = fs.readFileSync('puzzle-input.txt', 'utf-8');
let lines = data.split(/\r?\n/);

const expandedLines = lines.map((line) => {
  return line.repeat(Math.round((lines.length / lines[0].length) * 7));
});

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

for (let i = 1; i < expandedLines.length; i++) {
  if (expandedLines[i][i * 3] == '#') count++;
  if (expandedLines[i][i * 5] == '#') count2++;
  if (expandedLines[i][i * 7] == '#') count3++;
}

for (let i = 1; i < expandedLines.length / 2; i++) {
  if (expandedLines[i * 2][i] == '#') count4++;
}

console.log('Total:', count * count2 * count3 * count4);
