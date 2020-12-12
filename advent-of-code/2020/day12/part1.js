const directions = {
  north: 'N',
  south: 'S',
  east: 'E',
  west: 'W',
  left: 'L', //degrees
  right: 'R', //degrees
  forward: 'F', // direction ships is facing
}
let dirCode = ['E', 'S', 'W', 'N']
let position = { NS: 0, EW: 0 }
let current = 'E'

const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\r\n/)
  .map((inst) => {
    let value = parseInt(inst.match(/\d+/)[0])
    let instruction = inst.match(/[A-Z]/)[0]
    return { instruction, value }
  })

function rotate(value) {
  let index = dirCode.indexOf(current)
  let count = value / 90
  let next = index + (count % 4)

  if (next < 0) next = 4 + next
  if (next >= 4) next -= 4
  current = dirCode[next]
}

input.forEach((command) => {
  const { instruction, value } = command
  if (instruction === directions.north) position.NS -= value
  if (instruction === directions.south) position.NS += value
  if (instruction === directions.east) position.EW += value
  if (instruction === directions.west) position.EW -= value
  if (instruction === directions.left) rotate(-value)
  if (instruction === directions.right) rotate(value)
  if (instruction === directions.forward) {
    if (current === directions.north) position.NS -= value
    if (current === directions.south) position.NS += value
    if (current === directions.east) position.EW += value
    if (current === directions.west) position.EW -= value
  }
})

console.log(Math.abs(position.NS + position.EW))
