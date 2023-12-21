import { gray } from '../../utils/constants'
import { LetterProps as ILetter } from '../../utils/interfaces'
import { motion } from 'framer-motion'
import { bounceVariant } from '../../utils/variants'

interface LetterProps extends ILetter {
	isInNavbar?: boolean
	fontSize?: number
}

const Letter = ({ text, color, isInNavbar = false, fontSize, collectedIndex }: LetterProps) => {

	const isCollectedInNavbar = collectedIndex !== undefined && isInNavbar

	return (
		<motion.div
			initial='initial'
			variants={bounceVariant(gray, color)}
			animate={isCollectedInNavbar || !isInNavbar ? 'animate' : 'initial'}
			style={{
				fontSize: fontSize ? `${fontSize}px` : '2.6vw',
				WebkitTextStroke: isInNavbar ? '2px black' : undefined,
				textShadow: isInNavbar ? '-1px 0 black, 2px 2px black, 2px 2px black, 0 -1px black' : undefined
			}}
		>
			{text}
		</motion.div >
	)
}

export default Letter
