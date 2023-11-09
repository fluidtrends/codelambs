import useLambDetailsStore from "../../stores/lambDetails"
import useWordStore from "../../stores/word"
import { getLetter, getSheep } from "../../utils/helper"

interface RowProps {
	rowIndex: number
	row: any[][]
	cellSize: number
}

const Row = ({ rowIndex, row, cellSize }: RowProps) => {
	const { x, y, orientation } = useLambDetailsStore()
	const { word } = useWordStore()

	const getRow = () =>
		row.map((_, colIndex) => <div
			className={'aspect-square flex justify-center items-center relative'}
			key={colIndex}
			style={{
				width: cellSize,
				height: cellSize,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('/images/grass " + ((colIndex + rowIndex) % 2 === 0 ? "dark" : "light") + ".png')"
			}}
		>
			{x === colIndex && y === rowIndex
				? <img
					src={getSheep(orientation)}
					className='absolute w-auto h-full z-30'
					onContextMenu={event => event.preventDefault()}
				/>
				: getLetter(word, rowIndex, colIndex, cellSize * 4 / 5)
			}
		</div>)

	return (
		<div className={`flex flex-row`}>
			{getRow()}
		</div>
	)
}

export default Row
