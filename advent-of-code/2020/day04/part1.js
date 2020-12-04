const lines = require('fs')
	.readFileSync('input.txt', 'utf-8')
	.split(/\n\s*\n/)

console.log('🚀 ~ file: part1.js ~ line 2 ~ lines', lines.length)

const passports = lines.filter((passport) => {
	return (
		passport.includes('byr:') &&
		passport.includes('iyr:') &&
		passport.includes('eyr:') &&
		passport.includes('hgt:') &&
		passport.includes('hcl:') &&
		passport.includes('ecl:') &&
		passport.includes('pid:')
	)
})

console.log('passports.length', passports.length)
