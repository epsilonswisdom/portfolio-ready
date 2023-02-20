import styles from "./AboutPage.module.css"

const AboutPage = () => {
  return (
    <>
    <h1>About Me</h1>
    <div className={styles.aboutpage}>
      <img src="images/DND_Purple_1.jpg" alt="MannyPic" />
    
      <p>Hi my name is Emmanuel Maldonado. I'm 30 years old, Mexican-American, natively born and raised in New York. I fall on Austism Spectrum, it's presented challenges in my life but overcome many of the obstacles. With that my hobbies/interests I love to read Fantasy/Sci-fi books, comics, light novels and fan-fiction. I love to play Dungeons and Dragons, Video Games, and Board Games. On my spare time I usually focus on researching whatever question or topic is on my mind. At least till I'm satisfied coming to my own conclusions or solutions. I often find myself in my mind, I believe it's a great trait for problem-solving, critical-thinkging and innovating. I always bring my best thoughts to the table. </p>
    
    </div>
    </>
  )
}

export default AboutPage