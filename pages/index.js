import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Title from '../components/title/Title'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title />
    </div>
  )
}
