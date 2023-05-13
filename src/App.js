import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.scss";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element = {<RecipePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
