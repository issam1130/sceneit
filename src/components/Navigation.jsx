import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import './Navigation.css';

function Navigation() {
  const { user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navigation">
 
      <div className="logo">
        <NavLink to="/" className="nav-link logo-link">
          <img src="/clapper.png" alt="SceneIt Logo" />
        </NavLink>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>


      <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Feed</NavLink></li>
          <li><NavLink to="/recommend" className="nav-link" onClick={() => setMenuOpen(false)}>Movie Recommendation</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/bored" className="nav-link" onClick={() => setMenuOpen(false)}>Bored?</NavLink></li>
          <li className="mobile-profile">
            {user ? (
              <NavLink to={`/users/${user.id}`} className="nav-link" onClick={() => setMenuOpen(false)}>
                <img 
                  src={user.profilePicture} 
                  alt={`${user.username}'s profile`} 
                  className="user-profile-pic" 
                />
                {user.username}
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</NavLink>
            )}
          </li>
        </ul>
      </nav>

      <div className="profile-login desktop-only">
        {user ? (
          <NavLink to={`/users/${user.id}`} className="nav-link">
            <img 
              src={user.profilePicture} 
              alt={`${user.username}'s profile`} 
              className="user-profile-pic" 
            />
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav-link">Login</NavLink>
        )}
      </div>
    </div>
  );
}

export default Navigation;
