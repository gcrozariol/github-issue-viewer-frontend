import styles from './IssuesList.module.css'

interface IssuesListProps {
  active: boolean
  repository: string
}

export function IssuesList({ active, repository }: IssuesListProps) {
  return (
    <div className={active ? styles.wrapper : styles.hiddenWrapper}>
      <span>Issues from repository {repository}</span>
    </div>
  )
}