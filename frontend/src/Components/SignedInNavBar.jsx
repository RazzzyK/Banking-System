import React from 'react';
import '../CSS/SideNavBar.css'; // Import the CSS file for the component
import { NavLink, Link } from 'react-router-dom';

export const SignedInNavBar = () => {
    return (
        <nav className="side-navbar">
            <ul>
                <li className="nav-item active">
                    <NavLink to="/dashboard" className='active-link'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <Link to="/" className='active-link'>Transactions</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className='active-link'>Cards</Link>
                </li>
                <li className="nav-item">Settings</li>
                <li className="nav-item">Support</li>
                <li className="nav-item">Log Out</li>
            </ul>
        </nav>
    );
}