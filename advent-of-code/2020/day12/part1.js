const directions = {
  north: 'N',
  south: 'S',
  east: 'E',
  west: 'W',
  left: 'L', //degrees
  right: 'R', //degrees
  forward: 'F', // direction ships is facing
}

const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\r\n/)
  .map((inst) => {
    let value = parseInt(inst.match(/\d+/)[0])
    let instruction = inst.match(/[A-Z]/)[0]
    return { instruction, value }
  })

let dirCode = ['E', 'S', 'W', 'N']
let position = [0, 0]

let current = 'E'

function rotate(value) {
  let index = dirCode.indexOf(current)
  let count = value / 90

  let next = index + (count % 4)
  console.log('next', next)
  if (next < 0) next = 4 + next
  if (next >= 4) next -= 4
  current = dirCode[next]
}

input.forEach((command) => {
  const { instruction, value } = command
  switch (instruction) {
    case directions.north:
      position[1] -= value
      break
    case directions.south:
      position[1] += value
      break
    case directions.east:
      position[0] += value
      break
    case directions.west:
      position[0] -= value
      break
    case directions.left:
      rotate(-value)
      break
    case directions.right:
      rotate(value)
      break
    case directions.forward:
      if (current === directions.north) position[1] -= value
      if (current === directions.south) position[1] += value
      if (current === directions.east) position[0] += value
      if (current === directions.west) position[0] -= value
      break
  }
})

console.log(Math.abs(position[0] + position[1]))
