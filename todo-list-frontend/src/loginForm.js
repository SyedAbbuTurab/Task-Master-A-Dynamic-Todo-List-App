import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks/login', { username, password });
      if (response.data.success) {
        // Save userId in the frontend state
        const userId = response.data.userId;
        onLogin(userId); // Pass user ID to parent component
        // window.location.href = 'http://localhost:5000/api/tasks'; // Redirect to tasks page
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Failed to login. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
