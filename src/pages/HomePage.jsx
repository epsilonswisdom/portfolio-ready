import styles from "./HomePage.module.css"

function HomePage() {
  return(
  <>
    <div className={styles.homePage}>
      <img src="./DND_Purple_1.jpg" alt="Manny" />
      <h1> My name is Emmanuel Maldonado aka Manu</h1>
    </div>
    <div className={styles.bodyP}>
      <p className={styles.intro}> I'm a Software Engineer I love to problem solve and use the scientific method.</p>
    </div>
  </>
  )
}

export default HomePage