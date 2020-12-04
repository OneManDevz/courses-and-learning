let fs = require('fs')
let data = fs.readFileSync('puzzle-input.txt', 'utf-8')
let stringNumbers = data.split(/\r?\n/)
let numbers = []

stringNumbers.forEach((string) => {
	numbers.push(parseInt(string))
})

for (let i = 0; i < numbers.length; i++) {
	for (let j = 1; j < numbers.length - 1; j++) {
		if (numbers[i] + numbers[j] == 2020) {
			console.log(numbers[i] * numbers[j])
			return
		}
	}
}
