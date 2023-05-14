import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RecipePage from "./pages/RecipePage/RecipePage";
import SavedMealsPage from "./pages/SavedMealsPage/SavedMealsPage";
import "./App.scss";



function App() {

  const [savedMeals, setSavedMeals] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saved-meals" element={<SavedMealsPage savedMeals={savedMeals} setSavedMeals={setSavedMeals} />} />
        <Route path="/recipes" element={<RecipePage />} />
        {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
