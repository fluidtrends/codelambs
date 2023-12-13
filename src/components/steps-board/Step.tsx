import { useEffect, useState } from "react"
import useInputDetailsStore from "../../stores/inputDetails"
import useRunningStepsStore from "../../stores/runnningSteps"
import useSelectedStepStore from "../../stores/selectedStep"
import useStepsStore from "../../stores/steps"
import { cn } from "../../utils/helper"
import useScrollToElement from "../../hooks/useScrollToElement"

const Step = ({ direction, count, id, index }: any) => {
	const { selectedStep, setSelectedStep } = useSelectedStepStore()
	const { resetInputDetails } = useInputDetailsStore()
	const { deleteStepById } = useStepsStore()
	const selected = selectedStep === id

	const { runningSteps } = useRunningStepsStore()
	const [isThisStepRunning, setIsThisTheRunningStep] = useState(false)

	const ref = useScrollToElement()

	useEffect(() => {
		setTimeout(() => {
			setIsThisTheRunningStep(runningSteps.length > 0 && runningSteps[0].id === id ? true : false)
		}, 800)
	}, [runningSteps.length])

	return (
		<div className='flex justify-start items-center gap-[1vw] w-full hover:cursor-pointer' ref={isThisStepRunning ? ref as any : undefined}>
			<div
				className='flex justify-start items-center gap-[1vw] w-full hover:cursor-pointer relative'
				onClick={() => setSelectedStep(selected ? '' : id)}
			>
				{selected && <img
					src='/images/code editor selection frame.png'
					className='absolute left-0 w-full h-full'
					onContextMenu={event => event.preventDefault()}
				/>}
				{(direction || count) && <div className={cn('w-1/3 text-[2.5vw] text-right', isThisStepRunning ? 'text-primary-dark' : 'text-primary')}>{index}.</div>}
				<div className={cn('text-[2.5vw]', isThisStepRunning ? 'text-primary-dark' : 'text-primary')}>
					{direction?.slice(0, 1) ?? ''}{count}
				</div>
			</div>
			<div
				className={`text-primary text-[2vw] ml-auto ${selected ? 'visible' : 'invisible'}`}
				onClick={selected
					? () => {
						if (selectedStep !== '-1') { deleteStepById(id) }
						else { resetInputDetails() }
						setSelectedStep('')
					}
					: undefined
				}
			>
				X
			</div>
		</div>
	)
}

export default Step
