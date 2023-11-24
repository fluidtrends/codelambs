import useLambDetailsStore from "../../stores/lambDetails"
import useRunningStepsStore from "../../stores/runnningSteps"
import useGameStatusStore from "../../stores/gameStatus"
import useStepsStore from "../../stores/steps"
import useWordStore from "../../stores/word"
import { playButtonSize } from "../../utils/constants"
import { GameStatus } from "../../utils/types"
import usePlayCounterStore from "../../stores/playCounter"
import useInputDetailsStore from "../../stores/inputDetails"

const PlayButton = () => {
	const { setGameStatus, isGameStart } = useGameStatusStore()
	const { isIncomplete } = useInputDetailsStore()
	const { steps } = useStepsStore()
	const { setRunningSteps } = useRunningStepsStore()
	const { resetLambDetails } = useLambDetailsStore()
	const { resetWord } = useWordStore()
	const { incrementCounter } = usePlayCounterStore()

	const handleOnClickStart = () => {
		if (isGameStart() || isIncomplete()) return;
		setRunningSteps(steps)
		resetLambDetails()
		resetWord()
		incrementCounter()
		setGameStatus(GameStatus.START)
	}

	return (
		<img
			src={isGameStart() ? '/images/button play active.png' : '/images/button play.png'}
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
