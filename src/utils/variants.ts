export const popupVariant = {
	initial: { scale: 0, rotate: -45 },
	animate: { scale: 1, rotate: 0 },
	transition: {
		type: 'spring',
		stiffness: 260,
		damping: 20
	}
}

export const bounceVariant = (initialColor: string, finalColor: string) => ({
	initial: { y: 0, color: initialColor },
	animate: {
		y: [-10, 5, 0],
		color: finalColor,
		transition: {
			type: 'spring',
			stiffness: 140,
			damping: 10
		}
	}
})