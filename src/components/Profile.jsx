import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getStoredPosts } from "../utils/storage";
import Post from "./Post"; 
import './Profile.css';

function Profile() {
  const { user, handleLogout } = useContext(UserContext);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (user) {
      const posts = getStoredPosts();
      const userSpecificPosts = posts.filter(post => post.username === user.username);
      setUserPosts(userSpecificPosts);
    }
  }, [user]);

  const handleDeletePost = (postId) => {
    const updatedPosts = userPosts.filter((post) => post.id !== postId);
    localStorage.setItem('sceneit_posts', JSON.stringify(updatedPosts));
    setUserPosts(updatedPosts);
  };

  if (!user) {
    return <p>Please log in to see your profile.</p>;
  }

  return (
    <div className="profile-page" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="profile-content" style={{ flex: 1 }}>
        <div className="profile-header">
          <h1>Welcome, {user.username}!</h1>
          <img src={user.profilePicture} alt={`${user.username}'s profile`} className="profile-picture-large" />
          <p>User ID: {user.id}</p>
        </div>

        <div className="user-posts">
          <h2>Your Posts</h2>
          {userPosts.length > 0 ? (
            userPosts.map(post => (
              <Post
                key={post.id}
                post={post}
                onDelete={handleDeletePost}
                isUserPost={true} 
              />
            ))
          ) : (
            <p>You haven't posted anything yet.</p>
          )}
        </div>
      </div>

      <footer className="logout-footer">
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </footer>
    </div>
  );
}

export default Profile;
