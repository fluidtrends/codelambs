import { actionButtonWonModal } from "../../utils/constants"
import { resetCurrentLevel } from "../../utils/helper"
import { NavButtonProps } from "../../utils/interfaces"
import Actions from "../modal-win/Actions"
import RetryBoard from "./RetryBoard"

const ModalOver = () => {
	const actions: NavButtonProps[] = [
		{
			image: 'button-board home.png',
			onClick: () => resetCurrentLevel(),
			moreClasses: {
				width: `${actionButtonWonModal}vw`,
				height: `${actionButtonWonModal}vw`
			}
		},
		{
			image: 'button-board retry.svg',
			onClick: () => resetCurrentLevel(),
			moreClasses: {
				width: `${actionButtonWonModal}vw`,
				height: `${actionButtonWonModal}vw`
			}
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
