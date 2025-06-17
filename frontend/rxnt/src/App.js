import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) {
    return <LoginForm onLogin={(token) => setToken(token)} />;
  }

  return (
    <div className="App">
      <h1>Welcome to RXNT!</h1>
    </div>
  );
}

export default App;
