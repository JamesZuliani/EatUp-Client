import React, { useState } from "react";
import axios from "axios";
import "./Signup.scss";

export default function Signup({
  setUserId,
  onSignupSuccess,
  onAlreadyHaveAccount,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/signup", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUserId(res.data.userId);
        onSignupSuccess();
      })
      .catch((err) => setError(err.response.data.error));
  }

  return (
    <form className="signup" onSubmit={handleSignup}>
      <h1 className="signup__title">Signup</h1>
        <label className="user labels">
          Username:
          <input
            className="user__input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      
        <label className="password labels">
          Password:
          <input
            className="password__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      
      {error && <p className="error">{error}</p>}
      <button type="submit" className="signup__submit button">
        Signup
      </button>
      <div className="login-button button" onClick={onAlreadyHaveAccount}>
        Already have an account?
      </div>
    </form>
  );
}
