import { Author } from "./Author"

export interface Repository {
  id: number
  name: string
  author: Author
}