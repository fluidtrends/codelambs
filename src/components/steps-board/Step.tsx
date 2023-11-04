const Step = ({ direction, count, id, index, selected, onClick, onDelete }: any) => {
	return (
		<div className='flex justify-start items-center gap-[1vw] w-full hover:cursor-pointer'>
			<div
				className='flex justify-start items-center gap-[1vw] w-full hover:cursor-pointer relative'
				onClick={() => onClick(id)}
			>
				{selected && <img src='/images/code editor selection frame.png' className='absolute left-0 w-full h-full' />}
				{(direction || count) && <div className='text-primary w-1/3 text-[2.5vw] text-right'>{index}.</div>}
				<div className='text-primary text-[2.5vw]'>
					{direction?.slice(0, 1) ?? ''}{count}
				</div>
			</div>
			<div
				className={`text-primary text-[2vw] ml-auto ${selected ? 'visible' : 'invisible'}`}
				onClick={selected
					? () => onDelete(id)
					: undefined
				}
			>
				X
			</div>
		</div>
	)
}

export default Step
