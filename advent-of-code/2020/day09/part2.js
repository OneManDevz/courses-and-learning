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
let invalidNumbers = []
numbers.forEach((num, ind) => {
  if (ind > preamble && !validSet.includes(num)) {
    invalidNumbers.push({ ind, num })
  }
})
console.log('invalidNumbers', invalidNumbers[0].ind)

for (let i = 0; i < invalidNumbers[0].ind; i++) {
  let numsToSum = []
  for (let j = i; j < invalidNumbers[0].ind; j++) {
    numsToSum.push(numbers[j])

    if (invalidNumbers[0].num == numsToSum.reduce((acc, cVal) => (acc += cVal))) {
      console.log(Math.max(...numsToSum) + Math.min(...numsToSum))
    }
  }
}
