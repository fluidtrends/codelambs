import { create } from "zustand";
import { combine } from "zustand/middleware"

const useGameIndexStore = create(
	combine({
		index: 0
	},
		(set) => ({
			incrementGameIndex: () => set(({ index }) => ({ index: index + 1 }))
		})
	))

export default useGameIndexStore