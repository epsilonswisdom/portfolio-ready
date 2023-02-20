import styles from "./HomePage.module.css"

const HomePage = () => {
  return(
  <>
    <div className={styles.introImg}>
      <img src="images/DND_Purple_1.jpg" alt="Manny" />
    </div>
    <div>
      <h1 className={styles.introHead}> My name is Emmanuel Maldonado aka Manu</h1>
      <p className={styles.intro}> I'm a Software Engineer I love to problem solve and use the trial and error method.</p>
    </div>
  </>
  )
}

export default HomePage