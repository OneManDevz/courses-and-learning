let adapters = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map(Number)

adapters.push(0) // outlet joltage
adapters.push(Math.max(...adapters) + 3) // device's joltage
console.log('adapters', adapters)
adapters = adapters.sort((a, b) => (a > b ? 1 : -1))

let joltage1 = 0
let joltage2 = 0
let joltage3 = 0

for (let i = 1; i < adapters.length; i++) {
  console.log(adapters[i + 1], adapters[i])
  if (adapters[i] - adapters[i - 1] == 1) {
    joltage1++
  } else if (adapters[i] - adapters[i - 1] == 2) {
    joltage2++
  } else if (adapters[i] - adapters[i - 1] == 3) {
    joltage3++
  }
}

console.log(
  '1:',
  joltage1,
  '2:',
  joltage2,
  '3:',
  joltage3,
  'result:',
  joltage1 * joltage3
)
