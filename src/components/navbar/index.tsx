import { resetCurrentLevel } from "../../utils/helper"
import Word from "./Word"
import NavButton from "./nav-button"

const Navbar = () => {
	const buttonsLeft = [
		{
			image: 'button options.png',
			onClick: () => { }
		},
		{
			image: 'button home.png',
			onClick: () => { }
		},
		{
			image: 'button replay.png',
			onClick: () => resetCurrentLevel()
		},
	]

	const buttonsRight = [
		{
			image: 'button volume.png',
			onClick: () => { }
		},
		{
			image: 'button volume off.png',
			onClick: () => { }
		},
		{
			image: 'button menu.png',
			onClick: () => { }
		},
	]

	const getIconsSection = (buttons: any[]) => (
		<div className="flex justify-between items-center relative w-1/4 z-20">
			{buttons.map((button, index) => <NavButton {...button} key={index} />)}
		</div>
	)

	return (
		<div className='w-full h-[10vh] relative'>
			<img
				src='/images/upper menu frame.png'
				className='absolute w-full h-full'
				onContextMenu={event => event.preventDefault()}
			/>
			<div className='w-full h-full flex justify-between px-[2vw]'>
				{getIconsSection(buttonsLeft)}
				<Word isInNavbar />
				{getIconsSection(buttonsRight)}
			</div>
		</div>
	)
}

export default Navbar
