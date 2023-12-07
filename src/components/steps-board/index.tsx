import Step from "./Step"
import useStepsStore from "../../stores/steps";
import useInputDetailsStore from "../../stores/inputDetails";
import useScrollToElement from "../../hooks/useScrollToElement";

const StepsBoard = () => {

	const { steps } = useStepsStore()
	const { number, coordinate } = useInputDetailsStore()

	const ref = useScrollToElement()

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
				<div className='flex flex-col gap-[1vw] items-start justify-start overflow-auto h-full px-[2.5vw] w-[17vw]'>
					{getSteps()}
					<div ref={ref as any} className='h-0' />
				</div>
			</div>
		</div>
	)
}

export default StepsBoard
