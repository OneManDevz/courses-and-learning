let doneInstructions = []
let accumulator = 0
let currentIndex = 0
const instructions = require('fs').readFileSync('input.txt', 'utf-8').split(/\r?\n/)

while (!doneInstructions.includes(currentIndex)) {
  doneInstructions.push(currentIndex)

  let command = instructions[currentIndex].match(/^(.*?)((\+|-)(\d+))$/)
  let action = command[1].trim()
  let number = parseInt(command[2])

  if (action == 'jmp') {
    currentIndex += number
  } else {
    if (action == 'acc') accumulator += number
    currentIndex += 1
  }
}

console.log('accumulator', accumulator)
