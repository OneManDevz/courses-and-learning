let fs = require('fs')
let data = fs.readFileSync('puzzle-input.txt', 'utf-8')
let lines = data.split(/\r?\n/)

const expandedLines = lines.map((line) => line.repeat(Math.round((lines.length / line.length) * 10)))

let count = 0

for (let i = 0; i < expandedLines.length; i++) {
	if (expandedLines[i][i * 3] == '#') count++
}

console.log('🚀 ~ file: part1.js ~ line 10 ~ count', count)
