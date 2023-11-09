import { useEffect } from 'react'
import Board from "../board"
import { board } from "../board/mockData"
import Navbar from "../navbar"
import ProfileBoard from "../profile-board"
import LambBoard from "../lamb-board"
import StepsBoard from "../steps-board"
import { moveNextStep, willLambBeInBounderies } from '../../utils/helper'
import PlayButton from '../play-button'
import CoordinatesControls from '../controls/coordinates-controls'
import NumberControls from '../controls/number-controls'
import useLambDetailsStore from '../../stores/lambDetails'
import useInputDetailsStore from '../../stores/inputDetails'
import useStepsStore from '../../stores/steps'
import useStartStore from '../../stores/start'
import useWordStore from '../../stores/word'
import useRunningStepsStore from '../../stores/runnningSteps'

const Game = () => {
	const { start, setStart } = useStartStore()
	const { setNewStep } = useStepsStore()
	const { word, setLetterCollected } = useWordStore()
	const { runningSteps, setRunningSteps } = useRunningStepsStore()
	const { number, coordinate, resetInputDetails } = useInputDetailsStore()

	const { x, y, orientation, setLambDetails } = useLambDetailsStore()
	const lambDetails = { x, y, orientation }

	useEffect(() => {
		if (number && coordinate) {
			setNewStep(number, coordinate)
			resetInputDetails()
		}
	}, [number, coordinate])

	useEffect(() => {
		if (start &&
			(
				!word.length ||
				!runningSteps.length ||
				!willLambBeInBounderies(lambDetails, runningSteps[0].direction, board[0].length, board.length)
			)
		) {
			setStart(false)
			return;
		}
		if (start) {
			setTimeout(() => {
				moveNextStep(
					lambDetails,
					setLambDetails,
					runningSteps,
					setRunningSteps,
					setLetterCollected
				)
			}, 400)
		}
	}, [lambDetails, runningSteps])

	return (
		<div className="w-full h-full p-[1vw] flex justify-around items-center gap-[2vw]">
			<div className="h-full flex flex-col justify-center items-center">
				<StepsBoard />
				<CoordinatesControls />
			</div>
			<div className='h-full w-full flex flex-col items-center'>
				<Navbar />
				<PlayButton />
				<Board board={board} />
			</div>
			<div className='h-full flex flex-col items-center justify-between'>
				<ProfileBoard image='/images/user photo example.png' name='DaViD' />
				<LambBoard image='/images/lamb S.png' title='25 XP LEV.1' />
				<NumberControls />
			</div>
		</div>
	)
}

export default Game
