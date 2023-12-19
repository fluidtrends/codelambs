import { create } from "zustand";
import { Coordinates } from "../utils/types";
import { LambBoardGameDetails } from "../utils/interfaces";
import { combine } from "zustand/middleware";

const useLambDetailsStore = create(
	combine({
		initialX: -1,
		initialY: -1,
		x: -1,
		y: -1,
		orientation: Coordinates.SOUTH,
	} as LambBoardGameDetails,
		(set, get) => ({
			setLambInitialDetails: (initialX: number, initialY: number) => set(() => ({
				x: initialX,
				y: initialY,
				initialX,
				initialY,
				orientation: Coordinates.SOUTH
			})),
			resetLambDetails: () => set(() => ({
				...get(),
				x: get().initialX,
				y: get().initialY,
				orientation: Coordinates.SOUTH
			})),
			setLambDetails: (newLambDetails: LambBoardGameDetails) => set({ ...get(), ...newLambDetails })
		}))
)

export default useLambDetailsStore