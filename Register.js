import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    users.push({ email, password });
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    alert('Registered successfully!');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <img src="/logo.png" alt="App Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <h2>Register</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', margin: '10px auto' }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', margin: '10px auto' }}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
