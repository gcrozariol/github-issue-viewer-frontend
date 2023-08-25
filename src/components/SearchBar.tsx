import { useState, ChangeEvent, useEffect } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  query: (value: string) => void
}

export function SearchBar({ query }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    query(inputValue)
  }, [query, inputValue])

  function handleSetInputValue(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  return (
    <form className={styles.search}>
      <input 
        value={inputValue}
        onChange={handleSetInputValue}
        placeholder='Search for a GitHub repository i.e. username/repository...'
      />
    </form>
  )
}