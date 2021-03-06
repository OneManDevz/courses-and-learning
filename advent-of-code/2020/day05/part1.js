let high = 0
require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\r?\n/)
  .forEach((line) => {
    let rows = []
    let columns = []

    for (let r = 1; r <= 128; r++) {
      rows.push(r)
    }
    for (let c = 1; c <= 8; c++) {
      columns.push(c)
    }

    for (let i = 0; i < line.length; i++) {
      let rowHalf = Math.ceil(rows.length / 2)
      let colHalf = Math.ceil(columns.length / 2)

      switch (line[i]) {
        case 'B':
          rows = rows.slice(rowHalf, rows.length)
          break
        case 'F':
          rows = rows.slice(0, rowHalf)
          break
        case 'R':
          columns = columns.slice(colHalf, columns.length)
          break
        case 'L':
          columns = columns.slice(0, colHalf)
          break
      }
    }

    let finalRow = rows[0] - 1
    let finalCol = columns[0] - 1
    let count = finalRow * 8 + finalCol
    high = count > high ? count : high
  })
console.log('high', high)
