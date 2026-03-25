import { useParams } from "react-router-dom"
import styles from '../App.module.css'

const ContactDetails = ({ contacts }) => {
    const { id } = useParams()

    // Find the correct contact from the list
    const contact = contacts.find(c => c.id === id)
    if(!contact) {
        return (
            <h2>Could not find the contact.</h2>
        )
    }

    return(
        <div className={styles.card}>
            <div className={styles.container}>
        <h1>Contact Details</h1>
        <div className={styles.cardInner}>
            <h3>Name: {contact.name}</h3>
            <p>Email Address: {contact.email}</p>
            <p>Phone Number: {contact.phone}</p>
            <p>Home Address: {contact.address}</p>
            </div>
        </div>
        </div>
    )
}

export default ContactDetails