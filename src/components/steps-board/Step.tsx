const Step = ({ direction, count, index }: any) => {
	return (
		<div className='flex w-full gap-[1vw]'>
			{(direction || count) && <div className='text-primary w-1/3 text-[2vw] text-right'>{index}.</div>}
			<div className='text-primary text-[2vw]'>
				{direction?.slice(0, 1) ?? ''}{count}
			</div>
		</div>
	)
}

export default Step
