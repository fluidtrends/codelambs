import { useEffect } from 'react'
import { useOrientation } from '@uidotdev/usehooks'
import Board from "../board"
import { board } from "../board/mockData"
import Navbar from "../navbar"
import ProfileBoard from "../profile-board"
import LambBoard from "../lamb-board"
import StepsBoard from "../steps-board"
import { getNextStepLamb, getNextRunningSteps, willLambBeInBounderies, shouldLambChangeDirection, getNextDirectionLamb } from '../../utils/helper'
import PlayButton from '../play-button'
import CoordinatesControls from '../controls/coordinates-controls'
import NumberControls from '../controls/number-controls'
import useLambDetailsStore from '../../stores/lambDetails'
import useInputDetailsStore from '../../stores/inputDetails'
import useStepsStore from '../../stores/steps'
import useGameStatusStore from '../../stores/gameStatus'
import useWordStore from '../../stores/word'
import useRunningStepsStore from '../../stores/runnningSteps'
import useObstaclesStore from '../../stores/obstacles'
import { LambBoardGameDetails } from '../../utils/interfaces'
import { GameStatus } from '../../utils/types'
import ModalOrientation from '../modal-orientation/ModalOrientation'
// import ModalWin from '../modal-win'
// import ModalOver from '../modal-over'

const Game = () => {
	const phoneOrientation = useOrientation();

	const { gameStatus, setGameStatus } = useGameStatusStore()
	const { isLambRunningIntoObstacle } = useObstaclesStore()
	const { setNewStep } = useStepsStore()
	const { word, setLetterCollected, areAllLettersCollected, areLettersCollectedInRightOrder } = useWordStore()
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

	const isGameOver = (nextLambDetails?: LambBoardGameDetails): boolean =>
		!runningSteps.length ||
		!word.length ||
		!willLambBeInBounderies(lambDetails, runningSteps[0].direction, board[0].length, board.length) ||
		areAllLettersCollected() ||
		(nextLambDetails ? isLambRunningIntoObstacle(nextLambDetails) : false)

	const handleGameOver = () => {
		setGameStatus(GameStatus.OVER)
	}

	const handleGameWin = () => {
		setGameStatus(GameStatus.WON)
	}

	useEffect(() => {
		if (gameStatus !== GameStatus.START) return;

		if (runningSteps.length && shouldLambChangeDirection(lambDetails, runningSteps)) {
			setTimeout(() => {
				const nextLambDetails = getNextDirectionLamb(lambDetails, runningSteps)
				setLambDetails(nextLambDetails)
			}, 400)
			return;
		} else if (areLettersCollectedInRightOrder()) {
			handleGameWin()
			return;
		} else if (isGameOver()) {

			handleGameOver()
			return;
		}

		setTimeout(() => {
			const nextLambDetails = getNextStepLamb(lambDetails, runningSteps)

			if (isGameOver(nextLambDetails)) {
				handleGameOver()
				return;
			}

			setRunningSteps(getNextRunningSteps(runningSteps))
			setLetterCollected(nextLambDetails.y, nextLambDetails.x)
			setLambDetails(nextLambDetails)
		}, 400)
	}, [lambDetails, runningSteps])

	return (
		<div className='w-full h-full'>
			{/* {isGamePending() || isGameStart() */}
			{/* ?  */}
			{phoneOrientation.angle !== 0
				? <div className="w-full h-full p-[1vw] flex justify-around items-center gap-[2vw]">
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
				: <ModalOrientation />
			}

			{/* : (isGameWon() ? <ModalWin /> : <ModalOver />)} */}
			{/* FIX ME: change to modalover if not won*/}
		</div>
	)
}

export default Game
