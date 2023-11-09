import { create } from "zustand";
import { Coordinates } from "../utils/types";
import { LambBoardGameDetails } from "../utils/interfaces";
import { combine } from "zustand/middleware";

const useLambDetailsStore = create(
	combine({
		x: 6,
		y: 3,
		orientation: Coordinates.SOUTH,
	} as LambBoardGameDetails,
		(set) => ({
			resetLambDetails: () => set(() => ({ x: 6, y: 3, orientation: Coordinates.SOUTH })),
			setLambDetails: (newLambDetails: LambBoardGameDetails) => set({ ...newLambDetails })
		}))
)

export default useLambDetailsStore