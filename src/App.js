import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";


import HomePage from "./pages/HomePage/HomePage"
import RecipePage from "./pages/RecipePage/RecipePage";
import SavedMealsPage from "./pages/SavedMealsPage/SavedMealsPage";
import JournalPage from "./pages/JournalPage/JournalPage"
import "./App.scss";



function App() {

  const [savedMeals, setSavedMeals] = useState([]);
  const [userId, setUserId] = useState ("")


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setUserId={setUserId}/>} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/saved-meals" element={<SavedMealsPage savedMeals={savedMeals} setSavedMeals={setSavedMeals} userId={userId}/>} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
