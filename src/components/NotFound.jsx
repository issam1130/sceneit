import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found">
      <img src="/notfound.png" alt="Page not found" className="not-found-img" />
      <h1>404 - Page Not Found</h1>
      <p>Redirecting you to the homepage...</p>
    </div>
  );
}

export default NotFound;



