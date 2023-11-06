import RoundControls from '../round-controls'
import { getControls } from '../../utils/helper'
import { coordinateControlMargin, coordinateControlSize, coordinates, coordinatesInitialAngle } from '../../utils/constants'

const CoordinatesControls = ({
	setCoordinate
}: any) => {
	return (
		<RoundControls
			controlImage='/images/button compass active.png'
			controlAlternativeImage='/images/button compass.png'
			buttons={getControls(coordinates, setCoordinate, {
				width: `${coordinateControlSize}vw`,
				height: `${coordinateControlSize}vw`,
				margin: `${coordinateControlMargin}vw`
			})}
			initialAngle={coordinatesInitialAngle}
			style={{
				marginTop: '4vw',
				marginBottom: '4vw'
			}}
		/>
	)
}

export default CoordinatesControls
