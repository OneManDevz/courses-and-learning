let totalFuel = 0

require('fs')
  .readFileSync('puzzle-input.txt', 'utf-8')
  .split(/\r?\n/)
  .map(Number)
  .forEach((mass) => {
    totalFuel += Math.floor(mass / 3) - 2
  })

console.log(totalFuel)
