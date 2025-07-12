import React, { useState } from 'react';
import './Signup.css'; // reuse your styles

import { Link, useNavigate } from "react-router-dom";



const Login = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token (optional)
        localStorage.setItem('token', data.token);
        setMessage('Login successful');
        navigate('/');

        // Redirect if needed
        // window.location.href = "/dashboard"; 
      } else {
        setMessage(data); // assuming backend sends "Wrong credentials"
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="sign-container">
      <div className="signup-box">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}

          <p className="login-link">
            Don't have an account? <Link to="/Signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
