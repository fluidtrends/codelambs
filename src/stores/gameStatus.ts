import { create } from "zustand";
import { combine } from "zustand/middleware"
import { GameStatus } from "../utils/types";

const useGameStatusStore = create(
	combine({
		gameStatus: GameStatus.PENDING
	},
		(set, get) => ({
			setGameStatus: (gameStatus: GameStatus) => set(() => ({ gameStatus })),
			isGameWon: () => get().gameStatus === GameStatus.WON,
			isGameOver: () => get().gameStatus === GameStatus.OVER,
			isGamePending: () => get().gameStatus === GameStatus.PENDING,
			isGameStart: () => get().gameStatus === GameStatus.START
		}))
)

export default useGameStatusStore