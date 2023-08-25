import { useState, ChangeEvent, useEffect, useRef } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  query: (value: string) => void
}

export function SearchBar({ query }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    query(inputValue)
  }, [query, inputValue])

  function handleSetInputValue(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  if (inputRef.current) {
    inputRef.current.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
      }
    })
  }

  return (
    <form className={styles.search}>
      <input 
        ref={inputRef}
        value={inputValue}
        onChange={handleSetInputValue}
        placeholder='Search for a GitHub repository i.e. username/repository...'
      />
    </form>
  )
}