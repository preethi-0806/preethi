import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      login(user);
      navigate('/products');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>LOGIN</h2>
        <div className="input-container">
          <i className="icon email-icon" />
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <i className="icon password-icon" />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="remember-me">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>
        <div className="or">Or login with</div>
        <div className="social-buttons">
          <button className="facebook-btn">Facebook</button>
          <button className="google-btn">Google</button>
        </div>
        <p className="signup-text">
          Not a member? <span onClick={() => navigate('/register')}>Sign up now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
