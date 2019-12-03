import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import authContext from '../../context/auth/AuthContext';
import contactContext from '../../context/contact/ContactContext';

const Navbar = ({ title, icon }) => {
    const AuthContent = useContext(authContext);
    const ContactContext = useContext(contactContext);
    const { isAuthenticated, logoutUser, user } = AuthContent;
    const { clearContacts } = ContactContext;

    const onLogout = () => {
        logoutUser();
        clearContacts();
    };

    const authLinks = (
        <>
            <li>Hello { user && user.name }</li>
            <li>
                <a href="#logout" onClick={onLogout}>
                    <i className="fas fa-sign-out-alt"> </i>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </>
    );

    return (
        <nav className="navbar bg-primary">
            <h1>
                <Link to='/'>
                    <i className={icon} /> {title}
                </Link>
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt',
};

export default Navbar;
