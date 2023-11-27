import { navActionSize } from "../../utils/constants"
import { cn } from "../../utils/helper"

const NavButton = ({ image, onClick, moreClasses }: any) => {
	return (
		<img
			className={cn(`w-[${navActionSize}vw] h-[${navActionSize}vw] hover:cursor-pointer text-secondary -translate-y-[0.2vw]`, moreClasses ?? '')}
			src={`/images/${image}`}
			onClick={onClick}
			onContextMenu={event => event.preventDefault()}
		/>
	)
}

export default NavButton
