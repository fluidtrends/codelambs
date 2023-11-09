import RoundControls from '../round-controls'
import { getControls } from '../../utils/helper'
import { numberControlMargin, numberControlSize, numberTranslate, numbers, numbersInitialAngle } from '../../utils/constants'
import useSelectedStepStore from '../../stores/selectedStep'
import useInputDetailsStore from '../../stores/inputDetails'
import useStepsStore from '../../stores/steps'

const NumberControls = () => {
	const { selectedStep } = useSelectedStepStore()
	const { setNumber } = useInputDetailsStore()
	const { setNumberForStep } = useStepsStore()

	const handleClickNumber = (newNumber: number) => {
		if (selectedStep) {
			setNumberForStep(selectedStep, newNumber)
		} else {
			setNumber(newNumber)
		}
	}

	return (
		<RoundControls
			controlImage='/images/button 1-9.png'
			buttons={getControls(numbers, handleClickNumber, {
				width: `${numberControlSize}vw`,
				height: `${numberControlSize}vw`,
				margin: `${numberControlMargin}vw`,
			}, numberTranslate)}
			initialAngle={numbersInitialAngle}
			style={{
				marginTop: '2vw',
				marginBottom: '2vw'
			}}
		/>
	)
}

export default NumberControls
