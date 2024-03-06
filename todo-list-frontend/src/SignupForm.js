import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks/register', { username, password });
      window.location.reload(); // Reload the page after successful signup
    } catch (error) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
