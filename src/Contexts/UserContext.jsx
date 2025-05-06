import React, { createContext, useState, useEffect } from "react";
import users from "./data.js"; // Ensure this is pointing to the correct users data file

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check for saved user data in localStorage on app load
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = (loginData) => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === loginData.username &&
        users[i].password === loginData.password
      ) {
        const loggedInUser = {
          id: users[i].id,
          username: users[i].username,
          email: users[i].email,
          profilePicture: users[i].profilePicture,
        };

        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        return true;
      }
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
