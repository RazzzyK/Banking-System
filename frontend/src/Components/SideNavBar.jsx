import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../CSS/SideNavBar.css'; // Import the CSS file for the component
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../Redux/actions';



export const SideNavBar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  // Function to handle user logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn ? (
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
            <li className="nav-item">
              <Link to="/" className='active-link' onClick={handleLogout}>Log Out</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="side-navbar">
          <ul>
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/login">
              <li className="nav-item">Login</li>
            </Link>
            <Link to="/register">
              <li className="nav-item">Register</li>
            </Link>
            <Link to="/">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/">
              <li className="nav-item">Espanol</li>
            </Link>
            <Link to="/">
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </nav>
      )};
    </div>
  );
}