import NavButton from "../navbar/nav-button"

const Actions = ({ actions }: any) => {
	const getActions = () => (actions ?? []).map((action: any, index: number) =>
		<NavButton {...action} key={index} moreClasses='w-[5vw] h-[5vw]' />)

	return (
		<div className='flex w-full justify-between items-center px-[1.5vw]'>
			{getActions()}
		</div>
	)
}

export default Actions
