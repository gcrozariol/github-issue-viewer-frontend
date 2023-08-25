import { useEffect, useState } from "react"
import { Repository } from "../interfaces/Repo"
import styles from './RepoCard.module.css'
import { CaretRight  } from 'phosphor-react'
import { IssuesList } from "./IssuesList"
import { Issue } from '../interfaces/Issue'
import { fetchIssuesByRepository } from "../api/issues"

interface RepoCardProps {
  repository: Repository
}

export function RepoCard({ repository }: RepoCardProps) {
  const [isCardSelected, setIsCardSelected] = useState(false)
  const [issues, setIssues] = useState<Issue[]>([])
  const [isLoadingIssues, setIsLoadingIssues] = useState(false)

  async function handleSelectCard() {
    setIsCardSelected((value) => {
      return !value
    })
  }

  useEffect(() => {
    async function fetchIssues() {
      const data = await fetchIssuesByRepository(repository.name)
      setIssues(data.issues)
      setIsLoadingIssues(false)
    }

    if (isCardSelected && issues.length === 0) {
      setIsLoadingIssues(true)
      fetchIssues()
    }
  }, [isCardSelected, issues.length, repository.name])

  return (
    <>
      <div className={styles.wrapper}>
        <img src={repository.author.avatar} />
        <span>{repository.name}</span>
        <button onClick={handleSelectCard}>
          <CaretRight 
            size={20}
            style={{ transition: 'transform 0.1s' }}
            transform={isCardSelected ? 'rotate(90)' : ''}
          />
        </button>
      </div>
      <IssuesList 
        active={isCardSelected} 
        loading={isLoadingIssues}
        issues={issues}
      />
    </>
  )
}