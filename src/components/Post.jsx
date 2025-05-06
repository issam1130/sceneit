import React, { useState } from 'react';

function Post({ post, onDelete, isUserPost }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="post">
      <div className="post-header">
        <img
          src={post.profilePicture}
          alt={`${post.username}'s profile`}
          className="profile-picture"
        />
        <div>
          <h2>{post.username}</h2>
          <p>{post.timestamp}</p>
        </div>
      </div>

      <p>{typeof post.content === "string" ? post.content : "Invalid content"}</p>
      {post.image && <img src={post.image} alt="Post content" className="post-image" />}

      <div className="post-footer">
        <button onClick={handleLike}>Clap</button>
        <p>{likes} Clappers</p>
        <p>{post.comments} Comments</p>

        {isUserPost && (
          <button onClick={() => onDelete(post.id)} className="delete-btn">
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
