const PlayButton = ({ start, onClickStart }: any) => {
	return (
		<img
			src={start ? '/images/button play active.png' : '/images/button play.png'}
			className='w-[8vw] h-[8vw] hover:cursor-pointer'
			onClick={onClickStart}
		/>
	)
}

export default PlayButton
