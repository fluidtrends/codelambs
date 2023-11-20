import { create } from "zustand"
import { Coordinates } from "../utils/types"
import { StepProps } from "../utils/interfaces"
import { combine } from "zustand/middleware"
import { v4 as uuidv4 } from 'uuid'

const useStepsStore = create(
	combine({
		steps: [] as StepProps[]
	},
		(set) => ({
			setDirectionForStep: (selectedStep: string, newCoordinate: Coordinates) => set(({ steps }) => {
				const tempSteps: StepProps[] = JSON.parse(JSON.stringify(steps))
				const selectedStepIndex = tempSteps.findIndex(({ id }) => id === selectedStep)
				if (selectedStepIndex !== -1) {
					tempSteps[selectedStepIndex].direction = newCoordinate
				}
				return { steps: tempSteps }
			}),
			setNumberForStep: (selectedStep: string, newNumber: number) => set(({ steps }) => {
				const tempSteps: StepProps[] = JSON.parse(JSON.stringify(steps))
				const selectedStepIndex = tempSteps.findIndex(({ id }) => id === selectedStep)
				if (selectedStepIndex !== -1) {
					tempSteps[selectedStepIndex].count = newNumber
				}
				return { steps: tempSteps }
			}),
			setNewStep: (count: number, direction: Coordinates) => set(({ steps }) => ({
				steps: [...steps, { count, direction, id: uuidv4() }]
			})),
			deleteStepById: (deleteId: string) => set(({ steps }) => {
				return { steps: steps.filter(({ id }) => id !== deleteId) }
			})
		}))
)

export default useStepsStore