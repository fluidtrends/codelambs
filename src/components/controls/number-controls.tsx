import RoundControls from '../round-controls'
import { getControls } from '../../utils/helper'
import { numberControlMargin, numberControlSize, numberTranslate, numbers, numbersInitialAngle } from '../../utils/constants'

const NumberControls = ({ setNumber }: any) => {
	return (
		<RoundControls
			controlImage='/images/button 1-9.png'
			buttons={getControls(numbers, setNumber, {
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
