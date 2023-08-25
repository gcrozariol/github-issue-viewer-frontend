export interface Issue {
  id: number
  author: string
  body: string
  title: string
  url: string
}

export interface Issues {
  issues: Issue[]
}