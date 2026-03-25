// This component required some help from AI tools to figure out the
// proper structure for updating and submitting functions.

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from '../App.module.css'

const EditContact = ({ contacts, updateContact }) => {
    const [updateName, setUpdateName] = useState('')
    const [updateEmail, setUpdateEmail] = useState('')
    const [updatePhone, setUpdatePhone] = useState('')
    const [updateAddress, setUpdateAddress] = useState('')

    const { id } = useParams()
    // Used to navigate the user back to the Contact List view
    const navigate = useNavigate()
    const contact = contacts.find(c => c.id === id)

    // useEffect fills the form from the obtained data
    useEffect(() => {
        if (contact) {
            setUpdateName(contact.name)
            setUpdateEmail(contact.email)
            setUpdatePhone(contact.phone)
            setUpdateAddress(contact.address)
        }
    }, [contact])

    if (!contact) {
        return (
            <h3>Could not find the contact.</h3>
        )
    }

    // Handles form information and submission
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!updateName.trim() || !updatePhone.trim()) {
            alert(
                'Contact information must have at least name and phone number!'
            )
            return
        }
        // Replace contact info with updated info
        const updatedContact = {
            id,
            name: updateName,
            email: updateEmail,
            phone: updatePhone,
            address: updateAddress
        }

        updateContact(updatedContact)
        // Navigates back to the Contact List view after saving changes
        navigate('/contactlist')
    }

    return (
            <div className={styles.card}>
                <div className={styles.container}>
                <h2>Update Contact</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        value={updateName}
                        onChange={(e) => setUpdateName(e.target.value)}
                        placeholder='Enter new name...'
                    />
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        type='text'
                        value={updateEmail}
                        onChange={(e) => setUpdateEmail(e.target.value)}
                        placeholder='Enter new email...'
                    />
                    <label htmlFor='phone'>Phone Number:</label>
                    <input
                        type='text'
                        value={updatePhone}
                        onChange={(e) => setUpdatePhone(e.target.value)}
                        placeholder='Enter new phone number...'
                    />
                    <label htmlFor='address'>Home Address:</label>
                    <input
                        type='text'
                        value={updateAddress}
                        onChange={(e) => setUpdateAddress(e.target.value)}
                        placeholder='Enter new home address...'
                    />
                    <button className={styles.buttonAdd} type='submit'>Save Changes</button>
            </form>
            </div>
            </div>
        )

}

export default EditContact