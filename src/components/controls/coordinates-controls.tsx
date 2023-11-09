import RoundControls from '../round-controls'
import { getControls } from '../../utils/helper'
import { coordinateControlMargin, coordinateControlSize, coordinates, coordinatesInitialAngle } from '../../utils/constants'
import { Coordinates } from '../../utils/types'
import useStepsStore from '../../stores/steps'
import useSelectedStepStore from '../../stores/selectedStep'
import useInputDetailsStore from '../../stores/inputDetails'

const CoordinatesControls = () => {
	const { selectedStep } = useSelectedStepStore()
	const { setCoordinate } = useInputDetailsStore()
	const { setDirectionForStep } = useStepsStore()

	const handleClickCoordinate = (newCoordinate: Coordinates) => {
		if (selectedStep) {
			setDirectionForStep(selectedStep, newCoordinate)
		} else {
			setCoordinate(newCoordinate)
		}
	}

	return (
		<RoundControls
			controlImage='/images/button compass active.png'
			controlAlternativeImage='/images/button compass.png'
			buttons={getControls(coordinates, handleClickCoordinate, {
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
