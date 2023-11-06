import { useElementSize } from 'usehooks-ts'
import Row from './Row'
import { LambBoardGameDetails } from '../../utils/interfaces'

interface BoardProps {
	board: any[][]
	position: LambBoardGameDetails
}

const Board = ({ board, position }: BoardProps) => {
	const [ref, { height, width }] = useElementSize()

	// const cellSize = height / board.length
	const cellSize = width / board[0].length

	const getRows = () => board.map((row, index) => <Row
		row={row}
		rowIndex={index}
		key={index}
		cellSize={cellSize}
		position={position}
	/>)

	return (
		<div
			className='flex flex-col w-full relative my-[1.5vw] scale-[90%]'
			ref={ref}
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('images/layer under the grass squares.png')"
			}}
		>
			<div className='absolute w-full h-full z-10 flex justify-center items-center'>
				<img src='/images/playing field frame.png' className='w-full h-full scale-x-[114%] scale-y-[120%]' />
			</div>
			{getRows()}
		</div>
	)
}

export default Board
