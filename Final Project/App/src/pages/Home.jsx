import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h3>Select your action:</h3>
                <Link to='/contactlist'>
                <button>Contact List</button>
                </Link>
                <Link to='/addcontact'>
                <button>Add Contact</button>
                </Link>
        </div>
    )
}

export default Home