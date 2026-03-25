import { NavLink } from 'react-router-dom'
import styles from '../App.module.css'

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
        <h1>List of Contacts</h1>
                {contacts.map(contact =>
                <div key={contact.id} className={styles.cardInner}>
                    <NavLink
                        to={`/contacts/${contact.id}`}
                        className={styles.cardLink}>
                        <p>Name: {contact.name}</p>
                    </NavLink>
                    <p>Phone Number: {contact.phone}</p>
                    <button className={styles.buttonDelete}
                        onClick={() => deleteContact(contact.id)}>
                        Delete Contact
                    </button>
                    <NavLink
                        to={`/edit/${contact.id}`}>
                        <button className={styles.buttonEdit}>Edit Contact</button>
                    </NavLink>
                    </div>
                )}
        </div>
        </div>
    )
}

export default ContactList