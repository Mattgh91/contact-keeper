import React, { useReducer } from 'react';
import axios from 'axios';
import authContext from './AuthContext';
import authReducer from './AuthReducer';
import {
    // CONTACT_ERROR,
    // SET_ALERT,
    // REMOVE_ALERT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = () => {
        console.log('Load user');
    };

    // Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg,
            });
        }
    };

    // Login User
    const loginUser = () => {
        console.log('Login user');
    };

    // Logout User
    const logoutUser = () => {
        console.log('Logout user');
    };

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                loginUser,
                logoutUser,
                clearErrors,
            }}
        >
            { props.children }
        </authContext.Provider>
    )
};

export default AuthState;