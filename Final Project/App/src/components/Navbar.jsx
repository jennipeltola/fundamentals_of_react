// Using NavLink in order to create active link style for navbar
import { NavLink } from 'react-router-dom'
import styles from '../App.module.css'

const Navbar = () => {
    return (
            <nav className={styles.navbar}>
                <ul className={styles.navlinks}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive
                                ? `${styles.navlink} ${styles.active}`
                                : styles.navlink
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contactlist'
                            className={({ isActive }) =>
                                isActive
                                ? `${styles.navlink} ${styles.active}`
                                : styles.navlink
                            }
                        >
                            CONTACT LIST
                        </NavLink>
                    </li>
                <li>
                    <NavLink
                        to='/addcontact'
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.navlink} ${styles.active}`
                                : styles.navlink
                        }
                    >
                        ADD CONTACT
                    </NavLink>
                </li>
                </ul>
            </nav>
    )
}

export default Navbar