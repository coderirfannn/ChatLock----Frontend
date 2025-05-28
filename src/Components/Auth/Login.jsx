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
    <div className="login-bg">
      <div className="login-main">
        <h1 className="login-title">ChatLock</h1>
        <h2 className="login-welcome">Welcome back</h2>
        <div className="login-subtext">Sign in to your account to continue</div>
        <form className="login-form" autoComplete="on">
          <div className="login-field">
            <label htmlFor="email" className="login-label">Email</label>
            <input
              className="login-input"
              id="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="password" className="login-label">Password</label>
              <a className="login-forgot" href="#">Forgot password?</a>
            </div>
            <input
              className="login-input"
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">Sign In</button>
        </form>
        <div className="login-or">
          <div className="login-or-line" />
          <span className="login-or-text">OR CONTINUE WITH</span>
          <div className="login-or-line" />
        </div>
        <div className="login-social-row">
          <button className="login-social-btn">
            <GoogleIcon />
            Google
          </button>
          <button className="login-social-btn">
            <GitHubIcon />
            GitHub
          </button>
        </div>
        <div className="login-signup">
          Don't have an account?
          <a className="login-signup-link" href="#">Sign up</a>
        </div>
      </div>
      <style>{`
        .login-bg {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(180deg, #f7ecfc 0%, #fff 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          font-family: 'Inter', Arial, sans-serif;
        }
        .login-main {
          margin: 60px auto 0 auto;
          width: 100%;
          max-width: 450px;
          background: rgba(255,255,255,0.86);
          border-radius: 18px;
          box-shadow: 0 6px 32px 0 rgba(80, 44, 136, 0.09);
          padding: 44px 38px 32px 38px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .login-title {
          color: #8d39d6;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.1em;
          text-align: center;
          letter-spacing: -1px;
        }
        .login-welcome {
          color: #18181b;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.25em 0;
          text-align: center;
        }
        .login-subtext {
          color: #6b7280;
          font-size: 1.12rem;
          margin-bottom: 2.3em;
          text-align: center;
          font-weight: 400;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.1em;
        }
        .login-field {
          display: flex;
          flex-direction: column;
        }
        .login-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .login-label {
          font-weight: 600;
          font-size: 1.04rem;
          color: #18181b;
          margin-bottom: 0.15em;
        }
        .login-forgot {
          color: #a259e9;
          font-size: 1.01rem;
          text-decoration: none;
          font-weight: 500;
          transition: text-decoration 0.2s, color 0.2s;
        }
        .login-forgot:hover {
          text-decoration: underline;
          color: #7c3aed;
        }
        .login-input {
          width: 100%;
          padding: 13px 14px;
          border-radius: 6px;
          border: 1.5px solid #e5e7eb;
          font-size: 1.08rem;
          outline: none;
          margin-bottom: 0.1em;
          background: #fff;
          transition: border 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .login-input:focus {
          border: 1.5px solid #a259e9;
          box-shadow: 0 0 0 2px #e9d5ff;
        }
        .login-btn {
          width: 100%;
          background: linear-gradient(90deg, #a259e9 10%, #7c3aed 90%);
          color: #fff;
          font-weight: 600;
          font-size: 1.13rem;
          padding: 13px 0;
          border: none;
          border-radius: 8px;
          margin-top: 0.7em;
          cursor: pointer;
          box-shadow: 0 2px 12px 0 rgba(162,89,233,0.08);
          transition: background 0.2s, transform 0.1s;
        }
        .login-btn:hover {
          background: linear-gradient(90deg, #7c3aed 10%, #a259e9 90%);
          transform: translateY(-2px) scale(1.01);
        }
        .login-or {
          display: flex;
          align-items: center;
          margin: 2em 0 1.3em 0;
        }
        .login-or-line {
          flex: 1;
          height: 1px;
          background: #ececec;
        }
        .login-or-text {
          margin: 0 12px;
          color: #888;
          font-size: 1.01rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .login-social-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
          margin-bottom: 1.7em;
        }
        .login-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          background: #fff;
          padding: 10px 0;
          font-weight: 500;
          font-size: 1.07rem;
          cursor: pointer;
          transition: border 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px 0 rgba(80, 44, 136, 0.03);
        }
        .login-social-btn:hover {
          border: 1.5px solid #a259e9;
          box-shadow: 0 4px 16px 0 rgba(162,89,233,0.09);
        }
        .login-signup {
          color: #888;
          font-size: 1.08rem;
          margin-top: 1.7em;
          text-align: center;
        }
        .login-signup-link {
          color: #a259e9;
          margin-left: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: text-decoration 0.2s, color 0.2s;
        }
        .login-signup-link:hover {
          text-decoration: underline;
          color: #7c3aed;
        }
        @media (max-width: 540px) {
          .login-main {
            padding: 28px 8vw 26px 8vw;
            max-width: 98vw;
          }
          .login-form {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
