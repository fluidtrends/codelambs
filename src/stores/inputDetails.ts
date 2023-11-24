import { create } from "zustand";
import { combine } from "zustand/middleware"
import { Coordinates } from "../utils/types"

interface useInputDetailsStoreProps {
	number?: number
	coordinate?: Coordinates
}

const useInputDetailsStore = create(
	combine({
		number: undefined,
		coordinate: undefined
	} as useInputDetailsStoreProps,
		(set, get) => ({
			setNumber: (newNumber: number) => set((state) => ({ ...state, number: newNumber })),
			setCoordinate: (newCoordinate: Coordinates) => set((state) => ({ ...state, coordinate: newCoordinate })),
			resetInputDetails: () => set(() => ({ coordinate: undefined, number: undefined })),
			isIncomplete: () => (get().coordinate !== undefined && get().number === undefined) ||
				(get().coordinate === undefined && get().number !== undefined)
		}))
)

export default useInputDetailsStore