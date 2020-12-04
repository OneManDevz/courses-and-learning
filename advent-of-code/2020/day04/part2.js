const lines = require('fs')
	.readFileSync('input.txt', 'utf-8')
	.split(/\n\s*\n/)

const passports = lines
	.filter((passport) => {
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
	.map((e) => e.split(/\r\n|\s/))

let count = []

passports.forEach((passport) => {
	let validParams = 0

	passport.forEach((parameter) => {
		parameter = parameter.split(':')
		if (parameter[0] == 'byr' && parameter[1] <= 2002 && parameter[1] >= 1920) {
			validParams++
		} else if (parameter[0] == 'iyr' && parameter[1] <= 2020 && parameter[1] >= 2010) {
			validParams++
		} else if (parameter[0] == 'eyr' && parameter[1] <= 2030 && parameter[1] >= 2020) {
			validParams++
		} else if (parameter[0] == 'hgt') {
			let height = parameter[1].split(/([0-9]+)/)
			if (height[2] == 'cm' && height[1] >= 150 && height[1] <= 193) {
				validParams++
			} else if (height[2] == 'in' && height[1] >= 59 && height[1] <= 76) {
				validParams++
			}
		} else if (parameter[0] == 'hcl' && parameter[1].match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) {
			console.log(parameter[1])
			validParams++
		} else if (
			parameter[0] == 'ecl' &&
			(parameter[1] == 'amb' ||
				parameter[1] == 'blu' ||
				parameter[1] == 'brn' ||
				parameter[1] == 'gry' ||
				parameter[1] == 'grn' ||
				parameter[1] == 'hzl' ||
				parameter[1] == 'oth')
		) {
			validParams++
		} else if (parameter[0] == 'pid' && parameter[1].length == 9) {
			validParams++
		}
	})

	if (validParams == 7) {
		count.push(passport)
	}
})

console.log('count', count.length)

console.log('passports.length', passports.length)
