let doneInstructions = []
let accumulator = 0
let currentIndex = 0
let step = 0
const instructions = require('fs').readFileSync('input.txt', 'utf-8').split(/\r?\n/)

do {
  while (currentIndex < instructions.length && !doneInstructions.includes(currentIndex)) {
    doneInstructions.push(currentIndex)

    let command = instructions[currentIndex].match(/^(.*?)((\+|-)(\d+))$/)
    let action = command[1].trim()
    let number = parseInt(command[2])

    if (step == currentIndex && action !== 'acc') {
      if (action == 'jmp') {
        action = 'nop'
      } else {
        action = 'jmp'
      }
    }

    if (action == 'jmp') {
      currentIndex += number
    } else {
      if (action == 'acc') accumulator += number
      currentIndex += 1
    }
  }

  if (currentIndex == instructions.length) break

  step++
  accumulator = 0
  doneInstructions = []
  currentIndex = 0
} while (1)

console.log('Accumulator', accumulator)
