import { actionButtonWonModal } from '../../utils/constants';
import { goToNextLevel, resetCurrentLevel } from '../../utils/helper';
import Actions from './Actions';
import CompleteBoard from './CompleteBoard'
import LambStars from './LambStars'
import Tries from './Tries'

const ModalWin = () => {

	const actions = [
		{
			image: 'button-board home.png',
			onClick: () => resetCurrentLevel(),
			moreClasses: `w-[${actionButtonWonModal}vw] h-[${actionButtonWonModal}vw]`
		},
		{
			image: 'button-board replay.png',
			onClick: () => resetCurrentLevel(),
			moreClasses: `w-[${actionButtonWonModal}vw] h-[${actionButtonWonModal}vw]`
		},
		{
			image: 'button-board next.svg',
			onClick: () => goToNextLevel(),
			moreClasses: `w-[40%] h-[${actionButtonWonModal - 1}vw]`
		},
	]

	const stars = 3;

	return (
		<div
			className='relative flex justify-evenly items-center w-full h-full'
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('images/background-dark.png')"
			}}
		>
			<img src='images/rays of light.png' className='absolute w-full max-h-full opacity-30' />
			<LambStars stars={stars} />
			<div className='flex flex-col justify-center h-full w-[50vw]'>
				<CompleteBoard score={430} name='Thomas' />
				<Actions actions={actions} />
			</div>
			<Tries />
		</div>
	)
}

export default ModalWin
