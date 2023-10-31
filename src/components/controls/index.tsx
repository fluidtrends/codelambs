import RoundControls from "../round-controls"
import PlayButton from "../play-button"
import { getControls } from "../../utils/helper"
import { coordinates, numbers } from "../../utils/constants"

const Controls = ({
	setCoordinate,
	setNumber
}: any) => {

	return (
		<div className="w-full flex justify-evenly items-center">
			<RoundControls
				controlImage='/images/button compass active.png'
				controlAlternativeImage='/images/button compass.png'
				buttons={getControls(coordinates, setCoordinate, { width: '3.5vw', height: '3.5vw', margin: '-1.75vw' })}
				initialAngle={180}
			/>
			<PlayButton />
			<RoundControls controlImage='/images/button 1-9.png' buttons={getControls(numbers, setNumber)} initialAngle={70} />
		</div>
	)
}

export default Controls
