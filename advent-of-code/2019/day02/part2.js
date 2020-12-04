const data = require('fs').readFileSync('input.txt', 'utf-8').split(',').map(Number)

data[1] = 12
data[2] = 2
let pointer = 0

while (data[pointer] !== 99) {
	if (data[pointer] == 1) {
		data[data[pointer + 3]] = data[data[pointer + 1]] + data[data[pointer + 2]]
	} else if (data[pointer] == 2) {
		data[data[pointer + 3]] = data[data[pointer + 1]] * data[data[pointer + 2]]
	}

	if (data[data[pointer + 3]] == 19690720) {
		console.log('Daco')
	}
	pointer += 4
}

console.log('🚀 ~ file: part1.js ~ line 5 ~ data', data[0])
