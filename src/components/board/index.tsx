import { useElementSize } from 'usehooks-ts'
import Row from './Row'

interface BoardProps {
	board: any[][]
}

const Board = ({ board }: BoardProps) => {
	const [ref, { width }] = useElementSize()
	const getRows = () => board.map((row, index) => <Row row={row} rowIndex={index} key={index} boardWidth={width} />)

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
