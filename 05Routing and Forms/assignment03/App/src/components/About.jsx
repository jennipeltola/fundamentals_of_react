import styles from '/src/App.module.css'
import aboutpic from '/src/assets/duplo2.png'

const About = () => {
    return(
        <div className={styles.about}>
            <h1>About</h1>
            <div className="content">
                <p>I am a student at TAMK with the goal of becoming a Software Developer
                    or an UI/UX Designer.</p>
                    <img src={aboutpic} alt="Duplo happy" />
            </div>
        </div>
    )
}

export default About