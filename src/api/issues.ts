import { Issues } from "../interfaces/Issue"

export const fetchIssuesByRepository = async (repository: string): Promise<Issues> => {
  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/repos/${repository}/issues`)
    const data = await result.json()

    return data
  } catch (e) {
    return {
      issues: []
    }
  }
}