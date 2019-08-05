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
        current: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    };

    // Set current contact
    const setCurrent =contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // Filter contacts

    // Clear filter

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
            }}
        >
            { props.children }
        </contactContext.Provider>
    )
};

export default ContactState;
