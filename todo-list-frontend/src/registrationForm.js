// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { username, password });
      console.log("Registration Form", response);
      // Handle successful registration (e.g., display a success message)
    } catch (error) {
      // Handle registration error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
      <Link to="/login">Login</Link> {/* Add login button that navigates to the login page */}
    </form>
  );
}

export default RegistrationForm;
