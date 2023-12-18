import ReactLoading from 'react-loading'

const Loading = () => {
	return (
		<div className='w-full h-full flex justify-center items-center'>
			<ReactLoading height='20%' width='20%' color='#ffe581' type='spin' className='mb-[10%]' />
		</div>
	)
}

export default Loading
