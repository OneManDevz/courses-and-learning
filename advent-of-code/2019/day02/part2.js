const initialData = require('fs').readFileSync('input.txt', 'utf-8').split(',').map(Number)

initialData[1] = 12
initialData[2] = 2

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const data = [...initialData]

    let pointer = 0

    data[1] = noun
    data[2] = verb

    while (data[pointer] !== 99) {
      if (data[pointer] == 1) {
        data[data[pointer + 3]] = data[data[pointer + 1]] + data[data[pointer + 2]]
      } else if (data[pointer] == 2) {
        data[data[pointer + 3]] = data[data[pointer + 1]] * data[data[pointer + 2]]
      }

      pointer += 4
    }

    if (data[0] === 19690720) {
      console.log(100 * noun + verb)
      return
    }
  }
}
