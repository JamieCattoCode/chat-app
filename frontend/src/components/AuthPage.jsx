import React, { useState } from 'react';

import authenticateUser from '../requests';

const AuthPage = ({ onAuth }) => {
  const [username, setUsername] = useState('');

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser(username)
      .then((res) => onAuth({ ...res.data, secret: username }))
      .catch((err) => console.log(err));

    onAuth({ username, secret: username });
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-title">Welcome!</div>
        <div className="form-subtitle">Set a username to get started.</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            name="username"
            value={username}
            onChange={handleNameChange}
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthPage;
