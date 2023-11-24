import { create } from "zustand";
import { combine } from "zustand/middleware";
import { LambBoardGameDetails, ObstacleProps } from "../utils/interfaces";
import { allObstacles } from "../components/game/mockDataObstacles";
import useGameIndexStore from "./gameIndex";

const useObstaclesStore = create(
	combine({
		obstacles: allObstacles[useGameIndexStore.getState().index] as ObstacleProps[]
	},
		(set, get) => ({
			setObstacles: (obstacles: ObstacleProps[]) => set(() => ({ obstacles })),
			isLambRunningIntoObstacle: ({ x, y }: LambBoardGameDetails): boolean =>
				!!get().obstacles.find(({ isBlocker, position }) =>
					isBlocker && position.row === y && position.col === x)
		})),
)

export default useObstaclesStore