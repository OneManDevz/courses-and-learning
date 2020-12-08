const bags = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split(/\r?\n/)
  .map((bag) => {
    const parent = bag.match(/(.*) bags contain/)[1]
    const parentChildren = bag.match(/contain.*/)[0].startsWith('contain')
      ? bag
          .match(/contain.*/)[0]
          .substr(7)
          .trim()
      : bag.match(/contain.*/)[0].trim()
    const children = parentChildren
      .split(',')
      .map((subBag) => {
        const count = parseInt(subBag)
        const colour = subBag.match(/\d(.*) bag/)
        return {
          count,
          colour: colour ? colour[1].trim() : null,
        }
      })
      .filter((child) => child.count && child.colour)

    return { parent, children }
  })

const bagsNoGold = bags.filter((bag) => bag.parent !== 'shiny gold')
const results = []
let colours = ['shiny gold']
do {
  const parents = bagsNoGold.filter((bag) => bag.children.some((child) => child.colour === colours[0]))
  colours.push(...parents.map((bag) => bag.parent))
  colours = colours.slice(1)
  results.push(...parents.map((bag) => bag.parent))
} while (colours.length)

console.log([...new Set(results)].length)

const countChildren = (colour, currentCount) =>
  currentCount +
  bags
    .find((e) => e.parent === colour)
    .children.reduce((acc, cValue) => acc + countChildren(cValue.colour, currentCount * cValue.count), 0)

console.log(countChildren('shiny gold', 1) - 1)
