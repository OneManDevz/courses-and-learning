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
    )
    .map((e) => e.split(/\r\n|\s/))
    .filter((passport) => {
      let validParams = 0

      passport.map((parameter) => {
        parameter = parameter.split(':')
        let height = parameter[0] == 'hgt' ? parameter[1].split(/([0-9]+)/) : ''
        if (
          (parameter[0] == 'byr' && parameter[1] <= 2002 && parameter[1] >= 1920) ||
          (parameter[0] == 'iyr' && parameter[1] <= 2020 && parameter[1] >= 2010) ||
          (parameter[0] == 'eyr' && parameter[1] <= 2030 && parameter[1] >= 2020) ||
          (parameter[0] == 'hcl' && parameter[1].match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) ||
          (parameter[0] == 'pid' && parameter[1].length == 9) ||
          (parameter[0] == 'ecl' &&
            (parameter[1] == 'amb' ||
              parameter[1] == 'blu' ||
              parameter[1] == 'brn' ||
              parameter[1] == 'gry' ||
              parameter[1] == 'grn' ||
              parameter[1] == 'hzl' ||
              parameter[1] == 'oth')) ||
          (parameter[0] == 'hgt' &&
            ((height[2] == 'cm' && height[1] >= 150 && height[1] <= 193) ||
              (height[2] == 'in' && height[1] >= 59 && height[1] <= 76)))
        ) {
          validParams++
        }
      })

      if (validParams == 7) {
        return passport
      }
    }).length
)
