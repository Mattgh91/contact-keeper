import React, { useReducer } from 'react';
import uuid from 'uuid';
import alertContext from './AlertContext';
import alertReducer from './AlertReducer';
import {REMOVE_ALERT, SET_ALERT} from '../types';

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set Alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid.v4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id },
        });

        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT,
                payload: id,
            });
        }, timeout);
    };

    return (
        <alertContext.Provider
            value={{
                alerts: state,
                setAlert,
            }}
        >
            { props.children }
        </alertContext.Provider>
    )
};

export default AlertState;
