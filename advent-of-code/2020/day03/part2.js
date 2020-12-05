let lines = require('fs').readFileSync('puzzle-input.txt', 'utf-8').split(/\r?\n/)

const expandedLines = lines.map((line) => line.repeat(Math.round((lines.length / lines[0].length) * 8)))

let counts = [0, 0, 0, 0, 0]

for (let i = 0; i < expandedLines.length; i++) {
  if (expandedLines[i][i] == '#') counts[0]++
  if (expandedLines[i][i * 3] == '#') counts[1]++
  if (expandedLines[i][i * 5] == '#') counts[2]++
  if (expandedLines[i][i * 7] == '#') counts[3]++
  if (expandedLines[i * 2] !== undefined && expandedLines[i * 2][i] == '#') counts[4]++
}

console.log(
  'Total:',
  counts.reduce((acc, cValue) => acc * cValue)
)
