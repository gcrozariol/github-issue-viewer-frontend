import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { RepoList } from './components/RepoList'
import { SearchBar } from './components/SearchBar'
import { Spinner } from './components/Spinner'

import { fetchRepositories } from './api/repository'
import { Repository } from './interfaces/Repo'

import styles from './App.module.css'

function App() {
  const [query, setQuery] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [isFetchingRepos, setIsFetchingRepos] = useState(false)

  useEffect(() => {
    if (query === '') {
      setRepositories([])
      setIsFetchingRepos(false)
    }

    if (query.includes('/') && !query.endsWith('-')) {
      setIsFetchingRepos(true)

      const timer = setTimeout(async () => {
        try {
          const result = await fetchRepositories(query)
          setRepositories(result.repos)
        } catch (e) {
          setRepositories([])
        } finally {
          setIsFetchingRepos(false)
        }
        
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setIsFetchingRepos(false)
    }

  }, [query])

  async function handleFetchRepositories(value: string) {
    setQuery(value)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SearchBar query={handleFetchRepositories} />
        {
          isFetchingRepos ? 
          <Spinner /> : 
          <RepoList repositories={repositories} />
        }
      </div>
    </div>
  )
}

export default App
