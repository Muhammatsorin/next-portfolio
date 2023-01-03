import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Title from '../components/title/Title'
import Profile from '../components/profile/Profile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title />
      <Profile />
    </div>
  )
}
