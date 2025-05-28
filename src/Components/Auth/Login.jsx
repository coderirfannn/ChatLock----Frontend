import React from 'react';
import '../authcss/Login.css'; // External CSS file
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with actual navigation logic, like using React Router
    window.location.href = '/dashboard'; 
  };

  return (
    <div className="container">
      <h1>ChatLock</h1>
      <h2>Welcome back</h2>
      <p>Sign in to your account to continue</p>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="name@example.com" required />
        <input type="password" placeholder="Password" required />
        <div className="forgot"><a href="#">Forgot password?</a></div>
        <button type="submit" className="btn">Sign In</button>
      </form>

      <div className="divider">OR CONTINUE WITH</div>

      <div className="social-buttons">
        <button className="social-button google">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />Google
        </button>
        <button className="social-button github">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="GitHub" />GitHub
        </button>
      </div>

      <div className="signup">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Login;