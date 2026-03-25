import styles from '../App.module.css'

const Home = () => {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.container}>
            <h1>Welcome!</h1>
            <h3>This is a simple contact list web application.</h3>
            <p>The application was built with React, JavaScript and CSS as a
                final project of Fundamentals of React course by Metropolia. To
                add more visuals, NavLink was used instead of regular Link for
                routing as a personal learning experiment. The app was created
                for desktop only, so it might not scale correctly on mobile
                platforms.
            </p>
            <p>From the home page, the user can navigate to Contact List- page,
                which shows the name and phone number of pre-existing and added
                contacts. Add Contact- page is for adding new contacts via the
                provided form.
            </p>
            </div>
            </div>
            <div className={styles.card}>
                <div className={styles.container}>
            <h1>Description of each view</h1>
            <h3>Add Contact</h3>
            <p>The user can use the form to add new contact information in the app.
                Name and phone number fields are mandatory and an alert message
                will pop up if they are left blank. No other validation was
                implemented at this time.
            </p>
            <h3>Contact List</h3>
            <p>The page displays name and phone number of each contact in the
                app. Each contact is shown in a styled card. By clicking the
                name of the contact, the user is taken to a details page
                containing the full information of the contact not shown on the
                Contact List page. The user may delete or edit the contacts
                with their specific buttons.
            </p>
            <h3>Contact Details</h3>
            <p>Contact Details is a dynamic route page that is accessed when
                the user clicks on the name of a contact on the Contact List
                view. The page displays all the information of a selected
                contact (name, phone number, email and home address).
            </p>
            <h3>Edit Contact</h3>
            <p>This view was implemented as an extra for editing contact
                information on its own page. The form is pre-filled with current
                contact data and the validation is the same as for adding new
                contact information. Saving the changes updates the contact
                and redirects back to the Contact List.
            </p>
                </div>
            </div>
        </>
    )
}

export default Home