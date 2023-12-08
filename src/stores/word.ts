import { create } from "zustand";
import { combine } from "zustand/middleware";
import { LetterProps } from "../utils/interfaces";
import { allWords } from "../components/game/mockDataWords";
import useGameIndexStore from "./gameIndex";

const useWordStore = create(
	combine({
		word: [] as LetterProps[]
	},
		(set, get) => ({
			setLetterCollected: (row: number, col: number) => set(({ word }) => {
				const collectedCount = word.reduce((acc, letter) =>
					letter.collectedIndex !== undefined ? acc + 1 : acc,
					0)

				return {
					word: word.map(letter =>
						letter.position.col === col &&
							letter.position.row === row &&
							letter.collectedIndex === undefined
							? ({ ...letter, collectedIndex: collectedCount })
							: letter
					)
				}
			}
			),
			uncollectedLettersCount: () => get().word.reduce((acc, letter) =>
				letter.collectedIndex !== undefined ? acc : acc + 1, 0),
			areAllLettersCollected: () => get().word.reduce((acc, letter) =>
				letter.collectedIndex !== undefined ? acc + 1 : acc, 0) === allWords[useGameIndexStore.getState().index].length,
			areLettersCollectedInRightOrder: () => get().word.every(({ collectedIndex }, index) => collectedIndex === index),
			resetWord: () => set(() => ({ word: allWords[useGameIndexStore.getState().index] })),
			setNewWord: (newWord: LetterProps[]) => set(() => ({ word: newWord }))
		})),
)

export default useWordStore