import { useState, useEffect } from 'react'
import Board from "../board"
import { board } from "../board/mockData"
import Controls from "../controls"
import Navbar from "../navbar"
import ProfileBoard from "../profile-board"
import LambBoard from "../lamb-board"
import StepsBoard from "../steps-board"
import { word } from "./mockData"
import { LambBoardGameDetails, StepProps } from '../../utils/interfaces'
import { Coordinates } from '../../utils/types'
import { moveNextStep, willLambBeInBounderies } from '../../utils/helper'

const Game = () => {
	const [start, setStart] = useState(false)

	const [number, setNumber] = useState<number | undefined>()
	const [coordinate, setCoordinate] = useState<Coordinates | undefined>()

	const [steps, setSteps] = useState<StepProps[]>([])

	const [lambDetails, setLambDetails] = useState<LambBoardGameDetails>({
		x: Math.floor(board[0].length / 2),
		y: Math.floor(board.length / 2),
		orientation: Coordinates.SOUTH
	})
	const [runningSteps, setRunningSteps] = useState<StepProps[]>([])

	const handleOnClickStart = () => {
		setStart(prev => {
			setRunningSteps(steps)
			setLambDetails({
				x: Math.floor(board[0].length / 2),
				y: Math.floor(board.length / 2),
				orientation: Coordinates.SOUTH
			})
			return !prev
		})
	}

	useEffect(() => {
		if (number && coordinate) {
			setSteps(prev => [...prev, { count: number, direction: coordinate }])
			setNumber(undefined)
			setCoordinate(undefined)
		}
	}, [number, coordinate])

	useEffect(() => {
		if (
			!runningSteps.length ||
			!willLambBeInBounderies(lambDetails, runningSteps[0].direction, board[0].length, board.length)
		) {
			setStart(false)
			return;
		}
		setTimeout(() => {
			moveNextStep(lambDetails, setLambDetails, runningSteps, setRunningSteps)
		}, 500)
	}, [lambDetails, runningSteps])

	return (
		<div className="w-full h-full p-[1vw] flex justify-around items-center gap-[2vw]">
			<div className="h-full">
				<StepsBoard steps={[...steps, { count: number, direction: coordinate }]} />
			</div>
			<div className='h-full w-[50%] flex flex-col justify-between items-start'>
				<Navbar word={word} />
				<Board board={board} position={lambDetails} />
				<div className="flex justify-center items-center w-full my-[1vw]">
					<Controls
						setCoordinate={(coordinate: Coordinates) => setCoordinate(coordinate)}
						setNumber={(number: number) => setNumber(number)}
						start={start}
						onClickStart={handleOnClickStart}
					/>
				</div>
			</div>
			<div className='h-full flex flex-col gap-[2vw]'>
				<ProfileBoard image='/images/user photo example.png' name='DaViD' />
				<LambBoard image='/images/lamb - S.png' title='25 XP LEV.1' />
			</div>
		</div>
	)
}

export default Game
