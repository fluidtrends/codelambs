import { LetterProps } from "../../utils/interfaces"

export const word1: LetterProps[] = [
	{
		id: '1',
		color: '#5ed1ff',
		text: 'C',
		position: { row: 3, col: 7 },
	},
	{
		id: '2',
		color: '#ff5ef4',
		text: 'A',
		position: { row: 3, col: 8 },
	},
	{
		id: '3',
		color: '#fffa5e',
		text: 'T',
		position: { row: 3, col: 9 },
	}
]

export const word2: LetterProps[] = [
	{
		id: '1',
		color: '#5ed1ff',
		text: 'T',
		position: { row: 4, col: 1 },
	},
	{
		id: '2',
		color: '#ff5ef4',
		text: 'O',
		position: { row: 1, col: 4 },
	},
	{
		id: '3',
		color: '#fffa5e',
		text: 'M',
		position: { row: 3, col: 8 },
	},
]

export const word3: LetterProps[] = [
	{
		id: '1',
		color: '#5ed1ff',
		text: 'H',
		position: { row: 0, col: 2 },
	},
	{
		id: '2',
		color: '#4dfa02',
		text: 'O',
		position: { row: 2, col: 5 },
	},
	{
		id: '3',
		color: '#fffa5e',
		text: 'U',
		position: { row: 2, col: 10 },
	},
	{
		id: '4',
		color: '#ff5ef4',
		text: 'S',
		position: { row: 5, col: 6 },
	},

	{
		id: '4',
		color: '#4fff9e',
		text: 'E',
		position: { row: 4, col: 1 },
	},
]

export const allWords: Array<LetterProps[]> = [word1, word2, word3]