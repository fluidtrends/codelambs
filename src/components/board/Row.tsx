import useLambDetailsStore from "../../stores/lambDetails"
import useObstaclesStore from "../../stores/obstacles"
import useWordStore from "../../stores/word"
import { getCellBackground, getLetter, getObstacle, getSheep } from "../../utils/helper"

interface RowProps {
	rowIndex: number
	row: any[][]
	cellSize: number
}

const Row = ({ rowIndex, row, cellSize }: RowProps) => {
	const { x, y, orientation } = useLambDetailsStore()
	const { word } = useWordStore()
	const { obstacles } = useObstaclesStore()

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
					rel='preload'
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
