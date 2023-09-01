import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import DashBoard from "../../components/DashBoard/DashBoard";

export default function HomePage({ setUserId }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleSignupSuccess = () => {
    setLoggedIn(true);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleAlreadyHaveAccount = () => {
    setShowLogin(true);
  };

  const onLoggedOut = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <>
        <Header onLoggedOut={onLoggedOut}/>
        <DashBoard />
      </>
    );
  }

  if (showLogin) {
    return (
      <>
        <AuthHeader />
        <Login setUserId={setUserId} onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  return (
    <>
      <AuthHeader />
      <Signup
        setUserId={setUserId}
        onSignupSuccess={handleSignupSuccess}
        onAlreadyHaveAccount={handleAlreadyHaveAccount}
      />
    </>
  );
}
