import { getSheep } from "../../utils/helper"
import { LambBoardGameDetails } from "../../utils/interfaces"

interface RowProps {
	rowIndex: number
	row: any[][]
	cellSize: number
	position: LambBoardGameDetails
}

const Row = ({ rowIndex, row, cellSize, position }: RowProps) => {
	const { x, y, orientation } = position

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
			{x === index && y === rowIndex && <img
				src={getSheep(orientation)}
				className='absolute w-auto h-full z-30'
				onContextMenu={event => event.preventDefault()}
			/>}
		</div>)

	return (
		<div className={`flex flex-row`}>
			{getRow()}
		</div>
	)
}

export default Row
