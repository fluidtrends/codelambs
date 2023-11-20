import { useState, CSSProperties } from 'react'
import { ControlButtonProps } from "../../utils/interfaces"
import Button from "./Button"

interface RoundControlsProps {
	buttons: ControlButtonProps[]
	initialAngle: number
	controlImage: string
	controlAlternativeImage?: string
	style?: CSSProperties
}

const RoundControls = ({ controlImage, controlAlternativeImage, buttons, initialAngle, style }: RoundControlsProps) => {

	const [showButtons, setShowButtons] = useState(true)

	const getButtonsClasses = () => {
		let angle = initialAngle
		let dangle = 360 / buttons.length

		return buttons.map(button => {
			angle += dangle
			return {
				...button,
				moreClasses: {
					transform: `rotate(${angle}deg) translate(${button?.translate ?? 5}vw) rotate(-${angle}deg)`,
					...button?.moreClasses,
				}
			}
		})
	}

	const getButtons = () => getButtonsClasses().map((button, index) => <Button {...button} key={index} />)

	return (
		<div className='w-[15vw] h-[15vw] mx-[1vw] relative flex justify-center items-center'
			style={style}>
			<img
				src={showButtons ? controlImage : (controlAlternativeImage ?? controlImage)}
				className='w-[7vw] h-[7hw] hover:cursor-pointer'
				onClick={() => setShowButtons(prev => !prev)}
				onContextMenu={event => event.preventDefault()}
			/>
			{showButtons && getButtons()}
		</div>
	)
}

export default RoundControls
