const names = require('fs').readFileSync('input.txt', 'utf-8').split(/\r\n/)

let niceList = names.filter((name) => {
  let vowelCount = 0
  let rule2 = false // contains at least one letter that appears twice in a row
  let rule3 = false // does not contain the strings ab, cd, pq, or xy
  for (let i = 0; i < name.length; i++) {
    if (name[i] == 'a') vowelCount++
    if (name[i] == 'e') vowelCount++
    if (name[i] == 'i') vowelCount++
    if (name[i] == 'o') vowelCount++
    if (name[i] == 'u') vowelCount++

    if (name[i] == name[i - 1]) rule2 = true
  }

  if (!name.includes('ab') && !name.includes('cd') && !name.includes('pq') && !name.includes('xy')) {
    rule3 = true
  }

  if (vowelCount >= 3 && rule2 && rule3) return name
})

console.log('niceList', niceList.length)
