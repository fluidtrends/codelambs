const Tries = ({ tries }: any) => {

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='text-primary text-[3vw] tracking-wider'>You solved</div>
			<div className='text-primary text-[3vw] tracking-wider'>this in</div>
			<div className='text-primary text-[8vw] -my-[2vw]'>{tries}</div>
			<div className='text-primary text-[3vw] tracking-wider'>TRIES</div>
		</div>
	)
}

export default Tries
