import Actions from './Actions';
import CompleteBoard from './CompleteBoard';
import LambStars from './LambStars';
import Tries from './Tries';

const ModalWin = () => {
	const actions = [
		{
			image: 'button home',
			onClick: () => { }
		},
		{
			image: 'button replay',
			onClick: () => { }
		},
	]
	return (
		<div className='flex justify-evenly items-center w-full h-full bg-opacity-30 backdrop-blur-sm bg-black'>
			<LambStars stars={2} />
			<div className='flex flex-col justify-evenly h-full'>
				<CompleteBoard score={430} name='Thomas' />
				<Actions actions={actions} />
			</div>
			<Tries tries={3} />
		</div>
	)
}

export default ModalWin
