import React, { useState } from "react";
import axios from "axios";
import "./Login.scss"

export default function Login({ onLoginSuccess, setUserId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND}/auth/login`, { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUserId(res.data.userId)
        onLoginSuccess();
        
      })
      .catch((err) => setError(err.response.data.error));
  }

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1 className="login__title"> Login</h1>
      <label className="user--login labels--login">
        Username:
        <input className="user__input--login"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="password--login labels--login">
        Password:
        <input
        className="password__input--login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p className="error--login">{error}</p>}
      <button type="submit" className="login__submit">Login</button>
    </form>
  );
}
