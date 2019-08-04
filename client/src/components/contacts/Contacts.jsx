import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from "./ContactItem";

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
        </Fragment>
    );
};

Contacts.propTypes = {

};

export default Contacts;
