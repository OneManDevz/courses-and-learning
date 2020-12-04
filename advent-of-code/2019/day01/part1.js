let fs = require('fs')
let data = fs.readFileSync('puzzle-input.txt', 'utf-8')
let stringNumbers = data.split(/\r?\n/)
let numbers = []

stringNumbers.forEach((string) => {
	numbers.push(parseInt(string))
})

let totalFuel = 0

numbers.forEach((mass) => {
	totalFuel += Math.floor(mass / 3) - 2
})

console.log(totalFuel)
