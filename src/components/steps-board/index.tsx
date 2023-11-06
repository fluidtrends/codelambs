import { useRef } from "react"
import Step from "./Step"
import { useDraggable } from "react-use-draggable-scroll"

const StepsBoard = ({ steps, selectedStep, setSeletectedStep, onDelete }: any) => {

	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref)

	const getSteps = () => steps.map((step: any, index: number) => <Step
		index={index + 1}
		key={step.id}
		selected={selectedStep === step.id}
		onClick={setSeletectedStep}
		onDelete={onDelete}
		{...step}
	/>)

	return (
		<div className='h-full relative'>
			<img src='/images/code editor board.png' className='w-full h-full absolute z-10' />
			<div className='w-full h-full py-[2vw] z-50 relative'>
				<div
					className='flex flex-col gap-[1vw] items-start justify-start overflow-auto h-full px-[2.5vw] w-[17vw]'
					{...events}
					ref={ref}
				>
					{getSteps()}
				</div>
			</div>
		</div>
	)
}

export default StepsBoard
