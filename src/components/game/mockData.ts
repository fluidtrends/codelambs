import { LetterProps, ObstacleProps } from "../../utils/interfaces";

export const word: LetterProps[] = [
	{
		id: '1',
		color: '#5ed1ff',
		text: 'C',
		position: { row: 2, col: 1 },
	},
	{
		id: '2',
		color: '#ff5ef4',
		text: 'A',
		position: { row: 3, col: 7 },
	},
	{
		id: '3',
		color: '#fffa5e',
		text: 'T',
		position: { row: 0, col: 8 },
	},
	{
		id: '4',
		color: '#4dfa02',
		text: 'S',
		position: { row: 0, col: 6 },
	},
]

export const obstacles: ObstacleProps[] = [
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 3, row: 2 },
		image: 'stone 1',
		// background: 'stone-bg'
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 10, row: 3 },
		image: 'stone 2',
		// background: 'stone-bg'
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 7, row: 0 },
		image: 'water',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 7, row: 5 },
		image: 'water',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 1, row: 5 },
		image: 'ground',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 6, row: 2 },
		image: 'ground',
	},
]