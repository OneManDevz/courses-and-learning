const fs = require('fs');
let amount = 0;

const lines = fs
  .readFileSync('input.txt', 'utf-8')
  .split(/\r?\n/)
  .map((line) =>
    line
      .split('x')
      .map((number) => parseInt(number))
      .sort((a, b) => (a > b ? 1 : -1))
  )
  .map((line) => {
    amount +=
      2 * line[0] * line[1] + 2 * line[1] * line[2] + 2 * line[0] * line[2] + line[0] * line[1];
  });

console.log('🚀 ~ file: part1.js ~ line 9 ~ amount', amount);
