import React, { useState } from "react";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <g>
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.8 33.3 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 3.1l6.1-6.1C34.7 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.1 0 19.7-8 19.7-19.7 0-1.3-.1-2.3-.2-3.3z"/>
      <path fill="#34A853" d="M6.3 14.7l6.7 4.9C14.5 16.3 18.8 13 24 13c3.1 0 5.9 1.1 8.1 3.1l6.1-6.1C34.7 6.2 29.6 4 24 4 16.3 4 9.4 8.6 6.3 14.7z"/>
      <path fill="#FBBC05" d="M24 44c5.6 0 10.7-1.9 14.7-5.2l-6.8-5.6c-2 1.4-4.7 2.4-7.9 2.4-6.1 0-11.3-4.1-13.2-9.6l-6.7 5.1C9.4 39.4 16.3 44 24 44z"/>
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.8 33.3 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 3.1l6.1-6.1C34.7 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.1 0 19.7-8 19.7-19.7 0-1.3-.1-2.3-.2-3.3z"/>
    </g>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path fill="#111" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.32.1-2.75 0 0 .83-.27 2.74 1.05a9.18 9.18 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.32 2.74-1.05 2.74-1.05.54 1.43.2 2.49.1 2.75.63.72 1.01 1.63 1.01 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.58.69.48C19.13 20.57 22 16.76 22 12.26 22 6.58 17.52 2 12 2Z"/>
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">ChatLock</h1>
        <h2 className="login-subtitle">Welcome back</h2>
        <p className="login-description">Sign in to your account to continue</p>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          
          <div className="form-group">
            <div className="password-label-row">
              <label htmlFor="password" className="form-label">Password</label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          
          <button type="submit" className="login-button">Sign In</button>
        </form>
        
        <div className="divider">
          <span className="divider-text">OR CONTINUE WITH</span>
        </div>
        
        <div className="social-buttons">
          <button type="button" className="social-button">
            <GoogleIcon />
            <span>Google</span>
          </button>
          <button type="button" className="social-button">
            <GitHubIcon />
            <span>GitHub</span>
          </button>
        </div>
        
        <p className="signup-text">
          Don't have an account? <a href="#" className="signup-link">Sign up</a>
        </p>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background: linear-gradient(135deg, #f9f3ff 0%, #ffffff 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .login-card {
          width: 100%;
          max-width: 28rem;
          background: white;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        
        .login-title {
          color: #7c3aed;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        
        .login-subtitle {
          color: #18181b;
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.25rem;
        }
        
        .login-description {
          color: #6b7280;
          font-size: 1rem;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }
        
        .password-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .forgot-password {
          font-size: 0.875rem;
          color: #8b5cf6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .forgot-password:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        .form-input {
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }
        
        .login-button {
          background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%);
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }
        
        .login-button:hover {
          background: linear-gradient(90deg, #7c3aed 0%, #6d28d9 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);
        }
        
        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }
        
        .divider-text {
          padding: 0 1rem;
        }
        
        .social-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .social-button:hover {
          border-color: #d1d5db;
          background: #f9fafb;
        }
        
        .signup-text {
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .signup-link {
          color: #8b5cf6;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .signup-link:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .login-card {
            padding: 1.5rem;
            max-width: 100%;
          }
          
          .social-buttons {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .login-container {
            padding: 1rem;
          }
        }
        
        @media (min-width: 1024px) {
          .login-card {
            padding: 3rem;
          }
        }
      `}</style>
    </div>
  );
}






