import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    )
}

export default Navbar