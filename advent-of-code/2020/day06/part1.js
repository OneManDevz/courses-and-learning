let count = 0

require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\n\s*\n/)
  .map((group) => group.split(/\s+/g))
  .map((group) => {
    return group.filter((person) => person.length > 0)
  })
  .forEach((persons) => {
    let groupAnswers = []

    persons.forEach((person) => {
      for (let i = 0; i < person.length; i++) {
        groupAnswers.push(person[i])
      }
    })

    groupAnswers = [...new Set(groupAnswers)]
    count += groupAnswers.length
  })

console.log('count', count)
