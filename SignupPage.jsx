// SignupPage.js
import React, { useState } from 'react';
import './SignupPage.css'; // Import the associated CSS file

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup clicked with:', { email, password });
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <label className="signup-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
          required
        />
        <label className="signup-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
      <p className="signup-paragraph">
        Already have an account? <a href="/login" className="signup-link">Login</a>
      </p>
    </div>
  );
};

export default SignupPage;
