import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { RepoList } from './components/RepoList'
import { SearchBar } from './components/SearchBar'
import { Spinner } from './components/Spinner'

import { fetchRepositories } from './api/repo'
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

    if (query.includes('/')) {
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
        
        return () => clearTimeout(timer)
      }, 500)
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
