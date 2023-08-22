import styles from './App.module.css'
import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <p>GitHub Issues Viewer</p>
      </div>
    </div>
  )
}

export default App
