import { useEffect } from 'react'
import { isDesktop } from 'react-device-detect'
import { useOrientation } from '@uidotdev/usehooks'
import Board from "../board"
import Navbar from "../navbar"
import ProfileBoard from "../profile-board"
import LambBoard from "../lamb-board"
import StepsBoard from "../steps-board"
import { getNextStepLamb, getNextRunningSteps, willLambBeInBounderies, shouldLambChangeDirection, getNextDirectionLamb, isLambRunningIntoObstacle, getBoard } from '../../utils/helper'
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
import { GetBoardDimensions, GetLambPosition, GetObstacles, GetWord } from '../../hooks/query'
import { motion } from 'framer-motion'
import { popupVariant } from '../../utils/variants'
import Loading from '../loading'
import { useElementSize } from 'usehooks-ts'

const Game = () => {
	const phoneOrientation = useOrientation()

	const { gameStatus, setGameStatus, isGameWon } = useGameStatusStore()
	const { setNewStep } = useStepsStore()
	const { word, setNewWord, setLetterCollected, areAllLettersCollected, areLettersCollectedInRightOrder } = useWordStore()
	const { runningSteps, setRunningSteps } = useRunningStepsStore()
	const { number, coordinate, resetInputDetails } = useInputDetailsStore()
	const { index } = useGameIndexStore()

	const { data: obstacles, isLoading: isLoadingObstacles } = GetObstacles(index)
	const { data: fetchedWord, isSuccess: isSuccessWord, isLoading: isLoadingWord } = GetWord(index)
	const { data: lambPosition, isSuccess: isSuccessLambPosition, isLoading: isLoadingLambPosition } = GetLambPosition(index)

	const { data: boardDimensions, isLoading: isLoadingBoardDimensions } = GetBoardDimensions(index)
	const board = getBoard(boardDimensions?.rows ?? 0, boardDimensions?.cols ?? 0)

	const { x, y, orientation, setLambDetails, setLambInitialDetails } = useLambDetailsStore()
	const lambDetails = { x, y, orientation }

	const [ref, { width: boardMaxWidth }] = useElementSize()

	useEffect(() => {
		if (isSuccessWord) {
			setNewWord(fetchedWord)
		}
	}, [index, isSuccessWord])

	useEffect(() => {
		if (isSuccessLambPosition) {
			const { x, y } = lambPosition
			setLambInitialDetails(x, y)
		}
	}, [index, isSuccessLambPosition])

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

	if (isLoadingObstacles || isLoadingWord || isLoadingLambPosition || isLoadingBoardDimensions) return <Loading />

	return (
		<div className='w-full h-full relative'>
			{phoneOrientation.angle !== 0 || isDesktop
				? <div className="w-full h-full p-[1vw] flex justify-around items-center gap-[2vw]">
					<div className="h-full flex flex-col justify-center items-center">
						<StepsBoard />
						<CoordinatesControls />
					</div>
					<div className='h-full w-full flex flex-col items-center' ref={ref}>
						<Navbar />
						<Board board={board} maxWidth={boardMaxWidth} />
						<PlayButton />
					</div>
					<div className='h-full flex flex-col items-center justify-between'>
						<ProfileBoard image='/images/user photo example.png' name='DaViD' />
						<LambBoard image='/images/lamb S.png' title='25 XP LEV.1' />
						<NumberControls />
					</div>
				</div>
				: <ModalOrientation />
			}
			{isGameWon() &&
				<motion.div {...popupVariant} className='absolute w-full h-full top-0 left-0 z-50' >
					<ModalWin />
				</motion.div>
			}
		</div>
	)
}

export default Game
