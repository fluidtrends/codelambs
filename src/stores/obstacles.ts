import { create } from "zustand";
import { combine } from "zustand/middleware";
import { LambBoardGameDetails, ObstacleProps } from "../utils/interfaces";
import { obstacles } from "../components/game/mockData";

const useObstaclesStore = create(
	combine({
		obstacles: obstacles as ObstacleProps[]
	},
		(set, get) => ({
			setObstacles: (obstacles: ObstacleProps[]) => set(() => ({ obstacles })),
			isLambRunningIntoObstacle: ({ x, y }: LambBoardGameDetails): boolean =>
				!!get().obstacles.find(({ isBlocker, position }) =>
					isBlocker && position.row === y && position.col === x)
		})),
)

export default useObstaclesStore