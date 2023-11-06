const ProfileBoard = ({ image, name }: any) => {
	return (
		<div className='h-[14vw] w-[16vw] relative'>
			<img src='/images/lamb board.png' className='absolute w-full h-full' />
			<div className='flex flex-col justify-center items-center w-full h-full relative'>
				<img src={image} className='h-auto w-1/2' />
				<div className='text-[2vw] text-primary'>{name}</div>
			</div>
		</div>
	)
}

export default ProfileBoard
