import { playButtonSize } from "../../utils/constants"

const PlayButton = ({ start, onClickStart }: any) => {
	return (
		<img
			src={start ? '/images/button play active.png' : '/images/button play.png'}
			className='-mt-[1.3vw] hover:cursor-pointer z-30'
			style={{
				width: `${playButtonSize}vw`,
				height: `${playButtonSize}vw`
			}}
			onClick={onClickStart}
		/>
	)
}

export default PlayButton
