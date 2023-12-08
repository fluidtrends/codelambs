import { GetObstacles } from "../../hooks/query"
import useGameIndexStore from "../../stores/gameIndex"
import useLambDetailsStore from "../../stores/lambDetails"
import useWordStore from "../../stores/word"
import { getCellBackground, getLetter, getObstacle, getSheep } from "../../utils/helper"
import ReactLoading from 'react-loading'

interface RowProps {
	rowIndex: number
	row: any[][]
	cellSize: number
}

const Row = ({ rowIndex, row, cellSize }: RowProps) => {
	const { x, y, orientation } = useLambDetailsStore()
	const { word } = useWordStore()

	const { index } = useGameIndexStore()
	const { data: obstacles } = GetObstacles(index)

	if (!obstacles) return
	<div className='w-full h-full flex justify-center items-center'>
		<ReactLoading height='20%' width='20%' color='#ffe581' type='spin' className='mb-[10%]' />
	</div>

	const getRow = () =>
		row.map((_, colIndex) => <div
			className={'aspect-square flex justify-center items-center relative'}
			key={colIndex}
			style={{
				width: cellSize,
				height: cellSize,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: getCellBackground(rowIndex, colIndex, obstacles)
			}}
		>
			{
				getLetter(word, rowIndex, colIndex, cellSize * 4 / 5)
				?? <img
					src={
						x === colIndex && y === rowIndex
							? getSheep(orientation)
							: getObstacle(rowIndex, colIndex, obstacles)
					}
					className='absolute w-auto h-full'
					style={{
						zIndex: x === colIndex && y === rowIndex ? 10 : 0
					}}
					onContextMenu={event => event.preventDefault()}
				/>
			}
		</div>)

	return (
		<div className={`flex flex-row`}>
			{getRow()}
		</div>
	)
}

export default Row
