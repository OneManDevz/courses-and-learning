let fs = require('fs');
let data = fs.readFileSync('puzzle-input.txt', 'utf-8');
let lines = data.split(/\r?\n/);

const expandedLines = lines.map((line) => {
  return line.repeat(Math.round((lines.length / lines[0].length) * 15));
});

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let x = 0;
let y = 0;

for (let i = 0; i < expandedLines.length - 1; i++) {
  x += 3;
  y += 1;
  if (expandedLines[y][x] == '#') count++;
}

x = 0;
y = 0;
for (let i = 0; i < expandedLines.length - 1; i++) {
  x += 5;
  y += 1;
  if (expandedLines[y][x] == '#') count2++;
}

x = 0;
y = 0;
for (let i = 0; i < expandedLines.length - 1; i++) {
  x += 7;
  y += 1;
  if (expandedLines[y][x] == '#') count3++;
}

x = 0;
y = 0;
for (let i = 0; i < expandedLines.length / 2 - 1; i++) {
  x += 1;
  y += 2;
  if (expandedLines[y][x] == '#') count4++;
}

console.log('Total:', count * count2 * count3 * count4);
