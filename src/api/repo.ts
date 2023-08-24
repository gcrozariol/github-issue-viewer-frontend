import { Repository } from "../interfaces/Repo"

interface Meta {
  total: number
}

export interface Repositories {
  repos: Repository[]
  meta: Meta
}

let data = {
  repos: [],
  meta: {
    total: 0
  }
}

export const fetchRepositories = async (value: string): Promise<Repositories> => {
  const repo = value.split('/')[1]
  const user = value.split('/')[0]

  if (user.length === 0) return data

  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/repos?repo=${repo}&user=${user}`, {
      method: 'GET'
    })

    if (!result.ok) {
      return data
    }

    data = await result.json()

    return data
  } catch (e) {
    return data
  }
}