import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import './Navigation.css';

function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              HomePage
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink
                to={`/users/${user.id}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                My Profile
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
