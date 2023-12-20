import { getControls } from '../../utils/helper'
import { numberControlSize, numbers } from '../../utils/constants'
import useSelectedStepStore from '../../stores/selectedStep'
import useInputDetailsStore from '../../stores/inputDetails'
import useStepsStore from '../../stores/steps'
import Button from '../round-controls/Button'

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

	const controls = getControls(numbers, handleClickNumber, {
		width: `${numberControlSize}vw`,
		height: `${numberControlSize}vw`,
		position: 'static'
	})

	return (
		<div className='grid grid-cols-3 grid-rows-3 justify-between items-center w-full'>
			{controls.map((button, index) => <Button {...button} key={index} />)}
		</div>
	)
}

export default NumberControls
