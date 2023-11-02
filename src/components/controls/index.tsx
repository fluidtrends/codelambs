import RoundControls from "../round-controls"
import PlayButton from "../play-button"
import { getControls } from "../../utils/helper"
import { coordinates, numbers } from "../../utils/constants"

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
				buttons={getControls(coordinates, setCoordinate, { width: '4vw', height: '4vw', margin: '-2vw' })}
				initialAngle={180}
			/>
			<PlayButton start={start} onClickStart={onClickStart} />
			<RoundControls controlImage='/images/button 1-9.png' buttons={getControls(numbers, setNumber, { width: '3.25vw', height: '3.25vw', margin: '-1.625vw' })} initialAngle={70} />
		</div>
	)
}

export default Controls
