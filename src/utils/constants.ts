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

export const coordinates: ControlProps[] = coords.map((coord) => ({
	image: `/images/button ${coord}.png`,
	text: coord
}))

export const numbers = Array
	.from({ length: 9 }, (_, index) => ({
		image: `/images/button ${index + 1}.png`,
		text: index + 1
	}))
