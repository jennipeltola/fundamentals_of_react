import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/contactlist'>CONTACT LIST</Link>
                <Link to='/addcontact'>ADD CONTACT</Link>
            </nav>
        </div>
    )
}

export default Navbar