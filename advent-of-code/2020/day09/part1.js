let preamble = 25
const numbers = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map(Number)

let validNumbers = []

for (let i = preamble; i < numbers.length; i++) {
  let preambleNumbers = numbers.slice(i - preamble, i)

  for (let firstN = 0; firstN < preamble; firstN++) {
    for (let secondN = 0; secondN < preamble; secondN++) {
      if (numbers[i] == preambleNumbers[firstN] + preambleNumbers[secondN]) {
        validNumbers.push(numbers[i])
      }
    }
  }
}

const validSet = [...new Set(validNumbers)]
const invalidNumbers = numbers.filter(
  (num, ind) => ind > preamble && !validSet.includes(num)
)
console.log('invalidNumbers', invalidNumbers)
