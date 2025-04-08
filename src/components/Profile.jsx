import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import './Profile.css'; 

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Please log in to see your profile.</p>;
  }

  return (
    <div className="profile">
      <h1>Welcome, {user.username}!</h1>
      <img src={user.profilePicture} alt={`${user.username}'s profile`} className="profile-picture" />
      <p>User ID: {user.id}</p>
    </div>
  );
}

export default Profile;
