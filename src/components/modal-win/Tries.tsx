import usePlayCounterStore from "../../stores/playCounter"

const Tries = () => {
	const { counter } = usePlayCounterStore()
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='text-primary text-[3.5vw] -mb-[1vw] tracking-wider'>You solved</div>
			<div className='text-primary text-[3.5vw] tracking-wider'>this in</div>
			<div className='text-primary text-[8vw] -my-[2vw] p-[1vw] relative z-40 w-full flex justify-center items-center'>
				<img rel='preload' src='images/board nr tries.png' className='absolute w-3/4 h-3/4 -z-10' />
				{counter}
			</div>
			<div className='text-primary text-[4vw] tracking-wider'>TRIES</div>
		</div>
	)
}

export default Tries
