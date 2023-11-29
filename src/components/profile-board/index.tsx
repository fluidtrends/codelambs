import { squareBoardSize } from "../../utils/constants"

const ProfileBoard = ({ image, name }: any) => {
	return (
		<div
			className='relative'
			style={{
				width: `${squareBoardSize}vw`,
				height: `${squareBoardSize}vw`
			}}
		>
			<img
				rel='preload'
				src='/images/lamb board.png'
				className='absolute w-full h-full'
				onContextMenu={event => event.preventDefault()}
			/>
			<div className='flex flex-col justify-center items-center w-full h-full relative'>
				<img rel='preload' src={image} className='h-auto w-1/2' />
				<div className='text-[2vw] text-primary'>{name}</div>
			</div>
		</div>
	)
}

export default ProfileBoard
