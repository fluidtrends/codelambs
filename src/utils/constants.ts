import { ControlProps } from "./interfaces"
import { Coordinates } from "./types"

export const greenLight = '#00b900'
export const greenDark = '#1c6b00'
export const gray = '#b5b5b5'

export const coords = [
	Coordinates.NORTH,
	Coordinates.EAST,
	Coordinates.SOUTH,
	Coordinates.WEST
]

export const coordinatesInitialAngle = 180
export const coordinateControlSize = 6.5
export const coordinateControlMargin = - coordinateControlSize / 2
export const coodinateTranslate = 5.5

export const numbersInitialAngle = 70
export const numberControlSize = 4.5
export const numberControlMargin = - numberControlSize / 2
export const numberTranslate = 7

export const playButtonSize = 6
export const squareBoardSize = 14

export const navActionSize = 3

export const actionButtonWonModal = 7

export const coordinates: ControlProps[] = coords.map((coord) => ({
	image: `/images/button ${coord}.png`,
	text: coord
}))

export const numbers = Array.from({ length: 9 }, (_, index) => ({
	image: `/images/button ${index + 1}.png`,
	text: index + 1
}))

export const images = [
	'all flowers.png',
	'assembled playing field.png',
	'background.png',
	'background-dark.png',
	'board nr tries.png',
	'board-bg-light.png',
	'button-board next.svg',
	'button-board retry.svg',
	'board-horizontal.png',
	'button 1-9.png',
	'button 1.png',
	'button 2.png',
	'button 3.png',
	'button 4.png',
	'button 5.png',
	'button 6.png',
	'button 7.png',
	'button 8.png',
	'button 9.png',
	'button compass active.png',
	'button compass.png',
	'button E.png',
	'button W.png',
	'button N.png',
	'button S.png',
	'button home.png',
	'button menu.png',
	'button options.png',
	'button play active.png',
	'button play.png',
	'button replay.png',
	'button volume off.png',
	'button volume.png',
	'button-board home.png',
	'button-board replay.png',
	'code editor board.png',
	'code editor selection frame.png',
	'flower 1.png',
	'flower 2.png',
	'flower 3.png',
	'flower 4.png',
	'flower 5.png',
	'flower 6.png',
	'flower 7.png',
	'flower 8.png',
	'flower 9.png',
	'grass dark.png',
	'grass light.png',
	'ground.png',
	'lamb board.png',
	'lamb E.png',
	'lamb W.png',
	'lamb S.png',
	'lamb N.png',
	'layer under the grass squares.png',
	'letter C.png',
	'letter A.png',
	'letter T.png',
	'playing field frame.png',
	'rays of light.png',
	'retry text.png',
	'sad lamb.png',
	'stars level 0.png',
	'stars level 1.png',
	'stars level 2.png',
	'stars level 3.png',
	'stone 1.png',
	'stone 2.png',
	'stone-bg.png',
	'upper frame for the word.png',
	'upper menu frame.png',
	'user photo example.png',
	'water.png'
]