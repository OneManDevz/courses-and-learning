let fs = require('fs')
let data = fs.readFileSync('puzzle-input.txt', 'utf-8')
let stringNumbers = data.split(/\r?\n/)
let numbers = []

stringNumbers.forEach((string) => {
	numbers.push(parseInt(string))
})

let totalFuel = 0

numbers.forEach((mass) => {
	let tempFloor = Math.floor(mass / 3) - 2

	while (Math.floor(tempFloor / 3) >= 0) {
		if (Math.floor(tempFloor / 3) == 0) {
			totalFuel += tempFloor
			break
		}

		totalFuel += tempFloor
		tempFloor = Math.floor(tempFloor / 3) - 2
	}
})

console.log(totalFuel)
