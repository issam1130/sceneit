import React, { useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function CreatePost({ onAddPost }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useContext(UserContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    const newPost = {
      id: Date.now(),
      username: user.username,
      profilePicture: user.profilePicture,
      content,
      image,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      comments: 0,
    };

    const stored = JSON.parse(localStorage.getItem("sceneit_posts")) || [];
    const updated = [newPost, ...stored];
    localStorage.setItem("sceneit_posts", JSON.stringify(updated));
    onAddPost(updated);
    setContent("");
    setImage(null);
  };

  if (!user) {
    return (
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Log in to create a post.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Have you SceneIt? Let other clappers know..."
        rows="4"
        required
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
