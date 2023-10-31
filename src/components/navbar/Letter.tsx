import { LetterProps } from "../../utils/interfaces"

const Letter = ({ letter, color }: LetterProps) => {
	return (
		<div className={`text-[2.5vw] text-[${color}]`}>
			{letter}
		</div>
	)
}

export default Letter
