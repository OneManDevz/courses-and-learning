let input = require('fs').readFileSync('input.txt', 'utf-8').split(/\r\n/)

let buses = input[1]
  .split(',')
  .map((bus, index) => {
    return bus === 'x' ? 'x' : { id: +bus, modulo: (bus - (index % bus)) % bus }
  })
  .filter((bus) => bus !== 'x')

let waitTime = 0
let step = 1

for (let i = 0; i < buses.length; i++) {
  const { id, modulo } = buses[i]
  while (waitTime % id !== modulo) {
    waitTime += step
  }
  step *= buses[i].id
}

console.log(waitTime)
