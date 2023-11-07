import Word from "./Word"
import NavButton from "./nav-button"

const Navbar = ({ word }: any) => {
	const buttonsLeft = [
		{
			image: 'button options',
			onClick: (event: any) => { event.preventDefault() }
		},
		{
			image: 'button home',
			onClick: (event: any) => { event.preventDefault() }
		},
		{
			image: 'button replay',
			onClick: (event: any) => { event.preventDefault() }
		},
	]

	const buttonsRight = [
		{
			image: 'button volume',
			onClick: () => { }
		},
		{
			image: 'button volume off',
			onClick: () => { }
		},
		{
			image: 'button menu',
			onClick: () => { }
		},
	]

	const getIconsSection = (buttons: any[]) => (
		<div className="flex justify-between items-center relative w-1/4 z-20">
			{buttons.map((button, index) => <NavButton {...button} key={index} />)}
		</div>
	)

	return (
		<div className='w-full h-[4vw] relative'>
			<img src='/images/upper menu frame.png' className='absolute w-full h-full' />
			<div className='w-full h-full flex justify-between px-[2vw]'>
				{getIconsSection(buttonsLeft)}
				<Word word={word} />
				{getIconsSection(buttonsRight)}
			</div>
		</div>
	)
}

export default Navbar
