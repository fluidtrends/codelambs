import { getSheep } from "../../utils/helper"
import { LambBoardGameDetails } from "../../utils/interfaces"

interface RowProps {
	rowIndex: number
	row: any[][]
	boardWidth: number
	position: LambBoardGameDetails
}

const Row = ({ rowIndex, row, boardWidth, position }: RowProps) => {
	const { x, y, orientation } = position
	const cellSize = boardWidth / row.length

	const getRow = () =>
		row.map((_, index) => <div
			className={'aspect-square flex justify-center items-center relative'}
			key={index}
			style={{
				width: cellSize,
				height: cellSize,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('/images/grass " + ((index + rowIndex) % 2 === 0 ? "dark" : "light") + ".png')"
			}}
		>
			{x === index && y === rowIndex && <img src={getSheep(orientation)} className='absolute w-auto h-full z-30' />}
		</div>)

	return (
		<div className={`w-[${boardWidth}px] flex flex-row`}>
			{getRow()}
		</div>
	)
}

export default Row
