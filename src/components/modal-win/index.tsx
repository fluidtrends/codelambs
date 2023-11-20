import { actionButtonWonModal } from '../../utils/constants';
import Actions from './Actions';
import CompleteBoard from './CompleteBoard';
import LambStars from './LambStars';
import Tries from './Tries';

const ModalWin = () => {
	const actions = [
		{
			image: 'button-board home',
			onClick: () => { },
			moreClasses: `w-[${actionButtonWonModal}vw] h-[${actionButtonWonModal}vw]`
		},
		{
			image: 'button-board replay',
			onClick: () => { },
			moreClasses: `w-[${actionButtonWonModal}vw] h-[${actionButtonWonModal}vw]`
		},
		{
			image: 'button-board next',
			onClick: () => { },
			moreClasses: `w-1/2 h-[${actionButtonWonModal}vw]`
		},
	]

	const stars = 2;

	return (
		<div
			className='relative flex justify-evenly items-center w-full h-full'
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('images/background-dark.png')"
			}}
		>
			<img src='images/rays of light.png' className='absolute w-full opacity-30' />
			<LambStars stars={stars} />
			<div className='flex flex-col justify-center h-full'>
				<CompleteBoard score={430} name='Thomas' />
				<Actions actions={actions} />
			</div>
			<Tries tries={3} />
		</div>
	)
}

export default ModalWin
