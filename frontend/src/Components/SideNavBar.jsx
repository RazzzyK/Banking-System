import React from 'react';
import '../CSS/SideNavBar.css'; // Import the CSS file for the component

export const SideNavBar = () => {
  return (
    <div className="side-navbar">
      <ul>
        <li className="nav-item active">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
}

// export default SideNavBar;