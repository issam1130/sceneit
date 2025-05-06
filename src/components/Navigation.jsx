import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import './Navigation.css';

function Navigation() {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <div className="navigation">
   
      <div className="logo">
        <NavLink to="/" className="nav-link logo-link">
          <img src="/clapper.png" alt="SceneIt Logo" />
        </NavLink>
      </div>

     
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">HomePage</NavLink>
          </li>
          <li><NavLink to="/recommend" className="nav-link"> Movie Recommendation</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/bored" className="nav-link">Bored?</NavLink></li>
       
        </ul>
      </nav>

    
      <div className="profile-login">
       {user ? (
  <>
    <NavLink to={`/users/${user.id}`} className="nav-link">
      <img 
        src={user.profilePicture} 
        alt={`${user.username}'s profile`} 
        className="user-profile-pic" 
      />
    </NavLink>

   
  </>
) : (
  <NavLink to="/login" className="nav-link">Login</NavLink>
)}

      </div>
    </div>
  );
}

export default Navigation;
