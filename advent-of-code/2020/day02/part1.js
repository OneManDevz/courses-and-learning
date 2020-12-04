let correctCount = 0

let lines = require('fs')
	.readFileSync('puzzle-input.txt', 'utf-8')
	.split(/\r?\n/)
	.forEach((line) => {
		let lineSplit = line.split(' ')
		let minMax = lineSplit[0].split('-')
		let count = lineSplit[2].match(new RegExp(lineSplit[1][0], 'g'))

		if (count != null && count.length <= minMax[1] && count.length >= minMax[0]) correctCount++
	})

console.log(correctCount)
