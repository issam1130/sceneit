import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import './Login.css'; 

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); 

  const { user, handleLogin } = useContext(UserContext); // Correctly using handleLogin from context
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoginData({ username: "", password: "" });
      navigate(`/users/${user.id}`); // Redirect to the user's profile if logged in
    }
  }, [user, navigate]);

  function handleLoginChange({ target }) {
    setLoginData({ ...loginData, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitting login data:", loginData); // Log data being submitted

    const isValid = handleLogin(loginData);

    if (!isValid) {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
