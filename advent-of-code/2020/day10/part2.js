let adapters = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map(Number)

adapters.push(0) // outlet joltage
adapters.push(Math.max(...adapters) + 3) // device's joltage
adapters = adapters.sort((a, b) => a - b)

const previousMap = {},
  countMap = {}

for (let i = 0; i < adapters.length; i++) {
  const current = adapters[i]
  for (let j = 0; j < 3; j++) {
    const next = adapters[i + 1 + j]
    if (next - current <= 3) {
      previousMap[next] = previousMap[next] || []
      previousMap[next].push(current)
    }
  }
}

for (let i = 1; i < adapters.length; i++) {
  const current = adapters[i]
  const previous = previousMap[current]
  for (let j = 0; j < previous.length; j++) {
    if (previous[j] === 0) {
      countMap[current] = (countMap[current] || 0) + 1
    } else {
      countMap[current] = (countMap[current] || 0) + countMap[previous[j]]
    }
  }
}

console.log(countMap[adapters[adapters.length - 1]])
