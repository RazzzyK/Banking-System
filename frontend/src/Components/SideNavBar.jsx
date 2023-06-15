import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../CSS/SideNavBar.css'; // Import the CSS file for the component
import { NavLink, Link, useLocation } from 'react-router-dom';
import { logout } from '../Redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const SideNavBar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [activeLink, setActiveLink] = useState('home');
  const dispatch = useDispatch();
  const location = useLocation();

  // Function to handle user logout
  const handleLogout = () => {
    toast.success('Log Out', { position: toast.POSITION.TOP_RIGHT });
    dispatch(logout());

  };

  useEffect(() => {
    // Extract the path name from the current location
    const pathname = location.pathname;
    console.log(pathname);
    // Update the active link based on the current path name
    setActiveLink(pathname);
    // switch (pathname) {
    //   case: '/logout'
    //     toast.success('Login Sucuessful', { position: toast.POSITION.TOP_RIGHT });
    //   default:
    // }
  }, [location.pathname]);

  return (
    <div>
      {isLoggedIn ? (
        <nav className="side-navbar">
          <ul>
            <Link to="/dashboard" className={activeLink === '/dashboard' ? 'active' : ''}>
              <li className="nav-item">Dashboard</li>
            </Link>
            <Link to="/transactions" className={activeLink === '/transactions' ? 'active' : ''}>
              <li className="nav-item">Transactions</li>
            </Link>
            <Link to="/">
              <li className="nav-item">Cards</li>
            </Link>
            <Link to="/">
              <li className="nav-item">Settings</li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">Contact</li>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <li className="nav-item">Log Out</li>
            </Link>
          </ul>
        </nav>
      ) : (
        <nav className="side-navbar">
          <ul>
            <Link exact to="/" className={activeLink === '/' ? 'active' : ''}>
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/login" className={activeLink === '/login' ? 'active' : ''}>
              <li className="nav-item">Login</li>
            </Link>
            <Link to="/register" className={activeLink === '/register' ? 'active' : ''}>
              <li className="nav-item">Register</li>
            </Link>
            <Link to="/">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/">
              <li className="nav-item">Espanol</li>
            </Link>
            <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </nav>
      )};
    </div>
  );
}