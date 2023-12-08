import { CSSProperties } from 'react';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ControlButtonProps, ControlProps, LambBoardGameDetails, LetterProps, ObstacleProps, StepProps } from "./interfaces"
import { Coordinates, GameStatus, GrassBackground } from './types';
import Letter from '../components/navbar/Letter';
import useRunningStepsStore from '../stores/runnningSteps';
import useWordStore from '../stores/word';
import useLambDetailsStore from '../stores/lambDetails';
import useGameStatusStore from '../stores/gameStatus';
import useStepsStore from '../stores/steps';
import useInputDetailsStore from '../stores/inputDetails';
import useGameIndexStore from '../stores/gameIndex';
import usePlayCounterStore from '../stores/playCounter';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getControls = (
	controlsText: ControlProps[],
	onClick: any,
	moreClasses?: CSSProperties,
	translate?: number
): ControlButtonProps[] =>
	controlsText.map(({ image, text }) => ({
		image,
		onClick: () => onClick(text),
		moreClasses,
		translate
	}))

export const getSheep = (orientation: Coordinates): string =>
	orientation === Coordinates.NORTH
		? '/images/lamb N.png'
		: orientation === Coordinates.SOUTH
			? '/images/lamb S.png'
			: orientation === Coordinates.EAST
				? '/images/lamb E.png'
				: '/images/lamb W.png';

export const willLambBeInBounderies = (
	{ x, y }: LambBoardGameDetails,
	nextOrientation: Coordinates,
	boardRowLength: number,
	boardColLength: number
) => {
	switch (nextOrientation) {
		case Coordinates.NORTH: return y - 1 >= 0
		case Coordinates.SOUTH: return y + 1 < boardColLength
		case Coordinates.EAST: return x + 1 < boardRowLength
		case Coordinates.WEST: return x - 1 >= 0
	}
}

export const shouldLambChangeDirection = (
	lambDetails: LambBoardGameDetails,
	runningSteps: StepProps[],
): boolean => runningSteps[0].direction !== lambDetails.orientation

export const getNextDirectionLamb = (
	lambDetails: LambBoardGameDetails,
	runningSteps: StepProps[],
): LambBoardGameDetails => ({ ...lambDetails, orientation: runningSteps[0].direction })

export const getNextStepLamb = (
	lambDetails: LambBoardGameDetails,
	runningSteps: StepProps[],
): LambBoardGameDetails => {
	switch (runningSteps[0].direction) {
		case Coordinates.NORTH: return { ...lambDetails, y: lambDetails.y - 1 }
		case Coordinates.SOUTH: return { ...lambDetails, y: lambDetails.y + 1 }
		case Coordinates.EAST: return { ...lambDetails, x: lambDetails.x + 1 }
		case Coordinates.WEST: return { ...lambDetails, x: lambDetails.x - 1 }
		default: return { x: 0, y: 0, orientation: Coordinates.SOUTH }
	}
}

const getStepsDecreased = (runningSteps: StepProps[]): StepProps[] => [
	{ ...runningSteps[0], count: runningSteps[0].count - 1, direction: runningSteps[0].direction },
	...runningSteps.slice(1)
]

const getStepsWithChangedDirection = (runningSteps: StepProps[]): StepProps[] => runningSteps.slice(1)

export const getNextRunningSteps = (runningSteps: StepProps[]): StepProps[] =>
	runningSteps[0].count === 1
		? getStepsWithChangedDirection(runningSteps)
		: getStepsDecreased(runningSteps)

export const getLetter = (
	letters: LetterProps[],
	rowIndex: number,
	colIndex: number,
	fontSize: number
): any => {
	const currLetter = letters.find(letter =>
		letter.position.row === rowIndex &&
		letter.position.col === colIndex &&
		letter.collectedIndex === undefined
	)
	if (currLetter) {
		return <Letter {...currLetter} fontSize={fontSize} />
	}
	return null
}

export const getCellBackground = (
	rowIndex: number,
	colIndex: number,
	obstacles: ObstacleProps[]
): string => {
	const start = "url('/images/"
	const end = ".png')"

	const obstacle = obstacles.find(({ position: { col, row } }) => row === rowIndex && col === colIndex)
	const middle = obstacle?.background ?? 'grass ' + ((colIndex + rowIndex) % 2 === 0 ? GrassBackground.DARK : GrassBackground.LIGHT)
	return start + middle + end
}

export const getObstacle = (rowIndex: number, colIndex: number, obstacles: ObstacleProps[]) => {
	const currObstacle = obstacles.find(({ position: { col, row } }) => row === rowIndex && col === colIndex)
	return currObstacle ? '/images/' + currObstacle.image + '.png' : undefined
}

export const resetLevelSettings = () => {
	useStepsStore.getState().resetSteps()
	useInputDetailsStore.getState().resetInputDetails()
	useRunningStepsStore.getState().resetRunningSteps()
	useGameStatusStore.getState().setGameStatus(GameStatus.PENDING)
	useLambDetailsStore.getState().resetLambDetails()
}

export const resetCurrentLevel = () => {
	resetLevelSettings()
	useWordStore.getState().resetWord()
}

export const goToNextLevel = () => {
	resetLevelSettings()
	usePlayCounterStore.getState().resetCounter()
	useGameIndexStore.getState().incrementGameIndex()
}

export const loadAllImages = (images: string[]): void => {
	images.forEach(image => {
		const img = new Image();
		img.src = `images/${image}`;
	})
}

const loadImage = (image: string) =>
	new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => resolve(img)
		img.onerror = () => reject(new Error(`Image failed to load: ${image}`))
		img.src = 'images/' + image
	})

export const loadImages = (images: string[]) => {
	const promises = images.map(image => loadImage(image))
	return Promise.allSettled(promises)
}

export const isLambRunningIntoObstacle = ({ x, y }: LambBoardGameDetails, obstacles: ObstacleProps[]): boolean =>
	!!obstacles.find(({ isBlocker, position }) => isBlocker && position.row === y && position.col === x)