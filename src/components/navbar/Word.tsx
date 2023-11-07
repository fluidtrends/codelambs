import { LetterProps } from "../../utils/interfaces"
import Letter from "./Letter"

const Word = ({ word }: { word: LetterProps[] }) => {
	return (
		<div className='w-1/2 relative mx-[2vw]'>
			<img
				src='/images/upper frame for the word.png'
				className='absolute w-full h-[115%] -top-[0.4vw]'
				onContextMenu={event => event.preventDefault()}
			/>
			<div className='w-full flex justify-center items-center gap-[1vw] z-20 relative'>
				{word.map((letter, index: number) => <Letter {...letter} key={index} />)}
			</div>
		</div>
	)
}

export default Word
