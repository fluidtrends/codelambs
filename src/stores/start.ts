import { create } from "zustand";
import { combine } from "zustand/middleware"

const useStartStore = create(
	combine({
		start: false as boolean
	},
		(set) => ({
			setStart: (newStart: boolean) => set(() => ({ start: newStart })),
		}))
)

export default useStartStore