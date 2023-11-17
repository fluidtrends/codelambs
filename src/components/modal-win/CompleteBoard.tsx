const CompleteBoard = ({ score, name }: any) => {
	return (
		<div
			className='relative w-[40vw] h-[75vh] tracking-[0.2em]'
		>
			<img src='' className='absolute' />
			<img src='images/lamb board.png' className='absolute w-full h-full ' />
			<div className="w-full h-full flex flex-col items-center justify-between relative z-10 py-[3vw] px-[1vw]">
				<div className='flex flex-col justify-center items-center w-full'>
					<div className='font-turds text-white text-[4vw] font-bold tracking-[0.2em]'>Level</div>
					<div className='font-turds text-white text-[4vw] font-bold tracking-[0.2em]'>Complete</div>
				</div>
				<div className='text-primary text-[5vw]'>Score: {score}</div>
				<div className='flex flex-col items-center'>
					<div className='text-primary text-[2.5vw] -mb-[1vw]'>Great job {name}!</div>
					<div className='text-primary text-[5vw]'>You did it!</div>
				</div>
			</div>
		</div>
	)
}

export default CompleteBoard
