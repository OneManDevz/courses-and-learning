const input = require('fs').readFileSync('input.txt', 'utf-8').split(/\r\n/)
const myTime = parseInt(input[0])
const buses = input[1].split(',').map(Number).filter(Number)

let myBus,
  waitTime = myTime

for (let i = 0; i < buses.length; i++) {
  const busWaitTime = buses[i] - (myTime % buses[i])

  if (busWaitTime < waitTime) {
    myBus = buses[i]
    waitTime = busWaitTime
  }
}

console.log(myBus * waitTime)
