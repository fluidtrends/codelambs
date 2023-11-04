import RoundControls from "../round-controls"
import PlayButton from "../play-button"
import { getControls } from "../../utils/helper"
import {
	coordinateControlMargin,
	coordinateControlSize,
	coordinates,
	coordinatesInitialAngle,
	numberControlMargin,
	numberControlSize,
	numberTranslate,
	numbers,
	numbersInitialAngle
} from "../../utils/constants"

const Controls = ({
	setCoordinate,
	setNumber,
	start,
	onClickStart
}: any) => {

	return (
		<div className="w-full flex justify-evenly items-center">
			<RoundControls
				controlImage='/images/button compass active.png'
				controlAlternativeImage='/images/button compass.png'
				buttons={getControls(coordinates, setCoordinate, {
					width: `${coordinateControlSize}vw`,
					height: `${coordinateControlSize}vw`,
					margin: `${coordinateControlMargin}vw`
				})}
				initialAngle={coordinatesInitialAngle}
			/>
			<PlayButton start={start} onClickStart={onClickStart} />
			<RoundControls
				controlImage='/images/button 1-9.png'
				buttons={getControls(numbers, setNumber, {
					width: `${numberControlSize}vw`,
					height: `${numberControlSize}vw`,
					margin: `${numberControlMargin}vw`,
				}, numberTranslate)}
				initialAngle={numbersInitialAngle}
			/>
		</div>
	)
}

export default Controls
