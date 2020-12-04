let totalFuel = 0

require('fs')
	.readFileSync('puzzle-input.txt', 'utf-8')
	.split(/\r?\n/)
	.map(Number)
	.forEach((mass) => {
		let tempFloor = Math.floor(mass / 3) - 2

		while (Math.floor(tempFloor / 3) >= 0) {
			if (Math.floor(tempFloor / 3) == 0) {
				totalFuel += tempFloor
				break
			}

			totalFuel += tempFloor
			tempFloor = Math.floor(tempFloor / 3) - 2
		}
	})

console.log(totalFuel)
