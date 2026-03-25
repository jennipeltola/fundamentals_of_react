import { useState } from 'react'
import styles from '../App.module.css'

const AddContact = ({ addContact }) => {
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newAddress, setNewAddress] = useState('')

    // Handles contact information and submission
    const handleSubmit = (e) => {
        e.preventDefault()
        // Validate that the input has at least a name and a phone number
        if (!newName.trim() || !newPhone.trim()) {
            alert(
                'Contact information must have at least name and phone number!'
            )
            return
        }
        const contactObject = {
            id: Date.now().toString(),
            name: newName,
            email: newEmail,
            phone: newPhone,
            address: newAddress
        }

        addContact(contactObject)
        setNewName('')
        setNewEmail('')
        setNewPhone('')
        setNewAddress('')
    }

    return (
        <div className={styles.card}>
            <div className={styles.container}>
            <h2>Add new Contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder='Enter name...'
                />
                <label htmlFor='email'>Email Address:</label>
                <input
                    type='text'
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder='Enter email...'
                />
                <label htmlFor='phone'>Phone Number:</label>
                <input
                    type='text'
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder='Enter phone number...'
                />
                <label htmlFor='address'>Home Address:</label>
                <input
                    type='text'
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder='Enter home address...'
                />
                <button className={styles.buttonAdd} type='submit'>Add Contact</button>
        </form>
        </div>
        </div>
    )
}

export default AddContact