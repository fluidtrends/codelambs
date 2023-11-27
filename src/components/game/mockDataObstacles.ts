import { ObstacleProps } from "../../utils/interfaces";

export const obstacles1: ObstacleProps[] = [
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

export const obstacles2: ObstacleProps[] = [
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 3, row: 4 },
		image: 'stone 1',
		// background: 'stone-bg'
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 8, row: 1 },
		image: 'stone 2',
		// background: 'stone-bg'
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 3, row: 2 },
		image: 'water',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 5, row: 5 },
		image: 'water',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 9, row: 4 },
		image: 'ground',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 6, row: 2 },
		image: 'ground',
	},
]

export const obstacles3: ObstacleProps[] = [
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 6, row: 1 },
		image: 'stone 1',
		// background: 'stone-bg'
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 2, row: 2 },
		image: 'stone 2',
		// background: 'stone-bg'
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 2, row: 4 },
		image: 'water',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 8, row: 2 },
		image: 'water',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 4, row: 0 },
		image: 'ground',
	},
	{
		isBlocker: true,
		isWalkable: false,
		position: { col: 5, row: 5 },
		image: 'ground',
	},
]

export const allObstacles: Array<ObstacleProps[]> = [obstacles1, obstacles2, obstacles3]