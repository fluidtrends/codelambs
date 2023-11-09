import useLambDetailsStore from "../../stores/lambDetails"
import useRunningStepsStore from "../../stores/runnningSteps"
import useStartStore from "../../stores/start"
import useStepsStore from "../../stores/steps"
import useWordStore from "../../stores/word"
import { playButtonSize } from "../../utils/constants"

const PlayButton = () => {
	const { start, setStart } = useStartStore()
	const { steps } = useStepsStore()
	const { setRunningSteps } = useRunningStepsStore()
	const { resetLambDetails } = useLambDetailsStore()
	const { resetWord } = useWordStore()

	const handleOnClickStart = () => {
		if (start) return;
		setRunningSteps(steps)
		resetLambDetails()
		resetWord()
		setStart(!start)
	}

	return (
		<img
			src={start ? '/images/button play active.png' : '/images/button play.png'}
			className='-mt-[1.3vw] hover:cursor-pointer z-30'
			style={{
				width: `${playButtonSize}vw`,
				height: `${playButtonSize}vw`
			}}
			onClick={() => handleOnClickStart()}
			onContextMenu={event => event.preventDefault()}
		/>
	)
}

export default PlayButton
