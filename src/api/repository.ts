import { Repository } from "../interfaces/Repo"

interface Meta {
  total: number
}

export interface Repositories {
  repos: Repository[]
  meta: Meta
}

export const fetchRepositories = async (value: string): Promise<Repositories> => {
  const user = value.split('/')[0]
  const repo = value.split('/')[1]

  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/repos?repo=${repo}&user=${user}`)
    const data = await result.json()

    return data
  } catch (e) {
    return {
      repos: [],
      meta: {
        total: 0
      }
    }
  }
}