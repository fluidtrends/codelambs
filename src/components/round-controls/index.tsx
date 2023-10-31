import { useState } from 'react'
import { ControlButtonProps } from "../../utils/interfaces"
import Button from "./Button"

interface RoundControlsProps {
	buttons: ControlButtonProps[]
	initialAngle: number
	controlImage: string
	controlAlternativeImage?: string
}

const RoundControls = ({ controlImage, controlAlternativeImage, buttons, initialAngle }: RoundControlsProps) => {

	const [showButtons, setShowButtons] = useState(true)

	const getButtonsClasses = () => {
		let angle = initialAngle
		let dangle = 360 / buttons.length

		return buttons.map(button => {
			angle += dangle
			return {
				...button,
				moreClasses: {
					...button?.moreClasses,
					transform: `rotate(${angle}deg) translate(5vw) rotate(-${angle}deg)`
				}
			}
		})
	}

	const getButtons = () => getButtonsClasses().map((button, index) => <Button {...button} key={index} />)

	return (
		<div className='w-[10vw] h-[10vw] m-[1vw] relative flex justify-center items-center'>
			<img
				src={showButtons ? controlImage : (controlAlternativeImage ?? controlImage)}
				className='w-[6vw] h-[6hw] hover:cursor-pointer'
				onClick={() => setShowButtons(prev => !prev)}
			/>
			{showButtons && getButtons()}
		</div>
	)
}

export default RoundControls
