import { navActionSize } from "../../utils/constants"
import { NavButtonProps } from "../../utils/interfaces"

const NavButton = ({ image, onClick, moreClasses }: NavButtonProps) => {
	return (
		<img
			className={`w-[${navActionSize}vw] h-[${navActionSize}vw] hover:cursor-pointer text-secondary -translate-y-[0.2vw]`}
			style={moreClasses}
			src={`/images/${image}`}
			onClick={onClick}
			onContextMenu={event => event.preventDefault()}
		/>
	)
}

export default NavButton
