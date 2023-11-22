import NavButton from "../navbar/nav-button"

const Actions = ({ actions }: any) => {
	const getActions = () => (actions ?? []).map((action: any, index: number) =>
		<NavButton {...action} key={index} />)

	return (
		<div className='relative z-30 flex w-full justify-evenly items-center gap-[1.5vw] px-[2vw]'>
			{getActions()}
		</div>
	)
}

export default Actions
