const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf-8')

let floor = 0
let basement = 0

for (let i = 0; i < data.length; i++) {
	if (data[i] === ')') floor--
	if (data[i] === '(') floor++

	if (floor == -1) {
		basement = i + 1
		break
	}
}

console.log(floor, basement)
