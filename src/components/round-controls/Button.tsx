import { cn } from "../../utils/helper"
import { ControlButtonProps } from "../../utils/interfaces"

const Button = ({ image, moreClasses, onClick, isRoundControl }: ControlButtonProps) => {
	return (
		<img
			className={cn('w-[3vw] h-[3vw] hover:cursor-pointer', isRoundControl ? 'absolute top-1/2 left-1/2 -m-[1.5vw]' : '')}
			onContextMenu={event => event.preventDefault()}
			onClick={onClick}
			src={image}
			style={moreClasses}
		/>
	)
}

export default Button
