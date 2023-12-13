import { useEffect } from 'react'
import { isDesktop } from 'react-device-detect'
import { useOrientation } from '@uidotdev/usehooks'
import Board from "../board"
import { board } from "../board/mockData"
import Navbar from "../navbar"
import ProfileBoard from "../profile-board"
import LambBoard from "../lamb-board"
import StepsBoard from "../steps-board"
import { getNextStepLamb, getNextRunningSteps, willLambBeInBounderies, shouldLambChangeDirection, getNextDirectionLamb, isLambRunningIntoObstacle } from '../../utils/helper'
import PlayButton from '../play-button'
import CoordinatesControls from '../controls/coordinates-controls'
import NumberControls from '../controls/number-controls'
import useLambDetailsStore from '../../stores/lambDetails'
import useInputDetailsStore from '../../stores/inputDetails'
import useStepsStore from '../../stores/steps'
import useGameStatusStore from '../../stores/gameStatus'
import useWordStore from '../../stores/word'
import useRunningStepsStore from '../../stores/runnningSteps'
import { LambBoardGameDetails } from '../../utils/interfaces'
import { GameStatus } from '../../utils/types'
import ModalOrientation from '../modal-orientation/ModalOrientation'
import ModalWin from '../modal-win'
import useGameIndexStore from '../../stores/gameIndex'
import { GetObstacles, GetWord } from '../../hooks/query'

const Game = () => {
	const phoneOrientation = useOrientation();

	const { gameStatus, setGameStatus, isGamePending, isGameStart, isGameWon, isGameOver } = useGameStatusStore()
	const { setNewStep } = useStepsStore()
	const { word, setNewWord, setLetterCollected, areAllLettersCollected, areLettersCollectedInRightOrder } = useWordStore()
	const { runningSteps, setRunningSteps } = useRunningStepsStore()
	const { number, coordinate, resetInputDetails } = useInputDetailsStore()
	const { index } = useGameIndexStore()

	const { data: obstacles } = GetObstacles(index)
	const { data: fetchedWord, isSuccess: isSuccessWord } = GetWord(index)

	const { x, y, orientation, setLambDetails } = useLambDetailsStore()
	const lambDetails = { x, y, orientation }

	useEffect(() => {
		if (isSuccessWord) {
			setNewWord(fetchedWord)
		}
	}, [index, isSuccessWord])

	useEffect(() => {
		if (number && coordinate) {
			setNewStep(number, coordinate)
			resetInputDetails()
		}
	}, [number, coordinate])

	const isGameFinished = (nextLambDetails?: LambBoardGameDetails): boolean =>
		!runningSteps.length ||
		!word.length ||
		!willLambBeInBounderies(lambDetails, runningSteps[0].direction, board[0].length, board.length) ||
		areAllLettersCollected() ||
		(nextLambDetails ? isLambRunningIntoObstacle(nextLambDetails, obstacles) : false)

	const handleGameOver = () => {
		setGameStatus(GameStatus.OVER)
	}

	const handleGameWin = () => {
		setGameStatus(GameStatus.WON)
	}

	useEffect(() => {
		setTimeout(() => {
			if (gameStatus !== GameStatus.START) return;
			if (runningSteps.length && shouldLambChangeDirection(lambDetails, runningSteps)) {
				const nextLambDetails = getNextDirectionLamb(lambDetails, runningSteps)
				setLambDetails(nextLambDetails)
				return;
			} else if (areLettersCollectedInRightOrder()) {
				handleGameWin()
				return;
			} else if (isGameFinished()) {
				handleGameOver()
				return;
			}

			const nextLambDetails = getNextStepLamb(lambDetails, runningSteps)

			if (isGameFinished(nextLambDetails)) {
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
			{isGamePending() || isGameStart() || isGameOver()
				?
				(phoneOrientation.angle !== 0 || isDesktop
					? <div className="w-full h-full p-[1vw] flex justify-around items-center gap-[2vw]">
						<div className="h-full flex flex-col justify-center items-center">
							<StepsBoard />
							<CoordinatesControls />
						</div>
						<div className='h-full w-full flex flex-col items-center'>
							<Navbar />
							<Board board={board} />
							<PlayButton />
						</div>
						<div className='h-full flex flex-col items-center justify-between'>
							<ProfileBoard image='/images/user photo example.png' name='DaViD' />
							<LambBoard image='/images/lamb S.png' title='25 XP LEV.1' />
							<NumberControls />
						</div>
					</div>
					: <ModalOrientation />
				)
				: (isGameWon() && <ModalWin />)}
		</div>
	)
}

export default Game
