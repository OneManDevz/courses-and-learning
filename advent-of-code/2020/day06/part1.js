const groups = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\n\s*\n/)
  .map((group) => group.split(/\s+/g))
  .map((group) => {
    return group.filter((person) => person.length > 0)
  })

let count = 0

groups.forEach((persons, i) => {
  let groupAnswers = []
  console.log('persons', persons)

  persons.forEach((person) => {
    for (let i = 0; i < person.length; i++) {
      groupAnswers.push(person[i])
    }
  })

  groupAnswers = [...new Set(groupAnswers)]
  console.log('group:', i, ',answers count:', groupAnswers.length)
  count += groupAnswers.length
})

console.log('count', count)
