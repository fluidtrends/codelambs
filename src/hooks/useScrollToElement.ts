import { useEffect, useRef } from "react"

const useScrollToElement = () => {
	const ref = useRef()

	useEffect(() => {
		(ref as any)?.current?.scrollIntoView({ behavior: 'smooth' })
	})

	return ref
}

export default useScrollToElement