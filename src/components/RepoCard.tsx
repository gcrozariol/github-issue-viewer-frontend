import { Repository } from "../interfaces/Repo"
import styles from './RepoCard.module.css'

interface RepoCardProps {
  repository: Repository
}

export function RepoCard({ repository }: RepoCardProps) {
  return (
    <a href={`https://github.com/${repository.name}`} target='_blank'>
      <img className={styles.avatar} src={repository.author.avatar} />
      <p>{repository.name}</p>
    </a>
  )
}