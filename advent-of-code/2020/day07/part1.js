let bags = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\r?\n/)
  .filter((bag) => !bag.match(/no other bags/))
  .filter((bag) => !bag.startsWith('shiny gold'))
  .map((bag) => {
    const parent = bag.match(/(.*) bags contain/)[1]
    const children = bag
      .match(/contain.*/)[0]
      .replace('contain ', '')
      .split(', ')
      .map((subBag) => {
        return { colour: subBag.match(/\d(.*) bag/)[1].trim() }
      })

    return { parent, children }
  })

let results = []
let colours = ['shiny gold']

do {
  let parents = bags.filter((bag) => bag.children.some((child) => child.colour === colours[0]))
  colours.push(...parents.map((bag) => bag.parent))
  colours = colours.slice(1)
  results.push(...parents.map((bag) => bag.parent))
} while (colours.length)

console.log('results', [...new Set(results)].length)
