import { CSSProperties } from 'react';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ControlButtonProps, ControlProps, LambBoardGameDetails, LetterProps, StepProps } from "./interfaces"
import { Coordinates } from './types';
import Letter from '../components/navbar/Letter';

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

export const getNextLambDetails = (
	lambDetails: LambBoardGameDetails,
	runningSteps: StepProps[],
): LambBoardGameDetails => {
	if (runningSteps[0].direction !== lambDetails.orientation)
		return { ...lambDetails, orientation: runningSteps[0].direction }

	switch (runningSteps[0].direction) {
		case Coordinates.NORTH: return { ...lambDetails, y: lambDetails.y - 1 }
		case Coordinates.SOUTH: return { ...lambDetails, y: lambDetails.y + 1 }
		case Coordinates.EAST: return { ...lambDetails, x: lambDetails.x + 1 }
		case Coordinates.WEST: return { ...lambDetails, x: lambDetails.x - 1 }
		default: return { x: 0, y: 0, orientation: Coordinates.SOUTH }
	}
}

export const getNextRunningSteps = (runningSteps: StepProps[]): StepProps[] => {
	const { count, direction } = runningSteps[0]
	return runningSteps[0].count > 1
		? [
			{ count: count - 1, direction },
			...runningSteps.slice(1)
		]
		: runningSteps.slice(1)
}

export const moveNextStep = (
	lambDetails: LambBoardGameDetails,
	setLambDetails: (prevState: LambBoardGameDetails) => void,
	runningSteps: StepProps[],
	setRunningSteps: (prevState: StepProps[]) => void,
	setLetterColleted: (row: number, col: number) => void
): void => {
	const nextLambDetails = getNextLambDetails(lambDetails, runningSteps)

	if (runningSteps[0].direction === lambDetails.orientation) {
		setRunningSteps(getNextRunningSteps(runningSteps))
	}
	setLetterColleted(nextLambDetails.y, nextLambDetails.x)
	setLambDetails(nextLambDetails)
}

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