import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Matt Haynes',
                email: 'mattgh9152@gmil.aomc',
                phone: '01220822v80',
                type: 'professional',
            },
            {
                id: 2,
                name: 'James D',
                email: 'hello.com',
                phone: '01709 4335',
                type: 'personal',
            },
            {
                id: 3,
                name: 'Himon Sill',
                email: 'heyyyyoooo.co.uk',
                phone: '01709 1928282',
                type: 'personal',
            },
        ],
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    // Delete contact

    // Set current contact

    // Clear current contact

    // Update contact

    // Filter contacts

    // Clear filter

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
            }}
        >
            { props.children }
        </contactContext.Provider>
    )
};

export default ContactState;
