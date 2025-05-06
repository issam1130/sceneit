import React from "react";
import './About.css';

export default function About() {
  return (
    <div className="about">
      <img src="/SceneItLogo.png" alt="SceneIt Logo" />
      <h1>About SceneIt</h1>
      <p>
        SceneIt is a web application created as part of a class project to
        showcase my skills in web development and user interface design. The
        concept behind SceneIt is to provide a platform where users can share
        and engage with posts related to movies, TV shows, and other forms of
        entertainment. On SceneIt, users can create posts, like and comment on
        others' content, and interact with a vibrant community of fellow
        entertainment enthusiasts. The platform is designed to offer an
        enjoyable and user-friendly experience for those looking to express
        their thoughts, share recommendations, or just enjoy casual discussions
        on their favorite media. Please note that SceneIt is a prototype built
        for educational purposes and is not intended for commercial use. It's a
        personal project designed to help me develop and refine my web
        development skills.
      </p>

      <h2>Logins to try it as a user:</h2>

      <div className="login-details">
        <p><strong>Username:</strong> john_doe <span>Password:</span> password123</p>
        <p><strong>Username:</strong> jane_smith <span>Password:</span> password456</p>
        <p><strong>Username:</strong> alice_walker <span>Password:</span> password789</p>
        <p><strong>Username:</strong> bob_jones <span>Password:</span> password012</p>
      </div>
    </div>
  );
}
