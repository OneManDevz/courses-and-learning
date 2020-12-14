const names = require('fs').readFileSync('input.txt', 'utf-8').split(/\r\n/)

let niceList = names.filter((name) => {
  let rule1 = false
  let rule2 = false
  for (let i = 1; i <= name.length; i++) {
    if ((name.match(new RegExp(name[i - 1] + name[i], 'g')) || []).length == 2) rule1 = true
    if (name[i + 1] == name[i - 1]) rule2 = true
  }

  return rule1 && rule2
})

console.log('niceList', niceList.length)
