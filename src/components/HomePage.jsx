import React, { useState } from 'react';
import { posts } from './posts'; 
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Feed</h1>

      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function Post({ post }) {

  const [likes, setLikes] = useState(post.likes);

 
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
   
      <div className="post-header">
        <img src={post.profilePicture} alt={`${post.username}'s profile`} className="profile-picture" />
        <div>
          <h2>{post.username}</h2>
          <p>{post.timestamp}</p>
        </div>
      </div>

      <p>{post.content}</p>

   
      <img src={post.image} alt="Post content" className="post-image" />

   
      <div className="post-footer">
        <button onClick={handleLike}>Like</button>
        <p>{likes} Likes</p>
        <p>{post.comments} Comments</p>
      </div>
    </div>
  );
}

export default HomePage;
