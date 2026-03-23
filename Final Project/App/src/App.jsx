import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AddContact from './components/AddContact'
import ContactDetails from './components/ContactDetails'
import ContactList from './components/ContactList'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <Router>
            <Navbar />
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contactlist' element={<ContactList />} />
                        <Route path='/addcontact' element={<AddContact />} />
                        <Route path='/contactdetails' element={<ContactDetails />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
        </Router>
    )
}

export default App