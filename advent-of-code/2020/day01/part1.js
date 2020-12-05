let numbers = require('fs').readFileSync('puzzle-input.txt', 'utf-8').split(/\r?\n/).map(Number)

loop1: for (let i = 0; i < numbers.length; i++) {
  for (let j = 1; j < numbers.length - 1; j++) {
    if (numbers[i] + numbers[j] == 2020) {
      console.log(numbers[i] * numbers[j])
      break loop1
    }
  }
}
