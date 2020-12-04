console.log(
	require('fs')
		.readFileSync('input.txt', 'utf-8')
		.split(/\n\s*\n/)
		.filter(
			(passport) =>
				passport.includes('byr:') &&
				passport.includes('iyr:') &&
				passport.includes('eyr:') &&
				passport.includes('hgt:') &&
				passport.includes('hcl:') &&
				passport.includes('ecl:') &&
				passport.includes('pid:')
		).length
)
