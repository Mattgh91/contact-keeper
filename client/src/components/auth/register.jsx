import React, { useState, useContext } from 'react';
import alertContext from '../../context/alert/AlertContext';

const Register = () => {
    const AlertContext = useContext(alertContext);

    const { setAlert } = AlertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const {
        name,
        email,
        password,
        password2,
    } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log('password: ', password);

        if(name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if(password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else if (password.length < 6) {
            setAlert('Password must be 6+ characters long.', 'danger');
        } else {
            console.log('Register submit: ', e);
        }
    };

    return (
        <div className="form-container ">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
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
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Repeat Password</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    );
};

export default Register;
