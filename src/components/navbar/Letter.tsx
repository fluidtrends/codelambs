import { LetterProps as ILetter } from "../../utils/interfaces"

interface LetterProps extends ILetter {
	isInNavbar?: boolean
	fontSize?: number
}

const Letter = ({ text, color, isInNavbar = false, fontSize }: LetterProps) => {

	return (
		<div
			style={{
				color,
				fontSize: fontSize ? `${fontSize}px` : '2.6vw',
				WebkitTextStroke: isInNavbar ? '2px black' : undefined,
				textShadow: isInNavbar ? '-1px 0 black, 2px 2px black, 2px 2px black, 0 -1px black' : undefined
			}}>
			{text}
		</div >
	)
}

export default Letter
