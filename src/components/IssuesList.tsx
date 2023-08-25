import { Issue } from '../interfaces/Issue'
import styles from './IssuesList.module.css'
import { Spinner } from './Spinner'

interface IssuesListProps {
  active: boolean
  loading: boolean
  issues: Issue[]
}

interface ListProps {
  issues: Issue[]
}

function IssueCard({ issues }: ListProps) {
  if (issues.length === 0) {
    return <p>No issues found.</p>
  }
  
  return issues.map(issue => {
    return (
      <div key={issue.id}>
        <p>
          <span>Title: </span>
          {issue.title}
        </p>
        <p>
          <span>Description: </span>
          {issue.body}
        </p>
        <br/>
      </div>
    )
  })
}

export function IssuesList({ active, loading, issues }: IssuesListProps) {
  return (
    <div className={active ? styles.wrapper : styles.hiddenWrapper}>
      { loading ? 
        <Spinner /> : 
        <IssueCard issues={issues} />
      }
    </div>
  )
}