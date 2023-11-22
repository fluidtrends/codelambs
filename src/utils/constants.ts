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
export const coordinateControlSize = 5
export const coordinateControlMargin = - coordinateControlSize / 2
export const coodinateTranslate = 5.75

export const numbersInitialAngle = 70
export const numberControlSize = 4.5
export const numberControlMargin = - numberControlSize / 2
export const numberTranslate = 7

export const playButtonSize = 4
export const squareBoardSize = 14

export const actionButtonWonModal = 7

export const coordinates: ControlProps[] = coords.map((coord) => ({
	image: `/images/button ${coord}.png`,
	text: coord
}))

export const numbers = Array.from({ length: 9 }, (_, index) => ({
	image: `/images/button ${index + 1}.png`,
	text: index + 1
}))
