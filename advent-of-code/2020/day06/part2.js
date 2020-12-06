const groups = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\n\s*\n/)
  .map((group) => group.split(/\s+/g))
  .map((group) => {
    return group.filter((person) => person.length > 0)
  })

let count = 0

groups.forEach((group) => {
  const nOfApp = group.length
  let groupAnswers = []

  let joinedAnswers = group.reduce((acc, curr) => (acc += curr))

  for (let i = 0; i < joinedAnswers.length; i++) {
    let regex = new RegExp(`^(.*${joinedAnswers[i]}.*){${nOfApp}}$`)
    if (regex.test(joinedAnswers)) {
      groupAnswers.push(joinedAnswers[i])
    }
  }

  groupAnswers = [...new Set(groupAnswers)]
  count += groupAnswers.length
})

console.log('count', count)
