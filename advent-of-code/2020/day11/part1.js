const empty = 'L'
const floor = '.'
const occupied = '#'

let matrix = require('fs').readFileSync('input.txt', 'utf-8')

function neighbours(matrix, row, col) {
  let neighboursCount = 0
  const prevRow = matrix[row - 1]
  const currRow = matrix[row]
  const nextRow = matrix[row + 1]

  if (currRow[col - 1] === occupied) neighboursCount++
  if (currRow[col + 1] === occupied) neighboursCount++
  if (prevRow) {
    if (prevRow[col - 1] === occupied) neighboursCount++
    if (prevRow[col] === occupied) neighboursCount++
    if (prevRow[col + 1] === occupied) neighboursCount++
  }
  if (nextRow) {
    if (nextRow[col - 1] == occupied) neighboursCount++
    if (nextRow[col] === occupied) neighboursCount++
    if (nextRow[col + 1] === occupied) neighboursCount++
  }

  return neighboursCount
}

while (true) {
  const rows = matrix.trim().split('\n')
  const columns = rows[0].split('')
  let next = ''

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      const neighboursCount = neighbours(rows, i, j)
      if (rows[i][j] === empty && neighboursCount == 0) next += occupied
      else if (rows[i][j] === occupied && neighboursCount >= 4) next += empty
      else next += rows[i][j]
    }
    next += '\n'
  }
  next = next.trim()
  if (matrix === next) break
  matrix = next
}

const resultPart1 = matrix
  .split('\n')
  .reduce((acc, cValue) => acc + cValue.split('').filter((seat) => seat == occupied).length, 0)

console.log('resultPart1', resultPart1)
