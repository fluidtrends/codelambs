interface RowProps {
	rowIndex: number
	row: any[][]
	boardWidth: number
}

const Row = ({ rowIndex, row, boardWidth }: RowProps) => {

	const cellSize = boardWidth / row.length

	const getRow = () =>
		row.map((_, index) => <div
			className={'aspect-square'}
			key={index}
			style={{
				width: cellSize,
				height: cellSize,
				// backgroundColor: (index + rowIndex) % 2 === 0 ? greenLight : greenDark,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('/images/grass " + ((index + rowIndex) % 2 === 0 ? "dark" : "light") + ".png')"
			}}
		>
		</div>)

	return (
		<div className={`w-[${boardWidth}px] flex flex-row`}>
			{getRow()}
		</div>
	)
}

export default Row
