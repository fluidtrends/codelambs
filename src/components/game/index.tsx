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
import { v4 as uuidv4 } from 'uuid'

const Game = () => {
	const [start, setStart] = useState(false)

	const [number, setNumber] = useState<number | undefined>()
	const [coordinate, setCoordinate] = useState<Coordinates | undefined>()

	const [steps, setSteps] = useState<StepProps[]>([])
	const [selectedStep, setSeletectedStep] = useState('')

	const [lambDetails, setLambDetails] = useState<LambBoardGameDetails>({
		x: Math.floor(board[0].length / 2),
		y: Math.floor(board.length / 2),
		orientation: Coordinates.SOUTH
	})
	const [runningSteps, setRunningSteps] = useState<StepProps[]>([])

	const handleClickCoordinate = (newCoordinate: Coordinates) => {
		if (selectedStep) {
			const selectedStepIndex = steps.findIndex(({ id }) => id === selectedStep)
			if (selectedStepIndex !== -1) {
				setSteps(prev => {
					prev[selectedStepIndex].direction = newCoordinate
					return [...prev]
				})
			}
		} else {
			setCoordinate(newCoordinate)
		}
	}

	const handleClickNumber = (newNumber: number) => {
		if (selectedStep) {
			const selectedStepIndex = steps.findIndex(({ id }) => id === selectedStep)
			if (selectedStepIndex !== -1) {
				setSteps(prev => {
					prev[selectedStepIndex].count = newNumber
					return [...prev]
				})
			}
		} else {
			setNumber(newNumber)
		}
	}

	const handleClickOnDeleteStep = (deleteId: string) => {
		setSteps(prev => prev.filter(({ id }) => id !== deleteId))
	}

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
			setSteps(prev => [...prev, { count: number, direction: coordinate, id: uuidv4() }])
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
				<StepsBoard
					steps={[...steps, { count: number, direction: coordinate, id: '-1' }]}
					selectedStep={selectedStep}
					setSeletectedStep={(id: string) => setSeletectedStep(prev => prev === id ? '' : id)}
					onDelete={(id: string) => handleClickOnDeleteStep(id)}
				/>
			</div>
			<div className='h-full flex flex-col justify-between items-start'>
				<Navbar word={word} />
				<Board board={board} position={lambDetails} />
				<div className="flex justify-center items-center w-full my-[1vw]">
					<Controls
						setCoordinate={(coordinate: Coordinates) => handleClickCoordinate(coordinate)}
						setNumber={(number: number) => handleClickNumber(number)}
						start={start}
						onClickStart={start ? undefined : handleOnClickStart}
					/>
				</div>
			</div>
			<div className='h-full flex flex-col gap-[2vw]'>
				<ProfileBoard image='/images/user photo example.png' name='DaViD' />
				<LambBoard image='/images/lamb S.png' title='25 XP LEV.1' />
			</div>
		</div>
	)
}

export default Game
