import { Issue } from '../interfaces/Issue'
import styles from './IssuesList.module.css'

interface IssuesListProps {
  active: boolean
  issues: Issue[]
}

interface ListProps {
  issues: Issue[]
}

function EmptyIssuesList() {
  return <p className={styles.emptyIssuesList}>No issues found.</p>
}

function Issues({ issues }: ListProps) {
  return issues.map(issue => {
    return (
      <div className={styles.issues} key={issue.id}>
        <p>
          <span>Title: </span>
          {issue.title}
        </p>
        <p>
          <span>Description: </span>
          {issue.body} 
        </p>
      </div>
    )
  })
}

export function IssuesList({ active, issues }: IssuesListProps) {
  return (
    <div className={active ? styles.wrapper : styles.hiddenWrapper}>
      {
        issues.length === 0 ? 
        <EmptyIssuesList /> : 
        <div className={styles.issuesWrapper}>
          <Issues issues={issues} />
        </div>
      }
    </div>
  )
}