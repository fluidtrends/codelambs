import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

const usePlayCounterStore = create(
	persist(
		combine({ counter: 0 },
			(set) => ({
				incrementCounter: () => set(({ counter }) => ({ counter: counter + 1 })),
				resetCounter: () => set(() => ({ counter: 0 })),
			})),
		{
			name: 'play-counter',
		}
	)
)

export default usePlayCounterStore