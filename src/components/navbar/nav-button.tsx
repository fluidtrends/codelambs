import { cn } from "../../utils/helper"

const NavButton = ({ image, onClick, moreClasses }: any) => {
	return (
		<img
			className={cn('w-[2.5vw] h-[2.5vw] hover:cursor-pointer text-secondary', moreClasses ?? '')}
			src={`/images/${image}.png`}
			onClick={onClick}
		/>
	)
}

export default NavButton
