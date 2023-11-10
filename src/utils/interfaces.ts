import { CSSProperties } from "react"
import { Coordinates } from "./types"

export interface Position {
	row: number
	col: number
}

export interface ObstacleProps {
	position: Position
	image: string
	background?: string
	isWalkable: boolean
	isBlocker: boolean
}

export interface LetterProps {
	color: string
	text: string
	position: Position
	id: string
	collectedIndex?: number
}

export interface StepProps {
	direction: Coordinates
	count: number
	id?: string
}

export interface ControlProps {
	image: string
	text: string | number
}

export interface ControlButtonProps {
	image: string
	moreClasses?: CSSProperties
	onClick: () => void
	translate?: number
}

export interface LambBoardGameDetails {
	x: number
	y: number
	orientation: Coordinates
}