import React, { createContext, useState } from "react";
import users from "./data.js";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const handleLogin = (loginData) => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === loginData.username &&
        users[i].password === loginData.password
      ) {
        setUser({
          id: users[i].id,
          username: users[i].username,
          profilePicture: users[i].profilePicture,
        });
        return true; 
      }
    }
    return false; 
  };

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;