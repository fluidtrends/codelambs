import { create } from "zustand";
import { combine } from "zustand/middleware";
import { ObstacleProps } from "../utils/interfaces";
import { obstacles } from "../components/game/mockData";

const useObstaclesStore = create(
	combine({
		obstacles: obstacles as ObstacleProps[]
	},
		(set) => ({
			setObstacles: (obstacles: ObstacleProps[]) => set(() => ({ obstacles }))
		})),
)

export default useObstaclesStore