import { useState, useEffect } from 'react'
import Board from "../board"
import { board } from "../board/mockData"
import Controls from "../controls"
import Navbar from "../navbar"
import ProfileBoard from "../profile-board"
import SheepBoard from "../sheep-board"
import StepsBoard from "../steps-board"
import { word } from "./mockData"
import { StepProps } from '../../utils/interfaces'
import { Coordinates } from '../../utils/types'

const Game = () => {

	const [number, setNumber] = useState<number | undefined>()
	const [coordinate, setCoordinate] = useState<Coordinates | undefined>()

	const [steps, setSteps] = useState<StepProps[]>([])

	useEffect(() => {
		if (number && coordinate) {
			setSteps(prev => [...prev, { count: number, direction: coordinate }])
			setNumber(undefined)
			setCoordinate(undefined)
		}
	}, [number, coordinate])

	return (
		<div className="w-full h-full p-[1vw] flex justify-around items-center gap-[2vw]">
			<div className="h-full">
				<StepsBoard steps={[...steps, { count: number, direction: coordinate }]} />
			</div>
			<div className='h-full w-[50%] flex flex-col justify-between items-start'>
				<Navbar word={word} />
				<Board board={board} />
				<div className="flex justify-center items-center w-full my-[1vw]">
					<Controls
						setCoordinate={(coordinate: Coordinates) => setCoordinate(coordinate)}
						setNumber={(number: number) => setNumber(number)}
					/>
				</div>
			</div>
			<div className='h-full flex flex-col gap-[2vw]'>
				<ProfileBoard image='/images/user photo example.png' name='DAViD' />
				<SheepBoard image='/images/lamb for board.png' title='25 XP LEV.1' />
			</div>
		</div>
	)
}

export default Game
