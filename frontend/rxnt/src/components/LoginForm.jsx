import axios from 'axios';
import { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE}token/`,
        { username, password }
      );

      console.log("Login success:", response.data);
      // Store token in localStorage or app state
    } catch (err) {
      if (err.response) {
        // Backend responded with 4xx or 5xx
        console.error("Login failed:", err.response.data);
      } else if (err.request) {
        // No response received
        console.error("No response from backend:", err.request);
      } else {
        // Something else happened
        console.error("Login error:", err.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
