import React, { useState } from "react";
import axios from "axios";

export default function Signup( {setUserId, onSignupSuccess, onAlreadyHaveAccount}) {
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
    <form onSubmit={handleSignup}>
      <h1>Signup</h1>
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
      <button type="submit">Signup</button>
      <div onClick={onAlreadyHaveAccount}>already have account?</div>
    </form>

  );
}
