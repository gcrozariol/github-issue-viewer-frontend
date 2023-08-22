import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './SearchBar.module.css'

const fakeApi = () => console.log('Api is called')

export function SearchBar() {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (inputValue !== '') {
      const timer = setTimeout(() => {
        fakeApi()
      }, 500)
  
      return () => clearTimeout(timer)
    }
  }, [inputValue])

  function handleCreateTask(e: FormEvent) {
    e.preventDefault()
    setInputValue('')
  }

  function handleSetInputValue(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  return (
    <form 
      className={styles.search} 
      onSubmit={handleCreateTask}
    >
      <input 
        value={inputValue}
        onChange={handleSetInputValue}
        placeholder='Search for a GitHub repository i.e. gcrozariol/gympass-api...'
      />
    </form>
  )
}