import styles from './Header.module.css'
import igniteLogo from '../assets/images/github-mark-white.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="GitHub Logo" />
    </header>
  )
}