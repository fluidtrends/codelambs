import { create } from "zustand";
import { combine } from "zustand/middleware";

const useSelectedStepStore = create(
	combine({
		selectedStep: '' as string
	},
		(set) => ({
			setSelectedStep: (id: string) => set(() => ({ selectedStep: id }))
		}))
)

export default useSelectedStepStore