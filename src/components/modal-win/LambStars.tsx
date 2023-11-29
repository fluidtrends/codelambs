interface LambStarsProps {
	stars: number
}

const LambStars = ({ stars }: LambStarsProps) => {
	return (
		<div className='flex flex-col'>
			<img rel='preload' src={`images/stars level ${stars ?? 0}.png`} className='w-[20vw]' />
			<img rel='preload' src='images/lamb S.png' className='w-[20vw]' />
		</div>
	)
}

export default LambStars
