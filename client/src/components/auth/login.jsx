import React, { useState, useContext, useEffect } from 'react';
import authContext from '../../context/auth/AuthContext';
import alertContext from '../../context/alert/AlertContext';

const Login = props => {
    const AlertContext = useContext(alertContext);
    const AuthContext = useContext(authContext);

    const { setAlert } = AlertContext;
    const { loginUser, error, clearErrors, isAuthenticated } = AuthContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'Invalid credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    const onSubmit = e => {
        e.preventDefault();

        if (email === '' || password === '') {
           setAlert('Please complete all fields', 'danger');
        } else {
            loginUser({
                email,
                password,
            });
        }
    };

    return (
        <div className="form-container ">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    );
};

export default Login;
