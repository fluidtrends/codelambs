import { useRef } from "react"
import Step from "./Step"
import { useDraggable } from "react-use-draggable-scroll"
import useStepsStore from "../../stores/steps";
import useInputDetailsStore from "../../stores/inputDetails";

const StepsBoard = () => {

	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref)
	const { steps } = useStepsStore()
	const { number, coordinate } = useInputDetailsStore()

	const getSteps = () => [...steps, { count: number, direction: coordinate, id: '-1' }]
		.map((step: any, index: number) => <Step
			index={index + 1}
			key={step.id}
			{...step}
		/>)

	return (
		<div className='h-full overflow-auto relative'>
			<img
				src='/images/code editor board.png'
				className='w-full h-full absolute z-10'
				onContextMenu={event => event.preventDefault()}
			/>
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
