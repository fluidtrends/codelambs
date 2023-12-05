interface LambStarsProps {
	stars: number
}

const LambStars = ({ stars }: LambStarsProps) => {
	return (
		<div className='flex flex-col'>
			<img src={`images/stars level ${stars ?? 0}.png`} className='w-[20vw]' />
			<img src='images/lamb S.png' className='w-[20vw]' />
		</div>
	)
}

export default LambStars
