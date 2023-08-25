import { Repository } from "../interfaces/Repo";
import { RepoCard } from "./RepoCard";
import styles from './RepoList.module.css'

interface RepoListProps {
  repositories: Repository[]
}

export function RepoList({ repositories }: RepoListProps) {
  return repositories.map(repository => {
    return (
      <div key={repository.id} className={styles.repository}>
        <RepoCard repository={repository} />
      </div>
    )
  })
}