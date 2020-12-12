const directions = {
  north: 'N',
  south: 'S',
  east: 'E',
  west: 'W',
  left: 'L', //degrees
  right: 'R', //degrees
  forward: 'F', // direction ships is facing
}
let position = { NS: 0, EW: 0 }
let waypoint = { NS: -1, EW: 10 }

const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\r\n/)
  .map((inst) => {
    let value = parseInt(inst.match(/\d+/)[0])
    let instruction = inst.match(/[A-Z]/)[0]
    return { instruction, value }
  })

function rotate(direction, value) {
  const { EW, NS } = waypoint
  if (value == 90) {
    waypoint.NS = EW * (direction === directions.right ? 1 : -1)
    waypoint.EW = NS * (direction === directions.right ? -1 : 1)
  }
  if (value == 180) {
    waypoint.NS = NS * -1
    waypoint.EW = EW * -1
  }
  if (value == 270) {
    waypoint.NS = EW * (direction === directions.left ? 1 : -1)
    waypoint.EW = NS * (direction === directions.left ? -1 : 1)
  }
}

input.forEach((command) => {
  const { instruction, value } = command

  if (instruction === directions.north) waypoint.NS -= value
  if (instruction === directions.south) waypoint.NS += value
  if (instruction === directions.east) waypoint.EW += value
  if (instruction === directions.west) waypoint.EW -= value
  if (instruction === directions.left || instruction === directions.right) rotate(instruction, value)
  if (instruction === directions.forward) {
    for (let i = 0; i < value; i++) {
      position.NS += waypoint.NS
      position.EW += waypoint.EW
    }
  }
})

console.log(Math.abs(position.NS + position.EW))
