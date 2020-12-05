let amount = 0
let ribbon = 0

require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\r?\n/)
  .map((line) =>
    line
      .split('x')
      .map(Number)
      .sort((a, b) => (a > b ? 1 : -1))
  )
  .forEach((line) => {
    //Part 1
    amount += 2 * line[0] * line[1] + 2 * line[1] * line[2] + 2 * line[0] * line[2] + line[0] * line[1]
    //Part 2
    ribbon += line[0] + line[0] + line[1] + line[1] + line[0] * line[1] * line[2]
  })

console.log('🚀 ~ file: part1.js ~ line 9 ~ amount', amount, ribbon)
