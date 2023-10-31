import { useRef, useEffect } from "react"
import Step from "./Step"
import { useDraggable } from "react-use-draggable-scroll"

const StepsBoard = ({ steps }: any) => {
	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref)
	const getSteps = () => steps.map((step: any, index: number) => <Step index={index + 1} key={index} {...step} />)

	useEffect(() => {
		(ref?.current as any)?.scrollIntoView({ behavior: 'smooth' });
	});

	return (
		<div className='h-[43vw] relative'>
			<img src='/images/code editor board.png' className='w-full h-full absolute z-10' />
			<div className='w-full h-full py-[2vw] z-50 relative'>
				<div
					className='flex flex-col gap-[2vw] items-center justify-start overflow-auto h-full w-[17vw]'
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
