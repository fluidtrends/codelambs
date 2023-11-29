import useWordStore from "../../stores/word"
import Letter from "./Letter"

interface WordProps {
	isInNavbar: boolean
}

const Word = ({ isInNavbar }: WordProps) => {
	const { word } = useWordStore()

	return (
		<div className='w-1/2 relative mx-[2vw]'>
			<img
				rel='preload'
				src='/images/upper frame for the word.png'
				className='absolute w-full h-[115%] -top-[0.4vw]'
				onContextMenu={event => event.preventDefault()}
			/>
			<div className='w-full flex justify-center items-center gap-[0.7vw] z-20 relative'>
				{word.map((letter, index: number) => <Letter
					{...letter}
					key={index}
					isInNavbar={isInNavbar}
				/>)}
			</div>
		</div>
	)
}

export default Word
