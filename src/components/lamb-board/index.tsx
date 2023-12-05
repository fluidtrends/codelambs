import { squareBoardSize } from "../../utils/constants"

const LambBoard = ({ image, title }: any) => {
	return (
		<div
			className='relative'
			style={{
				width: `${squareBoardSize}vw`,
				height: `${squareBoardSize}vw`
			}}
		>
			<img
				src='/images/lamb board.png'
				className='absolute w-full h-full'
				onContextMenu={event => event.preventDefault()}
			/>
			<div className='flex flex-col justify-center items-center relative gap-[1vw] w-full h-full'>
				<div className='text-[2vw] text-primary'>{title}</div>
				<img
					src={image}
					className='h-1/2 w-auto'
					onContextMenu={event => event.preventDefault()}
				/>
			</div>
		</div>
	)
}

export default LambBoard
