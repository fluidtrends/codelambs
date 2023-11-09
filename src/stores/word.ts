import { create } from "zustand";
import { combine } from "zustand/middleware";
import { LetterProps } from "../utils/interfaces";
import { word } from "../components/game/mockData";

const useWordStore = create(
	combine({
		word: word as LetterProps[]
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
				letter.collectedIndex !== undefined ? acc + 1 : acc, 0) === word.length,
			areWordsCollectedInRightOrder: () => get().word.every(({ collectedIndex }, index) => collectedIndex === index),
			resetWord: () => set(() => ({ word })),
		})),
)

export default useWordStore