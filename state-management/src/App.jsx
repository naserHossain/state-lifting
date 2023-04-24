import { useState } from "react";
const CONTACT_FORM_INIT_STATE = {
    name: "",
    email: "",
};
const ContactForm = ({ getContact }) => {
    const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
    const { name, email } = values;

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getContact(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <br />
            <input type="submit" value={"create new contact"} />
        </form>
    );
};

const Table = ({ contacts }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Email:</th>
                    <th>Name: </th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => {
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                    </tr>;
                })}
            </tbody>
        </table>
    );
};

const App = () => {
    const [contacts, setContacts] = useState([]);
    const getContact = (contact) => {
        setContacts([].concat(contacts, contact));
    };
    return (
        <div>
            <h2>Contact App</h2>
            <ContactForm getContact={getContact} />
            <Table contacts={contacts} />
        </div>
    );
};

export default App;
