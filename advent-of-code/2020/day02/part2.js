let correctCount = 0
let fs = require('fs')
	.readFileSync('puzzle-input.txt', 'utf-8')
	.split(/\r?\n/)
	.forEach((line) => {
		let lineSplit = line.split(' ')
		let minMax = lineSplit[0].split('-')

		if ((lineSplit[2][minMax[0] - 1] == lineSplit[1][0]) ^ (lineSplit[2][minMax[1] - 1] == lineSplit[1][0])) correctCount++
	})

console.log(correctCount)
