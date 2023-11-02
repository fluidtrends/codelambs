import { useElementSize } from 'usehooks-ts'
import Row from './Row'
import { LambBoardGameDetails } from '../../utils/interfaces'

interface BoardProps {
	board: any[][]
	position: LambBoardGameDetails
}

const Board = ({ board, position }: BoardProps) => {
	const [ref, { width }] = useElementSize()
	const getRows = () => board.map((row, index) => <Row
		row={row}
		rowIndex={index}
		key={index}
		boardWidth={width}
		position={position}
	/>)

	return (
		<div
			className='flex flex-col w-full'
			ref={ref}
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('images/layer under the grass squares.png')"
			}}
		>
			{getRows()}
		</div>
	)
}

export default Board
