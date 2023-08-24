import { useState } from "react"
import { Repository } from "../interfaces/Repo"
import styles from './RepoCard.module.css'
import { CaretRight  } from 'phosphor-react'
import { IssuesList } from "./IssuesList"

interface RepoCardProps {
  repository: Repository
}

export function RepoCard({ repository }: RepoCardProps) {
  const [isCardSelected, setIsCardSelected] = useState(false)

  function handleSelectCard() {
    setIsCardSelected(value => {
      return !value
    })
  }

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
        repository={repository.name}
      />
    </>
  )
}