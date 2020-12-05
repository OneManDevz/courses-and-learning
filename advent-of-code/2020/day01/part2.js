let numbers = require('fs').readFileSync('puzzle-input.txt', 'utf-8').split(/\r?\n/).map(Number)

loop1: for (let i = 0; i < numbers.length; i++) {
  for (let j = 1; j < numbers.length - 1; j++) {
    for (let k = 2; k < numbers.length - 2; k++) {
      if (numbers[i] + numbers[j] + numbers[k] == 2020) {
        console.log(numbers[i] * numbers[j] * numbers[k])
        break loop1
      }
    }
  }
}
