// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <h1>Ride Sharing App</h1>
      <div className="nav-buttons">
        <Link to="/rider" className="nav-button">Rider</Link>
        <Link to="/sharer" className="nav-button">Sharer</Link>
      </div>
    </div>
  );
}

export default Navigation;
