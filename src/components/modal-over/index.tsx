import { actionButtonWonModal } from "../../utils/constants"
import { resetCurrentLevel } from "../../utils/helper"
import Actions from "../modal-win/Actions"
import RetryBoard from "./RetryBoard"

const ModalOver = () => {
	const actions = [
		{
			image: 'button-board home.png',
			onClick: () => resetCurrentLevel(),
			moreClasses: `w-[${actionButtonWonModal}vw] h-[${actionButtonWonModal}vw]`
		},
		{
			image: 'board-button retry.svg',
			onClick: () => resetCurrentLevel(),
			moreClasses: `w-[40%] h-[${actionButtonWonModal - 1}vw]`
		},
	]

	return (
		<div
			className='flex flex-col justify-evenly items-center w-full h-full'
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: "url('images/background-dark.png')"
			}}
		>
			<div className='w-[50vw]'>
				<RetryBoard />
				<Actions actions={actions} />
			</div>
		</div>
	)
}

export default ModalOver
