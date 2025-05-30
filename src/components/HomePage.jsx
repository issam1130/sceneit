import React, { useState, useEffect, useContext } from 'react';
import { posts as staticPosts } from './posts'; 
import './HomePage.css';
import CreatePost from './CreatePost';
import { UserContext } from '../Contexts/UserContext'; 
import Post from './Post'; 

function HomePage() {
  const [localPosts, setLocalPosts] = useState([]);
  const { user } = useContext(UserContext); 

  useEffect(() => {
    const stored = localStorage.getItem('sceneit_posts');
    if (stored) setLocalPosts(JSON.parse(stored));
  }, []);

  const handleAddPost = (newPosts) => {
    setLocalPosts(newPosts);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = localPosts.filter((post) => post.id !== postId);
    localStorage.setItem('sceneit_posts', JSON.stringify(updatedPosts));
    setLocalPosts(updatedPosts);
  };

  return (
    <div className="homepage">
      <h1>Feed</h1>
      <CreatePost onAddPost={handleAddPost} />

      <div className="posts">
        {localPosts.length > 0 &&
          localPosts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onDelete={handleDeletePost}
              isUserPost={post.username === user?.username}
            />
          ))}

        {staticPosts.length > 0 &&
          staticPosts.map((post) => (
            <Post key={`static-${post.id}`} post={post} />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
