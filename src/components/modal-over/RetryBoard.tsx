const RetryBoard = () => {
	return (
		<div className='w-[50vw] h-[80vh]'>
			<div className='w-full h-full flex flex-col items-center justify-center'
				style={{
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundImage: "url('images/board-horizontal.png')"
				}}>
				<img rel='preload' src='images/retry text.png' className='w-10/12' />
				<img rel='preload' src='images/sad lamb.png' className='h-1/2 aspect-auto' />
			</div>
		</div>
	)
}

export default RetryBoard
