import { useQuery } from '@tanstack/react-query'

export const GetObstacles = (index: number) =>
	useQuery({
		queryKey: ['obstacle', index],
		queryFn: async () => {
			const result = await fetch(`/mock/obstacles.json`)
			return (await result.json())[index]
		}
	})

export const GetWord = (index: number) =>
	useQuery({
		queryKey: ['word', index],
		queryFn: async () => {
			const result = await fetch(`/mock/words.json`)
			return (await result.json())[index]
		}
	})