import { useElementSize } from 'usehooks-ts'
import Row from './Row'

interface BoardProps {
	board: any[][]
	maxWidth: number
}

const Board = ({ board, maxWidth }: BoardProps) => {
	const [ref, { height }] = useElementSize()

	const cellSize = maxWidth / board[0].length * board.length > height ? height / board.length : maxWidth / board[0].length

	const getRows = () => board.map((row, index) => <Row
		row={row}
		rowIndex={index}
		key={index}
		cellSize={cellSize}
	/>)

	return (
		<div
			className='flex flex-col h-full max-h-[65vh] relative my-[1.5vw] scale-[90%]'
			ref={ref}
			style={{
				width: cellSize * board[0].length,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('images/layer under the grass squares.png')"
			}}
		>
			<div className='absolute w-full h-full z-10 flex justify-center items-center'>
				<img
					src='/images/playing field frame.png'
					className='relative w-full h-full z-50 scale-x-[114%] scale-y-[120%]'
					onContextMenu={event => event.preventDefault()}
				/>
			</div>
			{getRows()}
		</div>
	)
}

export default Board
