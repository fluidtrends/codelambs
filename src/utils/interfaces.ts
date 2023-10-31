import { CSSProperties } from "react"
import { Coordinates } from "./types"

export interface LetterProps {
	color: string
	letter: string
}

export interface StepProps {
	direction: Coordinates
	count: number
}

export interface ControlProps {
	image: string
	text: string | number
}

export interface ControlButtonProps {
	image: string
	moreClasses?: CSSProperties
	onClick: () => void
}