import styles from './App.module.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SearchBar />
      </div>
    </div>
  )
}

export default App
