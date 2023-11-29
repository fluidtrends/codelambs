import { useElementSize } from 'usehooks-ts'
import Row from './Row'
interface BoardProps {
	board: any[][]
}

const Board = ({ board }: BoardProps) => {
	const [ref, { width }] = useElementSize()

	const cellSize = width / board[0].length

	const getRows = () => board.map((row, index) => <Row
		row={row}
		rowIndex={index}
		key={index}
		cellSize={cellSize}
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
				<img
					rel='preload'
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
