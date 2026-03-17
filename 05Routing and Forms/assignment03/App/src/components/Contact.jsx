import styles from '/src/App.module.css'
import contactpic from '/src/assets/noodle.png'

const Contact = () => {
    return(
        <div className={styles.contact}>
            <h1>Contact</h1>
            <div className="content">
                <div>
                    <p>Email: jenni.peltola@tuni.fi</p>
                    <p>Phone: 0461234567</p>
                </div>
                    <img src={contactpic} alt="Noodlepals" />
            </div>
        </div>
    )
}

export default Contact