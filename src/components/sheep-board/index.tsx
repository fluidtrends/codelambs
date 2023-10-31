const SheepBoard = ({ image, title }: any) => {
	return (
		<div className='h-[14vw] w-[16vw] relative'>
			<img src='/images/lamb board.png' className='absolute w-full h-full' />
			<div className='flex flex-col justify-center items-center relative gap-[1vw] w-full h-full'>
				<div className='text-[2vw] text-primary'>{title}</div>
				<img src={image} className='h-1/2 w-auto' />
			</div>
		</div>
	)
}

export default SheepBoard
