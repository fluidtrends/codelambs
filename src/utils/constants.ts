import { ControlProps } from "./interfaces"
import { Coordinates } from "./types"

export const greenLight = '#00b900'
export const greenDark = '#1c6b00'

export const coords = [
	Coordinates.NORTH,
	Coordinates.EAST,
	Coordinates.SOUTH,
	Coordinates.WEST
]

export const coordinatesInitialAngle = 180
export const coordinateControlSize = 4
export const coordinateControlMargin = - coordinateControlSize / 2

export const numbersInitialAngle = 70
export const numberControlSize = 3.5
export const numberControlMargin = - numberControlSize / 2
export const numberTranslate = 5.5


export const coordinates: ControlProps[] = coords.map((coord) => ({
	image: `/images/button ${coord}.png`,
	text: coord
}))

export const numbers = Array
	.from({ length: 9 }, (_, index) => ({
		image: `/images/button ${index + 1}.png`,
		text: index + 1
	}))
