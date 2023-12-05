import { cn } from "../../utils/helper"
import { ControlButtonProps } from "../../utils/interfaces"

const Button = ({ image, moreClasses, onClick }: ControlButtonProps) => {
	return (
		<img

			className={cn(
				'absolute top-1/2 left-1/2 w-[3vw] h-[3vw] -m-[1.5vw] hover:cursor-pointer',
				moreClasses)}
			onContextMenu={event => event.preventDefault()}
			onClick={onClick}
			src={image}
			style={moreClasses}
		/>
	)
}

export default Button
