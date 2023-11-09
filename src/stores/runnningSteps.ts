import { create } from "zustand"
import { StepProps } from "../utils/interfaces"
import { combine } from "zustand/middleware"

const useRunningStepsStore = create(
	combine({
		runningSteps: [] as StepProps[]
	},
		(set) => ({
			setRunningSteps: (steps: StepProps[]) => set(() => ({ runningSteps: steps })),
		}))
)

export default useRunningStepsStore