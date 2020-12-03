let fs = require('fs');
let data = fs.readFileSync('puzzle-input.txt', 'utf-8');
let lines = data.split(/\r?\n/);

const expandedLines = lines.map((line) => {
  return line.repeat(Math.round((lines.length / line.length) * 10));
});

let count = 0;
let positions = [];
let x = 0;
let y = 0;

for (let i = 0; i < expandedLines.length - 1; i++) {
  x += 3;
  y += 1;
  positions.push([{ x: x, y: y, char: expandedLines[y][x] }]);

  if (expandedLines[y][x] == '#') count++;
}

console.log('🚀 ~ file: part1.js ~ line 10 ~ count', count);
