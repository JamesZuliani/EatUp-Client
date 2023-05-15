import React, { useState } from "react";
import axios from "axios";

export default function Login({ onLoginSuccess, setUserId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/login", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUserId(res.data.userId)
        onLoginSuccess();
        
      })
      .catch((err) => setError(err.response.data.error));
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
