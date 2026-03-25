import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import ContactDetails from './components/ContactDetails'
import ContactList from './components/ContactList'
import Navbar from './components/Navbar'
import initialContacts from './data/initialContacts'

const App = () => {
    const [contacts, setContacts] = useState(initialContacts)

    // Handles adding a new contact to a contact list
    const addContact = (contact) => {
        setContacts([...contacts, contact])
    }

    // Handles deleting a contact from the list
    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id))
    }

    // Handles updating contact information
    const updateContact = (updatedContact) => {
        setContacts(contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        ))

    }

    return (
        <Router>
            <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contactlist' element={<ContactList
                            deleteContact={deleteContact}
                            contacts={contacts}/>}
                        />
                        <Route path='/addcontact' element={<AddContact
                            addContact={addContact} />}
                        />
                        <Route path='/edit/:id' element={<EditContact
                            contacts={contacts}
                            updateContact={updateContact} />}
                        />
                        <Route path='/contacts/:id' element={<ContactDetails
                        contacts={contacts} />}
                        />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
        </Router>
    )
}

export default App