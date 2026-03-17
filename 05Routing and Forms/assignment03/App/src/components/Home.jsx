import styles from '/src/App.module.css'
import homepic from '/src/assets/duplo1.png'

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <div className="content">
                <p>Welcome to my site!</p>
                <img src={homepic} alt="Duplo yummy" />
            </div>
        </div>
    )
}

export default Home