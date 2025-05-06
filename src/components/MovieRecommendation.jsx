import React, { useState } from "react";
import movies from "../utils/movies.js";
import "./MovieRecommendation.css";

export default function MovieRecommendation() {
  const [recommendedMovie, setRecommendedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRecommend = () => {
    setLoading(true);            
    setRecommendedMovie(null);  

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRecommendedMovie(movies[randomIndex]);
      setLoading(false);         
    }, 3000); 
  };

  return (
    <div className="recommendation-page">
      <h1>🎬 Movie Recommendation</h1>
      <button className="recommend-btn" onClick={handleRecommend}>
        Get Movie Recommendation
      </button>

      {loading && (
        <div className="loading-animation">
            <h1>Choosing a movie...</h1>
          <img src="/filmstrip.gif" alt="Loading animation" />
          <h5>Please note that tha movie selection is limited, as this is just for display!</h5>
        </div>
      )}

      {!loading && recommendedMovie && (
        <div className="movie-card">
          <img src={recommendedMovie.poster} alt={recommendedMovie.title} />
          <h2>{recommendedMovie.title}</h2>
          <p><strong>Director:</strong> {recommendedMovie.director}</p>
          <p><strong>Year:</strong> {recommendedMovie.year}</p>
          <p><strong>Genre:</strong> {recommendedMovie.genre}</p>
          <p>{recommendedMovie.synopsis}</p>
        </div>
      )}

     
    </div>
  );
}
