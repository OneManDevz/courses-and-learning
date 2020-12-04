const data = require('fs')
	.readFileSync('input.txt', 'utf-8')
	.split(',')
	.map((a) => parseInt(a))

data[1] = 12
data[2] = 2

for (let i = 0; i < data.length; i += 4) {
	if (data[i] == 1) {
		data[data[i + 3]] = data[data[i + 1]] + data[data[i + 2]]
	} else if (data[i] == 2) {
		data[data[i + 3]] = data[data[i + 1]] * data[data[i + 2]]
	} else if (data[i] == 99) {
		break
	}
}
console.log('🚀 ~ file: part1.js ~ line 5 ~ data', data[0])
